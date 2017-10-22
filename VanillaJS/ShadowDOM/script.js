var shadowflag = HTMLElement.prototype.attachShadow;

var host = document.querySelector('#host');
var root = host;

if (shadowflag) {
  root = host.attachShadow({mode: 'open'});
}

root.innerHTML = `
  <link rel="stylesheet" href="style.css">
  <div id="container">
    <img class="rotate" src="logo.svg">
  </div>
`;
