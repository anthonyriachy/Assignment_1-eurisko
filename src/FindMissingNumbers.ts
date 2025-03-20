export function findMissingNumbers(nums:number[]):number[]{
    let missingNumbers:number[]=[]
    for (let i =1;i<=nums.length;i++){
        if(!nums.includes(i))
            missingNumbers.push(i)
        // or return i if i want only one number

    }
    return missingNumbers
}