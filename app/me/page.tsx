import { getSession } from "next-auth/react"

export default async function MePage() {
  const session = await getSession()

  return <pre>{JSON.stringify(session, null, 2)}</pre>
}
