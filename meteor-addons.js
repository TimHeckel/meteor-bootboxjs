// Meteor specific addons to the bootbox.js object
bootbox.templateDialog = function(options) {
  var div = document.createElement("div");
  UI.insert(UI.renderWithData(kind, data), div);
  options.message = div;

  var result = bootbox.dialog(options);
  result.on('done.bootbox.modal', function (e, data) {
    var callback = options.callback;
    if (_.isFunction(callback)) callback(data);
  });
  return result;
};
