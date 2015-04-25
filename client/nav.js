

Template.Nav.helpers({
  activeIfTemplateIs: function(template) {
    var currentRoute = Router.current();
    return currentRoute &&
      template === currentRoute.lookupTemplate() ? 'active' : '';
  }
});

Session.set('searchValue', '');

Template.Nav.events({
  'keyup .button-search': function(e) {
    var value = $(e.target).val();
    Session.set('searchValue', value);
  }
});


AutoForm.hooks({
  insertButtonForm: {
    before: {
      insert: function(doc) {
        doc.userId = Meteor.userId();
        var now = new Date();
        doc.clientCreatedTime = now;
        return doc;
      }
    },
    onSuccess: function(formType, result) {
    	$('#create-button').modal('hide');
    }
  }
});