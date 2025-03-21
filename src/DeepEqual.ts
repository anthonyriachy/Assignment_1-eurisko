export function deepEqual(obj1:any,obj2:any):boolean{
    if(obj1==null || obj2==null){
        return obj1===obj2; //true if both are null, false if one is false
    }

    if(Object.keys(obj1).length!==Object.keys(obj2).length){ //check if object have more keys than the other one.
        return false;  //also if one them is not an object this will return false.
    }

    for (const key in obj1){
        if(obj1[key]!==obj2[key])return false;
    }
    return true;
}