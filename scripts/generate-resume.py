"""Regenerate the website's PDF and plain-text resume from its shared content.

Install: python -m pip install -r scripts/requirements-resume.txt
Run:     python scripts/generate-resume.py
"""

from html import escape
import json
from pathlib import Path
import shutil

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, KeepTogether


ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / "src/resume-data.json").read_text(encoding="utf-8"))
profile = data["profile"]
output = ROOT / "output/pdf/Sateesh-Anangi-Frontend-Engineer-Resume.pdf"
output.parent.mkdir(parents=True, exist_ok=True)
public = ROOT / "public"
public.mkdir(exist_ok=True)

INK = colors.HexColor("#17242a")
ACCENT = colors.HexColor("#245a59")
base = dict(fontName="Helvetica", fontSize=10.2, leading=13.1, textColor=INK, alignment=TA_LEFT)
styles = {
    "name": ParagraphStyle("Name", **{**base, "fontName": "Helvetica-Bold", "fontSize": 24, "leading": 27, "spaceAfter": 3}),
    "title": ParagraphStyle("Title", **{**base, "fontSize": 11, "leading": 14, "spaceAfter": 5, "textColor": ACCENT}),
    "contact": ParagraphStyle("Contact", **{**base, "fontSize": 10, "leading": 12.5, "spaceAfter": 2}),
    "section": ParagraphStyle("Section", **{**base, "fontName": "Helvetica-Bold", "fontSize": 10.2, "leading": 13, "spaceBefore": 10, "spaceAfter": 4, "textColor": ACCENT}),
    "body": ParagraphStyle("Body", **{**base, "spaceAfter": 3}),
    "job": ParagraphStyle("Job", **{**base, "fontName": "Helvetica-Bold", "spaceBefore": 3, "spaceAfter": 2}),
    "meta": ParagraphStyle("Meta", **{**base, "fontSize": 10, "leading": 12.5, "spaceAfter": 3}),
    "bullet": ParagraphStyle("Bullet", **{**base, "leftIndent": 10, "firstLineIndent": -8, "spaceAfter": 3}),
}


def para(text, style="body"):
    return Paragraph(text, styles[style])


def linked(url, label):
    return f'<link href="{escape(url, quote=True)}" color="#245a59">{escape(label)}</link>'


story = [
    para(escape(profile["name"]), "name"),
    para(escape(f'{profile["title"]} | {profile["specialization"]}'), "title"),
    para(" | ".join([escape(profile["location"]), escape(profile["phone"]), linked("mailto:" + profile["email"], profile["email"])]), "contact"),
    para(" | ".join([linked(profile["linkedIn"], profile["linkedIn"].replace("https://www.", "")), linked(profile["github"], profile["github"].replace("https://", ""))]), "contact"),
    para("PROFESSIONAL SUMMARY", "section"),
    para(escape(data["summary"])),
    para("TECHNICAL SKILLS", "section"),
]
for skill in data["skills"]:
    story.append(para(f'<b>{escape(skill["label"])}:</b> {escape(skill["items"])}'))

story.append(para("WORK EXPERIENCE", "section"))
for job in data["experience"]:
    heading = f'{job["role"]} | {job["company"]}'
    meta = job["period"] + (f' | {job["location"]}' if job["location"] else "")
    # Keep the heading with the first bullet; never orphan a role on a page.
    story.append(KeepTogether([para(escape(heading), "job"), para(escape(meta), "meta"), para("- " + escape(job["highlights"][0]), "bullet")]))
    for item in job["highlights"][1:]:
        story.append(para("- " + escape(item), "bullet"))

story.append(para("SELECTED PROJECTS", "section"))
for project in data["projects"]:
    story.append(KeepTogether([
        para(linked(project["url"], project["name"]) + " | " + escape(project["type"]), "job"),
        para(escape(project["description"])),
    ]))

story.append(para("EDUCATION", "section"))
for item in data["education"]:
    story.append(para(f'<b>{escape(item["degree"])}</b> | {escape(item["institution"])} | {escape(item["year"])}'))

doc = SimpleDocTemplate(
    str(output), pagesize=A4, rightMargin=38, leftMargin=38, topMargin=32, bottomMargin=30,
    title=f'{profile["name"]} - Frontend Engineer Resume', author=profile["name"],
    subject="React, Next.js, TypeScript frontend engineering experience", pageCompression=1,
)
doc.build(story)
shutil.copyfile(output, public / "resume.pdf")

lines = [profile["name"].upper(), profile["title"] + " | " + profile["specialization"],
         " | ".join(profile[key] for key in ("location", "phone", "email")), profile["linkedIn"], profile["github"],
         "", "PROFESSIONAL SUMMARY", data["summary"], "", "TECHNICAL SKILLS"]
lines.extend(skill["label"] + ": " + skill["items"] for skill in data["skills"])
lines.extend(["", "WORK EXPERIENCE"])
for job in data["experience"]:
    lines.extend([job["role"] + " | " + job["company"], job["period"] + (" | " + job["location"] if job["location"] else "")])
    lines.extend("- " + item for item in job["highlights"])
    lines.append("")
lines.append("SELECTED PROJECTS")
for project in data["projects"]:
    lines.extend([project["name"] + " | " + project["type"], project["url"], project["description"]])
lines.extend(["", "EDUCATION"])
lines.extend(" | ".join(item[key] for key in ("degree", "institution", "year")) for item in data["education"])
(public / "resume.txt").write_text("\n".join(lines) + "\n", encoding="utf-8")
print(f"Generated: {output.relative_to(ROOT)}, public/resume.pdf, public/resume.txt")
