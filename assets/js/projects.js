$(document).ready(function () {
  var $grid = $(".isotope").isotope({
    itemSelector: ".item",
    layoutMode: "fitRows",
  });

  $(".filter-options").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });

    $(".filter-options li").removeClass("active");
    $(this).addClass("active");
  });

  $(".item").hover(
    function () {
      $(this).find(".isotope-overlay").css("transform", "translateY(0)");
    },
    function () {
      $(this).find(".isotope-overlay").css("transform", "translateY(100%)");
    }
  );
});
