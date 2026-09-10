const command = document.getElementById("command");
const output = document.getElementById("terminal-output");
const display = document.getElementById("command-display");

command.addEventListener("input", function () {
    display.textContent = command.value;
});

command.addEventListener("keydown", function(event) {

    // Only respond when Enter is pressed
    if (event.key !== "Enter") return;

    const input = command.value.trim();

    if (!input) return;

    // Split command from its value
    const parts = input.split(" ");
    const cmd = parts[0];
    const value = parts.slice(1).join(" ");

    // Display the command in the terminal
    const line = document.createElement("div");
    line.textContent = `> ${input}`;
    output.appendChild(line);

    // Execute command
    switch (cmd) {

        case "color":
            document.body.style.color = value;
            break;

        case "background":
            document.body.style.backgroundColor = value;
            break;

        case "font-face":
            document.body.style.fontFamily = value;
            break;

	case "java-brew":
            output.innerHTML = "";
	  setTimeout(() => {
		output.innerHTML += "Grinding beans...<br>";
	  }, 500);
	  setTimeout(() => {
		output.innerHTML += "Heating water...<br>";
	  }, 1200);
	  setTimeout(() => {
		output.innerHTML += "Extracting espresso...<br>";
	  }, 2000);
	  setTimeout(() => {
		output.innerHTML += "☕ " +value+ " ready... Enjoy!<br>";
	  }, 3000);
            break;

	case "border":
            document.body.style.border = value;
            break;

	case "font-values":
	  const size = value.split(" ")[1]
	  document.body.style.fontSize = size + "px";
            break;

        default:
            const error = document.createElement("div");
            error.textContent = `Unknown command: ${cmd}`;
            output.appendChild(error);
            const commands = document.createElement("div");
            commands.textContent = `List of Commands:
                - "color"
                - "background"
                - "font-face"
                - "java-brew"
                - "border"
                - "font-values"`;
            output.appendChild(commands);
        }

    // Clear input
    command.value = "";
    display.textContent = "";
    });

    // Keep the terminal ready for typing
document.getElementById("terminal").addEventListener("click", function () {
    command.focus();
});
