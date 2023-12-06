import axios from "axios"
import { useEffect } from "react"

export function VerMovimiento() {

  useEffect(() => {
    axios.get("http://localhost:3000/getMovimientos")
      .then(response => {
        console.log(response.data)
      })
  }, [])

  return (
    <h1>Ver Movimiento</h1>
  )
}