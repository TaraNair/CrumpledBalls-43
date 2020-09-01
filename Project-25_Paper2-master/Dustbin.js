class Dustbin{
    constructor(x, y, w, h){
        var options = {
            'isStatic':true,
        }
        this.image = loadImage("dustbingreen.png");  

        this.width = w;
        this.height = h;
        this.bodyL = Bodies.rectangle(x - 110, y, 20, 100, options);
        this.bodyR = Bodies.rectangle(x + 110, y, 20, 100, options);
        this.bodyB = Bodies.rectangle(x, y + 40, 100, 20, options);

        World.add(world, this.bodyL);
        World.add(world, this.bodyR);
        World.add(world, this.bodyB);
    }

    display(){
        var posL =this.bodyL.position;
        var posR =this.bodyR.position;
        var posB =this.bodyB.position;
        push();
        fill("purple");
        imageMode(CENTER);
        rect(posL.x, posL.y, 20, 100);
        rect(posR.x, posR.y, 20, 100);
        rect(posB.x, posB.y, 200, 20);
        image(this.image, 800, 510, this.width * 2.6, this.height * 15);

        pop();
    }
}