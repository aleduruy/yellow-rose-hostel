import React from "react"
import {
  Outlet,
  Link,
  useRouteLoaderData,
  useLoaderData,
} from "@remix-run/react"

import { json, type LoaderFunctionArgs } from "@remix-run/node"

import { getContacts } from "../data"

export async function loader() {
  const contacts = await getContacts()
  return json(contacts)
}

export default function AccommodationsRoute() {
  const data = useLoaderData<typeof loader>()
  console.log(data)

  return (
    <div>
      <h1>Acomodacoes</h1>
      <Link to={`/accommodation/riacho`}>Suite 1</Link>
      <br />
      <Link to={`/accommodation/jardim`}>Suite 2</Link>
    </div>
  )
}
