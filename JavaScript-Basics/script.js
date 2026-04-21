function demonstrateVariables() {
    console.log("=== STEP 2: Variables ===");
    
    var globalVar = "I'm a var variable (function-scoped)";
    console.log("var variable:", globalVar);
    
    let name = "Sam";
    console.log("let variable:", name);
    
    const age = 25;
    console.log("const variable:", age);
    
    document.getElementById('variablesOutput').innerHTML = `
        <div class="output">
            <strong>var:</strong> ${globalVar}<br>
            <strong>let:</strong> ${name}<br>
            <strong>const:</strong> ${age}
        </div>
    `;
}

function demonstrateDataTypes() {
    console.log("\n=== STEP 3: Data Types ===");
    
    let price = 29.99;
    console.log("Number:", price, typeof price);
    
    let message = "Hello, JavaScript!";
    console.log("String:", message, typeof message);
    
    let isActive = true;
    console.log("Boolean:", isActive, typeof isActive);
    
    let fruits = ["apple", "banana", "orange"];
    console.log("Array:", fruits, typeof fruits);
    console.log("Array length:", fruits.length);
    
    let person = {
        name: "Michael",
        age: 30,
        isStudent: false
    };
    console.log("Object:", person, typeof person);
    
    document.getElementById('dataTypesOutput').innerHTML = `
        <div class="output">
            <strong>Number:</strong> ${price} (${typeof price})<br>
            <strong>String:</strong> "${message}" (${typeof message})<br>
            <strong>Boolean:</strong> ${isActive} (${typeof isActive})<br>
            <strong>Array:</strong> [${fruits.join(', ')}] (${typeof fruits})<br>
            <strong>Object:</strong> {name: "${person.name}", age: ${person.age}} (${typeof person})
        </div>
    `;
}

function checkDataTypes() {
    console.log("\n=== Subtask 3.2: typeof Operator ===");
    console.log("typeof 'test':", typeof "test");
    console.log("typeof 123:", typeof 123);
    console.log("typeof true:", typeof true);
    console.log("typeof []:", typeof []);
    console.log("typeof {}:", typeof {});
    console.log("typeof null:", typeof null);
    console.log("typeof undefined:", typeof undefined);
}

function demonstrateArithmeticOperators() {
    console.log("\n=== STEP 4.1: Arithmetic Operators ===");
    
    let a = 10;
    let b = 3;
    
    console.log(`a = ${a}, b = ${b}`);
    console.log("Addition (+):", a + b);          
    console.log("Subtraction (-):", a - b);        
    console.log("Multiplication (*):", a * b);     
    console.log("Division (/):", a / b);          
    console.log("Modulus (%):", a % b);            
    console.log("Exponentiation (**):", a ** 2);  
    
    document.getElementById('operatorsOutput').innerHTML = `
        <div class="output">
            <strong>10 + 3 = ${a + b}</strong><br>
            <strong>10 - 3 = ${a - b}</strong><br>
            <strong>10 × 3 = ${a * b}</strong><br>
            <strong>10 ÷ 3 = ${a / b}</strong><br>
            <strong>10 % 3 = ${a % b}</strong><br>
            <strong>10² = ${a ** 2}</strong>
        </div>
    `;
}

function demonstrateComparisonOperators() {
    console.log("\n=== STEP 4.2: Comparison & Logical Operators ===");
    
    let x = 15;
    let y = 10;
    let isAdult = x >= 18;
    let hasLicense = true;
    
    console.log("x > y:", x > y);     
    console.log("x < y:", x < y);     
    console.log("x == y:", x == y);   
    console.log("x === y:", x === y); 
    console.log("x >= 15:", x >= 15); 
    
    console.log("isAdult && hasLicense:", isAdult && hasLicense);
    console.log("isAdult || hasLicense:", isAdult || hasLicense);
    console.log("!isAdult:", !isAdult);
    
    document.getElementById('operatorsOutput').innerHTML += `
        <div class="output">
            <strong>15 > 10:</strong> ${x > y}<br>
            <strong>15 == 10:</strong> ${x == y}<br>
            <strong>15 === 10:</strong> ${x === y}<br>
            <strong>isAdult && hasLicense:</strong> ${isAdult && hasLicense}<br>
            <strong>!isAdult:</strong> ${!isAdult}
        </div>
    `;
}

function runAllDemos() {
    console.clear();
    console.log("🚀 Starting JavaScript Fundamentals Demo...");
    
    demonstrateVariables();
    demonstrateDataTypes();
    checkDataTypes();
    demonstrateArithmeticOperators();
    demonstrateComparisonOperators();
    
    console.log("\n🎉 ALL TESTS PASSED SUCCESSFULLY!");
    console.log("✅ Check webpage outputs and browser console (F12)");
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded. Click 'Run All Demos' or check console.");
});