//Create variables here
var dog , food ; 
var foodStock , foods;

function preload()
{
	//load images here
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.pmg");
  houseImage = loadImage("images/house.jpg");

}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(400,400);
  dog,addImage(dogimage);
  dog.scale = 0.2;

  database = firebase.database();
  console.log(database);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  background(houseImage);
  if(keyWentDown(UP_ARROW)){
    foods = foods - 1;
    writeStock(foods);
    dog.addImage(happyDogImage);

  }
    if(keyWentUp(UP_ARROW)){
      dog.addImage(dogImage);
    }
   
  drawSprites();
  //add styles here
  textSize(18);
  fill("red");
  text("Press and holp UP ARROW key to feed the dog", 50 , 20);
  text("Food Remaining : " + foods, 50, 40);
}

function readStock(data){
  foods = data.val();
  console.log(foods);

}
  
function writeStock(x){
  database.ref('/').update({
    Food : x
  })
}
