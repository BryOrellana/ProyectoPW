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

            if (carnet_regex.test(carnet) && password_field.value == carnet_field.value) {
                // alert("Bienvenido :D ");
                /*if(carnetBD == carnet.value && passBD == password_field.value) {
                    alert("Bienvenido :D ");
                }*/
                console.log("prueba")
                var url = "index.html"


                if (carnet_regex.test(carnet) && password_field.value == carnet_field.value) {
                    alert("Bienvenido " + carnet_field.value + " :D");
                    
                    /*if(carnetBD == carnet.value && passBD == password_field.value) {
                        alert("Bienvenido :D ");
                    }*/
                    log = true;

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
            }})

        window.addEventListener('keyup', (event) => {
            let keyCode = event.keyCode;
            if (keyCode == 13) {
                submit_btn.click();
            }


            if (log == true) {
                btnLogout.display = 'block';
        }})

        window.onload = function() {
            if(pgClient.connect()){
                console.log("Si funciona prro")
            }else{
                console.log("Nel no funca esta shit")
            }
          };