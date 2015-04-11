
// buttons can be clicked
Buttons = new Meteor.Collection('buttons');
// - name
// - description
// - public :: false
// - owner
// - timestamp
// - geostamp


// each click on a button gets stored here
Clicks = new Meteor.Collection('clicks');
// - buttonId
// - userId
// - timestamp
// - geostamp