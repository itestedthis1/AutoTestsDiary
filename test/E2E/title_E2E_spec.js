/**
 * Created by c.moore-hill on 10/04/2015.
 */


// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://lcdevapp01/#/');

    expect(browser.getTitle()).toEqual('- My ASP.NET Application');
  });

  it('should have a menu bar', function(){

  });

});
