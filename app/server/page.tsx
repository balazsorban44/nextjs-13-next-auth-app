import { getSession } from "next-auth/react"

export default async function ServerSidePage() {
  // As this page uses Server Side Rendering, the `session` will be already
  // populated on render without needing to go through a loading stage.
  const session = await getSession()
  return (
    <>
      <h1>Server Side Rendering</h1>
      <p>
        This page uses the React Server Components to render the session without
        a loading state.
      </p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  )
}
