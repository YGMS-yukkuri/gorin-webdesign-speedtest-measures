const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("looked")
            obs.unobserve(entry.target);
        }
    }) 
}, {
threshold: 0.2
})

cards.forEach(elem => {
    observer.observe(elem)
})