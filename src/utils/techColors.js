// Technology color mapping based on official brand colors
const techColors = {
  // Languages
  'JavaScript': { bg: '#F7DF1E', text: '#000000' },
  'JS': { bg: '#F7DF1E', text: '#000000' },
  'TypeScript': { bg: '#3178C6', text: '#FFFFFF' },
  'TS': { bg: '#3178C6', text: '#FFFFFF' },
  'Python': { bg: '#3776AB', text: '#FFFFFF' },
  'Java': { bg: '#ED8B00', text: '#FFFFFF' },
  'C++': { bg: '#00599C', text: '#FFFFFF' },
  'C': { bg: '#A8B9CC', text: '#000000' },
  'Go': { bg: '#00ADD8', text: '#FFFFFF' },
  'Rust': { bg: '#CE422B', text: '#FFFFFF' },
  'Ruby': { bg: '#CC342D', text: '#FFFFFF' },
  'PHP': { bg: '#777BB4', text: '#FFFFFF' },
  'Swift': { bg: '#FA7343', text: '#FFFFFF' },
  'Kotlin': { bg: '#7F52FF', text: '#FFFFFF' },
  
  // Frontend Frameworks/Libraries
  'React': { bg: '#61DAFB', text: '#000000' },
  'Vue': { bg: '#4FC08D', text: '#FFFFFF' },
  'Vue.js': { bg: '#4FC08D', text: '#FFFFFF' },
  'Angular': { bg: '#DD0031', text: '#FFFFFF' },
  'Svelte': { bg: '#FF3E00', text: '#FFFFFF' },
  'Next.js': { bg: '#000000', text: '#FFFFFF' },
  'Nuxt': { bg: '#00DC82', text: '#FFFFFF' },
  
  // Backend/Runtime
  'Node.js': { bg: '#339933', text: '#FFFFFF' },
  'Node': { bg: '#339933', text: '#FFFFFF' },
  'Express': { bg: '#000000', text: '#FFFFFF' },
  'Django': { bg: '#092E20', text: '#FFFFFF' },
  'Flask': { bg: '#000000', text: '#FFFFFF' },
  'Spring': { bg: '#6DB33F', text: '#FFFFFF' },
  
  // Databases
  'MongoDB': { bg: '#47A248', text: '#FFFFFF' },
  'PostgreSQL': { bg: '#336791', text: '#FFFFFF' },
  'MySQL': { bg: '#4479A1', text: '#FFFFFF' },
  'Redis': { bg: '#DC382D', text: '#FFFFFF' },
  'SQLite': { bg: '#003B57', text: '#FFFFFF' },
  
  // Web Technologies
  'HTML': { bg: '#E34F26', text: '#FFFFFF' },
  'CSS': { bg: '#1572B6', text: '#FFFFFF' },
  'Sass': { bg: '#CC6699', text: '#FFFFFF' },
  'SCSS': { bg: '#CC6699', text: '#FFFFFF' },
  'Tailwind': { bg: '#06B6D4', text: '#FFFFFF' },
  'Tailwind CSS': { bg: '#06B6D4', text: '#FFFFFF' },
  
  // Tools
  'Git': { bg: '#F05032', text: '#FFFFFF' },
  'Docker': { bg: '#2496ED', text: '#FFFFFF' },
  'Kubernetes': { bg: '#326CE5', text: '#FFFFFF' },
  'AWS': { bg: '#FF9900', text: '#000000' },
  'Firebase': { bg: '#FFCA28', text: '#000000' },
  'Vite': { bg: '#646CFF', text: '#FFFFFF' },
  'Webpack': { bg: '#8DD6F9', text: '#000000' },
  
  // Libraries & Frameworks
  'MediaPipe': { bg: '#4285F4', text: '#FFFFFF' },
  'TensorFlow': { bg: '#FF6F00', text: '#FFFFFF' },
  'PyTorch': { bg: '#EE4C2C', text: '#FFFFFF' },
  
  // Concepts & Specializations
  'Computer Vision': { bg: '#8B5CF6', text: '#FFFFFF' },
  'Machine Learning': { bg: '#10B981', text: '#FFFFFF' },
  'AI': { bg: '#10B981', text: '#FFFFFF' },
  'Real-time Processing': { bg: '#14B8A6', text: '#FFFFFF' },
  'Algorithms': { bg: '#EC4899', text: '#FFFFFF' },
  'Multithreading': { bg: '#F59E0B', text: '#FFFFFF' },
  'Optimization': { bg: '#EF4444', text: '#FFFFFF' },
  '3D Graphics': { bg: '#6366F1', text: '#FFFFFF' },
  'Math': { bg: '#8B5CF6', text: '#FFFFFF' },
  'Data Structures': { bg: '#A855F7', text: '#FFFFFF' },
  'Performance': { bg: '#DC2626', text: '#FFFFFF' },
  
  // Default fallback colors
  'default': { bg: '#6B7280', text: '#FFFFFF' }
}

export function getTechColor(techName) {
  // Normalize the tech name for lookup
  const normalized = techName.trim()
  
  // Try exact match first
  if (techColors[normalized]) {
    return techColors[normalized]
  }
  
  // Try case-insensitive match
  const lowerCaseName = normalized.toLowerCase()
  const matchedKey = Object.keys(techColors).find(
    key => key.toLowerCase() === lowerCaseName
  )
  
  if (matchedKey) {
    return techColors[matchedKey]
  }
  
  // Return default color if no match found
  return techColors.default
}
