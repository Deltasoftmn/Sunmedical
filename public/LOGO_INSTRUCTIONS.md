# How to Add Your Logo

## Quick Steps:

1. **Place your logo file** in this `public` folder
   - Name it: `logo.png` (or update the code if using a different name)
   - Supported formats: PNG, SVG, JPG, WEBP

2. **Recommended sizes:**
   - **Navigation bar**: 120-200px wide × 40-60px high (horizontal logo)
   - **About section**: 128×128px or square format

3. **Best format:**
   - PNG with transparent background (recommended)
   - SVG for scalable vector graphics
   - JPG if no transparency needed

4. **File location:**
   ```
   public/
     logo.png  ← Your logo file goes here
   ```

5. **If your logo doesn't appear:**
   - Make sure the filename is exactly `logo.png`
   - Check that it's in the `public` folder (not a subfolder)
   - Restart the dev server: `npm run dev`
   - Clear browser cache

## Current Logo Usage:

- **Navigation bar** (top): `components/Navigation.tsx`
- **About section** (right side): `components/AboutSection.tsx`

If you want to use a different filename or path, update these files accordingly.
