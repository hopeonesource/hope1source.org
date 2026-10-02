"""Regenerate public/og.png and public/apple-touch-icon.png.

Requires Pillow and Liberation fonts (present on the build VM). Not part of npm.
"""

from PIL import Image, ImageDraw, ImageFont

SERIF = "/usr/share/fonts/truetype/liberation/LiberationSerif-BoldItalic.ttf"
SERIF_ROMAN = "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf"
SANS = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
FOREST = "#17382c"
CREAM = "#f6f1e7"
GOLD = "#e2b87a"
GOLD_SOFT = "#e7d3b1"


def wrapped(draw, text, font, fill, origin, max_width, line_gap):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        trial = word if not current else f"{current} {word}"
        if draw.textlength(trial, font=font) <= max_width:
            current = trial
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    x, y = origin
    for line in lines:
        draw.text((x, y), line, font=font, fill=fill)
        y += line_gap
    return y


def og():
    image = Image.new("RGB", (1200, 630), FOREST)
    draw = ImageDraw.Draw(image)
    draw.rectangle((80, 78, 196, 88), fill=GOLD)
    lead = ImageFont.truetype(SERIF_ROMAN, 52)
    follow = ImageFont.truetype(SERIF, 40)
    y = wrapped(
        draw,
        "People tell partners what they won’t say out loud.",
        lead,
        CREAM,
        (80, 120),
        1000,
        64,
    )
    wrapped(
        draw,
        "We help those partners follow through — and show the good that follows.",
        follow,
        GOLD_SOFT,
        (80, y + 18),
        1000,
        52,
    )
    draw.text((80, 530), "Hope With Love  ·  Hope1Source", font=ImageFont.truetype(SANS, 28), fill=CREAM)
    image.save("public/og.png", optimize=True)


def icon():
    image = Image.new("RGB", (180, 180), FOREST)
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle((18, 18, 162, 162), radius=36, fill=FOREST)
    draw.rectangle((48, 40, 70, 140), fill=CREAM)
    draw.rectangle((110, 40, 132, 140), fill=CREAM)
    draw.rectangle((48, 82, 132, 102), fill=GOLD)
    image.save("public/apple-touch-icon.png", optimize=True)


if __name__ == "__main__":
    og()
    icon()
    print("wrote public/og.png and public/apple-touch-icon.png")
