import axios from "axios"
import { useState } from "react"

export function CrearArticulo() {
  const [nombre, setNombre] = useState('')
  const [marca, setMarca] = useState('')
  const [model, setModeL] = useState('')
  const [type, setType] = useState(Number)
  const [placa, setPlaca] = useState(Number)
  const [serial, setSerial] = useState('')
  const [estado, setEstado] = useState(Number)
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState(Number)
  const [sucursal, setSursal] = useState('')

  const [message, setMessage] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault()
    axios.post('http://localhost:3000/createItem',
      { nombre, marca, model, type, placa, serial, estado, precio, descripcion, sucursal })
      .then(res => {
        if (res.status === 201) {
          setMessage('Articulo creado con exito')
          setNombre(''); setMarca(''); setModeL(''); setType(Number); setPlaca(Number); setSerial(''); setEstado(Number); setDescripcion(''); setSursal(''); setPrecio(Number)
        } else {
          setMessage('Error al crear el articulo')
        }
      })
      .catch(err => {
        setMessage(err.response.data.error)
      })
  }

  return (
    <section>
      <h2 className="bg-blue-600 w-full text-center py-3 font-bold text-xl">
        Creación de Activos / Insumos
      </h2>
      <form className="flex flex-col items-center m-2 p-4 pt-12 text-lg bg-slate-800 rounded-md" onSubmit={handleSubmit}>
        <input type="text" className="m-2 p-2 rounded-md" placeholder="Nombre del Item"
          value={nombre} onChange={e => setNombre(e.target.value)} />
        <input type="text" className="m-2 p-2 rounded-md" placeholder="Marca del Item"
          value={marca} onChange={e => setMarca(e.target.value)} />
        <input type="text" className="m-2 p-2 rounded-md" placeholder="Modelo del Item"
          value={model} onChange={e => setModeL(e.target.value)} />

        <select type="number" className="m-2 p-2 rounded-md" placeholder="Tipo de Item" value={type} onChange={e => setType(e.target.value)} >
          <option value={0}>Activo</option>
          <option value={1}>Insumo</option>
        </select>
        
        <label>Precio Item: </label>
        <input type="number" className="m-2 p-2 rounded-md" placeholder="Precio del Item"
          value={precio} onChange={e => setPrecio(e.target.value)} />

        <label>N° PLaca Asignado: </label>
        <input type="Number" className="m-2 p-2 rounded-md" placeholder="Placa del Item"
          value={placa} onChange={e => setPlaca(e.target.value)} />
        <input type="text" className="m-2 p-2 rounded-md" placeholder="Serial del Item"
          value={serial} onChange={e => setSerial(e.target.value)} />

        <select type="number" className="m-2 p-2 rounded-md" placeholder="Estado del Item" value={estado} onChange={e => setEstado(e.target.value)}>
          <option value={0}>Nuevo</option>
          <option value={1}>Bueno</option>
          <option value={2}>Reparación</option>
          <option value={3}>Dañado</option>
        </select>
        <input type="text" className="m-2 p-2 rounded-md" placeholder="Descripción del Item"
          value={descripcion} onChange={e => setDescripcion(e.target.value)} />
        <input type="text" className="m-2 p-2 rounded-md" placeholder="Sucursal del Item"
          value={sucursal} onChange={e => setSursal(e.target.value)} />

        <button className="w-64 rounded-lg p-2 bg-green-600 ">
          Crear Articulo
        </button>
        {message && <p className="text-red-500">{message}</p>}
      </form>
    </section>
  )
}