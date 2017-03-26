import './signIn.html';

Template.signIn.events({
  'submit .sign-in': function(e) {
    e.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Meteor.loginWithPassword(email, password, function(error) {
      if (error) {
        //handle error later
      } else {
        Router.go('home');
      }
    });
  }
});
