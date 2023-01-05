var canvas = new fabric.Canvas("myCanvas");
BlockW=30;
BlockH=30;
playerY=10;
playerX=10;
var playerO="";
function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img) {
        playerO=Img;
        playerO.scaleToWidth(150);
        playerO.scaleToHeight(140);
        playerO.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerO);
    } );
}
function newImage(getImage){
    fabric.Image.fromURL(getImage,function(Img) {
        Bloco=Img;
        Bloco.scaleToWidth(BlockW);
        Bloco.scaleToHeight(BlockH);
        Bloco.set({
            top:playerY,
            left:playerX
        });
        canvas.add(Bloco);
    } );
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey==true && keyPressed=="80"){
    BlockW=BlockW+10;
    BlockH=BlockH+10;
    document.getElementById("currentwidth").innerHTML=BlockW;
    document.getElementById("currentheight").innerHTML=BlockH;
    }
    if (e.shiftKey==true && keyPressed=="77"){
        BlockW=BlockW-10;
        BlockH=BlockH-10;
        document.getElementById("currentwidth").innerHTML=BlockW;
        document.getElementById("currentheight").innerHTML=BlockH;
        }
        if (keyPressed=="38"){
            up();
            console.log("up")
        }
        if (keyPressed=="40"){
            down();
            console.log("down")
        }
        if (keyPressed=="37"){
            left();
            console.log("left")
        }
        if (keyPressed=="39"){
            right();
            console.log("right")
        }
        if (keyPressed=="65"){
            newImage("cloud.jpg");
        }
        if (keyPressed=="66"){
            newImage("dark_green.png");
        }
        if (keyPressed=="67"){
            newImage("ground.png");
        }
        if (keyPressed=="68"){
            newImage("light_green.png");
        }
        if (keyPressed=="69"){
            newImage("roof.jpg");
        }
        if (keyPressed=="70"){
            newImage("trunk.jpg");
        }
        if (keyPressed=="71"){
            newImage("unique.png");
        }
        if (keyPressed=="72"){
            newImage("wall.jpg");
        }
        if (keyPressed=="73"){
            newImage("yellow_wall.png");
        }
    }
    function up(){
        if (playerY>=0){
            playerY=playerY-BlockH;
            canvas.remove(playerO);
            playerUpdate();

        }
    }
    function down(){
        if (playerY<=500){
            playerY=playerY+BlockH;
            canvas.remove(playerO);
            playerUpdate();
            
        }
    }
    function left(){
        if (playerX>=0){
            playerX=playerX-BlockW;
            canvas.remove(playerO);
            playerUpdate();
       }
    }
    function right(){
        if (playerX<=850){
            playerX=playerX+BlockW;
            canvas.remove(playerO);
            playerUpdate();
       }
    }