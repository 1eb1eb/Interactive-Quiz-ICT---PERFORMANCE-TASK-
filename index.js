// Assets //
let selected1;
let selected2;
let selected3;
let selected4;
let selected5;
let selected6;
let selected7;
let selected8;
let selected9;
let selected10;

// Functions //
function select1(button){
    let selectedText = "Selected choice:";
    let selectedValue = document.getElementById("choice_value");

    selected1 = button;
    selectedValue.innerHTML = selectedText + " " + button;
};

function select2(button){
    let selectedText = "Selected choice:";
    let selectedValue = document.getElementById("choice_value2");

    selected2 = button;
    selectedValue.innerHTML = selectedText + " " + button;
};

function select3(button){
    let selectedText = "Selected choice:";
    let selectedValue = document.getElementById("choice_value3");

    selected3 = button;
    selectedValue.innerHTML = selectedText + " " + button;
};

function select4(button){
    let selectedText = "Selected choice:";
    let selectedValue = document.getElementById("choice_value4");

    selected4 = button;
    selectedValue.innerHTML = selectedText + " " + button;
};

function select5(button){
    let selectedText = "Selected choice:";
    let selectedValue = document.getElementById("choice_value5");

    selected5 = button;
    selectedValue.innerHTML = selectedText + " " + button;
};

function select6(button){
    let selectedText = "Selected choice:";
    let selectedValue = document.getElementById("choice_value6");

    selected6 = button;
    selectedValue.innerHTML = selectedText + " " + button;
};

function select7(button){
    let selectedText = "Selected choice:";
    let selectedValue = document.getElementById("choice_value7");

    selected7 = button;
    selectedValue.innerHTML = selectedText + " " + button;
};

function select8(button){
    let selectedText = "Selected choice:";
    let selectedValue = document.getElementById("choice_value8");

    selected8 = button;
    selectedValue.innerHTML = selectedText + " " + button;
};

function select9(button){
    let selectedText = "Selected choice:";
    let selectedValue = document.getElementById("choice_value9");

    selected9 = button;
    selectedValue.innerHTML = selectedText + " " + button;
};

function select10(button){
    let selectedText = "Selected choice:";
    let selectedValue = document.getElementById("choice_value10");

    selected10 = button;
    selectedValue.innerHTML = selectedText + " " + button;
};

function addResults(){
    let totalResult = 0

    let resultValue = document.getElementById("result_value");
    let body = document.getElementById("body")

    let resultText = "YOUR SCORE IS:";
    let goodResultText = "Good job!";
    let badResultText = "Better luck next time!";

    

    if(selected1 == 'C'){
        totalResult += 1
    } if(selected2 == 'D'){
        totalResult += 1
    } if(selected3 == 'A'){
        totalResult += 1
    }  if(selected4 == 'B'){
        totalResult += 1
    }  if(selected5 == 'C'){
        totalResult += 1
    }  if(selected6 == 'A'){
        totalResult += 1
    }  if(selected7 == 'B'){
        totalResult += 1
    }  if(selected8  == 'A'){
        totalResult += 1
    }  if(selected9 == 'D'){
        totalResult += 1
    }  if(selected10 == 'D'){
        totalResult += 1
    };

    
    if(totalResult >= 5){
        alert(resultText + " " + totalResult + "/10" + " | " + goodResultText);
    } else{alert(resultText + " " + totalResult + "/10" + " | " + badResultText)};

    resultValue.style.display = "block";
    window.scrollTo(0,100000)
   };

function refreshPage(){
    if(confirm("Are you sure you want to try again?") == true){
        window.location.reload();
        window.scrollTo(0,0)
    } else{return}
}