window.addEventListener('load', function(){ 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $('.preloader').fadeOut(300);

    AOS.init()
})

$('.tabela-interativa').on('mouseover', function(){

  $(this).removeClass('fechada')
})

$('.tabela-interativa').on('mouseout', function(){

  $(this).addClass('fechada')
})
