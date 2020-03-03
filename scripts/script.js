let slider = document.querySelector("#sliderContainer");
let output = document.querySelector("#sliderValue");
let text = document.querySelector("#resultp");
const buttons = document.querySelectorAll(".calcButton");

function isOp(char) {
    const op = ['+', '-', 'x', '÷', '%'];

    for(i = 0; i < op.length; i++) {
        if(char == op[i])
            return true;
    }
    return false;
}

function clearStr(str) {
    let str2 = "";

    for(const char in str) {
        if(str[char] == "x" || str[char] == "÷" ) {
            if(str[char] == "x")
                str2 += "*";
            if(str[char] == "÷")
                str2 += "/";
        } else {
            str2 += str[char]
        }
    }
    console.log(str2);
    return str2;
}

function canWrite(_key, str) {
    if(str.length < 13 && _key != '=' && _key != '+/-') {
        if(isOp(_key) != isOp(str[str.length - 1]) || !isOp(_key))
            return true
        return false
    }
    return false
}

slider.value = "44";
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = slider.value;
    document.querySelector("#resultp").style.fontSize = `${slider.value}px`;
}

slider.addEventListener("mousemove", function(){
    var x = parseInt(slider.value);
    var color = "linear-gradient(90deg, rgb(31, 209, 141)" 
                + x + "%, rgb(255,255,255) " 
                + x + "%)";
    slider.style.background = color;
});

for (const _key of buttons) {
    var resultBar = document.querySelector("#resultp");
    _key.addEventListener("click", function(event) {
        if(_key.innerHTML == "=")
            _key.classList.toggle("onclicEqual")
        else
            _key.classList.toggle("onclic");
        if(canWrite(_key.innerHTML, resultBar.innerHTML) == true)
            resultBar.innerHTML += _key.innerHTML;
        if(_key.innerHTML == 'C')
            resultBar.innerHTML = " ";
        if(_key.innerHTML == "=")
            setTimeout(function() { _key.classList.toggle("onclicEqual")}, 100);
        else
            setTimeout(function() { _key.classList.toggle("onclic")}, 100);
    });
}

function calcString() {
    const str = document.querySelector('#resultp').innerHTML;
    resultBar.innerHTML = eval(clearStr(str));
};