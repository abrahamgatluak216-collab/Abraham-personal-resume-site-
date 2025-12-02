
// Smooth scroll for internal links and simple focus management
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      var id = this.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if(el){ el.scrollIntoView({behavior:'smooth',block:'start'}); el.focus({preventScroll:true}); }
    });
  });
});
