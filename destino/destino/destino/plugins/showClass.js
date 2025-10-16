// plugins/slide.js
// 可通过在绑定元素内设置data-delay来延迟动画
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("showClass", {
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
            // console.log('showClass',entry.isIntersecting)
            if (type == "brandKV1") {
              var titlediv = document.querySelector(".test-title .title");
              var txtdiv = document.querySelector(".test-title .title .txt");
              var memodiv = document.querySelector(".test-title .memo");
              setTimeout(() => {
                txtdiv.classList.add("aniY");
                setTimeout(() => {
                  txtdiv.classList.add("aniScale");
                  setTimeout(() => {
                    titlediv.classList.add("aniScale");
                    setTimeout(() => {
                      memodiv.classList.add("show");
                    }, 100);
                  }, 190);
                }, 1200);
              }, 150);
            } else {
              el.classList.add("show");
            }

            switch (el.dataset.showtype) {
              case "anytime":
                break;
              default:
                // 注释掉下面这行代码，元素就会每次出现都触发动画
                ob.unobserve(entry.target);
                break;
            }
          } else {
            //是否存在class属性
            if (el.classList.contains("show") && type != "brandKV1") {
              el.classList.remove("show");
            }
          }
        }
      });
      //是否存在class属性
      if (el.classList.contains("show") && type != "brandKV1") {
        el.classList.remove("show");
      }
      setTimeout(() => {
        ob.observe(el);
      }, 1000);
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
