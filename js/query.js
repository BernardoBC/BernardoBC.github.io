const queryParams = new URLSearchParams(window.location.search);

// 1. iterate over the keys
for (const key of queryParams.keys()) {
    console.log(key);
}
/* output 
name
age
*/

// 2. iterate over the values
for (const value of queryParams.values()) {
    console.log("value= "+value);
}
/* output 
Shubham
22
*/

// 3. check if the query string contains "contact"
const containsContact = queryParams.has('id');
console.log("contains?"+containsContact)
/* output 
false
*/

// 4. get the value of "name"
const id = queryParams.get('id');
console.log(name)
/* output 
Shubham
*/

function getQueryParams(url) {
    const paramArr = url.slice(url.indexOf('?') + 1).split('&');
    const params = {};
    paramArr.map(param => {
        const [key, val] = param.split('=');
        params[key] = decodeURIComponent(val);
    })
    return params;
}
var $table = $('#table');
var invites = 
[
  {
    "id": "QWER",
    "nombre": "FAMILIA GÓMEZ",
    "espacios": 5,
    "nombres":["Dania Canales","Luis","Fer","two","sasd","two","sasd","Dania Canales","Luis","Fer","two","sasd","two","sasd"]
  },
  {
    "id": "ABCD",
    "nombre": "CAROLINA CANALES",
    "espacios": 1
  }
];
console.log(invites);
var needle = id;
var nombre;
var nombres;
var espacios;
for (var i = 0; i < invites.length; i++){
  // look for the entry with a matching `code` value
  if (invites[i].id == needle){
     // we found it
    // obj[i].name is the matched result
    espacios = invites[i].espacios;
    console.log(invites[i]);
    nombre = invites[i].nombre;
    nombres = invites[i].nombres;
  }
}
// console.log("espacios= "+espacios)


window.onload = function() {
  //when the document is finished loading, replace everything
  document.getElementById("nombre").innerHTML=nombre;
  if (espacios == 1){
    document.getElementById("espacios").innerHTML="HEMOS RESERVADO PARA USTED <strong>"+espacios+" ESPACIO.</strong>";    
  }else{
    document.getElementById("espacios").innerHTML="HEMOS RESERVADO PARA USTEDES <strong>"+espacios+" ESPACIOS.</strong>";
  }

  var form=document.getElementById("form");
  for (var i = 0; i < nombres.length; i++) {
    var div = document.createElement("div");
    var checkBox = document.createElement("input");    
    var label = document.createElement("label");
    var outercheckBox = document.createElement("label");
    var span = document.createElement("span");
    
    div.className = "name-row"
    span.className = "slider round";
    
    checkBox.type = "checkbox";
    checkBox.value = nombres[i];
    label.style.cssText = "color:#fff;font-weight: 500;font-size: 27px;line-height: 1.1;";
    outercheckBox.className="switch"

    outercheckBox.append(checkBox);
    checkBox.after(span);
    div.append(label);
    div.append(outercheckBox);
    form.prepend(div);
    // form.prepend(outercheckBox);
    // form.prepend(label);

    
    label.appendChild(document.createTextNode(nombres[i]));
  }
} 