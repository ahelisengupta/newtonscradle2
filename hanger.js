class hanger{
    constructor(x, y ) {
        var options = {
             isStatic: true
        }
        this.body = Bodies.rectangle(x, y,25,15, options);
        this.x = x
        this.y = y
        
       

        this.image = loadImage("hanger.png");
        World.add(world, this.body);
      } 

    

      display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0,25,25);
        pop();
      }
}