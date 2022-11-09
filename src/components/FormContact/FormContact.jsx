import React from 'react'
import Button from "../Button/Button"

function FormContact() {
  return (<div className='container'>
        
<section class="mb-4">


    <h2 class="h1-responsive font-weight-bold text-center my-4">Contactanos!</h2>

    <p class="text-center w-responsive mx-auto mb-5">Tienes alguna consulta para hacernos acerca de tu compra, producto o sugerencia, no dudes en contactarnos.</p>

    <div class="row">

     
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                
                <div class="row">

                
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Nombre</label>
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Email</label>
                        </div>
                    </div>
           

                </div>
       
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Asunto</label>
                        </div>
                    </div>
                </div>
           
                <div class="row">

               
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Mensaje</label>
                        </div>

                    </div>
                </div>
              
              <br></br>

            </form>

            <div class="text-center text-md-left">
                <Button class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Enviar</Button>
            </div>
            <div class="status"></div>
        </div>
     
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Santa Fe, Argentina</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+54 342-5107396</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contacto@draftstore.com</p>
                </li>

                <li>
                <img src="https://i.im.ge/2022/10/09/1GyrXJ.logo.webp" alt="Logo DRAFT Store" height={80}/>
                </li>
            </ul>
        </div>
    

    </div>

</section>
    </div>
  )
}

export default FormContact