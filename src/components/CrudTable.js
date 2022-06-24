import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({ db }) => {
  return (
    <>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constalación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {db.length === 0 ? (
            <tr>
              <td colSpan='3'>No Existen Datos</td>
            </tr>
          ) : (
            db.map((el) => <CrudTableRow key={el.id} el={el} />)
          )}
        </tbody>
      </table>
    </>
  )
}

export default CrudTable
