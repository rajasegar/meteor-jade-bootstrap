Package.describe({
  name: 'rajasegar:jade-bootstrap',
  version: '0.0.8',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap components written using JADE mixins for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rajasegar/meteor-jade-bootstrap.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.use(['twbs:bootstrap@3.3.5','templating','mquandalle:jade@0.4.5','reactive-var','reactive-dict'],'client');
  api.addFiles('jade-bootstrap.js');
  api.addAssets('carousel.jade','client');
  api.addAssets([
    'accordion.jade',
    'alerts.jade',
    'bootswatch.jade',
    'dropdowns.jade',
    'forms.jade',
    'icons.jade',
    'images.jade',
    'labels.jade',
    'list_groups.jade',
    'modal.jade',
    'tabs.jade'
  ],['client','server']);
  api.addFiles([
    'accordion.js',
    'carousel.js'
  ]);

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('rajasegar:jade-bootstrap');
  api.addFiles('jade-bootstrap-tests.js');
});
