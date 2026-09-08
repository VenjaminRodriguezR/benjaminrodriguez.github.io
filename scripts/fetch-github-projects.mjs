import { mkdir, writeFile } from 'node:fs/promises'

const username = 'VenjaminRodriguezR'
const output = new URL('../src/generated/github-projects.json', import.meta.url)
const fallbackNames = new Set(['CAMalyzer', 'Biomedical-CSV-explorer'])

const headers = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'benjamin-rodriguez-portfolio-build',
}

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
}

try {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&type=owner`,
    { headers },
  )

  if (!response.ok) {
    throw new Error(`GitHub API returned ${response.status}: ${await response.text()}`)
  }

  const repos = await response.json()
  const selected = repos
    .filter((repo) => !repo.private && !repo.archived && !repo.fork)
    .filter(
      (repo) =>
        fallbackNames.has(repo.name) ||
        repo.topics?.includes('portfolio') ||
        repo.topics?.includes('featured'),
    )
    .map((repo) => ({
      name: repo.name,
      html_url: repo.html_url,
      homepage: repo.homepage || '',
      description: repo.description || '',
      language: repo.language || '',
      topics: repo.topics || [],
      updated_at: repo.updated_at,
      fork: repo.fork,
    }))

  await mkdir(new URL('../src/generated/', import.meta.url), { recursive: true })
  await writeFile(output, `${JSON.stringify(selected, null, 2)}\n`, 'utf8')
  console.log(`Fetched ${selected.length} portfolio repositories from GitHub.`)
} catch (error) {
  // Keep the committed generated file so local/offline builds still succeed.
  console.warn(`GitHub metadata refresh skipped: ${error.message}`)
}
