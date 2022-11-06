import Header from "./header"
import type { ReactNode } from "react"
import "./styles.css"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        {/** @ts-expect-error */}
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
