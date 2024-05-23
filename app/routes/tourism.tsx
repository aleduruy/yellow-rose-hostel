import React from "react"
import {
  Outlet,
  Link,
  useRouteLoaderData,
  useLoaderData,
} from "@remix-run/react"

import type { LoaderFunctionArgs } from "@remix-run/node" // or cloudflare/deno
import { json } from "@remix-run/node" // or cloudflare/deno

import { getContacts } from "../data"

export async function loader() {
  const contacts = await getContacts()
  return json(contacts)
}

export default function TourismRoute() {
  const data = useLoaderData<typeof loader>()
  console.log(data)

  return (
    <div>
      <h1>turismo</h1>
    </div>
  )
}
