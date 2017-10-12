var link = document.querySelector('link[rel="import"]');
var content = link.import;

// Grab DOM from component.html's document.
var el = content.querySelector('#container');
var clone = el.cloneNode(true);
var host = document.querySelector('#host');
host.appendChild(clone);
