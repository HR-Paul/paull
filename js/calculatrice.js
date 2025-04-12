var user=[]

function append_number(num)
{
    if (typeof(user[user.length-1])!=="number")
    {
        user.push(num)
    }
    else
    {
        user[user.length-1]=user[user.length-1]*10+num
    }
    usertext(user)
}
function usertext(user)
{
    let exp=""
    for (let i=0;i<user.length;i++)
    {
        if (i%2==0)
        {
            exp+=String(user[i])
        }
        else
        {
            exp=exp+user[i]
        }
    }
    if (user.length===0)
    {
        exp="0"
    }
    console.log(exp)
    document.getElementById("output").innerHTML=exp
}
function append_operator(op)
{
    if (user.length>0 && typeof(user[user.length-1])==="number")
    {
        user.push(op)
        usertext(user)
    }
}
function clear_output()
{
    user=[]
    document.getElementById("output").innerHTML="0"
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
            if (user[i]=="/")
                {
                    user[i-1]=user[i-1]/user[i+1]
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
    if (user.length===0)
    {
        user.push(0)
    }
    document.getElementById("output").textContent=user[0]
    user=[]
}