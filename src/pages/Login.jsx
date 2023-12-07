import { useState } from "react"
import { useAuth } from "../Auth/UseContextAuth";
import axios from "axios";

export function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://172.20.1.160:3000/login', { user, password })
      .then(res => {
        if (res.data.auth) {
          login(res.data.auth)
        }
      }).catch(err => {
        setError(err.response.data.error)
        setTimeout(() => {
          setError('')
        }, 4000)
      })
  }

  return (
    <>
      <form className="flex flex-col h-full items-center justify-center relative" onSubmit={handleSubmit}>
        <input type="text" className="m-2 p-2 rounded-md" placeholder="Username"
          value={user} onChange={e => setUser(e.target.value)} />
        <input type="password" className="m-2 p-2 rounded-md" placeholder="Password"
          value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="mt-2 bg-green-400 p-2 w-44 rounded-md text-slate-900 font-bold hover:bg-yellow-400">
          Iniciar Sesion
        </button>
        {error && <div className="text-red-800 absolute bottom-80">{error}</div>}
      </form>
    </>
  )
}