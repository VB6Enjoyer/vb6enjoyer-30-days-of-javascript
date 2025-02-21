let dog = {}; // 1
console.log(dog) // 2;

// 3
dog['name'] = "Pucho";
dog['legs'] = 4;
dog['color'] = "Golden";
dog['bark'] = function () { return "Woof Woof" };

console.log(dog.name, dog.legs, dog.color, dog.bark()); // 4

// 5 
dog['breed'] = "Mixed";
dog['getDogInfo'] = function () { return "Name: " + dog.name + "\nLegs: " + dog.legs + "\nColor: " + dog.color + "\nBarks?: " + dog.bark() + "\nBreed: " + dog.breed };
console.log(dog.getDogInfo());