
class DockingStation {
  constructor(capacity) {
    this.bikes = [];
    this.capacity = capacity;
  }

  dock(bike) {
    if (this.isFull()) {
      throw "Docking Station is Full";
    } else {
      this.bikes.push(bike);
    }
  }  

  release(bike) {
    if (this.isEmpty()) {
      throw "No bikes available";
    } else if (bike.broken === true) {
      throw "Can not release a broken bike"
    }  else {
      this.bikes.pop(bike);
    }
  }

  isFull() {
    return this.bikes.length === this.capacity;
  }

  isEmpty() {
    return this.bikes.length === 0;
  }

}