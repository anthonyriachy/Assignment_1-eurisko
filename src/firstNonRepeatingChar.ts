export function firstNonRepeatingChar(str:string):string{
    //O(n^2)
    //this works because of lastIndexOf in javaScript
    // for(let i = 0; i < str.length; i++){
    //     if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
    //         return str[i]
    //     }
    // }

    // O(n^2) approach
    for (let i = 0; i < str.length; i++) {
        // the reason i didn't use j=i+1 is because for example, if the string is "aab" the second "a" is considered non repeating
        let j = i + 1;
        while (j < str.length) {
            // If str[i] matches str[j] and i !== j, then str[i] is not unique, so break
            if (i !== j && str[i] === str[j]) {
                break;
            }
            j++;
        }
        // If j reaches the end of the string and no match was found, then str[i] is unique
        if (j === str.length) {
            return str[i];
        }
    }
    return '';
}