// show menu terhidden

const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

// menu show
// Validasi jika constant ada
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

// menu hidden
// validasi jika constant ada
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

//remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");
	//ketika click nav__link, akan meremove show menu class
	navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const skillsContent = document.getElementsByClassName("skills__content"),
	skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
	let itemClass = this.parentNode.className;
	for (i = 0; i < skillsContent.length; i++) {
		skillsContent[i].className = "skills__content skills__close";
	}
	if (itemClass === "skills__content skills__close") {
		this.parentNode.className = "skills__content skills__open";
	}
}

skillsHeader.forEach((el) => {
	el.addEventListener("click", toggleSkills);
});


// qualification tabs
const tabs  = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

    tabs.forEach(tab =>{
        tab.addEventListener('click',() =>{
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent =>{
                tabContent.classList.remove('qualification__active')
            })
            target.classList.add('qualification__active')

            tabs.forEach(tab =>{
                tab.classList.remove('qualification__active')
            })
            tab.classList.add('qualification__active')
        })
    })

	// Service Modal
	const modalViews = document.querySelectorAll('.services__modal'),
		  modalBtns = document.querySelectorAll('.services__button'),
		  modalCloses = document.querySelectorAll('.services__modal-close')

		  let modal = function(modalClick){
			  modalViews[modalClick].classList.add('active-modal')
		  }

		  modalBtns.forEach((modalBtn, i )=>{
			modalBtn.addEventListener('click', () =>{
				modal(i)
			})
		  })

		  modalCloses.forEach((modalClose)=>{
			  modalClose.addEventListener('click',() =>{
				  modalViews.forEach((modalView)=>{
					  modalView.classList.remove('active-modal')
				  })
			  })
		  })


	//Portofolio Swiper
	let swiperPortofolio = new Swiper(".portofolio__container", {
        cssMode: true,
		loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
		  clickable: true,
        },
      });

	//Testimonial Swiper
	let swiperTestimonial = new Swiper(".testimonial__container", {
		loop: true,
		grabCursor:true,
		spaceBetween:48,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
		  clickable: true,
		  dynamicBullets:true,
        },
		breakpoints:{
			568:{
				slidesPerView: 2,
			}
		}
      });

	//   Scroll Sections Active Link
	const sections = document.querySelectorAll('section[id]')

	function scrollActive(){
		const scrollY = window.pageYOffset

		sections.forEach(current =>{
			const sectionHeight = current.offsetHeight
			const sectionTop = current.offsetTop - 50;
			sectionId = current.getAttribute('id')

			if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
				document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add['active-link']
			}else{
				document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add['active-link']
			}
		})
	}
	window.addEventListener('scroll', scrollActive);

	// Scroll Header
	function scrollHeader(){
		const nav = document.getElementById('header')
		// Ketika scroll lebih besar dari 200 viewport height, add scroll header class
		if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
	}
	window.addEventListener('scroll', scrollHeader);
	

	//Show Scroll Up
	function scrollUp(){
		const scrollUp = document.getElementById('scroll-up');

		if(this.scrollY >= 500) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
	}
	window.addEventListener('scroll', scrollUp);

	// Dark Light Theme
	const themeButton = document.getElementById('theme-button');
	const darkTheme = 'dark-theme';
	const iconTheme = 'uil-sun';

	const selectedTheme = localStorage.getItem('selected-theme');
	const selectedIcon = localStorage.getItem('selected-icon');

	const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
	const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'bx-soon';

	if(selectedTheme) {
		document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
		themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
	}

	themeButton.addEventListener('click',()=>{
		document.body.classList.toggle(darkTheme);
		themeButton.classList.toggle(iconTheme);

		localStorage.setItem('selected-theme',getCurrentTheme());
		localStorage.setItem('selected-icon',getCurrentIcon());
	})

	//EmailJS
	function sendMail(params){
		
		let tempParams = {
			from_name:document.getElementById('fromMail').value,
			to_name:document.getElementById('toName').value,
			message: document.getElementById('msg').value,
		};

		emailjs.send('service_lebjzbx','template_nsmyqpf',tempParams)
		.then(function(res){
			console.log("success", res.status)
		})
	}

	function showNotifications(){
		// Create an instance of Notyf
	let notyf = new Notyf({
		duration: 3500,
		dismissible: true,	
	});

	// Display a success notification
	notyf.success('Thank you ! your email has sent');
	}

	let loader = document.getElementById("preloader");
	window.addEventListener("load",function(){
		loader.style.display = "none";
	})
	

