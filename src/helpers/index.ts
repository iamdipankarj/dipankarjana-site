export const getExperienceYears = () => {
  const d1: number = new Date('05/01/2017').getTime()
  const d2: number = new Date().getTime()
  const diffTime = Math.abs(d2 - d1)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) / 365
  return diffDays.toFixed(1)
}

export const getTools = () => {
  return [
    'Git',
    'Figma',
    'Adobe Photoshop',
    'Unity 3D',
    'Blender',
    'Github Actions',
    'Bitbucket Pipeline',
    'PHP Storm'
  ]
}
