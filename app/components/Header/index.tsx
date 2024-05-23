import { useState } from "react"
import { NavLink } from "@remix-run/react"
import { IoMenu, IoClose } from "react-icons/io5"
import logo from "../../../public/assets/images/general/logo.png"

type Link = {
  text: string
  url: string
}

type HeaderMenu = {
  title: string
  items: Link[]
}

type HeaderContent = {
  title: string
  menu: HeaderMenu
}

interface HeaderProps {
  content: HeaderContent
}

export const Header = (props: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <nav className="flex w-full justify-center border-b-2 border-gray-200 px-4 lg:px-6 py-2.5 mb-8">
        <div className="flex w-full flex-wrap justify-between items-center max-w-screen-lg">
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-12 sm:h-16"
              alt={props.content.title}
            />
          </NavLink>
          <div className="flex items-right lg:order-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center p-2 ml-1 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">{props.content.menu.title}</span>
              {!menuOpen ? <IoMenu size="24" /> : <IoClose size="24" />}
            </button>
          </div>
          <div
            className={`${
              !menuOpen && "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium text-lg lg:flex-row lg:space-x-8 lg:mt-0 styled-font">
              {props.content.menu.items.map((item) => {
                return (
                  <li>
                    <NavLink
                      to={item.url}
                      className={({ isActive, isPending }) => {
                        const active =
                          isActive || isPending ? "underline decoration-4" : ""
                        return `${active} block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 hover:text-primary-500 lg:p-0 lg:hover:underline lg:hover:decoration-4 lg:hover:decoration-[--primary] underline-offset-8 decoration-[--primary]`
                      }}
                    >
                      {item.text}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
