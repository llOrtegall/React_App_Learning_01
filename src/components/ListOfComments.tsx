import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'

const Comment = (props: {
  id: number
}) => {
  const { id } = props
  const { data, isLoading } = useSWR(`/comment/${id}`, () => getItemInfo(Number(id)))

  if (isLoading) {
    return <p>Loading ...</p>
  }

  const { by, text, kids } = data

  return (
    <>
      <details open>
        <summary>
          <small>{by}</small>
          <span>.</span>
          <span>4 hors ago</span>
        </summary>

        <p>{text}</p>
      </details>
      {kids?.length > 0 && <ListOfComments ids={kids.slice(0, 10)} />}
    </>
  )
}

export const ListOfComments = (props: {
  ids: number[]
}) => {
  const { ids } = props
  return (
    <ul>
      {
        ids?.map((id: number) => (
          <li key={id}>
            <Comment id={id} />
          </li>
        ))
      }
    </ul>
  )
}