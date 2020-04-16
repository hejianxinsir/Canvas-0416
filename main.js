var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

autoSetCanvasSize(canvas)
listenToMouse(canvas)


var using = false
var eraserEnabled = false
var lastPoint = {x: undefined, y: undefined}
var newPoint = null

function listenToMouse(canvas){
canvas.onmousedown = function(a){
  let x = a.clientX
  let y = a.clientY
  using = true
  if(eraserEnabled){
    context.clearRect(x-5,y-5,10,10)
  }else{
    lastPoint = {x: x, y:y}
  }
}

canvas.onmousemove = function(a){
  let x = a.clientX
  let y = a.clientY
  
  if(!using) {return}
  
  if(eraserEnabled){
      context.clearRect(x-5,y-5,10,10)
  }else{
      newPoint = {x: x, y: y}
      drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
      lastPoint = newPoint
  }
}
canvas.onmouseup = function(){
  using = false
}

eraser.onclick = function(){
  eraserEnabled = true
  btns.className = 'btns x'
}
brush.onclick = function(){
  eraserEnabled = false
  btns.className = 'btns'
}

}




// 防止用户调整窗口大小
function autoSetCanvasSize(yyy){
resize()
window.onresize = function(){
  resize()
}
function resize(){
  // 获取页面宽高，背下来下面两行代码
  var pageWidth = document.documentElement.clientWidth
  var pageHeight = document.documentElement.clientHeight
  yyy.width = pageWidth
  yyy.height = pageHeight
}
}

// 画线
function drawLine(x1,y1,x2,y2){
  context.beginPath()
  context.lineWidth = 1
  context.moveTo(x1,y1)
  context.lineTo(x2,y2)
  context.stroke()
  context.closePath()
}


// 画圆
function drawCircle(x,y,radius){
  context.beginPath()
  context.arc(x,y,radius,0,Math.PI*2)
  context.fillStyle = 'black'
  context.fill()
}






// context.strokeStyle = 'red'
// context.strokeRect(100,100,100,100)

// context.fillStyle = 'blue'
// context.fillRect(100,100,100,100)

// context.clearRect(100,100,10,10)

// 三角形
// context.beginPath()
// context.moveTo(10,10)
// context.lineTo(20,20)
// context.lineTo(10,69)
// context.fill()

// 圆形
// context.fillStyle = 'brown'
// context.beginPath()
// context.arc(78,270,30,0,Math.PI*2)
// context.fill()
// drawCircle(100,100,20)



