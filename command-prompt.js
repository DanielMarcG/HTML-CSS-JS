command.addEventListener("keydown", function(event) {

    if (event.key !== "Enter") return;
    const input = command.value.trim();
    if (!input) return;

    const parts = input.split(" ");
    const cmd = parts[0];
    const value = parts.slice(1).join(" ");

    output.innerHTML += `<div>&gt; ${input}</div>`;
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
            output.innerHTML += `<div>Unknown command: ${cmd}</div>`;
    }

    command.value = "";
});
