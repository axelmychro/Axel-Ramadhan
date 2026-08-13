import profilePicture from '/profile.webp'

export const profile = {
  name: 'Axel Ramadhan',
  bio: 'CS student',
  picture: profilePicture,

  links: [
    {
      label: 'Email',
      to: 'mailto:axelmychro@gmail.com',
      icon: 'lucide:mail',
    },
    {
      label: 'GitHub',
      to: 'https://github.com/axelmychro',
      icon: 'simple-icons:github',
    },
    {
      label: 'LinkedIn',
      to: 'https://linkedin.com/in/axelramadhan',
      icon: 'simple-icons:linkedin',
      trailingIcon: 'lucide:wifi',
    },
    {
      label: 'Resume',
      to: '/resume',
      icon: 'lucide:file-text',
      trailingIcon: 'lucide:user-round-search',
    },
    {
      label: 'Instagram',
      to: 'https://www.instagram.com/axelmychro',
      icon: 'mdi:instagram',
    },
    {
      label: 'Discord',
      to: 'https://discord.com/users/1460835416294031371',
      icon: 'mdi:discord',
    },
  ],
}
