
import ContentLoader from "react-content-loader"

export const StoryLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={700}
      height={45}
      viewBox="0 0 700 45"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="25" y="4" rx="3" ry="3" width="548" height="17" />
      <rect x="9" y="28" rx="3" ry="3" width="228" height="13" />
      <circle cx="14" cy="13" r="8" />
    </ContentLoader>
  )
}