import { useState } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import Error from './Error'


const Formulario = ({setGasto, setCreargasto}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)


    const agregarGasto = e => {
        e.preventDefault()

        // validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            setError(true)
            return;
        }
        setError(false)

        //construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        console.log(gasto)

        // pasar gasto al componente principal
        setGasto(gasto)
        setCreargasto(true)

        // resetear formulario
        setNombre('')
        setCantidad(0)

    }

    return (
        <form
            onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aquí</h2>

            {
                error
                    ?
                    <Error mensaje='Ambos campos son obligatorios o presupuesto incorrecto' />
                    :
                    null
            }

            <div className='campo'>
                <label>Nombre Gasto</label>
                <input
                    type='text'
                    className='u-full-width'
                    placeholder='Ej. Transporte'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Ej. 200'
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input
                type='submit'
                className='button-primary u-full-width'
                value='Añadir gasto'
            />
        </form>
    );
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCreargasto: PropTypes.func.isRequired
}

export default Formulario;