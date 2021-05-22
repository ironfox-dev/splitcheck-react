/* eslint-disable no-unused-vars */
import '@babel/polyfill';
import 'bootstrap/js/dist/modal';
import Swiper from 'swiper/swiper-bundle';
import 'jquery-mask-plugin';
import Headroom from 'headroom.js';
import Flatpickr from 'flatpickr';
import Dropzone from 'dropzone';
import 'select2/dist/js/select2.full';
import PerfectScrollbar from 'perfect-scrollbar';
import FroalaEditor from 'froala-editor';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/code_view.min.js';
import 'lightgallery/dist/js/lightgallery-all.min'

export default {
  init() {
    Dropzone.autoDiscover = false;

    const header = document.querySelector('.header');
    const body = document.querySelector('body');

    if (header) {
      // construct an instance of Headroom, passing the element
      let headroom  = new Headroom(header);
      // initialise
      headroom.init();
    }




//create campaign
if (window.innerWidth < 576) {
  if ($('.nav-link--mobile').hasClass('nav-link--mobile')) {
    $('.nav-link--mobile').not('.active').text('');

    if ($('.nav-link--mobile').hasClass('active')) {
      let textTarget = $(this).data('number');
      $(this).text(textTarget);
    }
    $('.nav-link--mobile').on('click', function() {
      $('.nav-link--mobile').text('');
      let textTarget = $(this).data('number');
      $(this).text(textTarget);
    })
  }
}

     //select-placeholder
    $('.select-placeholder').on('select2:select', function (e) {
      let data = e.params.data;
     if(data.length > 0) {
      $('.select-placeholder').removeClass('placeholder-none');
     } else {
      $('.select-placeholder').addClass('placeholder-none');
     }
  });



  //search height
  let searchVh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--search', `${searchVh}px`);


  
    

    $('.link-more').click(function() {
      $('.text-more').addClass('open');
      $(this).hide();
    });

    //header search dropdown
    $('.search-dropdown__close').click(function() {
      $('.search-dropdown').removeClass('open');
    })
    $('.header .search__input').click(function() {
     
      var searchHeader = document.querySelector('.search__input').value;
      if(searchHeader.length > 0) {
        $('.search-dropdown').addClass('open');
        $('body').addClass('hidden');
      } else {
        $('.search-dropdown').removeClass('open');
        $('body').removeClass('hidden');
      }
    });
    $('.header .search__input').keyup(function() {
      $('.search-dropdown').addClass('open');
      $('body').addClass('hidden');
      var searchHeader = document.querySelector('.search__input').value;
      if(searchHeader.length > 0) {
        $('.search-dropdown').addClass('open');
        $('body').addClass('hidden');
      } else {
        $('.search-dropdown').removeClass('open');
        $('body').removeClass('hidden');
      }
    });

    $(document).mouseup(function(e) {
      if (!$('.search-dropdown').is(e.target) && $('.search-dropdown').has(e.target).length === 0) { 
       $('.search-dropdown').removeClass('open') 
       
      }
      if (!$('.modal-invite .form__single').is(e.target) && $('.modal-invite .form__single').has(e.target).length === 0) { 
        $('.modal-invite .form__single').removeClass('before-none');
       }
     });

    

    $('.store-payment__toggle').click(function() {
      $(this).next().slideToggle(400);
      $(this).toggleClass('btn-active');
    })


    //timeline-global
    const optionForTimeline = {
      slidesPerView: 'auto',
      spaceBetween: 8,
      setWrapperSize: true,
      // simulateTouch: false,
      // preventInteractionOnTransition: true,
      // mousewheel: true,
      navigation: {
        nextEl: '.card-timeline__slider .swiper-button-next',
        prevEl: '.card-timeline__slider .swiper-button-prev',
      },
      // breakpoints: {
      //   1260: {
      //     slidesPerView: 'auto',
      //   },
      //   992: {
      //     slidesPerView: 'auto',
      //     // freeMode: true,
      //   },
      //   360: {
      //     slidesPerView: 4,
      //   },
      //   250: {
      //     slidesPerView: 3,
      //     setWrapperSize: false,
      //     simulateTouch: false,
      //     preventInteractionOnTransition: true,
      //     mousewheel: true,
      //     // freeMode: true,
      //   },
      // },
    }

    const swiperTimeline = new Swiper('.card-timeline__slider .swiper-container', optionForTimeline);

    //* function INPUT SEARCH
    {
      const search = {
        formSearch: document.querySelector('.search'),
        inputSearch: document.querySelector('.search__input'),
        headerContent: document.querySelector('.header__content'),
        headerRight: document.querySelector('.header__right'),
        headerLeft: document.querySelector('.header__left'),
      }

      if (search.formSearch) {
        const focusSearchInput = () => {
          if (window.matchMedia('(max-width: 991px)').matches) {
            let whatWidthContent = search.headerContent.offsetWidth;
            let whatWidthHeaderLeft = search.headerLeft.offsetWidth;

            search.inputSearch.onfocus = function() {
              search.formSearch.style.width = (whatWidthContent - whatWidthHeaderLeft - 12) + 'px'
              search.headerRight.style.visibility = 'hidden';
              search.headerRight.style.opacity = 0;
            };

            search.inputSearch.onblur = function() {
              search.formSearch.style.width = ''
              search.headerRight.style.visibility = '';
              search.headerRight.style.opacity = '';
            };
          } else {
            search.inputSearch.onfocus = function() {
              search.formSearch.style.width = ''
              search.headerRight.style.visibility = '';
              search.headerRight.style.opacity = '';
            };
            search.formSearch.style.width = ''
            search.headerRight.style.visibility = '';
            search.headerRight.style.opacity = '';
          }
        }

        focusSearchInput();
        window.addEventListener('resize', focusSearchInput)
      }
    }

    // * change visible password
    {
      const btnPass = document.querySelectorAll('.form__symbol-pass');
      // const inputPass = document.querySelector('.form__single--pass input');

      if (btnPass.length > 0) {
        btnPass.forEach(element => {
          element.addEventListener('click', function() {
            element.classList.toggle('visible')
            if (element.classList.contains('visible')) {
              element.previousElementSibling.type = 'text';
            } else {
              element.previousElementSibling.type = 'password';
            }
          });
        });
      }
    }

    // * datepicker and timepicker
    {
      if ($('input[data-toggle="datepicker"]').length) {
        Flatpickr($('input[data-toggle="datepicker"]'), {
          disableMobile: 'true',
          altFormat: 'F j, Y',
          dateFormat: 'm/d/Y',
        });
      }

      if ($('input[data-toggle="timepicker"]').length) {
        Flatpickr($('input[data-toggle="timepicker"]'), {
          disableMobile: 'true',
          enableTime: true,
          noCalendar: true,
          dateFormat: 'h:i K',
          time_24hr: false,
        });
      }
    }

    $('.modal').on('shown.bs.modal', function () {
      setTimeout(function() {
        $('.section-blur').addClass('filter');
      }, 50);

    })

    $('.modal').on('hidden.bs.modal', function(){
      if($('.modal:visible').length > 0) {
        $('body').addClass('modal-open');
        $('.section-blur').addClass('filter');
      } else {
        setTimeout(function() {
          $('.section-blur').removeClass('filter');
        }, 50);
      }
      for (let i = 0; i < $('.modal video').length; i++) {
        const element = $('.modal video')[i];
        if(element.previousElementSibling) {
          if(element.previousElementSibling.classList.contains('video-btn-none')) {
            element.previousElementSibling.classList.remove('video-btn-none', 'pause');
          }
        }
      }
    });

    $('.header__burger').click (function () {
      $('.mobile-menu').css('left', '0');
      $('.section-blur').addClass('filter');
      $('body').css('overflow', 'hidden');
    });

    $('.mobile-menu__close').click (function () {
      $('.mobile-menu').css('left', '-100%');
      $('.section-blur').removeClass('filter');
      $('body').css('overflow', 'visible');
    });

    if ($('.menu-bottom').hasClass('menu-bottom')) {
      let menuBottom = document.querySelector('.menu-bottom');
      let headroomSecond  = new Headroom(menuBottom);
      headroomSecond.init();
    }


     // * function for "Select" template in modal
     if($('.form__single--select-default select[data-toggle="select"]')) {
      $('.form__single--select-user select[data-toggle="select"]').select2({
        minimumResultsForSearch: Infinity,
        width: '100%',
        templateResult: function (state) {
          if (!state.id) {
            return state.text;
          }
          var baseUrl = 'images/profiles';
          var $state = $(`
            <div class="profile-list">
              <figure class="profile-list__avatar">
                <img src="${baseUrl}/${state.element.value.toLowerCase()}.png" alt="avatar">
                <span class="profile-list__symbol"></span>
              </figure>
              <span>${state.text}</span>
            </div>
          `);

          return $state;
        },
        // dropdownParent: $('.form__single--select-user'),
      });
     }

     // * function for "Select" template user add image
     if($('.form__single--select-profile select[data-toggle="select-profile"]')) {
      $('.form__single--select-profile select[data-toggle="select-profile"]').select2({
        minimumResultsForSearch: Infinity,
        maximumSelectionLength: 1,
        width: '100%',
        templateResult: function (state) {
          if (!state.id) {
            return state.text;
          }
          var baseUrl = 'images/profiles';
          var $state = $(`
            <div class="profile-list">
              <figure class="profile-list__avatar">
                <img src="${baseUrl}/${state.element.value.toLowerCase()}.png" alt="avatar">
                <span class="profile-list__symbol"></span>
              </figure>
              <span>${state.text}</span>
             
            </div>
          `);

          return $state;
        },
        // dropdownParent: $('.form__single--select-user'),
      });
     }

     // * function for "Select" template user add image
     {
      let arrayInfo = [
        {
          id: 1,
          sky: '#134567',
          Qty: 999,
          price: 49.99,
          text: 'Title here could be so much longer…',
          img: 'images/product/7142447382608.png',
          selected: true,
        },
        {
          id: 2,
          sky: '#134568',
          Qty: 999,
          price: 49.99,
          text: 'Title here could be so much longer…',
          img: 'images/product/7142447382608.png',
        },
        {
          id: 3,
          sky: '#134567',
          Qty: 999,
          price: 49.99,
          text: 'Title here could be so much longer…',
          img: 'images/product/7142447382608.png',
        },
        {
          id: 4,
          sky: '#134568',
          Qty: 999,
          price: 49.99,
          text: 'Title here could be so much longer1…',
          img: 'images/product/7142447382608.png',
        },
        {
          id: 5,
          sky: '#134567',
          Qty: 999,
          price: 49.99,
          text: 'Title here could be so much longer2…',
          img: 'images/product/7142447382608.png',
        },
        {
          id: 6,
          sky: '#134568',
          Qty: 999,
          price: 49.99,
          text: 'Title here could be so much longer3…',
          img: 'images/product/7142447382608.png',
        },
     ]
 
      if($('.form__single--select-product select[data-toggle="select-product"]')) {
       $('.form__single--select-product select[data-toggle="select-product"]').select2({
         minimumResultsForSearch: Infinity,
         maximumSelectionLength: 4,
         closeOnSelect: false,
         width: '100%',
         theme: 'select2-container select2-container--default static-select',
         data: arrayInfo,
         templateResult: function (state) {
           if (!state.id) {
             return state.text;
           }
           var $state = $(`
             <div class="profile-list">
               <figure class="profile-list__avatar">
                 <img src="${state.img}" alt="product">
                 <span class="profile-list__symbol"></span>
               </figure>
               <div class="select-info">
                 <strong>${state.text}</strong>
                 <ul>
                 <li>Sku: <span>${state.sky}</span></li>
                 <li>Qty: <span>${state.Qty}</span></li>
                 <li>$ <span>${state.price}</span></li>
                 </ul>
               </div>
             </div>
           `);
 
           return $state;
         },
         dropdownParent: $('.associated-box__select'),
       });
      }
 
      //select2 select
      $('[data-toggle="select-product"]').on('select2:select', function (e) {
        $(this).next().find('input').val('')
       var data = e.params.data;
       let resultBox = $(this).parent().parent().parent().parent().next();
       let stateEl = `
             <div class="selected-item" id="${data.id}">
             <div class="selected-item__left">
                 <div class="selected-item__photo"
                     style="background-image: url('${data.img}');">
                     <span>SM</span>
                 </div>
                 <div class="selected-item__info">
                     <strong>${data.text}</strong>
                     <ul>
                         <li>Sku: <span>${data.sky}</span></li>
                         <li>Qty: <span>${data.Qty}</span></li>
                         <li>$ <span>${data.price}</span></li>
                     </ul>
                 </div>
             </div>
             <div class="selected-item__right">
                 <a href="#">Delete</a>
             </div>
         </div>
         `;
         $(resultBox).append(stateEl)
   });

   //select2 remove checked element
  $('[data-toggle="select-product"]').on('select2:unselect', function (e) {
    $(this).next().find('input').val('')
    var id = e.params.data.id;
    let productBox = $(this).parent().parent().parent().parent().next().find($('.selected-item'));
    $(productBox).each( function() {
      if($(this).attr('id') == id) {
        $(this).remove();
      }
    })
  });
 
   //select2 custom scroll product
   //scroll
   $('[data-toggle="select-product"]').on('select2:open', function (e) {
     function resizeLine() {
       psLine.update();
     }
     var psLine = new PerfectScrollbar('ul.select2-results__options');
     window.onresize = resizeLine;
     setTimeout( function() {
       resizeLine();
     }, 1)
   });
     }

     // * function for "Select" template user add image
     {
      let arrayInfo = [
        {
          id: 1,
          sky: '#134567',
          Qty: 999,
          price: 49.99,
          text: 'Title here could be so much longer…',
          img: 'images/product/7142447382608.png',
        },
        {
          id: 2,
          sky: '#134568',
          Qty: 999,
          price: 49.99,
          text: 'Title here could be so much longer…',
          img: 'images/product/7142447382608.png',
        },
        {
          id: 3,
          sky: '#134567',
          Qty: 999,
          price: 49.99,
          text: 'Title here could be so much longer…',
          img: 'images/product/7142447382608.png',
        },
        {
          id: 4,
          sky: '#134568',
          Qty: 999,
          price: 49.99,
          text: 'Title here could be so much longer1…',
          img: 'images/product/7142447382608.png',
        },
        {
          id: 5,
          sky: '#134567',
          Qty: 999,
          price: 49.99,
          text: 'Title here could be so much longer2…',
          img: 'images/product/7142447382608.png',
        },
        {
          id: 6,
          sky: '#134568',
          Qty: 999,
          price: 49.99,
          text: 'Title here could be so much longer3…',
          img: 'images/product/7142447382608.png',
        },
     ]
 
      if($('.form__single--select-product select[data-toggle="select-product--prev"]')) {
        let dropParent = null;
        $('select[data-toggle="select-product--prev"]').each( function() {
        dropParent = $(this).parent();
       $(this).select2({
        minimumResultsForSearch: Infinity,
        maximumSelectionLength: 4,
        closeOnSelect: false,
        width: '100%',
        theme: 'select2-container select2-container--default static-select',
        data: arrayInfo,
        templateResult: function (state) {
          if (!state.id) {
            return state.text;
          }
          var $state = $(`
            <div class="profile-list">
              <figure class="profile-list__avatar">
                <img src="${state.img}" alt="product">
                <span class="profile-list__symbol"></span>
              </figure>
              <div class="select-info">
                <strong>${state.text}</strong>
                <ul>
                <li>Sku: <span>${state.sky}</span></li>
                <li>Qty: <span>${state.Qty}</span></li>
                <li>$ <span>${state.price}</span></li>
                </ul>
              </div>
            </div>
          `);

          return $state;
        },
        dropdownParent: $(dropParent),
      });
        });
      }
 
      //select2 select
      $('[data-toggle="select-product--prev"]').on('select2:select', function (e) {
        $(this).next().find('input').val('')
       var data = e.params.data;
       let resultBox = $(this).parent().parent().parent().parent().prev();
       
       let stateEl = `
             <div class="selected-item" id="${data.id}">
             <div class="selected-item__left">
                 <div class="selected-item__photo"
                     style="background-image: url('${data.img}');">
                 </div>
                 <div class="selected-item__info">
                     <strong>${data.text}</strong>
                 </div>
             </div>
             <div class="selected-item__right">
                 <a href="#" class="remove"><img src="images/icons/close-24px.svg" alt="close"></a>
             </div>
         </div>
         `;
         $(resultBox).append(stateEl)
   });
 
   //select2 custom scroll product
   //scroll
   $('[data-toggle="select-product--prev"]').on('select2:open', function (e) {
     function resizeLine() {
       psLine.update();
     }
     var psLine = new PerfectScrollbar('ul.select2-results__options');
     window.onresize = resizeLine;
     setTimeout( function() {
       resizeLine();
     }, 1)
   });

   //click create object
   $('.if-option-single').on('click', '.remove', function(e) {
    e.preventDefault();
    let id = $(this).parent().parent().attr('id');
    let selectEl = $(this).parent().parent().parent().next().find($('select'))
    let arraySelected = $(selectEl).val();
    delete arraySelected[arraySelected.indexOf(id)]
    $(selectEl).val(arraySelected).trigger('change');
    //remove item
    $(this).parent().parent().remove();
  })

  //select2 remove checked element
  $('[data-toggle="select-product--prev"]').on('select2:unselect', function (e) {
    $(this).next().find('input').val('')
    var id = e.params.data.id;
    let productBox = $(this).parent().parent().parent().parent().prev().find($('.selected-item'));
    $(productBox).each( function() {
      if($(this).attr('id') == id) {
        $(this).remove();
      }
    })
  });


     }






  //select-option
  {
    if($('.form__single--select-option select[data-toggle="select-option"]')) {
      let parentThis = null;
      $('select[data-toggle="select-option"]').each( function() {
        parentThis = $(this).parent();
        $(this).select2({
          minimumResultsForSearch: Infinity,
          maximumSelectionLength: 4,
          closeOnSelect: false,
          width: '100%',
          theme: 'select2-container select2-container--default static-select',
          templateResult: function (state) {
            if (!state.id) {
              return state.text;
            }
            var url = 'images/product'
            var $state = $(`
              <div class="option-list">
                <figure class="option-list__avatar">
                  <img src="${url}/${state.text}.png" alt="img">
                </figure>
                <div class="select-info">
                  <strong>${state.text}</strong>
                </div>
              </div>
            `);

            return $state;
          },
          dropdownParent: $(parentThis),
        });
      })
     }

     //select2 select
     $('[data-toggle="select-option"]').on('select2:select', function (e) {
      var data = e.params.data;
      let resultBox = $(this).parent().parent().prev();
      var url = 'images/product'
      let stateEl = `
            <div class="option-list" id=${data.id}>
            <figure class="option-list__avatar">
              <img src="${url}/${data.text}.png" alt="img">
            </figure>
            <div class="select-info">
              <strong>${data.text}</strong>
            </div>
            <div class="remove">
              <img src="images/icons/close-24px.svg" alt="remove"/>
            </div>
          </div>
        `;
        $(resultBox).append(stateEl)
  });

  $('[data-toggle="select-option"]').on('select2:close', function (e) {
    e.preventDefault();
  });
  //select2 custom scroll option
  // //scroll
  // $('[data-toggle="select-option"]').on('select2:open', function (e) {
  //   function resizeLine() {
  //     psLine.update();
  //   }
  //   var psLine = new PerfectScrollbar('ul.select2-results__options');
  //   window.onresize = resizeLine;
  //   setTimeout( function() {
  //     resizeLine();
  //   }, 1)
  // });

    //select2 remove checked element
    $('[data-toggle="select-option"]').on('select2:unselect', function (e) {
      let resultBox = $(this).parent().parent().prev().find($('.option-list'));
      var id = e.params.data.id;
      
      $(resultBox).each( function() {
        if($(this).attr('id') == id) {
          $(this).remove();
        }
      })
    });

    //select2 option show search
    $('.if-option-single').on('click', '.if-option-single__search', function(e) {
      e.preventDefault();
      $(this).addClass('focus');
      let parentEl = $(this).parent().next();
      let thisBody = $(parentEl).find($('.if-option-single__body'));
      $(thisBody).find('.if-option-single__select').show();
      $(thisBody).find('.finish').show();
      $(parentEl).addClass('show');
      $(thisBody).show();
    })


    //select2 option finish
    $('.if-option-single').on('click', '.finish', function(e) {
      e.preventDefault();
      let parentEl = $(this).parent().parent();
      $(parentEl).removeClass('show');
      $(parentEl).parent().find('.if-option-single__search').removeClass('focus');
      $(parentEl).find('.if-option-single__select').hide();
      $(parentEl).find('.finish').hide();
    })

    //click create object
    $('.if-option-single').on('click', '.option-list .remove', function(e) {
      e.preventDefault();
      let id = $(this).parent().attr('id');
      let selectEl = $(this).parent().parent().next().find($('select'))
      let arraySelected = $(selectEl).val();
      delete arraySelected[arraySelected.indexOf(id)]
      $(selectEl).val(arraySelected).trigger('change');
      //remove item
      $(this).parent().remove();
    })
  }
  

  //select-option--product
  {
    if($('.form__single--select-option--product select[data-toggle="select-option--product"]')) {
      let parentThis = null;
      $('select[data-toggle="select-option--product"]').each( function() {
        parentThis = $(this).parent();
        $(this).select2({
          minimumResultsForSearch: Infinity,
          maximumSelectionLength: 4,
          closeOnSelect: false,
          width: '100%',
          theme: 'select2-container select2-container--default static-select',
          templateResult: function (state) {
            if (!state.id) {
              return state.text;
            }
            var url = 'images/product'
            var $state = $(`
              <div class="option-list option-list--product">
                <figure class="option-list__avatar">
                  <img src="${url}/${state.id}.png" alt="img">
                </figure>
                <div class="select-info">
                  <strong>${state.text}</strong>
                </div>
              </div>
            `);

            return $state;
          },
          dropdownParent: $(parentThis),
        });
      })
     }

     //select2 select
     $('[data-toggle="select-option--product"]').on('select2:select', function (e) {
      var data = e.params.data;
      let resultBox = $(this).parent().parent().prev();

      var url = 'images/product'
      let stateEl = `
            <div class="option-list option-list--product" id=${data.id}>
            <figure class="option-list__avatar">
              <img src="${url}/${data.id}.png" alt="img">
            </figure>
            <div class="select-info">
              <strong>${data.text}</strong>
            </div>
            <div class="remove">
              <img src="images/icons/close-24px.svg" alt="remove"/>
            </div>
          </div>
        `;
        $(resultBox).append(stateEl)
  });

  $('[data-toggle="select-option--product"]').on('select2:close', function (e) {
    e.preventDefault();
  });
  //select2 custom scroll option
  //scroll
  $('[data-toggle="select-option--product"]').on('select2:open', function (e) {
    function resizeLine() {
      psLine.update();
    }
    var psLine = new PerfectScrollbar('ul.select2-results__options');
    window.onresize = resizeLine;
    // setTimeout( function() {
    //   resizeLine();
    // }, 1000)
  });

    //select2 remove checked element
    $('[data-toggle="select-option--product"]').on('select2:unselect', function (e) {
      let resultBox = $(this).parent().parent().prev().find($('.option-list'));
      var id = e.params.data.id;
    
      $(resultBox).each( function() {
        if($(this).attr('id') == id) {
          $(this).remove();
        }
      })
    });

    //select2 option show search
    $('.if-option').on('click', '.if-option-single__search', function() {
      $(this).addClass('focus');
      let parentEl = $(this).parent().next();
      let thisBody = $(parentEl).find($('.if-option-single__body'));
      $(thisBody).find('.if-option-single__select').show();
      $(thisBody).find('.finish').show();
      $(parentEl).addClass('show');
      $(thisBody).show();
    })


    //select2 option finish
    $('.if-option').on('click', '.finish', function() {
      let parentEl = $(this).parent().parent();
      $(parentEl).removeClass('show');
      $(parentEl).parent().find('.if-option-single__search').removeClass('focus');
      $(parentEl).find('.if-option-single__select').hide();
      $(parentEl).find('.finish').hide();
    })

    //click create object
    $('.if-option').on('click', '.option-list .remove', function(e) {
      e.preventDefault();
      let id = $(this).parent().attr('id');
      let selectEl = $(this).parent().parent().next().find($('select'))
      let arraySelected = $(selectEl).val();
      delete arraySelected[arraySelected.indexOf(id)]
      $(selectEl).val(arraySelected).trigger('change');
      //remove item
      $(this).parent().remove();
    })
  }










  //click create object
  $('.associated-box__result').on('click', 'a', function(e) {
    e.preventDefault();
    let id = $(this).parent().parent().attr('id');
    let selectEl = $(this).parent().parent().parent().parent().find($('select'))
    let arraySelected = $(selectEl).val();
    delete arraySelected[arraySelected.indexOf(id)]
    $(selectEl).val(arraySelected).trigger('change');
    //remove item
    $(this).parent().parent().remove();
  })

  // * function for "Select" template select search no image
  if($('.form__single--select-no-image select[data-toggle="select-no-image"]')) {
  $('.form__single--select-no-image select[data-toggle="select-no-image"]').select2({
    minimumResultsForSearch: Infinity,
    maximumSelectionLength: 1,
    width: '100%',
    templateResult: function (state) {
      if (!state.id) {
        return state.text;
      }
      var $state = $(`
        <div class="profile-list">
          <span>${state.text}</span>
        </div>
      `);

      return $state;
    },
    // dropdownParent: $('.form__single--select-user'),
  });
  }

  //select2 multiple no img
  // * function for "Select-tag" template in modal
  if($('.form__single--select-user select[data-toggle="select-img"]')) {
    $('.form__single--select-user select[data-toggle="select-img"]').select2({
      minimumResultsForSearch: Infinity,
      width: '100%',
      templateResult: function (state) {
        if (!state.id) {
          return state.text;
        }
        var $state = $(`
          <div class="profile-list">
            <span>${state.text}</span>
          </div>
        `);

        return $state;
      },
      // dropdownParent: $('.form__single--select-user'),
    });
    }
  if($('.form__single--select-tag select[data-toggle="select-tag"]')) {
    $('.form__single--select-tag select[data-toggle="select-tag"]').select2()
    $('.form__single--select-tag select[data-toggle="select-tag"]').select2({
      minimumResultsForSearch: Infinity,
      width: '100%',
      templateResult: function (state) {
        if (!state.id) {
          return state.text;
        }
        var $state = $(`
          <div class="profile-list">
            <span>${state.text}</span>
          </div>
        `);

        return $state;
      },
      // dropdownParent: $('.form__single--select-user'),
    });
    }

  // * function for "Select is not avatar" template in modal
  if($('select.form__select--default[data-toggle="select"]')) {
    $('select.form__select--default[data-toggle="select"]').each( function() {
      $(this).select2({
        minimumResultsForSearch: Infinity,
        width: '100%',
      });
      $(this).select2({
        minimumResultsForSearch: Infinity,
      });
    })
  }


  if($('select.form__select--default[data-toggle="select-user-account"]')) {
    let dropParent = null;
    $('select.form__select--default[data-toggle="select-user-account"]').each( function() {
      dropParent = $(this).parent().parent();
      $(this).select2({
        minimumResultsForSearch: Infinity,
        width: '100%',
        dropdownParent: $(dropParent),
      });
    })
  }

  // * function for "Select is dropdown parent" template in modal
  if($('select.form__select--default[data-toggle="select-parent"]')) {
    let dropParent = null;
    $('select[data-toggle="select-parent"]').each( function() {
      dropParent = $(this).parent().parent();


      $(this).select2({
        minimumResultsForSearch: Infinity,
        width: '100%',
        theme: 'abs-box select2-container--default',
        dropdownParent: $(dropParent),
      });
    });
  }

  // select2 emotion
  // * function for "Select" template user add image
  {
    if($('.form__single--select-smile select[data-toggle="select-smile"]')) {
      let dropParent = null;
      $('select[data-toggle="select-smile"]').each( function() {
        dropParent = $(this).parent().parent();
        $(this).select2({
          minimumResultsForSearch: Infinity,
          width: '100%',
          theme: 'abs-box select2-container--default reaction-select--box',
          dropdownParent: $(dropParent),
          templateResult: function (state) {
            if (!state.id) {
              return state.text;
            }
            var baseUrl = 'images/icons/smile';
            var $state = $(`
              <div class="reaction-box">
                <figure class="reaction-box__icon">
                  ${'total' !== state.element.value.toLowerCase() ? `<img src="${baseUrl}/${state.element.value.toLowerCase()}.svg" alt="icon"></img>` : ''}
                </figure>
                <span>${state.text}</span>
              </div>
            `);

            return $state;
          },
        });
      });
    }
    $('select[data-toggle="select-smile"]').on('select2:select', function (e) {
      var data = e.params.data;
      let elem = $(this).parent().prev().find($('strong'));
      $(elem).text(data.title)
    });

    $('[data-toggle="select-smile"]').on('select2:open', function (e) {
      let thisElem = $(this).parent().prev();
      $(thisElem).addClass('open');
    });
    $('[data-toggle="select-smile"]').on('select2:close', function (e) {
      let thisElem = $(this).parent().prev();
      $(thisElem).removeClass('open');
    });

  }

  //toogle post
  $('.gift-shopping__header').click( function() {
    $(this).toggleClass('open');
    $(this).next().slideToggle();
  })

  //open mobile product
  $('.options-cart:not(.stock) .arrow-open').click( function() {
    $(this).toggleClass('arrow-turn');
    $(this).parent().toggleClass('open');
    $(this).parent().find($('.options-cart__body')).slideToggle();
  })

  //header height
  if($('.tabs-global__nav').hasClass('tabs-global__nav')) {
    var ScrollTopEv = 0;
    $(window).scroll(function(event){
      var st = $(this).scrollTop();
      if (st > ScrollTopEv){
        $('.tabs-global__nav.mobile-nav').css('top', '0px');
      } else {
        if(window.innerWidth < 991 &&  window.innerWidth > 767) {
          $('.tabs-global__nav.mobile-nav').css('top', '70px');
        }
        if(window.innerWidth < 768) {
          $('.tabs-global__nav.mobile-nav').css('top', '55px');
        }
      }
      if(st > 70) {
        if($('.svg-show').hasClass('svg-top-hide')) {
          $('.tabs-global__nav.mobile-nav').addClass('overlay');
        }
      }
      ScrollTopEv = st;
    });
  }

  if($('.mobile-nav').hasClass('mobile-nav')) {

      //background change
      $('.account-preferences__card').on('click', function() {
      let bgColor = $(this).attr('data-class');
      $('.section-blur').attr('data-class', bgColor);
      })

      //mobile tabs
    $('.settings__hide li').click(function() {
      $(this).parent().slideToggle(100);
      $('.mobile-nav').toggleClass('mobile-before')
      $('.svg-show').toggleClass('svg-top-hide');
      $('.main-content').css('margin-top', '0')
      $('.tabs-global__nav.mobile-nav').removeClass('overlay');
    });

    $('.settings__toggle').on('click', function() {
      $('.mobile-nav').toggleClass('mobile-before');
      $('.svg-show').toggleClass('svg-top-hide');
      $('.settings__hide').slideToggle(100);
      if($(window).scrollTop() > 60) {
        $('.tabs-global__nav.mobile-nav').addClass('overlay');
      }

      if ($('.nav').hasClass('mobile-before')) {
        let heightPadding = $('.mobile-nav').height();
        $('.main-content').css('margin-top', heightPadding + 'px');
      } else {
        $('.main-content').css('margin-top', '0')
      }
    });
  }

  //plus and minus function
  function funcPlusMinus(init, par, proces) {
    if(proces == 'minus') {
      if(init > 0) {
        $(par).find($('.item-cart__int')).text(init - 1);
      }
    } else {
      $(par).find($('.item-cart__int')).text(init + 1);
    }
  }

  $('.item-cart__minus:not(.product), .item-cart__plus:not(.product)').click( function() {
    let par = $(this).parent();
    let init = Number($(par).find($('.item-cart__int')).text());
    let proces = undefined;
    if($(this).hasClass('item-cart__minus')) {
      proces = 'minus';
    } else {
      proces = 'plus';
    }
    funcPlusMinus(init, par, proces)
  })

  //* quantity function
  {
    if ($('[data-quantity="quantity"]').length > 0) {
      const quantityBlock = document.querySelectorAll('[data-quantity="quantity"]');

      const count = (button, whoNum, num) => {
        button.addEventListener('click', function(e) {
          whoNum = +num.innerHTML;
          if (this.id === 'quantity-plus') {
            num.innerHTML = ++whoNum;
          } else {
            if (whoNum <= 0) return
            num.innerHTML = --whoNum;
          }
        })
      }

      for (let i = 0; i < quantityBlock.length; i++) {
        const element = quantityBlock[i];
        const options = {
          minus: element.querySelector('#quantity-minus'),
          int: element.querySelector('#quantity-int'),
          plus: element.querySelector('#quantity-plus'),
        }
        options.newInt = +options.int.innerHTML;
        count(options.minus, options.newInt, options.int);
        count(options.plus, options.newInt, options.int);
      }
    }
  }
  //* quantity other function
  {
    if ($('[data-quantity="quantity-two"]').length > 0) {
      const quantityBlock = document.querySelectorAll('[data-quantity="quantity-two"]');

      const count = (button, whoNum, num, numMax) => {
        button.addEventListener('click', function(e) {
          whoNum = +num.innerHTML;
          if (this.id === 'quantity-plus') {
            if (whoNum >= +numMax) return;
            num.innerHTML = ++whoNum;
          } else {
            if (whoNum <= 0) return;
            num.innerHTML = --whoNum;
          }
        })
      }

      for (let i = 0; i < quantityBlock.length; i++) {
        const element = quantityBlock[i];
        const options = {
          minus: element.querySelector('#quantity-minus'),
          intFirst: element.querySelector('#quantity-int span:first-of-type'),
          intLast: element.querySelector('#quantity-int span:last-of-type'),
          plus: element.querySelector('#quantity-plus'),
        }
        options.newInt = +options.intFirst.innerHTML;
        count(options.minus, options.newInt, options.intFirst, options.intLast.innerHTML);
        count(options.plus, options.newInt, options.intFirst, options.intLast.innerHTML);
      }
    }
  }

    //show and sticky aside left
  if ($('.aside-left').hasClass('aside-left')) {
    var ScrollTop = 0;
    
    $(window).scroll(function(event){
      var st = $(this).scrollTop();
      if (st > ScrollTop){
        $('.aside-left').css('top', '30px');
      } else {
        $('.aside-left').css('top', '90px');
      }
      ScrollTop = st;

    });
  }


  
  // if($('.help-started__info').hasClass('help-started__info')) {
  //   var sTop = $('.nav-product').offset().top;
  //   var sHeight = $('.nav-product').height();
  //   var fTop = $('.footer').offset().top;
  //   var bannerTop = $('.blue-banner').offset().top;
  //   var top = $(document).scrollTop();
  //   let ScrollTop = 0;
  //   $(window).scroll(function(event){
      
  //     var st = $('.nav-product').scrollTop();
  //     if (st > ScrollTop){
  //       $('.nav-product').css('top', '30px');
  //       if (top >= sTop && (top + sHeight) <= fTop) {

  //         $('.nav-product').css({ 'position': 'fixed', 'top': '30px' });
  //     } else {
  //       $('.help-aside').removeAttr('style');
  //     }
        
  //     } else {
  //       $('.nav-product').css('top', '90px');
  //       if (top >= sTop && (top + sHeight) <= bannerTop) {
  //         $('.nav-product').css({ 'position': 'fixed', 'top': '90px' });
  //       } else {
  //         $('.nav-product').removeAttr('style');
  //       }

  //     }
  //     ScrollTop = st;

  //   });
      
  // }
  if(window.innerWidth > 991 ) {
    if($('.help-started__info').hasClass('help-started__info')) {
      var scrollPos = 0;
     
      $(window).scroll(function () { 
       
        let footertotop = ($('.footer').position().top);
        let bannerTop = ($('.blue-banner').position().top);
        let scrolltop = $(document).scrollTop()+570;
        let scrolltopBanner = $(document).scrollTop();
        let bannerHeight = $('#bannerTop').height();
        // difference between 
       let difference = scrolltop-footertotop;
       let differenceBanner = bannerHeight;
        console.log(bannerTop, scrolltopBanner);
        if (scrolltop > footertotop) {
        $('.help-aside').css('margin-top',  0-difference);
        } else if (scrolltopBanner < bannerTop) {
          $('.help-aside').css('margin-top',  differenceBanner);
          console.log(true);
        } else {
          $('.help-aside').css('margin-top',  '0');
        }
        
        });
    }
  }
  

  


    // $(window).scroll(function () { 

    //   // distance from top of footer to top of document
    //   let bannerTop = ($('.blue-banner').position().top);
      
     
    //   let scrolltop = $(document).scrollTop()+570;
    //   // difference between the two
    //  let difference = scrolltop+bannerTop;
      
      
    //   if (scrolltop < bannerTop) {
      
    //   $('.help-aside').css('margin-top',  difference);
    //   }
      
    //   else  {
    //   $('.help-aside').css('margin-top', 0);
    //   }
      
      
    //   });







  //validator email
  function validateEmail(email) {
    //eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  $('.form__input[type="email"]').keyup(function() {
    if(validateEmail(this.value)){
      $(this).parent().removeClass('error');
      if($('.modal-register')) {
        $('.modal-register button[disabled], .modal-login button.form__button').prop('disabled', false);
        $('.modal-register .form__errors-text').css('display', 'none');
      }
    }else{
      $(this).parent().addClass('error');
      if($('.modal-register')) {
        $('.modal-register button.form__button, .modal-login button.form__button').prop('disabled', true);
        $('.modal-register .form__errors-text').css('display', 'block');
      }
    }
  });


  $('.mobile-menu__info a[data-toggle="modal"]').click( function() {
    $('body').css({
      overflow:'visible',
    })
    $('.mobile-menu').css({
      left:'-100%',
    })
    $('#myModal').modal('hide')
  })

  $('.modal-menu-mobile a[data-toggle="modal"]').click( function() {
    $('#menu-mobile').modal('hide');
  })

  $('.modal-menu-mobile--not-shop a[data-toggle="modal"]').click( function() {
    $('#menu-mobile--not-shop').modal('hide');
  })

  //add default file
  if($('.modal.add-files-default').hasClass('add-files-default')) {
    const dropZoneDef = document.querySelectorAll('.add-files-default .drop-files');

    const dropZoneDefFiles = new Dropzone(dropZoneDef[0], {
      url: '/file/download',
      thumbnailWidth: 120,
      thumbnailHeight: 120,
      maxFiles: 5,
    });
  }

  if($('.modal.add-files').hasClass('add-files')) {
    const dropZoneEl = document.querySelectorAll('.add-files .drop-files');

      const myDropzoneFiles = new Dropzone(dropZoneEl[0], {
        url: '/file/coments',
        thumbnailWidth: 120,
        thumbnailHeight: 120,
        maxFiles: 5,
      });


      if(document.getElementById('columns-sort-drag')) {
      
        $('.add-files .btn-blue').click( function() {
          let arrayImg = [];
          let file = $('.add-files .drop-photo img');
          $(file).each( function() {
            if(!$(this).hasClass('load')) {
              let imgBase = $(this).attr('src')
              arrayImg.push(imgBase);
              $(this).addClass('load')
            }
          })
          let elemUl = $('.images-box-loader ul li:not(.img)')
          for(let i = 0; i < arrayImg.length; i++) {
            let image = new Image();
            image.src = arrayImg[i];
            if(!$(elemUl[i]).hasClass('ignore-elements')) {
              document.getElementById('columns-sort-drag').insertAdjacentHTML('beforeend', '<li class="ignore-elements"></li>');
              $('.images-box-loader ul li:not(.img)').append(image).removeClass('ignore-elements').addClass('sortable-drag img');
              document.getElementById('columns-sort-drag').insertAdjacentHTML('beforeend', '<li class="ignore-elements"></li>');
            }
            $(elemUl[i]).append(image).removeClass('ignore-elements').addClass('sortable-drag img');

          }

        })
      }
  }

  $('.form-add-comment__user select').on('select2:select', function (e) {
    var data = e.params.data;
    $('.form-add-comment__user figure span').text(data.title)
  });

  function calcEl (arrayEl) {
    for(let i = 0; i < arrayEl.length; i++) {
      let widthEl = $(arrayEl[i]).text().length;
      $(arrayEl[i]).css('width', (widthEl * 7.5) + 'px');
    }
  }

  function calcClick() {
    let checkOn = $('.check-on');
    let checkOff = $('.check-off');
    let arrayEl = [];
    arrayEl.push(...checkOn);
    arrayEl.push(...checkOff);
    calcEl(arrayEl)
  }

  //calc animate input radio
  if($('.check-on').hasClass('check-on')) {
    calcClick();
  }

  //max count strong textarea
  $('.max-text textarea, .form__single--max textarea').keyup(function() {
    var maxCount = Number($(this).parent().attr('data-maxlength'));
    var revText = this.value.length;

        if (this.value.length > maxCount)
            {
            this.value = this.value.substr(0, maxCount);
            }
        var cnt = (maxCount - revText);
        $(this).parent().find($('.count span:first-of-type')).text(revText)

  });
  //max count strong input
  $('.form__single--max input').keyup(function() {
    var maxCount = Number($(this).parent().attr('data-maxlength'));
    var revText = this.value.length;

        if (this.value.length > maxCount)
            {
            this.value = this.value.substr(0, maxCount);
            }
        var cnt = (maxCount - revText);
        $(this).parent().find($('.count span:first-of-type')).text(revText)

  });

  //* function button Options(three dots)
  {
    const btnOptionsWrap = document.querySelectorAll('.options');
    const btnOptions = document.querySelectorAll('.options__btn');

    body.addEventListener('click', e => {
      let activeClass = 'options--open';
      let activeClassIcon = 'icon-more-active';
      let classNameBackDrop = 'option-backDrop';

      if (e.target.offsetParent) {
        const targetoffset = e.target.offsetParent;
        const {type} = e.target.offsetParent.firstElementChild.dataset;

        if (type === 'options') {
          if (!targetoffset.classList.contains(activeClass)) {
              const blockBackDrop = document.createElement('div');
              blockBackDrop.classList.add(classNameBackDrop);
              targetoffset.classList.add(activeClass);
              targetoffset.appendChild(blockBackDrop);
              targetoffset.children[0].children[0].classList.add(activeClassIcon);
          } else {
            targetoffset.classList.remove(activeClass)
            targetoffset.querySelector('.' + classNameBackDrop).remove();
            targetoffset.children[0].children[0].classList.remove(activeClassIcon);
          }
        }
      }

      if (e.target.classList.contains(classNameBackDrop)) {
        btnOptionsWrap.forEach(element => {
          element.classList.remove(activeClass);
          const thisBackDrop = element.querySelector('.' + classNameBackDrop);
          const activeIcon = element.querySelector('.' + activeClassIcon);

          if (thisBackDrop) {
            element.parentNode.lastElementChild.removeChild(thisBackDrop)
          }
          if (activeIcon) {
            activeIcon.classList.remove(activeClassIcon);
          }
        });
      }
    });
  }

  //dashboard header select
  $('.user-select select').on('select2:select', function (e) {
    var data = e.params.data;
    $('.user-select__name').text(data.text)
  });

  $('.user-select select').on('select2:open', function (e) {
    $('.user-select__name').addClass('active')
  });
  $('.user-select select').on('select2:close', function (e) {
    $('.user-select__name').removeClass('active')
  });

  //scroll
  function resize() {
    ps.update();
  }


  if($('.toogle-box__scroll').hasClass('toogle-box__scroll')) {
    $('.toogle-box__scroll').each(function(){
      const ps = new PerfectScrollbar($(this)[0]);
    });
    var ps = new PerfectScrollbar('.toogle-box__scroll');
    window.onresize = resize;
  }

  $('.toogle-box__header .reset').click( function() {
    $(this).addClass('anim');
    setTimeout(function () {
      $('.toogle-box__header .reset').removeClass('anim');
    }, 3000)
  })

  $('.toogle-box__header .arrow-open').click( function() {
    $(this).parent().parent().toggleClass('open');
    $(this).parent().parent().next().slideToggle();
  })

  

    //drag and drop
    let sourceContainerId = '';

    // Allow multiple draggable items
    let dragSources = document.querySelectorAll('[draggable="true"]');
    dragSources.forEach(dragSource => {
        dragSource.addEventListener('dragstart', dragStart);
        dragSource.addEventListener('dragend', dragEnd);
    });

    function dragStart(e) {
        this.classList.add('dragging');
        e.dataTransfer.setData('text/plain', e.target.id);
        sourceContainerId = this.parentElement.id;
     
    }

    function dragEnd(e) {
        this.classList.remove('dragging');
    }

    // Allow multiple dropped targets
    let dropTargets = document.querySelectorAll(
        '[data-role="drag-drop-container"]'
    );
    dropTargets.forEach(dropTarget => {
        dropTarget.addEventListener('drop', dropped);
        dropTarget.addEventListener('dragenter', cancelDefault);
        dropTarget.addEventListener('dragover', dragOver);
        dropTarget.addEventListener('dragleave', dragLeave);
    });

    function dropped(e) {
        // execute function only when target container is different from source container
        if (this.id !== sourceContainerId) {
            cancelDefault(e);
            let id = e.dataTransfer.getData('text/plain');
            //e.target.appendChild(document.querySelector('#' + id));
            let element = document.querySelector('#' + id);
            $(element).css('display', 'none');
            let textEl = $(element).find('.card-alerts__title').text()
            let stateEl = `
                    <div class="product-tag"><strong>${textEl}</strong><a href="#" data-close="${id}" class="remove"><img src="images/icons/remove-white.svg" alt="remove-white"></a></div>
            `;
            document.querySelector('.form-add-comment__content').insertAdjacentHTML('beforeend', stateEl);
            this.classList.remove('hover');
        }
    }

    function dragOver(e) {
        cancelDefault(e);
        this.classList.add('hover');
    }

    function dragLeave(e) {
        this.classList.remove('hover');
    }

    function cancelDefault(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    //reset product
    $('.form-add-comment__content').on('click', 'a', function(e){
      e.preventDefault();
      let id = $(this).attr('data-close');
      $(this).parent().remove();
      $('#' + id).css('display', 'block');
    });

    // Accordion Menu
    let AccordionMenu = function(selector) {
      this.colMenu = document.querySelectorAll(`${selector} li`);
      let This = this;
      this.colMenu.forEach(function(items) {
          if (items.querySelector('ul')) {
              // items.firstElementChild.insertAdjacentHTML('beforeend', '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 451.847 451.847" xml:space="preserve"> <g> <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/> </g> </svg>');

              items.firstElementChild.onclick = function(e) {
                  e.preventDefault();

                  let isTrue = this.parentElement.classList.toggle('js-open');

                  if (isTrue) {
                      This.show(this.nextElementSibling);
                  } else {
                      This.hide(this.nextElementSibling);
                  }
              }
          }
      })
    }

    // Show an element
    AccordionMenu.prototype.show = function(elem) {
      // Get the natural height of the element
      var getHeight = function() {
          elem.style.display = 'block'; // Make it visible
          var height = elem.scrollHeight + 'px'; // Get it's height
          return height;
      };

      var height = getHeight(); // Get the natural height
      elem.style.height = height; // Update the height

      setTimeout(function() {
          elem.style.height = 'auto';
      }, 350);
    };

    // Hide an element
    AccordionMenu.prototype.hide = function(elem) {
      // Give the element a height to change from
      elem.style.height = elem.scrollHeight + 'px';

      // Set the height back to 0
      setTimeout(function() {
          elem.style.height = '0';
      }, 110);

      setTimeout(function() {
          elem.style.display = '';
      }, 700);
    };

    //* admin-menu
    {
      const adminMenu = document.querySelector('.admin-menu');
      const btnMinimize = document.querySelector('.admin-menu__btn-minimize');
      const adminMenuItem = document.querySelectorAll('.admin-menu__item--submenu');

      if (adminMenu) {
        $('.header__dashboard-burger').click (function () {
          if (window.matchMedia('(max-width: 991px)').matches) {
            $('.admin-menu').css('left', '0');
            $('.admin-menu').css('z-index', '9991');
            $('.header.header--dashboard').addClass('filter');
            $('.section-blur').addClass('filter');
            $('body').css('overflow', 'hidden');
          }
        });
        $('.admin-menu__close').click (function () {
          if (window.matchMedia('(max-width: 991px)').matches) {
            $('.admin-menu').css('left', '-100%');
            $('.admin-menu').css('z-index', '');
            $('.section-blur').removeClass('filter');
            $('.header.header--dashboard').removeClass('filter');
            $('body').css('overflow', 'visible');
          }
        });

        new AccordionMenu('.admin-menu__nav');
        btnMinimize.addEventListener('click', (e) => {
          e.preventDefault();

          adminMenu.classList.toggle('admin-menu--minimize');

          if (adminMenu.classList.contains('admin-menu--minimize')) {
            for (let i = 0; i < adminMenuItem.length; i++) {
              const element = adminMenuItem[i];
              element.classList.remove('js-open');
              element.querySelector('.admin-menu__list').style = '';
            }
          }
        })

        for (let i = 0; i < adminMenuItem.length; i++) {
          const element = adminMenuItem[i];
          element.addEventListener('click', () => {
            if (adminMenu.classList.contains('admin-menu--minimize')) {
              adminMenu.classList.remove('admin-menu--minimize');
            }
          })
        }
        


        //* function resize
        window.addEventListener('resize', function() {
          if (!window.matchMedia('(max-width: 991px)').matches) {
            $('.admin-menu').css('left', '');
            $('.admin-menu').css('z-index', '');
          }
          if (window.matchMedia('(max-width: 991px)').matches) {
            $('.admin-menu').css('top', '');
          }
        }, false);
      }

      //* function for "adminMenu" position when scrolling, and calculate height
      if (adminMenu) {
        const adminMenuNav = adminMenu.querySelector('.admin-menu__nav');
        const adminMenuList = adminMenu.querySelector('.admin-menu__list');
        const scrollDiv = adminMenu.querySelector('.admin-menu__wrap');

        const checkAside = (param, any) => {
          if (param) {
            if (window.matchMedia('(max-width: 991px)').matches) {
              param.style.top = '';
            } else {
              param.style.top = any + 'px';
            }
          }
        }

        const resize = (elem) => {
          elem.update();
        }

        const elScroll = new PerfectScrollbar(scrollDiv);

        window.onresize = resize(elScroll);

        const positionSt = () => {
          const maxPadding = 94;
          const minPadding = 10;

          body.addEventListener('wheel', function(e) {
            let meNow = false;

            if (!window.matchMedia('(max-width: 991px)').matches) {
              if (e.path) {
                for (let i = 0; i < e.path.length - 3; i++) {
                  const element = e.path[i];
                  if (element) {
                    if (element.classList.contains('admin-menu')) {
                      meNow = true
                    }
                  }
                }
              }

              if (!meNow) {
                let newHeightDiv = 0;
                let newHeightadminMenuList = adminMenuList.offsetHeight;

                if (e.deltaY < 0) {
                  if (adminMenuNav) {
                    checkAside(adminMenu, maxPadding);
                    adminMenuNav.classList.remove('js-no-header')
                  }
                } else {
                  if (adminMenuNav) {
                    checkAside(adminMenu, minPadding);
                    adminMenuNav.classList.add('js-no-header') // add class for height calculation
                  }
                }

                //* height calculation due to header being hidden
                if (scrollDiv.length) {
                  if (scrollDiv.offsetParent) { //* height calculation
                    newHeightDiv = (window.innerHeight - header.clientHeight - 20); // 20 - correction because of the shadows
                    newHeightadminMenuList = adminMenuList.offsetHeight;
                    if (scrollDiv.offsetParent.classList.contains('admin-menu__nav')) {
                      if ( (newHeightDiv - 80) > newHeightadminMenuList) {
                        scrollDiv.style.height = '';
                      } else {
                      if (scrollDiv.offsetParent.classList.contains('js-no-header')) {
                          scrollDiv.style.height = (newHeightDiv - 15 ) + 'px'; // writing the height
                        } else {
                          scrollDiv.style.height = (newHeightDiv - 100) + 'px'; // writing the height // 120 - correction
                        }
                      }
                    }
                  }
                }
              }
            }
          })

          adminMenu.addEventListener('mouseenter', function() {
            let meNow = false;

            if (adminMenu.offsetHeight > (window.innerHeight - header.clientHeight - 30)) {
              setTimeout(() => {
                heightWhat();
              }, 100);
            }
            if (!meNow) return false
          })
        }

        const heightWhat = () => {
          // const modalHeaderHeight = 110; // default height Header in modal
          let newHeightDiv = 0;
          let newHeightadminMenuList = adminMenuList.offsetHeight;

          resize(elScroll);
          // SimpleScrollbar.initEl(scrollDiv);
          if (scrollDiv.offsetParent) { //* height calculation "aside-right" and "aside-left"
            newHeightDiv = (window.innerHeight - header.clientHeight - 20); // 20 - correction because of the shadows
            newHeightadminMenuList = adminMenuList.offsetHeight;

            if (scrollDiv.offsetParent.classList.contains('admin-menu__nav')) {
              if (window.matchMedia('(max-width: 991px)').matches) {
                scrollDiv.style.height = (newHeightDiv) + 'px'; // writing the height // 120 - correction
                // if (window.matchMedia('(max-width: 767px)').matches) {
                //   scrollDiv.style.height = (newHeightDiv - 30) + 'px'; // writing the height // 120 - correction
                // }
              } else {
                if ( (newHeightDiv - 80) > newHeightadminMenuList) {
                  scrollDiv.style.height = '';
                } else {
                  if (scrollDiv.offsetParent.classList.contains('js-no-header')) {
                    scrollDiv.style.height = (newHeightDiv - 15 ) + 'px'; // writing the height
                  } else {
                    scrollDiv.style.height = (newHeightDiv - 100) + 'px'; // writing the height // 120 - correction
                  }
                }
              }
            }
          }
        }

        //* function init
        heightWhat();
        positionSt();

        //* function resize
        window.addEventListener('resize', function() {
          heightWhat();
          positionSt();
        }, false);
      }
    }

    //* scroll - perfect-scrollbar
    {
      if($('[data-scroll="perfect-scrollbar"]').length > 0) {
        const psItems = document.querySelectorAll('[data-scroll="perfect-scrollbar"]')

        const resize = (elem) => {
          elem.update();
        }

        for (let i = 0; i < psItems.length; i++) {
          const element = psItems[i];

          const ps = new PerfectScrollbar(element);

          window.onresize = resize(ps);
        }
      }
    }

    //* mask number modal diskount
    if ($('.modal-give-discount').length > 0) {
      $('.modal-give-discount .number input').mask('00');
    }

    //select2 new type
    $('[data-toggle="select-parent"]').on('select2:open', function (e) {
      let thisElem = $(this).parent().prev();
      $(thisElem).addClass('open');
    });

    $('[data-toggle="select-parent"]').on('select2:close', function (e) {
      let thisElem = $(this).parent().prev();
      $(thisElem).removeClass('open');
    });

    $('[data-toggle="select-parent"]').on('select2:select', function (e) {
      let thisElem = $(this).parent().prev();
      var data = e.params.data;
      $(thisElem).find('strong').text(data.text);
    });


   

    //emotion script
    function emotionCalc(item) {
      let atr = Number($(item).attr('data-progress'));
      $(item).children('.line').css('height', atr + 'px')
    }

    if($('.statistic-box__emotion')) {
      let array = $('.progress');
      for(let i = 0; i<= array.length; i++) {
        emotionCalc(array[i]);
      }
    }

    //focus element .form__single--atr
    $('.form__single--select input, .form__single--attr input').focus(function() {
      $(this).parent().addClass('focus');
    });
    $('.form__single--select input, .form__single--attr input').focusout(function() {
      $(this).parent().removeClass('focus');
    });

    //height descktop
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    //toogle next option
    $('.toogle-next').click( function() {
      $(this).toggleClass('active');
      $(this).next().slideToggle();
    })

    //visible and hide number card
    $('.form__single .visible').click( function() {
      if(!$(this).hasClass('hide')) {
        $(this).parent().find($('.select2-selection__choice')).addClass('hide');
        $(this).addClass('hide');
      } else {
        $(this).removeClass('hide');
        $(this).parent().find($('.select2-selection__choice')).removeClass('hide');
      }
    });
    $('.form__single--card .visible ').click( function() {
      if($(this).prev().attr('type') == 'text') {
        $(this).prev().attr('type', 'password');
        $(this).prev().addClass('hide');
      } else {
        $(this).prev().attr('type', 'text');
        $(this).prev().removeClass('hide');
      }
    })

    //check card
    //check status additional
    $('.card-check input').click(function() {
      if ($(this).prop('checked')) {
        $('.card-form').find($('.form__single--card')).hide();
        $('.card-form').find($('.form__single--select')).show();
      } else {
        $('.card-form').find($('.form__single--card')).show();
        $('.card-form').find($('.form__single--select')).hide();
      }
    })

    //mask cvv card
    $('.card-cvv input').mask('000');
    $('.form__single--card input').mask('0000 0000 0000 0000');

    //mask number
  $('.number input').mask('0000000');

    //froala init
    if(document.querySelector('.froala-edit')) {
      var editor = new FroalaEditor('.froala-edit', {
        listAdvancedTypes: true,
        placeholderText: 'Add your page content here',
        pluginsEnabled: ['image', 'link', 'lists', 'codeView'],
        toolbarButtons: ['fontFamily', 'underline', 'formatOL', 'formatUL', 'outdent', 'indent', 'insertLink', 'insertImage', 'html'],
        linkStyles: {
          class1: 'Class 1',
          class2: 'Class 2',
        },
      });
    }

    //mobile text area
    if(document.querySelector('.mobile-textarea')) {
      let text = document.querySelector('.mobile-textarea').value;
      let textLenght = text.length;
      document.querySelector('.mobile-textarea').addEventListener('input', function(){
        this.value = text + this.value.slice(textLenght);
      });
    }

    //check status additional
    $('.single-check .groups__check').click(function() {
      if ($(this).find('input').prop('checked')) {
        $(this).prev().find($('b')).text('enabled');
      } else {
        $(this).prev().find($('b')).text('disabled');
      }
    })

    //function calc position
    function postionMessagesBox() {
      if($('.form-add-comment').parent().hasClass('messages--my-post')) {
      let left = document.querySelector('.form-add-comment').parentElement.getBoundingClientRect().left;
      let width = $('.form-add-comment').parent().width();
        $('.form-add-comment').css({
          left: left,
          width: width,
        });
      }
    }
    //position message box
    if(document.querySelector('.form-add-comment')) {
      postionMessagesBox();
    }

    window.addEventListener('resize', postionMessagesBox)

    //send toogle
    $('.toogle-box__scroll').on('click', '.select-user-invite a', function(e) {
      e.preventDefault();
      $(this).toggleClass('send');
    })

    //video play
    function playVid(parent) {
      parent.play();
    }

    function pauseVid(parent) {
      parent.pause();
    }

    if(document.querySelector('video')) {
      $('video').each( function() {
        pauseVid(this);
      })
    }
    {
      $('.video-play').each(function() {
        $(this).click(function (e) {
          $(this).removeClass('video-btn-none');
          e.preventDefault;
          let videoElem = e.target.nextElementSibling;
          if ($(this).hasClass('pause')) {
            pauseVid(videoElem);
            $(this).toggleClass('pause');
          } else {
            $(this).addClass('video-btn-none');
            playVid(videoElem);
            $(this).toggleClass('pause');
          }
        })
      })
    }

    //* function hover "reaction-btn-like"
    {
      if ($('.reaction__wrap-link').length > 0) {
        const reaction = {
          reactionWrap: document.querySelectorAll('.reaction__wrap-link--reaction'),
          ractionDivVisible: document.querySelector('.reaction-btn-like'),
        }
        const hoverReaction = () => {
          let timer = [];
          let classShow = 'js-reaction-show';
          let classHover = 'js-reaction-hover';
          if (reaction.reactionWrap.length) {
            reaction.reactionWrap.forEach(element => {
              element.addEventListener('mouseenter', (e) => {
                timer[1] = setTimeout(function() {
                  element.classList.add(classShow);
                  element.querySelector('.reaction-btn-like').classList.add(classShow);
                }, 500);
                clearInterval(timer[2]);
                element.classList.add(classHover)
              })
              element.addEventListener('mouseleave', (e) => {
                clearInterval(timer[1]);
                timer[2] = setTimeout(function() {
                  element.classList.remove(classShow);
                  element.querySelector('.reaction-btn-like').classList.remove(classShow);
                }, 500);
                element.classList.remove(classHover)
              })
            });
          }
        }

        hoverReaction();
      }
    }

    //slide toogle package
    $('.package-list__head').click( function(e) {
      e.preventDefault();
      $(this).toggleClass('open')
      $(this).next().slideToggle();
    })

    //checked toogle
    $('.destination-box input').click(function() {
      let thiEl = $(this);
      if($(this).prop('checked')) {
        $('[name="url-type"]').not(this).parent().next().slideUp();
        $(this).parent().next().slideDown();
      }
    })

    //set statistic
    $('.overview__select .overview__item').click( function() {
      $('.overview__select .overview__item').removeClass('active');
      $('.overview__full .overview__full--item').removeClass('show');
      $(this).addClass('active');
      let count = $(this).attr('data-target');
      $('#'+ count).addClass('show');
    })

    function sizeSearch() {
      if($('body').width() > 1541) {
        if(document.querySelector('.main') == null ? false : true && !$('.main').hasClass('main--fluid')) {
          let left = document.querySelector('.main').getBoundingClientRect().left;
          $('.header__search').css({
            position: 'absolute',
            maxWidth: $('.main').width(),
            top: '50%',
            transform: 'translate(0, -50%)',
            left: left,
          })
        }
      } else {
        $('.header__search').css({
          position: 'static',
          top: 'auto',
          transform: 'none',
        })
      }

      if($('body').width() > 1480) {
        if($('.main').hasClass('main--fluid')) {
          let left = document.querySelector('.header__search').getBoundingClientRect().left;
          let leftContainer = document.querySelector('.main.main--fluid').parentElement.parentElement.getBoundingClientRect().left;
          let currentElement = $('.main.main--fluid').parent();
          let position = (left - leftContainer) - 30;
          currentElement.css({
            paddingLeft: position < 0 ? 0 : position,
            marginLeft: -15,
          })
        }
      } else {
        let currentElement = $('.main.main--fluid').parent();
        currentElement.css({
          paddingLeft: '219px',
          marginLeft: 0,
        })
      }

      if($('body').width() < 425) {
        $('.header__search .search input').attr('placeholder', 'Search for …')
      } else {
        $('.header__search .search input').attr('placeholder', 'Search for something')
      }
    }

    sizeSearch();

    window.addEventListener('resize', sizeSearch)

    //mask price
  $('.usd input').mask('0000000');

  //open modal create goss
  $('.button-create-goss').click( function(e) {
    e.preventDefault()
    let heightElem = $('.header').height();
    $('body .aside-right').addClass('show');
    $('html').addClass('blocked');
    if($('.header').hasClass('headroom--unpinned')) {
      $('body .aside-right').css('top', '0px')
      $('body .create-new-goss').css({
        paddingBottom: '80px',
      })
    } else {
      $('body .aside-right').css({
        top: heightElem,
      })
      $('body .create-new-goss').css({
        paddingBottom: '140px',
      })
    }
  })

  //close modal create goss
  $('.aside-right .back-title').click( function(e) {
    e.preventDefault()
    $('body .aside-right').removeClass('show');
    $('html').removeClass('blocked');
  })

  //* init lightGallery
  {
    const postLightGallery = $('.grid-gallery').lightGallery({
      selector: '.grid-gallery__selector',
      exThumbImage: 'data-src',
      width: '100%',
      height: '100%',
      thumbWidth: 120,
      thumbContHeight: 177,
      thumbMargin: 16,
      hideBarsDelay: 0,
      thumbnail: true,
      // animateThumb: false,
      showThumbByDefault: true,
      zoom: false,
      share: false,
      rotate: false,
      hash: false,
      autoplay: false,
      download: false,
      fullScreen: false,
    });

    // Perform any action the gallery
    postLightGallery.on('onBeforeOpen.lg',function(){
      $('.section-blur').addClass('filter');
      $('.menu-bottom').addClass('filter');
    });
    postLightGallery.on('onCloseAfter.lg',function(){
      $('.section-blur').removeClass('filter');
      $('.menu-bottom').removeClass('filter');
    });
  }

  
  $('.if-option-single__select select').on('select2:open', function (e) {
    const evt = 'scroll.select2';
    $(e.target).parents().off(evt);
    $(window).off(evt);
  });



  function selectUser() {
    let position = document.querySelector('.user-select__photo').getBoundingClientRect().left;	
document.documentElement.style.setProperty('--pos', `${position - 87}px`);	
  }

  if(document.querySelector('.user-select__photo') == null ? false : true) {
    selectUser();
    window.addEventListener('resize', selectUser);
  }
 

// //campaign checked

$('.create-campaign .form-radio[data-id="start-date"]').on('click', function() {
  $('.double-date[data-id="start-date"]').slideDown();
  $('.double-date[data-id="start-date"]').next().slideUp();
});

$('.create-campaign .form-radio[data-id="end-date"]').on('click', function() {
  $('.double-date[data-id="end-date"]').slideDown();
  $('.double-date[data-id="end-date"]').prev().slideUp();
});

$('.create-campaign .del-date').on('click', function() {
  $(this).parent().hide();
})


$('.create-campaign__add-date').on('click', function() {
  $('.create-campaign__date-content').append(`<div class="double-date">
  <div class="double-date__select">
 <div
  class="groups__box-small  form__single--date form__single--fluid">
  <input type="text" class="form__input flatpickr-input"
    data-toggle="datepicker" required="" readonly="readonly" placeholder="Start date">
   <span class="arrow"></span>
    <span class="form__symbol-error"></span>
     </div>
     <div class="form__single--text ">
     <span>to</span>
 </div>
 <div
 class="groups__box-small  form__single--date form__single--fluid">
 <input type="text" class="form__input flatpickr-input"
     data-toggle="datepicker" required="" readonly="readonly"
     placeholder="End date">
 <span class="arrow"></span>
 <span class="form__symbol-error"></span>
</div>
<a href="#" class="del-date">
 <img src="images/icons/close-blue.svg" alt="delite">
</a>
</div>
                                                                                      
  </div>`).fadeIn(1000);
  if ($('input[data-toggle="datepicker"]').length) {
    Flatpickr($('input[data-toggle="datepicker"]'), {
      disableMobile: 'true',
      altFormat: 'F j, Y',
      dateFormat: 'm/d/Y',
    });
  }
})

$('.create-campaign__condition-add').on('click', function() {
  $('.create-campaign__condition-content').append(`<div class="create-campaign__condition-select">
  <span>If</span>
  <div
      class="form__single--select form__single--select-default form__single--fluid">

      <div class="select-before">
          <select class="form__select form__select--default"
              data-toggle="select"  tabindex="-1"
              aria-hidden="true">
              <option value="#">shopper spent</option>
              <option value="#">shopper zip</option>
              <option value="#">shopper country</option>
              <option value="#">shopper state</option>
              <option value="#">searched keywords</option>
              <option value="#">shopper tags</option>
          </select>
      </div>

  </div>
</div>`).fadeIn(1000);
$('select.form__select--default[data-toggle="select"]').each( function() {
  $(this).select2({
    minimumResultsForSearch: Infinity,
    width: '100%',
  });
  $(this).select2({
    minimumResultsForSearch: Infinity,
  });
})
})


$('.create-campaign .nav-link').on('click', function() {
  console.log($(this).attr('data-number'));
  if ($(this).attr('data-number') == 'Content') {
    $('.create-campaign .aside-right').show(200);
  } else {
    $('.create-campaign .aside-right').hide(200);
  }
 
});







  

  $('.open-full').click( function(e) {
    $(this).toggleClass('open');
    e.preventDefault();
    $(this).parent().parent().parent().next().slideToggle();
  })

  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
