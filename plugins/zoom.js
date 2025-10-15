// plugins/zoom.js
// 可通过在绑定元素内设置data-delay来延迟动画
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("zoom", {
    mounted(el) {
      const ZOOM_FADE_DISTANCE = 50;
      const ZOOM_FADE_DURATION = 800;
      const map = new WeakMap();
      var isBelowViewport = function (el) {
        const rect = el.getBoundingClientRect();
        return rect.top - ZOOM_FADE_DISTANCE > window.innerHeight;
      };
      const ob = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const animation = map.get(entry.target);
            if (animation) {
              animation.play();
              // 注释掉下面这行代码，元素就会每次出现都触发动画
              ob.unobserve(entry.target);
            }
          }
        }
      });
      const animation = el.animate(
        [
          {
            transform: `scale(0)`,
            opacity: 0.1,
          },
          {
            transform: `scale(1)`,
            opacity: 1,
          },
        ],
        {
          duration: ZOOM_FADE_DURATION,
          easing: "linear",
          delay: el.dataset.delay || 0,
          fill: "forwards", // 当动画完成后，保留最后一个关键帧的样式
        }
      );

      animation.pause();
      map.set(el, animation);
      ob.observe(el);

      // return animation;
    },
    unmounted(el) {
      const ZOOM_FADE_DISTANCE = 50;
      const ZOOM_FADE_DURATION = 500;
      const map = new WeakMap();
      var isBelowViewport = function (el) {
        const rect = el.getBoundingClientRect();
        return rect.top - ZOOM_FADE_DISTANCE > window.innerHeight;
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
