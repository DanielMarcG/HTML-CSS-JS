const command = document.getElementById("command");
const output = document.getElementById("terminal-output");

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

        case "font-size":
            document.body.style.fontSize = value;
            break;

        default:
            const error = document.createElement("div");
            error.textContent = `Unknown command: ${cmd}
            List of Commands:
            - color
            - background
            - font-size`;
            output.appendChild(error);
    }

    // Clear input
    command.value = "";
});
