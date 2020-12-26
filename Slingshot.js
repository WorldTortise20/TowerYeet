class Stop {
    constructor(bodyA,point){
        var options={
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.3,
            length: 7
        }
        this.pointB=point;
        this.stop = Constraint.create(options); 
        World.add(world,this.stop);
    }
    yeet(){ 
        this.stop.bodyA= null;
    }
    
    attacher(bodyA)
    {
        this.stop.bodyA=bodyA;
    }
    
    display(){ 
        if(this.stop.bodyA){
        var pointA= this.stop.bodyA.position;
        var pointB= this.pointB;
        stroke(117, 17, 7);
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);   
    }
}
}