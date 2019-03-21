function main(){
  // $('body>h1').hide()
  // $('.bio').hide()
  // $('.bio').fadeIn(1000)
  $('.bio').hide().fadeIn(1000)
  $('.items').hide()

  $('.button').on('click', function(event) {
    // $('.items').slideToggle(400)
    // $('.button').toggleClass('active')
    // $('.button').text('Viewed')

    $(this).toggleClass('active')
    // $(this).text('Viewed')
    $(event.currentTarget).next().slideToggle(400)
  })
}

$(document).ready(main)
