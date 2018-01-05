var PIC_NUM = 10
var body = document.getElementsByTagName('body')[0]
var path = '../images/' + Math.floor(Math.random() * PIC_NUM) + '.jpg'
body.style.body = 'cover'
body.style.backgoundRepeat = 'no-repeat'
body.style.backgoundImage = 'url(D:/Github/home-page/images/0.jpg)'