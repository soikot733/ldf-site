document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('menu').addEventListener('click',()=>{
  document.getElementById('nav').classList.toggle('open');
});
