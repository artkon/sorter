class Sorter {
  constructor() {
    
    this.store = [];
    this.normalSort = function(a, b){
      return a - b;
    }
    this.compareFunction = this.normalSort;
  }

  add(element) {
    this.store.push(element);
  }

  at(index) {
    return this.store[index];
  }

  get length() {
    return this.store.length;
  }

  toArray() {
    return this.store;
  }

  sort(indices) {
    // your implementation
    Array.prototype.sort.call(indices, this.normalSort);
    var targetElements = [];
    for(var i = 0; i < indices.length; i++){
      targetElements.push( this.store[indices[i]] );
    }
    targetElements.sort(this.compareFunction);
    // alert(targetElements);

    for(var i = 0; i < indices.length; i++){
      this.store[ indices[i] ] = targetElements[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;