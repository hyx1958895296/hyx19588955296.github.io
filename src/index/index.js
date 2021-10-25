// import artical from '../../accdsc/js/artical';
// import Translate from '../../accdsc/js/boke';
// import Animate from '../../accdsc/js/Animation';
import articleroutes from '../articleroute';
//左边整体的div
var left = document.querySelector('.nav_left');
//包裹标题和文章的div
var essay = document.querySelector('.essay');
essay.remove();
articleroutes.forEach(ele => {
    var cloneNode = essay.cloneNode(true);
    cloneNode.querySelector('.article').appendChild(ele.article);
    cloneNode.querySelector('.article').querySelector('.art').dataset.id =articleroutes.id;
    cloneNode.querySelector('.article').querySelector('h3').onclick = function(e){
        console.log(e.target.dataset.id);
        window.location.href = './sketch.html?type='+e.target.dataset.id;
    }
    left.appendChild(cloneNode);
});
class Ellipsis {
    constructor(props) {
        this.el = props.el;
        this.text = this.el.innerHTML;
        this.textCount = props.textCount;
        this.findAllButtonText = props.findAllButtonText || '查看全文';
        this.ellipsisButtonText = props.ellipsisButtonText || '收起';
        this.showFindAllButton = props.showFindAllButton || false;
        this.flag = true; //判断是否显示查看全部按钮的显示状态；
    }

    get buttonText() {
        return this.flag ? this.findAllButtonText : this.ellipsisButtonText;
    }

    exec() {
        if (!this.text) throw new Errow('文本内容不能为空');
        // 把文本切割成50个长度；
        this.el.innerHTML = this.format(this.text, this.textCount);
        //如果 需要展示查看全部的那个按钮
        if (this.showFindAllButton) {
            //增加a标签；
            this.addButton();
        }
    }
    addButton() {
        var a = document.createElement('a');
        a.textContent = this.findAllButtonText;
        a.style.cssText = `
            color:blue;
            cursor: pointer;
        `
        var _this = this;
        a.addEventListener('click', function () {
            _this.flag = !_this.flag;
            // true = !true //false;
            // false = !false //true;
            _this.el.childNodes[0].textContent = _this.flag ? _this.format(_this.text, _this.textCount) : _this.text;
            this.textContent = _this.buttonText;
        })
        this.el.appendChild(a, this.el.childNodes[0])
    }

    format(str, num) {
        return str.length < num ? str : (str.substring(0, num) + '...');
    }
}

let ellipsis = new Ellipsis({
    el: document.querySelectorAll('.art')[0],
    textCount: 30,
    findAllButtonText: "查看",
    showFindAllButton: true
})

ellipsis.exec();


// var url = new Url('localhost:8080?type=2&id=1&name=xiaoming');
// url.get('type') // 2；
// url.get('id') // 1；
// url.get('name') // xiaoming;







//作业1 作业输出
//将src/home/index.js中代码打包到docs/home文件夹中，
//文件夹名叫helloworld.js
// let config = {
//     entry: './src/home/index.js',
//     output: {
//         filename: 'home/helloworld.js',
//         path: './docs'
//     }
// }

// function Webpack(config) {
//     this.config = config;
// }
// Webpack.prototype.compile = function () {
//     let { entry, output } = this.config;
//     let { filename, path } = output;
//     let [dir, file] = filename.split('/');
//     var str = `将${entry}中的代码打包到${path}/${dir}/文件夹中,文件名称叫${file}`
//     console.log(str);
// }
// const webpack = new Webpack(config);
// webpack.compile();


//作业二：
// 将./src/home/home.js中的代码打包到/docs/home/文件夹中，文件名称叫home.jfkasldfjklas.js


// 将./src/index/index.js中的代码打包到/docs/index/文件夹中，
//文件名称叫index.asdjfklasdfas.js
// let config ={
//     entry: {
//         home: './src/home/home.js',
//         index: './src/index/index.js'
//     },
//     output: {
//         filename: '[name].[contenthash].js',
//         path: '/docs'
//     }
// }
// function Webpack(config) {
//     this.config = config;
// }
// Webpack.prototype.compile = function () {
//     let { entry, output } = this.config;
//     if (typeof entry == 'object') {
//         for (var key in entry) {
//             var random = parseInt(Math.random()*8999999+1000000);
//             var str = `将${entry[key]}中的代码打包到${output.path}文件夹中，文件名称叫${key}.${random}.js`
//             console.log(str);
//         }
//     }
// }
// const webpack = new Webpack(config);
// webpack.compile();



//
// let ani = new Ani(new boke({
//     targets: [
//         {
//             el: document.querySelector('.nav_left_first'),
//             animationClassName: 'change'
//         },
//         {
//             el: document.querySelector('.boke'),
//             animationClassName: 'change'
//         },
//         {
//             el: document.querySelector('.nav_left_second'),
//             animationClassName: 'change'
//         },
//         {
//             el: document.querySelector('.boke1'),
//             animationClassName: 'change'
//         },
//     ]
// }))
// 作业：Translate()   Opicity();
// new Animate({
//     //  给动画添加类
//     el: document.querySelector('.text'),
//     //  添加什么效果
//     model: new Translate()
// })

// 作业二： 
// let animate = new Animate({
//     el: document.querySelector('.text'),
//     type: 'translate',
// })
// animate.load();

// 作业三： 
// var Animate = new Animate();
// Animate.create({
//     type: 'translate',
// }).mount(document.querySelector('.text'))

// 作业四：
//  use方法中应该接收一个 Translate.install的静态方法；如果没有静态方法，那么直接执行这个方法；
//  注意：是直接执行这个方法，而不是 new一个构造函数；
// Animate.create().use(Translate).mount(document.querySelector('.text'));

//作业五：
// class Translate extends Animate{
//     constructor(){
//         super()
//     }
//     exec(){
//         let _this = this;
//         this.el.classList.add('ani-translate');
//         super.emit('animationstart')
//         // this.el.addEventListener('animationstart',function(e){
//         //     e.target.classList.remove('ani-translate');
//         // })
//     }
// }
// let animate = Animate.create().use(Translate).mount(document.querySelector('div'))
// 作业:封装Ellipsis类
// /**
//  * @description 截取字符串,超出...
//  * @param text: 文本
//  * @param textCount : 字符串截取长度 number类型;
//  * @param findAllText: 非必填项,默认为'查看全部'
//  * @param showFindAllButton :是否显示'查看全部'按钮,默认为false
//  * **/
//  new Ellipsis({
//     text: '文本',
//     textCount: 110,
//     findAllText: '',
//     showFindAllButton: true
// })