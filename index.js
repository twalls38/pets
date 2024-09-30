const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];

let displayPetInfo = document.querySelector('.selectedPetInfo')

let showInfo = function () {
    let userInput = document.querySelector('#petNum').value
   
   displayPetInfo.textContent = `${petsData[userInput-1].petName} is ${petsData[userInput-1].age} years old. This pet weighs ${petsData[userInput-1].weightInKilos} kilos and is a ${petsData[userInput-1].breed}.`
}



