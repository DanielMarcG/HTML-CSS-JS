const command = document.getElementById("command");
const output = document.getElementById("terminal-output");

command.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const text = command.value.trim();

        output.innerHTML += `<div>&gt; ${text}</div>`;

        command.value = "";
    }

});
