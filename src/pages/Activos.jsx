import { Link, Outlet } from "react-router-dom"

export function Activos() {

  return (
    <main className="bg-slate-700 h-screen flex">
      <nav className="bg-slate-500">
        <ul className="w-60 p-4 text-center">
          <li className="pb-4 font-semibold hover:text-blue-700">
            <Link to="/activos/crearArt">Crear Articulo</Link>
          </li>
          <li className="pb-4 font-semibold hover:text-blue-700">
            <Link to="/activos/verArt">Ver Articulo</Link>
          </li>
          <li className="pb-4 font-semibold hover:text-blue-700">
            <Link to="/activos/crearMovi">Realizar Movimientos</Link>
          </li>
          <li className="pb-4 font-semibold hover:text-blue-700">
            <Link to="/activos/verMovi">Ver Movimientos</Link>
          </li>
        </ul>
      </nav>

      <section>
        <Outlet />
      </section>

    </main>
  )
}