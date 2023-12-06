/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './PoliticaProducto.css'

const PoliticaProducto = (props) => {

    return (
        <div>
            <div className='container section-title-politic'>
                <h3> ¿Qué tenés que saber? </h3>
            </div>
            <div className='container politic-grid'>
                <div>
                    
                    <h4>Normas del tour</h4>
                    {props.politic.filter( item  => item.titulo === "Normas de la casa" ).map( p =>
                        <p key={p.id}>
                            {p.descripcion}
                    </p> )}
                </div>

                <div>
                    <h4>Salud y seguridad</h4>
                    {props.politic.filter( item  => item.titulo === "Salud y seguridad").map( p =>
                        <p key={p.id}>
                            {p.descripcion}
                    </p> )}
                </div>

                <div>
                    <h4>Política de cancelación</h4>
                    {props.politic.filter( item  => item.titulo === "Politica de cancelacion" ).map( p =>
                        <p key={p.id}>
                            {p.descripcion}
                    </p> )}
                </div>
            </div>
        </div>
    )
}

export default PoliticaProducto;