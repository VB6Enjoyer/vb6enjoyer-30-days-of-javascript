// 1
class Reptile extends Animal {
    constructor(name, age, color, legs) {
        super(name, age, color, legs)
    }

    walk() {
        if (this.getLegs > 0) {
            console.log("%c" + this.getName + "%cis walking.", 'color:gold');
        } else {
            console.log("%c" + this.getName + "%cis crawling.", 'color:gold');
        }
    }
}

const mauxir = new Reptile("Mauxir", 8, "Brown", 0);
const siris = new Reptile("Siris", 1, "Yellow", 6);

console.group("Reptiles!");
console.log(mauxir.getLegs)
mauxir.walk();
siris.walk();
console.groupEnd("Reptiles!");