import { countVowels } from './CountVowels'
import { deepEqual } from './DeepEqual'
import { findMissingNumbers } from './FindMissingNumbers'
import { firstNonRepeatingChar } from './firstNonRepeatingChar'
import { LRUCache } from './LRUcache'
import {reverseString} from './ReverseString'
import { TaskManager } from './TaskManager'

function main(){
    // const reverseStr:string ="hello"
    // console.log(reverseString(reverseStr))

    // const vowelsCount:number=countVowels("hello")
    // console.log("Vowels count:",vowelsCount)

    // const missingNumber:number[]|null=findMissingNumbers([2,4,311,10,6])
    // console.log(missingNumber===null?"No missing number":"Missing Numbers: "+missingNumber)

    // const nonRepeatingChar:string|null=firstNonRepeatingChar("aab")
    // console.log(nonRepeatingChar===null?"No character found":"Non repeating chararcter found:"+nonRepeatingChar)

    // const isEuqal:boolean=deepEqual({a:1,b:2},4)
    // console.log(isEuqal?"Equal":"Not equal")

    // const cache=new LRUCache(5);
    // cache.put(1, 1);
    // cache.put(2, 2);
    // cache.get(1); // 1
    // cache.put(3, 3); // Removes key 2
    // cache.put(4, 4); // Removes key 2
    // cache.get(2); // null
    // cache.get(3); // 3
    // cache.printLRU()

    const taskManager = new TaskManager();
    taskManager.addTask("Learn TypeScript");
    taskManager.addTask("Learn JavaScript");
    taskManager.completeTask(19);
    taskManager.displayTasks();
}


main()

