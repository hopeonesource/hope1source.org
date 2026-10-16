import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Seo, { absoluteUrl } from '../components/Seo.jsx'
import { pressArticleById } from '../content/pressArticles.js'
import { articleLinkDestination } from '../lib/articleLinks.js'
import { publicUrl } from '../lib/links.js'
import NotFound from './NotFound.jsx'

function ArticleLink({ href, children }) {
  const destination = articleLinkDestination(href)
  if (destination.startsWith('/')) return <Link to={destination}>{children}</Link>
  const external = /^https?:\/\//.test(destination)
  return (
    <a href={destination} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
      {children}
    </a>
  )
}

/** Keep the original prose intact while restoring its inline links. */
function ArticleText({ text, links = [] }) {
  const parts = []
  let cursor = 0
  while (cursor < text.length) {
    const next = links
      .filter((link) => link.text)
      .map((link) => ({ ...link, index: text.indexOf(link.text, cursor) }))
      .filter((link) => link.index >= cursor)
      .sort((a, b) => a.index - b.index)[0]
    if (!next) {
      parts.push(text.slice(cursor))
      break
    }
    parts.push(text.slice(cursor, next.index))
    parts.push(<ArticleLink key={next.index} href={next.href}>{next.text}</ArticleLink>)
    cursor = next.index + next.text.length
  }
  return parts
}

function ArticleBlock({ block }) {
  if (block.type === 'list') {
    const List = block.ordered ? 'ol' : 'ul'
    return <List>{block.items.map((text, index) => <li key={index}><ArticleText text={text} links={block.links} /></li>)}</List>
  }
  const content = <ArticleText text={block.text} links={block.links} />
  if (block.type === 'h2') return <h2>{content}</h2>
  if (block.type === 'h3') return <h3>{content}</h3>
  if (block.type === 'quote') return <blockquote><p>{content}</p></blockquote>
  return <p>{content}</p>
}

export default function PressArticle({ id }) {
  const article = pressArticleById(id)
  if (!article) return <NotFound />
  const url = absoluteUrl(`/press/${article.id}`)
  const jsonLd = {
    '@type': 'NewsArticle',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.description,
    url,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    publisher: { '@id': `${absoluteUrl('/')}#organization` },
    inLanguage: 'en-US',
    ...(article.author ? { author: { '@type': /^[A-Z]\.\s/.test(article.author) ? 'Person' : 'Organization', name: article.author } } : {}),
    ...(article.image ? { image: absoluteUrl(article.image.src) } : {}),
    ...(/^\d{4}-\d{2}-\d{2}$/.test(article.dateTime) && !article.note ? { datePublished: article.dateTime } : {}),
  }

  return (
    <>
      <Seo title={article.title} description={article.description} jsonLd={jsonLd} image={article.image} />
      <article className="press-article">
        <header className="wrap narrow press-article-header">
          <Link className="text-link" to="/press">← All press and coverage</Link>
          <p className="kicker">{article.kicker || 'Archived press release'}</p>
          <h1>{article.title}</h1>
          <p className="press-article-byline">
            <time dateTime={article.dateTime}>{article.date}</time>
            {article.author ? <> · {article.author}</> : null}
          </p>
        </header>
        <div className="wrap narrow prose press-article-body">
          {article.image ? (
            <figure className="press-article-image">
              <img
                src={publicUrl(article.image.src)}
                srcSet={article.image.smallSrc ? `${publicUrl(article.image.smallSrc)} 720w, ${publicUrl(article.image.src)} 1440w` : undefined}
                sizes="(max-width: 800px) calc(100vw - 2.5rem), 760px"
                alt={article.image.alt}
                width={article.image.width}
                height={article.image.height}
                decoding="async"
              />
              {article.image.caption ? <figcaption>{article.image.caption}</figcaption> : null}
            </figure>
          ) : null}
          {article.blocks.map((block, index) => <Fragment key={index}><ArticleBlock block={block} /></Fragment>)}
          {article.note ? <p className="form-note">{article.note}</p> : null}
          <nav className="press-article-footer" aria-label="Article navigation">
            <Link className="btn btn-secondary" to="/press">All press and coverage</Link>
          </nav>
        </div>
      </article>
    </>
  )
}
