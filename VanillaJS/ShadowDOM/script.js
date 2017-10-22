var host = document.querySelector('#host')
var root = host.attachShadow({mode: 'open'});
root.innerHTML = `
  <link rel="stylesheet" href="style.css">
  <div id="container">
    <img class="rotate" src="logo.svg">
  </div>
`;
