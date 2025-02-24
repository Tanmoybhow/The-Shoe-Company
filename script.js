const bar = document.querySelector('#bar');
const arrow = document.querySelector('#arrow');
const toggleMenu = document.querySelector('#toggle-menu');

bar.addEventListener('click',()=>{
    toggleMenu.style.width = '180px';
    toggleMenu.style.paddingBlock  = '32px';
    toggleMenu.style.paddingInline  = '16px';
    bar.style.display  = 'none';
    
    
})
arrow.addEventListener('click',()=>{
    toggleMenu.style.width = '0px';
    toggleMenu.style.paddingBlock  = '0px';
    toggleMenu.style.paddingInline  = '0px';
    bar.style.display  = 'block';
});

toggleMenu.addEventListener('click',(e)=>{
   if(e.target.hasAttribute('href'))
   {
    toggleMenu.style.width = '0px';
    toggleMenu.style.paddingBlock  = '0px';
    toggleMenu.style.paddingInline  = '0px';
    bar.style.display  = 'block';
   }
})