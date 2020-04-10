import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {

    // State del formulario
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    const [errores, actualizarError] = useState({
       formulario: false
    });

    // Funcion que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = e => {

        actualizarError({
            ...errores,
            formulario: false
        });

        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        });

    };

    // Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;
    const { formulario } = errores;

    // cuanto el usuairo envia la cita
    const submitCita = e => {
        e.preventDefault();

        // Validar
        if( mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError({
                ...errores,
                formulario: true
            });
            return;
        }

        // Asignar un ID
        cita.id = uuidv4();

        // crear la cita
        crearCita( cita );

        // Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
        });

    };

    return(
        <Fragment>
            <h2>Crear cita</h2>

            { formulario ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label htmlFor="">Nombre mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={ actualizarState }
                    value={mascota}
                />

                <label htmlFor="">Nombre dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    onChange={ actualizarState }
                    value={propietario}
                />

                <label htmlFor="">Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={ actualizarState }
                    value={fecha}
                />

                <label htmlFor="">Hora</label>
                <input
                    type="text"
                    name="hora"
                    className="u-full-width"
                    onChange={ actualizarState }
                    value={hora}
                />

                <label htmlFor="">Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={ actualizarState }
                    value={sintomas}
                >
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >AGREGAR CITAS</button>


            </form>
        </Fragment>
    );

};

Formulario.propTypes = {

    crearCita: PropTypes.func.isRequired

};

export default Formulario;