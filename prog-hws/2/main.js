 $(document).ready(function(){

        $("#wheel").click(function(){

            score=parseInt((document.getElementById("score")).value);
            R=parseInt((document.getElementById("R")).value);
            cl=(document.getElementById("color")).value;
            linewidth=(document.getElementById("linewidth")).value;
            if (score==100){

                erase(event);
                drawcirclewheel(R);

            }
            if (score >= 80 && score<=99) {
             erase(event);
            ellipse(R,score);
         
            }
            if(score<80 && score>=4){
             erase(event);
            drawpolywheel(score,R);
         }

            if(score<4 || score >100){
                 erase(event);
                alert('score have to in the range of 4-100');
            }

  });
});


function ellipse(R,score){

var c=document.getElementById("myCanvas");
            var ctx=c.getContext("2d");
            rx=R;
            ry=R*(1-0.01*(100-score));

            ratio=ry/rx;
             ctx.lineWidth=linewidth;
            ctx.strokeStyle=cl; 
            ctx.save();
            ctx.scale(1, ratio); 
            ctx.beginPath();
            ctx.arc(c.width/2, c.height/2, R, 0, Math.PI * 2); 
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(c.width/2, c.height/2, 0.8*R, 0, Math.PI * 2); 
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(c.width/2, c.height/2, 0.35*R, 0, Math.PI * 2); 
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(c.width/2+0.35*R,c.height/2+0.35*R,0.05*R,0,2*Math.PI);
            ctx.stroke();   
             ctx.beginPath();
            ctx.arc(c.width/2-0.35*R,c.height/2+0.35*R,0.05*R,0,2*Math.PI);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(c.width/2-0.35*R,c.height/2-0.35*R,0.05*R,0,2*Math.PI);
            ctx.stroke();
            ctx.beginPath();
             ctx.arc(c.width/2+0.35*R,c.height/2-0.35*R,0.05*R,0,2*Math.PI);
             ctx.stroke();
            ctx.restore();
            
}


    function drawcirclewheel(R){
        var c=document.getElementById("myCanvas");
            var ctx=c.getContext("2d");
            ctx.clearRect(0,0,c.width,c.height);
            ctx.strokeStyle=cl; 
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, c.width, c.height); 
            ctx.lineWidth=linewidth;
            ctx.beginPath();
            ctx.arc(c.width/2,c.height/2,R,0,2*Math.PI);
             ctx.stroke();
            ctx.beginPath();
            ctx.arc(c.width/2,c.height/2,0.8*R,0,2*Math.PI);
             ctx.stroke();
             ctx.beginPath();
            ctx.arc(c.width/2,c.height/2,0.3*R,0,2*Math.PI);
             ctx.stroke();
            ctx.beginPath();
            ctx.arc(c.width/2+0.35*R,c.height/2+0.35*R,0.05*R,0,2*Math.PI);
            ctx.stroke();   
        ctx.beginPath();
        ctx.arc(c.width/2-0.35*R,c.height/2+0.35*R,0.05*R,0,2*Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(c.width/2-0.35*R,c.height/2-0.35*R,0.05*R,0,2*Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(c.width/2+0.35*R,c.height/2-0.35*R,0.05*R,0,2*Math.PI);
            ctx.stroke();

    }

   
 

   function drawpolywheel(score,R){

            var c=document.getElementById("myCanvas");
            var ctx=c.getContext("2d");
            ctx.clearRect(0,0,ctx.width,c.height); 
            var vertices = getPolygonVertices(score, R);  
            var vertices2 = getPolygonVertices(score, 0.8*R); 
            ctx.beginPath();  
            ctx.fillStyle = "white";
             ctx.strokeStyle=cl;
            ctx.fillRect(0, 0, c.width, c.height);  
            ctx.moveTo(vertices[0][0]+c.width/2, vertices[0][1]+c.height/2); 
             
            for (var i = 1; i < vertices.length; i++) {  
            ctx.lineTo(vertices[i][0]+c.width/2, vertices[i][1]+c.height/2);  
        }  
            ctx.lineWidth = linewidth; 
            ctx.closePath(); 
            ctx.stroke(); 
         
           ctx.moveTo(vertices2[0][0]+c.width/2, vertices2[0][1]+c.height/2);
        for (var i = 1; i < vertices2.length; i++) {  
            ctx.lineTo(vertices2[i][0]+c.width/2, vertices2[i][1]+c.height/2);  
        }

        ctx.lineWidth = linewidth;  
        ctx.closePath();  
        ctx.stroke();   
        ctx.beginPath();
        ctx.arc(c.width/2,c.height/2,0.3*R,0,2*Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(c.width/2+0.35*R,c.height/2+0.35*R,0.05*R,0,2*Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(c.width/2-0.35*R,c.height/2+0.35*R,0.05*R,0,2*Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(c.width/2-0.35*R,c.height/2-0.35*R,0.05*R,0,2*Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(c.width/2+0.35*R,c.height/2-0.35*R,0.05*R,0,2*Math.PI);
       
        ctx.stroke();


 }


    function getPolygonVertices (edges, r) {  
        var ca = 0, aiv = 360 / edges, ata = Math.PI / 180, list = new Array();  
        for (var k = 0; k < edges; k++) {  
            var x = Math.cos(ca * ata) * r,  
            y = Math.sin(ca * ata) * r;  
            list.push([x, y]);  
            ca += aiv;  
        }  
        return list;  
    }

    function erase(event) {
        //alert(7);
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,c.width,c.height);
        flag=0;

}