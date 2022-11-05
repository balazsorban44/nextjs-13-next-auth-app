import { Session, unstable_getServerSession } from "next-auth"
import { cookies, headers } from "next/headers"
import { authOptions } from "../pages/api/auth/[...nextauth]"

/** This is temporary, until something similar is provided built-in by `next-auth` */
export async function getSession(): Promise<Session | null> {
  const session = await unstable_getServerSession(
    {
      headers: headers(),
      cookies: cookies()
        .getAll()
        .reduce((acc, c) => ({ ...acc, [c.name]: c.value })),
    } as any,
    { getHeader() {}, setCookie() {}, setHeader() {} } as any,
    authOptions
  )

  return session
}
