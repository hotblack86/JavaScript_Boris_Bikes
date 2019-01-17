//const DockingStation = class {}

//const constructorDS = new DockingStation();

class DockingStation {
  constructor() {
    this.bikes = [];
  }

  dock(bike) {
    this.bikes.push(bike);
}

  release(bike) {
    this.bikes.pop(bike);
  }

}