// 1
class Animal {
    constructor(name, age, color, legs) {
        this.name = name || "Lucky";
        this.age = age || 5;
        this.color = color || "Brown";
        this.legs = (legs !== undefined && legs !== null) ? Number(legs) : 4;
    }

    get getName() {
        return this.name;
    }

    get getAge() {
        return this.age;
    }

    get getColor() {
        return this.color;
    }

    get getLegs() {
        return this.legs;
    }

    walk() {
        console.log("%c" + this.getName + "%cis walking.", 'color:gold');
    }
}

const pucho = new Animal("Pucho", 12, "Golden", 4);
const lucky = new Animal();

console.group("Animals!");

console.log("Name:", pucho.getName + "\nAge:", pucho.getAge + "\nColor:", pucho.getColor + "\nLegs:", pucho.getLegs);
pucho.walk();

console.log("Name:", lucky.getName + "\nAge:", lucky.getAge + "\nColor:", lucky.getColor + "\nLegs:", lucky.getLegs);
lucky.walk();
console.groupEnd("Animals!");

// 2
class Dog extends Animal {
    constructor(name, breed, age, color, legs) {
        super(name, age, color, legs)
        this.breed = breed || "Doberman";
    }

    get getBreed() {
        return this.breed;
    }

    bark() {
        console.log("%c" + this.getName + "%cis barking.", 'color: gold');
    }
}

const moloch = new Dog("Moloch", "Bulldog", 9, "Black", 4);

console.group("Dogs!");

console.log("Name:", moloch.getName + "\nBreed:", moloch.getBreed + "\nAge:", moloch.getAge + "\nColor:", moloch.getColor + "\nLegs:", moloch.getLegs);
moloch.walk();
moloch.bark();

console.groupEnd("Dogs!");

class Cat extends Animal {
    constructor(name, eyeColor, age, color, colorB, legs) {
        super(name, age, color, legs)
        this.eyeColor = eyeColor || "Yellow";
        this.colorB = colorB || "White";
    }

    get getColor() {
        return [this.color, this.colorB];
    }

    get getEyeColor() {
        return this.eyeColor;
    }

    meow() {
        console.log("%c" + this.getName + "%cis meowing.", "color:gold");
    }
}

const minga = new Cat("Minga", "Green", 9, "Yellow", "White", 4);

console.group("Cats!");

console.log("Name:", minga.getName + "\nEye Color:", minga.getEyeColor + "\nAge:", minga.getAge + "\nColors:", minga.getColor.toString().replace(",", ", ") + "\nLegs:", minga.getLegs);
minga.walk();
minga.meow();

console.groupEnd("Cats!");