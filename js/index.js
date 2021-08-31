const navigationLinks = document.querySelectorAll(".nav-link");
navigationLinks.forEach(link => link.addEventListener('mouseover', ()=>link.style.color="blue"));
navigationLinks.forEach(link => link.addEventListener('mouseout', ()=>link.style.removeProperty("color")));
document.addEventListener('keydown', (event) => {if(event.key==="Enter") document.body.scrollIntoView(false);});
