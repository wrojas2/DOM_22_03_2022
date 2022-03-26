// let btn = document.querySelector("#btn");

// btn.addEventListener("click", function(e){
//     console.log(e.target);
// });






let data = function(target){
    let from = Array.from(target);
    let data = {};
    from.forEach(element => {
        if(element.type != "submit"){
            data[element.id] = element.value;
        }
    });
    return data;
}

let dialogo = document.querySelector(".mensaje");
let Myfrom = document.querySelector("#Myform");
Myfrom.addEventListener("submit", function(e){
    let from = data(e.target);
    localStorage.setItem(`${from.cedula}`, JSON.stringify(from));
    document.querySelector(".containerP").innerText = "Los datos del formulario han sido registrados correctamente";
    dialogo.show();
    console.log(from);
    e.preventDefault();
})
document.querySelector("#btnClose").addEventListener("click", function(e){
    dialogo.close();
})
let btnListar = document.querySelector("#Listar");
let tabla = document.querySelector("#listaDatos");
let ListarDatos = async function(){
    ObtenerLosDatos:
    for (let i = 0; i < localStorage.length; i++) {
        let json = JSON.parse(localStorage.getItem(localStorage.key(i)));
        let tr = document.createElement("TR");
        ListarLosDatos:
        for(let [id,value] of Object.entries(json)){
            let td = document.createElement("TD");
            if(id=="cedula"){
                td.insertAdjacentText("beforeend", value);
            }else if(id=="nombre"){
                td.insertAdjacentText("beforeend", value);
            }else if(id=="apellido"){
                td.insertAdjacentText("beforeend", value);
            }else if(id=="edad"){
                td.insertAdjacentText("beforeend", value);
            }else if(id=="email"){
                td.insertAdjacentText("beforeend", value);
            }
            tr.insertAdjacentElement("beforeend", td);
        }
        tr.insertAdjacentHTML("beforeend", "<button data-btn='Eliminar'>X</button>");
        tabla.insertAdjacentElement("beforeend", tr);
    }
}
btnListar.addEventListener("click", function(e){
    tabla.innerHTML = null;
    ListarDatos();
    document.querySelector(".containerP").innerText = "Los datos han sido listados :)";
    dialogo.show();
})



tabla.addEventListener("click", function(e){
    if(e.target.dataset.btn == "Eliminar"){
        document.querySelector(".containerP").innerText = `El usuario ${e.target.parentElement.children[0].innerText} ha sido eliminado :(`;
        dialogo.show();
        e.target.parentElement.remove();
        localStorage.removeItem(e.target.parentElement.children[0].innerText);
    }
})