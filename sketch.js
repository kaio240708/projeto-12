var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
 pathImg = loadImage ("path.png");
  boyImg = loadAnimation ("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png") ;
 
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 path= createSprite(200,200,245,800);
 path. addImage("path", pathImg);

 path.velocityY= 3

//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

//crie um sprite de menino
boy = createSprite(200,350,500,800);
boy. addAnimation("boy",boyImg);
//adicione uma animação de corrida para ele
boy.scale=0.7;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,120,800);
rightBoundary.visible = false
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
 
  drawSprites();
}
