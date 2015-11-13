var CAROUSELS = new ReactiveDict();


Template.carousel.created = function(){
  var carousel = {};
  carousel.id = this.data.id;
  carousel.slides = [];
  CAROUSELS.set(this.data.id,carousel);
};

Template.carousel.helpers({
  slides:function(){

    var c = CAROUSELS.get(this.id);
    return c.slides;
  },
  carousel:
  {
    parent: this.id
  }
});



Template.carousel_item.created = function(){
  var slide = {};
  var carousel = CAROUSELS.get(this.data.parent);
  console.log(this.data);
  slide.index = carousel.slides.length;
  slide.active = this.data.active || "";
  slide.parent = this.data.parent;
  carousel.slides.push(slide);
  CAROUSELS.set(this.data.parent,carousel);
  //carousel.SLIDES.set(slides);



};
