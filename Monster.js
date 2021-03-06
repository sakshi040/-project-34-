class Monster{
    constructor(x,y,w,h){
        var options={
            density:1.2,
            friction:1
        }
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.image=loadImage("Monster-01.png")
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        }
        display()
            {
                var angle=this.body.angle
                var pos=this.body.position
                push ()
                translate (this.body.position.x,this.body.position.y)
                imageMode (CENTER)
                image(this.image,0,0,this.w,this.h)
                pop ()			
            }
        }