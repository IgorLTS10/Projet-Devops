import React from 'react';
import '../../index.css'

function Navbar() {
  return (
      <div className="navbar bg-base-200">
          <div className="navbar-start">
              <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a href="/Pass">Pass disponible</a></li>
                      <li>
                          <a>Carnets</a>
                          <ul className="p-2">
                              <li><a href="/CarnetEntretien">Carnet entretien</a></li>
                              <li><a href="/CarnetAnimal">Carnet Animal</a></li>
                          </ul>
                      </li>
                      <li><a href="/Crud">CRUD Espace</a></li>
                      <li><a href="/Stats">Statistiques</a></li>
                  </ul>
              </div>
              <a className="normal-case text-xl" href="/"><strong>ZooReact</strong></a>
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                  <li><a href="/Pass">Pass disponible</a></li>
                  <li tabIndex={0}>
                      <details>
                          <summary>Carnets</summary>
                          <ul className="p-2">
                              <li><a href="/CarnetEntretien">Carnet entretien</a></li>
                              <li><a href="CarnetAnimal">Carnet Animal</a></li>
                          </ul>
                      </details>
                  </li>
                  <li><a href="/Crud">CRUD Espace</a></li>
                  <li><a href="/Stats">Statistiques</a></li>
              </ul>
          </div>
          <div className="navbar-end">
              <a className="btn bg-emerald-500 text-white" href="/Admin">Admin</a>
          </div>
      </div>
  );
}

export default Navbar;
