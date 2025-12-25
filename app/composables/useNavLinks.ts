export const useNavLinks = () => {
  const linkItems = [
    { label: 'home', icon: 'House', index: 0 },
    { label: 'projects', icon: 'Code', index: 1 },
    { label: 'about', icon: 'Info', index: 2 },
    { label: 'timeline', icon: 'Map', index: 3 },
    { label: 'contact', icon: 'User', index: 4 }
  ]

  return { linkItems }
}
