import Sortable from 'sortablejs/modular/sortable.core.esm';
import PerfectScrollbar from 'perfect-scrollbar';
import 'jquery-mask-plugin';
import Dropzone from 'dropzone';
import FroalaEditor from 'froala-editor';
import ConfirmModal from 'confirmmodal.js/lib/ConfirmModal';
const mime = require('mime');

export default {
  init() {
      $('.images-box-loader ul li:not(.img)').on('click', function () {
        $('#add-files').modal('show')
      })
      $('.modal').on('shown.bs.modal', function () {
        $('.nav-product').addClass('hide')
      })
      $('.modal').on('hidden.bs.modal', function(){
        if(!$('.modal.show').hasClass('show')) {
          $('.nav-product').removeClass('hide')
        }
      });
      
      //select type product
      $('select.form__single--type-product').on('select2:select', function (e) {
        var data = e.params.data;
        $('.product-type-box__body >div').hide();
        $(data.id).show();
    });

    //drag and drop image

    let countArray = 0;
    function removeImgBox() {
      if(window.innerWidth < 607 && window.innerWidth >= 521) {
        countArray = 7;
        let arrayEl = $('#columns-sort-drag li');
        for(let i = 0; i<arrayEl.length; i++) {
          if(i >= countArray) {
            $(arrayEl[i]).remove();
          }
        }
      } else if(window.innerWidth < 520) {
        countArray = 5;
        let arrayEl = $('#columns-sort-drag li');
        for(let i = 0; i<arrayEl.length; i++) {
          if(i >= countArray) {
            $(arrayEl[i]).remove();
          }
        }
      }
    }
    removeImgBox()

    if(document.getElementById('columns-sort-drag')) {
      var elTwo = document.getElementById('columns-sort-drag');
      /*eslint-disable no-unused-vars*/
      var sortableTwo = Sortable.create(elTwo, {
        filter: '.ignore-elements',
        swap: true,
        swapClass: 'highlighted',
        animation: 100,
        // Event when you move an item in the list or between lists
      onMove: function (evt) {
        if($(evt.related).hasClass('ignore-elements')) {
          return false;
        }
      },
      });

      //remove size
      $(window).resize( function() {
        removeImgBox()
      });
    }
  

  

    //add features
    $('.list-features__add').on('click', function (e) {
      let featuresEl = `<div class="list-features__single">
      <div class="form__single form__single--fluid">
          <label class="form__label">Title</label>
          <div class="position-relative w-100" data-maxlength="120">
              <input type="text" class="form__input" required="" placeholder="Title">
          </div>
          <span class="form__symbol-error"></span>
      </div>
      <div class="form__single form__single--fluid">
          <label class="form__label">Price (optional)</label>
          <div class="position-relative w-100" data-maxlength="120">
              <input type="text" class="form__input" required="" placeholder="Title">
          </div>
          <span class="form__symbol-error"></span>
      </div>
      <a href="#" class="list-features__remove"><img src="images/icons/close-24px.svg" alt="close"></a>
  </div>`
      e.preventDefault();
      $(this).prev().append(featuresEl)
  });

  //remove feature
    $('.list-features').on('click', '.list-features__remove', function (e) {
      e.preventDefault();
      let arrayEl = $(this).parent().parent().find('.list-features__single');
      if(arrayEl.length > 1) {
        $(this).parent().remove();
      }
  });

  //select-page
  {

     // * function for "Select" template user add image
     let arrayInfo = [
       {
         id: 10,
         idProduct: 252860580,
         date: '02.10.2020',
         text: 'Title here could be so much longer…',
         img: 'images/product/selet-page.png',
         selected: true,
       },
       {
         id: 11,
         idProduct: 252860580,
         date: '02.10.2020',
         text: 'Title here could be so much longer…',
         img: 'images/product/selet-page.png',
         selected: false,
       },
       {
         id: 12,
         idProduct: 252860580,
         date: '02.10.2020',
         text: 'Title here could be so much longer…',
         img: 'images/product/selet-page.png',
         selected: false,
       },
       {
         id: 13,
         idProduct: 252860580,
         date: '02.10.2020',
         text: 'Title here could be so much longer…',
         img: 'images/product/selet-page.png',
         selected: false,
       },
       {
         id: 14,
         idProduct: 252860580,
         date: '02.10.2020',
         text: 'Title here could be so much longer…',
         img: 'images/product/selet-page.png',
         selected: false,
       },
       {
         id: 15,
         idProduct: 252860580,
         date: '02.10.2020',
         text: 'Title here could be so much longer…',
         img: 'images/product/selet-page.png',
         selected: false,
       },
    ]

     if($('.form__single--select-page select[data-toggle="select-page"]')) {
      let parentThis = null;
      $('select[data-toggle="select-page"]').each( function() {
        parentThis = $(this).parent().parent().parent().parent();
        $(this).select2({
          minimumResultsForSearch: Infinity,
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
                <div class="selected-item__photo"
                  style="background-image: url('${state.img}');">
                </div>
                <div class="select-info">
                  <strong>${state.text}</strong>
                  <ul>
                  <li>ID: <span>${state.idProduct}</span></li>
                  <li><span>${state.date}</span></li>
                  </ul>
                </div>
              </div>
            `);
  
            return $state;
          },
          dropdownParent: $(parentThis),
        });
      })
     }

     $('select[data-toggle="select-page"]').on('select2:selecting', function (e) {
       let maxLength = Number($(this).attr('maximum-length'))
       let countArr = $('.select2-results__option[aria-selected="true"]').length;
       maxLength == countArr ? e.preventDefault() : '';
    });

     //select2 select
     $('[data-toggle="select-page"]').on('select2:select', function (e) {
       $(this).next().find('input').val('')
      var data = e.params.data;
      let stateEl = `
            <div class="selected-item">
            <div class="selected-item__left">
                <div class="selected-item__photo"
                    style="background-image: url('${data.img}');">
                </div>
                <div class="selected-item__info">
                    <strong>${data.text}</strong>
                    <ul>
                        <li>ID: <span>${data.idProduct}</span></li>
                        <li><span>${data.date}</span></li>
                    </ul>
                </div>
            </div>
            <div class="selected-item__right">
                <a href="#" id="${data.id}">Delete</a>
            </div>
        </div>
        `;
      document.querySelector('.page-box__result').insertAdjacentHTML('beforeend', stateEl);
  });

  //select2 custom scroll product
  //scroll
  $('[data-toggle="select-page"]').on('select2:open', function (e) {
    function resizeLine() {
      psLine.update();
    }
    var psLine = new PerfectScrollbar('ul.select2-results__options');
    window.onresize = resizeLine;
    setTimeout( function() {
      resizeLine();
    }, 1)
  });
  //select2 remove checked element
  $('[data-toggle="select-page"]').on('select2:unselect', function (e) {
    $(this).next().find('input').val('')
    var id = e.params.data.id;
    $('#' + id).parent().parent().remove();
  });
  //click create object
  $('.page-box__result').on('click', 'a', function(e) {
    e.preventDefault();
    let id = $(this).attr('id');
    let selectEl = $(this).parent().parent().parent().parent().find($('select'))
    let arraySelected = $(selectEl).val();
    delete arraySelected[arraySelected.indexOf(id)]
    $(selectEl).val(arraySelected).trigger('change');
    //remove item
    $(this).parent().parent().remove();
   })
  }

  //select-page--is-one
  {

    // * function for "Select" template user add image
    let arrayInfo = [
      {
        id: 10,
        idProduct: 252860580,
        date: '02.10.2020',
        text: 'Title here could be so much longer…',
        img: 'images/product/selet-page.png',
      },
      {
        id: 11,
        idProduct: 252860580,
        date: '02.10.2020',
        text: 'Title here could be so much longer…',
        img: 'images/product/selet-page.png',
        selected: false,
      },
      {
        id: 12,
        idProduct: 252860580,
        date: '02.10.2020',
        text: 'Title here could be so much longer…',
        img: 'images/product/selet-page.png',
        selected: false,
      },
      {
        id: 13,
        idProduct: 252860580,
        date: '02.10.2020',
        text: 'Title here could be so much longer…',
        img: 'images/product/selet-page.png',
        selected: false,
      },
      {
        id: 14,
        idProduct: 252860580,
        date: '02.10.2020',
        text: 'Title here could be so much longer…',
        img: 'images/product/selet-page.png',
        selected: false,
      },
      {
        id: 15,
        idProduct: 252860580,
        date: '02.10.2020',
        text: 'Title here could be so much longer…',
        img: 'images/product/selet-page.png',
        selected: false,
      },
   ]

    if($('.form__single--select-page select[data-toggle="select-page--is-one"]')) {
     let parentThis = null;
     $('select[data-toggle="select-page--is-one"]').each( function() {
       parentThis = $(this).parent().parent().parent().parent();
       $(this).select2({
         minimumResultsForSearch: Infinity,
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
               <div class="selected-item__photo"
                 style="background-image: url('${state.img}');">
               </div>
               <div class="select-info">
                 <strong>${state.text}</strong>
                 <ul>
                 <li>ID: <span>${state.idProduct}</span></li>
                 <li><span>${state.date}</span></li>
                 </ul>
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
    $('[data-toggle="select-page--is-one"]').on('select2:select', function (e) {
     var data = e.params.data;
     let pathResult = $(this).parent().parent().parent().parent().parent().parent().parent().find($('.if-option-single__result'))
     let stateEl = `
           <div class="selected-item" id="${data.id}">
           <div class="selected-item__left">
               <div class="selected-item__photo"
                   style="background-image: url('${data.img}');">
               </div>
               <div class="selected-item__info">
                   <strong>${data.text}</strong>
                   <ul>
                       <li>ID: <span>${data.idProduct}</span></li>
                       <li><span>${data.date}</span></li>
                   </ul>
               </div>
           </div>
           <div class="selected-item__right">
               <a href="#" class="remove-product">Delete</a>
           </div>
       </div>
       `;
     $(pathResult).append(stateEl);
 });

 //select2 custom scroll product
 //scroll
 $('[data-toggle="select-page--is-one"]').on('select2:open', function (e) {
   function resizeLine() {
     psLine.update();
   }
   var psLine = new PerfectScrollbar('ul.select2-results__options');
   window.onresize = resizeLine;
   setTimeout( function() {
     resizeLine();
   }, 1)
 });
 //select2 remove checked element
 $('[data-toggle="select-page--is-one"]').on('select2:unselect', function (e) {
   let selectResult = $(this).parent().parent().parent().parent().parent().parent().parent().find($('.selected-item'));
   var id = e.params.data.id;
   $(selectResult).each(function() {
     if($(this).attr('id') == id) {
       $(this).remove();
     }
   })
 });
 //click create object
 $('.if-option-single--product').on('click', 'a.remove-product', function(e) {
   e.preventDefault();
   let id = $(this).parent().parent().attr('id');
   let selectEl = $(this).parent().parent().parent().parent().find($('select'))
   let arraySelected = $(selectEl).val();
   delete arraySelected[arraySelected.indexOf(id)]
   $(selectEl).val(arraySelected).trigger('change');
   //remove item
   $(this).parent().parent().remove();
  })
 }

  //select-page--single
  {

    // * function for "Select" template user add image
    let arrayInfo = [
      {
        id: 10,
        idProduct: 252860580,
        date: '02.10.2020',
        text: 'Title here could be so much longer…',
        img: 'images/product/selet-page.png',
        selected: true,
      },
      {
        id: 11,
        idProduct: 252860580,
        date: '02.10.2020',
        text: 'Title here could be so much longer…',
        img: 'images/product/selet-page.png',
        selected: false,
      },
      {
        id: 12,
        idProduct: 252860580,
        date: '02.10.2020',
        text: 'Title here could be so much longer…',
        img: 'images/product/selet-page.png',
        selected: false,
      },
      {
        id: 13,
        idProduct: 252860580,
        date: '02.10.2020',
        text: 'Title here could be so much longer…',
        img: 'images/product/selet-page.png',
        selected: false,
      },
      {
        id: 14,
        idProduct: 252860580,
        date: '02.10.2020',
        text: 'Title here could be so much longer…',
        img: 'images/product/selet-page.png',
        selected: false,
      },
      {
        id: 15,
        idProduct: 252860580,
        date: '02.10.2020',
        text: 'Title here could be so much longer…',
        img: 'images/product/selet-page.png',
        selected: false,
      },
   ]

    if($('.form__single--select-page select[data-toggle="select-page--single"]')) {
     let parentThis = null;
     $('select[data-toggle="select-page--single"]').each( function() {
       parentThis = $(this).parent().parent().parent().parent();
       $(this).select2({
         minimumResultsForSearch: Infinity,
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
               <div class="selected-item__photo"
                 style="background-image: url('${state.img}');">
               </div>
               <div class="select-info">
                 <strong>${state.text}</strong>
                 <ul>
                 <li>ID: <span>${state.idProduct}</span></li>
                 <li><span>${state.date}</span></li>
                 </ul>
               </div>
             </div>
           `);
 
           return $state;
         },
         dropdownParent: $(parentThis),
       });
     })
    }

    $('select[data-toggle="select-page--single"]').on('select2:selecting', function (e) {
      let maxLength = Number($(this).attr('maximum-length'))
      let countArr = $('.select2-results__option[aria-selected="true"]').length;
      let resulPath = $(this).parent().parent().parent().parent().next().find($('.selected-item'));
      $(resulPath).remove();

      //remove select info
      $(this).val(null).trigger('change');
   });

    //select2 select
    $('[data-toggle="select-page--single"]').on('select2:select', function (e) {
     var data = e.params.data;
     let resulPath = $(this).parent().parent().parent().parent().next();
     let stateEl = `
           <div class="selected-item">
           <div class="selected-item__left">
               <div class="selected-item__photo"
                   style="background-image: url('${data.img}');">
               </div>
               <div class="selected-item__info">
                   <strong>${data.text}</strong>
                   <ul>
                       <li>ID: <span>${data.idProduct}</span></li>
                       <li><span>${data.date}</span></li>
                   </ul>
               </div>
           </div>
           <div class="selected-item__right">
               <a href="#" id="${data.id}">Delete</a>
           </div>
       </div>
       `;
     $(resulPath).append(stateEl);
 });

 //select2 custom scroll product
 //scroll
 $('[data-toggle="select-page--single"]').on('select2:open', function (e) {
   function resizeLine() {
     psLine.update();
   }
   var psLine = new PerfectScrollbar('ul.select2-results__options');
   window.onresize = resizeLine;
   setTimeout( function() {
     resizeLine();
   }, 1)
 });
 //select2 remove checked element
 $('[data-toggle="select-page--single"]').on('select2:unselect', function (e) {
   var id = e.params.data.id;
   let resulPath = $(this).parent().parent().parent().parent().next().find($('.selected-item'));
   $(resulPath).each( function() {
     if($(this).find($('a')).attr('id') == id) {
       $(this).remove();
     }
   })
 });
 //click create object
 $('.page-box__result').on('click', 'a', function(e) {
   e.preventDefault();
   let id = $(this).attr('id');
   let selectEl = $(this).parent().parent().parent().parent().find($('select'))
   let arraySelected = $(selectEl).val();
   delete arraySelected[arraySelected.indexOf(id)]
   $(selectEl).val(arraySelected).trigger('change');
   //remove item
   $(this).parent().parent().remove();
  })
 }



  //clone size select
  $('.size-select__add').click( function(e) {
    e.preventDefault();
    let count = $(this).prev().find($('.size-select__single')).length;
    let selectEl = `
    <div class="size-select__single">
    <div class="members__form">
        <span class="form__note">
            Option ${count + 1}
        </span>
        <div
            class="form__single--select form__single--select-default form__single--fluid">
            <div class="select-before">
                <select
                    class="form__select form__select--default"
                    data-toggle="select"
                    data-select2-id="10" tabindex="-1"
                    aria-hidden="true">
                    <option value="Size">Size</option>
                    <option value="SizeTwo">SizeTwo
                    </option>
                </select>
            </div>
        </div>
    </div>
    <div class="members__form">
        <span class="form__note">
            List of options
        </span>
        <div
            class="form__single form__single--select form__single--select-tag form__single--fluid">
            <select class="form__input"
                data-toggle="select-tag" multiple="multiple"
                data-placeholder="Separate options with a coma">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
        </div>
    </div>
    <a href="#" class="size-select__remove"><img
            src="images/icons/close-24px.svg"
            alt="close"></a>
</div>
        `;
    $(this).prev().append(selectEl);
    $('.size-select__list select').select2({
      minimumResultsForSearch: Infinity,
      width: '100%',
    });
  })

  //remove size select
    $('.size-select__list').on('click', '.size-select__remove', function(e) {
      e.preventDefault();
      let arrayEl = $(this).parent().parent().find('.size-select__single');
      if(arrayEl.length > 1) {
        $(this).parent().remove();
      }
    })


    //dropzone type product
    let file = `<div class="dz-preview dz-file-preview">
    <div class="dz-thum">
    </div>
    <div class="dz-details">
      <div class="dz-filename"><span data-dz-name></span></div>
      <div class="dz-info">
        <div class="dz-size" data-dz-size></div>
        <div class="dz-type" data-dz-type><span></span></div>
      </div>
    </div>
    <a href="#" class="data__remove"><img src="images/icons/close-24px.svg" alt="close"></a>
  </div>`;
  if(document.querySelector('.download-box')) {
    var myDropzone = new Dropzone('.dropzone-file', { 
      url: '/file/load',
      previewsContainer: '.dropzone-file-view',
      previewTemplate: file,
    });

    myDropzone.on('addedfile', function(file) {
      let type = mime.getExtension(file.type);
      $('.dropzone-file-view >div:not(.load) .dz-type span').text(type);
      $('.dropzone-file-view >div:not(.load)').addClass(type + ' load');
    });
  }


    //select2 next input plus and minus
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
          nameStore: 'Sport',
          imageStore: 'images/product/category-mini.png',
        },
        {
          id: 2,
          sky: '#134568',
          Qty: 999,
          price: 49.99,
          text: 'Title here could be so much longer…',
          img: 'images/product/7142447382608.png',
          nameStore: 'Sport',
          imageStore: 'images/product/category-mini.png',
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
          nameStore: 'Sport',
          imageStore: 'images/product/category-mini.png',
        },
        {
          id: 5,
          sky: '#134567',
          Qty: 999,
          price: 49.99,
          text: 'Title here could be so much longer2…',
          img: 'images/product/7142447382608.png',
          nameStore: 'Sport',
          imageStore: 'images/product/category-mini.png',
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
      if($('.form__single--select-product select[data-toggle="select-product--input"]')) {
        let dropParent = null;
        $('.form__single--select-product select[data-toggle="select-product--input"]').each( function() {
          dropParent = $(this).parent().parent().parent().parent();
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
                    <span class="store-img" style="${state.imageStore ? 'background-image: url('+ state.imageStore : ''})" title="${state.nameStore}"></span>
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
        })
       }
  
       //select2 select
       $('[data-toggle="select-product--input"]').on('select2:select', function (e) {
        var data = e.params.data;
        let stateEl = `
              <div class="selected-item">
              <div class="selected-item__left">
                  <div class="selected-item__photo"
                      style="background-image: url('${data.img}');">
                      <span class="store-img" style="${data.imageStore ? 'background-image: url('+ data.imageStore : ''})" title="${data.nameStore}"></span>
                      <span>SM</span>
                  </div>
                  <div class="selected-item__info">
                      <strong>${data.text}</strong>
                      <ul>
                          <li>Sku: <span>${data.sky}</span></li>
                          <li>$ <span>${data.price}</span></li>
                      </ul>
                      <div class="item-cart__quantity-wrap d-flex align-self-center">
                            <div class="item-cart__quantity position-relative d-flex align-self-center">
                              <button class="item-cart__minus">
                                <span class="icon icon-minus"></span>
                              </button>
                              <span class="item-cart__int">0</span>
                              <button class="item-cart__plus">
                                <span class="icon icon-plus"></span>
                              </button>
                            </div>
                            <span>quantity</span>
                          </div>
                  </div>
              </div>
              <div class="selected-item__right">
                  <a href="#" id="${data.id}">Delete</a>
              </div>
          </div>
          `;
          $(this).parent().parent().parent().parent().next().append(stateEl);
    });
  
    //select2 custom scroll product
    //scroll
    $('[data-toggle="select-product--input"]').on('select2:open', function (e) {
      function resizeLine() {
        psLine.update();
      }
      var psLine = new PerfectScrollbar('ul.select2-results__options');
      window.onresize = resizeLine;
      setTimeout( function() {
        resizeLine();
      }, 1)
    });
    //select2 remove checked element
    $('[data-toggle="select-product--input"]').on('select2:unselect', function (e) {
      var id = e.params.data.id;
      $('#' + id).parent().parent().remove();
    });
    //click create object
    $('.associated-box__result').on('click', 'a', function(e) {
      e.preventDefault();
      let id = $(this).attr('id');
      let selectEl = $(this).parent().parent().parent().parent().find($('select'))
      let arraySelected = $(selectEl).val();
      delete arraySelected[arraySelected.indexOf(id)]
      $(selectEl).val(arraySelected).trigger('change');
      //remove item
      $(this).parent().parent().remove();
     })
    }



    //plus and minus select
    function funcPlusMinus(init, par, proces) {
      if(proces == 'minus') {
        if(init > 0) {
          $(par).find($('.item-cart__int')).text(init - 1);
        }
      } else {
        $(par).find($('.item-cart__int')).text(init + 1);
      }
    }

    $('.associated-box').on('click', '.item-cart__minus, .item-cart__plus', function() {
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

    //button strore submit
    $('.set-submit').click( function(e) {
      e.preventDefault();
      if($(this).hasClass('submit')) {
        $(this).find('span').remove();
        $(this).removeClass('submit').text('Set as available');
      } else {
        let submitBtn = '<span><img src="images/icons/check_circle-24px-blue.svg" alt="submit"/>Available</span>'
        $(this).text('').append(submitBtn).addClass('submit');
      }
    });

    //create store button
    let count = 0;
    $('.modal-availability').on('click', '[data-create="true"]', function(e) {
      count = count + 1;
      e.preventDefault();
      if(count == 2) {
        count = 0;
        $('#modal-availability').modal('hide');
        $('.modal-save-store').modal('show')
      }
    })

    $('.create-store').click( function() {
      if($(this).attr('data-create') == 'false') {
        $('.store-create').slideToggle();
        $(this).text('Save new store');
        $(this).attr('data-create', 'true');
        $(this).addClass('save');
      }
    })


    //check status additional
    $('.single-check .groups__check').click(function() {
      if ($(this).find('input').prop('checked')) {
        $(this).prev().find($('b')).text('enabled');
        $(this).parent().addClass('enabled');
      } else {
        $(this).prev().find($('b')).text('disabled');
        $(this).parent().removeClass('enabled');
      }
    })

    //check status additional body element
    $('.single-check__body .checked-box').click(function() {
      if ($(this).find('input').prop('checked')) {
        if($(this).next().hasClass('checked-children-body')) {
          $(this).next().slideDown();
        }
      } else {
        if($(this).next().hasClass('checked-children-body')) {
          $(this).next().slideUp();
        }
      }
    })

    //check status additional body element
    $('.addition-box .single-check').click(function() {
      if ($(this).find('input').prop('checked')) {
        if($(this).next().hasClass('single-check__body')) {
          $(this).next().slideDown();
        }
      } else {
        if($(this).next().hasClass('single-check__body')) {
          $(this).next().slideUp();
        }
      }
    })

    
    //froala tabs nav
    $('.tabs-nav').on('click', 'a:not(.new)', function(e) {
      e.preventDefault();
      let tab = $(this).attr('href').slice(1);
      //change style tab
      if(!$(this).hasClass('new')) {
        $('.tabs-nav .nav-link').removeClass('active');
        $(this).parent().addClass('active')
      }
      //change tab froala edit
      $('.tabs-body .tabs-card').each( function() {
        if($(this).attr('id') == tab) {
          $(this).show().addClass('active');
        } else {
          $(this).hide().removeClass('active');
        }
      })
    });

    

    $('.target-link').click(function() {
      let textTarget = this.innerText;
      $(this).text(textTarget);
      textTarget.css('font-weight', '500');
    });

    




    //froala tabs remove
    var options = { messages: {
      title: 'All tab content will be deleted',
      desc: 'Are you sure you want to delete <b>Tabs</b>? This can’t be undone',
      proceed: 'Delete',
      cancel: 'Cancel',
  },
  onProceed: function() {
    removBlur();
  },
  onCancel: function() {
    $('.section-blur').removeClass('filter');
    $('.nav-product').removeClass('hide');
},
  buttons: {
      cancel: true, //default is true
      proceed: true, //default is true
  },
}
    //froala all tabs remove
    var optionsAllremove = { messages: {
      title: 'All tab content will be deleted',
      desc: 'Are you sure you want to delete <b>Tabs</b>? This can’t be undone',
      proceed: 'Delete',
      cancel: 'Cancel',
  },
  onProceed: function() {
    removAllTabs(currentTab, currentTabBody);
  },
  onCancel: function() {
    $('.section-blur').removeClass('filter');
    $('.nav-product').removeClass('hide');
},
  buttons: {
      cancel: true, //default is true
      proceed: true, //default is true
  },
}
    let modal = new ConfirmModal(options)

    let modalAllremove = new ConfirmModal(optionsAllremove)


    let idTab = null;
    let currentEl = null;
    function removBlur() {
      //change style tab
      $(currentEl).prev().addClass('active');
      $(currentEl).remove();
      //change tab froala edit
      $('.tabs-body .tabs-card').each( function() {
        if($(this).attr('id') == idTab) {
          $(this).prev().show().addClass('active');
          $(this).remove();
        }
      })
      $('.section-blur').removeClass('filter');
      $('.nav-product').removeClass('hide');
    }
    $('.tabs-nav').on('click', '.remove', function(e) {
      $('.section-blur').addClass('filter');
      $('.nav-product').addClass('hide');
      idTab = $(this).prev().attr('href').slice(1);
      currentEl = $(this).parent();
      modal.open();
      e.preventDefault();
    });

    function removAllTabs(head, body) {
      let arrayItems = $(head).find($('.nav-link'));
      let arrayBody = $(body).find($('.tabs-card'));
      for(let i = 1; i< arrayItems.length; i++) {
        $(arrayItems)[i].remove();
        $(arrayBody)[i].remove();
      }
      $('.section-blur').removeClass('filter');
      $('.nav-product').removeClass('hide');
    }

    //froala new tabs
    $('.tabs-nav .new').click( function(e) {
      e.preventDefault();
      let arrayNav = $(this).prev().find($('div.nav-link')).length;
      let navCut = `<div class="nav-link">
      <a contenteditable="true" class="target-link" href="#tab-${arrayNav + 1}">TAB ${arrayNav + 1}</a> <span class="remove"></span>
  </div>`
      let cardCut = `<div class="tabs-card" id="tab-${arrayNav + 1}" style="display: none;">
      <div class="froala-edit"></div>
  </div>`
      $(this).prev().append(navCut);
      $(this).parent().next().append(cardCut);
      var editor = new FroalaEditor('.froala-edit', {
        listAdvancedTypes: true,
        placeholderText: 'Add your page content here',
        pluginsEnabled: ['image', 'link', 'lists', 'codeView'],
        toolbarButtons: ['fontFamily', 'underline', 'formatOL', 'formatUL', 'outdent', 'indent', 'insertLink', 'insertImage', 'html'],
        linkStyles: {
          class1: 'Class 1',
          class2: 'Class 2',
        },
      })
      //change style tab
      $(this).prev().find($('a')).each( function() {
        $('.tabs-nav .nav-link').removeClass('active');
        if($(this).attr('href').slice(1) == ('tab-' + (arrayNav + 1))) {
          $(this).parent().addClass('active')
        }
      })
      
      //change tab froala edit
      $('.tabs-body .tabs-card').each( function() {
        if($(this).attr('id') == ('tab-' + (arrayNav + 1))) {
          $(this).show().addClass('active');
        } else {
          $(this).hide().removeClass('active');
        }
      })
      resizeLine();
    });

    let currentTab = null;
    let currentTabBody = null;
    //check status additional body element
    $('.tabs-status').click(function(e) {
      currentTab = $(this).parent().find($('.tabs-nav'));
      currentTabBody = $(this).parent().find($('.tabs-body'));
      e.preventDefault();
      if ($(this).find('input').prop('checked')) {
        $('.section-blur').addClass('filter');
        $('.nav-product').addClass('hide');
        $(this).parent().find($('.tabs-nav')).hide();
        $(this).find('input').prop('checked', false);
        modalAllremove.open();
      } else {
        $(this).find('input').prop('checked', true)
        $(this).parent().find($('.tabs-nav')).show();
      }
    })

    //mobile menu option
    $('.mobile-menu-create').click( function(e) {
      e.preventDefault();
      $('.nav-product').addClass('mobile');
      $('body').addClass('modal-open');
    })
    $('.nav-product .menu-remove').click( function(e) {
      e.preventDefault();
      $('.nav-product').removeClass('mobile');
      $('body').removeClass('modal-open');
    })
    $('.nav-product ul a').click( function(e) {
      e.preventDefault();
      $('.nav-product').removeClass('mobile');
      $('body').removeClass('modal-open');
    })

    //scroll nav
    if($('.nav-product').hasClass('nav-product')) {
      var positions = [],
	currentActive = null,
	links = $('.scroll-to');

  $('.anchor').each(function(){
    positions.push({
      top: $(this).position().top - 100,
      a: links.filter('[href="#'+$(this).attr('id')+'"]'),
    });
  });

  positions = positions.reverse();

  $(window).on('scroll',function() {
    var winTop = $(window).scrollTop();
    for(var i = 0; i < positions.length; i++){
      if(positions[i].top < winTop){
        if(currentActive !== i){
          currentActive = i;
          links.removeClass('active');
          positions[i].a.addClass('active');
        }
        break;
      }
    }
  });
    }

  //click scroll
  $('.nav-product').on( 'click', 'a', function(){
    $('.nav-product a').removeClass('active');
    var el = $(this);
    el.addClass('active');
    var dest = el.attr('href');
    if(dest !== undefined && dest !== '') {
        $('html, body').animate({scrollTop: $(dest).offset().top}, 400);
    }
    return false;
});

    //scroll tabs froala
    function resizeLine() {
      psLine.update();
    }
    if(document.querySelector('.tabs-nav')) {
      var psLine = new PerfectScrollbar('.tabs-nav .scroll');
    }

  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};





