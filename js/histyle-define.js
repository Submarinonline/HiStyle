//独自要素定義
class nomalElement extends HTMLElement {
  constructor() {
    super();
  }
}
const ce1 = 'hs-header'
customElements.define(ce1);
customElements.define(`${ce1}-button`);
customElements.define(`${ce1}-title`);
const ce2 = 'hs-ctr'
customElements.define(ce2);