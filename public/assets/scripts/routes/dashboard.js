// import SimpleScrollbar from 'simple-scrollbar';
import PerfectScrollbar from 'perfect-scrollbar';

export default {
  init() {


    //* mobile append aside right
    {
      if($('.section-aside-right-mob').length > 0) {
        const tpCollection = () => {
          if(window.innerWidth < 992) {
            $('.section-aside-right-mob').append($('.aside-right .section-content'))
          } else {
            if($('.section-aside-right-mob .section-content').hasClass('section-content')) {
              $('.aside-right').append($('.section-aside-right-mob .section-content'))
            }
          }
        }

        tpCollection()
        $(window).resize( function() {
          tpCollection();
        })
      }
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
              element.addEventListener('mouseenter', () => {
                timer[1] = setTimeout(function() {
                  element.classList.add(classShow);
                  element.querySelector('.reaction-btn-like').classList.add(classShow);
                }, 500);
                clearInterval(timer[2]);
                element.classList.add(classHover)
              })
              element.addEventListener('mouseleave', () => {
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


    //scroll select
    if($('ul.select-list').hasClass('select-list')) {
      var psLine = new PerfectScrollbar('ul.select-list');
      psLine.update();
    }
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {},
};
