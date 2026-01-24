# Sun Medical Center - Website

A modern, responsive medical center website built with Next.js and React, styled similar to Apollo Hospitals.

## Features

- Modern, clean design inspired by Apollo Hospitals
- Responsive layout for all devices
- Hero section with search functionality
- Statistics showcase
- Services and specialties section
- Medical equipment display
- Contact information
- Navigation with mobile menu
- Fully translated to Mongolian

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your logo:
   - Place your logo image file in the `public` folder
   - Name it `logo.png` (or update the path in components if using a different name)
   - Supported formats: PNG, SVG, JPG, WEBP
   - Recommended size for navigation: 120x40px or similar aspect ratio
   - Recommended size for About section: 128x128px or square format

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Your Logo

1. **Place your logo file** in the `public` folder:
   ```
   public/
     logo.png  (or logo.svg, logo.jpg, etc.)
   ```

2. **Update the logo path** if needed:
   - Navigation logo: `components/Navigation.tsx` (line 29)
   - About section logo: `components/AboutSection.tsx` (line 15)

3. **Logo specifications**:
   - **Navigation**: Recommended width 120-200px, height 40-60px
   - **About Section**: Recommended 128x128px or square format
   - **Format**: PNG (with transparency), SVG, or JPG
   - **Background**: Transparent PNG works best for navigation

4. **If logo doesn't appear**:
   - Check that the file is named correctly (`logo.png`)
   - Verify the file is in the `public` folder (not `public/images/`)
   - Clear browser cache and restart dev server
   - Check browser console for errors

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Next.js Image** - Optimized image loading

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── StatisticsSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── EquipmentSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── public/
│   └── logo.png  (your logo file goes here)
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended for Next.js)

1. **Install Vercel CLI** (optional):
```bash
npm i -g vercel
```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository: `https://github.com/Deltasoftmn/Sunmedical.git`
   - Vercel will automatically detect Next.js and configure the build settings
   - Click "Deploy"

3. **Deploy via CLI**:
```bash
vercel
```

### Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Click "Deploy site"

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- **Railway**: Connect GitHub repo and deploy
- **Render**: Connect GitHub repo and deploy
- **DigitalOcean App Platform**: Connect GitHub repo and deploy
- **AWS Amplify**: Connect GitHub repo and deploy

### Environment Variables

If you need to add environment variables, create a `.env.local` file (not committed to git):
```
# Example
NEXT_PUBLIC_API_URL=your_api_url
```

## Repository

GitHub: [https://github.com/Deltasoftmn/Sunmedical.git](https://github.com/Deltasoftmn/Sunmedical.git)

## License

© 2025 Sun Medical Center
