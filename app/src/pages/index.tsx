// Example usage in a Next.js component or hook

import { trpc } from '~/utils/trpc' // Adjust the import path as needed
import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function AddUserForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const addUser = trpc.user.add.useMutation({
    trpc: {
      context: {
        telegramWebhook: true,
      },
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await addUser.mutateAsync({ name, email, role: 'ADMIN' })
    setName('')
    setEmail('')
  }

  return (
    <>
      <button onClick={() => signIn('auth0')}>Log In</button>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          required
        />
        <button type="submit">'Add User'</button>
        {addUser.error && (
          <div style={{ color: 'red' }}>{addUser.error.message}</div>
        )}
        {addUser.isSuccess && <div style={{ color: 'green' }}>User added!</div>}
      </form>
    </>
  )
}
