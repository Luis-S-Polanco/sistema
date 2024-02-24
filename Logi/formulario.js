// Esta funcion maneja lo que es la ventana emergente de termino y condiciones
function abrirVentanaEmergente(event) {
    event.preventDefault();
    // URL de los términos y condiciones
    var urlTerminos = 'terminos_y_condiciones.html';

    // Abre una nueva ventana emergente
    window.open(urlTerminos, '_blank', 'width=600,height=600');
}

// Funcion para ocurta campo cuando un campo no cumple con una condicion
function mostrarOcultarCampos() {
   // variable para tipo de servicio
    var tipoServicio = document.getElementById("tipo_servicio").value;
    var seccionRegreso = document.getElementById("seccion_regreso");

    // variable si requiere paradas
    var requiereParadas = document.getElementById("requiere_paradas").value;
    var seccionParadas = document.getElementById("seccion_paradas");

    // Si el tipo de servicio es "traslado" o "vacio", oculta la sección de Fecha y Hora de Regreso
    if (tipoServicio === "traslado" || tipoServicio === "vacio") {
        seccionRegreso.style.display = "none";
    } else {
        seccionRegreso.style.display = "block";
    }

    // Si no requiere paradas, oculta la sección  comentario Paradas 
    if (requiereParadas === "no_parada" || requiereParadas === "vacio") {
        seccionParadas.style.display = "none";
    } else {
        seccionParadas.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {

    // Obtén una referencia al elemento de tipo de servicio
    var tipoServicioSelect = document.getElementById("tipo_servicio");

    // Agrega un escucha de eventos al cambio en el tipo de servicio
    tipoServicioSelect.addEventListener("change", mostrarOcultarCampos);



    // Obtén una referencia al elemento de requiere paradas
    var requiereParadasSelect = document.getElementById("requiere_paradas");

    // Agrega un escucha de eventos al cambio en el requiere paradas
    requiereParadasSelect.addEventListener("change", mostrarOcultarCampos);
});


// validad lo campo en blanco que debe esta lleno
// Primero le asignamo const campos, las variables que no debe esta vacion 
function validarCampos() {
    const campos = ["nombre_solicitante", "contacto_solicitante","correo_solicitante","informacion_documento","cantidad_pasajeros","nombre_pasajero", "telefono_pasajero",  "fecha_del_servicio", "Hora_del_servicio", "lugar_recogida", "lugar_destino",  "tipo_servicio", "metodo_pago","cantidad_maletas"];
    let hayError = false;
    let primerCampoVacio;

    campos.forEach(campo => {
        const valorCampo = document.getElementById(campo).value;
        const mensajeErrorElement = document.getElementById(`error-message-${campo}`);
        if (valorCampo.trim() === "") {
            const campoNombre = campo.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            mensajeErrorElement.textContent = `Favor de llenar el campo '${campoNombre}'.`;
            mensajeErrorElement.style.display = "inline";
            hayError = true;

            if (!primerCampoVacio) {
                primerCampoVacio = campo;
            }
        } else {
            mensajeErrorElement.textContent = "";
            mensajeErrorElement.style.display = "none";
        }
    });
//Para verificar si  la seleciones de Tipo de servicio no esta en blanco 
    const tipoServicio = document.getElementById("tipo_servicio").value;
    const mensajeErrorTipoServicio = document.getElementById("error-message-tipo_servicio");

    if (tipoServicio === "vacio") {
        mensajeErrorTipoServicio.textContent = "Favor de seleccionar un tipo de servicio.";
        mensajeErrorTipoServicio.style.display = "inline";
        hayError = true;
    } else {
        mensajeErrorTipoServicio.textContent = "";
        mensajeErrorTipoServicio.style.display = "none";
    }
//Para verificar si  la seleciones de meto de pago no esta en blanco 
    const metodoPago = document.getElementById("metodo_pago").value;
    const mensajeErrorMetodoPago = document.getElementById("error-message-metodo_pago");

    if (metodoPago === "vacio") {
        mensajeErrorMetodoPago.textContent = "Favor de seleccionar un método de pago.";
        mensajeErrorMetodoPago.style.display = "inline";
        hayError = true;
    } else {
        mensajeErrorMetodoPago.textContent = "";
        mensajeErrorMetodoPago.style.display = "none";
    }

//Para verificar si  la seleciones de Tipo de documento no esta en blanco 
    const tipodeDocumento = document.getElementById("tipo_documento").value;
    const mensajeErrorTipodedocumento = document.getElementById("error-message-tipo_documento");

    if (tipodeDocumento === "vacio") {
        mensajeErrorTipodedocumento.textContent = "Favor de seleccionar un tipo de documento.";
        mensajeErrorTipodedocumento.style.display = "inline";
        hayError = true;
    } else {
        mensajeErrorTipodedocumento.textContent = "";
        mensajeErrorTipodedocumento.style.display = "none";
    }

//Para verificar si  la seleciones de requiere para no esta en blanco 
     const requiereParadas = document.getElementById("requiere_paradas").value;
    const mensajeErrorRequiereparadas = document.getElementById("error-message-requiere_paradas");


    if (requiereParadas === "vacio") {
        mensajeErrorRequiereparadas.textContent = "Favor de seleccionar si requiere  paradas.";
        mensajeErrorRequiereparadas.style.display = "inline";
        hayError = true;
    } else {
        mensajeErrorRequiereparadas.textContent = "";
        mensajeErrorRequiereparadas.style.display = "none";
    }

//Para verificar si  la seleciones de Tipo de facturación no esta en blanco 
const tipoFacturación = document.getElementById("tipo_facturación").value;
const mensajeErrortipoFacturación = document.getElementById("error-message-tipo_facturación");


if (tipoFacturación === "vacio") {
    mensajeErrortipoFacturación.textContent = "Favor de seleccionar el tipo de facturación.";
    mensajeErrortipoFacturación.style.display = "inline";
    hayError = true;
} else {
    mensajeErrortipoFacturación.textContent = "";
    mensajeErrortipoFacturación.style.display = "none";
}


//Para verificar si  la seleciones de recepcion factura no esta en blanco 
    const recepciónFactura = document.getElementById("recepción_factura").value;
    const mensajeErrorRecepciónFactura = document.getElementById("error-message-recepción_factura");

    
    if (recepciónFactura === "vacio") {
        mensajeErrorRecepciónFactura.textContent = "Favor de seleccionar el tipo de  recepción de la Factura.";
        mensajeErrorRecepciónFactura.style.display = "inline";
        hayError = true;
    } else {
        mensajeErrorRecepciónFactura.textContent = "";
        mensajeErrorRecepciónFactura.style.display = "none";
    }


//verifica cual es la primero que este vacion para enforca ese primero 
    if (hayError) {
        if (primerCampoVacio) {
            document.getElementById(primerCampoVacio).focus();
        }
        return false;
    } else {
        return true;
    }
}


        function verificarAceptacionInicio() {
            if (!validarCampos()) {
                alert('Debes llenar todos los campos requeridos.');
                return;
            } 



        
            

        }
 
        
        document.getElementById("enviar-correo").addEventListener("click", function () {
            // Validar los campos antes de enviar AL WHATSAPP
            if (!validarCampos()) {
                return;
            }
        
            if (!document.getElementById('aceptoCheckboxinicio').checked) {
                alert('Debes aceptar los términos y condiciones para continuar.');
                return;
            } else {
                alert('klk.');
        
                // Construir el mensaje con los datos del formulario
                let mensaje = "";
        
                // Obtener valores del Solicitante
                const nombreSolicitante = document.getElementById("nombre_solicitante").value;
                const contactosolicitante = document.getElementById("contacto_solicitante").value;
        
                const correoSolicitante = document.getElementById("correo_solicitante").value;
                const cedulaSolicitante = document.getElementById("tipo_documento").value;
        
                // Obtener valores de la Cantidad de Pasajeros
                const cantidadPasajeros = document.getElementById("cantidad_pasajeros").value;
        
                // Obtener valores del Pasajero 1
                const nombrePasajero1 = document.getElementById("nombre_pasajero").value;
                const telefonoPasajero1 = document.getElementById("telefono_pasajero").value;
        
                // Obtener valores del Pasajero 2
                const nombrePasajero2 = document.getElementById("nombre_pasajero2").value;
                const telefonoPasajero2 = document.getElementById("telefono_pasajero2").value;
        
                // Obtener valores del Tipo de Servicio
                const tipoServicio = document.getElementById("tipo_servicio").value;
        
                // Obtener valores de la Fecha y Hora
                const fechaIda = document.getElementById("fecha_del_servicio").value;
                const horaIda = document.getElementById("Hora_del_servicio").value;
                const fechaRegreso = document.getElementById("fecha_regreso").value;
                const horaRegreso = document.getElementById("hora_regreso").value;
        
                // Obtener valores de la Dirección
                const lugarRecogida = document.getElementById("lugar_recogida").value;
                const lugarDestino = document.getElementById("lugar_destino").value;
        
                // Obtener valores de las Paradas
                const paradas = document.getElementById("paradas").value;
        
                // Obtener valores de la Cantidad de Maletas y Autobuses
                const cantidadMaletas = document.getElementById("cantidad_maletas").value;
                const cantidadBuses = document.getElementById("cantidad_buses").value;
        
                // Obtener valor del Número de Vuelo
                const numeroVuelo = document.getElementById("numero_vuelo").value;
        
                // Obtener valor del Método de Pago
                const metodoPago = document.getElementById("metodo_pago").value;
        
                // Construir el mensaje con los datos recopilados
                mensaje +=
                    `Nombre del Solicitante: ${nombreSolicitante}\n
                    Contacto Solicitante: ${contactosolicitante}\n
        
                    Correo del Solicitante: ${correoSolicitante}\n
                    RNC, Cédula y/o Pasaporte del Solicitante: ${cedulaSolicitante}\n
        
                    Cantidad de Pasajeros: ${cantidadPasajeros}\n
        
                    Nombre del Pasajero: ${nombrePasajero1}\n
                    Teléfono del Pasajero: ${telefonoPasajero1}\n
        
                    Nombre del representante: ${nombrePasajero2}\n
                    Teléfono del representante: ${telefonoPasajero2}\n
        
                    Tipo de Servicio: ${tipoServicio}\n
        
                    Fecha de Ida: ${fechaIda}\n
                    Hora de Ida: ${horaIda}\n
        
                    Fecha de Regreso: ${fechaRegreso}\n
                    Hora de Regreso: ${horaRegreso}\n
        
                    Lugar de Recogida: ${lugarRecogida}\n
                    Lugar de Destino: ${lugarDestino}\n
        
                    Paradas o comentario: ${paradas}\n
        
                    Cantidad de Buses: ${cantidadBuses}\n
                    Número de Vuelo: ${numeroVuelo}\n
        
                    Método de Pago: ${metodoPago}\n`;
                    const asunto = "Solicitud de Reservación";
                    const destinatario = "reservas@transportesheila.com";
                    const cuerpoMensaje = encodeURIComponent(mensaje);
                    const enlaceCorreo = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${cuerpoMensaje}`;
            
                    // Abrir el cliente de correo con el mensaje prellenado
                    window.location.href = enlaceCorreo;
            }
        });
        

             





                document.getElementById("enviar-whatsapp").addEventListener("click", function () {
                    // Validar los campos antes de enviar AL WHASA
                    if (!validarCampos()) {
                        return;
                    }
                    
                        if (!document.getElementById('aceptoCheckboxinicio').checked) {
                            alert('Debes aceptar los términos y condiciones para continuar.');
                            return;

                        } else {
                            alert('klk.');
                
                // Construir el mensaje con los datos del formulario
                    let mensaje = "";
                
                // Obtener valores del Solicitante
                const nombreSolicitante = document.getElementById("nombre_solicitante").value;
                const  contactosolicitante = document.getElementById("contacto_solicitante").value;
                
                const correoSolicitante = document.getElementById("correo_solicitante").value;
                const cedulaSolicitante = document.getElementById("tipo_documento").value;
                
                // Obtener valores de la Cantidad de Pasajeros
                const cantidadPasajeros = document.getElementById("cantidad_pasajeros").value;
                
                // Obtener valores del Pasajero 1
                const nombrePasajero1 = document.getElementById("nombre_pasajero").value;
                const telefonoPasajero1 = document.getElementById("telefono_pasajero").value;
                
                // Obtener valores del Pasajero 2
                const nombrePasajero2 = document.getElementById("nombre_pasajero2").value;
                const telefonoPasajero2 = document.getElementById("telefono_pasajero2").value;
                
                // Obtener valores del Tipo de Servicio
                const tipoServicio = document.getElementById("tipo_servicio").value;
                
                // Obtener valores de la Fecha y Hora
                const fechaIda = document.getElementById("fecha_del_servicio").value;
                const horaIda = document.getElementById("Hora_del_servicio").value;
                const fechaRegreso = document.getElementById("fecha_regreso").value;
                const horaRegreso = document.getElementById("hora_regreso").value;
                
                // Obtener valores de la Dirección
                const lugarRecogida = document.getElementById("lugar_recogida").value;
                const lugarDestino = document.getElementById("lugar_destino").value;
                
                // Obtener valores de las Paradas
                const paradas = document.getElementById("paradas").value;
                
                // Obtener valores de la Cantidad de Maletas y Autobuses
                const cantidadMaletas = document.getElementById("cantidad_maletas").value;
                const cantidadBuses = document.getElementById("cantidad_buses").value;
                
                // Obtener valor del Número de Vuelo
                const numeroVuelo = document.getElementById("numero_vuelo").value;
                
                // Obtener valor del Método de Pago
                const metodoPago = document.getElementById("metodo_pago").value;
                
                
                
                    // Construir el mensaje con los datos recopilados
                    mensaje += 
                    
                    `
                    Nombre del Solicitante: ${nombreSolicitante}\n
                    Contacto Solicitante :   ${contactosolicitante } \n
                
                    Correo del Solicitante: ${correoSolicitante}\n
                    RNC, Cédula y/o Pasaporte del Solicitante: ${cedulaSolicitante}\n
                    
                    
                    Cantidad de Pasajeros: ${cantidadPasajeros}\n
                    
                    
                    Nombre del Pasajero : ${nombrePasajero1}\n
                    Teléfono del Pasajero : ${telefonoPasajero1}\n
                    
                   
                    Nombre del representate: ${nombrePasajero2}\n
                    Teléfono del representate: ${telefonoPasajero2}\n
                    
                    Tipo de Servicio: ${tipoServicio}\n
                   
                    Fecha de Ida: ${fechaIda}\n
                    Hora de Ida: ${horaIda}\n
                    
                    Fecha de Regreso: ${fechaRegreso}\n
                    Hora de Regreso: ${horaRegreso}\n
                
                    Lugar de Recogida: ${lugarRecogida}\n
                    Lugar de Destino: ${lugarDestino}\n
                    
                
                    Paradas o comentario : ${paradas}\n
                    
                    Cantidad de Buses: ${cantidadBuses}\n
                    Número de Vuelo: ${numeroVuelo}\n
                    
                    Método de Pago: ${metodoPago}\n
                
                
                    `;
                
                    
                    const mensajeCodificado = encodeURIComponent(mensaje);
                    const numeroWhatsApp = "+18493142007"; // Reemplaza con el número de destino real
                    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`);
                
                
                }
                
                });

                 
             
            
        
       
    




    





