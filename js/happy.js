const emojies = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "🙂",
    "🙃",
    "😊",
    "😇",
    "😌",
    "🤠",
    "🥳",
    "😎",
    "🤓",
    "😺",
    "😸",
    "😼",
    "🐵"
]


const callback = function (mutationsList, observer) {
    document.querySelectorAll(".ql-editor").forEach(function (i) {
        i.onmouseenter = function () {
            if (i.innerHTML != "<p><br></p>") {
                return
            }

            // Empty. Add emoji
            const emo = emojies[Math.floor(Math.random() * emojies.length)];
            i.innerHTML = "<p>" + emo + "</p>";

            const rightArrowKey = 37;
            const event = new KeyboardEvent('keydown', { 'key': rightArrowKey });
            i.dispatchEvent(event)
        }
    })
};

// Create an observer instance linked to the callback function
const targetNode = document.body;
const config = { attributes: true, childList: true, subtree: true };
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);