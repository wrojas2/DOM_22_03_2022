let h1 =document.createElement("H1");
let texto = document.createTextNode("WILLIAM ROJAS ROJAS - 91490218");

h1.id = "Myid";
h1.classList.add("colorH1");
// h1.append(texto)                 // Javascript  version 1
// h1.innerText = texto.nodeValue; // javascript  version 2

h1.insertAdjacentText("beforeend", texto.nodeValue); //  

//document.body.append(h1); // javascript versión 1
// document.body.innerHTML = h1.outerHTML // javascrip  version 2
document.body.insertAdjacentElement("afterbegin", h1);

console.log(h1);
console.dir(h1);

