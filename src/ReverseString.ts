export function reverseString(str:string):string{
    const startPos:number=str.length-1;
    let result:string=''
    for (let i=startPos; i>=0;i--){
        result+=str[i]
    }
    
    // result=str.split("").reverse().join("")
    return result
}