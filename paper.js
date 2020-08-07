class paper {
    constructor(x, y, radius, options) {
      var options = {
        isStatic : false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
//    this.width = width;
//    this.height = height;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green");
      fill(255);
      ellipse(0, 0, 20, 20);
      pop();
    }
  };
  
