import { Router } from 'meteor/iron:router';
import '../imports/ui/body.js';
import '../imports/ui/landingPageTemplate.js';
import '../imports/ui/layout.js';
import '../imports/ui/auth/signUp.js';
import '../imports/ui/auth/signIn.js';


Router.onBeforeAction(function () {
  if (Meteor.userId()) {
    Router.go('home');
  }

  this.next();
}, {
  only: ['signUp', 'signIn']
});

Router.route('/', function () {
  this.layout('layout');
  this.render('LandingPageTemplate');
}, {
  name: 'home'
});

Router.route('/sign_up', function () {
  this.layout('layout');
  this.render('signUp');
}, {
  name: 'signUp'
});

Router.route('/sign_in', function () {
  this.layout('layout');
  this.render('signIn');
}, {
  name: 'signIn'
});
