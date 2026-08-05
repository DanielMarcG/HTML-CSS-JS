const currentPage = window.location.pathname.split("/").pop();
const index = blogPosts.indexOf(currentPage);

const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
const number = document.getElementById("postNumber");
const bot_prev = document.getElementById("bot-prevBtn");
const bot_next = document.getElementById("bot-nextBtn");
const bot_number = document.getElementById("bot-postNumber");

// Display current position
number.textContent = `(${index + 1} / ${blogPosts.length})`;

// Previous button
if (index > 0) {
    prev.href = blogPosts[index - 1];
} else {
    prev.style.opacity = "0.20"; // next.style.visibility = "hidden";
    prev.style.pointerEvents = "none";
}

// Next button
if (index < blogPosts.length - 1) {
    next.href = blogPosts[index + 1];
} else {
    next.style.opacity = "0.20"; // next.style.visibility = "hidden";
    next.style.pointerEvents = "none";
}

// Display current position
//bot_number.textContent = `${index + 1} / ${blogPosts.length}`;
// Bottom Previous button
if (index > 0) {
    bot_prev.href = blogPosts[index - 1];
} else {
    bot_prev.style.opacity = "0.20"; // bot_prev.style.visibility = "hidden";
    bot_prev.style.pointerEvents = "none";
}

// Bottom Next button
if (index < blogPosts.length - 1) {
    bot_next.href = blogPosts[index + 1];
} else {
    bot_next.style.opacity = "0.20"; //bot_prev.style.visibility = "hidden";
    bot_next.style.pointerEvents = "none";
}

