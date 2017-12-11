var microfono;

var cattura;

function preload(){
    cervello=loadImage("brain/cervello con solo aree neutre.png");
    
    sensi=loadImage("brain/Azzurro_sensi-01.png");
    
    
    funzioniMotorieVol=loadImage("brain/Giallino_Funzioni motorie volontarie-01.png");
    
    udito=loadImage("brain/Marrone_Udito-01.png");
    
    
    comprensioneLinguistica=loadImage("brain/Rosa_Comprensione linguistica-01.png");
    
    
    parola=loadImage("brain/Rosso_Parolapng-01.png");
    
    
    visione=loadImage("brain/Verde_Visione-01.png");
    
    movimentiOculari=loadImage("brain/Viola_Movimenti oculari-01.png");
    
    
    
    
   
    
}

function setup() {
  createCanvas(windowWidth,windowHeight);
   microfono=new p5.AudioIn();
    microfono.start();
    
   cattura=createCapture(VIDEO);
    
    //capture.hide();
}

function draw() {
     //var volume=analizer.getLevel();
    
    var volume= microfono.getLevel();
    console.log(volume);
    
  var larghezza= width;
    var altezza=height;
    
    var opacityfunzioniMotorieVol=0;
    var opacitySensi=0;
    var opacityUdito=0;
    var opacityComprensioneLinguistica=0;
    var opacityparola=0;
    var opacityVisione=0;
    var opacityMovimentiOculari=0;
    var neutro=255;
    background('black');
    
    imageMode(CENTER);
        tint(255, opacityfunzioniMotorieVol);
            image(funzioniMotorieVol,larghezza/2,altezza/2, larghezza,altezza);
        tint(255, opacitySensi);
            image(sensi,larghezza/2,altezza/2, larghezza,altezza);
        //tint(255, opacityUdito);
            //image(udito,larghezza/2,altezza/2, 700,700);
        tint(255, opacityComprensioneLinguistica);
            image(comprensioneLinguistica,larghezza/2,altezza/2, larghezza,altezza);
        tint(255, opacityparola);
            image(parola,larghezza/2,altezza/2, larghezza,altezza);
        tint(255, opacityVisione);
            image(visione,larghezza/2,altezza/2, larghezza,altezza);
        tint(255, opacityMovimentiOculari);
            image(movimentiOculari,larghezza/2,altezza/2, larghezza,altezza);
     
    noTint();
        
        //image(cattura,0,0,100,100);
    
    
    if(volume>0.1) {
            image(udito,larghezza/2,altezza/2, larghezza,altezza);
            //opacityUdito=255;
        } 
    
    image(cervello,larghezza/2,altezza/2, larghezza,altezza);
    
    
    if(width>height) {
        width=altezza;
    } 
    else{height=larghezza;}
 
        
    
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

