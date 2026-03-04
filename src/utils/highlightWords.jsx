// Helper function to add colorful highlights to important technical words
export function highlightImportantWords(text) {
  const highlights = {
    // Purple gradient
    purple: [
      'real-time', 'algorithms', 'recursive backtracking', 'MediaPipe',
      'Kociemba\'s Algorithm', 'Computer Vision', 'perspective-correct',
      'rasterization', 'first principles'
    ],
    // Cyan gradient
    cyan: [
      'competitive fitness app', 'solver', 'rendering engine', 'game logic',
      'multithreaded search', 'collision detection', 'UV interpolation'
    ],
    // Pink gradient
    pink: [
      'DeltaHacks 12', 'optimized', 'high-performance', 'A/B testing',
      'Software-only', 'custom'
    ],
    // Orange gradient
    orange: [
      'opponent', 'skeletal landmark data', 'averaging 26 moves',
      'heuristics', 'back-face culling', 'OBJ mesh importer', 'AABB'
    ]
  }

  let result = text
  let parts = []
  let lastIndex = 0

  // Create array of all highlights with their positions
  const allHighlights = []
  Object.entries(highlights).forEach(([color, words]) => {
    words.forEach(word => {
      const regex = new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
      let match
      while ((match = regex.exec(text)) !== null) {
        allHighlights.push({
          start: match.index,
          end: match.index + match[0].length,
          word: match[0],
          color: color
        })
      }
    })
  })

  // Sort by position
  allHighlights.sort((a, b) => a.start - b.start)

  // Remove overlapping highlights
  const cleanedHighlights = []
  allHighlights.forEach(highlight => {
    const overlaps = cleanedHighlights.some(existing => 
      (highlight.start >= existing.start && highlight.start < existing.end) ||
      (highlight.end > existing.start && highlight.end <= existing.end)
    )
    if (!overlaps) {
      cleanedHighlights.push(highlight)
    }
  })

  // Build JSX elements
  cleanedHighlights.forEach((highlight, index) => {
    // Add text before highlight
    if (highlight.start > lastIndex) {
      parts.push(text.substring(lastIndex, highlight.start))
    }
    
    // Add highlighted text
    parts.push(
      <span key={index} className={`highlight-${highlight.color}`}>
        {highlight.word}
      </span>
    )
    
    lastIndex = highlight.end
  })

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return parts.length > 0 ? parts : text
}
