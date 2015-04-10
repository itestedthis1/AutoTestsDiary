/**
 * Created by c.moore-hill on 10/04/2015.
 */

/**
 *  Page Object Model
 */
var ConsultantListingPage = function(){
  var NumConsultants = element.all(by.repeater('consultant in viewModel.list'));
  this.nameInput = element(by.model('yourName'));
  this.greeting = element(by.binding('yourName'));

  this.get = function() {
    browser.get('http://lcdevapp01/#/Consultants');
  };

  this.getTitle = function(){
    this.get.getTitle();
  };
};


// Tests
describe('Protractor Demo App', function() {

  //it('should have a title', function() {
  //  var consultantListingPage = new ConsultantListingPage();
  //
  //  consultantListingPage.get();
  //
  //  expect(consultantListingPage.getTitle()).toEqual('- My ASP.NET Application');
  //});

  it('should have a listing of 5', function(){
    consultantListingPage = new ConsultantListingPage();
    consultantListingPage.get();
    var NumConsultants =  element.all(by.repeater('consultant in viewModel.list'));
      expect( NumConsultants.count()).toEqual(5);
  });

});
