(function () {
  function setRem () {
    var whdef = 100 / 1920
    var bodyWidth = document.body.clientWidth
    var rem = bodyWidth * whdef
    document.getElementsByTagName('html')[0].style.fontSize = rem + 'px'
    // console.log("responsive啦啦啦")
    // console.log(document.getElementsByTagName('html')[0].style.fontSize)
  }
  window.addEventListener('load', setRem)
  window.addEventListener('resize', setRem)
})()
