import React from 'react';

export  function Card ({data}) {
    return (
      <div>
       
        {data.nombreIndicador}
        {data.unidadMedidaIndicador}
        {data.valorIndicador}
        {data.fechaIndicador}
       { data.origenIndicador}
      </div>
    )
}