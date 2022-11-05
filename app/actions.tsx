"use client"
import styles from "./header.module.css"
import { signIn, signOut } from "next-auth/react"

export function SignOut() {
  return (
    <a
      href={`/api/auth/signout`}
      className={styles.button}
      onClick={(e) => {
        e.preventDefault()
        signOut()
      }}
    >
      Sign out
    </a>
  )
}

export function SignIn() {
  return (
    <a
      href={`/api/auth/signin`}
      className={styles.buttonPrimary}
      onClick={(e) => {
        e.preventDefault()
        signIn()
      }}
    >
      Sign in
    </a>
  )
}
