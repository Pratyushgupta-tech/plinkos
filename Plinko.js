class Plinko {
    constructor(x,y,radius) {

      var options = {
          isStatic: true
      }

      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      fill("white");
      circle(pos.x, pos.y,10);
    }
  }
  