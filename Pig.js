class Pig{
    
    constructor(x,y){
        var options ={
            restitution: 0.8
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        
        World.add(myworld,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        //angleMode(RADIANS);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("green");
        rectMode(CENTER);
       
        rect(0,0,this.width,this.height);
        pop();
    }
}