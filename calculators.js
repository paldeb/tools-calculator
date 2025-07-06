// Calculator implementations
function createBasicCalculator() {
    const calculator = document.createElement('div');
    calculator.className = 'calculator';
    
    let currentInput = '0';
    let previousInput = '';
    let operation = null;
    let resetInput = false;
    
    // Create display
    const display = document.createElement('div');
    display.className = 'display';
    display.textContent = currentInput;
    calculator.appendChild(display);
    
    // Create buttons
    const buttons = document.createElement('div');
    buttons.className = 'buttons';
    
    const buttonLayout = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+'],
        ['C']
    ];
    
    buttonLayout.forEach(row => {
        row.forEach(btnText => {
            const button = document.createElement('button');
            button.textContent = btnText;
            
            if (btnText === 'C') {
                button.className = 'clear';
                button.addEventListener('click', clearAll);
            } else if (btnText === '=') {
                button.className = 'equals';
                button.addEventListener('click', calculate);
            } else if (['+', '-', '*', '/'].includes(btnText)) {
                button.className = 'operator';
                button.addEventListener('click', () => setOperation(btnText));
            } else {
                button.addEventListener('click', () => appendNumber(btnText));
            }
            
            buttons.appendChild(button);
        });
    });
    
    calculator.appendChild(buttons);
    
    function appendNumber(number) {
        if (currentInput === '0' || resetInput) {
            currentInput = number;
            resetInput = false;
        } else {
            currentInput += number;
        }
        updateDisplay();
    }
    
    function setOperation(op) {
        if (operation !== null) calculate();
        previousInput = currentInput;
        operation = op;
        resetInput = true;
    }
    
    function calculate() {
        let computation;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        
        currentInput = computation.toString();
        operation = null;
        resetInput = true;
        updateDisplay();
    }
    
    function clearAll() {
        currentInput = '0';
        previousInput = '';
        operation = null;
        updateDisplay();
    }
    
    function updateDisplay() {
        display.textContent = currentInput;
    }
    
    return calculator;
}

function createScientificCalculator() {
    const calculator = document.createElement('div');
    calculator.className = 'calculator';
    
    let currentInput = '0';
    let previousInput = '';
    let operation = null;
    let resetInput = false;
    
    // Create display
    const display = document.createElement('div');
    display.className = 'display';
    display.textContent = currentInput;
    calculator.appendChild(display);
    
    // Create buttons
    const buttons = document.createElement('div');
    buttons.className = 'buttons';
    
    const buttonLayout = [
        ['sin', 'cos', 'tan', '√', '^'],
        ['7', '8', '9', '/', 'π'],
        ['4', '5', '6', '*', '(', ')'],
        ['1', '2', '3', '-', 'log', 'ln'],
        ['0', '.', '=', '+', 'C']
    ];
    
    buttonLayout.forEach(row => {
        row.forEach(btnText => {
            const button = document.createElement('button');
            button.textContent = btnText;
            
            if (btnText === 'C') {
                button.className = 'clear';
                button.addEventListener('click', clearAll);
            } else if (btnText === '=') {
                button.className = 'equals';
                button.addEventListener('click', calculate);
            } else if (['+', '-', '*', '/', '^'].includes(btnText)) {
                button.className = 'operator';
                button.addEventListener('click', () => setOperation(btnText));
            } else if (['sin', 'cos', 'tan', '√', 'log', 'ln'].includes(btnText)) {
                button.className = 'operator';
                button.addEventListener('click', () => applyFunction(btnText));
            } else if (btnText === 'π') {
                button.addEventListener('click', () => appendConstant('π', Math.PI));
            } else if (['(', ')'].includes(btnText)) {
                button.addEventListener('click', () => appendParenthesis(btnText));
            } else {
                button.addEventListener('click', () => appendNumber(btnText));
            }
            
            buttons.appendChild(button);
        });
    });
    
    calculator.appendChild(buttons);
    
    function appendNumber(number) {
        if (currentInput === '0' || resetInput) {
            currentInput = number;
            resetInput = false;
        } else {
            currentInput += number;
        }
        updateDisplay();
    }
    
    function appendConstant(symbol, value) {
        if (currentInput === '0' || resetInput) {
            currentInput = value.toString();
            resetInput = false;
        } else {
            currentInput += value.toString();
        }
        updateDisplay();
    }
    
    function appendParenthesis(paren) {
        if (currentInput === '0' || resetInput) {
            currentInput = paren;
            resetInput = false;
        } else {
            currentInput += paren;
        }
        updateDisplay();
    }
    
    function setOperation(op) {
        if (operation !== null) calculate();
        previousInput = currentInput;
        operation = op;
        resetInput = true;
    }
    
    function applyFunction(func) {
        const value = parseFloat(currentInput);
        let result;
        
        switch(func) {
            case 'sin':
                result = Math.sin(value);
                break;
            case 'cos':
                result = Math.cos(value);
                break;
            case 'tan':
                result = Math.tan(value);
                break;
            case '√':
                result = Math.sqrt(value);
                break;
            case 'log':
                result = Math.log10(value);
                break;
            case 'ln':
                result = Math.log(value);
                break;
        }
        
        currentInput = result.toString();
        updateDisplay();
    }
    
    function calculate() {
        let computation;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            case '^':
                computation = Math.pow(prev, current);
                break;
            default:
                return;
        }
        
        currentInput = computation.toString();
        operation = null;
        resetInput = true;
        updateDisplay();
    }
    
    function clearAll() {
        currentInput = '0';
        previousInput = '';
        operation = null;
        updateDisplay();
    }
    
    function updateDisplay() {
        display.textContent = currentInput;
    }
    
    return calculator;
}

// Placeholder functions for other calculator types
function createAdvancedScientificCalculator() {
    const container = document.createElement('div');
    container.innerHTML = `
        <h3>Advanced Scientific Calculator</h3>
        <p>This calculator would include matrix operations, complex numbers, calculus functions, and more advanced features.</p>
        <div class="calculator-placeholder">
            <p>Advanced scientific calculator implementation would go here.</p>
            <p>For a complete implementation, we would use a library like math.js or implement the advanced functions.</p>
        </div>
    `;
    return container;
}

function createGraphingCalculator() {
    const container = document.createElement('div');
    container.innerHTML = `
        <h3>Graphing Calculator</h3>
        <p>This calculator would plot functions and visualize mathematical relationships.</p>
        <div class="calculator-placeholder">
            <canvas id="graphing-canvas" width="600" height="400" style="border:1px solid #ddd;"></canvas>
            <p>For a complete implementation, we would use a library like Chart.js or implement the graphing functionality.</p>
        </div>
    `;
    return container;
}

function createStatisticalCalculator() {
    const container = document.createElement('div');
    container.innerHTML = `
        <h3>Statistical Calculator</h3>
        <p>This calculator would perform descriptive and inferential statistics.</p>
        <div class="calculator-placeholder">
            <p>Statistical calculator implementation would go here with data input, analysis, and visualization.</p>
        </div>
    `;
    return container;
}

function createFinancialCalculator() {
    const container = document.createElement('div');
    container.innerHTML = `
        <h3>Financial Calculator</h3>
        <p>This calculator would handle time value of money, loans, investments, and other financial calculations.</p>
        <div class="calculator-placeholder">
            <p>Financial calculator with TVM, NPV, IRR, amortization schedules would be implemented here.</p>
        </div>
    `;
    return container;
}

function createChemistryCalculator() {
    const container = document.createElement('div');
    container.innerHTML = `
        <h3>Chemistry Calculator</h3>
        <p>This calculator would handle molar mass, stoichiometry, solution preparation, and other chemistry calculations.</p>
        <div class="calculator-placeholder">
            <p>Periodic table integration, chemical equation balancing, and other chemistry tools would be implemented here.</p>
        </div>
    `;
    return container;
}

function createAstronomyCalculator() {
    const container = document.createElement('div');
    container.innerHTML = `
        <h3>Astronomical Calculator</h3>
        <p>This calculator would perform celestial calculations, conversions, and observations.</p>
        <div class="calculator-placeholder">
            <p>Astronomical calculations like distance conversions, orbital mechanics, and observation tools would be implemented here.</p>
        </div>
    `;
    return container;
}
