import Link from "next/link"
import styles from "./header.module.css"
import { SignIn, SignOut } from "./actions"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../pages/api/auth/[...nextauth]"

export default async function Header() {
  const session = await unstable_getServerSession(authOptions)

  return (
    <header>
      <div className={styles.signedInStatus}>
        <p className={`nojs-show ${styles.loaded}`}>
          {session?.user ? (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <SignOut />
            </>
          ) : (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
              <SignIn />
            </>
          )}
        </p>
      </div>
      <nav>
        <ul className={styles.navItems}>
          {[
            ["/", "Home"],
            ["/client", "Client"],
            ["/server", "Server"],
            ["/protected", "Protected"],
            ["/api-example", "API"],
            ["/admin", "Admin"],
            ["/me", "Me"],
          ].map(([href, text]) => (
            <li key={href} className={styles.navItem}>
              <Link href={href}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
