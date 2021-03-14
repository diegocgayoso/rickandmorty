const bg = document.getElementById("bg");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    bg.style.backgroundPositionY = offset * 0.7 + "px";
    
});

document.addEventListener('mousemove',parallax); 
function parallax(e) {
    this.querySelectorAll('.logo').
        forEach(logo => {
            var speed = logo.getAttribute('data-speed')
            var x = (window.innerWidth -
                e.pageX * speed)/100
            var y = (window.innerWidth -
                e.pageY * speed) / 100
            logo.style.transform = `
        translateX(${x}px)
        translateY(${y}px)`
        // let offset = window.pageYOffset;
        // parallax.style.backgroundPositionY = offset * 0.7 + "px";
        });
}