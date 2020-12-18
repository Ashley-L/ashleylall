let $topbarHeight = document.querySelector('.topbar').scrollHeight 
let mediaQuery320 = window.matchMedia('(min-width: 320px)')
let mediaQuery768 = window.matchMedia('(min-width: 768px)')
let mediaQuery1024 = window.matchMedia('(min-width: 1024px)')


// detect the page you're on
let $currentPage = window.location.pathname
console.log(`current page is ${$currentPage}`)

if (window.location.pathname != "/index.html") {
    console.log(`not on index`)
    scroll(0,0)
} else {
    console.log(`on index`)
    
}

////////////////////////
// SCROLL-TO SECTIONS //
////////////////////////
let $sectionLink = document.querySelector('.sectionLink')
let $sectionLinkAll = document.querySelectorAll('.sectionLink')

$sectionLinkAll.forEach($sectionLink => {
    $sectionLink.addEventListener('click', event => {
        event.preventDefault();
        
        // test click
        // console.log(`clicked`)

        // get the link you clicked (href)
        let $clickedSectionLink = $sectionLink.getAttribute('href')
        console.log($clickedSectionLink);

        // get the section of the link you clicked 
        let $clickedSection = document.querySelector($clickedSectionLink)
        // console.log($clickedSection)

        // adjust for topbar height
        let $sectionPosition = ($clickedSection.getBoundingClientRect().top) + window.scrollY 
        let $sectionPositionMobile = ($clickedSection.getBoundingClientRect().top-$topbarHeight) + window.scrollY 

        // smooth scroll to correct position
        if (mediaQuery768.matches) {
            window.scrollTo({
                top: $sectionPosition, 
                left: 0, 
                behavior:'smooth'
            })
        } else {
            window.scrollTo({
                top: $sectionPositionMobile, 
                left: 0, 
                behavior:'smooth'
            }) 
        }


        if (mediaQuery1024.matches) {
            window.scrollTo({
                top: $sectionPosition, 
                left: 0, 
                behavior:'smooth'
            })
        } else {
            window.scrollTo({
                top: $sectionPositionMobile, 
                left: 0, 
                behavior:'smooth'
            }) 
        }



        
    })
})




///////////////
// SCROLLSPY //
///////////////

// basically if your scroll position is w/in a section,
// change the colour of the nav link to blue

