import { useState } from "react"
import { useAuth } from "../Auth/UseContextAuth";

export function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login } = useAuth();

  const handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, password })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          return setError(data.error)
        }
        login({ user: data.user })
        document.cookie = `token=${data.token}`
      })
      .catch(err => setError(err))
  }

  return (
    <>
      <form className="flex flex-col h-full items-center justify-center" onSubmit={handleSubmit}>
        <input type="text" className="m-2 p-2 rounded-md" placeholder="Username"
          value={user} onChange={e => setUser(e.target.value)} />
        <input type="password" className="m-2 p-2 rounded-md" placeholder="Password"
          value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="mt-2 bg-green-600 p-2 w-44 rounded-md">Login</button>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </>
  )
}