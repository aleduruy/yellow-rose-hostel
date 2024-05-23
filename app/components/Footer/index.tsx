import { Link } from "@remix-run/react"
import { IoCall, IoLocation, IoMail, IoDisc } from "react-icons/io5"
import { Text } from "../Text"
import logo from "../../../public/assets/images/general/logo.png"

export type ContactType = "PHONE" | "MAIL" | "ADDRESS"

type Link = {
  text: string
  url: string
}

type ContactsGroups = {
  type: ContactType
  title: string
  items: Link[]
}

type FooterContacts = {
  title: string
  groups: ContactsGroups[]
}

export type FooterContent = {
  links: Link[]
  contact: FooterContacts
}

interface FooterProps {
  content: FooterContent
}

const ContactIcon = ({ type }: { type: ContactType }) => {
  switch (type) {
    case "PHONE":
      return <IoCall />
    case "MAIL":
      return <IoMail />
    case "ADDRESS":
      return <IoLocation />
    default:
      return <IoDisc />
  }
}

export const Footer = (props: FooterProps) => {
  return (
    <footer className="flex w-full justify-center bg-[--accent] mt-8 px-16 lg:px-8 py-8 lg:py-12">
      <div className="flex w-full flex-wrap justify-between items-start max-w-screen-xl">
        <div className="lg:w-2/4">
          <div className="flex items-center mb-8">
            <img src={logo} className="h-10" alt="Rosa Amarela" />
          </div>
          <ul className="ml-6">
            {props.content.links.map((item) => {
              return (
                <li className="mb-4">
                  <Link to={item.url}>{item.text}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="lg:w-2/4 flex flex-col items-center mt-12 md:mt-0">
          <Text tag="p" size="small">
            <h3 className="mb-8 uppercase">{props.content.contact.title}</h3>
            <ul className="lg:w-64">
              {props.content.contact.groups.map((contact) => {
                return (
                  <li className="flex flex-col mb-6">
                    <div className="flex items-center">
                      <ContactIcon type={contact.type} />
                      <div className="font-bold ml-2">{contact.title}</div>
                    </div>
                    {contact.items.map((item) => {
                      return <a href={item.url}>{item.text}</a>
                    })}
                  </li>
                )
              })}
            </ul>
          </Text>
        </div>
      </div>
    </footer>
  )
}
