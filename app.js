$("[data-toggle=popover]").popover();

// Crear proyecto de node

// npm init -> agregar la configuración

// npm i sass -> instalar dependencia de sass desde https://www.npmjs.com/package/sass

// crear .gitignore y agregar texto de la pagina -> https://www.toptal.com/developers/gitignore/api/node

// ejecutar comando -> ./node_modules/sass/sass.js --watch ./scss/main.scss output.css

// Si es desde windows -> node ./node_modules/sass/sass.js --watch ./scss/main.scss output.css


// Variables -----------------------------------------------------------

// const x = 5
// let y = 5

// console.log(y);

// y = 6

// var z = 6
// z = 8

// console.log(z);
// ------------------------------------------------------------



const forms = document.querySelectorAll(".signup-form")

// console.log(forms);

// function suma(a, b) {
//   return a + b
// }

const getTemplate = () => {
  return fetch("./template.html")
    .then((response) => response.text())
}

function sendEmail(miVariable) {
  miVariable.preventDefault()
  const email = miVariable.target.querySelector("input").value
  getTemplate()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error, "error al obtener el templete");
    })
}

// const sendEmail = (miVariable) => {
//   miVariable.preventDefault()
//   console.log(miVariable);
// }

for(let i = 0; i < forms.length; i++){
  // console.log(forms[i]);
  forms[i].addEventListener("submit", sendEmail)
}