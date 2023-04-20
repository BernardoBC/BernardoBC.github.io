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
const containsContact = queryParams.has('name');
const containsEspacios = queryParams.has('espacios');
console.log("contains?"+containsContact)
/* output 
false
*/

// 4. get the value of "name"
const name = queryParams.get('name');
const espacios = queryParams.get('espacios');
console.log(name)
console.log("espacios= "+espacios)
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
window.onload = function() {
    //when the document is finished loading, replace everything
    //between the <a ...> </a> tags with the value of splitText
    document.getElementById("nombres").innerHTML=name;
    document.getElementById("espacios").innerHTML="HEMOS RESERVADO PARA USTED "+espacios+" ESPACIO(S).";
    
} 