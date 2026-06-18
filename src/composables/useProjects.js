import { computed } from 'vue'

import { useFormattedDate } from './useFormattedDate'

export const useProjects = (projects, links) => {
  const validProjects = computed(() => {
    if (!Array.isArray(projects)) return []

    return projects.filter(project => {
      const date = new Date(project.date)
      return !isNaN(date.getTime())
    })
  })

  const latestProject = computed(() => {
    if (validProjects.value.length === 0) return null

    return validProjects.value.reduce((latest, current) => {
      const latestDate = new Date(latest.date)
      const currentDate = new Date(current.date)
      return currentDate > latestDate ? current : latest
    })
  })

  const latestDateRaw = computed(() => latestProject.value?.date)

  const formattedLatestDate = useFormattedDate(latestDateRaw)

  const githubUrl = links.find(link => link.label === 'GitHub')?.to

  const repositoryUrl = computed(() => {
    if (!latestProject.value?.repository) return null
    return `${githubUrl}/${latestProject.value.repository}`
  })

  const daysAgo = computed(() => {
    if (!latestProject.value) return 0

    const projectDate = new Date(latestProject.value.date)
    const today = new Date()
    const diffTime = Math.abs(today - projectDate)
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  })

  return {
    latestProject,
    formattedLatestDate,
    repositoryUrl,
    daysAgo,
    totalProjects: computed(() => validProjects.value.length),
  }
}
