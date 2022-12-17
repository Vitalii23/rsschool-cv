(function () {
    let header = document.querySelector('h2');
    for (let i = 0; i < header.length; i++){
        header[i].setAttribute('data-content', header[i].innerHTML);
    }
})();