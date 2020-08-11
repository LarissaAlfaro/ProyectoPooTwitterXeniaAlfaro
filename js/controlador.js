usuariosComunes = [];
usuariosAdministradores = [];


localStorage.setItem('usuariosComunes',JSON.stringify(usuariosComunes));

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

// function iniciarSesion(){

//     usuariosComunes = JSON.parse(localStorage.getItem('usuariosComunes'));
//     var usuarioIngreso = document.getElementById('campo-usuaio').value;
//     var contraseñaIngreso = document.getElementById('campo-contraseña').value;


//     for(let i=0; i<usuariosComunes.length; i++){
//         if(usuarioIngreso )
//     }
// }
