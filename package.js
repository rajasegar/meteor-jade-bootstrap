Package.describe({
  name: 'rajasegar:jade-bootstrap',
  version: '0.0.1',
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
  api.addFiles('jade-bootstrap.js');
  api.addAssets([
    'components/accordion.jade',
    'components/alerts.jade',
    'components/bootswatch.jade',
    'components/carousel.jade',
    'components/dropdowns.jade',
    'components/forms.jade',
    'components/icons.jade',
    'components/images.jade',
    'components/labels.jade',
    'components/list_groups.jade',
    'components/modal.jade',
    'components/tabs.jade'
  ],'client');
  api.addFiles([
    'components/accordion.js',
    'components/carousel.js'
  ]);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('rajasegar:jade-bootstrap');
  api.addFiles('jade-bootstrap-tests.js');
});
