class Bow{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 6
        }
        this.bow1 = loadImage('images/img6.png');
       
        this.width=width
        this.height=height
        this.pointB = pointB
        this.bow = Constraint.create(options);
    
        World.add(world, this.bow);
        this.bow1.scale=0.2;
    }
    attach(body){
        this.bow.bodyA = body;
    }
    
    fly(){
        this.bow.bodyA = null;
    }

    display(){

    push();
    //translate(this.body.position.x, this.body.position.y);
    //rotate(angle);
    imageMode(CENTER);
    image(this.bow1,100,150,this.width,this.height);
    pop()
       // image(this.bow1,20,100);
        
       //if(this.bow.bodyA){
       // var pointA = this.bow.bodyA.position;
        //var pointB = this.pointB;
           // push();
            
            //stroke(48,22,8);
           // if(pointA.x < 220) {
               // strokeWeight(7);
             //   line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
               // line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
              //  image(this.bow1,pointA.x -30, pointA.y -10,15,30);
            //}
            //else{
               // strokeWeight(3);
             //   line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
               // line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
             //   image(this.bow1,pointA.x + 25, pointA.y -10,15,30);
           // }
           
            
           // pop();
        }
    }
    
