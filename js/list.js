var portfolio = [
  {
    name: 'hyundai motors genesis x biff',
    image: 'img/how_to1.png'
  },
  {
    name: 'FY16 NIKE KOREA',
    image: 'img/how_to2.png'
  },
  {
    name: 'ODYSSEY blue energy',
    image: 'img/how_to3.png'
  }
]




var list = document.querySelector('.main-carousel');


for (var i = 0; i < portfolio.length; i++) {
  appendListItemWithPortfolio(portfolio[i]);
  //toSetImg(portfolio[i]);
}

function appendListItemWithPortfolio(portfolio) {
  var listItem = document.createElement("li");
  listItem.classList.add('portfolio-list-item');

/*
  // <div class="portfolio-list-item__name">...</div>
  var portfolioName = document.createElement("div");
  portfolioName.classList.add('portfolio-list-item__name');
  portfolioName.innerHTML = portfolio.name;

 */

  var portfolioBg = document.createElement("div");
  portfolioBg.classList.add('portfolio-list-item__bg');
  portfolioBg.innerHTML = portfolio.image;
  toSetImg(portfolio);

  //jQuery('.portfolio-list-item__bg').css({"background": "url(" + portfolio.image + ")", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'cover'});

  function toSetImg(portfolio) {
    $('.portfolio-list-item__bg').css({"background": "url(" + portfolio.image + ")", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'cover'});
  }




  //listItem.append(portfolioName);
  listItem.append(portfolioBg);
  list.append(listItem);

}





/*

(function($){
  $(document).ready(function(){

    for (var i = 0; i < portfolio.length; i++) {
      toSetFirstImg(portfolio[i]);
    }
    function toSetFirstImg(portfolio) {
      $('.portfolio-list-item__bg').css({"background": "url(" + portfolio.image + ")", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'cover'});
    }


    var $gallery = $('.main-carousel').flickity();
    $gallery.on( 'select.flickity', function( event, index ) {
      for (var now_page = 0; now_page < portfolio.length; now_page++) {
        toSetImg(portfolio[index]);
        function toSetImg(portfolio) {
          $('.portfolio-list-item__bg').css({"background": "url(" + portfolio.image + ")", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'cover'});
        }
      }
    });


  });
})(jQuery)
*/



