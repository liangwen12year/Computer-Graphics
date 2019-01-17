    var canvas = document.getElementById('canvas'),
    c = canvas.getContext('2d'),
    iterations  = document.getElementById('iterations'),
    ratios= document.getElementById('ratio'),
    primitive = document.getElementById('Primitive'),
    colors =document.getElementById('color'),
    a=primitive.value;
    draw=document.getElementById('drawFractal'),
    deg = Math.PI / 180;  
    linewidth= document.getElementById('linewidth');

function  drawFractal(event){
     erase(event);
    var a = primitive.value,
        i = iterations.value,
    ratio = ratios.value;
    if (ratio < 1){
        alert('ratio should be greater or equal to 1 and integer. eg: input 2 means base case fractals is 2.');

    }
    color = colors.value;
   // console.log(color);
    c.strokeStyle = color;
  
if ( a == 'line' ) {
    drawFractal_line(c, i, 150, 300, 250,ratio);}
    
if( a == 'polyline'){
  drawFractal_polyline(c, i, 100, 300, 200,ratio,0); 
  drawFractal_polyline(c, i, 300, 300, 100,ratio,90); 
  drawFractal_polyline(c, i, 300, 400, 100,ratio,0); 
  drawFractal_polyline(c, i, 400, 400, 100,ratio,-60); 

}

if(a == 'rectangle'){
   
        drawFractal_rectangle(c,i,250,150,300,ratio);
 
}   

if(a == 'polygon'){
   drawFractal_polygone(c,i,250,150,200,ratio);
}

if(a=='circle'){
    //c.arc(300,300,100,0,2*Math.PI);
    drawFractal_circle(c,i,300,150,150,ratio);
}

if(a=='ellipse'){
    //c.save();
    //c.scale(1,0.5);
   //c.arc(300,300,100,0,2*Math.PI);
    //c.restore();
    drawFractal_ellipse(c,i,300,150,150,ratio);

}

  c.lineWidth=linewidth.value;
  c.strokeStyle=color;
  c.stroke();

}


 function drawFractal_ellipse(c, n, x, y, len,ratio) {
          
            c.save();
            c.translate(x, y);
            c.scale(1/ratio,1/ratio);
              for(i=0;i<ratio;i++){
             drawside(n);}

            c.rotate(60 * deg);
           
            for(i=0;i<ratio;i++){
             drawside(n);}
            c.rotate(60 * deg);
            
              for(i=0;i<ratio;i++){
             drawside(n);}
            c.rotate(60 * deg);
          
              for(i=0;i<ratio;i++){
             drawside(n);}
            c.rotate(60 * deg);
        
              for(i=0;i<ratio;i++){
             drawside(n);}
             c.rotate(60 * deg);
          
             for(i=0;i<ratio;i++){
             drawside(n);}
            c.closePath();
            c.restore();
            function drawside(n) {
                c.save();
                if (n == 0) {
                    c.scale(1,0.5);
                    c.arc(100,100,100,0,0.5*Math.PI);
                    //c.restore();
                    //c.restore();
                }
                else {
                    c.scale(1 / 3, 1 / 3);
                    drawside(n - 1);
                    c.rotate(60 * deg);
                    drawside(n - 1);
                    c.rotate(-120 * deg);
                    drawside(n - 1);
                    c.rotate(60 * deg);
                    drawside(n - 1);
                }
                
                c.restore();
                c.translate(len, 0);
            }
        }



 function drawFractal_circle(c, n, x, y, len,ratio) {
          
            c.save();
            c.translate(x, y);
            c.scale(1/ratio,1/ratio);
              for(i=0;i<ratio;i++){
             drawside(n);}

            c.rotate(60 * deg);
           
            for(i=0;i<ratio;i++){
             drawside(n);}
            c.rotate(60 * deg);
            
              for(i=0;i<ratio;i++){
             drawside(n);}
            c.rotate(60 * deg);
          
              for(i=0;i<ratio;i++){
             drawside(n);}
            c.rotate(60 * deg);
        
              for(i=0;i<ratio;i++){
             drawside(n);}
             c.rotate(60 * deg);
          
             for(i=0;i<ratio;i++){
             drawside(n);}
            c.closePath();
            c.restore();
            function drawside(n) {
                c.save();
                if (n == 0) {
                    c.arc(100,100,100,0,0.5*Math.PI);
                }
                else {
                    c.scale(1 / 3, 1 / 3);
                    drawside(n - 1);
                    c.rotate(60 * deg);
                    drawside(n - 1);
                    c.rotate(-120 * deg);
                    drawside(n - 1);
                    c.rotate(60 * deg);
                    drawside(n - 1);
                }
                
                c.restore();
                c.translate(len, 0);
            }
        }


function  drawFractal_polyline(c, n, x, y, len,ratio,delta){
    c.save();
    //alert(6);
    c.translate(x, y);
    c.moveTo(0, 0);
    c.rotate( delta * deg);
    drawside(n);
    c.restore();
    function drawside(n) {
        var count,angle,flag;
        c.save();
        if (n == 0) {
            c.lineTo(len, 0);}                  
        else {
           c.scale(1 / ratio, 1 / ratio);
            c.rotate(60 * deg);
            drawside(n - 1);
            c.rotate(-120*deg);
            drawside(n-1);
            c.rotate(0 * deg);
            drawside(n-1);
            c.rotate(120*deg);
            drawside(n-1);
            if(ratio>2){
                angle = 240;
                for(count = 6; count <= 2*ratio; count+=2){
                    c.rotate(0 * deg);
                    drawside(n-1);
                    flag=count/2;
                    if(flag % 2 == 1){
                        c.rotate(angle * deg);
                        drawside(n - 1);
                        angle = angle +240; }
                    else{
                        c.rotate(angle * deg );
                        drawside(n-1);
                        angle = angle + 120; }
                     }
                }
            }
        c.restore();
        c.translate(len, 0);
     }

}



function drawFractal_line(c, n, x, y, len,ratio) {
    c.save();
    c.translate(x, y);
    c.moveTo(0, 0);
    drawside(n);
    c.restore();
    function drawside(n) {
        var count,angle,flag;
        c.save();
        if (n == 0) {
            c.lineTo(len, 0);}                  
        else {
           c.scale(1 / ratio, 1 / ratio);
            c.rotate(60 * deg);
            drawside(n - 1);
            c.rotate(-120*deg);
            drawside(n-1);
            c.rotate(0 * deg);
            drawside(n-1);
            c.rotate(120*deg);
            drawside(n-1);
            if(ratio>2){
                angle = 240;
                for(count = 6; count <= 2*ratio; count+=2){
                    c.rotate(0 * deg);
                    drawside(n-1);
                    flag=count/2;
                    if(flag % 2 == 1){
                        c.rotate(angle * deg);
                        drawside(n - 1);
                        angle = angle +240; }
                    else{
                        c.rotate(angle * deg );
                        drawside(n-1);
                        angle = angle + 120; }
                     }
                }
            }

        c.restore();
        c.translate(len, 0);

     }
  
}

function erase(event) {
    c.fillStyle = "#FFFFFF";
    c.beginPath();
    c.fillRect(0,0,canvas.width,canvas.height);
    c.closePath();
}

function drawFractal_polygone(c, n, x, y, len,ratio) {
          
            c.save();
            c.translate(x, y);
            c.scale(1/ratio,1/ratio);
            c.moveTo(0, 0);
            for(i=0;i<ratio;i++){
            drawside(n);}
  
            c.rotate(60 * deg);
    
            for(i=0;i<ratio;i++){
            drawside(n);}
           
           c.rotate(60 * deg);
           
             for(i=0;i<ratio;i++){
            drawside(n);}
            c.rotate(60 * deg);
            
             for(i=0;i<ratio;i++){
            drawside(n);}

            c.rotate(60 * deg);
          
             for(i=0;i<ratio;i++){
            drawside(n);}
            c.rotate(60 * deg);
         
             for(i=0;i<ratio;i++){
            drawside(n);}
            
            c.restore();

            function drawside(n) {
               
                c.save();
                if (n == 0) {
                    c.lineTo(len, 0);
                }
                else {
                    c.scale(1 / 3, 1 / 3);
                    drawside(n - 1);
                    c.rotate(60 * deg);
                    drawside(n - 1);
                    c.rotate(-120 * deg);
                    drawside(n - 1);
                    c.rotate(60 * deg);
                    drawside(n - 1);
                }
                c.restore();
                c.translate(len, 0);
            }
        }


         function drawFractal_rectangle(c, n, x, y, len,ratio) {

            c.save();
            c.translate(x, y);
            c.scale(1/ratio,1/ratio);
            c.moveTo(0, 0);
            for(i=0;i<ratio;i++){
            drawside(n);}
            
            c.rotate(90 * deg);
          
            for(i=0;i<ratio;i++){
            drawside(n);}
           
           c.rotate(90 * deg);
          
             for(i=0;i<ratio;i++){
            drawside(n);}
            c.rotate(90 * deg);
           
             for(i=0;i<ratio;i++){
            drawside(n);}
          
            c.restore();

            function drawside(n) {
                c.save();
                if (n == 0) {
                    c.lineTo(len, 0);
                }
                else {
                    c.scale(1 / 3, 1 / 3);
                    drawside(n - 1);
                    c.rotate(60 * deg);
                    drawside(n - 1);
                    c.rotate(-120 * deg);
                    drawside(n - 1);
                    c.rotate(60 * deg);
                    drawside(n - 1);
                }
                c.restore();
                c.translate(len, 0);
            }
        }