class Box{
    constructor(x,y,width,height){
      var options= {
          restitution:0.6,
          friction:1
      }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.w=width;
        this.h=height;
        World.add(world, this.body);
    }
    display(){
    let pos= this.body.position;
    let angle= this.body.angle;
     push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
     rect(0,0,this.w,this.h);
      pop();
    }
}