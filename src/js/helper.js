const output = document.querySelector('#codeOutput');
const script = document.querySelector('#taskScript');
const scriptSrc = script.src;

fetch(scriptSrc)
  .then(response => response.text())
  .then(data => {
    output.textContent = data;
  })
  .catch(error => console.log(error));

