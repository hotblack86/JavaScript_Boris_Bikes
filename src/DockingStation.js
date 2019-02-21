
class DockingStation {
  constructor(capacity) {
    this.bikes = [];
    this.capacity = capacity;
  }

  dock(bike) {
    if (this.isFull() === true) {
      throw "Docking Station is Full";
    } else if (bike.broken === true) {
      throw "Can not dock a broken bike"
    } else {
      this.bikes.push(bike);
    }
  }  

  release(bike) {
    if (this.isEmpty() === true) {
      throw "No bikes available";
    } else {
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