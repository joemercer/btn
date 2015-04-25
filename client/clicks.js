// these correspond to glyphicon classes
var visualData = [{
	count: 100000,
	visual: 'cloud'
}, {
	count: 10000,
	visual: 'flag'
}, {
	count: 1000,
	visual: 'home'
}, {
	count: 100,
	visual: 'heart'
}, {
	count: 10,
	visual: 'star'
}, {
	count: 1,
	visual: 'asterisk'
}];

Template.Clicks.helpers({
  count: function() {
    return this.count();
  },
  visuals: function() {
  	var x = this.count();
  	var visuals = [];

  	for (var i=0; i < visualData.length; ++i) {
  		for (var j=0; j < Math.floor(x/visualData[i].count); ++j) {
  			visuals.push(visualData[i].visual);
  		}
  		x = x % visualData[i].count;
  	}

  	return visuals;
  }
});