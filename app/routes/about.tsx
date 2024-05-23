import React from "react"
import {
  Outlet,
  Link,
  useRouteLoaderData,
  useLoaderData,
} from "@remix-run/react"

import type { LoaderFunctionArgs } from "@remix-run/node" // or cloudflare/deno
import { json } from "@remix-run/node" // or cloudflare/deno
import { About } from "../pages/About"

import { getAbout } from "../data"

export async function loader() {
  const aboutContent = await getAbout()
  return json(aboutContent)
}

export default function AboutRoute() {
  const aboutContent = useLoaderData<typeof loader>()

  return <About content={aboutContent} />
}
