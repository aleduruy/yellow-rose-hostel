import {
  Form,
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react"
import { json, type LinksFunction } from "@remix-run/node"
import { getHeader, getFooter } from "./data"
import stylesheet from "./main.css"
import favicon from "../public/assets/images/general/favicon.ico"
import { Header } from "./components/Header"
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"
import { Footer, type FooterContent } from "./components/Footer"
import { Container } from "./components/Container"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: styles },
]

export async function loader() {
  const footer = (await getFooter()) as FooterContent
  const header = await getHeader()
  return json({ footer, header })
}

export default function App() {
  const content = useLoaderData<typeof loader>()
  console.log("content", content)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image" href={favicon} />
        <Meta />
        <Links />
      </head>
      <body>
        <Header content={content.header} />
        <Container id="content">
          <Outlet />
        </Container>
        <Footer content={content.footer} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
