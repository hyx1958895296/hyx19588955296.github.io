//动物
export default class Ani {
    constructor(parse) {
        this.parse = parse;
    }
    run() {
        this.parse.animation();
    }
}

