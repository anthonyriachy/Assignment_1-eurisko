export class LRUCache{
    private capacity: number;
    private cache:{[key:number]:number} //object with key string and value stirng
    private order:number[] //contains the oredr in which the elements are used. position 0 is the last item used

    constructor(capacity: number){
        this.capacity=capacity
        this.cache={}
        this.order=[]
    }

    get(key: number):number|null {
        if(!(key in this.cache)) return null //if key not found
        this.updateOrder(key)  //put at the start of the order array
        return this.cache[key] // return the cached value
    }
    put(key: number, value: number): void {
        // console.log("putting in key: " + key + " value: " + value)
        if(key in this.cache) {
            this.cache[key] = value //the key is found put the new value in cache
            this.updateOrder(key)
            return 
        }
        if(this.order.length >=this.capacity) {
            const removedKey:number|undefined=this.order.pop() // remove last item used
            if(removedKey!==undefined) {//remove also from the cache
                delete this.cache[removedKey]
            }
        }
        this.cache[key]=value
        this.updateOrder(key)
        // this.printLRU()

    }

    private updateOrder(key:number):void{
        this.order=this.order.filter(item=>item!==key) //first we remove the item from the order list
        this.order.unshift(key) //we add the item to the start of the order list
    }
    public printLRU(){
        console.log("order: ",this.order)
        console.log("cache: ",this.cache)  
    }
}