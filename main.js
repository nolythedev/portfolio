$('.showfilters').on('click', function() {
    // If filters os collapsed, expand on click
    if ($('.filters-list').is(':visible')) {
      $('.filters-list').slideUp()
      $('.showfilters').text('Show Filters')
    } else {
      // if filters list is expanded, collapse on click
      $('.filters-list').slideDown()
      $('.showfilters').text('Hide Filters')
    } 
    return false;
    // prevents # from jumping up to the top of the page
  });
  
  $('.filters-list a').on('click', function() {
  var filter = $(this).attr('data-filter')
   
  //hides all the products
  $('.work').hide()
  // will show the clicked 
  $(filter).show()
  //adds class name of selected to the current filter that has been clicked on 
  $('.filters-list a').removeClass('selected')
  $(this).addClass('selected')
    
    // prevents following the href
    return false;
  });



let circle = document.getElementById('circle');
  const onMouseMove = (e) =>{
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
  }
  document.addEventListener('mousemove', onMouseMove);