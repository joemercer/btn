Template.Button.onRendered(function(){
  this.subscribe('allClicksFor', this.data);
});

Template.Button.helpers({
  clicks: function() {
    return Clicks.find({
      buttonId: this._id
    });
  },
  count: function() {
    return Clicks.find({
      buttonId: this._id
    }).count();
  }
});

var click = _.debounce(function(x){
  Clicks.insert({
    buttonId: x._id,
    userId: Meteor.userId(),
    clientCreatedTime: new Date()
  });
}, 1000, true);


Template.Button.events({
  'click .button-button': function(e){
    click(this);
  }
});


// !!! to delete button will need to add permission on server