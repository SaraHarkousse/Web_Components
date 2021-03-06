class MyComponent extends HTMLElement {
    constructor () {
        super();
        this.root = this.attachShadow({mode: 'open'});
        var link = document.querySelector('link[rel="import"]');
        var content = link.import;
        // Grab DOM from component.html's document.
        var template = content.querySelector('#template');
        var clone = template.content.cloneNode(true);
        this.root.appendChild(clone);
    }

    connectedCallback() {
      // var link = document.querySelector('link[rel="import"]');
      // var content = link.import;
      // // Grab DOM from component.html's document.
      // var template = content.querySelector('#template');
      // var clone = template.content.cloneNode(true);
      // this.root.appendChild(clone);
    }

    static get observedAttributes() {
        return ["speed"];
    }

    get speed () {
        return this._speed;
    }

    set speed (val) {
        if (this._speed === val) return;
        this.setAttribute('speed', val);
    }

    attributeChangedCallback (name, oldValue, newValue) {
      if (oldValue === newValue) return;
      switch (name) {
        case 'speed':
          this._speed = newValue;

          var img = this.root.querySelector("img");
          img.style.animationDuration = newValue;

          var range = document.querySelector("input[type='range']");
          var len = this._speed.length;
          var res = this._speed.substring(0, len-1);
          range.value = res;

          var input = document.querySelector("input[type='text']");
          input.value = this._speed;

          break;
      }
    }

    attachedCallback () {
        alert("attached");
    }

    detachedCallback () {
        alert("detached");
    }
}

customElements.define('my-component', MyComponent);

customElements.whenDefined("my-component").then(() => {
  document.querySelector("input[type='range']").addEventListener("change", (event) => {
    var comp = document.querySelector("my-component");
    var val = event.target.value + 's';
    comp.speed = val;

    var input = document.querySelector("input[type='text']");
    input.value = val;
  }, false);

});
