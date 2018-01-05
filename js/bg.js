var PIC_NUM = 10
var body = document.getElementsByTagName('body')[0]
var path = './images/' + Math.floor(Math.random() * PIC_NUM) + '.jpg'
body.style.backgroundImage = 'url(' + path + ')'