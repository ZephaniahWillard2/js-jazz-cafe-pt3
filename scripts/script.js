// Task 1: Implement a function that calculates total coffees sold
    // Calculate the total coffees sold by summing up a sales array
function calculateCoffeeSold(coffeeSoldPerDay){
    let total = 0;
    for (const coffeeSoldPerDay of coffeesSoldPerDay){
        total += coffeeSoldPerDay
    }
    return total;

}
    


const coffeesSoldPerDay = [300, 200, 150, 230, 300, 200];
const totalCoffee = calculateCoffeeSold(coffeesSoldPerDay);
console.log("Total Coffee Sold:", totalCoffee);


// Task 2: Implement a function to filter out decaf coffees from a list of coffee options
    // Use the filter method to filter out decaf coffee options
function filterDecafCoffee(coffeeOptions){
    let caf = [];
    for(const coffeeOption of coffeeOptions){
        if(coffeeOption.decaf === false){
            caf.push(coffeeOption);
        }

    }
    return caf;
}

const coffeeOptions = [
    { name: "Espresso", decaf: false},
    { name: "Latte", decaf: true},
    { name: "Cappuccino", decaf: true}
];

const caf = filterDecafCoffee(coffeeOptions);
console.log("Non Decaf Coffee:", caf);





// Task 3: Define a class for Jazz Coffee Roasters
class JazzCoffeeRoasters{
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
}


// Task 4: Extend the Jazz Coffee Roaster class for Specialty Coffee Roasters
class SpecialtyCoffeeRoasters extends JazzCoffeeRoasters{
    constructor(name, location, specialties){
        super(name, location);
        this.specialties = specialties;
    }
}

        // !!!!!CODE!!!!!!    const specialtyCoffeeRoasters = new SpecialtyCoffeeRoasters("Jo's Coffee", "Minneapolis", "Circus Jazz Coffee Shop")

// Task 5: Create a custom constructor function for Jazz Coffee Blends
function jazzCoffeeBlends(name, roast){
    let blend = {};
    blend.name = name;
    blend.roast = roast;
}

// Task 6: Implement a class with default parameters for Jazz Coffee Cups
class JazzCoffeeCups{
    constructor(height = "tall", type = "to-go"){
        this.height = height;
        this.type = type;
    }
}


// Task 7: Use template literals to create a message about a coffee event
    //The event details have been given to you below
    const coffeeEvent = {
        name: "Java Jam",
        date: "April 10, 2024",
        venue: "Jazz & Java"
    };
    
    
    
    // Task 9: Use spreadrest operators on an array
    
    // Array of coffee types
    const coffeeTypes = ["Espresso", "Latte", "Cappuccino"];
    const newType = "Mocha";
    
    // Add a new coffee type using spread operator and create an updated coffee type array
    
    console.log("Updated Coffee Types:", updatedCoffeeTypes);
    
    