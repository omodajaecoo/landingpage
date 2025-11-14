<template>
  <div class="fullPage" ref="fullPage">
    <ClientOnly fallback-tag="span" fallback=" ">
      <!-- :freeMode="true" -->
      <Swiper
        class="fullPageContainer"
        direction="vertical"
        noSwipingClass="swiper-no-swiping"
        :modules="[SwiperFreeMode, SwiperMousewheel, SwiperScrollbar]"
        :freeMode="{ enabled: isFree, minimumVelocity: 0.1 }"
        :noSwiping="true"
        :longSwipes="false"
        :mousewheel="{ enable: true, thresholdDelta: 33 }"
        :slidesPerView="'auto'"
        :parallax="true"
        :virtualTranslate="true"
        :centeredSlides="true"
        :slidesOffsetAfter="20"
        :scrollbar="ispc ? { el: '.swiper-scrollbar', draggable: true } : false"
        @swiper="onSwiper"
        @touch-start="handleTouchstart"
        @touch-end="handleTouchend"
        @touch-move="handleTouchmove"
      >
        <slot name="slidesSection" />
        <slot />
        <div class="swiper-scrollbar" v-if="ispc"></div>
      </Swiper>
    </ClientOnly>
  </div>
</template>
<script>
import { TweenMax } from "gsap";
import { isMobileDevice } from "~/utils/common";
export default {
  name: "layout",
  data() {
    return {
      current: 0,
      fullpage: {
        current: 1, // 当前的页面编号
        isScrolling: false, // 是否在滚动,是为了防止滚动多页，需要通过一个变量来控制是否滚动
        deltaY: 0, // 返回鼠标滚轮的垂直滚动量，保存的鼠标滚动事件的deleteY,用来判断是往下还是往上滚
      },
      startTime: undefined, // 记录触摸开始的时间
      startX: undefined, // 记录触摸开始的X坐标，本次主要实现的是上下滑动，所以当前坐标不做强制要求
      startY: undefined, // 记录触摸开始的Y坐标
      isOverflow: true,
      showmask: false,
      isRun: true,
      isfree: false,
      scrollType: "next",
      showHeight: 0,
      ispc: true,
      activeIndex: 0,
    };
  },
  props: {
    isFree: {
      type: Boolean,
      default: false,
    },
    isMouse: {
      type: Boolean,
      default: true,
    },
    showcontact: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.ispc = !isMobileDevice();
  },
  methods: {
    // 延迟清除滚动锁
    clearLockDelay() {
      window.clearTimeout(this.clearLockDelay.timer);
      this.clearLockDelay.timer = window.setTimeout(() => {
        //这里的动画是1s执行完，使用setTimeout延迟1s后解锁
        this.fullpage.isScrolling = false;
      }, 810);
    },
    onSwiper(swiper) {
      const route = useRoute();
      // // console.log(swiper);
      let _that = this;
      // swiper.on("scroll", function (e) {
      //   if (_that.ispc == true) {
      //     var linkbar = document.querySelector("#nav .link-bar");
      //     if (this.previousIndex < this.activeIndex) {
      //       // 向下
      //       if (linkbar.className.indexOf("hidelink") == -1) {
      //         linkbar.classList.remove("showlink");
      //         linkbar.classList.add("hidelink");
      //       }
      //     } else {
      //       // 向上
      //       if (linkbar.className.indexOf("showlink") == -1) {
      //         linkbar.classList.remove("hidelink");
      //         linkbar.classList.add("showlink");
      //       }
      //     }
      //   }
      // });
      swiper.on("setTranslate", function () {
        this.wrapperEl.transition = "";
        TweenMax.to(this.wrapperEl, 0.3, {
          y: this.translate,
          ease: "linear",
        });
      });
      swiper.on("slidePreTransitionStart", function () {
        this.scrollHeight = 0;
        _that.showmask = false;
      });
      swiper.on("slideNextTransitionStart", function () {
        this.scrollHeight = this.activeIndex;
        let num;
        switch (route.path) {
          case "/models":
            num = _that.ispc ? 5 : this.slides.length - 1;
            break;
          case "/aboutBrand":
            num = this.slides.length - 1;
            break;
          default:
            num = 3;
            break;
        }
        if (this.activeIndex < num && !_that.isFree) {
          setTimeout(() => {
            _that.showmask = true;
            setTimeout(() => {
              _that.showmask = false;
            }, 600);
          }, 100);
        }
      });
      swiper.on("slideChangeTransitionStart", function () {
        let num2;
        switch (route.path) {
          case "/models":
            num2 = _that.ispc ? 5 : this.slides.length - 1;
            break;
          case "/aboutBrand":
            num2 = this.slides.length - 1;
            break;
          default:
            num2 = 3;
            break;
        }
        if (!_that.isFree) {
          if (this.activeIndex < num2) {
            TweenMax.to(this.wrapperEl, 0.1, {
              y: this.translate,
              ease: "linear",
            });
          } else {
            TweenMax.to(this.wrapperEl, 0, { y: this.translate, ease: "none" });
          }
        }
      });
      swiper.on("slideChange", function () {
        _that.fullpage.current = this.activeIndex + 1;
        _that.$emit("custom-event", this.activeIndex + 1, swiper);
      });
    },
    /**
     * 获取当前活动slide的标准位置translate
     */
    getActiveSwiperSlideTranslateY(swiper) {
      // let min = swiper.minTranslate() // 一般是0
      // let max = swiper.maxTranslate() // 一般是负数
      // let scale = (swiper.activeIndex ) / (swiper.slides.length - 1)
      // return scale * (max - min);

      // 新算法,从网格计算偏移
      return 0 - swiper.snapGrid[swiper.activeIndex];
    },

    /**
     * 在rest 或 slideto 翻页缓动完成后,处理两个遮罩效果、处理wheel的锁定
     */
    slideTransitionEnd(swiper) {
      //  // console.log(
      //   "翻页完成",
      //   Date.now(),
      //   "swiper.activeIndex is: ",
      //   swiper.activeIndex,
      //   "swiper.previousIndex is:",
      //   swiper.previousIndex
      // );
      // 为前一个slide去除遮罩
      swiper.slides[swiper.activeIndex].classList.remove(
        "my-hide-black-bottom"
      );
      if (swiper.slides[swiper.previousIndex]) {
        swiper.slides[swiper.previousIndex].classList.add(
          "my-hide-black-bottom"
        );
      }

      // 去掉所有的 将要离开时的黑色半透明遮罩
      swiper.slides.forEach((x) => x.classList.remove("my-leave-mask"));

      // 缓动动画完成后解锁
      setTimeout(() => {
        swiper.mousewheelLock = 0;
      }, 500);

      // todo 尝试导航响应wheel
      nav.classList.remove("my-hover");
    },
    // 监听鼠标监听
    mouseWheelHandle(event) {
      // if (this.fullpage.current < 4) {
      //   return;
      // }
      // 添加冒泡阻止
      let evt = event || window.event;
      if (evt.stopPropagation) {
        evt.stopPropagation();
      } else {
        evt.returnValue = false;
      }
      if (this.fullpage.isScrolling) {
        // 判断是否可以滚动
        return false;
      }
      let e = event.originalEvent || event;
      this.fullpage.deltaY = e.deltaY || e.detail; // Firefox使用detail
      // // console.log("eeeeeeeeee", e.detail);
      if (this.fullpage.deltaY > 0) {
        this.scrollType = "next";
        // this.next();
      } else if (this.fullpage.deltaY < 0) {
        this.scrollType = "prev";
        // this.pre();
      }
    },
    // 清除触摸事件
    handleTouchmove(event) {
      if (this.ispc == true) {
        return false;
      }
      if (this.isOverflow) {
        this.clearLockDelay();
        if (event.preventDefault) {
          event.preventDefault();
        }
      }
    },
    //手指按下屏幕
    handleTouchstart(event) {
      if (this.ispc == true) {
        return false;
      }
      this.startTime = Date.now();
      if (event.changedTouches) {
        this.startX = event.changedTouches[0].clientX;
        this.startY = event.changedTouches[0].clientY;
      } else {
        this.startX = event.touches.currentX;
        this.startY = event.touches.currentY;
      }
    },
    //手指离开屏幕
    handleTouchend(event) {
      if (this.ispc == true) {
        return false;
      }
      const endTime = Date.now();
      var endX, endY;
      if (event.changedTouches) {
        endX = event.changedTouches[0].clientX;
        endY = event.changedTouches[0].clientY;
      } else {
        endX = event.touches.currentX;
        endY = event.touches.currentY;
      }
      //判断按下的时长
      if (endTime - this.startTime > 2000) {
        return;
      }
      //滑动的方向
      let direction = "";
      //先判断用户滑动的距离，是否合法，合法:判断滑动的方向 注意 距离要加上绝对值
      if (Math.abs(endY - this.startY) > 10) {
        //滑动方向
        direction = endY - this.startY > 0 ? "down" : "up";
      } else {
        return;
      }
      //用户做了合法的滑动操作
      if (direction === "up") {
        // this.next();
      }
      if (direction === "down") {
        // this.pre();
        // this.scrollType = "prev";
        // this.pre();
      }
    },
  },
};
</script>
<style scoped>
.fullPage {
  height: 100vh;
  overflow-x: hidden;
  background-color: var(--navigation-bg-color);
  overflow-y: auto;
  scrollbar-width: none;
}

.fullPage .my-up-trans-timing-fc {
  /* slideTo的缓动效果 */
  --swiper-wrapper-transition-timing-function: cubic-bezier(
    1,
    -0.01,
    0.74,
    1.05
  );
}

.fullPage :deep() .swiper-scrollbar {
  background: rgb(87, 87, 87);
}

.fullPage :deep() .swiper-scrollbar-drag {
  background: #fff;
}

.fullpage-mask {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: var(--navigation-bg-o-color);
  backdrop-filter: blur(15px);
  transition: all 0.3s linear;
  pointer-events: none;
}

.hidemask {
  height: 100vh;
  top: -100vh;
  opacity: 0.8;
  z-index: -1;
  /*transition: all 0.5s cubic-bezier(0, 1, 0.45, 1);*/
  transition: all 0.6s cubic-bezier(0, 1, 0.45, 1) 0s;
}

.showmask {
  height: 100vh;
  top: 0;
  opacity: 1;
  z-index: 999;
  transition: none;
}

.fullPage::-webkit-scrollbar {
  display: block;
}

.overhide {
  overflow-y: hidden;
}

.overauto {
  overflow-y: auto;
}

.fullPage .swiper-wrapper {
  display: flex;
}

.fullPageContainer {
  width: 100%;
  height: 100vh;
  transition: all linear 0.5s;
  z-index: 10;
  position: relative;
}

.fullPage .swiper {
  width: 100%;
  height: 100vh;
  position: fixed;
  /* pointer-events: none; */
  /* opacity: 0.7; */
}

.fullPage :deep() .section {
  text-align: center;
  font-size: 18px;
  /* background: #fff; */
  /* display: flex; */
  justify-content: center;
  align-items: center;
  overflow: visible;
}

.fullPage :deep() .section::before {
  /* background-image: radial-gradient(circle at 50% 117%,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0) 6%,
        transparent 19%),
      linear-gradient(180deg, transparent, black); */
  background-color: transparent;
  pointer-events: none;
  content: " ";
  display: block;
  position: absolute;
  width: 100%;
  z-index: 10;
  bottom: 0;
  height: 30%;
  top: auto;
  z-index: 1;
}

.fullPage :deep() .section::after {
  content: " ";
  display: block;
  position: absolute;
  width: 100%;
  z-index: 10;
  /* bottom: -100%; */
  height: 100%;
  top: 100%;
  background: black;
  opacity: 1;
  /* transform:translateY(0); */
  transition: none;
  opacity: 1;
}

.my-hide-black-bottom::after {
  /* transform:translateY(-100%); */
  opacity: 0.9;
  transition: height 0.5s cubic-bezier(0, 0, 0.2, 1) 0.5s,
    opacity 0.2s cubic-bezier(0.58, 0, 0, 1) 0.3s;
  height: 0%;
}

/* 某一屏将要离开时，显示一个半透明黑色遮罩 */
.section.my-leave-mask {
  /* height: 250%;
  transition: height 0.5s cubic-bezier(0, 0, 0.2, 1); */
  opacity: 0;
  transition: opacity 1s cubic-bezier(0, 0, 0.2, 1);
}

/*.section {
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background: #0e0e0e;
  transition: all 0.4s;
  margin-bottom: 30vh;
}
@media (max-width: 1024px) {
  .section {
    background-color: #222424;
  }
}*/
</style>
