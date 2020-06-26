 import {html, render} from './node_modules/lit-html/lit-html.js';

const myTemplate = (name) => 
html   `
<div>
<h1 id="hello">Hello ${name}</h1>

</div>
`
render(myTemplate('Abhinandhan'), document.body)

//comparing innerHTML update & lit-HTML update
setTimeout(()=>{
    document.getElementById('hello').innerHTML = "Hello Nandhan Devadiga"
   // render(myTemplate('Nandhan Devadiga'), document.body)  
},5000)
