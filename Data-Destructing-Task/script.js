// Global output element
const output = document.getElementById('output');

// Helper function to display results
function displayResult(title, code, result) {
    const stepDiv = document.createElement('div');
    stepDiv.className = 'step';
    stepDiv.innerHTML = `
        <h3>${title}</h3>
        <pre><code>${code}</code></pre>
        <div class="result">
            <strong>Result:</strong><br>
            <pre>${result}</pre>
        </div>
        <button onclick="runDemo('${title.replace(/'/g, "\\'")}')">Run Demo</button>
    `;
    output.appendChild(stepDiv);
}

// Step 2: Practice Array Destructuring
function step2ArrayDestructuring() {
    // Basic array destructuring
    const numbers = [1, 2, 3, 4, 5];
    const [first, second, , fourth, fifth = 0] = numbers;
    
    // Skipping elements with commas
    const colors = ['red', 'green', 'blue', 'yellow'];
    const [primary, , tertiary] = colors;
    
    return {
        numbers: { first, second, fourth, fifth },
        colors: { primary, tertiary }
    };
}

// Step 3: Practice Object Destructuring
function step3ObjectDestructuring() {
    const person = {
        name: 'Alice',
        age: 30,
        city: 'New York',
        hobbies: ['reading', 'coding']
    };
    
    // Basic object destructuring
    const { name, age, city } = person;
    
    // With default values
    const { salary = 50000, department = 'Engineering' } = person;
    
    return {
        basic: { name, age, city },
        defaults: { salary, department }
    };
}

// Step 4: Advanced Destructuring
function step4AdvancedDestructuring() {
    // Nested destructuring
    const company = {
        name: 'TechCorp',
        location: {
            city: 'San Francisco',
            country: 'USA'
        },
        employees: [
            { name: 'Bob', role: 'Developer' },
            { name: 'Carol', role: 'Designer' }
        ]
    };
    
    const {
        name: companyName,
        location: { city: companyCity, country },
        employees: [firstEmployee, secondEmployee]
    } = company;
    
    // Rest operator
    const { name: restName, ...restProps } = company;
    
    return {
        nested: { companyName, companyCity, country, firstEmployee, secondEmployee },
        rest: { restName, restProps }
    };
}

// Step 5: Destructuring in Functions
function step5FunctionDestructuring() {
    // Function with array destructuring in parameters
    function printCoordinates([lat, lng, ...rest]) {
        return `Lat: ${lat}, Lng: ${lng}, Rest: ${rest.join(', ')}`;
    }
    
    // Function with object destructuring in parameters
    function greetUser({ name, age = 25, greeting = 'Hello' }) {
        return `${greeting}, ${name}! You are ${age} years old.`;
    }
    
    // Function with nested destructuring
    function getEmployeeInfo({ name, department: { name: deptName } }) {
        return `${name} works in ${deptName}`;
    }
    
    const coordsResult = printCoordinates([40.7128, -74.0060, 'extra']);
    const userResult = greetUser({ name: 'David', greeting: 'Hi' });
    const empResult = getEmployeeInfo({
        name: 'Eve',
        department: { name: 'Marketing' }
    });
    
    return { coordsResult, userResult, empResult };
}

// Initialize the page
function init() {
    output.innerHTML = '';
    
    // Step 2
    const step2Result = step2ArrayDestructuring();
    displayResult(
        'Step 2: Array Destructuring',
        `const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth, fifth = 0] = numbers;`,
        JSON.stringify(step2Result, null, 2)
    );
    
    // Step 3
    const step3Result = step3ObjectDestructuring();
    displayResult(
        'Step 3: Object Destructuring',
        `const { name, age, city, salary = 50000 } = person;`,
        JSON.stringify(step3Result, null, 2)
    );
    
    // Step 4
    const step4Result = step4AdvancedDestructuring();
    displayResult(
        'Step 4: Advanced Destructuring',
        `const {
  name: companyName,
  location: { city: companyCity },
  employees: [firstEmployee]
} = company;`,
        JSON.stringify(step4Result, null, 2)
    );
    
    // Step 5
    const step5Result = step5FunctionDestructuring();
    displayResult(
        'Step 5: Destructuring in Functions',
        `function greetUser({ name, age = 25 }) {
  return \`\${name} is \${age} years old\`;
}`,
        JSON.stringify(step5Result, null, 2)
    );
}

// Run demo function (for buttons)
function runDemo(title) {
    output.innerHTML = `<div style="text-align:center; padding:20px;">
        <h2>Running: ${title}</h2>
        <p>Check the console (F12) for detailed output!</p>
    </div>`;
    
    console.clear();
    console.log(`=== ${title} ===`);
    
    switch(title) {
        case 'Step 2: Array Destructuring':
            console.log(step2ArrayDestructuring());
            break;
        case 'Step 3: Object Destructuring':
            console.log(step3ObjectDestructuring());
            break;
        case 'Step 4: Advanced Destructuring':
            console.log(step4AdvancedDestructuring());
            break;
        case 'Step 5: Destructuring in Functions':
            console.log(step5FunctionDestructuring());
            break;
    }
    
    setTimeout(init, 2000);
}

// Start the application
init();