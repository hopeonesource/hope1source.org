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


def og():
    image = Image.new("RGB", (1200, 630), FOREST)
    draw = ImageDraw.Draw(image)
    draw.rectangle((80, 168, 196, 178), fill=GOLD)
    draw.text((80, 210), "Private friction.", font=ImageFont.truetype(SERIF, 78), fill=CREAM)
    draw.text((80, 310), "Public praise.", font=ImageFont.truetype(SERIF, 78), fill=GOLD_SOFT)
    draw.text((80, 470), "Hope With Love", font=ImageFont.truetype(SERIF_ROMAN, 40), fill=CREAM)
    draw.text(
        (80, 525),
        "Hope1Source  ·  mission and trust",
        font=ImageFont.truetype(SANS, 28),
        fill=GOLD_SOFT,
    )
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
