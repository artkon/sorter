class Sorter {
  constructor() {
    this.store = [];
    this.comparator = (a, b) => a - b;
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
    const sortedIndices = indices.sort((a, b) => a - b);
    const targetElements = [];

    for(let i = 0, len = sortedIndices.length; i < len; i++){
      targetElements.push( this.store[sortedIndices[i]] );
    }

    targetElements.sort(this.comparator);

    for(var i = 0, len = sortedIndices.length; i < len; i++){
      this.store[ sortedIndices[i] ] = targetElements[i];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;