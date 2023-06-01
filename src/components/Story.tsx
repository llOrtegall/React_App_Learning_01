import useSWR from 'swr'
import { Link } from 'wouter'
import { getItemInfo } from '../services/hacker-news'
import { storyLink, story, storyFooter, storyHeader, storyTitle } from './Story.css'
import { StoryLoader } from './StoeyLoader'

export const Story = (props: {
  id: number,
  index: number,
}) => {
  const { id, index } = props

  const { data, isLoading } = useSWR(`/story/${id}`, () => getItemInfo(id))

  if (isLoading) {
    //enseñar el placeholder
    return <StoryLoader></StoryLoader>
  }

  const { by, kids, score, title, url } = data
  console.log(data)

  let domain = ''
  try {
    domain = new URL(url).hostname.replace('www', '')
  } catch (err) {
    console.log(err)
  }

  //
  return (
    <article className={story}>
      <header className={storyHeader}>
        <small>{index + 1} .</small>
        <a
          className={storyTitle}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >{title}
        </a>
        <a
          className={storyLink}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >({domain})
        </a>
      </header>
      <footer className={storyFooter}>
        <span>{score} points</span>
        <Link className={storyLink} href={`/article/${id}`}>
          by {by}
        </Link>
        <Link className={storyLink} href={`/article/${id}`}>
          6 hours ago
        </Link>
        <Link className={storyLink} href={`/article/${id}`}>
          {kids?.length ?? 0}  commenst
        </Link>
      </footer>
    </article>
  )
}