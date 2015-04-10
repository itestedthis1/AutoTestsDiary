/**
 * Created by c.moore-hill on 10/04/2015.
 */
var ConsultantDetailPage = function(){
  this.consultantEmail = element(by.model('yourName'));
  this.consultantPhone = element(by.binding('yourName'));

  this.get = function() {
    browser.get('http://lcdevapp01/#/Consultants/Details/1');
  };



};


// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://lcdevapp01/#/');

    expect(browser.getTitle()).toEqual('- My ASP.NET Application');
  });

  it('should have a menu bar', function(){

  });

});
