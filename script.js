const header = document.querySelector("header");
const introHeader = document.querySelector(".intro__header");
const pricingHeader = document.querySelector(".price-head");
const handHeader = document.querySelector(".hand__header");
const priceCards = document.querySelector('.price-card');
const imageContainer = document.querySelector('.moving-images');
console.log(handHeader);

const myText = new SplitType(introHeader, { type: "chars", charClass: "introChars" });
const myText2 = new SplitType(pricingHeader, {type: 'chars', charClass: 'pricingChars'})
const myText3 = new SplitType(handHeader, {type: 'chars', charClass: 'handChars'})
gsap.registerPlugin(ScrollTrigger);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.target.className == 'intro__header' && entry.isIntersecting) {
      gsap.to('.introChars', {
        opacity: 1,
        y: 0,
        stagger: 0.019,
        duration: 0.4,
      });
    }
    if (entry.target.className == 'price-head' && entry.isIntersecting){
      gsap.to('.pricingChars',{
        opacity: 1,
        y: 0,
        stagger: 0.019,
        duration: .7,
      })
    }
    if (entry.target.className == 'price-card' && entry.isIntersecting){
      gsap.to('.price-card',{
        scale: 1,
        opacity: 1,
        delay: .01,
        stagger: .1,
        duration: 1,
      })
    }
    if (entry.target.className == 'hand__header' && entry.isIntersecting){
      gsap.to('.handChars', {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
      })
    }
  });
});


gsap.to('.left-cloud', {
  x: 0,
  duration: 2,
  scrollTrigger:{
    trigger: imageContainer,
    scrub: true,
    start: 'top 80%',
    end: "top 20%",
  }
})
gsap.to('.right-cloud', {
  x: 0,
  duration: 2,
  scrollTrigger:{
    trigger: imageContainer,
    scrub: true,
    start: 'top 80%',
    end: "top 20%"
  }
})

gsap.to('body', {
  backgroundColor: '#0173fc',
  duration: 0.1,
  scrollTrigger: {
    trigger: imageContainer,
    scrub: true
  }
})

observer.observe(introHeader);
observer.observe(pricingHeader)
observer.observe(priceCards)
observer.observe(handHeader)