class Box{
    constructor(x,y,width,height){
        var options={
            isStatic: false,
            friction:1.4,
            density:2.6
        }
        
        this.x = x; 
        this.y = y;
        this.width = width;
        this.height = height;
        this.see = 255;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
                        }
        display()
        {
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed<3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();  
        }
        else{
            push();
            this.see = this.see-10;
            pop();  
            World.remove(world,this.body); 
        }
    }
    
    die(){
        if(this.see<0 && this.see>-1005){
        score++;
        }
    }
}