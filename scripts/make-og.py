"""Regenerate public/og.png and public/apple-touch-icon.png.

Requires Pillow and Liberation fonts (present on the build VM). Not part of npm.
"""

from PIL import Image, ImageDraw, ImageFont

SERIF = "/usr/share/fonts/truetype/liberation/LiberationSerif-BoldItalic.ttf"
SERIF_ROMAN = "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf"
SANS = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
CANVAS = "#101816"
CREAM = "#f6f1e7"
CORAL = "#ff6b45"
SAGE = "#9dceb4"
GOLD_SOFT = "#f0ddc0"


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
    image = Image.new("RGB", (1200, 630), CANVAS)
    wash = Image.new("RGB", (1200, 630), CANVAS)
    glow = ImageDraw.Draw(wash)
    glow.ellipse((680, -80, 1280, 520), fill=CORAL)
    glow.ellipse((420, 220, 980, 780), fill=SAGE)
    image = Image.blend(image, wash, 0.28)
    draw = ImageDraw.Draw(image)
    draw.rectangle((80, 168, 210, 178), fill=CORAL)
    draw.text((80, 200), "Earn trust.", font=ImageFont.truetype(SERIF_ROMAN, 108), fill=CREAM)
    wrapped(
        draw,
        "We help partners serve people with care, and show the impact that follows.",
        ImageFont.truetype(SANS, 32),
        GOLD_SOFT,
        (80, 360),
        980,
        44,
    )
    draw.text((80, 530), "Hope With Love  ·  Hope1Source", font=ImageFont.truetype(SANS, 28), fill=CREAM)
    image.save("public/og.png", optimize=True)


def icon():
    image = Image.new("RGB", (180, 180), "#17382c")
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle((18, 18, 162, 162), radius=36, fill="#17382c")
    draw.rectangle((48, 40, 70, 140), fill=CREAM)
    draw.rectangle((110, 40, 132, 140), fill=CREAM)
    draw.rectangle((48, 82, 132, 102), fill=CORAL)
    image.save("public/apple-touch-icon.png", optimize=True)


if __name__ == "__main__":
    og()
    icon()
    print("wrote public/og.png and public/apple-touch-icon.png")
