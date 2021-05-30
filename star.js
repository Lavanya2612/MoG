class Star{
    constructor(x,y,width,height){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/star.jpg");
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, {x:random (10,900),y:random(10,590)}, this.width, this.height);
        pop();
    }
}