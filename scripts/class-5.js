// let, var, const

// Naming Convention
// 1. PascalCasing
// 2. camelCasing 
// 3. kebab-casing
// 4. snake_casing
// 5. CONSTANT_CASING

// Numbers
let joshuasAge = 15;
let divineAge = 17.9;
let jeremiahChildAge = -6;
let blessingAge = 30 / 2;
const averageAge = (joshuasAge + divineAge + jeremiahChildAge + blessingAge) / 4;

console.log(joshuasAge + divineAge)


// alert("The average age of every one is " + averageAge)

// Arithemethic Operators
// B   O  D  M  A  S  (Expenoential)   (Modulus)
// ()  -  /  *  +  -        **             %
// Increment ++
// Decrement --

// Assigment Operator (=) to assign a value to a variable

// Comparision Oparator
// Greater than                    (>)
// Greater than or equal to        (>=)
// Less than                       (<)
// Less than or equal to           (<=)
// Equal to                        (==)
// equal value and equal type      (===)
// Not Equal to                    (!=)
// not equal value and equal type  (!==)

// Strings
let firstName = 'Divine'
let lastName = 'Gift';
// const fullName = firstName + " " + lastName;


const fullName = `${firstName} ${lastName}`;

firstName = "Jeremiah"

alert("My fullname is " + fullName);
alert(`My firstName is ${firstName}`);


// Boolean
let isABoy = true;
let isRaining = false;

// Arrays
let shoppingList = ['Mango', 'Orange'];

// Null and Undefined
let chair = null;
let slot;

console.log({
    typeOfSlot: typeof slot,
    typeOfChair: typeof chair,
    typeofShoppingList: typeof shoppingList,
    typeofShoppingList2: Array.isArray(shoppingList)
})

// Objects
let ac_remote = {
    isACTurnedOn: false,
    AC_COLOR: "white",
    turnOnAc() {
        this.isACTurnedOn = true;
    },
    turnOffAc() {
        this.isACTurnedOn = false;
    },
    getAcStatus() {
        if (this.isACTurnedOn == true) console.log("Ac is on")
        else console.log("Ac is off")
    },
    getAcColor() {
        console.log(`The color of the AC is ${this.AC_COLOR}`)
    },
    repaintAc(color) {
        this.AC_COLOR = color;
    }
}

// String, Array, Numbers Methods