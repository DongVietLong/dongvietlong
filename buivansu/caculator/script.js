// var body = document.getElementsByTagName('body')[0];


// var creatContainer = document.createElement('div');
// creatContainer.classList.add('container');

// var creatDisplay = document.createElement('div');
// creatDisplay.id = 'display';

// var creatButtons = document.createElement('div');
// creatButtons.classList.add('buttons');
// creatButtons.innerHTML = '<div class="button">C</div> <div class="button">/</div> <div class="button">*</div> <div class="button">&larr;</div> <div class="button">7</div> <div class="button">8</div> <div class="button">9</div> <div class="button">-</div> <div class="button">4</div> <div class="button">5</div> <div class="button">6</div> <div class="button">+</div> <div class="button">1</div> <div class="button">2</div> <div class="button">3</div> <div class="button">.</div> <div class="button">(</div> <div class="button">0</div> <div class="button">)</div> <div id="equal" class="button">=</div>';

// body.appendChild(creatContainer);
// creatContainer.appendChild(creatDisplay);
// creatContainer.appendChild(creatButtons);


let display = document.getElementById('display')

let buttons = Array.from(document.getElementsByClassName('button'));
// let buttons = document.getElementsByClassName('button');
console.log(buttons);


buttons.map((button) => {
    button.addEventListener('click', (e) => {
        console.log(e);

        switch(e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Bạn nhập sai rồi!';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }

    })
});
