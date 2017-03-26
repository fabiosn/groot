import { Router } from 'meteor/iron:router';
import '../imports/ui/body.js';
import '../imports/ui/landingPageTemplate.js';
import '../imports/ui/layout.js';
import '../imports/ui/auth/signUp.js';
import '../imports/ui/auth/signIn.js';


Router.route('/', function () {
  this.layout('layout');
  this.render('LandingPageTemplate');
});

Router.route('/sign_up', function () {
  this.layout('layout');
  this.render('signUp');
});

Router.route('/sign_in', function () {
  this.layout('layout');
  this.render('signIn');
});
