var link = document.querySelector('link[rel="import"]');
var content = link.import;

// Grab DOM from component.html's document.
var template = content.querySelector('#template');
var clone = template.content.cloneNode(true);

var root = document.querySelector('#host').attachShadow({mode: 'open'});
root.appendChild(clone);
