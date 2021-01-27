function Dog(ownersName, dogsName, color) {
    this.ownersName = ownersName;
    this.dogsName = dogsName;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Bob", "Fluffy", "Brown" );

let retreiver = new Dog("Steve", "Guissepe", "White" );

console.log(terrier.ownersName + " has a terrier that is " + terrier.color + " and his name is", terrier.dogsName);

console.log(retreiver.ownersName + " has a retreiver that is " + retreiver.color + " and his name is", retreiver.dogsName);

document.getElementById("Demo").innerHTML = terrier.ownersName + " has a terrier that is " + terrier.color + " and his name is", terrier.dogsName;
document.getElementById("Demo").innerHTML = retreiver.ownersName + " has a retreiver that is " + retreiver.color + " and his name is", retreiver.dogsName;

