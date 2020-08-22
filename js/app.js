/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
document.addEventListener('DOMContentLoaded', function(){
    //start performance time
    const t0 = performance.now(),
    //get all section element in allSectionList Variable
        allSectionList = document.querySelectorAll('section'),
        ulElement = document.getElementById('navbar__list');
    
        createLiLinks(allSectionList, ulElement);

    
    //End performance time
    const t1 = performance.now();
    
    //estimate performance
    const difference = t1-t0;
    
    console.log(`this take ${difference} millisecond`); 
});
// build the nav
function createLiLinks(allSectionList, ulElement){
    const fragmentLi = document.createDocumentFragment();
    //create for--of loop to add links to liFragment object
    for(const sectionListItem of allSectionList){
        
        const newLi = document.createElement('li');
        const newLink = document.createElement('a');
        newLink.classList.add('menu__link');
        
        newLink.textContent = sectionListItem.getAttribute('data-nav');
        //console.log(newLink.textContent);
        
        newLi.appendChild(newLink);
        fragmentLi.appendChild(newLi);
    }
    ulElement.appendChild(fragmentLi);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
