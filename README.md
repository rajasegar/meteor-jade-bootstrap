Bootstrap Components written using JADE mixins for Meteor
==================

[Bootstrap](http://getbootstrap.com/) using [Jade](http://jade-lang.com) packaged for [Meteor](https://www.meteor.com)

## Install

```bash
$ meteor add rajasegar:jade-bootstrap
```


## Usage

Complete documentation for this Meteor package is not available yet. You can refer to the original project documentation for [JADE-Bootstrap](http://rajasegar.github.io/JADE-Bootstrap/) here

## Alerts

```bash
Alerts
+alert(type="info" message="This is an info alert")
+alert(type="warning" message="This is a warning alert")
+alert(type="danger" message="This is a danger alert")
+alert(type="success" message="This is a success alert")
Alerts with icons
+alert_i(type="info" message="This is an info alert" icon="info-sign")
+alert_i(type="warning" message="This is a warning alert" icon="exclamation-sign")
+alert_i(type="danger" message="This is a danger alert" icon="remove-sign")
+alert_i(type="success" message="This is a success alert" icon="ok")
Dismissible Alerts
+alert_x(type="info" message="This is an info alert")
+alert_x(type="warning" message="This is a warning alert")
+alert_x(type="danger" message="This is a danger alert")
+alert_x(type="success" message="This is a success alert")
Disimissible Alerts with icons
+alert_ix(type="info" message="This is an info alert" icon="info-sign")
+alert_ix(type="warning" message="This is a warning alert" icon="exclamation-sign")
+alert_ix(type="danger" message="This is a danger alert" icon="remove-sign")
+alert_ix(type="success" message="This is a success alert" icon="ok")
```
# Accordions

```bash
+accordion(id="myAccordion")
  +accordion_item(type="primary" parent="myAccordion" title="My Title1" expanded="true")
    h2 This is accordion content
  +accordion_item(type="success" parent="myAccordion" title="My Title2")
    h2 This is accordion content
```

## Carousel
```bash
h1 Carousel
+carousel(id="myCarousel")
  +carousel_item(parent="myCarousel" image="slide1.jpg" active="active")
    +carousel_caption
      |  My carousel caption#1
  +carousel_item(parent="myCarousel" image="slide2.jpg")
    +carousel_caption
      |  My carousel caption#2
  +carousel_item(parent="myCarousel" image="slide3.jpg")
    +carousel_caption
      | My carousel caption#3


h1 Another Carousel
+carousel(id="myCarousel2")
  +carousel_item(parent="myCarousel2" image="slide5.jpg" caption="My Carousel caption#3" active="active")
  +carousel_item(parent="myCarousel2" image="slide6.jpg" caption="My Carousel caption#3")
  +carousel_item(parent="myCarousel2" image="slide7.jpg" caption="My Carousel caption#3")

```
## Dropdowns
```bash
Dropdowns
+dropdown(caption="My dropdown")
  +dropdown_link(url="#" title="Apple")
  +dropdown_link(url="#" title="Oranges")
  +dropdown_link(url="#" title="Banana")
  +dropdown_separator
  +dropdown_link(url="#" title="Another Apple")
Dropups
+dropup(caption="My dropup")
  +dropdown_link(url="#" title="Apple")
  +dropdown_link(url="#" title="Oranges")
  +dropdown_link(url="#" title="Banana")
  +dropdown_separator
  +dropdown_link(url="#" title="Another Apple")
```

## Forms
```bash
h1 Forms
+input(id="txtName" label="Name" type="text" placeholder="Enter your name")
+input(id="txtPassword" label="Password" type="password" placeholder="Enter your password")
+input(id="txtEmail" label="Email" type="email" placeholder="Enter your email")
+input(id="txtUrl" label="Url" type="url" placeholder="http://")
h3 Simple Input
+input_simple(id="txtEmail" label="Email" type="email" placeholder="Enter your email")
h3 Checkbox
+checkbox(text="Email")
+checkbox(text="SMS")
h3 Checkbox-Inline
+checkbox_inline(text="Email")
+checkbox_inline(text="SMS")
h3 Radio
+radio(text="Yes" name="radOptions")
+radio(text="No" name="radOptions")
h3 Radio-Inline
+radio_inline(text="Yes" name="rad2")
+radio_inline(text="No" name="rad2")
+submit(text="Register")
h3 Input groups
+input_group
  span.input-group-addon @
  +input_simple(id="txtEmail" label="Email" type="email" placeholder="Enter your email")
+input_group
  +input_simple(id="txtEmail" label="Email" type="email" placeholder="Enter your email")
  span.input-group-addon @example.com
h3 Badges
+badge(text="42")
```


## Glyphicons
```bash
h1 Glyphicons
+icon(name="search")
+icon_info(name="search")
+icon_warning(name="search")
+icon_primary(name="search")
+icon_danger(name="search")
+icon_success(name="search")
```

## Labels
```bash
h1 Labels
+label(type="default" text="Default Label")
+label_default(text="Default Label")
+label_primary(text="Primary Label")
+label_info(text="Info Label")
+label_warning(text="Warning Label")
+label_success(text="Success Label")
+label_danger(text="Danger Label")
```

## List groups
```bash
h1 List Group
p
  | List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.
h2 Basic Example
p
  | The most basic list group is simply an unordered list with list items, and the proper classes. Build upon it with the options that follow, or your own CSS as needed.
.col-md-6
  +list_group
    +list_group_item
      | Cras justo odio
    +list_group_item
      | Cras justo odio
    +list_group_item
      | Cras justo odio
    +list_group_item
      | Cras justo odio
    +list_group_item
      | Cras justo odio
.clearfix
h2 Badges
p
  | Add the badges component to any list group item and it will automatically be positioned on the right.
.col-md-6
  +list_group
    +list_group_item
      span.badge 14
      | Cras justo odio
    +list_group_item
      span.badge 2
      | Dapibus ac facilisis in
    +list_group_item
      span.badge 1
      | Morbi leo risus

.clearfix

h2 Linked items
p
  | Linkify list group items by using anchor tags instead of list items (that also means a parent &lt;div&gt; instead of an &lt;ul&gt;). No need for individual parents around each element.
.col-md-6
  +list_group_links
    +list_group_link(url="#" active="active")
      | Cras justo odio
    +list_group_link(url="#")
      | Cras justo odio
    +list_group_link(url="#")
      | Cras justo odio
.clearfix
h2 Button items
p
  | List group items may be buttons instead of list items (that also means a parent &lt;div&gt; instead of an &lt;ul&gt;). No need for individual parents around each element. Don't use the standard .btn classes here.
.col-md-6
  +list_group_links
    +list_group_btn
      | Cras justo odio
    +list_group_btn
      | Cras justo odio
    +list_group_btn
      | Cras justo odio
    +list_group_btn
      | Cras justo odio
    +list_group_btn
      | Cras justo odio
```

## Modal
```bash
h1 Modal Dialog
button(type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal") Launch demo modal
+modal(id="myModal" title="My Sample Modal")
  | This is modal content
```

## Tabs
```bash
h1 Tabs
+tabs
  +nav_tabs
    +tab_link(title="Home" url="#Home" active="active")
    +tab_link(title="Profile" url="#Profile")
    +tab_link(title="Settings" url="#Settings")
  +tab_content
    +tab_panel(id="Home" active="active")
      h1 This is home content
    +tab_panel(id="Profile")
      h2 This is profile content
    +tab_panel(id="Settings")
      h2 This is Settings tab
```

[JADE-Bootstrap](http://rajasegar.github.io/JADE-Bootstrap/)
