FlowRouter.route('/',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{main:'home'});
  }
});

FlowRouter.route('/icons',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{main:'icon_example'});
  }
});


FlowRouter.route('/alerts',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{main:'alert_example'});
  }
});


FlowRouter.route('/tabs',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{main:'tabs_example'});
  }
});


FlowRouter.route('/accordion',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{main:'accordion_example'});
  }
});

FlowRouter.route('/carousel',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{main:'carousel_example'});
  }
});

FlowRouter.route('/dropdown',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{main:'dropdown_example'});
  }
});

FlowRouter.route('/forms',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{main:'forms_example'});
  }
});

FlowRouter.route('/images',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{main:'images_example'});
  }
});

FlowRouter.route('/labels',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{main:'labels_example'});
  }
});

FlowRouter.route('/listgroups',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{main:'listgroups_example'});
  }
});

FlowRouter.route('/modal',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{main:'modal_example'});
  }
});
