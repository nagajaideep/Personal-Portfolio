/* filepath: /d:/Personal-Portfolio-Jaideep/assets/js/progress.js */
$(document).ready(function () {
  // Set initial width of progress bars on page load
  initProgressBars();

  // Check if element is in viewport and animate if needed
  function initProgressBars() {
    $(".progress-bar").each(function () {
      var percent = $(this).attr("data-percent");
      $(this).css("width", percent + "%");

      // Make sure the skill count is visible
      var skillCount = $(this).find(".skill-count");
      skillCount.text(percent + "%");
    });
  }

  // On scroll, check for skills section visibility
  $(window).scroll(function () {
    var skillsSection = $("#skills");

    if (isElementInViewport(skillsSection[0])) {
      if (!skillsSection.hasClass("animated")) {
        skillsSection.addClass("animated");
        animateProgressBars();
      }
    }
  });

  // Check if skills section is visible on page load
  if (isElementInViewport($("#skills")[0])) {
    $("#skills").addClass("animated");
    animateProgressBars();
  }

  // Helper function to check if element is in viewport
  function isElementInViewport(el) {
    if (!el) return false;
    var rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  // Animate progress bars from 0 to target percentage
  function animateProgressBars() {
    $(".progress-bar").each(function () {
      var $this = $(this);
      var percent = $this.attr("data-percent");

      $this.css("width", "0%").animate(
        {
          width: percent + "%",
        },
        1500,
        "easeOutQuart"
      );

      // Animate skill count number
      var countElement = $this.find(".skill-count");
      var countValue = parseInt(percent);

      $({ countNum: 0 }).animate(
        {
          countNum: countValue,
        },
        {
          duration: 1500,
          easing: "linear",
          step: function () {
            countElement.text(Math.floor(this.countNum) + "%");
          },
          complete: function () {
            countElement.text(this.countNum + "%");
          },
        }
      );
    });
  }

  // Alternative animation approach if immediate display doesn't work
  setTimeout(function () {
    $(".progress-bar").each(function () {
      var percent = $(this).attr("data-percent");
      $(this)
        .css("width", "0%")
        .animate(
          {
            width: percent + "%",
          },
          1000,
          "easeInOutQuart"
        );
    });
  }, 500);
});
