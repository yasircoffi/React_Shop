import React from 'react'
import "./bannerone.css"

export default function BannerOne() {
  return (
    <div className='backSliderOne'>
        <img className='imageSliderOne' src={'https://images.ctfassets.net/s5n2t79q9icq/3FDVElIwCIFGelNsIolb23/e93d45fd53ce60d6e82bc6b0bf12db36/MTG40K_SP_STA.png?w=660&fm=webp'} alt="Imagen Presentación"/>
        <h1 className='titleSliderOne'>DIRIGE UN NUEVO CAMPO DE BATALLA EN LA GUERRA SIN FIN DEL LEJANO FUTURO.</h1>
        <p className='detailSliderOne'>La guerra del lejano futuro se libra con nuevas cartas, ediciones de coleccionista completamente foil y los señores de la guerra más populares. ¡Ya disponible!</p>
    </div>
  )
}
