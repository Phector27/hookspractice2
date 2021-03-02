import { Fragment, useState } from "react"
import PropTypes from 'prop-types'
import Error from './Error'


const Pregunta = ({setPresupuesto, setRestante, setMostrarpregunta}) => {

    // Definir state
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    // Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    // Submit para definir presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault()

        // Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true)
            return
        }
    
        // Si se pasa la validación
        guardarError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMostrarpregunta(false)
    }

    return (
        <Fragment>
            <h2>Indica tu presupuesto</h2>
            {
                error
                    ?
                    <Error mensaje='El presupuesto es incorrecto'/>
                    :
                    null
            }
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Indica tu presupuesto'
                    onChange={definirPresupuesto}
                />

                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Definir presupuesto'
                />
            </form>
        </Fragment>
    )
}

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarpregunta: PropTypes.func.isRequired
}

export default Pregunta