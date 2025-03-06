
// Translations
const translations = {
    en: {
        shape: "Select a shape:",
        rectangle: "Rectangle 📏",
        circle: "Circle ⭕",
        triangle: "Triangle 🔺",
        square: "Square 🟥",
        trapezoid: "Trapezoid",
        ellipse: "Ellipse",
        parallelogram: "Parallelogram",
        length: "Length:",
        width: "Width:",
        side: "Side length:",
        radius: "Radius:",
        base: "Base:",
        height: "Height:",
        side1: "Side 1:",
        side2: "Side 2:",
        side3: "Side 3:",
        base1: "Base 1:",
        base2: "Base 2:",
        majorAxis: "Major Axis:",
        minorAxis: "Minor Axis:",
        operation: "Choose calculation:",
        area: "Area",
        perimeter: "Perimeter/Circumference",
        all: "All Calculations",
        calculate: "Calculate",
        areaResult: "The area of the",
        perimeterResult: "The perimeter of the",
        circumferenceResult: "The circumference of the",
        is: "is:",
        calculations: "Calculations:",
        diameter: "Diameter",
        diagonal: "Diagonal",
        semiPerimeter: "Semi-Perimeter",
        inRadius: "In-Radius",
        circumRadius: "Circum-Radius",
        median: "Median",
        semiMajorAxis: "Semi-Major Axis",
        semiMinorAxis: "Semi-Minor Axis",
        eccentricity: "Eccentricity",
        enterLength: "Enter length",
        enterWidth: "Enter width",
        enterSide: "Enter side length",
        enterRadius: "Enter radius",
        enterBase: "Enter base length",
        enterHeight: "Enter height",
        enterSide1: "Enter side 1 (for perimeter)",
        enterSide2: "Enter side 2 (for perimeter)",
        enterSide3: "Enter side 3 (for perimeter)",
        enterBase1: "Enter first base length",
        enterBase2: "Enter second base length",
        enterMajorAxis: "Enter major axis length",
        enterMinorAxis: "Enter minor axis length",
        validationError: "Please enter a valid positive number for"
    },
    ar: {
        shape: "اختر شكلاً:",
        rectangle: "مستطيل 📏",
        circle: "دائرة ⭕",
        triangle: "مثلث 🔺",
        square: "مربع 🟥",
        trapezoid: "شبه منحرف",
        ellipse: "بيضاوي",
        parallelogram: "متوازي أضلاع",
        length: "الطول:",
        width: "العرض:",
        side: "طول الضلع:",
        radius: "نصف القطر:",
        base: "القاعدة:",
        height: "الارتفاع:",
        side1: "الضلع الأول:",
        side2: "الضلع الثاني:",
        side3: "الضلع الثالث:",
        base1: "القاعدة الأولى:",
        base2: "القاعدة الثانية:",
        majorAxis: "المحور الرئيسي:",
        minorAxis: "المحور الثانوي:",
        operation: "اختر العملية الحسابية:",
        area: "المساحة",
        perimeter: "المحيط",
        all: "جميع الحسابات",
        calculate: "احسب",
        areaResult: "مساحة",
        perimeterResult: "محيط",
        circumferenceResult: "محيط",
        is: "هي:",
        calculations: "الحسابات:",
        diameter: "القطر",
        diagonal: "القطر",
        semiPerimeter: "نصف المحيط",
        inRadius: "نصف قطر الدائرة الداخلية",
        circumRadius: "نصف قطر الدائرة الخارجية",
        median: "الوسيط",
        semiMajorAxis: "نصف المحور الرئيسي",
        semiMinorAxis: "نصف المحور الثانوي",
        eccentricity: "التمركز",
        enterLength: "أدخل الطول",
        enterWidth: "أدخل العرض",
        enterSide: "أدخل طول الضلع",
        enterRadius: "أدخل نصف القطر",
        enterBase: "أدخل طول القاعدة",
        enterHeight: "أدخل الارتفاع",
        enterSide1: "أدخل الضلع الأول (للمحيط)",
        enterSide2: "أدخل الضلع الثاني (للمحيط)",
        enterSide3: "أدخل الضلع الثالث (للمحيط)",
        enterBase1: "أدخل طول القاعدة الأولى",
        enterBase2: "أدخل طول القاعدة الثانية",
        enterMajorAxis: "أدخل طول المحور الرئيسي",
        enterMinorAxis: "أدخل طول المحور الثانوي",
        validationError: "الرجاء إدخال رقم موجب صحيح لـ"
    }
};

// Initialize the UI
document.addEventListener('DOMContentLoaded', () => {
    // Set the default theme based on user preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    // Set default language or get from localStorage
    const currentLang = localStorage.getItem('lang') || 'en';
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.getElementById('currentLang').textContent = currentLang.toUpperCase();

    // Apply translations for the current language
    applyTranslations(currentLang);

    // Show default shape inputs
    showInputFields();
    
    // Theme toggle button event
    document.getElementById('themeToggle').addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    // Language toggle button event
    document.getElementById('langToggle').addEventListener('click', () => {
        const currentLang = document.documentElement.getAttribute('lang');
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        
        document.documentElement.setAttribute('lang', newLang);
        document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
        document.getElementById('currentLang').textContent = newLang.toUpperCase();
        
        localStorage.setItem('lang', newLang);
        
        // Apply translations for the new language
        applyTranslations(newLang);
    });
});

function applyTranslations(lang) {
    // Update all elements with data-en and data-ar attributes
    document.querySelectorAll('[data-en][data-ar]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    // Update select options
    document.querySelectorAll('select').forEach(select => {
        const id = select.id;
        if (id === 'shape') {
            const options = select.querySelectorAll('option');
            options.forEach(option => {
                const value = option.value;
                option.textContent = translations[lang][value];
            });
        } else if (id === 'operation') {
            const options = select.querySelectorAll('option');
            options.forEach(option => {
                const value = option.value;
                option.textContent = translations[lang][value];
            });
        }
    });

    // Update labels
    document.querySelectorAll('label').forEach(label => {
        const forAttr = label.getAttribute('for');
        
        if (forAttr === 'shape') {
            label.textContent = translations[lang].shape;
        } else if (forAttr === 'operation') {
            label.textContent = translations[lang].operation;
        } else if (forAttr === 'rectLength') {
            label.textContent = translations[lang].length;
        } else if (forAttr === 'rectWidth') {
            label.textContent = translations[lang].width;
        } else if (forAttr === 'squareSide') {
            label.textContent = translations[lang].side;
        } else if (forAttr === 'circleRadius') {
            label.textContent = translations[lang].radius;
        } else if (forAttr === 'triBase') {
            label.textContent = translations[lang].base;
        } else if (forAttr === 'triHeight') {
            label.textContent = translations[lang].height;
        } else if (forAttr === 'triSide1') {
            label.textContent = translations[lang].side1;
        } else if (forAttr === 'triSide2') {
            label.textContent = translations[lang].side2;
        } else if (forAttr === 'triSide3') {
            label.textContent = translations[lang].side3;
        } else if (forAttr === 'trapBase1') {
            label.textContent = translations[lang].base1;
        } else if (forAttr === 'trapBase2') {
            label.textContent = translations[lang].base2;
        } else if (forAttr === 'trapHeight') {
            label.textContent = translations[lang].height;
        } else if (forAttr === 'trapSide1') {
            label.textContent = translations[lang].side1;
        } else if (forAttr === 'trapSide2') {
            label.textContent = translations[lang].side2;
        } else if (forAttr === 'ellipseMajor') {
            label.textContent = translations[lang].majorAxis;
        } else if (forAttr === 'ellipseMinor') {
            label.textContent = translations[lang].minorAxis;
        } else if (forAttr === 'paraBase') {
            label.textContent = translations[lang].base;
        } else if (forAttr === 'paraHeight') {
            label.textContent = translations[lang].height;
        } else if (forAttr === 'paraSide') {
            label.textContent = translations[lang].side;
        }
    });

    // Update placeholders
    document.querySelectorAll('input').forEach(input => {
        const id = input.id;
        
        if (id === 'rectLength') {
            input.placeholder = translations[lang].enterLength;
        } else if (id === 'rectWidth') {
            input.placeholder = translations[lang].enterWidth;
        } else if (id === 'squareSide') {
            input.placeholder = translations[lang].enterSide;
        } else if (id === 'circleRadius') {
            input.placeholder = translations[lang].enterRadius;
        } else if (id === 'triBase') {
            input.placeholder = translations[lang].enterBase;
        } else if (id === 'triHeight') {
            input.placeholder = translations[lang].enterHeight;
        } else if (id === 'triSide1') {
            input.placeholder = translations[lang].enterSide1;
        } else if (id === 'triSide2') {
            input.placeholder = translations[lang].enterSide2;
        } else if (id === 'triSide3') {
            input.placeholder = translations[lang].enterSide3;
        } else if (id === 'trapBase1') {
            input.placeholder = translations[lang].enterBase1;
        } else if (id === 'trapBase2') {
            input.placeholder = translations[lang].enterBase2;
        } else if (id === 'trapHeight') {
            input.placeholder = translations[lang].enterHeight;
        } else if (id === 'trapSide1') {
            input.placeholder = translations[lang].enterSide1;
        } else if (id === 'trapSide2') {
            input.placeholder = translations[lang].enterSide2;
        } else if (id === 'ellipseMajor') {
            input.placeholder = translations[lang].enterMajorAxis;
        } else if (id === 'ellipseMinor') {
            input.placeholder = translations[lang].enterMinorAxis;
        } else if (id === 'paraBase') {
            input.placeholder = translations[lang].enterBase;
        } else if (id === 'paraHeight') {
            input.placeholder = translations[lang].enterHeight;
        } else if (id === 'paraSide') {
            input.placeholder = translations[lang].enterSide;
        }
    });

    // Update calculate button
    document.getElementById('calculateBtn').textContent = translations[lang].calculate;
}

function showInputFields() {
    const shape = document.getElementById('shape').value;
    const sections = [
        'rectangleInputs', 
        'circleInputs', 
        'triangleInputs', 
        'squareInputs', 
        'trapezoidInputs', 
        'ellipseInputs', 
        'parallelogramInputs'
    ];
    
    sections.forEach(section => {
        document.getElementById(section).style.display = 'none';
    });
    
    document.getElementById(`${shape}Inputs`).style.display = 'block';
    
    // Clear the results when changing shape
    document.getElementById('result').textContent = '';
    document.getElementById('result').className = '';
    document.getElementById('additionalResults').innerHTML = '';
}

function getShapeEmoji(shape) {
    const emojis = {
        rectangle: '📏',
        square: '🟥',
        circle: '⭕',
        triangle: '🔺',
        trapezoid: '📐',
        ellipse: '🔵',
        parallelogram: '📏'
    };
    return emojis[shape] || '';
}

function calculateResults() {
    const shape = document.getElementById('shape').value;
    const operation = document.getElementById('operation').value;
    const resultElement = document.getElementById('result');
    const additionalResultsElement = document.getElementById('additionalResults');
    const lang = document.documentElement.getAttribute('lang') || 'en';
    
    // Clear previous results
    resultElement.textContent = '';
    resultElement.className = '';
    additionalResultsElement.innerHTML = '';

    // Define calculations based on shape and operation
    let calculations = {};
    let isValid = true;
    let errorMessage = '';
    const emoji = getShapeEmoji(shape);

    try {
        switch(shape) {
            case 'rectangle':
                calculations = calculateRectangle();
                break;
            case 'square':
                calculations = calculateSquare();
                break;
            case 'circle':
                calculations = calculateCircle();
                break;
            case 'triangle':
                calculations = calculateTriangle();
                break;
            case 'trapezoid':
                calculations = calculateTrapezoid();
                break;
            case 'ellipse':
                calculations = calculateEllipse();
                break;
            case 'parallelogram':
                calculations = calculateParallelogram();
                break;
        }
    } catch (error) {
        isValid = false;
        errorMessage = error.message;
    }

    // Display results
    if (isValid) {
        if (operation === 'area') {
            resultElement.textContent = `${emoji} ${translations[lang].areaResult} ${translations[lang][shape]} ${translations[lang].is} ${formatNumber(calculations.area)}`;
            resultElement.className = 'success';
        } else if (operation === 'perimeter') {
            const perimeterText = shape === 'circle' ? translations[lang].circumferenceResult : translations[lang].perimeterResult;
            resultElement.textContent = `${emoji} ${perimeterText} ${translations[lang][shape]} ${translations[lang].is} ${formatNumber(calculations.perimeter)}`;
            resultElement.className = 'success';
        } else {
            // Display all calculations
            const shapeName = lang === 'en' 
                ? shape.charAt(0).toUpperCase() + shape.slice(1)
                : translations[lang][shape];
                
            resultElement.textContent = `${emoji} ${shapeName} ${translations[lang].calculations}`;
            resultElement.className = 'success';
            
            // Create list of calculations
            for (const [key, value] of Object.entries(calculations)) {
                if (key !== 'additionalProperties') {
                    const resultItem = document.createElement('div');
                    resultItem.textContent = `${translations[lang][key] || key}: ${formatNumber(value)}`;
                    additionalResultsElement.appendChild(resultItem);
                }
            }
            
            // Add additional properties if they exist
            if (calculations.additionalProperties) {
                for (const [key, value] of Object.entries(calculations.additionalProperties)) {
                    const resultItem = document.createElement('div');
                    resultItem.textContent = `${translations[lang][key] || key}: ${formatNumber(value)}`;
                    additionalResultsElement.appendChild(resultItem);
                }
            }
        }
    } else {
        resultElement.textContent = errorMessage;
        resultElement.className = 'error';
    }
}

function validateInput(value, name) {
    const num = parseFloat(value);
    if (isNaN(num) || num <= 0) {
        const lang = document.documentElement.getAttribute('lang') || 'en';
        throw new Error(`${translations[lang].validationError} ${name}.`);
    }
    return num;
}

function calculateRectangle() {
    const length = validateInput(document.getElementById('rectLength').value, 'length');
    const width = validateInput(document.getElementById('rectWidth').value, 'width');
    
    const area = length * width;
    const perimeter = 2 * (length + width);
    const diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));
    
    return {
        area: area,
        perimeter: perimeter,
        diagonal: diagonal
    };
}

function calculateSquare() {
    const side = validateInput(document.getElementById('squareSide').value, 'side length');
    
    const area = side * side;
    const perimeter = 4 * side;
    const diagonal = side * Math.sqrt(2);
    
    return {
        area: area,
        perimeter: perimeter,
        diagonal: diagonal
    };
}

function calculateCircle() {
    const radius = validateInput(document.getElementById('circleRadius').value, 'radius');
    
    const area = Math.PI * radius * radius;
    const perimeter = 2 * Math.PI * radius; // Circumference
    const diameter = 2 * radius;
    
    return {
        area: area,
        perimeter: perimeter,
        diameter: diameter
    };
}

function calculateTriangle() {
    const base = validateInput(document.getElementById('triBase').value, 'base');
    const height = validateInput(document.getElementById('triHeight').value, 'height');
    
    const area = 0.5 * base * height;
    
    // Try to calculate perimeter if sides are provided
    let perimeter = null;
    let semiPerimeter = null;
    let inRadius = null;
    let circumRadius = null;
    
    try {
        const side1 = parseFloat(document.getElementById('triSide1').value);
        const side2 = parseFloat(document.getElementById('triSide2').value);
        const side3 = parseFloat(document.getElementById('triSide3').value);
        
        if (!isNaN(side1) && !isNaN(side2) && !isNaN(side3) && side1 > 0 && side2 > 0 && side3 > 0) {
            // Check if triangle is valid
            if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
                perimeter = side1 + side2 + side3;
                semiPerimeter = perimeter / 2;
                
                // Area using Heron's formula for validation
                const heronArea = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
                
                // Calculate inradius and circumradius
                inRadius = area / semiPerimeter;
                circumRadius = (side1 * side2 * side3) / (4 * heronArea);
            }
        }
    } catch (e) {
        // Ignore error, just don't include perimeter
    }
    
    const result = { area: area };
    
    if (perimeter !== null) {
        result.perimeter = perimeter;
        result.additionalProperties = {};
        
        if (semiPerimeter !== null) result.additionalProperties.semiPerimeter = semiPerimeter;
        if (inRadius !== null) result.additionalProperties.inRadius = inRadius;
        if (circumRadius !== null) result.additionalProperties.circumRadius = circumRadius;
    }
    
    return result;
}

function calculateTrapezoid() {
    const base1 = validateInput(document.getElementById('trapBase1').value, 'first base');
    const base2 = validateInput(document.getElementById('trapBase2').value, 'second base');
    const height = validateInput(document.getElementById('trapHeight').value, 'height');
    
    const area = 0.5 * (base1 + base2) * height;
    
    // Try to calculate perimeter if sides are provided
    let perimeter = null;
    let medianLength = null;
    
    try {
        const side1 = parseFloat(document.getElementById('trapSide1').value);
        const side2 = parseFloat(document.getElementById('trapSide2').value);
        
        if (!isNaN(side1) && !isNaN(side2) && side1 > 0 && side2 > 0) {
            perimeter = base1 + base2 + side1 + side2;
            medianLength = (base1 + base2) / 2;
        }
    } catch (e) {
        // Ignore error, just don't include perimeter
    }
    
    const result = { area: area };
    
    if (perimeter !== null) {
        result.perimeter = perimeter;
        if (medianLength !== null) {
            result.additionalProperties = {
                median: medianLength
            };
        }
    }
    
    return result;
}

function calculateEllipse() {
    const majorAxis = validateInput(document.getElementById('ellipseMajor').value, 'major axis');
    const minorAxis = validateInput(document.getElementById('ellipseMinor').value, 'minor axis');
    
    if (majorAxis < minorAxis) {
        throw new Error('Major axis must be greater than or equal to minor axis.');
    }
    
    const a = majorAxis / 2; // Semi-major axis
    const b = minorAxis / 2; // Semi-minor axis
    
    const area = Math.PI * a * b;
    
    // Approximation of ellipse perimeter (Ramanujan's formula)
    const h = Math.pow((a - b) / (a + b), 2);
    const perimeter = Math.PI * (a + b) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
    
    const eccentricity = Math.sqrt(1 - Math.pow(b/a, 2));
    
    return {
        area: area,
        perimeter: perimeter,
        additionalProperties: {
            semiMajorAxis: a,
            semiMinorAxis: b,
            eccentricity: eccentricity
        }
    };
}

function calculateParallelogram() {
    const base = validateInput(document.getElementById('paraBase').value, 'base');
    const height = validateInput(document.getElementById('paraHeight').value, 'height');
    
    const area = base * height;
    
    // Try to calculate perimeter if side is provided
    let perimeter = null;
    
    try {
        const side = parseFloat(document.getElementById('paraSide').value);
        
        if (!isNaN(side) && side > 0) {
            perimeter = 2 * (base + side);
        }
    } catch (e) {
        // Ignore error, just don't include perimeter
    }
    
    const result = { area: area };
    
    if (perimeter !== null) {
        result.perimeter = perimeter;
    }
    
    return result;
}

function formatNumber(value) {
    // Check if value is a number
    if (typeof value !== 'number' || isNaN(value)) {
        return "-";
    }
    
    // Format number to 2 decimal places and handle scientific notation
    if (Math.abs(value) < 0.01 || Math.abs(value) >= 10000) {
        return value.toExponential(4);
    }
    return Number(value.toFixed(2)).toString();
}
