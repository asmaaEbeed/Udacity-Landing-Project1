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
var sectionIdArr = new Array()

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
        
        newLink.setAttribute("href", `#${sectionListItem.getAttribute('id')}`);
        //get all section id in sectionIDArr variable
        sectionIdArr.push(sectionListItem.getAttribute('id'));
        
        newLink.textContent = sectionListItem.getAttribute('data-nav');
        //console.log(newLink.textContent);
        
        newLi.appendChild(newLink);
        fragmentLi.appendChild(newLi);
    }
    
    ulElement.appendChild(fragmentLi);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
document.querySelector('#navbar__list').addEventListener('click', function(evt){
    if(evt.target.nodeName === 'A'){
        console.log("href was clicked"+evt.target.textContent);
        const htarget = evt.target.attributes.href.nodeValue;
        //to get target without # sign
        const targetIDOnly = htarget.slice(1);
        //for--of loop to get section that has ID equal clicked link href with #
       for(const sectionIDName of sectionIdArr){
           if(sectionIDName !== '' && targetIDOnly !==''){
               if(sectionIDName === targetIDOnly){
                   
                    evt.preventDefault();
                    console.log(sectionIDName + targetIDOnly);
                   //const sectionPosition = document.sectionIDName.getBoundingClientRect();
                    const sectionPosition = document.getElementById(sectionIDName).getBoundingClientRect(),
                          topSection = window.pageYOffset;
                   window.scrollTo({
                      top: sectionPosition.top + topSection,
                      behavior: 'smooth'
                    });
               }
           }
       }
    }
});
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
