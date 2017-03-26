import './layout.html';

Template.layout.onRendered(function () {
  $(".button-collapse").sideNav({
    edge: 'right',
    closeOnClick: true,
    draggable: true
  });
});

Template.layout.events({
  'click .sign-out': function(e) {
    e.preventDefault();
    Meteor.logout();
    Router.go('home');
  }
});
