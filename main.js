let enviar = async function(url){
    let peticion = await fetch(url);
    let json = await peticion.json();
    let selecion = document.querySelector("body > table > tbody");

    let tr = document.createElement("TR");

    let tdId = document.createElement("TD");
    tdId.insertAdjacentText("beforeend", json.id);
    let tdNom = document.createElement("TD");
    tdNom.insertAdjacentText("beforeend", json.name);

    let tdImg= document.createElement("TD");
    let Img= document.createElement("IMG");
    Img.src = json.sprites.front_default;
    tdImg.insertAdjacentElement("beforeend", Img);

    tr.insertAdjacentElement("beforeend", tdId);
    tr.insertAdjacentElement("beforeend", tdNom);


    // puntos de ataque
    ataque:
    for(let value of json.stats){
        if(value.stat.name == "attack"){
            let tdAta = document.createElement("TD");
            tdAta.insertAdjacentText("beforeend", value.base_stat);
            tr.insertAdjacentElement("beforeend", tdAta);
            break ataque;
        }
    }
    tr.insertAdjacentElement("beforeend", tdImg);
    selecion.insertAdjacentElement("beforeend", tr);
}

for (let i = 1; i < 100; i++) {
    enviar(`https://pokeapi.co/api/v2/pokemon/${i}`);
}
