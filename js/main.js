

const colorsSelectorNode = document.querySelectorAll('.colorItem');
const logoNode = document.querySelector('.carPicture');

colorsSelectorNode.forEach(function(item) {
    item.addEventListener('click', function() {

        colorsSelectorNode.forEach(function(item) {
            item.classList.remove('colorItem--active');
        });
        item.classList.add('colorItem--active');
        
       
        let x = item.className;
        if (x.indexOf('Blue') !== -1){
            logoNode.setAttribute('src', 'https://webcademy.ru/files/js2020/solaris/blue.png');
        } else if (x.indexOf('White') !== -1){
            logoNode.setAttribute('src', 'https://webcademy.ru/files/js2020/solaris/white.png');
        } else if (x.indexOf('Red') !== -1){
            logoNode.setAttribute('src', 'https://webcademy.ru/files/js2020/solaris/red.png');
        } else if (x.indexOf('Black') !== -1){
            logoNode.setAttribute('src', 'https://webcademy.ru/files/js2020/solaris/black.png');
        } else if (x.indexOf('WhitePure') !== -1){
            logoNode.setAttribute('src', 'https://webcademy.ru/files/js2020/solaris/white-pure.png');
        } else if (x.indexOf('Orange') !== -1){
            logoNode.setAttribute('src', 'https://webcademy.ru/files/js2020/solaris/orange.png');
        } else if (x.indexOf('Graphite') !== -1){
            logoNode.setAttribute('src', 'https://webcademy.ru/files/js2020/solaris/graphite.png');
        } 
    });

});

// https://webcademy.ru/files/js2020/solaris/black.png
// https://webcademy.ru/files/js2020/solaris/blue.png
// https://webcademy.ru/files/js2020/solaris/graphite.png
// https://webcademy.ru/files/js2020/solaris/orange.png
// https://webcademy.ru/files/js2020/solaris/red.png
// https://webcademy.ru/files/js2020/solaris/white.png
// https://webcademy.ru/files/js2020/solaris/white-pure.png

