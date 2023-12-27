function array(num);
{
    if (num===[0])
    {
        console.log("inavlid.please enter new")

    }
    try {
        array([1,2,3,4,5]);
        array([]);
    }
    catch(error){
        console.log("error message")
    }
}