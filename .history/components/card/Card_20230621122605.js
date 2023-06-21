import React from 'react';

export  function Card ({data}) {
    return (
      <div>
        {data.id}
        {data.nombreIndicador}
        {data.codigoIndicador}
        {data.unidadMedidaIndicador}
        {data.valorIndicador}
        {data.fechaIndicador}
       { data.origenIndicador}
      </div>
    )
}