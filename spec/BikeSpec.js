describe('Bike', function(){

  beforeEach( () => {
    bikeBoJo = new Bike();
  });

  it('Make a new instance of Bike', function(){
    expect(bikeBoJo instanceof Bike).toBeTruthy();
  });
})
