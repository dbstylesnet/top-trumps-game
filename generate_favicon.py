#!/usr/bin/env python3
from PIL import Image, ImageDraw
from math import cos, sin
import os

def create_favicon():
    # Create images at different sizes
    sizes = [16, 32, 48]
    images = []
    
    for size in sizes:
        # Create image with transparent background
        img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Colors matching the theme
        dark_bg = (15, 15, 30, 255)  # #0f0f1e
        green = (76, 175, 80, 255)   # #4CAF50
        cyan = (97, 218, 251, 255)   # #61dafb
        dark_card = (30, 30, 46, 200)  # Semi-transparent card
        
        # Draw background
        draw.rectangle([0, 0, size-1, size-1], fill=dark_bg)
        
        # Calculate card dimensions (slightly smaller than canvas)
        padding = size // 8
        card_x1 = padding
        card_y1 = padding
        card_x2 = size - padding
        card_y2 = size - padding
        
        # Draw card with rounded corners effect (approximate)
        # Main card body
        draw.rectangle([card_x1, card_y1, card_x2, card_y2], 
                      fill=dark_card, outline=green, width=max(1, size//16))
        
        # Draw a star in the center
        center_x, center_y = size // 2, size // 2
        star_size = size // 4
        
        # Draw star (5-pointed)
        star_points = []
        for i in range(10):
            angle = (i * 3.14159 / 5) - (3.14159 / 2)
            if i % 2 == 0:
                r = star_size
            else:
                r = star_size // 2
            x = center_x + int(r * 0.8 * cos(angle))
            y = center_y + int(r * 0.8 * sin(angle))
            star_points.append((x, y))
        
        if len(star_points) >= 3:
            draw.polygon(star_points, fill=green, outline=cyan, width=max(1, size//32))
        
        # Add small stars in corners
        corner_star_size = max(1, size // 16)
        # Top-left
        draw.ellipse([size//6 - corner_star_size, size//6 - corner_star_size,
                     size//6 + corner_star_size, size//6 + corner_star_size], fill=cyan)
        # Top-right
        draw.ellipse([5*size//6 - corner_star_size, size//6 - corner_star_size,
                     5*size//6 + corner_star_size, size//6 + corner_star_size], fill=cyan)
        # Bottom-left
        draw.ellipse([size//6 - corner_star_size, 5*size//6 - corner_star_size,
                     size//6 + corner_star_size, 5*size//6 + corner_star_size], fill=green)
        # Bottom-right
        draw.ellipse([5*size//6 - corner_star_size, 5*size//6 - corner_star_size,
                     5*size//6 + corner_star_size, 5*size//6 + corner_star_size], fill=green)
        
        images.append(img)
    
    # Save as ICO file (multi-size)
    images[0].save('public/favicon.ico', format='ICO', sizes=[(s, s) for s in sizes])
    
    # Also save as PNG at 32x32 for web manifest
    images[1].save('public/favicon-32x32.png', format='PNG')
    images[2].save('public/favicon-192x192.png', format='PNG')
    
    print("Favicon generated successfully!")

if __name__ == '__main__':
    create_favicon()

