
## 重点

1. 设备检测
```
if(document.ontouchstart !== undefined){
  // 说明是触屏设备
}else{
  // 非触屏设备
}
```

2. 获取绘画上下文
```
var canvas = document.getElementById('xxx')
var context = canvas.getContext('2d') // 小写
```

3. 防止用户调整窗口大小
```
function autoSetCanvasSize(){
  window.onresize = function(){
    resize()
  }
  resize()
  function resize(){
    // 获取页面宽高，背下来下面两行代码
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth
    canvas.height = pageHeight
  }
}
```

4. 画线、画圆
```
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
```

5. API 有哪些?
beginPath()
closePath()
moveTo(x,y)
lineTo(x,y)
fill()
context = fillStyle = 'red'
stroke()
stokeStyle = 'red'

context.lineWidth = 10

context.rect(10,10,100,100) // 坐标 矩形宽高
context.fillRect(10,10,100,100)
context.fillStyle = 'green'

// 绘制弧线
context.arc(x,y,radius, startAngle, endAngle, anticlockwise)


