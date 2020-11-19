class Ball{
constructor(x ,y , radius){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(x, y, radius, options)
    World.add(world, this.body)
    this.radius = radius
    this.image = loadImage("paper.png")
}
display(){
    push();
    //fill("purple")
    imageMode(CENTER)
    image(this.image, this.body.position.x, this.body.position.y, 2*this.radius + 10, 2*this.radius+ 10)
    //circle(this.body.position.x, this.body.position.y, 2*this.radius )
    pop();
}
}