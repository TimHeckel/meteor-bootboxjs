Package.describe({
  summary: "Programmatic dialog boxes using Twitter's bootstrap modals",
  version: "4.3.0",
  git: "https://github.com/TimHeckel/meteor-bootboxjs.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR-CORE@0.9.0-atm");

  api.use('jquery', 'client');
  api.add_files('lib/bootbox.js', "client");
});
