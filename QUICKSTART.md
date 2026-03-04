# Quick Start Guide

Welcome to your new portfolio! Here's how to get started in 5 minutes.

## Step 1: Install Dependencies

Open your terminal in this project directory and run:

```bash
npm install
```

This will install React, Vite, and all necessary dependencies.

## Step 2: Start the Development Server

```bash
npm run dev
```

Your portfolio will be running at `http://localhost:5173`

Open this URL in your browser to see your site!

## Step 3: Customize Your Content

### Update Your Personal Info

1. Open `src/components/Hero.jsx`
2. Change the name, title, and description to your own

### Update Your Social Links

1. Open `src/components/Footer.jsx`
2. Update the GitHub, LinkedIn, and email links

### Add Your Projects

1. Open `src/data/projects.js`
2. Replace the sample projects with your own:

```javascript
{
  id: 1,
  title: "My Awesome Project",
  description: "What your project does",
  tags: ["React", "Python", "API"],
  github: "https://github.com/yourusername/project",
  demo: "https://project-demo.com" // optional
}
```

## Step 4: Customize the Design (Optional)

The styling is already minimalist and clean, but you can customize:

- **Colors**: Edit the CSS files in `src/components/`
- **Fonts**: Change the font-family in `src/index.css`
- **Layout**: Adjust spacing and sizing in component CSS files

## Step 5: Deploy Your Portfolio

When you're ready to share with the world:

### Option A: Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Option B: Netlify

1. Run `npm run build`
2. Drag the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## Tips for Learning

As you work on this project:

1. **Experiment**: Try changing colors, fonts, layouts
2. **Break things**: Don't be afraid to break the code - that's how you learn!
3. **Read the docs**: Check out [react.dev](https://react.dev) when you get stuck
4. **Ask questions**: The React community is very helpful on Stack Overflow
5. **Add features**: Try implementing dark mode, animations, or a contact form

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure at a Glance

```
src/
├── components/      👈 Your React components (UI pieces)
├── data/           👈 Your projects data (easy to edit!)
├── App.jsx         👈 Main app component
└── index.css       👈 Global styles
```

## Next Steps

1. ✅ Get the site running (`npm install` → `npm run dev`)
2. ✅ Customize your info (name, links, projects)
3. ✅ Add your real projects as you build them
4. ✅ Deploy to Vercel/Netlify
5. 🚀 Share your portfolio!

## Need Help?

- Check the [README.md](README.md) for full documentation
- See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
- Look at the code - it's well-commented and beginner-friendly!

Happy coding! 🎉
