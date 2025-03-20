import { countVowels } from './CountVowels'
import { findMissingNumbers } from './FindMissingNumbers'
import { firstNonRepeatingChar } from './firstNonRepeatingChar'
import {reverseString} from './ReverseString'

function main(){
    // const reverseStr:string ="hello"
    // console.log(reverseString(reverseStr))

    // const vowelsCount:number=countVowels("hello")
    // console.log(vowelsCount)

    // const missingNumber:number[]=findMissingNumbers([2,4,311,10,6])
    // console.log(missingNumber.length>0?"Missing Numbers: "+missingNumber:"No missing number")

    const nonRepeatingChar:string=firstNonRepeatingChar("aab")
    console.log("hello: ",nonRepeatingChar)
}


main()

