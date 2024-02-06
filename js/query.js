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


var encryptbuckkey1 = "U2FsdGVkX1/43co1Dr6nlg+7Xfq/z30SJi6iBZ3rIrcLcJNuW1gM7+flEdY+03bq"
var decryptedbuckkey1 = CryptoJS.AES.decrypt(encryptbuckkey1, "bezos");
var buckkey1 = decryptedbuckkey1.toString(CryptoJS.enc.Utf8);

var encryptbuckkey2 = "U2FsdGVkX189jKVxjA1bnTwV2wo7Oe4bqmAsPcTgbkqvnCQgjkh1Y/iBRVj2zl07fG0fFS3JxpPlXCqkkDHzdA=="
var decryptedbuckkey2 = CryptoJS.AES.decrypt(encryptbuckkey2, "bezos");
var buckkey2 = decryptedbuckkey2.toString(CryptoJS.enc.Utf8);

// const { S3Client,GetObjectCommand } = require("@aws-sdk/client-s3");
    
// let client = new S3Client({
//     region:'us-east-2',
//     credentials:{
//         accessKeyId:buckkey1,
//         secretAccessKey:buckkey2
//     }
// });

// (async () => {
//   const response = await client.send(new GetObjectCommand({Bucket:"BucketNameHere",Key:"ObjectNameHere"}));
//   console.log(response);
// })();

// const input = {
//   "Body": "filetoupload",
//   "Bucket": "examplebucket",
//   "Key": "exampleobject",
//   "ServerSideEncryption": "AES256",
//   "Tagging": "key1=value1&key2=value2"
// };
// const command = new PutObjectCommand(input);
// const response = await client.send(command);

//     var secret = this.get('AWSSecretKeyId');
//     var policyBase64 = Base64.encode(JSON.stringify(POLICY_JSON));
//     console.log ( policyBase64 )

//     var signature = b64_hmac_sha1(secret, policyBase64);
//     b64_hmac_sha1(secret, policyBase64);
//     console.log( signature);

// function addVideo(albumName) {
//   var files = document.getElementById("photoupload").files;
//   if (!files.length) {
//     return alert("Please choose a file to upload first.");
//   }
//   var file = files[0];
//   var fileName = file.name;
//   var albumPhotosKey = encodeURIComponent(albumName) + "/";

//   var photoKey = albumPhotosKey + fileName;

//   // Use S3 ManagedUpload class as it supports multipart uploads
//   var upload = new AWS.S3.ManagedUpload({
//     params: {
//       Bucket: albumBucketName,
//       Key: photoKey,
//       Body: file,
//     },
//   });

//   var promise = upload.promise();

//   promise.then(
//     function (data) {
//       alert("Successfully uploaded video.");
//       viewAlbum(albumName);
//     },
//     function (err) {
//       return alert("There was an error uploading your video: ", err.message);
//     }
//   );
// }

function uploadFile() {

  var file = document.getElementById('file').files[0];
  var key = "events/" + (new Date).getTime() + '-' + file.name;

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
      alert("Successfully uploaded video.");
      viewAlbum(albumName);
    },
    function (err) {
      return alert("There was an error uploading your video: ", err.message);
    }
  );
  // var fd = new FormData();

  // var key = "events/" + (new Date).getTime() + '-' + file.name;

  // fd.append('key', key);
  // fd.append('acl', 'public-read'); 
  // fd.append('Content-Type', file.type);      
  // fd.append('AWSAccessKeyId', 'YOUR ACCESS KEY');
  // fd.append('policy', 'YOUR POLICY')
  // fd.append('signature','YOUR SIGNATURE');

  // fd.append("file",file);

  // var xhr = new XMLHttpRequest();

  // xhr.upload.addEventListener("progress", uploadProgress, false);
  // xhr.addEventListener("load", uploadComplete, false);
  // xhr.addEventListener("error", uploadFailed, false);
  // xhr.addEventListener("abort", uploadCanceled, false);

  // xhr.open('POST', 'https://<yourbucket>.s3.amazonaws.com/', true); //MUST BE LAST LINE BEFORE YOU SEND 

  // xhr.send(fd);
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
var invites = 
[
  {
    "id": "188be095",
    "nombre": "Bernardo Bonilla",
    "espacios": 1,
    "nombres":["Bernardo Bonilla"]
  },
  {
    "id": "e137b87e",
    "nombre": "Lourdes Canales",
    "espacios": 1,
    "nombres":["Lourdes Canales"]
  },
  {
    "id": "429c48af",
    "nombre": "Andrés Bonilla",
    "espacios": 1,
    "nombres":["Andrés Bonilla"]
  },
  {
    "id": "a7ac9a8f",
    "nombre": "Carlos Bonilla",
    "espacios": 1,
    "nombres":["Carlos Bonilla"]
  },
  {
    "id": "243a174d",
    "nombre": "Eva Bonilla",
    "espacios": 1,
    "nombres":["Eva Bonilla"]
  },
  {
    "id": "6138314b",
    "nombre": "Enrique Canales",
    "espacios": 1,
    "nombres":["Enrique Canales"]
  },
  {
    "id": "eaaaad66",
    "nombre": "Marcela Borjas",
    "espacios": 1,
    "nombres":["Marcela Borjas"]
  },
  {
    "id": "f7476962",
    "nombre": "Familia Gómez Canales",
    "espacios": 5,
    "nombres":["Lucia Gómez","Dania Canales","Luis Fernando Gómez"]
  },
  {
    "id": "44f9805b",
    "nombre": "Familia Canales Giannini",
    "espacios": 4,
    "nombres":["Enrique Canales","Giovanna Giannini","Gabriel Canales"]
  },
  {
    "id": "626725df",
    "nombre": "Familia Canales Vardan",
    "espacios": 6,
    "nombres":["Carlos Canales","Anja Vardan","Isabella Canales","Victoria Canales","Gabriela Canales","Isak Canales"]
  },
  {
    "id": "b23c6620",
    "nombre": "Carolina Canales",
    "espacios": 1,
    "nombres":["Carolina Canales"]
  },
  {
    "id": "fb67a590",
    "nombre": "Emil Eliason",
    "espacios": 1,
    "nombres":["Emil Eliason"]
  },
  {
    "id": "7badb65d",
    "nombre": "Alex Eliason",
    "espacios": 1,
    "nombres":["Alex Eliason"]
  },
  {
    "id": "51b764c5",
    "nombre": "Familia Martínez Bonilla",
    "espacios": 4,
    "nombres":["Helena Bonilla","Iván Martínez","Luis Martínez","Ivan Martínez"]
  },
  {
    "id": "4d3eed12",
    "nombre": "Familia Salgado Bonilla",
    "espacios": 4,
    "nombres":["Miguel Salgado","Eva Bonilla","Monica Salgado","Helena Salgado"]
  },
  {
    "id": "8a32ed15",
    "nombre": "Familia Bonilla Franks",
    "espacios": 3,
    "nombres":["Luis Bonilla","Debora Franks","Marie Bonilla"]
  },
  {
    "id": "5r6ej360",
    "nombre": "Familia Martínez Tosta",
    "espacios": 3,
    "nombres":["Mauricio Martínez","Karen Tosta","Evangeline Martínez"]
  },
  {
    "id": "kdlui145",
    "nombre": "Familia Martínez Flores",
    "espacios": 3,
    "nombres":["Hector Martínez","Alicia Flores","Valeria Aguilar"]
  },
  {
    "id": "ehj489Ef",
    "nombre": "Familia Martínez Murillo",
    "espacios": 3,
    "nombres":["Jose Martínez","Maria Luisa Murillo","Helena Martínez"]
  },
  {
    "id": "IsL1Jw2f",
    "nombre": "Juana Martínez",
    "espacios": 2,
    "nombres":["Juana Martínez","Joan Figueroa"]
  },
  {
    "id": "45b0fb6b",
    "nombre": "Xinia Campos",
    "espacios": 1,
    "nombres":["Xinia Campos"]
  },
  {
    "id": "45b0fb7c",
    "nombre": "Carmen Campos",
    "espacios": 1,
    "nombres":["Carmen Campos"]
  },
  {
    "id": "03214935",
    "nombre": "Familia Fernández Campos",
    "espacios": 2,
    "nombres":["Johanna Campos","Isabella Fernández"]
  },
  {
    "id": "3fa698a4",
    "nombre": "Juan Carlos Campos",
    "espacios": 1,
    "nombres":["Juan Carlos Campos"]
  },
  {
    "id": "fe0cb059",
    "nombre": "Liliana Campos",
    "espacios": 1,
    "nombres":["Liliana Campos"]
  },
  {
    "id": "cdf34731",
    "nombre": "Karol Acevedo",
    "espacios": 1,
    "nombres":["Karol Acevedo"]
  },
  {
    "id": "4bf87b4e",
    "nombre": "Natalia Acevedo",
    "espacios": 1,
    "nombres":["Natalia  Acevedo"]
  },
  {
    "id": "b903a403",
    "nombre": "Fabián Acevedo",
    "espacios": 1,
    "nombres":["Fabián  Acevedo"]
  },
  {
    "id": "4bce4020",
    "nombre": "José Pablo Arata",
    "espacios": 2,
    "nombres":["José Pablo Arata","Mariana Olivares"]
  },
  {
    "id": "b2a099a7",
    "nombre": "Joseiby Hernández",
    "espacios": 1,
    "nombres":["Joseiby Hernández"]
  },
  {
    "id": "bb002a62",
    "nombre": "Paula Castillo",
    "espacios": 1,
    "nombres":["Paula Castillo"]
  },
  {
    "id": "c33077f5",
    "nombre": "Esteban Artavia",
    "espacios": 1,
    "nombres":["Esteban Artavia"]
  },
  {
    "id": "2fd1fdca",
    "nombre": "Fernanda Montoya",
    "espacios": 2,
    "nombres":["Fernanda Montoya","Alberto Vargas"]
  },
  {
    "id": "2a8c9ab5",
    "nombre": "David Leiva",
    "espacios": 1,
    "nombres":["David Leiva"]
  },
  {
    "id": "44370264",
    "nombre": "Maria Fernanda Leiva",
    "espacios": 1,
    "nombres":["Maria Fernanda Leiva"]
  },
  {
    "id": "5743638c",
    "nombre": "Jessica Piedra",
    "espacios": 1,
    "nombres":["Jessica Piedra"]
  },
  {
    "id": "d24856fb",
    "nombre": "Monserrat Brenes",
    "espacios": 2,
    "nombres":["Monserrat Brenes","Carlos Brenes"]
  },
  {
    "id": "93db6a2c",
    "nombre": "Familia Mata Chacon",
    "espacios": 3,
    "nombres":["Ma Fernanda Chacón","Emigdio Mata"]
  },
  {
    "id": "5ca65a4a",
    "nombre": "Darry Jiménez",
    "espacios": 2,
    "nombres":["Darry Jiménez","Marco Ramírez"]
  },
  {
    "id": "4b4e1778",
    "nombre": "Marlenne Acuña",
    "espacios": 1,
    "nombres":["Marlenne Acuña"]
  },
  {
    "id": "b74bbba6",
    "nombre": "Armando León",
    "espacios": 1,
    "nombres":["Armando León"]
  },
  {
    "id": "55831d5c",
    "nombre": "Emilia Guillen",
    "espacios": 1,
    "nombres":["Emilia Guillen"]
  },
  {
    "id": "49e7a3db",
    "nombre": "Gabriela León",
    "espacios": 1,
    "nombres":["Gabriela León"]
  },
  {
    "id": "d0846ebe",
    "nombre": "Famila León Rojas",
    "espacios": 3,
    "nombres":["Adrian León","Milagro Rojas","Sebastián León"]
  },
  {
    "id": "5e72ab9a",
    "nombre": "Famila León Rodríguez",
    "espacios": 3,
    "nombres":["Jonathan León","Lucrecia Rodríguez","Valentina León"]
  },
  {
    "id": "bdee2cc3",
    "nombre": "Monserrat Brenes",
    "espacios": 1,
    "nombres":["Monserrat Brenes"]
  },
  {
    "id": "9c716bcd",
    "nombre": "María Luisa Brenes",
    "espacios": 2,
    "nombres":["María Luisa Brenes","Luis Alfaro"]
  },
  {
    "id": "f47a7bf0",
    "nombre": "Marco Brenes",
    "espacios": 1,
    "nombres":["Marco Brenes"]
  },
  {
    "id": "961eeb6e",
    "nombre": "Josue León",
    "espacios": 1,
    "nombres":["Josue León"]
  },
  {
    "id": "c43A4108",
    "nombre": "Erick Alvarenga",
    "espacios": 2,
    "nombres":["Erick Alvarenga","Acompañante"]
  },
  {
    "id": "8561aee0",
    "nombre": "Ariel Amendola",
    "espacios": 2,
    "nombres":["Ariel Amendola","Acompañante"]
  },
  {
    "id": "40075c9a",
    "nombre": "César Quezada",
    "espacios": 1,
    "nombres":["César Quezada"]
  },
  {
    "id": "d530b15f",
    "nombre": "Daryl García",
    "espacios": 1,
    "nombres":["Daryl García"]
  },
  {
    "id": "84996294",
    "nombre": "Roger Calix",
    "espacios": 2,
    "nombres":["Roger Calix","Acompañante"]
  },
  {
    "id": "5e0646f4",
    "nombre": "Camilo Vega",
    "espacios": 1,
    "nombres":["Camilo Vega"]
  },
  {
    "id": "950d2109",
    "nombre": "Jose Prado",
    "espacios": 2,
    "nombres":["Jose Prado","Acompañante"]
  },
  {
    "id": "a8980870",
    "nombre": "Juan Carlos Andrade",
    "espacios": 2,
    "nombres":["Juan Carlos Andrade","Acompañante"]
  },
  {
    "id": "qpwoei134",
    "nombre": "Martin Rosa",
    "espacios": 1,
    "nombres":["Martin Rosa"]
  },
  {
    "id": "3be6aa0d",
    "nombre": "Adolfo Escobar",
    "espacios": 2,
    "nombres":["Adolfo Escobar","Michelle Nataren"]
  }
];
// console.log(invites);
var needle = id;
var nombre;
var nombres;
var espacios;
var found = false;
var existingMongoRow;
for (var i = 0; i < invites.length; i++){
  // look for the entry with a matching `code` value
  if (invites[i].id == needle){
     // we found it
    // obj[i].name is the matched result
    espacios = invites[i].espacios;
    // console.log(invites[i]);
    nombre = invites[i].nombre;
    nombres = invites[i].nombres;
    found = true;
  }
}
// console.log("espacios= "+espacios)


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

async function mongoGetExistingInvite() {
  const accessToken = await mongoDBLogin();
  const response = await fetch(`${apiUrl}/action/findOne`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      collection: 'invites',
      database: 'boda',
      dataSource: 'boda',
      filter: {
        needle,
      }
    })
  }).then(res=> res.json());

  return response.document;
}

async function mongoInsertInvite(nombresSeleccionados) {
  const document = {
    needle,
    nombre,
    nombresSeleccionados,
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
      collection: 'invites',
      database: 'boda',
      dataSource: 'boda',
      document
    })
  })
}

async function mongoUpdateInvite(nombresSeleccionados) {
  const accessToken = await mongoDBLogin();

  await fetch(`${apiUrl}/action/updateOne`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      collection: 'invites',
      database: 'boda',
      dataSource: 'boda',
      filter: {
        _id: { "$oid": existingMongoRow._id }
      },
      update: {
        "$set": {
          nombresSeleccionados,
          completedAt: new Date().toISOString(),
        }
      }
    })
  })
}

window.onload = async function() {
  //when the document is finished loading, replace everything
  if (found) {
    document.getElementById("nombre").innerHTML=nombre;
    // if (espacios == 1){
    //   document.getElementById("espacios").innerHTML="HEMOS RESERVADO PARA USTED <strong>"+espacios+" ESPACIO.</strong>";    
    // }else{
    //   document.getElementById("espacios").innerHTML="HEMOS RESERVADO PARA USTEDES <strong>"+espacios+" ESPACIOS.</strong>";
    // }
  }else{
    document.getElementById("espacios").innerHTML="Esta invitación no se encontro en la lista.";
    document.getElementById("asiste").remove();
    document.getElementById("confirm_button").remove();
    document.getElementById("confirm_by").remove();
  }

  existingMongoRow = await mongoGetExistingInvite();

  var form=document.getElementById("form");
  for (var i = nombres.length-1; i >= 0; i--) {
    var div = document.createElement("div");
    var checkBox = document.createElement("input");    
    var label = document.createElement("label");
    var outercheckBox = document.createElement("label");
    var span = document.createElement("span");
    
    div.className = "name-row";
    span.className = "slider round";
    
    checkBox.type = "checkbox";
    checkBox.name = "nombres";
    checkBox.value = nombres[i];
    if (existingMongoRow?.nombresSeleccionados && existingMongoRow.nombresSeleccionados.includes(nombres[i])){
      checkBox.checked = true;
    }
    // label.style.cssText = "color:#fff;font-weight: 500;font-size: 1.5vw;line-height: 1.1;";
    label.style.cssText = "color:#ffffff;font-weight:bold;text-align:left;";
    label.classList.add("letters_nombres");
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


  form.onsubmit = async function(e){
    e.preventDefault();
    e.stopPropagation();

    const selectedNames = [];
    const formData = new FormData(e.target);
    for (var pair of formData.entries()) {
      selectedNames.push(pair[1]);
    }

    if(!existingMongoRow) {
      mongoInsertInvite(selectedNames);
    } else {
      mongoUpdateInvite(selectedNames);
    }
    
    finalizar();
  }

  function finalizar() {
    const form = document.getElementById('form');
    const inner = document.getElementById('inner');
    const success = document.getElementById('success');
    form.style.display = 'none';
    // inner.style.display = 'none';
    success.style.display = 'block';
  }
} 