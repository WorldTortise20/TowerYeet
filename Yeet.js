class Yeet{
    constructor(x,y){
        var options ={
            isStatic: false,
            friction:1.4,
            density:1.4
        }        
        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);
        this.image = loadImage("polygon.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
    }
}