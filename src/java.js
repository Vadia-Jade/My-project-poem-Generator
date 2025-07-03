function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}



function generatePoem(event){
    event.preventDefault();
    let instructionInput = document.querySelector("#user-instruction");
    let apiKey ="034407t747af2dfd1c31bo02c7fc4156";
    let context =
     "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML<p></p> and separate each line with a <br/>. make sure to follow the user instructions do not include a title to the poem and sign the poem at the end and Not at the beginning in a <strong></strong> element 'SheCodes AI'";
    let prompt =`User instructions: Generate poem about ${instructionInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
   
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about the ${instructionInput.value}</div>`;
  
   axios.get(apiURL).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
