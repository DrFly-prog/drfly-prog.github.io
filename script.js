// === Intro ===
function endIntro(){
  const intro=document.getElementById('intro');
  if(!intro)return;
  intro.classList.add('gone');
  document.body.classList.remove('intro-active');
  setTimeout(()=>intro.remove(),900);
}
const introEl=document.getElementById('intro');
if(introEl){
  const introTimeout=setTimeout(endIntro,3700);
  const skipBtn=document.querySelector('.skip');
  if(skipBtn)skipBtn.addEventListener('click',()=>clearTimeout(introTimeout));
  if(sessionStorage.getItem('drfly-intro')){
    introEl.remove();
    document.body.classList.remove('intro-active');
    clearTimeout(introTimeout);
  }else{
    sessionStorage.setItem('drfly-intro','1');
  }
}

// === Nav scroll ===
const nav=document.getElementById('nav');
if(nav){
  window.addEventListener('scroll',()=>{
    if(window.scrollY>40)nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
}

// === Reveal on scroll ===
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
