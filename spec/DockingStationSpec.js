describe('DockingStation', function(){

  beforeEach( () => {
    dockingStationBoJo = new DockingStation(2);
    bike1 = new Bike();
    bike2 = new Bike();
    bike3 = new Bike();
  });

  it('Initializes with an empty DockingStation', function(){
    expect(dockingStationBoJo.bikes).toEqual([]);
  });

  it('Initializes with a default capacity', function(){
    expect(dockingStationBoJo.capacity).toEqual(2);
  });

  it('docks a bike in the DockingStation', function(){
    dockingStationBoJo.dock(bike1);
    expect(dockingStationBoJo.bikes).toContain(bike1);
  })

  it('releases a bike from the DockingStation', function(){
    dockingStationBoJo.dock(bike1);
    dockingStationBoJo.release(bike1)
    expect(dockingStationBoJo.bikes).not.toContain(bike1)
  })

  it('full method initially returns false', function(){
    expect(dockingStationBoJo.isFull()).toBe (false);
  })

  it('throws an error if DockingStation is full when trying to dock a bike', function(){ 
    expect(function() { 
      dockingStationBoJo.dock(bike1);
      dockingStationBoJo.dock(bike2);
      dockingStationBoJo.dock(bike3);
    }).toThrow('Docking Station is Full');
  })

  it('throws an error if DockingStation is empty when trying to release a bike', function(){ 
    expect(function() { 
      dockingStationBoJo.release(bike1)
    }).toThrow('No bikes available');
  })
})