function operation(operateur)
{
    const first_var = document.getElementById("first_input").value
    const second_var = document.getElementById("second_input").value
    let result;
    if (operateur=="+") {
        result=parseInt(first_var)+parseInt(second_var)
    }
    else if (operateur=="-") {
        result=parseInt(first_var)-parseInt(second_var)
    }
    else if (operateur=="*") {
        result=parseInt(first_var)*parseInt(second_var)
    }
    document.getElementById("result").innerHTML=result
}