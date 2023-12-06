// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('.navigator a');
// forEach(link => {
//    if(link.href.includes(`${activePage}`)){
//    link.classList.add(':active');
//    }
// })

document.querySelectorAll('.nav-link').forEach(link => {
    if(link.href === window.location.href){
      link.setAttribute('aria-current', 'page')
    }
  })

  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav-link");
  window.onscroll = () => {
    sections.forEach(sec =>{
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      if (top >= offset && top < offset + height){
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector(`[href*='#${id}']`).classList.add("active");
        }  
          )

      };
    })
  }