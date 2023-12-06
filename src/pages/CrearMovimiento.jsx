import axios from "axios"
import { useEffect, useState } from "react"

// {
//   "entega": {
//     "nombre": "Nombre de quien entrega",
//     "proceso": "Proceso de quien entrega",
//     "rol": "Rol de quien entrega",
//     "email": "Email de quien entrega"
//   },
//   "recibe": {
//     "nombre": "Nombre de quien recibe",
//     "proceso": "Proceso de quien recibe",
//     "rol": "Rol de quien recibe",
//     "email": "Email de quien recibe"
//   },
//   "item": "ID del item",
//   "bodegaOrigen": "ID de la bodega de origen",
//   "bodegaDestino": "ID de la bodega de destino"
// }

export function CrearMovimiento() {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('')
  const [filteredItems, setFilteredItems] = useState([])
  const [itemSelect, setItemSelect] = useState()

  const [entregaP, setEntregaP] = useState("")
  const [recibeP, setRecibeP] = useState("")
  const [item, setItem] = useState('')
  const [bodegaOrigen, setBodegaOrigen] = useState('')
  const [bodegaDestino, setBodegaDestino] = useState('')

  useEffect(() => {
    axios.get("http://localhost:3000/getItems")
      .then(response => {
        console.log(response.data.items)
        setItems(response.data.items)
      })
  }, [])

  useEffect(() => {
    setFilteredItems(items.filter(item => item.activo.toString().startsWith(filter)))
  }, [filter, items])

  function handleItemClick(item) {
    console.log(item)
    setItemSelect(item);
    setItem(item._id)
    setBodegaOrigen(item.bodega._id)
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post("http://localhost:3000/createMovimiento", {
      entrega: entregaP,
      recibe: recibeP,
      item,
      bodegaOrigen,
      bodegaDestino
    })
      .then(response => {
        console.log(response.data)
      })
  }

  return (
    <main className="flex flex-col w-full">
      <h1 className="text-xl font-bold text-center">Crear Movimiento</h1>
      <section className="pt-2 w-full " style={{ maxHeight: '250px', overflowY: 'auto' }}>
        <div className="w-full flex items-center justify-center gap-4 pb-2">
          <label> 1. Seleccionar Activo  ----------  Busqueda N° Activo: </label>
          <input type="text" value={filter}
            className="border-2 border-gray-400 rounded-md"
            onChange={(e) => setFilter(e.target.value)} />
        </div>
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
            {filteredItems.map((item, index) => (
              <tr key={item._id} onClick={() => handleItemClick(item)}
                className="hover:bg-blue-100 cursor-pointer text-black">
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
      </section>


      {itemSelect &&
        <section className="flex flex-col">
          <label> 2. Realizar Movimiento  </label>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label>Persona Que Entrega</label>
            <select className="w-min" type="text" placeholder="Entrega"
              onChange={ev => setEntregaP(ev.target.value)}>
              <option value="Ivan Ortega">1</option>
              <option value="Andrea Victoria">2</option>
            </select>
            <label>Persona Que Recibe</label>
            <select className="w-min" type="text" placeholder="Recibe"
              onChange={ev => setRecibeP(ev.target.value)}>
              <option value="Ivan Ortega">1</option>
              <option value="Andrea Victoria">2</option>
            </select>
            <label>Item Seleccionado</label>
            <p>Nombre: {itemSelect.nombre}</p>
            <p>Activo: {itemSelect.activo}</p>
            <p>Bodega Actual : Origen: {itemSelect.bodega.nombre}</p>
            <label>Seleccione Bodega / PDT Destino:</label>
            <select className="w-min" type="text"
              onChange={ev => setBodegaDestino(ev.target.value)}>
              <option value="656f89209e965599677c0abf">Bodega Principal</option>
              <option value="656f89319e965599677c0ac1">Bodega Stock Soporte</option>
            </select>
            <button className="w-40 bg-blue-600 my-2 rounded-md"> Realizar Movimiento </button>
          </form>
        </section>}
    </main>
  )
}