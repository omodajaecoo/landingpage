// plugins/slide.js
// 可通过在绑定元素内设置data-delay来延迟动画
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("videoPause", {
    mounted(el) {
      const SLIDE_FADE_DISTANCE = 50;
      const SLIDE_FADE_DURATION = 1500;
      const map = new WeakMap();
      var isBelowViewport = function (el) {
        const rect = el.getBoundingClientRect();
        return rect.top - SLIDE_FADE_DISTANCE > window.innerHeight;
      };
      var type = el.dataset.type;
      const ob = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // 注释掉下面这行代码，元素就会每次出现都触发动画
            // ob.unobserve(entry.target);
          } else {
            if (el.paused == false) {
              var playicon = el.parentNode.querySelector(".play-icon");
              var title = el.parentNode.querySelector(".title");
              if(playicon){
                playicon.classList.remove("hide");
                if(title){
                  title.classList.remove("hide");
                }
                el.pause();
              }
            }
          }
        }
      });
      ob.observe(el);
      // return animation;
    },
    unmounted(el) {
      const SLIDE_FADE_DISTANCE = 50;
      const SLIDE_FADE_DURATION = 500;
      const map = new WeakMap();
      var isBelowViewport = function (el) {
        const rect = el.getBoundingClientRect();
        return rect.top - SLIDE_FADE_DISTANCE > window.innerHeight;
      };
      const ob = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ob.unobserve(entry.target);
          }
        }
      });
      ob.unobserve(el);
    },
  });
});
