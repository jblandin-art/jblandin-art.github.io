document.addEventListener("DOMContentLoaded", () => {
const generateButton = document.getElementById('generate-html-btn');
const generateSection = document.getElementById('generate-html-section');
const generateContainer = document.getElementById('generate-html-container');
const introductionSection = document.getElementById("introduction");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");
const dividerInput = document.getElementById("divider-input");

generateButton.addEventListener("click", () => {
    if (dividerInput.value === ""){
        return;
    }
    submitBtn.click();
    introductionSection.hidden = true;
    generateSection.hidden = false;
    generateContainer.textContent = introductionSection.outerHTML.replaceAll(/></g,">\n<").replace(`<section id="introduction" hidden="">`, `<section id="introduction">`).replace(`<h2>Introduction Form</h2>`, `<h2>Introduction HTML</h2>`);
    // Highlight just this block
    generateContainer.classList.remove("hljs", "hljs", "language-xml");
    generateContainer.removeAttribute("data-highlighted");
    hljs.highlightElement(generateContainer);
    
});
});