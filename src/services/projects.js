import githubProjects from '../generated/github-projects.json'
import { caseStudies, projectOverrides } from '../data/projectOverrides'

function isStreamlitUrl(url = '') {
  return /https?:\/\/[^/]+\.streamlit\.app\/?/i.test(url)
}

export function getProjects() {
  const github = githubProjects.map((repo) => {
    const override = projectOverrides[repo.name] || {}
    const liveUrl = override.liveUrl || repo.homepage || ''

    return {
      ...repo,
      ...override,
      title: override.title || repo.name.replaceAll('-', ' '),
      summary: override.summary || repo.description || 'Public research software project.',
      category: override.category || repo.language || 'Research software',
      tags: override.tags?.length ? override.tags : [repo.language, ...(repo.topics || [])].filter(Boolean),
      githubUrl: repo.html_url,
      liveUrl,
      streamlit: isStreamlitUrl(liveUrl) || repo.topics?.includes('streamlit'),
      kind: 'github',
      order: override.order ?? 100,
    }
  })

  return [...github, ...caseStudies].sort((a, b) => (a.order ?? 100) - (b.order ?? 100))
}
