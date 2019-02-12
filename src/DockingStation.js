
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

  isEmpty() {
    if (this.bikes.length === 0) {
      return true;
    } else {
      return false;
    }
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

}