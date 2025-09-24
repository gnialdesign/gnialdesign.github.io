// ano no rodapé
    document.getElementById('y').textContent = new Date().getFullYear();

    // revelar ao rolar (continuidade + hierarquia em movimento)
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
    }, {threshold: .1});
    document.querySelectorAll('.reveal').forEach(el=> io.observe(el));