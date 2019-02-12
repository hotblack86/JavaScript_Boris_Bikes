
class DockingStation {
  constructor(capacity) {
    this.bikes = [];
    this.capacity = capacity;
  }

  isFull() {
    if (this.bikes.length === this.capacity) {
      return true;
    } else {
      return false;
    }
  }

  dock(bike) {
    if (this.isFull() === true) {
      throw "Docking Station is Full";
    } else {
      this.bikes.push(bike);
    }
  }  


  release(bike) {
    this.bikes.pop(bike);
  }

}