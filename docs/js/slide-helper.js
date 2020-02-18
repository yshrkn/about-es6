var slideHelper = (function() {

  var jqueryMap = {};
  var stateMap = {
    breadCrumbs: []
  }

  /**
   *
   */
  function updateBreadCrumb(slide) {
    var breadCrumbData = $(slide).find('[data-breadcrumb]');
    var breadCrumbString = breadCrumbData.data('breadcrumb');
    var braedCrumbList = breadCrumbString ? breadCrumbString.split(",") : [];
    var $listItems = jqueryMap.$breadCrumb.find(".frk-breadcrumb__item");
    var numNewItemsRequired = braedCrumbList.length - $listItems.length;

    if (Reveal.isFirstSlide()) {
      jqueryMap.$breadCrumb.removeClass("is-visible");
    } else {
      jqueryMap.$breadCrumb.addClass("is-visible");
    }

    // とりあえず全部fade-out指定
    $listItems.addClass("fade-out");

    // 足りない数だけ<li>を追加
    if (numNewItemsRequired > 0) {
      for (var i = 0; i < numNewItemsRequired; i++) {
        $("<li class='frk-breadcrumb__item'></li>").appendTo(jqueryMap.$breadCrumb);
      }
    }

    // 表示するアイテムはfade-in指定
    $listItems = jqueryMap.$breadCrumb.find(".frk-breadcrumb__item");
    for (var i = 0; i < braedCrumbList.length; i++) {
      $listItems.eq(i).removeClass('fade-out').addClass('fade-in').text(braedCrumbList[i])
    }
  }

  /**
   *
   */
  function onSlideChange(event) {
    updateBreadCrumb(event.currentSlide);
  }

  (function init() {
    jqueryMap.$breadCrumb = $('#js-breadcrumb');
    Reveal.addEventListener('slidechanged', onSlideChange);
    //updateBreadCrumb(Reveal.getCurrentSlide());
  }());

  return {
    updateBreadCrumb: updateBreadCrumb
  }

}());
