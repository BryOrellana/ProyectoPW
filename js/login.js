let carnet_field = document.querySelector("#carnet_field");
let password_field = document.querySelector("#password_field");
let submit_btn = document.querySelector("#submit_btn");
let link_btn = document.querySelector("#link")
let carnet_regex = new RegExp('^[0-9]{8}$');
let btnLogout = document.getElementsByClassName("disabled");
let btnLogin = document.querySelector("#login");
let log;
//let carnetBD = metodo para pedir el valor del carnet en la base
//let passBD = metodo para pedir el valor de la contraseña en la base

submit_btn.addEventListener("click", () => {
    let carnet = carnet_field.value
    var url = "index.html"


    if (carnet_regex.test(carnet) && password_field.value == carnet_field.value) {
        alert("Bienvenido " + carnet_field.value + " :D");

        /*if(carnetBD == carnet.value && passBD == password_field.value) {
            alert("Bienvenido :D ");
        }*/
        log=true;

    } else {
        if (carnet_field.value == "" || password_field.value == "") {
            alert("campo de carnet o contraseña vacio");
            event.preventDefault();
        } else {
            alert("Carnet o contraseña incorrecto")
            event.preventDefault();
        }

        log = false;
    }


    if (log == true) {
        btnLogout.display = 'block';
    } else {
        
    }

})