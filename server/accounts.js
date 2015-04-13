


// hook that runs when a user is created
// we're just copying over the twitter handle to use as a display name
Accounts.onCreateUser(function(options, user) {
  if (options.profile) {
    user.profile = options.profile;
  }
  if (user.services.twitter) {
  	user.profile.handle = user.services.twitter.screenName;
  }
  return user;
});




Meteor.startup(function () {
  // code to run on server at startup
});