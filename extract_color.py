import urllib.request
import base64
import re
from collections import Counter

try:
    req = urllib.request.Request('https://assets.cdn.filesafe.space/gGtmQYvc0s6yNrsidLE4/media/69ca6cf423b082470f691cb7.svg', headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        svg_data = response.read().decode('utf-8')
        
    b64_match = re.search(r'base64,([^"]+)', svg_data)
    if b64_match:
        png_data = base64.b64decode(b64_match.group(1))
        with open('logo_extracted.png', 'wb') as f:
            f.write(png_data)
            
        try:
            from PIL import Image
            img = Image.open('logo_extracted.png').convert('RGBA')
            pixels = img.getdata()
            colors = []
            for r, g, b, a in pixels:
                if a > 100:  
                    if not (abs(r - g) < 20 and abs(g - b) < 20):
                        colors.append(f'#{r:02x}{g:02x}{b:02x}')
            counts = Counter(colors)
            print("Dominant brand colors:")
            for color, count in counts.most_common(5):
                print(f"{color}: {count}")
        except ImportError:
            print("Pillow not installed.")
    else:
        print("No base64 image found in SVG")
except Exception as e:
    print("Error:", e)
