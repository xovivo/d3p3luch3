
var url = window.location.href;
var swLocation = 'sw.js';
var swReg;
if (navigator.serviceWorker) {
    if (url.includes('localhost')) {
        swLocation = 'sw.js';
    }
    window.addEventListener('load', function () {
        navigator.serviceWorker.register(swLocation).then(function (reg) {
            swReg = reg;
            swReg.pushManager.getSubscription().then(verificaSuscripcion);

        });

    });

}

var googleMapKey = 'AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8';
var modal = $('#modal');
var btnActivadas = $('.btn-noti-activadas');
var btnDesactivadas = $('.btn-noti-desactivadas');
var btnLocation = $('#location-btn');
var btnTomarFoto = $('#tomar-foto-btn');
var btnPhoto = $('#photo-btn');
var contenedorCamara = $('.camara-contenedor');
var lat = null;
var lng = null;
var foto = null;



const camara = new Camara($('#player')[0]);




// Notificaciones
function verificaSuscripcion(activadas) {

    if (activadas) {

        btnActivadas.removeClass('oculto');
        btnDesactivadas.addClass('oculto');

    } else {
        btnActivadas.addClass('oculto');
        btnDesactivadas.removeClass('oculto');
    }

}



function enviarNotificacion() {

    const notificationOpts = {
        body: 'Este es el cuerpo de la notificación',
        icon: 'img/icons/icon-72x72.png'
    };


    const n = new Notification('Hola Mundo', notificationOpts);

    n.onclick = () => {
        console.log('Click');
    };

}


function notificarme() {

    if (!window.Notification) {
        console.log('Este navegador no soporta notificaciones');
        return;
    }

    if (Notification.permission === 'granted') {

        // new Notification('Hola Mundo! - granted');
        enviarNotificacion();

    } else if (Notification.permission !== 'denied' || Notification.permission === 'default') {

        Notification.requestPermission(function (permission) {

            console.log(permission);

            if (permission === 'granted') {
                // new Notification('Hola Mundo! - pregunta');
                enviarNotificacion();
            }

        });

    }



}

// notificarme();


// Get Key
function getPublicKey() {
    return fetch('https://ovgsoft.com/depeluche/apipeluche/mensajes.php')
        .then(res => res.arrayBuffer())
        .then(key => new Uint8Array(key));


}

// getPublicKey().then( console.log );
btnDesactivadas.on('click', function () {

    if (!swReg) return console.log('No hay registro de SW');

    getPublicKey().then(function (key) {

        swReg.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: key
            })
            .then(res => res.toJSON())
            .then(suscripcion => {

                console.log(suscripcion);
   {
       fetch('https://ovgsoft.com/depeluche/apipeluche/mensajes.php', {
                           method: 'POST',
                           headers: {
                               'Content-Type': 'application/json'
                           },
                           body: JSON.stringify(suscripcion)
                       })
                       .then(verificaSuscripcion)
                       .catch(cancelarSuscripcion);
   
   }
            });


    });


});



function cancelarSuscripcion() {

    swReg.pushManager.getSubscription().then(subs => {

        subs.unsubscribe().then(() => verificaSuscripcion(false));

    });


}

btnActivadas.on('click', function () {

    cancelarSuscripcion();


});


// Crear mapa en el modal
function mostrarMapaModal(lat, lng) {

    $('.modal-mapa').remove();

    var content = `
            <div class="modal-mapa">
                <iframe
                    width="100%"
                    height="250"
                    frameborder="0"
                    src="https://www.google.com/maps/embed/v1/view?key=${ googleMapKey }&center=${ lat },${ lng }&zoom=17" allowfullscreen>
                    </iframe>
            </div>
    `;

    modal.append(content);
}





// Sección 11 - Recursos Nativos


// Obtener la geolocalización
btnLocation.on('click', () => {

    // console.log('Botón geolocalización');
    $.mdtoast('Cargando mapa...', {
        interaction: true,
        interactionTimeout: 2000,
        actionText: 'Ok!'
    });


    navigator.geolocation.getCurrentPosition(pos => {

        console.log(pos);
        mostrarMapaModal(pos.coords.latitude, pos.coords.longitude);

        lat = pos.coords.latitude;
        lng = pos.coords.longitude;

    });

});



btnPhoto.on('click', () => {

    console.log('Inicializar camara');
    contenedorCamara.removeClass('oculto');

    camara.encender();

});


// Boton para tomar la foto
btnTomarFoto.on('click', () => {

    console.log('Botón tomar foto');

    foto = camara.tomarFoto();

    camara.apagar();

    console.log(foto);

});


// Share API

























