import { Template } from 'meteor/templating';
import './signUp.html';

Template.signUp.events({
  'submit form': function(e){
    e.preventDefault();

    var email = $('[name=email]').val();
    var password = $('[name=password]').val();

    Accounts.createUser({
      email: email,
      password: password
    });

    Router.go('home');
  }
});
