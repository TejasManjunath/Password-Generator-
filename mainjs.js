
let filter_btn = document.querySelectorAll('.filter-btn');
let tab_items = document.querySelectorAll('.tab-item');
let tabContainer = document.querySelector('.tab-filter-item-container');

function setActiveTab(select_tab) {
  for (let t = 0; t < tab_items.length; t++) {
    tabContainer.style.height = tab_items[t].scrollHeight + 'px';
    if (tab_items[t].classList.contains(select_tab)) {
      tab_items[t].classList.add('select_tab');
    } else {
      tab_items[t].classList.remove('select_tab');
    }
  }
}

for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener('click', function () {
    for (let j = 0; j < filter_btn.length; j++) {
      filter_btn[j].classList.remove('active');
    }
    let select_tab = filter_btn[i].getAttribute('data-tab');
    filter_btn[i].classList.add('active');
    setActiveTab(select_tab);
  });
}

for (let th = 0; th < tab_items.length; th++) {
  tabContainer.style.height = tab_items[th].scrollHeight + 'px';
}

// Set the default tab when the page loads (if needed)
// For example: setActiveTab('default-tab');



var slider = document.getElementById("myRange");
    var output = document.getElementById("length");
    output.value = slider.value;

    function myFunction(x) {
        output.value = x.value;
    }

    function setSlider(x) {
        slider.value = x.value;
    }

    document.addEventListener("DOMContentLoaded", function () {
        const lengthInput = document.getElementById("length");
        const uppercaseCheckbox = document.getElementById("uppercase");
        const lowercaseCheckbox = document.getElementById("lowercase");
        const numbersCheckbox = document.getElementById("numbers");
        const symbolsCheckbox = document.getElementById("symbols");
        const generateButton = document.getElementById("generate");
        const passwordOutput = document.getElementById("password");
        const passwordStrengthDiv = document.getElementById("passwordStrength");

        generateButton.addEventListener("click", () => {
            const length = parseInt(lengthInput.value);
            const useUppercase = uppercaseCheckbox.checked;
            const useLowercase = lowercaseCheckbox.checked;
            const useNumbers = numbersCheckbox.checked;
            const useSymbols = symbolsCheckbox.checked;

            const password = generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols);
            passwordOutput.value = password;

            // Check password strength and display it
            const strength = checkPasswordStrength(password);
            displayPasswordStrength(strength);
        });

        function generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols) {
            const uppercaseChars = useUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
            const lowercaseChars = useLowercase ? "abcdefghijklmnopqrstuvwxyz" : "";
            const numberChars = useNumbers ? "0123456789" : "";
            const symbolChars = useSymbols ? "!@#$%^&*()_+-=[]{}|;:,.<>?/" : "";

            const allChars = lowercaseChars + uppercaseChars + numberChars + symbolChars;

            let password = "";
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * allChars.length);
                password += allChars[randomIndex];
            }

            return password;
        }

        function checkPasswordStrength(password) {
            // Adjust these criteria based on your strength requirements
            const lengthCriteria = 8;
            const uppercaseCriteria = /[A-Z]/.test(password);
            const lowercaseCriteria = /[a-z]/.test(password);
            const numbersCriteria = /\d/.test(password);
            const symbolsCriteria = /[!@#$%^&*()_+-={}|;:,.<>?/]/.test(password);

            if (password.length >= lengthCriteria) {
                if (uppercaseCriteria && lowercaseCriteria && numbersCriteria && symbolsCriteria) {
                    return "strong";
                } else if ((uppercaseCriteria && lowercaseCriteria) || (lowercaseCriteria && numbersCriteria) || (numbersCriteria && symbolsCriteria)) {
                    return "medium";
                } else {
                    return "weak";
                }
            } else {
                return "weak";
            }
        }

        function displayPasswordStrength(strength) {
            passwordStrengthDiv.textContent = `Password Strength: ${strength}`;
            passwordStrengthDiv.className = `strength-${strength}`;
        }

        function copyPassword() {
            passwordOutput.select();
            document.execCommand('copy');
        }
    });


const generateButton = document.getElementById("generateButton");
    const passwordBox = document.getElementById("passwordBox");
    const passwordStrengthDiv1 = document.getElementById("passwordStrength1");

    generateButton.addEventListener("click", generatePassword);

    function generatePassword() {
        const words = [
            "apple", "banana", "cherry", "dog", "elephant", "flower",
            "guitar", "happiness", "island", "jazz", "kiwi", "lemon"
        ];

        // Choose random words and add a random character for uppercase and lowercase
        const password1 = getRandomWord(words) +
            getRandomWord(words).toUpperCase() +
            getRandomWord(words) +
            getRandomWord(words).toUpperCase();

        // Set the generated password in the textbox
        passwordBox.value = password1;

        // Check password strength and display it
        const strength1 = checkPasswordStrength1(password1);
        displayPasswordStrength1(strength1);
    }

    function getRandomWord(wordArray) {
        const randomIndex = Math.floor(Math.random() * wordArray.length);
        return wordArray[randomIndex];
    }

    function copyPassword2() {
        passwordBox.select();
        document.execCommand('copy');
    }

    function checkPasswordStrength1(password1) {
        // Implement your password strength logic here
        // For simplicity, let's assume a password with length > 12 is considered strong
        return password1.length > 12 ? "strong" : "weak";
    }

    function displayPasswordStrength1(strength1) {
        passwordStrengthDiv1.textContent = `Password Strength: ${strength1}`;
        passwordStrengthDiv1.className = `strength1 ${strength1}`;
    }

    