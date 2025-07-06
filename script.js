// Main application script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize calculator previews
    initializePreviews();
    
    // Set up event listeners for navigation
    setupNavigation();
    
    // Check URL for hash and load appropriate calculator
    checkInitialHash();
});

function initializePreviews() {
    // Basic calculator preview
    document.getElementById('basic-preview').innerHTML = '2 + 3 = 5';
    
    // Scientific calculator preview
    document.getElementById('scientific-preview').innerHTML = 'sin(π/2) = 1';
    
    // Advanced scientific calculator preview
    document.getElementById('advanced-scientific-preview').innerHTML = 'e^(iπ) + 1 = 0';
    
    // Graphing calculator preview
    document.getElementById('graphing-preview').innerHTML = 'f(x) = x²';
    
    // Statistical calculator preview
    document.getElementById('statistical-preview').innerHTML = 'μ = 5.2, σ = 1.3';
    
    // Financial calculator preview
    document.getElementById('financial-preview').innerHTML = 'PV = $1,000, r = 5%';
    
    // Chemistry calculator preview
    document.getElementById('chemistry-preview').innerHTML = 'H₂O = 18.02 g/mol';
    
    // Astronomy calculator preview
    document.getElementById('astronomy-preview').innerHTML = '1 ly ≈ 9.46×10¹⁵m';
}

function setupNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#calculator-display') return;
            
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Update URL without triggering page reload
            history.pushState(null, null, targetId);
        });
    });
}

function checkInitialHash() {
    // Check if URL has a hash that matches a calculator ID
    const hash = window.location.hash;
    if (hash && hash.startsWith('#calculator-')) {
        const calculatorType = hash.replace('#calculator-', '');
        loadCalculator(calculatorType);
    }
}

function loadCalculator(type) {
    // Set the calculator title
    const titleMap = {
        'basic': 'Basic Calculator',
        'scientific': 'Scientific Calculator',
        'advanced-scientific': 'Advanced Scientific Calculator',
        'graphing': 'Graphing Calculator',
        'statistical': 'Statistical Calculator',
        'financial': 'Financial Calculator',
        'chemistry': 'Chemistry Calculator',
        'astronomy': 'Astronomical Calculator'
    };
    
    document.getElementById('calculator-title').textContent = titleMap[type] || 'Calculator';
    
    // Load the appropriate calculator
    const calculatorContainer = document.getElementById('calculator-container');
    calculatorContainer.innerHTML = '';
    
    switch(type) {
        case 'basic':
            calculatorContainer.appendChild(createBasicCalculator());
            break;
        case 'scientific':
            calculatorContainer.appendChild(createScientificCalculator());
            break;
        case 'advanced-scientific':
            calculatorContainer.appendChild(createAdvancedScientificCalculator());
            break;
        case 'graphing':
            calculatorContainer.appendChild(createGraphingCalculator());
            break;
        case 'statistical':
            calculatorContainer.appendChild(createStatisticalCalculator());
            break;
        case 'financial':
            calculatorContainer.appendChild(createFinancialCalculator());
            break;
        case 'chemistry':
            calculatorContainer.appendChild(createChemistryCalculator());
            break;
        case 'astronomy':
            calculatorContainer.appendChild(createAstronomyCalculator());
            break;
        default:
            calculatorContainer.innerHTML = '<p>Calculator not found.</p>';
    }
    
    // Show the calculator display
    document.getElementById('calculator-display').classList.remove('hidden');
    
    // Update URL
    history.pushState(null, null, `#calculator-${type}`);
    
    // Prevent body scrolling when calculator is open
    document.body.style.overflow = 'hidden';
}

function closeCalculator() {
    document.getElementById('calculator-display').classList.add('hidden');
    document.body.style.overflow = 'auto';
    
    // Update URL to remove calculator hash
    if (window.location.hash.startsWith('#calculator-')) {
        history.pushState(null, null, ' ');
    }
}

// Handle browser back button
window.addEventListener('popstate', function() {
    if (!window.location.hash.startsWith('#calculator-')) {
        closeCalculator();
    }
});
