var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

autoSetCanvasSize()
listenToUser()

let pageWidth = document.documentElement.clientWidth
let pageHeight = document.documentElement.clientHeight


let using = false 
let eraserEnabled = false
let lastDot = {x: undefined, y: undefined}
let newDot = {x: undefined, y: undefined} 
let lineWidth = 2
let pencolor = 'red'

// 四个按钮


// 颜色
black.onclick = function(){
  pencolor = 'black'
}
brown.onclick = function(){
  pencolor = 'brown'
}
orange.onclick = function(){
  pencolor = 'orange'
}
green.onclick = function(){
  pencolor = 'green'
}
blue.onclick = function(){
  pencolor = 'blue'
}
purple.onclick = function(){
  pencolor = 'purple'
}
yellow.onclick = function(){
  pencolor = 'yellow'
}
lightgray.onclick = function(){
  pencolor = 'lightgray'
}
lightblue.onclick = function(){
  pencolor = 'lightblue'
}

// 粗细
thick.onclick = function(){
  context.lineWidth = 10
  thick.classList.add('active')
  middle.classList.remove('active')
  thin.classList.remove('active')
}
middle.onclick = function(){
  context.lineWidth = 6
  thick.classList.remove('active')
  middle.classList.add('active')
  thin.classList.remove('active')
}
thin.onclick = function(){
  context.lineWidth = 2
  thick.classList.remove('active')
  middle.classList.remove('active')
  thin.classList.add('active')
}

function listenToUser(){
  if(document.ontouchstart !== undefined){
    // 触屏设备
    canvas.ontouchstart = function(a){
      using = true
      let x = a.touches[0].clientX
      let y = a.touches[0].clientY
      lastDot = {x: clientX, y: clientY}
    }
    canvas.ontouchmove = function(a){
      console.log('mousemove')
      let x = a.touches[0].clientX
      let y = a.touches[0].clientY
      newDot = {x: x, y: y}

      if(eraserEnabled){
        if(using){
          context.clearRect(x-10,y-10,20,20)
        }
      }else{
        if(using){
          drawLine(lastDot.x, lastDot.y, newDot.x, newDot.y)
          lastDot = newDot
        }
      }
    }
    canvas.ontouchend = function(){
      using = false
    }
  }else{
    // 非触屏设备
    canvas.onmousedown = function(a){
      using = true
      let {clientX, clientY} = a
      lastDot = {x: clientX, y: clientY}
    }
    canvas.onmousemove = function(a){
      console.log('mousemove')
      let x = a.clientX
      let y = a.clientY 
      newDot = {x: x, y: y}

      if(eraserEnabled){
        if(using){
          context.clearRect(x-10,y-10,20,20)
        }
      }else{
        if(using){
          drawLine(lastDot.x, lastDot.y, newDot.x, newDot.y)
          lastDot = newDot
        }
      }
    }
    canvas.onmouseup = function(){
      using = false
    }
  }
}

// 防止用户调整窗口大小
function autoSetCanvasSize(){
  resize()
  window.onresize = function(){
    resize()
  }
  function resize(){
    // 获取页面宽高，背下来下面两行代码
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth
    canvas.height = pageHeight
  }
}


// 画线
function drawLine(x1,y1,x2,y2){
  context.beginPath()
  context.moveTo(x1,y1)
  context.lineTo(x2,y2)
  context.strokeStyle = pencolor 
  context.stroke()
  context.closePath()
}
// 画圆
function drawCircle(x,y){
  context.beginPath()
  context.arc(x,y,1,0,Math.PI*2)
  context.fill()
  context.lineWidth = lineWidth
}


pen.onclick = function(){
  pen.classList.add('active')
  eraser.classList.remove('active')
  download.classList.remove('active')
  delete16.classList.remove('active')

  eraserEnabled = false
}
eraser.onclick = function(){
  eraser.classList.add('active')
  pen.classList.remove('active')
  download.classList.remove('active')
  delete16.classList.remove('active')

  eraserEnabled = true
}
download.onclick = function(){
  download.classList.add('active')
  pen.classList.remove('active')
  eraser.classList.remove('active')
  delete16.classList.remove('active')
}
delete16.onclick = function(){
  download.classList.remove('active')
  pen.classList.add('active')
  eraser.classList.remove('active')

  context.fillStyle = 'white'
  context.fillRect(0,0,pageWidth, pageHeight)
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



