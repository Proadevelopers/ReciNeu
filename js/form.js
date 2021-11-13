document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

 let telefono = "543544409900";

  let nombrecliente = document.querySelector("#nombrecliente").value;
  let apellidocliente = document.querySelector("#apellidocliente").value;
  let direccioncliente = document.querySelector("#direccioncliente").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

   let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
    *ReciNeu*%0A
    *Consultas*%0A%0A
    *¿Cuál es tu nombre?*%0A
    ${nombrecliente}%0A
    *¿Cuál es tu apellido?*%0A
    ${apellidocliente}%0A
    *¿Cúal es tu Dirección?*%0A
    ${direccioncliente}`;

  if (nombrecliente === "" || apellidocliente === "" || direccioncliente === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${nombrecliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu consulta, ${nombrecliente}`;

  window.open(url);
});
