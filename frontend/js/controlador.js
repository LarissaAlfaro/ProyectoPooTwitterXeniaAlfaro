var usuarios;
var usuarioActual;

function registrar() {
    $('#modal-registrar').modal('show');
}

function ingresarNombre() {
    document.getElementById('cual-nombre').innerHTML = '';
    document.getElementById('label-nombre').classList.remove('seleccionar-letra-invalido');
    document.getElementById('campo-nombre').classList.remove('seleccionar-input-invalido');
    document.getElementById('label-nombre').classList.add('seleccionar-letra');
    document.getElementById('campo-nombre').classList.add('seleccionar-input');
    document.getElementById('label-telefono').classList.remove('seleccionar-letra');
    document.getElementById('campo-telefono').classList.remove('seleccionar-input');
}

function ingresarTelefono() {
    document.getElementById('label-telefono').classList.add('seleccionar-letra');
    document.getElementById('campo-telefono').classList.add('seleccionar-input');
    document.getElementById('label-nombre').classList.remove('seleccionar-letra');
    document.getElementById('campo-nombre').classList.remove('seleccionar-input');
} 

function ingresarUsuario() {
    document.getElementById('label-usuario').classList.add('seleccionar-letra');
    document.getElementById('campo-usuario').classList.add('seleccionar-input');
    document.getElementById('label-contraseña').classList.remove('seleccionar-letra');
    document.getElementById('campo-contraseña').classList.remove('seleccionar-input');
}

function ingresarContraseña() {
    document.getElementById('label-contraseña').classList.add('seleccionar-letra');
    document.getElementById('campo-contraseña').classList.add('seleccionar-input');
    document.getElementById('label-usuario').classList.remove('seleccionar-letra');
    document.getElementById('campo-usuario').classList.remove('seleccionar-input');
} 

function verificarNombre() {
    if(document.getElementById('campo-nombre').value == ''){
        document.getElementById('label-nombre').classList.add('seleccionar-letra-invalido');
        document.getElementById('campo-nombre').classList.add('seleccionar-input-invalido');
        document.getElementById('cual-nombre').innerHTML = '¿Cuál es tu nombre?';
    }
    else{
        document.getElementById('cual-nombre').innerHTML = '';
        document.getElementById('label-nombre').classList.remove('seleccionar-letra-invalido');
        document.getElementById('campo-nombre').classList.remove('seleccionar-input-invalido');
    }
}

function validarTelefonoCorreo(campo) {
    if(document.getElementById('label-telefono').innerHTML == 'Teléfono'){
           
            const regexTelefono = /^([9,3]{1})+([0-9]{7})$/;

            if(regexTelefono.test(campo.value)){ 
                document.getElementById('telefono-invalido').innerHTML = '';
                document.getElementById('label-telefono').classList.remove('seleccionar-letra-invalido');
                document.getElementById('campo-telefono').classList.remove('seleccionar-input-invalido');
            }else{
                document.getElementById('telefono-invalido').innerHTML = 'Por favor ingrese un número de teléfono válido.';
                document.getElementById('label-telefono').classList.add('seleccionar-letra-invalido');
                document.getElementById('campo-telefono').classList.add('seleccionar-input-invalido');
            }
    
        }else{

            const regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(regexCorreo.test(campo.value)){ 
                document.getElementById('telefono-invalido').innerHTML = '';
                document.getElementById('label-telefono').classList.remove('seleccionar-letra-invalido');
                document.getElementById('campo-telefono').classList.remove('seleccionar-input-invalido');
            }else{
                document.getElementById('telefono-invalido').innerHTML = 'Por favor, introduce una dirección de correo eléctronico válida';
                document.getElementById('label-telefono').classList.add('seleccionar-letra-invalido');
                document.getElementById('campo-telefono').classList.add('seleccionar-input-invalido');
            }    
    }    
}


function contarCaracteres(dato) {
    var nombre=dato.value;
    if((nombre.length >= 0) && (nombre.length <= 50)){
        document.getElementById('contador-caracteres').innerHTML = `${nombre.length}/50`;
    }
}

function cambiarTel() {
        document.getElementById('label-telefono').classList.remove('seleccionar-letra-invalido');
        document.getElementById('campo-telefono').classList.remove('seleccionar-input-invalido');
        document.getElementById('telefono-invalido').innerHTML = '';
        document.getElementById('campo-telefono').value = '';
        document.getElementById('label-telefono').classList.add('seleccionar-letra');
        document.getElementById('campo-telefono').classList.add('seleccionar-input');
        
    if (document.getElementById('label-telefono').innerHTML == 'Teléfono'){
        document.getElementById('label-telefono').innerHTML = 'Email';
        document.getElementById('correo-tel').innerHTML = 'Usar Teléfono';      
    }
    else {
        document.getElementById('label-telefono').innerHTML = 'Teléfono';
        document.getElementById('correo-tel').innerHTML = 'Usar Correo Electónico';
    }   
}

function conectar() {
    if ((document.getElementById('campo-usuario').value != "") && (document.getElementById('campo-contraseña').value != "")) {
        document.getElementById('conectarse').disabled = false;
    }
    else{
        document.getElementById('conectarse').disabled = true;
    }
}

function mes() {
    document.getElementById('fecha-mes').innerHTML = `<option> </option>`;
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    for (let i=0; i<meses.length; i++){
        document.getElementById('fecha-mes').innerHTML += `<option>${meses[i]}</option>`;
    }
}

function dia() {
    document.getElementById('fecha-dia').innerHTML = `<option> </option>`;
    for (let i=1; i<=31; i++){
        document.getElementById('fecha-dia').innerHTML += `<option>${i}</option>`;
    }
}

function año() {
    document.getElementById('fecha-año').innerHTML += `<option> </option>`;
    for (let i=2020; i>=1900; i--){
        document.getElementById('fecha-año').innerHTML += `<option>${i}</option>`;
    }
}

dia();
mes();
año();

function nuevoUsuario(){
    console.log("hola");
    usuariosComunes = JSON.parse(localStorage.getItem('usuariosComunes'));

    const usuario = {
        nombre : document.getElementById('campo-nombre').value,
        usuario: `@${(document.getElementById('campo-nombre').value).replace(/ /g, "")}`,
        telCorreo : document.getElementById('campo-telefono').value,
        fechaNacimiento : `${document.getElementById('fecha-dia').value}/${document.getElementById('fecha-mes').value}/${document.getElementById('fecha-año').value}`
    }

    usuariosComunes.push(usuario);
    localStorage.setItem('usuariosComunes', JSON.stringify(usuariosComunes));
}


function opcionesUsuario() { 
    $('#modalOpcionesUsuario').modal('show')
}


function twittearBarraLateral() {
    $('#modalTwitterBarraLateral').modal('show')
}


function responder() {

}

function retweet() {

}

function like() {

}

function guardar() {

}

function obtenerUsuarios(){
   
    axios({
        url: '../backend/api/usuarios.php',
        method: 'get',
        responseType: 'json'
        
    }).then(res=>{
        usuarios = res.data;
        console.log (usuarios);

    }).catch(error=>{
        console.error(error);
    })
}


obtenerUsuarios();

function conectarse() {

    var usuarioValido;
    var contraseñaValida;

    usuarioIngresado = document.getElementById('campo-usuario').value; 
    console.log(usuarioIngresado);

    contraseñaIngresada = document.getElementById('campo-contraseña').value;
    console.log(contraseñaIngresada);

    for (i=0; i<usuarios.length; i++) {
        if ((usuarioIngresado == usuarios[i].usuario) || (usuarioIngresado == usuarios[i].correo) || (usuarioIngresado == usuarios[i].telefono)){
            usuarioValido = true;
        }

        if (contraseñaIngresada == usuarios[i].contraseña) {
            contraseñaValida = true;
        }

        if(contraseñaValida==true && usuarioValido==true){
            document.getElementById('login-invalido').style.display = 'none';
            usuarioActual = usuarios[i];
            window.location.href = "home.html";

        } else {
            document.getElementById('login-invalido').style.display = 'block';
        }
    }
}

// function obtenerTweets() {

//     console.log('Mostrar tweets del usuario ' + usuarioActual.idUsuario);

//     axios({
//         url: '../backend/api/tweets.php?idUsuario=' + usuarioActual.idUsuario,
//         method: 'get',
//         responseType: 'json'
      
//     }).then(res=>{
//         console.log(res);

//         usuariosTweets = [];
//         for(j=0; j<usuarios.length;j++){
//            for(t=0; t<res.data.length; t++){
//                 if(usuarios[j].idUsuario == res.data[t].idUsuario){
//                     usuariosTweets.push(usuarios[$j]);
//                 }
//            }
//         }

//         document.getElementById('seccion-tweets').innerHTML = '';

//         for (i=0; i<res.data.length; i++){
//             document.getElementById('seccion-tweets').innerHTML += ` <div class="seccion-tweet-texto">
//                             <table class="col-12">
//                                 <tr>
//                                     <td class="td-imagen-tweet">
//                                     <span id="icono-perfil" style="padding-left: 15px;"><img id="img-icono" style="margin-bottom: 220%;" src="${usuariosTweets[i].urlPerfil}.jpg"></span>
//                                     </td>
//                                     <td id="tweet-texto" class="tweet-texto">
//                                         <div>
//                                             <span><a href="#" class="letras-usuario-nombre">${usuariosTweets[i].nombre}</a></span>
//                                             <span class="letras-cuenta"></span>${usuariosTweets[i].usuario}<span class="letras-cuenta"> · ${res.data[i].fechaPublicacion}</span>
//                                         </div>
//                                         <div class="contenido-tweet">
//                                         ${res.data[i].contenido}
//                                         </div>
//                                         <div style="padding-top:20px">
//                                             <button style="position: relative; bottom: 20px; margin-right:10%;" class="boton-seccion" onclick="responder()"><svg viewBox="0 0 24 24" style="width: 20px; fill:#7C8C99;"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg><span class="letras-cuenta contador-acciones">1</span></button>
                                    
//                                             <button style="position: relative; bottom: 20px; margin-right:10%;" class="boton-seccion boton-retweet" onclick="retweet()"><svg viewBox="0 0 24 24" style="width: 20px; fill:#7C8C99;"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg><span class="letras-cuenta contador-acciones">1</span></button>
                                        
//                                             <button style="position: relative; bottom: 20px; margin-right:10%;" class="boton-seccion" onclick="like()"><svg viewBox="0 0 24 24" style="width: 20px; fill:#7C8C99;"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg><span class="letras-cuenta contador-acciones">1</span></button>
                                        
//                                             <button style="position: relative; bottom: 20px; margin-right:10%;" class="boton-seccion" onclick="enviar()"><svg viewBox="0 0 24 24" style="width: 20px; fill:#7C8C99;"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg><span class="letras-cuenta contador-acciones">1</span></button> 
//                                         </div>
//                                     </td>   
//                                 </tr>
//                             </table>
//                         </div>
    
//             `;
//         }
//     }).catch(error=>{
//         console.error(error);
//     })
// }








