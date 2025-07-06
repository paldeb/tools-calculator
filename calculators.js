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

/*
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

*/

// Updating to include strong financial calclutor with new code.

function createFinancialCalculator() {
    const container = document.createElement('div');
    container.className = 'financial-calculator';
    
    container.innerHTML = `
        <h3>Financial Calculators</h3>
        <div class="financial-tabs">
            <button class="tab-btn active" data-tab="loan">Loan Calculators</button>
            <button class="tab-btn" data-tab="investment">Investment Calculators</button>
            <button class="tab-btn" data-tab="savings">Savings Calculators</button>
            <button class="tab-btn" data-tab="retirement">Retirement Calculators</button>
            <button class="tab-btn" data-tab="budget">Budget Calculators</button>
            <button class="tab-btn" data-tab="tax">Tax Calculators</button>
            <button class="tab-btn" data-tab="business">Business Finance</button>
            <button class="tab-btn" data-tab="real-estate">Real Estate</button>
            <button class="tab-btn" data-tab="credit">Credit & Debt</button>
            <button class="tab-btn" data-tab="currency">Currency & Inflation</button>
            <button class="tab-btn" data-tab="education">Education Planning</button>
            <button class="tab-btn" data-tab="insurance">Insurance</button>
        </div>
        
        <div class="financial-content">
            <!-- Loan Calculators -->
            <div id="loan-tab" class="tab-content active">
                <div class="calculator-grid">
                    ${createFinancialCalculatorCard('EMI Calculator', 'Calculate monthly loan payments', 'emi')}
                    ${createFinancialCalculatorCard('Auto Loan Calculator', 'Calculate car loan payments', 'auto-loan')}
                    ${createFinancialCalculatorCard('Mortgage Calculator', 'Calculate home loan payments', 'mortgage')}
                    ${createFinancialCalculatorCard('Personal Loan Calculator', 'Calculate personal loan terms', 'personal-loan')}
                    ${createFinancialCalculatorCard('Loan Affordability', 'Determine how much you can borrow', 'loan-affordability')}
                    ${createFinancialCalculatorCard('Loan Comparison', 'Compare different loan options', 'loan-comparison')}
                    ${createFinancialCalculatorCard('Prepayment Calculator', 'See impact of extra payments', 'prepayment')}
                    ${createFinancialCalculatorCard('Refinance Calculator', 'Evaluate refinancing options', 'refinance')}
                </div>
            </div>
            
            <!-- Investment Calculators -->
            <div id="investment-tab" class="tab-content">
                <div class="calculator-grid">
                    ${createFinancialCalculatorCard('SIP Calculator', 'Systematic Investment Plan returns', 'sip')}
                    ${createFinancialCalculatorCard('Lumpsum Calculator', 'Calculate lump sum investment growth', 'lumpsum')}
                    ${createFinancialCalculatorCard('Stock Return Calculator', 'CAGR and absolute returns', 'stock-return')}
                    ${createFinancialCalculatorCard('Mutual Fund Calculator', 'Project mutual fund growth', 'mutual-fund')}
                    ${createFinancialCalculatorCard('Bond Yield Calculator', 'Calculate bond yields and returns', 'bond-yield')}
                    ${createFinancialCalculatorCard('Portfolio Growth', 'Project portfolio performance', 'portfolio-growth')}
                    ${createFinancialCalculatorCard('Dividend Calculator', 'Estimate dividend income', 'dividend')}
                    ${createFinancialCalculatorCard('Capital Gains Tax', 'Calculate taxes on investments', 'capital-gains-tax')}
                    ${createFinancialCalculatorCard('Dollar-Cost Averaging', 'Analyze DCA strategy', 'dca')}
                </div>
            </div>
            
            <!-- Savings Calculators -->
            <div id="savings-tab" class="tab-content">
                <div class="calculator-grid">
                    ${createFinancialCalculatorCard('Future Value', 'Calculate future value of savings', 'future-value')}
                    ${createFinancialCalculatorCard('Recurring Deposit', 'Calculate RD returns', 'recurring-deposit')}
                    ${createFinancialCalculatorCard('Compound Interest', 'Calculate compound interest growth', 'compound-interest')}
                    ${createFinancialCalculatorCard('Simple Interest', 'Calculate simple interest earnings', 'simple-interest')}
                    ${createFinancialCalculatorCard('Emergency Fund', 'Plan your emergency savings', 'emergency-fund')}
                    ${createFinancialCalculatorCard('Savings Goal', 'Track progress toward savings goals', 'savings-goal')}
                </div>
            </div>
            
            <!-- Retirement Calculators -->
            <div id="retirement-tab" class="tab-content">
                <div class="calculator-grid">
                    ${createFinancialCalculatorCard('Retirement Corpus', 'Calculate needed retirement savings', 'retirement-corpus')}
                    ${createFinancialCalculatorCard('401(k) Calculator', 'Project 401(k) growth', '401k')}
                    ${createFinancialCalculatorCard('IRA Calculator', 'Traditional/Roth IRA projections', 'ira')}
                    ${createFinancialCalculatorCard('Pension Calculator', 'Estimate pension income', 'pension')}
                    ${createFinancialCalculatorCard('Annuity Calculator', 'Calculate annuity payments', 'annuity')}
                    ${createFinancialCalculatorCard('Social Security', 'Estimate Social Security benefits', 'social-security')}
                </div>
            </div>
            
            <!-- Other tabs would follow the same pattern -->
            <!-- For brevity, I've shown the first 4 tabs -->
        </div>
        
        <div id="financial-calculator-modal" class="modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h4 id="modal-title">Calculator</h4>
                <div id="modal-calculator-container"></div>
            </div>
        </div>
    `;
    
    // Set up tab functionality
    const tabs = container.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const tabId = tab.getAttribute('data-tab');
            const contents = container.querySelectorAll('.tab-content');
            contents.forEach(content => content.classList.remove('active'));
            container.querySelector(`#${tabId}-tab`).classList.add('active');
        });
    });
    
    // Set up calculator card clicks
    const calculatorCards = container.querySelectorAll('.financial-calculator-card');
    calculatorCards.forEach(card => {
        card.addEventListener('click', () => {
            const calculatorType = card.getAttribute('data-calculator');
            const calculatorName = card.querySelector('h4').textContent;
            showFinancialCalculatorModal(calculatorType, calculatorName, container);
        });
    });
    
    return container;
}

function createFinancialCalculatorCard(title, description, type) {
    return `
        <div class="financial-calculator-card" data-calculator="${type}">
            <h4>${title}</h4>
            <p>${description}</p>
            <div class="calculator-icon">
                <i class="fas fa-calculator"></i>
            </div>
        </div>
    `;
}

function showFinancialCalculatorModal(type, title, container) {
    const modal = container.querySelector('#financial-calculator-modal');
    const modalTitle = container.querySelector('#modal-title');
    const calculatorContainer = container.querySelector('#modal-calculator-container');
    
    modalTitle.textContent = title;
    calculatorContainer.innerHTML = '';
    
    // Load the appropriate calculator based on type
    switch(type) {
        case 'emi':
            calculatorContainer.appendChild(createEMICalculator());
            break;
        case 'auto-loan':
            calculatorContainer.appendChild(createAutoLoanCalculator());
            break;
        case 'mortgage':
            calculatorContainer.appendChild(createMortgageCalculator());
            break;
        case 'personal-loan':
            calculatorContainer.appendChild(createPersonalLoanCalculator());
            break;
        case 'sip':
            calculatorContainer.appendChild(createSIPCalculator());
            break;
        case 'compound-interest':
            calculatorContainer.appendChild(createCompoundInterestCalculator());
            break;
        // Add cases for all other calculator types
        default:
            calculatorContainer.innerHTML = `<p>${title} calculator implementation coming soon.</p>`;
    }
    
    modal.style.display = 'block';
    
    // Close modal when X is clicked
    container.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Individual Calculator Implementations

function createEMICalculator() {
    const calculator = document.createElement('div');
    calculator.className = 'financial-calculator-form';
    
    calculator.innerHTML = `
        <div class="input-group">
            <label for="loan-amount">Loan Amount ($)</label>
            <input type="number" id="loan-amount" placeholder="e.g. 25000">
        </div>
        <div class="input-group">
            <label for="interest-rate">Interest Rate (% p.a.)</label>
            <input type="number" id="interest-rate" placeholder="e.g. 7.5" step="0.01">
        </div>
        <div class="input-group">
            <label for="loan-tenure">Loan Tenure (years)</label>
            <input type="number" id="loan-tenure" placeholder="e.g. 5">
        </div>
        <button id="calculate-emi" class="calculate-btn">Calculate EMI</button>
        <div class="results">
            <div class="result-item">
                <span>Monthly Payment (EMI):</span>
                <span id="emi-result">-</span>
            </div>
            <div class="result-item">
                <span>Total Interest:</span>
                <span id="total-interest">-</span>
            </div>
            <div class="result-item">
                <span>Total Payment:</span>
                <span id="total-payment">-</span>
            </div>
        </div>
        <div class="amortization-chart">
            <h5>Amortization Schedule</h5>
            <div id="amortization-table"></div>
        </div>
    `;
    
    calculator.querySelector('#calculate-emi').addEventListener('click', calculateEMI);
    
    function calculateEMI() {
        const amount = parseFloat(calculator.querySelector('#loan-amount').value);
        const rate = parseFloat(calculator.querySelector('#interest-rate').value) / 100 / 12;
        const tenure = parseFloat(calculator.querySelector('#loan-tenure').value) * 12;
        
        if (isNaN(amount) || isNaN(rate) || isNaN(tenure)) {
            alert('Please enter valid values');
            return;
        }
        
        const emi = amount * rate * Math.pow(1 + rate, tenure) / (Math.pow(1 + rate, tenure) - 1);
        const totalPayment = emi * tenure;
        const totalInterest = totalPayment - amount;
        
        calculator.querySelector('#emi-result').textContent = `$${emi.toFixed(2)}`;
        calculator.querySelector('#total-interest').textContent = `$${totalInterest.toFixed(2)}`;
        calculator.querySelector('#total-payment').textContent = `$${totalPayment.toFixed(2)}`;
        
        generateAmortizationTable(amount, rate, tenure, emi);
    }
    
    function generateAmortizationTable(amount, monthlyRate, months, emi) {
        let balance = amount;
        let tableHTML = `
            <table>
                <tr>
                    <th>Month</th>
                    <th>Payment</th>
                    <th>Principal</th>
                    <th>Interest</th>
                    <th>Balance</th>
                </tr>
        `;
        
        for (let i = 1; i <= months; i++) {
            const interest = balance * monthlyRate;
            const principal = emi - interest;
            balance -= principal;
            
            if (balance < 0) balance = 0;
            
            tableHTML += `
                <tr>
                    <td>${i}</td>
                    <td>$${emi.toFixed(2)}</td>
                    <td>$${principal.toFixed(2)}</td>
                    <td>$${interest.toFixed(2)}</td>
                    <td>$${balance.toFixed(2)}</td>
                </tr>
            `;
            
            if (balance <= 0) break;
        }
        
        tableHTML += `</table>`;
        calculator.querySelector('#amortization-table').innerHTML = tableHTML;
    }
    
    return calculator;
}

function createCompoundInterestCalculator() {
    const calculator = document.createElement('div');
    calculator.className = 'financial-calculator-form';
    
    calculator.innerHTML = `
        <div class="input-group">
            <label for="principal">Principal Amount ($)</label>
            <input type="number" id="principal" placeholder="e.g. 10000">
        </div>
        <div class="input-group">
            <label for="interest-rate">Annual Interest Rate (%)</label>
            <input type="number" id="interest-rate" placeholder="e.g. 5" step="0.01">
        </div>
        <div class="input-group">
            <label for="years">Time Period (years)</label>
            <input type="number" id="years" placeholder="e.g. 10">
        </div>
        <div class="input-group">
            <label for="compounding">Compounding Frequency</label>
            <select id="compounding">
                <option value="1">Annually</option>
                <option value="2">Semi-Annually</option>
                <option value="4">Quarterly</option>
                <option value="12" selected>Monthly</option>
                <option value="365">Daily</option>
            </select>
        </div>
        <div class="input-group">
            <label for="contributions">Regular Contributions ($/period)</label>
            <input type="number" id="contributions" placeholder="e.g. 100" value="0">
        </div>
        <button id="calculate-compound" class="calculate-btn">Calculate</button>
        <div class="results">
            <div class="result-item">
                <span>Future Value:</span>
                <span id="future-value">-</span>
            </div>
            <div class="result-item">
                <span>Total Contributions:</span>
                <span id="total-contributions">-</span>
            </div>
            <div class="result-item">
                <span>Interest Earned:</span>
                <span id="interest-earned">-</span>
            </div>
        </div>
        <canvas id="compound-chart" width="400" height="300"></canvas>
    `;
    
    calculator.querySelector('#calculate-compound').addEventListener('click', calculateCompoundInterest);
    
    function calculateCompoundInterest() {
        const principal = parseFloat(calculator.querySelector('#principal').value);
        const rate = parseFloat(calculator.querySelector('#interest-rate').value) / 100;
        const years = parseFloat(calculator.querySelector('#years').value);
        const compounding = parseInt(calculator.querySelector('#compounding').value);
        const contributions = parseFloat(calculator.querySelector('#contributions').value) || 0;
        
        if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
            alert('Please enter valid values');
            return;
        }
        
        const periods = years * compounding;
        const periodicRate = rate / compounding;
        
        // Future value with regular contributions
        let futureValue = principal * Math.pow(1 + periodicRate, periods);
        if (contributions > 0) {
            futureValue += contributions * (Math.pow(1 + periodicRate, periods) - 1) / periodicRate;
        }
        
        const totalContributions = principal + (contributions * periods);
        const interestEarned = futureValue - totalContributions;
        
        calculator.querySelector('#future-value').textContent = `$${futureValue.toFixed(2)}`;
        calculator.querySelector('#total-contributions').textContent = `$${totalContributions.toFixed(2)}`;
        calculator.querySelector('#interest-earned').textContent = `$${interestEarned.toFixed(2)}`;
        
        generateCompoundChart(principal, rate, years, compounding, contributions);
    }
    
    function generateCompoundChart(principal, rate, years, compounding, contributions) {
        const ctx = calculator.querySelector('#compound-chart').getContext('2d');
        
        // Generate data points for each year
        const labels = [];
        const principalData = [];
        const interestData = [];
        
        for (let year = 0; year <= years; year++) {
            labels.push(`Year ${year}`);
            const periods = year * compounding;
            const periodicRate = rate / compounding;
            
            let fv = principal * Math.pow(1 + periodicRate, periods);
            if (contributions > 0) {
                fv += contributions * (Math.pow(1 + periodicRate, periods) - 1) / periodicRate;
            }
            
            principalData.push(principal + (contributions * periods));
            interestData.push(fv - principalData[year]);
        }
        
        // For production, you would use Chart.js here
        // This is a simplified version
        ctx.font = '14px Arial';
        ctx.fillText('Chart would display growth over time here', 10, 20);
    }
    
    return calculator;
}

// Implementations for other calculators would follow similar patterns
function createAutoLoanCalculator() {
    const calculator = document.createElement('div');
    calculator.className = 'financial-calculator-form';
    
    calculator.innerHTML = `
        <h4>Auto Loan Calculator</h4>
        <p>Implementation would be similar to EMI calculator with vehicle-specific fields</p>
    `;
    
    return calculator;
}

function createSIPCalculator() {
    const calculator = document.createElement('div');
    calculator.className = 'financial-calculator-form';
    
    calculator.innerHTML = `
        <h4>SIP Calculator</h4>
        <p>Implementation would calculate Systematic Investment Plan returns</p>
    `;
    
    return calculator;
}

// Add similar placeholder functions for all other calculator types

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
