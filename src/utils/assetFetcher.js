// Dynamically import all images inside src/assets (including projects and stats folders)
// Whenever you upload or replace files in src/assets/projects/ or src/assets/stats/,
// Vite automatically discovers and bundles them here!

const allAssets = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,svg,webp,gif}', { eager: true })

/**
 * Helper to resolve an image path by looking up matching keywords or exact names in uploaded assets.
 * @param {string} folder - Subfolder under src/assets (e.g. 'projects' or 'stats')
 * @param {string} key - Filename or unique keyword (e.g. 'padmasini', 'payroll', 'exp')
 * @returns {string|null} - URL/path of the image
 */
export function getAssetImage(folder, key) {
  if (!key) return null
  
  const normalizedKey = key.toLowerCase()
  const matchingPath = Object.keys(allAssets).find(path => {
    const lowerPath = path.toLowerCase()
    return lowerPath.includes(`/${folder}/`) && lowerPath.includes(normalizedKey)
  })

  if (matchingPath && allAssets[matchingPath]) {
    const mod = allAssets[matchingPath]
    return typeof mod === 'string' ? mod : (mod.default || mod)
  }

  // If exact match not found by folder, search anywhere in assets
  const fallbackPath = Object.keys(allAssets).find(path => {
    return path.toLowerCase().includes(normalizedKey)
  })

  if (fallbackPath && allAssets[fallbackPath]) {
    const mod = allAssets[fallbackPath]
    return typeof mod === 'string' ? mod : (mod.default || mod)
  }

  return null
}

export function getProjectImage(key) {
  return getAssetImage('projects', key)
}

export function getStatImage(key) {
  return getAssetImage('stats', key)
}
