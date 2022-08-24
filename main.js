function publishResult(){
    const maths=document.getElementById("maths").value;
    const physics=document.getElementById("physics").value;
    const computer=document.getElementById("computer").value;
    const programming=document.getElementById("programming").value;
    const english=document.getElementById("english").value;

    let total=parseFloat(maths) + parseFloat(physics) + parseFloat(computer) + parseFloat(programming) + parseFloat(english);
    document.getElementById("sum").innerHTML="The Sum Is: " + total;
    let percentage=(total*100)/500;
    document.getElementById("percentage").innerHTML="The Pecentage Is: " + percentage;

    if (percentage>=80) {
        document.getElementById("grade").innerHTML="You'r Passed In A+ Grade";
    }
    else if (percentage>=70) {
        document.getElementById("grade").innerHTML="You'r Passed In A Grade";
    }
    else if (percentage>=60) {
        document.getElementById("grade").innerHTML="You'r Passed In B Grade";
    }
    else if (percentage>=50) {
        document.getElementById("grade").innerHTML="You'r Passed In C Grade";
    }
    else if (percentage>=40) {
        document.getElementById("grade").innerHTML="You'r Passed In D Grade";
    }
    else if (percentage<=40) {
        document.getElementById("grade").innerHTML="You'r Failed";
    }
}

 
