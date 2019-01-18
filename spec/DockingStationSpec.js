describe('DockingStation', function(){

  beforeEach( () => {
    dockingStationBoJo = new DockingStation(2);
    bike = new Bike();
  });

  it('Initializes with an empty DockingStation', function(){
    expect(dockingStationBoJo.bikes).toEqual([]);
  });

  it('Initializes with an default capacity', function(){
    expect(dockingStationBoJo.capacity).toEqual(2);
  });

  it('responds to dock method', function(){
    expect(dockingStationBoJo.dock).toBeDefined();
  })

  it('docks a bike in the DockingStation', function(){
    dockingStationBoJo.dock(bike);
    expect(dockingStationBoJo.bikes).toContain(bike);
  })

  it('responds to release method', function(){
    expect(dockingStationBoJo.release).toBeDefined();
  })

  it('releases a bike from the DockingStation', function(){
    dockingStationBoJo.release(bike)
    expect(dockingStationBoJo.bikes).not.toContain(bike)
  })

  it('full method initially returns false', function(){
    expect(dockingStationBoJo.full()).toBe (false);
  })

  // it('throws an error if DockingStation is full when trying to dock a bike', function(){
  //   dockingStationBoJo.dock(bike);
  //   dockingStationBoJo.dock(bike);
  //   dockingStationBoJo.dock(bike);
  //   expect(dockingStationBoJo.dock(bike)).toThrow(new Error("Docking Station is Full"));
  // })
})