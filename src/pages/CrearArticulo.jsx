import axios from "axios"
import { useState } from "react"

export function CrearArticulo() {
  const [nombre, setNombre] = useState('')
  const [activo, setActivo] = useState('')
  const [serial, setSerial] = useState('')
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [precio, setPrecio] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [bodega, setBodega] = useState('')

  const [message, setMessage] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault()
    axios.post('http://localhost:3000/createItem',
      { nombre, activo, serial, precio, descripcion, marca, modelo, bodega })
      .then(res => {
        if (res.status === 201) {
          setMessage('Articulo creado con exito')
          setNombre('')
          setActivo('')
          setSerial('')
          setMarca('')
          setModelo('')
          setPrecio('')
          setDescripcion('')
          setBodega('')
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
        <div className="flex items-center pb-4">
          <label className="w-44 text-center">Nombre Articulo:</label>
          <input className="p-1 rounded-md" type="text"
            value={nombre} onChange={ev => setNombre(ev.target.value)} />
          <label className="w-44 text-center">N° Activo Asignado:</label>
          <input className="p-1 rounded-md" type="text"
            value={activo} onChange={ev => setActivo(ev.target.value)} />
          <label className="w-44 text-center">Marca Articulo:</label>
          <input className="p-1 rounded-md" type="text"
            value={marca} onChange={ev => setMarca(ev.target.value)} />
          <label className="w-44 text-center">Serial Articulo:</label>
          <input className="p-1 rounded-md" type="text"
            value={serial} onChange={ev => setSerial(ev.target.value)} />
        </div>
        <div className="flex items-center pb-4">
          <label className="w-44 text-center">Modelo Articulo:</label>
          <input className="p-1 rounded-md" type="text"
            value={modelo} onChange={ev => setModelo(ev.target.value)} />
          <label className="w-44 text-center">Precio Articulo:</label>
          <input className="p-1 rounded-md" type="text"
            value={precio} onChange={ev => setPrecio(ev.target.value)} />
          <label className="w-44 text-center">Description:</label>
          <input className="p-1 rounded-md" type="text"
            value={descripcion} onChange={ev => setDescripcion(ev.target.value)} />
          <label className="w-44 text-center">Bodega:</label>
          <select className="p-1.5 rounded-md w-52 text-center"
            value={bodega}
            onChange={(ev) => setBodega(ev.target.value)} >
            <option>Seleccione Bodega</option>
            <option className="text-center" value="656f89209e965599677c0abf" >
              Principal Multired
            </option>
          </select>
        </div>
        <button className="w-64 rounded-lg p-2 bg-green-600 ">
          Crear Articulo
        </button>
        {message && <p className="text-red-500">{message}</p>}
      </form>
    </section>
  )
}