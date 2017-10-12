var root = document.querySelector('#host').attachShadow({mode: 'open'});
root.innerHTML = `
  <link rel="stylesheet" href="style.css">
  <div id="container">
    <img class="rotate" src="logo.svg">
  </div>
`;
