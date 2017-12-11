var assert = require('assert');
var timezone = require('.')


describe('test timezone', function() {
  it('test Europe/Berlin for a given summmer time', function(){
    assert.equal(timezone('Europe/Berlin', new Date('2017-07-07')),2);
  });

  it('test Europe/Berlin for a given winner time', function(){
    assert.equal(timezone('Europe/Berlin', new Date('2017-12-07')),1);
  });

  it('test Tokyo timezone', function(){
    assert.equal(timezone('Asia/Tokyo'),9);
  });

  it('test China shang hai timezone', function(){
    assert.equal(timezone('Asia/Shanghai'), 8);
  });

  it('test China shang hai timezone for a given summer time', function(){
    assert.equal(timezone('Asia/Shanghai',  new Date('2017-07-07')), 8);
  });

  it('test China shang hai timezone for a given winner time', function(){
    assert.equal(timezone('Asia/Shanghai',  new Date('2017-12-07')), 8);
  });


  it('test america New York timezone for a given winner time', function(){
    assert.equal(timezone('America/New_York',  new Date('2017-12-07')), -5);
  });


  it('test america New York timezone for a given summer time', function(){
    assert.equal(timezone('America/New_York',  new Date('2017-07-07')), -4);
  });
  
});
