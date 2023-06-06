canva = document.getElementById("mycanvas")
ctx = canva.getContext("2d")

ctx.beginPath()    
ctx.strokeStyle = "blue"
ctx.lineWidth = 5
ctx.arc(550, 450, 50, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath()    
ctx.strokeStyle = "yellow"
ctx.lineWidth = 5
ctx.arc(600, 500, 50, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath()    
ctx.strokeStyle = "black"
ctx.lineWidth = 5
ctx.arc(650, 450, 50, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath()    
ctx.lineWidth = 5
ctx.strokeStyle = "green"
ctx.arc(700, 500, 50, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath()    
ctx.lineWidth = 5
ctx.strokeStyle = "red"
ctx.arc(750, 450, 50, 0, 2*Math.PI)
ctx.stroke()



