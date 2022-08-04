let result = document.querySelector(".result");
let btn = Array.from(document.getElementsByClassName("btn-item"));
console.log(btn);

btn.map(function buttons(button) {
  button.addEventListener("click", (event) => { 
    switch(event.target.innerText) {
      case 'C':
        result.innerText = "";
        break;
      case "←":
        result.innerText = result.innerText.slice(0,-1);
        break;
      case "=":
        try {
          result.innerText = eval(result.innerText);
        } catch {
          result.innerText = "Syntax error/ Click C to cancel" ;
        }
        break;
      default:
        result.innerText += event.target.innerText;
    }
  })
})