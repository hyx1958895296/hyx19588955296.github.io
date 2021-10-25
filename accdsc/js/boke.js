//鸭子
import Animate from "./Animation.js";
export default class Translate extends Animate {
    constructor() {
        super();
        // this.el = Animate.el;
        // this.model=Animate.model;
    }
    exec() {
        this.el.classList.add('change');
        
    }
 
}
