var link = document.querySelector('link[rel="import"]');
var content = link.import;

// Grab DOM from component.html's document.
var template = content.querySelector('#template');
var clone = template.content.cloneNode(true);
var host = document.querySelector('#host');
host.appendChild(clone);
