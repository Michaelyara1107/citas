import React from "react";
import PropTypes from 'prop-types';

const Cita = ( {cita, eliminarCita } ) => (
    <div className="cita">
        <p>Mascota: <span>{ cita.mascota }</span></p>
        <button
            className="button-primary"
            onClick={ () => eliminarCita( cita.id ) }
        >Eliminar x</button>
    </div>
);

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
};

export default Cita;
