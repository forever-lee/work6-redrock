window.onload = function(){
    const API ='https://music.niubishanshan.top/api/v2/music/search/';
    const input = document.querySelector('.input');
    const btn = document.querySelector('.btn');
    const ul = document.querySelector('.song-list');
        const getJSON = function(url){
            const promise = new Promise(function(resolve,reject){
                const handler = function () {
                    if (this.readyState !== 4) {
                        return;
                    }
                    if (this.status === 200) {
                        const json = JSON.parse(xhr.responseText)
                        console.log(json)
                        const {data} = json;
                        const{songList} = json;
                        console.log({songList})
                        console.log({data});
                        const idList = songList.map(e => e.songMid)
                        const html = idList.map(str =>`<li>${str}</li>`.join(''))
                        console.log(html)
                        ul.innerHtml=html

                        resolve(this.response);
                    } else {
                        reject(new Error(this.statusText))
                    }
                }
                const xhr = new XMLHttpRequest()
                const q = input.value;
                const a = '/1'
                const b ='/10 '
                const url =API +q +a +b
                xhr.open("GET",url,true)
                xhr.onreadystatechange=handler
                xhr.setRequestHeader("Accept","application/json")
                xhr.send()
            })
            return promise;
        }
        btn.addEventListener('click',()=>{
            getJSON(url).then(function(json){
                console.log(json)
            },function(error){
                console.log('请求错误',error)
            })
        })
}