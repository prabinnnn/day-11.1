function numberisnegative(num)
{
    if (Number(num)==-1)
    {
        throw =new Error("number invalid.please enter number")

    }
    try {
        numberisnegative(13);
        numberisnegative(-2);

    }
    catch {
        console.log("error message");
    }

 
}