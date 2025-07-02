function generatePoem(event){
    event.preventDefault();

    new Typewriter("#poem", {
        strings: " Moments like these, so often unheard",
        autoStart: true,
        cursor: "",
        delay: 1,
      });
  
   
}
let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
