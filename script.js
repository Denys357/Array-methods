

class MyArray {
	constructor(...args) {
		let data = [] 
		for(let i = 0; i < args.length; i++){
			data.push(args[i])	
		}
		return data	
	};
	
}

Array.prototype.myPush = function (element) {
  this[this.length] = element
  return this.length
}

Array.prototype.myPop = function () {
  let elementToRemove = this[this.length - 1]
  delete this[this.length]
  return elementToRemove
}

Array.prototype.myForeach = function(func) {
	for (let i = 0; i < this.length; i++) {
		func(this[i], i, this)
	}
}

Array.prototype.myMap = function(func) {
	let newArr = []
    for (let i = 0; i < this.length; i++) {
		 newArr.push(func(this[i], i, this))
		 
	}
	return newArr
}

Array.prototype.myReduce = function(func, initialVal) {
    let accumulator = (initialVal === undefined) ? undefined : initialVal;
    for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = func(accumulator, this[i], i, this)
        } else {
            accumulator = this[i]
        }
    }
    return accumulator;
};

Array.prototype.myFilter = function(func) {
	let filterArr = []
	for (let i = 0; i < this.length; i++) {
		if(func(this[i], i, this)) {
			filterArr.push(this[i])
		}
	}
	return filterArr
}

Array.myFrom = function(arg, func) {
	let newArr = []
	for(let i = 0; i < arg.length; i++) {
		if(func) {
			newArr.push(func(arg[i]))
		}
		else {
			newArr.push(arg[i])
		}
		
	}
	return newArr
}


const arr = new MyArray(1, 4, [2,4], { name: 'Misha' });
const arr2 = new MyArray(10, 4, 2, 3);






