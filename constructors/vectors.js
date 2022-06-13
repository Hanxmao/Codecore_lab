// build a Vector constructor.
// It should support the coordinates: x, y and z.
// It should have 3 prototype methods: plus, minus, magnitude.
// The methods, plus & minus, should return a new Vector (not a plain object or an existing vector) with the correct distances.
// Create a constructor/prototype version and class based version.


class Vector {
    constructor(a,b,c){
        this.a=parseInt(a) 
        this.b= parseInt(b)
        this.c=parseInt(c)
    }
    
    plus(obj){
        const result = new Vector(this.a+obj.a,this.b+obj.b,this.c+obj.c)
        return result
        }
    minus(obj){
        const result = new Vector(this.a-obj.a, this.b-obj.b, this.c-obj.c)
        return result
    }
    magnitude(){
        return Math.sqrt(Math.pow(this.a,2)+Math.pow(this.b,2)+Math.pow(this.c,2))
        
    }
}

let v1 = new Vector(4,4,0);
let v2 = new Vector(1,2,2);


console.log(v1.plus(v2)) // returns Vector {x: 5, y: 6, z: 2}
console.log(v2.plus(v1)) // returns Vector {x: 5, y: 6, z: 2}


console.log(v1.minus(v2)) // returns Vector {x: 3, y: 2, z: -2}
console.log(v2.minus(v1)) // returns Vector {x: -3, y: -2, z: 2}


console.log(v1.magnitude()) // returns 5.656854249492381
console.log(v2.magnitude()) // returns 3

