var user=[0]

function append_number(num)
{
    user[user.length-1]=user[user.length-1]*10+num
    usertext(user)
}
function usertext(user)
{
    let exp=""
    for (let i=0;i<user.length;i++)
    {
        if (user[i]!==0 || i!==user.length-1)
        {
            if (i%2==0)
            {
                exp+=String(user[i])
            }
            else
            {
                exp+=user[i]
            }
            console.log(exp)
        }
    }
    document.getElementById("output").textContent=exp
    return exp
}
function append_operator(op)
{
    if (user.length>0 && typeof(user[user.length-1])==="number")
    {
        user.push(op)
        user.push(0)
        usertext(user)
    }
}
function clear_output()
{
    user=[0]
    document.getElementById("output").textContent="0"
}
function calculate()
{
    if (user[user.length-1]!==0)
    {
        let i=1
        while (i<user.length)
        {
            if (user[i]=="x")
            {
                user[i-1]=user[i-1]*user[i+1]
                user.splice(i,2)
            }
            else
            {
                i+=2
            }
        }
        i=1
        while (i<user.length)
        {
            if (user[i]=="+")
            {
                user[i-1]=user[i-1]+user[i+1]
                user.splice(i,2)
            }
            else if (user[i]=="-")
            {
                user[i-1]=user[i-1]-user[i+1]
                user.splice(i,2)
            }
            else
            {
                i+=2
            }
        }
    }
    document.getElementById("output").textContent=user[0]
    user=[0]
}