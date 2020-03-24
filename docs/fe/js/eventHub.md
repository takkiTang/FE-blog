# EventHub

```js
class EventHub{
  constructor(){
    this.cache = {}
  }
  on(eventName,fn){
    this.cache[eventName] = this.cache[eventName] || []
    this.cache[eventName].push(fn)
  }
  emit(eventName,...args){
    this.cache[eventName].forEach(fn=>fn(...args))
  }
  off(eventName,fn){
    this.cache[eventName] = this.cache[eventName] || []
    let index = this.cache[eventName].indexOf(fn)
    if(index === -1) return
    this.cache[eventName].splice(index,1)
  }
}

```