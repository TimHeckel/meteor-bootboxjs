Package.describe({
  name: "mizzao:bootboxjs",
  summary: "Programmatic dialog boxes using Twitter's bootstrap modals",
  version: "4.4.0",
  git: "https://github.com/TimHeckel/meteor-bootboxjs.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.0.4.2");

  api.use('jquery', 'client');
  api.use('twbs:bootstrap@3.3.4', 'client', {weak: true});
    
  api.add_files('bootbox/bootbox.js', "client");
});
