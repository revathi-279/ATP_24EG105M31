function search(array,key)
{
    for(i = 0; i < array.length; i++)
    {
        if(array[i] === key)      //Compares every element of array with search element
            return i;
    }
    return "Not found";
}
let array = [31,65,20,64,18];
let key = 64;
console.log(`Index of search element is ${search(array,key)}`);