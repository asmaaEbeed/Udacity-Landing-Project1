# Front End Nanodegree Program 1st Project

Front End Nanodegree Landing Project, 
This Project code created by pure JavaScript Code without any Jquery Library or any other external Library.

## Getting Started

It was A Big Challenge to me to write this code with PURE JAVASCRIPT code ONLY.....

Without need any other library as jquery

### Project Concept

* Build Navigation is built dynamically as an unordered list.
* Section active state to show which section is being viewed while scrolling through the page.
* When clicking an item from the navigation menu, the link should scroll to the appropriate section. 
* Add an active state to your navigation items when a section is in the viewport.
* Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.
* Hide fixed navigation bar while not scrolling.
* Make sections collapsible.

### Code Idea

#### Build Nav dynamic

* first build dynamic navbar with links according to number of section in the page.

* Make sure that build dynamic nav code start after Dom loaded using ```DOMContentLoaded``` eventlistener to ensure that all section loaded and added to navbar.

* invoke ```createLiLinks(listOfAllSection, ulId)``` function with two argument.
    - this function create ```<li>``` and append child ```<a>``` to it, and give link href attribute according section ID,
    use data-nav attribute to get text to link.
    - then append all ```<li>``` to ```<ul>``` at one time to prevent reflow using ```createDocumentFragment()```.

#### click on link make Scroll to anchor ID using scrollTO event

* Fire this event when 'Click' on nav link using ```addEventListener('click', function(){})```.

* Get href Attribute without # sign to compare it with section ID passing event to get which Link is Clicked,
and ensure the clicked is on link element.

* Get the section position by ```.getBoundingClientRect()``` function and ```window.pageYOffset``` then ```window.scrollTo``` to
section position with smooth scroll

#### createTopDiv

* Add this div to DOM with its style and make it hide to scroll to top when user scrolls below the fold of the page 
using ```createTopDiv()``` function that invoke after DOMContentLoaded.

* When document scroll event fire it call function ```showToTop()``` to make this div only visible when the user scrolls below the fold of the page.

* Then invoke ```goToTop()``` to go to top of window when Click event is fire.

#### Add Active class to navigation links when its section is in the viewport & add active class to section in viewport.

* ```.getBoundingClientRect()``` of all sections during we scroll with For--Of Loop.

* check if ```sectionPosition.top``` , ```sectionPosition.bottom``` is in viewport, then add class active to this section and remove this class from sibling, and make for--loop to get links with attribute is same to id of this section then add class active to this link  and remove this class from sibling.

#### Hide fixed navigation bar while not scrolling
* create two function ```showNave()``` & ```hideNave()``` to make nav element display block or none.

* create function ```showNavATScroll()``` detect event if page scroll invoke showNav function then it invoke hideNav function after 3 sec using setTimeOut but sure first timer is ended.

#### make selection collapse

by toggle('collapse') class to the div that contain all p in section.
  


