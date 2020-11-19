let $topbarHeight = document.querySelector('.topbar').scrollHeight  

// detect the page you're on
let $currentPage = window.location.pathname
console.log(`current page is ${$currentPage}`)

if (window.location.pathname != "/index.html") {
    console.log(`not on index`)
} else {
    console.log(`on index`)
    scroll(0,0)
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
        let $sectionPosition = ($clickedSection.getBoundingClientRect().top - $topbarHeight) + window.scrollY 

        // smooth scroll to correct position
        window.scrollTo({
            top: $sectionPosition, 
            left: 0, 
            behavior:'smooth'
        })

        
    })
})
