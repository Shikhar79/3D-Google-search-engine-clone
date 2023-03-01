let searchbar = document.querySelector('.sp');
let mglass = document.querySelector('.mg');

mglass.onclick = function(){
    let url = 'https://www.google.com/search?q='+searchbar.value;
    window.open(url,'_self');
}


