//const DockingStation = class {}

//const constructorDS = new DockingStation();

class DockingStation {
  constructor(capacity) {
    this.bikes = [];
    this.capacity = capacity;
  }

  full() {
    if (this.bikes.length === this.capacity) {
      return true;
    } else {
      return false;
    }
}

  dock(bike) {
    // if (full() === true) {
    //   throw "Docking Station is Full";
    // } else {
    this.bikes.push(bike);
  }
    


  release(bike) {
    this.bikes.pop(bike);
  }

}