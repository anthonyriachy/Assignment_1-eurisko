const vowels=[
    'a',
    'e',
    'i',
    'o',
    'u',
    'A',
    'E',
    'I',
    'O',
    'U' 
]
export function countVowels(str:string):number{
    let count=0;
    for (const letter of str){
        if(vowels.includes(letter))
            count++;
    }

    return count;
}