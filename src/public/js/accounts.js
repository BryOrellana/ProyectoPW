var filas = [];
var contador=0;

function AgFila(usuario, cuenta){
    var newRow = document.createElement("tr");

    filas.push({
        "id":0,
        "usuario": usuario,
        "cuenta": cuenta
    });

    newRow.innerHTML = `<td><b>${usuario}</b></td> 
    <td>${cuenta}</td>`;

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
    var carnet_field = document.querySelector("#carnet_field");
    var tBody = document.querySelector("#table_body");

    var carnetRegex = new RegExp('[0-9]{8}');
}