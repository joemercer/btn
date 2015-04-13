Buttons.allow({
  insert: function(userId, doc) {
  	if (!userId) {
  		return false;
  	}
  	if (!(userId === doc.userId)) {
  		return false;
  	}
  	var now = new Date();
  	doc.serverCreatedTime = now;
  	doc.serverModifiedTime = now;
    return true;
  }//,
  // remove: function(userId, doc) {
  // 	if (!userId) {
  // 		return false;
  // 	}
  //   return true;
  // },
  // update: function(userId, doc, fieldNames, modifier) {
  // 	if (!userId) {
  // 		return false;
  // 	}
  // 	if (!(userId === doc.userId)) {
  // 		return false;
  // 	}
  // 	modifier.$set = modifier.$set || {};
  // 	modifier.$set.serverModifiedTime = new Date();
  //   return true;
  // }
});

Clicks.allow({
  insert: function(userId, doc) {
    var now = new Date();
    doc.serverCreatedTime = now;
    doc.serverModifiedTime = now;
    return true;
  }//,
  // remove: function(userId, doc) {
  //   modifier.$set = modifier.$set || {};
  //   modifier.$set.serverModifiedTime = new Date();
  //   return true;
  // }
});