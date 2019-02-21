describe('DockingStation', function(){

  beforeEach( () => {
    DEFAULT_CAPACITY = 2
    dockingStationBoJo = new DockingStation(DEFAULT_CAPACITY);
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

  it('Docks a bike in the DockingStation', function(){
    dockingStationBoJo.dock(bike1);
    expect(dockingStationBoJo.bikes).toContain(bike1);
  })

  it('Releases a bike from the DockingStation', function(){
    dockingStationBoJo.dock(bike1);
    dockingStationBoJo.release(bike1)
    expect(dockingStationBoJo.bikes).not.toContain(bike1)
  })


  it('Throws an error if DockingStation is full when trying to dock a bike', function(){ 
    expect(function() { 
      dockingStationBoJo.dock(bike1);
      dockingStationBoJo.dock(bike2);
      dockingStationBoJo.dock(bike3);
    }).toThrow('Docking Station is Full');
  })

  it('Throws an error when trying to dock a broken bike', function(){ 
    expect(function() {
      bike1.reportBroken(); 
      dockingStationBoJo.dock(bike1);
    }).toThrow('Can not dock a broken bike');
  })

  it('Throws an error if DockingStation is empty when trying to release a bike', function(){ 
    expect(function() { 
      dockingStationBoJo.release(bike1)
    }).toThrow('No bikes available');
  })
})