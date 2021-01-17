let burger = $('.burger')
let menu = $('.hidden__menu')
burger.click(function (event) {
    $('.burger, .hidden__menu').toggleClass('active')
})
$(window).on('load', function (event) {
    $('.burger, .hidden__menu').removeClass('active')
})
$(window).on('resize', (function (event) {
    let width = $(window).innerWidth()
    if (width > 768) {
        $('.burger, .hidden__menu').removeClass('active')
    }
}))
