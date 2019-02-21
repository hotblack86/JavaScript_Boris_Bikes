describe('Bike', function(){

  beforeEach( () => {
    bikeBoJo = new Bike();
  });


  it('Initializes with a working bike', function(){
    expect(bikeBoJo.broken).toEqual(false);
  });

  it('User can report bike as being broken', function(){
    bikeBoJo.reportBroken();
    expect(bikeBoJo.broken).toEqual(true);
  });

})
