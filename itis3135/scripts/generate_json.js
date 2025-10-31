document.addEventListener("DOMContentLoaded", () => {
const generateJsonButton = document.getElementById('generate-json-btn');
const generateJsonSection = document.getElementById('generate-json-section');
const generateJsonContainer = document.getElementById('generate-json-container');
const introductionSection = document.getElementById("introduction");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");

//input elements
const personalBackgroundInput = document.getElementById('personal-background-input');
const professionalBackgroundInput = document.getElementById('professional-background-input');
const academicBackgroundInput = document.getElementById('academic-background-input');
const funnyItemInput = document.getElementById('funny-item-input');
const imageCaptionInput = document.getElementById("img-caption-input");
const firstNameInput = document.getElementById("first-name-input");
const lastNameInput = document.getElementById("last-name-input");
const mascotFirstName = document.getElementById("mascot-first-name-input");
const mascotLastName = document.getElementById("mascot-last-name-input");
const dividerInput = document.getElementById("divider-input");
const personalStatementInput = document.getElementById("personal-statement-input");
const quoteInput = document.getElementById("quote-input");
const quoteByInput = document.getElementById("quote-author-input");
const imgInput = document.getElementById("img-input");
const platformInput = document.getElementById("platform-input");
const acknowledgmentInput = document.getElementById("acknowledgment-input");
const dateInput = document.getElementById("date-input");

generateJsonButton.addEventListener("click", () => {
    if (dividerInput.value === ""){
        return;
    }
    submitBtn.click();
    introductionSection.hidden = true;
    generateJsonSection.hidden = false;
    
    const courses = Array.from(document.querySelectorAll(".class-info"));
formDataCourses = courses.reduce((acc, input, index) => {
    if (index % 2 === 0){

        acc.push({course: input.value});
        return acc;
        
    }
    else {
        acc[acc.length-1].reason = input.value;
        return acc;
    }
}, []);

    const formData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    mascotFirstName: mascotFirstName.value,
    mascotLastName: mascotLastName.value,
    divider: dividerInput.value,
    imageCaption: imageCaptionInput.value,
    personalStatement: personalStatementInput.value,
    personalBackground: personalBackgroundInput.value,
    professionalBackground: professionalBackgroundInput.value,
    academicBackground: academicBackgroundInput.value,
    courses: formDataCourses,
    funnyItem: funnyItemInput.value,
    platform: platformInput.value,
    acknowledgment: acknowledgmentInput.value,
    date: dateInput.value,
    quote: quoteInput.value,
    quoteAuthor: quoteByInput.value
};

formSection.hidden = true;

   generateJsonContainer.textContent = JSON.stringify(formData, null, 2);
    //generateJsonContainer.innerHTML = "";
    // Highlight just this block
   generateJsonContainer.classList.remove("hljs", "hljs", "language-xml");
    generateJsonContainer.removeAttribute("data-highlighted");
    hljs.highlightElement(generateJsonContainer);
    
});
});