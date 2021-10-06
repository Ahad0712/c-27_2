class Rubber{
    constructor(x,y,radius){
        var option={
            'restitution' : 0.5,
            'friction': 10,
            'density': 0.1
        }
        this.radius = radius;
    }
    circumference() {
        return Math.PI * this.radius * 2;
      }
      area() {
        return Math.PI * this.radius * this.radius;
      }    display()
      {
          var pos=this.body.position;
        
      }
}