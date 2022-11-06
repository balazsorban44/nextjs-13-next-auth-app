"use client"
import styles from "./header.module.css"
import { signIn, signOut } from "next-auth/react"

export function SignOut() {
  return (
    <button className={styles.button} onClick={() => signOut()}>
      Sign out
    </button>
  )
}

export function SignIn() {
  return (
    <button className={styles.buttonPrimary} onClick={() => signIn("github")}>
      Sign in
    </button>
  )
}
