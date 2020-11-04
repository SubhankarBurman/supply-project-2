class Box {

    constructor(x, y, width, height){
        //JSON format of data respresentation { key1:value1, key2:value2, key3:value3 }

        this.body = Bodies.rectangle(x, y, width, height,{isStatic:false});
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        console.log(this);
    }

    display(){


        rectMode(CENTER);
        fill('red');

        rect(this.body.position.x,this.body.position.y, this.width, this.height);

    }


}