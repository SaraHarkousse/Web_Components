var template = document.querySelector('#template');
var clone = template.content.cloneNode(true);
var host = document.querySelector('#host');
host.appendChild(clone);
