// var str = 'hello'
// var str = new String('hello')
// class Markdown {
//     constructor(text) {
//         this.text = text;
//     }

//     parse() {
//         return this.parseHtml(this.text);
//     }

//     parseHtml(text) {
//         let reg = /(#+)\s+([^\n]+)/;
//         let flag = false; //ture代表的是匹配成功;
//         let res = text.replace(reg, function (item) {
//             console.log(item);
//             flag = true;
//             let n = RegExp.$1.length > 6 ? 6 : RegExp.$1.length; // 1-6个#号；
//             let textConent = RegExp.$2;
//             return `<h${n}>${textConent}</h${n}>`;
//         })
//         if (flag) {
//             res = this.parseHtml(res);
//         }
//         return res;
//     }
// }

// var el = document.querySelector('article');
// let textContent = el.textContent;
// let md = new Markdown(el.textContent);
// let res = md.parse();
// el.innerHTML = res;

class Markdown {
    constructor(text) {
        this.text = text;
    }
    parse() {
        return this.parseHtml(this.text);
    }
    parseHtml(text) {
        var arr = text.split('\n');
        arr.shift();
        arr.pop();
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].includes('#')) {
                if (arr[i].split(/\s+/)[1] <= 6) {
                    if (arr[i].split(/\s+/)) {
                        var Oh = document.createElement(`h${arr[i].split(/\s+/)[1].length}`);
                        Oh.innerHTML = arr[i].split(/\s+/)[2];
                        el.appendChild(Oh);
                    } else {
                        var Op = document.createElement('p');
                        Op.innerHTML = arr[i].split(/\s+/)[2];
                        textContent.appendChild(Op);
                    }
                }
            }
        }
    }
}
var el = document.querySelector('article');
let textContent = el.textContent;
let md = new Markdown(el.textContent);
let res = md.parse();