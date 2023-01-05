// ==================ACTIVE LINK=======================

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


// =========================scrollreveal=======================================

const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	reset: true
})

sr.reveal(`.home_title`)
sr.reveal(`.the`, {delay: 400, origin: 'left'})
sr.reveal(`.argo`, {delay: 500, origin: 'right'})
sr.reveal(`.three`, {delay: 600, origin: 'left'})
sr.reveal(`.moderator`, {delay: 400})
sr.reveal(`.about_us`, {delay: 500})
sr.reveal(`.logo`, {delay: 300, origin: 'bottom'})
// sr.reveal(`.nav_menu`, {origin: 'top'})
sr.reveal(`.vid_title`)
sr.reveal(`.vid_link`, {delay: 400})
sr.reveal(`.mod_title`)
sr.reveal(`.card_container`, {delay: 400})