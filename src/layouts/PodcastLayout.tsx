import { Outlet } from "react-router-dom"

export function PodcastLayout() {
  return (
    <div className="flex space-x-3 items-center">
      <div>PodcastLayout</div>
      <Outlet />
    </div>
  )
}
