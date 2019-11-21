var filas = [];
var contador=0;

var parseLateSwitch = (value)=> {
    if(value){
        return "Tardisimo";
    }
    return "A tiempo";
};

function AgFila(carnet, schedule, late, tBody){
    var newRow = document.createElement("tr");
    var date = new Date();

    filas.push({
        "id":0,
        "carnet": carnet,
        "schedule": schedule,
        "late": late
    });

    newRow.innerHTML = `<td><b>${carnet}</b></td> 
    <td>${schedule}</td> 
    <td>${date.toLocaleString()}</td>
    <td>${late}</td>`;

    var Contenedor= document.createElement("td");
    var deleteButton= document.createElement("button");
    var checkInput= document.createElement("input");

    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");

    deleteButton.innerText= "Eliminar";
    deleteButton.value= contador;
    var carne = document.querySelector("#carnet_field");

    checkInput.addEventListener("keyup", function(event){
        var carnet= carne   .value;
        var idEvent= event.srcElement.value;
        if(carnet==idEvent){
            deleteButton.addEventListener("click", function(event){
                var idElement = event.srcElement.value;
                var trToDelete = document.querySelector(`button[value='${idElement}']`).parentElement.parentElement;


                tBody.removeChild(trToDelete);
                filas.forEach((item, index)=>{
                    if(item.id==idElement){
                        filas.splice(index, 1);
                    }
                });
            });

        }


    });

    Contenedor.appendChild(deleteButton);
    newRow.appendChild(Contenedor);

    Contenedor.appendChild(checkInput);
    newRow.appendChild(checkInput);


    tBody.appendChild(newRow);
    contador++;

};

//Onload
window.onload = function()
{
    var submit_btn = document.querySelector("#submit_btn");
    var carnet_field = document.querySelector("#carnet_field");
    var schedule_field = document.querySelector("#schedule_field");
    var late_switch = document.querySelector("#late_switch");
    var tBody = document.querySelector("#table_body");

    var carnetRegex = new RegExp('[0-9]{8}');


    submit_btn.addEventListener("click", ()=>{
        var carnet = carnet_field.value;
        //checked: un booleano para ver si esta seleccionado o no.
        var schedule = schedule_field.options[schedule_field.selectedIndex].text;
        //checked: un booleano para ver si esta seleccionado o no.
        var late = parseLateSwitch (late_switch.checked);
        //test: la regla que recibimos cumple con la que le especificamos?
        if (carnetRegex.test(carnet)){
            AgFila(carnet, schedule, late, tBody);
        }
        else{
            alert("formato no valido")
        }

    });

    carnet_field.addEventListener("keyup", (event)=> {
        var carnet = carnet_field.value;
        if (carnetRegex.test(carnet)){
            submit_btn.disabled = false;
        }
        else{
            submit_btn.disabled = true;
        }

    });
} 