class MyComponent extends HTMLElement {
    constructor () {
        super();
        this.root = this;
        this.root.innerHTML = `
                <style>
                    @keyframes roll {
                      0% {transform: rotateY(0deg)}
                      100% {transform: rotateY(360deg)}
                    }
                    .rotate {
                      transform-style: preserve-3d;
                      animation: roll 2s infinite linear;
                    }
                    #container {
                      perspective: 1400px;
                      padding: 10px;
                    }
                </style>
                <div id="container">
                  <img class="rotate" src="logo.svg">
                </div>
            `;
        this._speed = 0;
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

          var img = this.querySelector("img");
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

    connectedCallback () {
        //alert("connected");
    }

    disconnectedCallback () {
        //alert("disconnected");
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
  });
});

// customElements.whenDefined("my-component").then(() => {
//   var comp = document.querySelector("my-component");
//   comp.addEventListener("speed", (data) => {
//     comp.speed = data.detail.val;
//   });
// });
//
// var inputWithRange = document.querySelector("input[type='range']");
// inputWithRange.addEventListener("change", (event) => {
//   var event2 = new CustomEvent("speed", {
//     "detail": {"val": event.target.value + 's'}
//   });
//   inputWithRange.dispatchEvent(event2);
// });
//
// var inputWithText = document.querySelector("input[type='text']");
// inputWithText.addEventListener("speed", (evt) => {
//   inputWithText.value = evt.detail.val;
// });
