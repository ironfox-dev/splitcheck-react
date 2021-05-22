export default {
  init() {
    const body = document.querySelector('body');

    //* modal event
    {
      $('.modal').on('shown.bs.modal', function () {
        setTimeout(function() {
          $('.admin-menu').addClass('filter');
          $('.header.header--dashboard').addClass('filter');
        }, 50);

      })
      $('.modal').on('hidden.bs.modal', function(){
        if($('.modal:visible').length > 0) {
          $('body').addClass('modal-open');
        } else {
          setTimeout(function() {
            $('.admin-menu').removeClass('filter');
            $('.header.header--dashboard').removeClass('filter');
          }, 50);
        }
      });
    }

    //* sort-box selected element
    {
      $('.sort-box').on('click', 'a', function(e) {
        e.preventDefault();
        $('.sort-box li').removeClass('active');
        $(this).parent().addClass('active');
      })
    }

    //toogle ckeckbox
    {
      $('.checked-box >label').on('click', function() {
        $(this).parent().find($('.checked-box__body')).slideToggle();
      })
    }

    //* mobile append aside right
    {
      if($('.insert-drag-drop').length > 0) {
        const tpCollection = () => {
          if(window.innerWidth < 992) {
            $('.insert-drag-drop').append($('.aside-right .right-insert-drag-drop .drag-drop-orders'))
          } else {
            if($('.insert-drag-drop .drag-drop-orders').hasClass('drag-drop-orders')) {
              $('.aside-right .right-insert-drag-drop').append($('.insert-drag-drop .section-content'))
            }
          }
        }

        tpCollection()
        $(window).resize( function() {
          tpCollection();
        })
      }
    }

    //* function button Options(User-info)
    {
      const btnUserWrap = document.querySelectorAll('.user-info');
      // const btnOptions = document.querySelectorAll('.user-info__avatar');

      body.addEventListener('click', e => {
        let activeClass = 'user-info--open';
        let activeClassIcon = 'icon-more-active';
        let classNameBackDrop = 'user-info-backDrop';

        if (e.target.offsetParent) {
          const targetoffset = e.target.offsetParent;
          const {type} = e.target.offsetParent.firstElementChild.dataset;

          if (type === 'user-info') {
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
          btnUserWrap.forEach(element => {
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

    //clone new box .add-field
    let addFields = `<div class="checked-box__item">
    <div class="form__single form__single--fluid">
        <label class="form__label">Key</label>
        <div class="position-relative w-100">
            <input type="text" class="form__input" required="" placeholder="Enter key">
        </div>
        <span class="form__symbol-error"></span>
    </div>
    <div class="form__single form__single--fluid">
        <label class="form__label">Value</label>
        <div class="position-relative w-100">
            <input type="text" class="form__input" required="" placeholder="Enter value">
        </div>
        <span class="form__symbol-error"></span>
    </div>
</div>`
    if(document.querySelector('.add-field')) {
      $('.add-field').click( function(e) {
        e.preventDefault();
        $(this).prev().append(addFields)
      })
    }
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {},
};
