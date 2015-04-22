// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true,
    
});

  // Init slider and store its instance in mySwiper variable
  var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination',
    paginationClickable: true,
    loop: true
  }); 

/*var tab=$('.tab');
tab.find('.tabMenu .tabMenuList').click(function(){
    var index=$(this);
    $('.tabContent .tabContentList').eq(index).show().siblings().hide();
})*/




 