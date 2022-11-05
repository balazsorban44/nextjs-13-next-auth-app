import Header from "./header"
import Footer from "./footer"
import type { ReactNode } from "react"
import "./styles.css"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        {/** @ts-expect-error */}
        <Header />
        {/* <main>{children}</main> */}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
