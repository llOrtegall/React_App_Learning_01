import { Link, Outlet } from "react-router-dom"

export function Activos() {

  return (
    <main className="bg-slate-700 h-screen flex">
      <nav className="bg-slate-500 w-1/6">
        <ul className="p-4 text-center">
        <li className="pb-4 font-semibold hover:text-yellow-400">
            <Link to="/activos/verArt">Ver Articulos</Link>
          </li>
          <li className="pb-4 font-semibold hover:text-yellow-400">
            <Link to="/activos/crearArt">Crear Articulo</Link>
          </li>
          <li className="pb-4 font-semibold hover:text-yellow-400">
            <Link to="/activos/crearMovi">Realizar Movimientos</Link>
          </li>
          <li className="pb-4 font-semibold hover:text-yellow-400">
            <Link to="/activos/verMovi">Ver Movimientos</Link>
          </li>
        </ul>
      </nav>
      <section className="w-5/6">
        <Outlet />
      </section>

    </main>
  )
}