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
    console.log(value);
}
/* output 
Shubham
22
*/

// 3. check if the query string contains "contact"
const containsContact = queryParams.has('name');
console.log(containsContact)
/* output 
false
*/

// 4. get the value of "name"
const name = queryParams.get('name');
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
window.onload = function() {
    //when the document is finished loading, replace everything
    //between the <a ...> </a> tags with the value of splitText
document.getElementById("savethedate").innerHTML=name;
} 