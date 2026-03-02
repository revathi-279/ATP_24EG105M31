function Big(n1,n2,n3)
{
 if(n1 > n2 && n1 > n3)
  return n1;
 else if(n2 > n3)
  return n2;
else return n3;
}
let big = Big(89,73,100)
console.log(`Bigger element is ${big}`);