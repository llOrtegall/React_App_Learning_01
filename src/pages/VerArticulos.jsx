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
            <th>Modelo</th>
            <th>Descripción</th>
            <th>Valor $</th>
            <th className="bg-green-600">Bodega / PDV</th>
            <th className="bg-green-600">N° Sucursal</th>
            <th className="bg-green-600">Ubicacion</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {items.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.nombre}</td>
              <td>{item.marca}</td>
              <td>{item.serial}</td>
              <td>{item.activo}</td>
              <td>{item.modelo}</td>
              <td>{item.descripcion}</td>
              <td>$ {item.precio}</td>
              <td>{item.bodega.nombre}</td>
              <td>{item.bodega.sucursal}</td>
              <td>{item.bodega.ubicacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}