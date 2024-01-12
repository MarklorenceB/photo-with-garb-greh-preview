
// mansory grid layout
  window.addEventListener('load', function () {
    updateColumnCount();
  });
  
  window.addEventListener('resize', function () {
    updateColumnCount();
  });
  
  function updateColumnCount() {
    var masonryGallery = document.getElementById('mansory_gallery');
    var logoWrappers = masonryGallery.querySelectorAll('.logo-wrapper');
    var containerWidth = masonryGallery.offsetWidth;
  
    var totalWidth = 0;
    var columnCount = 0;
  
    logoWrappers.forEach(function (wrapper) {
      var imgWidth = wrapper.clientWidth;
      totalWidth += imgWidth;
  
      if (totalWidth <= containerWidth) {
        columnCount++;
      } else {
        totalWidth = imgWidth;
        columnCount++;
      }
    });
  
    // Set a maximum of 90 columns
    columnCount = Math.min(columnCount, 30);
  
    // Set column count instead of grid-template-columns
    masonryGallery.style.columnCount = columnCount;
  }


  // preloader
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("body").classList.add("loaded");
    }, 10)
  });