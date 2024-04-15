const queryParams = new URLSearchParams(window.location.search);

// 1. iterate over the keys
for (const key of queryParams.keys()) {
    // console.log(key);
}
/* output 
name
age
*/

// 2. iterate over the values
for (const value of queryParams.values()) {
    // console.log("value= "+value);
}
/* output 
Shubham
22
*/

// 3. check if the query string contains "contact"
const containsContact = queryParams.has('id');
// console.log("contains?"+containsContact)
/* output 
false
*/

// 4. get the value of "name"
const id = queryParams.get('id');
// console.log(name)
/* output 
Shubham
*/

var encryptApiKey = "U2FsdGVkX19Q5IcpJh7CGt+n+nYEXnWajM5OFN57EIkOtbRPC+O+0wmLLvLmAGaxEveXUL9HkOt3j42HL58EYmFxPkMu4S/skznRP38tBdZLq6h4tDVtE+PoeO9/1Xsp"
var decryptedApiKey = CryptoJS.AES.decrypt(encryptApiKey, "Secret Passphrase");
var apiKey = decryptedApiKey.toString(CryptoJS.enc.Utf8);
var apiUrl = 'https://us-east-1.aws.data.mongodb-api.com/app/data-ftvdz/endpoint/data/v1';
var realmUrl = 'https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/data-ftvdz/auth/providers/api-key/login'

//aws
// CryptoJS.AES.encrypt(text, key).toString();
var encryptedpool = "U2FsdGVkX19M7c+BDRQ61vlAegLXYVu/6+U1Cfjb/5l/+gCWxRFNewHU9TyMKFy+mBjHgBRwxO5OCkYBBZKWLg=="
var decryptedpool = CryptoJS.AES.decrypt(encryptedpool, "cognito");
var pool = decryptedpool.toString(CryptoJS.enc.Utf8);
var bucketRegion = "us-east-2"
var bucketName = "adrianaybernardo-guestbook";
AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: pool,
  }),
});
var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: bucketName },
});

function fileReady() {
  document.getElementById('fileName').innerHTML=document.getElementById('file').files[0].name;
  var fileLabel = document.getElementById("fileLabel");
  var fileUploadButton = document.getElementById("fileUploadButton");
  // fileLabel.style.display = "none";
  fileUploadButton.style.display = "block";
}
function uploadFile() {

  var file = document.getElementById('file').files[0];
  nombreVideo=document.getElementById("nombreVideo").value;
  apellidoVideo=document.getElementById("apellidoVideo").value;
  

  var key = (new Date).getTime() + '-' + nombreVideo + '-'  + apellidoVideo + '-'  + file.name;

  var upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: bucketName,
      Key: key,
      Body: file,
      ACL:'public-read'
    },
  });
  var promise = upload.promise();

  promise.then(
    function (data) {
      // viewAlbum(albumName);
      finalizarVideo();
    },
    function (err) {
      return alert("There was an error uploading your video: ", err.message);
    }
  );
}

function uploadProgress(evt) {
  if (evt.lengthComputable) {
    var percentComplete = Math.round(evt.loaded * 100 / evt.total);
    document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
  }
  else {
    document.getElementById('progressNumber').innerHTML = 'unable to compute';
  }
}

function uploadComplete(evt) {
  /* This event is raised when the server send back a response */
  alert("Done - " + evt.target.responseText );
}

function uploadFailed(evt) {
  alert("There was an error attempting to upload the file." + evt);
}

function uploadCanceled(evt) {
  alert("The upload has been canceled by the user or the browser dropped the connection.");
}

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

var encrypt = function(str, key) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var charCode = (str.charCodeAt(i) + key) % 256;
    result += String.fromCharCode(charCode);
  }
  return result;
}

var decrypt = function(str, key) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var charCode = (str.charCodeAt(i) - key + 256) % 256;
    result += String.fromCharCode(charCode);
  }
  return result;
}

async function mongoDBLogin() {
  const loginResponse = await fetch(realmUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      key: apiKey,
    }),
  }).then(res=> res.json());
  return loginResponse.access_token;
}


async function mongoInsertMessage(nombre,apellido,mensaje) {
  const document = {
    nombre,
    apellido,
    mensaje,
    completedAt: new Date().toISOString(),
  }

  const accessToken = await mongoDBLogin();

  await fetch(`${apiUrl}/action/insertOne`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      collection: 'guestbook',
      database: 'boda',
      dataSource: 'boda',
      document
    })
  })
}


function inicio() {
  location.reload()
}
function elegirMensaje() {
  var options = document.getElementById("options");
  var Comparti = document.getElementById("Comparti");
  var modePicker = document.getElementById("modePicker");
  options.style.display = "none";
  Comparti.style.display = "none";
  modePicker.style.display = "block";
  for (opacity = 0; opacity <= 1; opacity = opacity + 0.1) 
  {           
      setTimeout(function(){modePicker.style.opacity = opacity;},20)                       
  } 
} 
function modoTexto() {
  var modePicker = document.getElementById("modePicker");
  var mensaje = document.getElementById("mensaje");
  modePicker.style.display = "none";
  mensaje.style.display = "block";
  for (opacity = 0; opacity <= 1; opacity = opacity + 0.1) 
  {           
      setTimeout(function(){mensaje.style.opacity = opacity;},20)                       
  } 
} 
function modoVideo() {
  var modePicker = document.getElementById("modePicker");
  var qrvideo = document.getElementById("qrvideo");
  modePicker.style.display = "none";
  qrvideo.style.display = "block";
  // setTimeout(function () {
  //   qrvideo.classList.remove('visuallyhidden');
  // }, 20);
  for (opacity = 0; opacity <= 1; opacity = opacity + 0.1) 
  {           
      setTimeout(function(){qrvideo.style.opacity = opacity;},20)                       
  } 
}
function subirFotosyVideos() {
  var options = document.getElementById("options");
  var Comparti = document.getElementById("Comparti");
  var qrvideo = document.getElementById("qrvideo");
  options.style.display = "none";
  Comparti.style.display = "none";
  qrvideo.style.display = "block";
  // setTimeout(function () {
  //   qrvideo.classList.remove('visuallyhidden');
  // }, 20);
  for (opacity = 0; opacity <= 1; opacity = opacity + 0.1) 
  {           
      setTimeout(function(){qrvideo.style.opacity = opacity;},20)                       
  } 
}
function finalizarVideo() {
  const form = document.getElementById('formVideo1');
  const success = document.getElementById('mensajeGraciasVideo');
  form.style.display = 'none';
  success.style.display = 'block';
}
// function subirFotosyVideos() {
//   var file = document.getElementById("file");
//   var uploadFile = document.getElementById("uploadFile");
//   file.onchange(
//     uploadFile.style.display = "block"
//   )
// }
window.onload = async function() {
  //when the document is finished loading, replace everything
  
  // Guestbook mensaje
  var formMensaje=document.getElementById("formMensaje");
  formMensaje.onsubmit = async function(e){
    e.preventDefault();
    e.stopPropagation();

    textoMensaje=document.getElementById("textoMensaje").value;
    nombreMensaje=document.getElementById("nombreMensaje").value;
    apellidoMensaje=document.getElementById("apellidoMensaje").value;
    mongoInsertMessage(textoMensaje,nombreMensaje,apellidoMensaje);
    finalizarMensaje();
  }
  function finalizarMensaje() {
    const form = document.getElementById('mensaje');
    const success = document.getElementById('mensajeGracias');
    form.style.display = 'none';
    success.style.display = 'block';
  }
}