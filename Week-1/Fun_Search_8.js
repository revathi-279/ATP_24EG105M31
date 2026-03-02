function search(array,key)
{
    for(i = 0; i < array.length; i++)
    {
        if(array[i] === key)
            return i;
    }
    return "Not found";
}
let array = [31,65,20,64,18];
let key = 64;
console.log(`Index of search element is ${search(array,key)}`);