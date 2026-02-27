
document.querySelectorAll('.gallery img').forEach(img=>{
 img.onclick=()=>{
  const bg=document.createElement('div');
  bg.style='position:fixed;inset:0;background:rgba(0,0,0,.8);display:flex;align-items:center;justify-content:center';
  const i=img.cloneNode();
  i.style='max-width:90%;max-height:90%';
  bg.onclick=()=>bg.remove();
  bg.appendChild(i);
  document.body.appendChild(bg);
 }
});

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

document.querySelectorAll("[data-lightbox]").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    lightboxImg.src = item.getAttribute("href");
    lightbox.classList.add("show");
  });
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox || e.target === closeBtn) {
    lightbox.classList.remove("show");
    lightboxImg.src = "";
  }
});
