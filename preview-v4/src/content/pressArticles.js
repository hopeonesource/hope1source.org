import { pressArticlesRecent } from './pressArticlesRecent.js'
import { pressArticlesOlder } from './pressArticlesOlder.js'
import { pressArticlesUpdates } from './pressArticlesUpdates.js'

export const pressArticles = [...pressArticlesUpdates, ...pressArticlesRecent, ...pressArticlesOlder]

export function pressArticleById(id) {
  return pressArticles.find((article) => article.id === id)
}

export const pressArticleAliases = pressArticles.flatMap((article) =>
  article.legacyPaths.map((path) => [path, `/press/${article.id}`]),
)
