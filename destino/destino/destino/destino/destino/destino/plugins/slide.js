// plugins/slide.js
// 可通过在绑定元素内设置data-delay来延迟动画
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("slide", {
    mounted(el) {
      const SLIDE_FADE_DISTANCE = 50;
      const SLIDE_FADE_DURATION = 1500;
      const map = new WeakMap();
      var isBelowViewport = function (el) {
        const rect = el.getBoundingClientRect();
        return rect.top - SLIDE_FADE_DISTANCE > window.innerHeight;
      };
      const ob = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const animation = map.get(entry.target);
            // 判断不是在视口之下的元素，不需要添加动画
            if (animation) {
              animation.play();
              // 注释掉下面这行代码，元素就会每次出现都触发动画
              ob.unobserve(entry.target);
            }
          }
        }
      });
      var display = JSON.parse(JSON.stringify(el.style["display"]));
      var animation;
      switch (el.dataset.direction) {
        case "left":
          animation = el.animate(
            [
              {
                transform: `translateX(-${SLIDE_FADE_DISTANCE}px)`,
                opacity: 0.1,
              },
              {
                transform: `translateX(0)`,
                opacity: 1,
              },
            ],
            {
              duration: SLIDE_FADE_DURATION,
              easing: "ease-in-out",
              delay: el.dataset.delay || 0,
              fill: "forwards", // 当动画完成后，保留最后一个关键帧的样式
            }
          );
          break;
        case "right":
          animation = el.animate(
            [
              {
                transform: `translateX(${SLIDE_FADE_DISTANCE}px)`,
                opacity: 0.1,
              },
              {
                transform: `translateX(0)`,
                opacity: 1,
              },
            ],
            {
              duration: SLIDE_FADE_DURATION,
              easing: "ease-in-out",
              delay: el.dataset.delay || 0,
              fill: "forwards", // 当动画完成后，保留最后一个关键帧的样式
            }
          );
          break;

        case "zoom-slide":
          animation = el.animate(
            [
              {
                transform: `translateY(${SLIDE_FADE_DISTANCE}px) scale(2)`,
                opacity: 0,
              },
              {
                transform: `translateY(0) scale(1)`,
                opacity: 1,
              },
            ],
            {
              duration: SLIDE_FADE_DURATION,
              easing: "ease-in-out",
              delay: el.dataset.delay || 0,
              fill: "forwards", // 当动画完成后，保留最后一个关键帧的样式
            }
          );
          break;
        default:
          animation = el.animate(
            [
              {
                transform: `translateY(${SLIDE_FADE_DISTANCE}px)`,
                opacity: 0.1,
              },
              {
                transform: `translateY(0)`,
                opacity: 1,
              },
            ],
            {
              duration: SLIDE_FADE_DURATION,
              easing: "ease-in-out",
              delay: el.dataset.delay || 0,
              fill: "forwards", // 当动画完成后，保留最后一个关键帧的样式
            }
          );
          break;
      }

      animation.pause();
      map.set(el, animation);
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
            const animation = map.get(entry.target);
            if (animation) {
              animation.play();
              ob.unobserve(entry.target);
            }
          }
        }
      });
      ob.unobserve(el);
    },
  });
});
