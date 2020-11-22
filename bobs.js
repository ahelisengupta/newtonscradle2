class bobs{
    constructor(x, y ) {
        var options = {
             isStatic: false,
             restitution: 1
        }
        this.body = Bodies.rectangle(x, y,25, 25, options);
        this.x = x
        this.y = y
        
       

        this.image = loadImage("ball.png");
        World.add(world, this.body);
      } 

    

      display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0,30,30);
        pop();
      }
}