export let formulario = () => {
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let libuni = document.querySelector("#lu").value;
    alert(`LOS DATOS INGRESADOS SON: \nNOMBRE: ${nombre} \nAPELLIDO: ${apellido} \nLIBRETA UNIVERSITARIA: ${libuni}`);
}