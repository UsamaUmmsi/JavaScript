let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let currentValue = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        if (value === "=") {
            try {
                currentValue = eval(currentValue);
            } catch {
                currentValue = "Error";
            }
        } else {
            currentValue += value;
        }

        display.value = currentValue;
    });
});
