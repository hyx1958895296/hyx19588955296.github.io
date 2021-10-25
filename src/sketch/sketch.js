import rount from '../articleroute';
class Url{
    constructor(url){
        this.url = url;
        this.json={};
        this.keyArr=[];
        this.exec();
    }

    exec(){
        let str = this.url.substring(1);
        this.keyArr = str.split("&");
        this.keyArr.forEach(item=>{
            let tempArr = item.split('=');
            this.json[tempArr[0]] = tempArr[1];
        })
        console.log(this.json);
    }
    get(name){
        return this.json[name];
    }
} 
var url1 = new Url(window.location.search);
rount.forEach(item=>{
    console.log(item);
    if(item.id == url1.json.type){
        document.querySelector('.mid-center-two-text').innerHTML = item.article.querySelector('.art').innerHTML;
    }
})