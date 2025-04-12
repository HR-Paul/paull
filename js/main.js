function bruteforce()
{
    console.log("Hacking started")
    for (let i=0;i<4;i++)
    {
        for (let j=0;j<4;j++)
        {
            for (let k=0;k<4;k++)
            {
                for (let l=0;l<4;l++)
                {
                    fetch(`0${i}1${j}2${k}3${l}`+".html",{method:"GET"})
                        .then(response=>{
                            if (response.status===200)
                            {
                                window.location.replace(`0${i}1${j}2${k}3${l}`+".html")
                            }
                        })
                }
            }
        }
    }
    console.log("Hacking successful")
}