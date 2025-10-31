//Actual Introduction Elements
// Grab elements that will display the generated introduction content
const personalBackground = document.getElementById('personal-background');
const professionalBackground = document.getElementById('professional-background');
const academicBackground = document.getElementById('academic-background');
const classList = document.getElementById('class-list');
const funnyItem = document.getElementById('funny-item');
const clearBtn = document.getElementById('clear-btn');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');

//Form Input Elements
// Inputs from the form used to build the introduction
const form = document.getElementById('form');
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

//Class List Elements
// The list in the form where classes are entered and the button to add more
const formClassList = document.getElementById('form-class-list');
const addClassBtn = document.getElementById("add-class");

//Original Class List Information
// Save the original HTML so "reset" can restore it
const originalClassList = formClassList.innerHTML;

//Section Elements
// Sections shown/hidden when submitting or editing the form
const formSection = document.getElementById('form-section');
const introduction = document.getElementById("introduction"); //introduction section // it's default is hidden
const generateHTMLSection = document.getElementById("generate-html-section");
const generateJSONSection = document.getElementById("generate-json-section");

const fillOutAgainBtn = document.getElementById("fill-out-again");

// Snapshot of inputs to allow resetting back to original values
const inputFields = [
    { element: personalBackgroundInput, value: personalBackgroundInput.value },
    { element: professionalBackgroundInput, value: professionalBackgroundInput.value },
    { element: academicBackgroundInput, value: academicBackgroundInput.value },
    { element: funnyItemInput, value: funnyItemInput.value },
    { element: imageCaptionInput, value: imageCaptionInput.value },
    { element: firstNameInput, value: firstNameInput.value },
    { element: lastNameInput, value: lastNameInput.value },
    { element: mascotFirstName, value: mascotFirstName.value },
    { element: mascotLastName, value: mascotLastName.value },
    { element: dividerInput, value: dividerInput.value },
    { element: personalStatementInput, value: personalStatementInput.value },
    { element: quoteInput, value: quoteInput.value },
    { element: quoteByInput, value: quoteByInput.value },
    { element: imgInput, value: imgInput.value },
    { element: platformInput, value: platformInput.value },
    { element: acknowledgmentInput, value: acknowledgmentInput.value },
    { element: dateInput, value: dateInput.value }
];

//clear function
function clearForms(){
    console.log('yo');
    inputFields.forEach((input) => input.element.value = "");
    formClassList.innerHTML = `<li>
        <label for="class-list-input-1">Class 1
        <input id="class-list-input-1" name="class-list" type="text"
        value="" class="class-info" placeholder="Course code and title">
        </label>
        <label for="class-list-description-1" class="why-take-class">Why you're taking the class.
        <textarea id="class-list-description-1" class="class-info" placeholder="Brief reason for taking this class"></textarea>
        </label>
        </li>`;
}

// Clear button: empties all form inputs and restores a single default class input item
clearBtn.addEventListener("click", () => {
    clearForms();
});

// Reset button: restores original class list HTML and resets input values to the saved snapshot
resetBtn.addEventListener("click", () => {
    formClassList.innerHTML = originalClassList;
    inputFields.forEach((input) => input.element.value = input.value);
});

// Function to add a new class input block to the form
function addNewClass() {
    const newLi = document.createElement("li");
    const lastChild = formClassList.lastElementChild;
    // determine last class index from the "for" attribute format: class-list-input-N
    const lastClassNumber = lastChild.firstElementChild.getAttribute("for").split("-")[3];
    console.log(lastClassNumber);
    const newClassLabel = document.createElement("label");
    newClassLabel.setAttribute("for", `class-list-input-${Number(lastClassNumber) + 1}`);
    newClassLabel.textContent = `Class ${Number(lastClassNumber) + 1}`;
    formClassList.appendChild(newLi);
    newLi.appendChild(newClassLabel);

    // create the text input for the class
    const newInput = document.createElement("input");
    newInput.setAttribute("id", `class-list-input-${Number(lastClassNumber) + 1}`);
    newInput.setAttribute("placeholder", "Course code and title");
    newInput.classList.add("class-info");
    newClassLabel.appendChild(newInput);

    // create the description textarea for why the class is taken
    const newDescriptionLabel = document.createElement("label");
    newDescriptionLabel.setAttribute("for", `class-list-description-${Number(lastClassNumber) + 1}`);
    newDescriptionLabel.setAttribute("class", "why-take-class");
    newDescriptionLabel.textContent = `Why you're taking this class.`;
    newLi.appendChild(newDescriptionLabel);

    const newDescriptionArea = document.createElement("textarea");
    newDescriptionArea.setAttribute("id", `class-list-description-${Number(lastClassNumber) + 1}`);
    newDescriptionArea.setAttribute("placeholder", "Brief reason for taking this class");
    newDescriptionArea.classList.add("class-info");
    newDescriptionLabel.appendChild(newDescriptionArea);

    return [newLi, newClassLabel, newInput, newDescriptionLabel, newDescriptionArea];
}

addClassBtn.addEventListener("click", () => {
    addNewClass();
});

// Form submit: validate, build the introduction view, and transfer form content to the display
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    // basic validation: ensure dividerInput is not zero (string or number comparison here)
    dividerInput.value.length === 0 ? valid = false : valid = true;

    if (valid) {
        console.log(valid);

        // hide form, show generated introduction
        formSection.hidden = true;
        introduction.hidden = false;
        fillOutAgainBtn.hidden = false;

        // Build the static structure of the introduction (initial HTML)
        introduction.innerHTML = `<h2>Introduction Form</h2>
        <h3>ITIS3135 ${dividerInput.value} ${firstNameInput.value} ${lastNameInput.value}'s ${dividerInput.value} ${mascotFirstName.value} ${mascotLastName.value}</h3>
            <figure>
                <img src="images/pictureofme.jpg" alt="Picture of me in front of a CyberTruck" id="intro-image">
                <figcaption id="intro-image-caption">August, 2024</figcaption>
            </figure>
            <p id="personal-statement">I’m a freshly re-enrolled cybersecurity major who got tired of shooting crazy music videos. I’m hopelessly addicted to REMATCH so if anybody plays hit me up. I also haven’t coded in 5 years so thanks in advance for the help.</p>
            <ul>
                <li id="personal-background"><span class="bold">Personal Background: — </span>${personalBackgroundInput.value}</li>
                <li id="professional-background"><span class="bold">Professional Background: — </span>${professionalBackgroundInput.value}</li>
                <li id="academic-background"><span class="bold">Academic Background: — </span>${academicBackgroundInput.value}
                    <ul id="class-list">
                    </ul>
                </li>
                <li><span class="bold">Primary Computer Platform I Work On: </span>${platformInput.value}</li>
                <li id="funny-item"><span class="bold">Funny/Interesting Item about Yourself: </span>${funnyItemInput.value}</li>
            </ul>
            <p>I, ${acknowledgmentInput.value} agree to abide by the terms in my Fall 2025 3135 053 Front-End Web Application Development with my instructor, D.I. von Briesen. I understand that all work that I do on my school and personal websites will be publicly available to the world. I will not put information there that is inappropriate for schoolwork, or that I wish to keep private.</p>
            
            <p>Signed: ${acknowledgmentInput.value} – ${!isNaN(new Date(dateInput.value + "T00:00").getTime()) ? new Date(dateInput.value + "T00:00").toLocaleDateString("en-US", {
                "month": "long",
                "day": "numeric",
                "year": "numeric"
            }): ""}</p>
            
            <p>I also understand that it is my work that counts for attendance, not logins or showing up for class. As such, failure to turn in assignments may show as absences. I also understand that given the structure and content of this class it’s possible to find many examples online or even view my classmates’ code directly. I swear that I will only use these resources to learn, and will not cut and paste code except where I have properly given credit (i.e. external libraries) and never from my classmates.</p>

            <p>Signed: ${acknowledgmentInput.value} – ${!isNaN(new Date(dateInput.value + "T00:00").getTime()) ? new Date(dateInput.value + "T00:00").toLocaleDateString("en-US", {
                "month": "long",
                "day": "numeric",
                "year": "numeric"
            }): ""}</p>
            <blockquote id="quote">“What do you mean by do? And what do you mean by you? And what do you mean by believe??”
                <cite id="quote-author">-  A Genius</cite>
            </blockquote>`.replace(/\n\s*/g, "");

        // Populate the class-list within the generated introduction using alternating .class-info inputs
        const classList = document.getElementById("class-list");
        const classInputs = Array.from(document.querySelectorAll(".class-info"));
        classInputs.forEach((input, index) => {
            // even index: class title, odd index: class description (based on how addNewClass creates elements)
            if (index % 2 === 0) {
                classList.innerHTML += `<li><span class="bold">${input.value}</span>`;
            }
            else {
                classList.innerHTML += `${input.value}</li>`;
            }
        });

        // Handle optional uploaded image: read file and set intro image src via FileReader
        const introImage = document.getElementById("intro-image");
        const file = imgInput.files[0];
        if (file) {
            console.log("deeznutsszz");
            const reader = new FileReader();
            reader.onload = () => {
                introImage.src = reader.result;
            };
            reader.readAsDataURL(file);
        }

        // update the image caption
        const imageCaption = document.getElementById("intro-image-caption");
        imageCaption.textContent = imageCaptionInput.value;

        // Insert quote and attribution
        const quote = document.getElementById("quote");
        const quoteBy = document.getElementById("quote-author");
        quote.innerHTML = `“${quoteInput.value}”
<cite id="quote-author">-  ${quoteByInput.value}</cite>`;

        // Replace placeholder personal statement with the submitted text
        const personalStatement = document.getElementById("personal-statement");
        personalStatement.textContent = personalStatementInput.value;

    }
    else {
        alert("Divider cannot be empty");
    }
});

// Button to go back and edit the form (shows form, hides introduction)
fillOutAgainBtn.addEventListener("click", () => {
    formSection.hidden = false;
    introduction.hidden = true;
    fillOutAgainBtn.hidden = true;
    generateHTMLSection.hidden = true;
    generateJSONSection.hidden = true;
});