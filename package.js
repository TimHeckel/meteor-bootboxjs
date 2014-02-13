Package.describe({
    summary: "Programmatic dialog boxes using Twitter's bootstrap modals"
});

Package.on_use(function (api) {
    api.use(['bootstrap-3', 'jquery'], 'client');
    api.add_files('lib/bootbox.js', "client");
});
