# Portfolio Website

A minimalist portfolio website built with React and Vite to showcase projects and skills.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx   # Navigation header
│   │   ├── Hero.jsx     # Hero section
│   │   ├── ProjectCard.jsx    # Individual project card
│   │   ├── ProjectsGrid.jsx   # Projects grid container
│   │   └── Footer.jsx   # Footer with links
│   ├── data/
│   │   └── projects.js  # Projects data
│   ├── App.jsx          # Main app component
│   ├── App.css          # Main app styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

## ✏️ Customization

### Adding Your Projects

Edit `src/data/projects.js` to add your own projects:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Brief description of your project",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/repo",
    demo: "https://your-demo-url.com"
  }
]
```

### Updating Personal Information

1. **Hero Section**: Edit `src/components/Hero.jsx` to update your name, title, and description
2. **Header**: Edit `src/components/Header.jsx` to change the logo
3. **Footer**: Edit `src/components/Footer.jsx` to update social links and email

### Styling

The project uses a minimalist design with:
- Clean typography
- Simple color palette (black, white, grays)
- Generous whitespace
- Subtle hover effects

Modify the CSS files in each component directory to customize the styling.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI (optional):
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Or use the Vercel dashboard:
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Vercel will automatically detect Vite and configure the build settings
4. Click "Deploy"

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

For more detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## 📚 Learning Resources

As you work on this project, here are some resources to help you learn:

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)

## 🎨 Design Inspiration

Check out these portfolios for minimalist design inspiration:
- [Brittany Chiang](https://brittanychiang.com/)
- [Lee Robinson](https://leerob.io/)
- [Paco Coursey](https://paco.me/)

## 📝 Future Enhancements

Ideas for expanding your portfolio:
- [ ] Add dark mode toggle
- [ ] Implement project filtering by technology
- [ ] Add smooth scroll animations
- [ ] Create an About page with resume
- [ ] Add a contact form
- [ ] Create a blog section
- [ ] Add page transitions

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS** - Styling
- **Vercel/Netlify** - Deployment

---

Built with ❤️ by Evan Lowry