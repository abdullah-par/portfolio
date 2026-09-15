import sys
from collections import Counter

def get_dominant_colors(image_path, num_colors=3):
    try:
        from PIL import Image
    except ImportError:
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
        from PIL import Image

    image = Image.open(image_path)
    image = image.convert('RGBA')
    image.thumbnail((100, 100))
    
    pixels = list(image.getdata())
    
    # Filter out transparent pixels or mostly white/black backgrounds
    valid_pixels = []
    for r, g, b, a in pixels:
        if a > 0:
            valid_pixels.append((r, g, b))
            
    if not valid_pixels:
        print(f"No valid pixels found in {image_path}")
        return []
        
    counts = Counter(valid_pixels)
    most_common = counts.most_common(num_colors)
    
    hex_colors = ['#{:02x}{:02x}{:02x}'.format(r, g, b) for (r, g, b), count in most_common]
    print(f"Dominant colors for {image_path}: {hex_colors}")
    return hex_colors

if __name__ == "__main__":
    get_dominant_colors(sys.argv[1])
