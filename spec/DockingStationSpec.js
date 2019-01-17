describe('DockingStation', function(){

  beforeEach( () => {
    dockingStationBoJo = new DockingStation();
  });

  it('Make a new instance of DockingStation', function(){
    expect(dockingStationBoJo instanceof DockingStation).toBeTruthy();
  });

  it('Initializes with an empty DockingStation', function(){
    expect(dockingStationBoJo.bikes).toEqual([]);
  });

  it('responds to dock method', function(){
    expect(dockingStationBoJo.dock).toBeDefined();
  })

  it('docks a bike in the DockingStation', function(){
    var bike = new Bike();
    dockingStationBoJo.dock(bike)
    expect(dockingStationBoJo.bikes).toContain(bike)
  })

  it('responds to release method', function(){
    expect(dockingStationBoJo.release).toBeDefined();
  })

  it('releases a bike from the DockingStation', function(){
    var bike = new Bike();
    dockingStationBoJo.release(bike)
    expect(dockingStationBoJo.bikes).not.toContain(bike)
  })
})