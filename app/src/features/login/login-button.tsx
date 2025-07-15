import { signIn } from 'next-auth/react'

export default function LoginButton() {
  return <button onClick={() => signIn('auth0')}>Log In</button>
}
