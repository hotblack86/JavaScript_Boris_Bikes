describe('DockingStation', function(){

  beforeEach( () => {
    dockingStationBoJo = new DockingStation();
  });

  it('Make a new instance of DockingStation', function(){
    expect(dockingStationBoJo instanceof DockingStation).toBeTruthy();
  });

  it('Initializes with an empty Docking Station', function(){
    expect(dockingStationBoJo.bikes).toEqual([]);
  });
})