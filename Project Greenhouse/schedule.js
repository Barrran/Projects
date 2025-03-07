//make a javascript program to measure time and turn on and off a fan, a light and a heater.
// 1. need a function to measure time.
// 2. need a function to turn on a fan and run for a certain duration.
// 3. need a function to turn on a UV grow light at a specific time and run for a certain duration.
// 4. need a function to turn on a heater to maintain temperature.
//     -> this function will need something to measure temperature to work correctly. 

//test logic with javascript then convert to arduino for real world application testing.

//Global Variables

let time = 0;
let fan = 0;
let light = 0;
let heater = 0;
let temperature = 0.0;
const startDate = new Date;
const lowTemp = 20;
const hiTemp = 24;

//Fan operation function

function controlFan() {

    function turnOnFan() {
        fan = 1;
        return fan;
    };
    
    function turnOffFan() {
        fan = 0;
        return fan;
    };

    turnOnFan();

    setTimeout( () => {
        turnOffFan();
        setInterval( () => {
            turnOnFan();
            setTimeout(turnOffFan, 15 * 60 * 1000);
        }, 45 * 60 * 1000);
    }, 15 * 60 * 1000);
    
    };

//UV light operation function

function turnOnLight() {
    light = 1;
    return light;
};

function turnOffLight() {
    light = 0;
    return light;
};

function controlLight() {
    turnOnLight();
    const duration = 18 * 60 * 60 * 1000;
    setTimeout(()=>{turnOffLight();}, duration);
};

//Heater operation function (with temperature monitoring)

function turnOnHeat() {
    heater = 1;
    return heater;
};

function turnOffHeat() {
    heater = 0;
    return heater;
};

function controlHeater() {
    turnOnHeat();
    const duration = 1 * 60 * 60 * 1000;
    setTimeout(()=>{turnOffHeat();}, duration);
};

//Control flow logic goes here:

function runGreenHouse () {

    console.log(`The current date is ${startDate}`);
    console.log("Default settings are as follows:");
    console.log("1. Lights on for 18 hours and off for 6 hours.");
    console.log("2. Fan on for 15mins every 60mins.");
    console.log("3. Heater on at 20 DegC and off at 24 DegC.");

//Calculate time to turn on and off light.

    const lightOn = new Date(startDate.getTime() + 60 * 60 * 1000);
    const lightOff = new Date(startDate.getTime() + 18 * 60 * 60 * 1000);

 //Display times to turn on and off.

    console.log(`Lights will turn on ${lightOn}`);
    console.log(`Lights will turn off ${lightOff}`);

 //Calculate time to turn on and off fan.   

    const fanOn = new Date(startDate.getTime() + 10 * 60 * 1000);

    console.log(`The fan will turn on ${fanOn} and run for 15 minutes.`);

 //Calculate heater on and off times, manage temperature.
 
    if (lowTemp > temperature) {
        turnOnHeat();
        console.log(`the current temperature reading is ${temperature}`);
        if(temperature !== hiTemp) {
        for (let i = 0; i <= hiTemp; i++) {
            temperature = i;
            console.log(`Current Temperature: ${temperature}`);
        }
    } else {
        console.log("Temperature is in correct range");
    }

    } else {
        turnOffHeat();
    }

    console.log(`The updated temperature is ${temperature}`);

};


//Starts and runs greenHouse function.

runGreenHouse();