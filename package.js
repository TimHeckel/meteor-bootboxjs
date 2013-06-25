Package.describe({
    summary: "Programmatic dialog boxes using Twitter's bootstrap modals"
});

Npm.depends({bootbox: "3.2.0"});

Package.on_use(function (api) {
    api.use('bootstrap', 'client');
    api.use('jquery', 'client');

    api.add_files('.npm/node_modules/bootbox/bootbox.min.js', 'client');
});
