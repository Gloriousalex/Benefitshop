import { Outlet } from "react-router"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ():JSX.Element =>{
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      
      <Footer />
    </>
  )
}