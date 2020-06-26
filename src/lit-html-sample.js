 import {html, render} from 'lit-html';

const myTemplate = (name) => 
html   `
<div>
<h1 id="hello">Hello ${name}</h1>

</div>
`
render(myTemplate('Abhinandhan'), document.body)
console.log(document.body)
//comparing innerHTML update & lit-HTML update
setTimeout(()=>{
    document.getElementById('hello').innerHTML = "Hello Nandhan Devadiga"
   // render(myTemplate('Nandhan Devadiga'), document.body)  
},5000)
