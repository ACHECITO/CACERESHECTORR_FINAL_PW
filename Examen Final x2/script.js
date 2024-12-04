// Archivo unificado: script.js

// === Página de Inicio (Login) ===
// Obtener el formulario y los elementos de usuario y contraseña
const form = document.getElementById('login-form');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const nombreField = document.getElementById('nombre');
const mensajeDiv = document.getElementById('mensaje');

// Definir las credenciales correctas
const correctUsername = 'USER';
const correctPassword = 'PASS';

// Agregar un evento al enviar el formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario de forma tradicional

    // Obtener los valores del formulario
    const enteredUsername = usernameField.value;
    const enteredPassword = passwordField.value;
    const enteredNombre = nombreField.value;

    // Verificar si todos los campos están completos
    if (enteredUsername === '' || enteredPassword === '' || enteredNombre === '') {
        mensajeDiv.style.color = "red";
        mensajeDiv.textContent = 'Por favor, complete todos los campos.';
        return;
    }

    // Verificar si las credenciales son correctas
    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        // Si es correcto, redirigir a la siguiente página
        mensajeDiv.style.color = "green";
        mensajeDiv.textContent = `Bienvenido, ${enteredNombre}! Has iniciado sesión correctamente.`;

        setTimeout(function() {
            window.location.href = 'pagina2.html'; // Cambiar por la página de destino
        }, 2000); // Redirige después de 2 segundos para mostrar el mensaje
    } else {
        // Si las credenciales son incorrectas, mostrar un mensaje
        mensajeDiv.style.color = "red";
        mensajeDiv.textContent = 'Usuario o contraseña incorrectos';
    }
});



// === Página Principal (3 APIs) ===
if (window.location.pathname.includes("pagina2.html")) {
    document.getElementById("fetch-email").addEventListener("click", () => {
        document.getElementById("api-result").innerText = "Simulando datos de la API de correo...";
        // Simula una API o conecta con un servicio real como SendGrid.
    });

    document.getElementById("fetch-images").addEventListener("click", () => {
        fetch("https://api.unsplash.com/photos/random?client_id=YOUR_ACCESS_KEY")
            .then(response => response.json())
            .then(data => {
                const img = document.createElement("img");
                img.src = data.urls.small;
                img.alt = "Imagen aleatoria de Unsplash";
                document.getElementById("api-result").innerHTML = "";
                document.getElementById("api-result").appendChild(img);
            })
            .catch(error => {
                console.error("Error al obtener la imagen:", error);
                document.getElementById("api-result").innerText = "Error al cargar la imagen.";
            });
    });

    document.getElementById("fetch-optional").addEventListener("click", () => {
        document.getElementById("api-result").innerText = "Mostrando información de API opcional...";
        // Ejemplo: Conexión a OpenWeather, datos de un lugar, etc.
    });
}

// === Página con Formulario ===
// Función para calcular el precio total
// Función para calcular el precio total en guaraníes
function calcularPrecioTotal() {
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseFloat(document.getElementById("cantidad").value);

    if (isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
        alert("Por favor, ingrese valores válidos para el precio y la cantidad.");
        return;
    }

    const precioTotal = precio * cantidad;
    alert("El precio total es: Gs. ${precioTotal.toFixed(0)}");
}

// Función para calcular el 30% de descuento sobre el precio total en guaraníes
function calcularDescuento30() {
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseFloat(document.getElementById("cantidad").value);

    if (isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
        alert("Por favor, ingrese valores válidos para el precio y la cantidad.");
        return;
    }

    const precioTotal = precio * cantidad;
    const descuento = precioTotal * 0.30;
    const precioConDescuento = precioTotal - descuento;

    alert("El precio con un descuento del 30% es: Gs. ${precioConDescuento.toFixed(0)}");
}

// Función para calcular el 25% de descuento sobre el precio por cantidad en guaraníes
function calcularDescuento25() {
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseFloat(document.getElementById("cantidad").value);

    if (isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
        alert("Por favor, ingrese valores válidos para el precio y la cantidad.");
        return;
    }

    const precioTotal = precio * cantidad;
    const descuento = precioTotal * 0.25;
    const precioConDescuento = precioTotal - descuento;

    alert("El precio con un descuento del 25% es: Gs. ${precioConDescuento.toFixed(0)}");
}


    // Envío del correo con EmailJS
    emailjs.send("service_3b29alp", "template_a8a29b5", params).then(
        () => {
            alert("Formulario enviado exitosamente.");
            document.getElementById("empleadoForm").reset(); // Limpia el formulario
        },
        (error) => {
            alert("Error al enviar el formulario: " + JSON.stringify(error));
            console.error("Error al enviar el correo:", error);
        }
    );


function sendEmail(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Captura los valores del formulario
    const to_email = document.getElementById("to_email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const datetime = new Date().toLocaleString();

    // Parámetros para el correo
    const params = {
        From_Name: "Sistema Web", // Nombre genérico para identificar el sistema
        datetime: datetime,
        to_email: to_email, // Correo ingresado por el usuario
        From_Mail: subject, // Dirección genérica de envío
        message: message,
    };

    // Enviar el correo usando EmailJS
    emailjs.send("service_3b29alp", "template_a8a29b5", params).then(
        () => {
            alert("Correo enviado exitosamente.");
            document.getElementById("emailForm").reset(); // Limpia el formulario
        },
        (error) => {
            alert("Error al enviar el correo: " + JSON.stringify(error));
            console.error("Error al enviar el correo:", error);
        }
    );
}

// Función para consumir la API de imágenes y mostrar el contenido
// Función para consumir la API de Unsplash
// Tu clave de acceso de Unsplash
const accessKey = "lDgw5d2DLwAAXO7sYU6WWWQDh1f-s576DNh69sdZNk8";

// Función para obtener imágenes desde Unsplash
function fetchImagesFromUnsplash() {
    const accessKey = "gLFbpB0lLP_CJovVvD8pT3cvmA3lPHe7MkMDsVhrkAc"; // Reemplaza con tu clave de Unsplash
    const url = `https://api.unsplash.com/photos?client_id=${accessKey}&per_page=6`;


    // Mostrar mensaje de carga
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "<p>Cargando imágenes...</p>"; // Mensaje de carga

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);

            }
            return response.json();
        })
        .then(data => {
            gallery.innerHTML = ""; // Limpia las imágenes anteriores

            // Verificar si se obtuvo información válida
            if (data.length === 0) {
                gallery.innerHTML = "<p>No se encontraron imágenes.</p>";
                return;
            }

            // Mostrar las imágenes
            data.forEach(image => {
                const img = document.createElement("img");
                img.src = image.urls.small;
                img.alt = image.alt_description || "Imagen de Unsplash";
                img.classList.add("gallery-img");
                gallery.appendChild(img);
            });
        })
        .catch(error => {
            console.error("Error al cargar imágenes:", error);
            gallery.innerHTML = `
                <p>Error al cargar las imágenes. Por favor, verifica tu conexión o clave de acceso.</p>
            `;
        });
}


function cargarCotizaciones(url) {
    const cotizacionesContainer = document.getElementById('cotizaciones-container');
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then(data => {
        cotizacionesContainer.innerHTML = '';  // Limpiamos el contenedor
  
        // Iteramos sobre las fechas (por ejemplo, "2022-03-23")
        Object.keys(data).forEach(fecha => {
          const fechaCotizacion = data[fecha];
          
          // Creamos un elemento para la fecha
          const fechaElement = document.createElement('h3');
          fechaElement.textContent = `Cotizaciones del ${fecha}`;

          cotizacionesContainer.appendChild(fechaElement);
          
          // Iteramos sobre las monedas dentro de la fecha (por ejemplo, "usd", "brl")
          Object.keys(fechaCotizacion).forEach(moneda => {
            const valorMoneda = fechaCotizacion[moneda];
            
            // Crear un div para cada cotización
            const cotizacionElement = document.createElement('div');
            cotizacionElement.classList.add('cotizacion');
  
            // Crear el contenido para mostrar la moneda, compra y venta
            const monedaElement = document.createElement('p');
            monedaElement.textContent = `${moneda.toUpperCase()}: Compra - ${valorMoneda.purchase}, Venta - ${valorMoneda.sale}`;

  
            // Agregamos el contenido al contenedor
            cotizacionElement.appendChild(monedaElement);
            cotizacionesContainer.appendChild(cotizacionElement);
          });
        });
      })
      .catch(error => {
        console.error('Error:', error);
        cotizacionesContainer.textContent = 'Error al cargar las cotizaciones.';
      });
  }
  
  // Llamamos a la función con la URL de las cotizaciones
  cargarCotizaciones('https://cdn.jsdelivr.net/gh/sistemasaguila/cotizaciones-set@main/data/latest.json');