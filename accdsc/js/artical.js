// import articles from '../../src/articleroute'
// //数据中的id是标识，通常来和服务端交互，不是指向客户端
// //用数据驱动页面，不能用页面状态修改js逻辑
// //左边整体的div
// var left = document.querySelector('.nav_left');
// //包裹标题和文章的div
// var essay = document.querySelector('.essay');
// //标题的div
// // var titles = left.querySelector('.nav_left_first');
// //文章的div
// // var areticle = left.querySelector('.boke');
// String.prototype.ellipse = function (num) {
//     if (this.length > num) {
//         var hide = this.substr(0, num);
//         hide += '...';
//         return hide;
//     }
//     return this;
// }
// articles.forEach(element => {
//     var cloneNode = essay.cloneNode(true);
//     cloneNode.insertBefore(element.article, cloneNode.querySelector('.showmore'));
//     cloneNode.querySelector('.showmore').onclick = function () {
//         cloneNode.querySelector('.showmore').style.display = 'none'
//         cloneNode.querySelector('.hiden').style.display = 'block'
//         cloneNode.querySelector('article').innerHTML = element.article.text
//     }
//     cloneNode.querySelector('.hiden').onclick = function () {
//         cloneNode.querySelector('.showmore').style.display = 'block'
//         cloneNode.querySelector('.hiden').style.display = 'none'
//         cloneNode.querySelector('article').innerHTML = element.text.ellipse(140);
//     }
//     left.appendChild(cloneNode);
// });