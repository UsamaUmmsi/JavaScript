let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let currentValue = "";

// Button clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        if (value === "C") {
            currentValue = "";
        } 
        else if (value === "=") {
            try {
                currentValue = eval(currentValue).toString();
            } catch {
                currentValue = "Error";
            }
        } 
        else if (value === "←") {
            currentValue = currentValue.slice(0, -1);
        }
        else {
            currentValue += value;
        }

        display.value = currentValue;
    });
});

// Keyboard support
document.addEventListener("keydown", (event) => {
    if ((/[0-9+\-*/().]/).test(event.key)) {
        currentValue += event.key;
    }
    else if (event.key === "Enter") {
        try {
            currentValue = eval(currentValue).toString();
        } catch {
            currentValue = "Error";
        }
    }
    else if (event.key === "Backspace") {
        currentValue = currentValue.slice(0, -1);
    }
    else if (event.key.toLowerCase() === "c") {
        currentValue = "";
    }

    display.value = currentValue;
});
