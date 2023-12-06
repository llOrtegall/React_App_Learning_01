import axios from "axios"
import { useEffect, useState } from "react"

export function VerArticulos() {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/getItems')
      .then(res => {
        console.log(res.data.items)       
        setItems(res.data.items)
      })
  }, [])

  return (
    <>
      <table className="w-full">
        <thead className="bg-blue-400">
          <tr className="text-black text-lg">
            <th>N°</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Serial</th>
            <th>N° Placa</th>
            <th>Bodega / PDV</th>
            <th>N° Sucursal</th>
            <th>Ubicacion</th>
            <th>Valor $</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {items.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.nombre}</td>
              <td>{item.description}</td>
              <td>{item.serial}</td>
              <td>000{item.activo}</td>
              <td>{item.bodega.nombre}</td>
              <td>{item.bodega.sucursal}</td>
              <td>{item.bodega.ubicacion}</td>
              <td>$ {item.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}