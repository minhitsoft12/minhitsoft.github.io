"use strict"; // Stick Header

var getHeader = document.querySelector(".header");
var getMenuPl = document.querySelector(".menu-phanloai");
var offSetHeader = getHeader.offsetHeight; // console.log(offSetHeader);

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 20) {
    getHeader.classList.add("stick");
  } else if (window.pageYOffset <= 0) {
    getHeader.classList.remove("stick");
  }
}); //===============

var getLiMenu = Array.from(document.querySelectorAll(".menu-drd-level-1 > .menu-drd-item"));

for (var i = 0; i < getLiMenu.length; i++) {
  var ads = getLiMenu[i];
  var wfaf = ads.getAttribute("class");
  var qwe = wfaf.split(" ");
  ads.addEventListener("click", function () {
    var sibling = getSiblings(this);

    for (var j = 0; j < sibling.length; j++) {
      sibling[j].classList.remove("active");
    }

    this.classList.add("active");
  });
}

var getSiblings = function getSiblings(elem) {
  // Setup siblings array and get the first sibling
  var siblings = [];
  var sibling = elem.parentNode.firstChild; // Loop through each sibling and push to the array

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return siblings;
};

var clickShowMenu = function clickShowMenu(idClick, idShow) {
  var clickToShow = document.getElementById(idClick);
  var showDown = document.getElementById(idShow);
  clickToShow.addEventListener("click", function () {
    var adwd = Array.from(document.querySelectorAll(".menu-style"));

    for (var _i = 0; _i < adwd.length; _i++) {
      adwd[_i].classList.remove("active");
    }

    showDown.classList.add("active");
  });
};

clickShowMenu("show-noibat", "noibat");
clickShowMenu("show-loaihinhbds", "loaihinhbds");
clickShowMenu("show-khuvuc", "khuvuc");
var childMenu = Array.from(document.querySelectorAll(".menu-child-menu ul"));

for (var _i2 = 0; _i2 < childMenu.length; _i2++) {
  var sdaw = childMenu[_i2];
  var qwfst = childMenu[_i2].children;

  if (qwfst.length > 10) {
    var anhggf = qwfst[10].parentElement;
    anhggf.classList.add("menu-style-2-child-flex");
  }
}

jQuery(".menu-drd-level-1 > li > a").click(function (e) {
  e.preventDefault();
}); //==================
// Menu phan loai mobile

var getMenuHTML = document.querySelector(".menu-dropdown > .menu-drd-level-1").innerHTML;
jQuery(".menu-phanloai .menu-drop").append(getMenuHTML);

var appendToMenuMobile = function appendToMenuMobile(idMain, idAppend) {
  var stringAew = ".menu-phanloai " + idMain;
  var getParentIdMain = jQuery(stringAew).parent();
  var dsaw = document.querySelector(idAppend).children[0].innerHTML;
  getParentIdMain.append(dsaw);
};

appendToMenuMobile("#show-noibat", "#noibat");
appendToMenuMobile("#show-loaihinhbds", "#loaihinhbds");
appendToMenuMobile("#show-khuvuc", "#khuvuc");
jQuery(".menu-phanloai .menu-drd-item.has-drop > a").append('<i class="fas fa-chevron-down"></i>');
$(document).ready(function () {
  $(".menu-phanloai li.has-drop > a").on("click", function (e) {
    e.preventDefault();

    if ($(this).parent().hasClass("active")) {
      $(this).parent().removeClass("active");
    } else {
      $(this).parent().siblings(".has-drop").removeClass("active");
      $(this).parent().addClass("active");
    }
  });
});
jQuery(".menu-phanloai .close-menu").click(function (e) {
  e.preventDefault();
  jQuery("body").removeClass("none-scroll");
  jQuery(".menu-phanloai").removeClass("active");
  jQuery(".menu-phanloai").addClass("close-animt");
}); // document.addEventListener('click', function(e) {
//     var checkMenuPl = e.target.closest('.menu-phanloai');
//     var checkButtonShow =e.target.closest('.header-bottom-box');
//     if(checkMenuPl == null || checkButtonShow == null) {
//         $('.menu-phanloai').removeClass('active');
//         $('.menu-phanloai').addClass('close-animt');
//     }
// })
//==============
// function myFunction(x) {
//     var searchBtm = jQuery('.header-search');
//     var searchPlh = jQuery('.header-search input');
//     if (x.matches) {
//         // Reponsive Header
//         jQuery('.header').addClass('header-mobile');
//         jQuery('.header-mobile [class*="header-logo-box-"]').click(function (e) {
//             e.preventDefault();
//             jQuery('.header-main-box').toggleClass('active');
//         });
//         jQuery('.header-menu-box').append(searchBtm);
//         searchPlh.attr('placeholder', 'Nhập tên dự án cần tìm kiếm');
//         $(document).ready(function () {
//             $(".has-menu-btn-show").on("click", function () {
//                 if ($(this).parent().hasClass("active")) {
//                     $(this).parent().removeClass("active");
//                 } else {
//                     $(".has-menu-drp").removeClass("active");
//                     $(this).parent().addClass("active");
//                 }
//             });
//         });
//         var appendMenuDrd = function appendMenuDrd(idMain, idAppend) {
//             var getParentIdMain = idMain.parent();
//             var getChildMenu;
//         };
//         jQuery('.bottom-show-menu').click(function (e) {
//             jQuery('.menu-phanloai').addClass('active');
//             jQuery('.menu-phanloai').removeClass('close-animt');
//         });
//         //======================
//         // Reponsive Filter
//         $('.filter-control').addClass('filter-control-mobile');
//         $('.filter-control-mobile .justify-content-end').removeClass('row');
//         //==================
//     } else {
//         // Header
//         jQuery('.header').removeClass('header-mobile');
//         jQuery('.header-bottom-box').append(searchBtm);
//         searchPlh.attr('placeholder', 'Nhập tên dự án hoặc khu vực bạn muốn tìm');
//         jQuery('.bottom-show-menu').click(function (e) {
//             e.preventDefault();
//             jQuery('.bottom-show-menu').toggleClass('active');
//             jQuery('.menu-dropdown').toggleClass('active');
//         });
//         //===================
//         // Filter
//         $('.filter-control').removeClass('filter-control-mobile');
//         //================
//     }
// }
// var x = window.matchMedia("(max-width: 850px)");
// myFunction(x);
// x.addListener(myFunction);