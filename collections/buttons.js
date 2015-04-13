
// Buttons can be clicked

Buttons = new Mongo.Collection('buttons');

Buttons.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name your Button",
    min: 3,
    max: 50
  },
  description: {
    type: String,
    label: "What is your Button for?",
    max: 1000,
    autoform: {
    	rows: 2
  	}
  },
  'public': {
    type: Boolean,
    defaultValue: false,
    label: "Make your Button public"
  },
  userId: {
    type: String,
    label: "The User that created this Button (owner of the Button)",
  },
  clientCreatedTime: {
    type: Date,
    label: "The time this Button was created on the client"
  }//,
  // geostamp: {
  //   type: String,
  //   label: "The location where this Button was created",
  //   optional: true
  // }
}));