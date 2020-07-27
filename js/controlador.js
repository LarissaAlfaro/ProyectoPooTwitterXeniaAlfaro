function registrar() {
    $('#modal-registrar').modal('show');
}

function ingresarNombre() {
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

function contarCaracteres(dato) {
    console.log(dato.value);
    var nombre=dato.value;
    console.log("stage2");
    if((nombre.length >= 0) && (nombre.length <= 50)){
        console.log("stage3");
        document.getElementById('contador-caracteres').innerHTML = `${nombre.length}/50`;
    }
}

function cambiarTel() {
    if (document.getElementById('label-telefono').innerHTML == 'Teléfono'){
        document.getElementById('label-telefono').innerHTML = 'Email';
        document.getElementById('correo-tel').innerHTML = 'Usar Teléfono';
    }
    else {
        document.getElementById('label-telefono').innerHTML = 'Teléfono';
        document.getElementById('correo-tel').innerHTML = 'Usar Email';
    }   
}

// function mes() {
//     document.getElementById('fecha-mes').innerHtml ="";
//     meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
//     for (let i=0; i<meses.length; i++){
//         document.getElementById('fecha-mes').innerHtml += `<option>${meses[i]}</option>`;
//     }
// }

// function dia() {
//     document.getElementById('fecha-dia').innerHtml ="";
//     for (let i=0; i<=31; i++){
//         document.getElementById('fecha-dia').innerHtml += `<option>${i}</option>`;
//     }
// }

// function año() {
//     for (let i=1900; i<=2020; i++){
//         document.getElementById('fecha-año').innerHtml += `<option>${i}</option>`;
//     }
// }

//dia();
//mes();
//año();



