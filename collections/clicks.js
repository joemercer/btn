
// Click Buttons

Clicks = new Mongo.Collection('clicks');

Clicks.attachSchema(new SimpleSchema({
  buttonId: {
    type: String,
    label: "The button that was clicked"
  },
  userId: {
    type: String,
    label: "The user that clicked the button",
    optional: true
  },
  clientCreatedTime: {
    type: Date,
    label: "The time this Click was created on the client"
  }
}));