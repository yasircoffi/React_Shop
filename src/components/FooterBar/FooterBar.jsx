import React from 'react'
import "./footerbar.css"

export default function FooterBar() {
  return (
    <div className="foot">
  <div className="container">
      <div className="row">
         
          <div className="col-lg-3 col-md-6 footer-info">
              <p><img src="https://i.im.ge/2022/10/10/2MQPYP.logo-footer.webp" alt="Logo DRAFT Store" height={80} /></p>
              <p>Somos una tienda especializada en el juego de cartas Magic: The Gathering, tenemos un amplio catalogo de productos, realizamos envios a todo el pais y brindamos gran atención al cliente.</p>
          </div>
          
          <div className="col-lg-4 col-md-6 footer-contact">
              <h6 className='titleFooter'>CONTACTANOS</h6>
              <p>Santa Fe, Argentina</p>
              <p>Telefono: <a className='linkFooter' href="tel:+34678567876">+54 342-5107396</a></p>
              <p>Email: <a className='linkFooter' href="mailto:contacto@draftstore.com">contacto@draftstore.com</a></p>
          </div>
        
          <div className="col-lg-2 col-md-6 footer-redes">
              <h6 className='titleFooter'>SEGUINOS</h6>
              <p></p>
              <a className='linkFooter' href="https://www.instagra.com/"><img className="redScale"
                      src="https://i.im.ge/2022/10/11/2TcRv1.icono-instagram.png" alt="Instragam"/></a>
              <a className='linkFooter' href="https://www.facebook.com/"><img className="redScale"
                      src="https://i.im.ge/2022/10/11/2TcK6m.icono-facebook.png" alt="Facebook"/></a>
              <a className='linkFooter' href="https://twitter.com/"><img className="redScale"
                      src="https://i.im.ge/2022/10/11/2Tcg7p.icono-twitter.png" alt="Twitter"/></a>
              <p></p>
              <p> &copy; Copyright DRAFT Store 2022</p>
          </div>
      </div>
  </div>
</div>
  )
}
