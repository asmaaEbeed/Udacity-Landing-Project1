first build dynamic navbar according to section in the page.
start code to build navbar after Dom loaded using 'DOMContentLoaded' eventlistener to ensure that all section loaded and added to navbar
then invoke createLiLinks() function
construct createLiLinks() function with two argument first is sectionList and second ulElement.
create fragmentLi variable from createDocumentFragment() to not affected on decument and dont cause reflow and repaint each time we loop.
create for--of loop to loop in section list and in every loop it create li and a link abd add class menu__link to each a link
use data-nav attribute text to add to links
use appendChild() function to add each link to its li.
use appendChild() function to add each li to fragmentLi 

after end for--of loop add fragmentLi to  ulElement.
