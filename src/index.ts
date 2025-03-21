import { countVowels } from './CountVowels'
import { deepEqual } from './DeepEqual'
import { findMissingNumbers } from './FindMissingNumbers'
import { firstNonRepeatingChar } from './firstNonRepeatingChar'
import {reverseString} from './ReverseString'

function main(){
    // const reverseStr:string ="hello"
    // console.log(reverseString(reverseStr))

    // const vowelsCount:number=countVowels("hello")
    // console.log("Vowels count:",vowelsCount)

    // const missingNumber:number[]|null=findMissingNumbers([2,4,311,10,6])
    // console.log(missingNumber===null?"No missing number":"Missing Numbers: "+missingNumber)

    // const nonRepeatingChar:string|null=firstNonRepeatingChar("aab")
    // console.log(nonRepeatingChar===null?"No character found":"Non repeating chararcter found:"+nonRepeatingChar)

    const isEuqal:boolean=deepEqual({a:1,b:2},4)
    console.log(isEuqal?"Equal":"Not equal")
}


main()

