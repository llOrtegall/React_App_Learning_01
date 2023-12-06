import { Outlet } from "react-router-dom"
import { NavBar } from './NavBar.jsx'

export function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}