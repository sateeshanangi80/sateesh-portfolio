"""Rebuild the portfolio's 1200 x 630 social sharing image with Pillow.

Run from any directory: python scripts/generate-social-preview.py
Uses local system fonts and falls back to DejaVu Sans when available.
"""

from pathlib import Path
import os

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
SCALE = 2
SIZE = (1200, 630)
PAPER = "#fbf9f5"
INK = "#34283e"
MUTED = "#817086"
PURPLE = "#7652b5"
LILAC = "#f0e8f7"
LINE = "#e7deeb"


def font(size: int, weight: str = "regular"):
    windows = Path(os.environ.get("WINDIR", "C:/Windows")) / "Fonts"
    if weight == "bold":
        choices = [windows / "seguisb.ttf", windows / "arialbd.ttf",
                   Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf")]
    else:
        choices = [windows / "segoeui.ttf", windows / "arial.ttf",
                   Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf")]
    for candidate in choices:
        if candidate.is_file():
            return ImageFont.truetype(str(candidate), size * SCALE)
    return ImageFont.load_default(size=size * SCALE)


image = Image.new("RGB", tuple(dimension * SCALE for dimension in SIZE), PAPER)
draw = ImageDraw.Draw(image)


def box(bounds, fill, radius=0, outline=None, width=1):
    scaled = tuple(round(value * SCALE) for value in bounds)
    if radius:
        draw.rounded_rectangle(scaled, radius * SCALE, fill=fill,
                               outline=outline, width=width * SCALE)
    else:
        draw.rectangle(scaled, fill=fill, outline=outline, width=width * SCALE)


def line(points, fill=LINE, width=1):
    draw.line([(round(x * SCALE), round(y * SCALE)) for x, y in points],
              fill=fill, width=width * SCALE)


def text(position, content, size, fill=INK, weight="regular"):
    draw.text(tuple(round(value * SCALE) for value in position), content,
              font=font(size, weight), fill=fill, anchor="lt")


def tracked(position, content, size=11, spacing=2.2, fill=MUTED):
    x, y = position
    selected = font(size, "bold")
    for character in content:
        draw.text((round(x * SCALE), round(y * SCALE)), character,
                  font=selected, fill=fill, anchor="lt")
        x += draw.textlength(character, font=selected) / SCALE + spacing


# Quiet editorial masthead with a small typographic monogram.
box((64, 43, 107, 86), LILAC, radius=12)
text((72, 54), "SA", 20, PURPLE, "bold")
line([(126, 48), (126, 81)])
tracked((145, 59), "CODE. CRAFT. REAL PRODUCTS.", size=10, spacing=2)
tracked((950, 59), "PORTFOLIO / 2026", size=9, spacing=1.35)
line([(64, 111), (1136, 111)])

# The name and target role stay readable even in a small link preview.
tracked((64, 161), "HELLO, I'M", size=11, spacing=2.7)
text((59, 205), "Sateesh Anangi", 79, INK, "bold")
text((64, 307), "Frontend Engineer", 43, PURPLE)
text((66, 381), "React / Next.js / TypeScript", 23, MUTED)

# A factual, compact experience panel provides the secondary reading path.
box((824, 157, 1136, 457), "#ece3f5", radius=23)
tracked((853, 187), "THE EXPERIENCE", size=9, spacing=1.9, fill="#806590")
text((850, 232), "3+", 94, PURPLE, "bold")
text((1000, 296), "years", 24, "#7e5d97")
line([(853, 352), (1107, 352)], fill="#d9cbe6")
text((853, 376), "Building production", 19, "#674d77")
text((853, 405), "web products.", 19, "#674d77")

# Short evidence labels instead of decorative claims or an invented URL.
line([(64, 493), (1136, 493)])
box((64, 527, 70, 533), PURPLE, radius=3)
text((84, 519), "Real-time AI interfaces", 18, INK)
box((373, 527, 379, 533), "#bc95cc", radius=3)
text((393, 519), "Enterprise products", 18, INK)
tracked((851, 525), "DESIGN TO SHIPPED", size=10, spacing=1.7)
line([(1109, 520), (1132, 520), (1132, 543)], fill=PURPLE, width=2)
line([(1110, 542), (1132, 520)], fill=PURPLE, width=2)

output = ROOT / "public" / "social-preview.png"
output.parent.mkdir(parents=True, exist_ok=True)
image.resize(SIZE, Image.Resampling.LANCZOS).save(output, optimize=True)
print(f"Wrote {output} ({SIZE[0]} x {SIZE[1]})")
