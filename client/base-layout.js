
// animations from:
// https://github.com/percolatestudio/meteor-momentum

Template.BaseLayout.helpers({
	transition: function() { 
		return function(from, to, element) {
  		return 'slide-height';
		}
	}
});