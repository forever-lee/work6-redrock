
window.onload = function(){
const API ='https://music.niubishanshan.top/api/v2/music/search/';
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const ul = document.querySelector('.song-list');

btn.addEventListener('click',()=>{
    const xhr = new XMLHttpRequest()
    const q = input.value;
    const a = '/1'
    const b ='/10 '
    const url =API +q +a +b
    xhr.open('GET',url ,true)
    console.log(url)
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
            if ( xhr.status === 200){
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
            }else{
                console.log('请求错误')
            }
        }
    }
  xhr.send()
})
}