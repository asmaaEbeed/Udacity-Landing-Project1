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
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Define Global Variables
 * 
*/
//define sectionIdArr variable to get all section id
var sectionIdArr = new Array();


/**
 * End Global Variables

 * Begin Main Functions
 * 
*/
document.addEventListener('DOMContentLoaded', function(){
    //start performance time
    //const   t0 = performance.now();
    //get all section element in allSectionList Variable
    const allSectionList = document.querySelectorAll('section');
    const ulElement = document.getElementById('navbar__list');
    
    createLiLinks(allSectionList, ulElement);   //call createLiLinks function to create Li with its Links
    
    createTopDiv();     //Call createTopDiv to create element
    setTimeout(hideNav, 3000);
  /*  const t1 = performance.now();   //End performance time
    
    
    const difference = t1-t0;       //estimate performance
    
    console.log(`this take ${difference} millisecond`); */
});

// build nav by ul.appendchid(li) to ul and li.appendchild(a)
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

        
        //set nav link text with same text of 'data-nav' section attribute
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
        const htarget = evt.target.attributes.href.nodeValue;
        //to get target without # sign
        const targetIDOnly = htarget.slice(1);
        //for--of loop to get section that has ID equal clicked link href without #
       for(const sectionIDName of sectionIdArr){
           if(sectionIDName !== '' && targetIDOnly !==''){
               if(sectionIDName === targetIDOnly){
                   
                    evt.preventDefault();
                    const sectionPosition = document.getElementById(sectionIDName).getBoundingClientRect(),
                          topSection = window.pageYOffset;
                   //console.log(topSection + "_" + sectionPosition.top);
                   //console.log(topSection  + sectionPosition.top);
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
document.addEventListener("scroll", function(){
    showNav();
    setTimeout(hideNav, 3000);
    //Add this code to only visible when the user scrolls below the fold of the page.
    showToTop();
    //to add active class to a link in navbar according section is in viewport
    addActiveToHref();
 
});

// Build menu 

// Scroll to section on link click

// Set sections as active

/*try to add active to section in window*/

function addActiveToHref(){
    const aLinksList = document.querySelectorAll('#navbar__list a');
    //console.log(aLinksList);
    for(var sectionId of sectionIdArr){
        if(sectionId !==''){
            const sectionPosition = document.getElementById(sectionId).getBoundingClientRect();
            //removeActive(aLinksList);
            //const topWindow = window.pageYOffset;
            if(sectionPosition.top > 0  && 
               sectionPosition.bottom<window.innerHeight &&
               (sectionPosition.top-sectionPosition.bottom)<window.innerHeight){
                //console.log(sectionId +"+pageyoffset"+ window.pageYOffset+"sectionPosition.top" + sectionPosition.top);
                
                //add class active to section in viewport
                document.getElementById(sectionId).classList.add('your-active-class');
                
                //for looop to remove class active from sibling
                for(const sectionIdNotthis of sectionIdArr){
                    if(sectionIdNotthis !== sectionId)
                        document.getElementById(sectionIdNotthis).classList.remove('your-active-class');
                }
                for(const linkArr of aLinksList){
                    //console.log("link"+linkArr.getAttribute('href').slice(1)+" type " + typeof(linkArr.getAttribute('href').slice(1)));
                    //console.log("section"+sectionId + "type" + typeof(sectionId));
                    
                    //const linkref = linkArr.getAttribute('href').slice(1);
                    
                    //add class active to link that its section in viewport
                    if(linkArr.getAttribute('href').slice(1) === sectionId){
                        linkArr.classList.add('active');
                        
                    } else{
                        //remove class active from sibling link
                        linkArr.classList.remove('active');
                    }
                
            }
            } 
        }
    }
}
//remove active class from all link

/*to top button*/
//creat a scroll to top button
function createTopDiv(){
    const divToTop = document.createElement('div');
    divToTop.textContent = "TOP";
    divToTop.setAttribute('id', 'goTop');
    divToTop.style.cssText = 'font-size: 25px; font-family: monospace; position: fixed; bottom: 10px; right: 10px; background-color: #7ebda3; padding: 18px 14px; box-shadow: 2px 2px 0 #fff; border-radius: 50%; cursor: pointer; display: none;';
    
    document.body.appendChild(divToTop);
    
    //call function gototop when click on top
    goToTop(divToTop);
    
}

function goToTop(divTopObj){
    divTopObj.addEventListener('click', function(){
        window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
            });
    });
}
//create showToTop() function to only visible when the user scrolls below the fold of the page. 
function showToTop(){
    const goTopElement = document.getElementById('goTop');
    if(window.pageYOffset < 400){
        goTopElement.style.display = 'none'
    } else
        goTopElement.style.display = 'block'
}

//show and hide navbar__List
function showNav() {
        const navbarMenu = document.getElementById('navbar__list');
        navbarMenu.style.display = 'block';
        setTimeout(hideNav, 3000);

}  
function hideNav() {
        const navbarMenu = document.getElementById('navbar__list');
        navbarMenu.style.display = 'none';
}  

    



