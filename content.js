// Listen for messages from the popup
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "get-element-color") {
            // Get the element under the cursor
            var element = document.elementFromPoint(window.mouseX, window.mouseY);

            // Get the background color of the element
            var color = window.getComputedStyle(element).backgroundColor;

            // Send the color back to the popup
            chrome.runtime.sendMessage({
                action: "element-color",
                color: color
            });
        }
    });

// Get the current mouse position
document.addEventListener("mousemove", function (event) {
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;
});
