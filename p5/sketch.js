var diam1=(100,100);
var diam2=(100,100);
var diam3=(100,100);
var diam4=(100,100);
var diam5=(100,100);
var diam6=(100,100);

function setup() {
  // put setup code here
        createCanvas(1000,1000);
}

function draw() {
  // put drawing code here
    background("#000000");
    textSize(60);
    fill("#FF0000");
    text("Click a Circle",350,150);
    ellipse(200,400,diam1,diam1);
    fill("#00FF1B");
    ellipse(200,700,diam2,diam2);
    fill("#0049FF");
    ellipse(500,400,diam3,diam3);
    fill("#B200FF");
    ellipse(500,700,diam4,diam4);
    fill("#FF7800");
    ellipse(800,400,diam5,diam5);
    fill("#F7FF00");
    ellipse(800,700,diam6,diam6);
}

function mousePressed(){
    //red condition
    if(mouseX<255 && mouseY<455) {
        diam1=diam1+5;
    }
    else {
         diam1=diam1;  
    }
    //green condition
    if(mouseX<255 && mouseY>640) {
        diam2=diam2+5;
    }
    else {
         diam2=diam2;  
    }
    //blue condition
    if(mouseX<555 && mouseX>440 && mouseY<455) {
        diam3=diam3+5;
    }
    else {
         diam3=diam3;  
    }
    //purple condition
    if(mouseX<555 && mouseX>440 && mouseY>640) {
        diam4=diam4+5;
    }
    else {
         diam4=diam4;  
    }
    //orange condition
    if(mouseX>740 && mouseY<455) {
        diam5=diam5+5;
    }
    else {
         diam5=diam5;  
    }
    //yellow condition
    if(mouseX>740 && mouseY>640) {
        diam6=diam6+5;
    }
    else {
         diam6=diam6;  
    }
    
    
}
 //red condition
    if(mouseX<255 && mouseY<455) {
        diam1=diam1+5;
    }
    else {
         diam1=diam1;
    }
    //green condition
    if(mouseX<255 && mouseY>640) {
        diam2=diam2+5;
    }
    else {
         diam2=diam2;  
    }
    //blue condition
    if(mouseX<555 && mouseX>440 && mouseY<455) {
        diam3=diam3+5;
    }
    else {
         diam3=diam3;  
    }
    //purple condition
    if(mouseX<555 && mouseX>440 && mouseY>640) {
        diam4=diam4+5;
    }
    else {
         diam4=diam4;  
    }
    //orange condition
    if(mouseX>740 && mouseY<455) {
        diam5=diam5+5;
    }
    else {
         diam5=diam5;  
    }
    //yellow condition
    if(mouseX>740 && mouseY>640) {
        diam6=diam6+5;
    }
    else {
         diam6=diam6;  
    }