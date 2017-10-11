var template = document.querySelector('#template');
var clone = document.importNode(template.content, true);
var host = document.querySelector('#host');
host.appendChild(clone);
