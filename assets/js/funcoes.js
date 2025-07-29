function openNav() {
document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}

AOS.init();

gsap.registerPlugin(SplitText);

var tl = gsap.timeline(),
mySplitText = SplitText.create("#quote", { type: "words,chars" }),
chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set("#quote", { perspective: 400 });

tl.from(chars, {
duration: 0.8,
opacity: 0,
scale: 0,
y: 80,
rotationX: 180,
transformOrigin: "0% 50% -50",
ease: "back",
stagger: 0.01
});

gsap.config({trialWarn: false});