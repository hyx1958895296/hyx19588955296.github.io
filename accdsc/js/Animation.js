import Options from "../js/options.js";
import Translate from "../js/boke.js";

export default class Animate {
    constructor(parse) {
        this.el = Animate.el;
        this.model = Animate.model;
        // this.el = parse.el;
        // this.type = parse.type;//作业二
        // this.model = parse.model;//作业1
        // this.model.exec(this.el);作业1
    }
    static el;
    static model;
    //作业二
    // load() {
    // if (this.type == 'translate') {
    //     this.hotbreak = new Translate();
    //     this.hotbreak.exec(this.el);
    // } else if (this.type == 'option') {
    //     this.codebreak = new Options();
    //     this.codebreak.cton(this.el);
    // }
    // }

    // static create(type) {
    //     return new Animate(type);
    // }
    static create() {
        return new Animate();
    }
    use(Translate) {
        try {
            Animate.model = Translate;
        } catch (e) {
            Translate;
        }
        ///把use方法return出去
        return this;
    }
    mount(primse) {
        Animate.el = primse;
        new Animate.model().exec();
    }
}
