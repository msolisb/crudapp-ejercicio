import React, { useState, useEffect } from 'react'

const initialDb = {
  name: '',
  constellation: '',
  id: null,
}

const CrudForm = () => {
  const [form, setForm] = useState(initialDb)

  const handleChange = () => {}

  const handleSubmit = () => {}

  const handleReset = () => {}

  return (
    <>
      <h3>Agregar</h3>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Nombre'
          value={form.name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='constellation'
          placeholder='Constelación'
          value={form.constellation}
          onChange={handleChange}
        />
        <input type='submit' value='Agregar' />
        <input type='reset' value='Limpiar' onClick={handleReset} />
      </form>
    </>
  )
}

export default CrudForm
