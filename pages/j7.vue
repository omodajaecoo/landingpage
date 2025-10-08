<template>
  <NuxtLayout name="layout" @custom-event="handleCustomEvent">
    <template #slidesSection>
      <SwiperSlide class="section first-page">
        <img
          loading="lazy"
          :src="
            ispc
              ? dir + 'images/models/banner.webp'
              : dir + 'images/models/page1Banner_mob.webp'
          "
          class="banner"
        />
        <!-- <div class="logotxt">JAECOO 7</div> -->
        <!-- <img loading="lazy" src="/images/JAECOO7.webp" class="logoimg" /> -->
        <img
          loading="lazy"
          src="/images/models/page1icon_mob.webp"
          v-if="!ispc"
          class="mob-icon"
        />
        <div class="msg-main">
          <Transition
            name="slide-fade"
            v-for="(item, idx) in firstPage_arr"
            :key="idx"
          >
            <div
              class="msg-item"
              v-if="currentPage == 0"
              :style="[
                currentPage == 0
                  ? 'transition-delay: ' + idx * 0.2 + 's;'
                  : 'transition-delay: 0s;',
              ]"
            >
              <div class="msg-row">
                <vue-count-to
                  v-if="startNumAni"
                  class="num"
                  :end="item.num"
                  :autoPlay="true"
                  :duration="1500"
                />
                <div class="txt" v-html="item.txt"></div>
              </div>
              <div class="label-row">{{ item.label }}</div>
            </div>
          </Transition>
        </div>
      </SwiperSlide>
      <SwiperSlide class="second-page swiper-no-swiping">
        <div class="wrap_360" ref="web360">
          <!-- https://www-cti.omodajaecoo.com/jaecoo/JAECOO7web-360/ -->
          <!--  :src="dir+'JAECOO7web-360/'"-->
          <iframe
            ref="web360_iframe"
            id="wrap_360"
            v-if="playweb360"
            scrolling="no"
            frameborder="0"
            :src="dir + 'JAECOO7web-360/'"
            class="iframe"
            :class="dis360 ? 'dis' : ''"
          ></iframe>
          <img
            loading="lazy"
            src="/images/models/web360-top.png"
            class="icon top"
            :class="dis360 ? 'hide' : 'show'"
            @click="web360Change('top')"
          />
          <img
            loading="lazy"
            src="/images/models/web360-bottom.png"
            class="icon bottom"
            :class="dis360 ? 'hide' : 'show'"
            @click="web360Change('bottom')"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide class="section third-page">
        <img
          loading="lazy"
          :src="
            ispc
              ? dir + 'images/models/page3bg2.webp'
              : dir + 'images/models/page3bg2_mob.webp'
          "
          class="banner"
        />
        <div
          class="title animate__animated animate__zoomIn"
          v-if="ispc && currentPage == 2"
        >
          <img
            loading="lazy"
            src="/images/models/title-left.webp"
            class="icon left-icon"
          />
          <Transition
            name="slide-fade"
            v-for="(item, idx) in thirdPage_title2"
            :key="idx"
          >
            <!-- :style="[
                  currentPage == 2
                    ? 'transition-delay: ' + idx * 0.2 + 's;'
                    : 'transition-delay: 0s;',
                ]" -->
            <div class="txt" v-if="currentPage == 2">
              {{ item }}
            </div>
          </Transition>
          <img
            loading="lazy"
            src="/images/models/title-right.webp"
            class="icon right-icon"
          />
        </div>
        <img
          loading="lazy"
          src="/images/models/INTELLIGENT4WDFORALLROADS.webp"
          v-if="!ispc && currentPage == 2"
          class="titleimg animate__animated animate__zoomIn"
        />
      </SwiperSlide>
      <SwiperSlide class="section fourth-page">
        <Swiper
          v-if="ispc"
          class="swiper-container my_swiper_3"
          :modules="[SwiperPagination, SwiperEffectCreative]"
          :slides-per-view="1"
          :loop="true"
          @swiper="onPage4Swiper"
        >
          <SwiperSlide v-for="(slide, idx) in slides2" :key="idx">
            <img loading="lazy" :src="slide.imgsrc" class="img" />
            <div v-if="slide.ismask" class="mask"></div>
            <div class="title">
              <img
                loading="lazy"
                src="/images/models/title-left.webp"
                class="icon left-icon"
              />
              <Transition
                name="slide-fade"
                v-for="(item, ldex) in slide.label"
                :key="ldex"
                :style="[
                  currentPage == 3
                    ? 'transition-delay: ' + ldex * 0.15 + 's;'
                    : 'transition-delay: 0s;',
                ]"
              >
                <div class="word" v-if="currentPage == 3">
                  {{ item }}
                </div>
              </Transition>
              <img
                loading="lazy"
                src="/images/models/title-right.webp"
                class="icon right-icon"
              />
            </div>
          </SwiperSlide>
          <img
            loading="lazy"
            class="btn next"
            src="/images/page2_right_arrow.webp"
            alt="next"
            v-if="slides2.length > 1"
            @click="changePage4_2('next')"
          />
          <img
            loading="lazy"
            class="btn prev"
            src="/images/page2_left_arrow.webp"
            alt="prev"
            v-if="slides2.length > 1"
            @click="changePage4_2('next')"
          />
        </Swiper>
        <ClientOnly fallback-tag="span" fallback="Loading comments...">
          <modelSwiper
            modid="mobslides2"
            :swiperArr="slides2_mob"
            :needTitleBg="false"
            :needPagination="true"
            :needCarmodel="false"
            :shownum="3"
            :curnum="currentPage"
            v-if="!ispc"
          ></modelSwiper>
        </ClientOnly>
      </SwiperSlide>
      <SwiperSlide class="section third-page">
        <img
          loading="lazy"
          :src="
            ispc
              ? dir + 'images/models/page3bg.webp'
              : dir + 'images/models/page3bg_mob.webp'
          "
          class="banner"
        />
        <div
          class="title animate__animated animate__zoomIn"
          v-if="ispc && currentPage == 4"
        >
          <img
            loading="lazy"
            src="/images/models/title-left.webp"
            class="icon left-icon"
          />
          <Transition
            name="slide-fade"
            v-for="(item, idx) in thirdPage_title"
            :key="idx"
          >
            <!-- :style="[
                  currentPage == 4
                    ? 'transition-delay: ' + idx * 0.2 + 's;'
                    : 'transition-delay: 0s;',
                ]" -->
            <div class="txt" v-if="currentPage == 4">
              {{ item }}
            </div>
          </Transition>
          <img
            loading="lazy"
            src="/images/models/title-right.webp"
            class="icon right-icon"
          />
        </div>
        <img
          loading="lazy"
          src="/images/models/intelligenttechnologycabin.webp"
          v-if="!ispc && currentPage == 4"
          class="titleimg animate__animated animate__zoomIn"
        />
      </SwiperSlide>
      <SwiperSlide class="fourth-page">
        <Swiper
          v-if="ispc"
          class="swiper-container my_swiper_2"
          :modules="[SwiperPagination, SwiperEffectCreative]"
          :slides-per-view="1"
          :loop="true"
          @swiper="onPage4Swiper"
        >
          <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
            <img loading="lazy" :src="slide.imgsrc" class="img" />
            <div v-if="slide.ismask" class="mask"></div>
            <div class="title">
              <img
                loading="lazy"
                src="/images/models/title-left.webp"
                class="icon left-icon"
              />
              <Transition
                name="slide-fade"
                v-for="(item, ldex) in slide.label"
                :key="ldex"
                :style="[
                  currentPage == 5
                    ? 'transition-delay: ' + ldex * 0.15 + 's;'
                    : 'transition-delay: 0s;',
                ]"
              >
                <div class="word" v-if="currentPage == 5">
                  {{ item }}
                </div>
              </Transition>
              <img
                loading="lazy"
                src="/images/models/title-right.webp"
                class="icon right-icon"
              />
            </div>
          </SwiperSlide>
          <img
            loading="lazy"
            class="btn next"
            src="/images/page2_right_arrow.webp"
            alt="next"
            @click="changePage4('next')"
          />
          <img
            loading="lazy"
            class="btn prev"
            src="/images/page2_left_arrow.webp"
            alt="prev"
            @click="changePage4('next')"
          />
        </Swiper>
        <ClientOnly fallback-tag="span" fallback="Loading comments...">
          <modelSwiper
            modid="mobslides"
            :swiperArr="slides_mob"
            :needTitleBg="false"
            :needPagination="true"
            :needCarmodel="false"
            :shownum="5"
            :curnum="currentPage"
            v-if="!ispc"
          ></modelSwiper>
        </ClientOnly>
      </SwiperSlide>
      <!-- <SwiperSlide class="third-page">
          <img
            :src="
              ispc ? dir+'images/models/page3bg3.webp' : dir+'images/models/page3bg3_mob.webp'
            "
            class="banner"
          />
          <div
            class="title animate__animated animate__zoomIn"
            v-if="ispc && currentPage == 6"
          >
            <img loading="lazy" src="/images/models/title-left.webp" class="icon left-icon" />
            <Transition
              name="slide-fade"
              v-for="(item, idx) in thirdPage_title3"
              :key="idx"
            >
              <div class="txt" v-if="currentPage == 6">
                {{ item }}
              </div>
            </Transition>
            <img loading="lazy" src="/images/models/title-right.webp" class="icon right-icon" />
          </div>
          <img
            src="/images/models/SOPHISTICATEDOFF-ROADSTYLING.webp"
            v-if="!ispc && currentPage == 6"
            class="titleimg animate__animated animate__zoomIn"
          />
        </SwiperSlide>
        <SwiperSlide class="fourth-page">
          <Swiper
            v-if="ispc"
            class="swiper-container my_swiper_4"
            :modules="[SwiperPagination, SwiperEffectCreative]"
            :slides-per-view="1"
            :loop="true"
            @swiper="onPage4Swiper"
          >
            <SwiperSlide v-for="(slide, idx) in slides3" :key="idx">
              <img loading="lazy" :src="slide.imgsrc" class="img" />
              <div v-if="slide.ismask" class="mask"></div>
              <div class="title">
                <img loading="lazy" src="/images/models/title-left.webp" class="icon left-icon" />
                <Transition
                  name="slide-fade"
                  v-for="(item, ldex) in slide.label"
                  :key="ldex"
                  :style="[
                    currentPage == 7
                      ? 'transition-delay: ' + ldex * 0.15 + 's;'
                      : 'transition-delay: 0s;',
                  ]"
                >
                  <div class="word" v-if="currentPage == 7">
                    {{ item }}
                  </div>
                </Transition>
                <img loading="lazy" src="/images/models/title-right.webp" class="icon right-icon" />
              </div>
            </SwiperSlide>
            <img
              class="btn next"
              src="/images/page2_right_arrow.webp"
              alt="next"
              v-if="slides3.length > 1"
              @click="changePage4_3('next')"
            />
            <img
              class="btn prev"
              src="/images/page2_left_arrow.webp"
              alt="prev"
              v-if="slides3.length > 1"
              @click="changePage4_3('next')"
            />
          </Swiper>
          <ClientOnly fallback-tag="span" fallback="Loading comments...">
            <modelSwiper
              modid="mobslides3"
              :swiperArr="slides3_mob"
              :needTitleBg="false"
              :needPagination="true"
              :needCarmodel="false"
              :shownum="7"
              :curnum="currentPage"
              v-if="!ispc"
            ></modelSwiper>
          </ClientOnly>
        </SwiperSlide> -->
      <SwiperSlide class="five-page" v-if="ispc">
        <div class="img-main">
          <div class="img-item">
            <Transition name="slide-fade">
              <img
                loading="lazy"
                src="/images/models/page5Img1.webp"
                class="img"
                v-if="currentPage == 8"
              />
            </Transition>
            <div class="txt" style="text-align: left">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage == 8">
                  Electric hidden door handles
                  <img
                    loading="lazy"
                    src="/images/models/page5Line-right.webp"
                    class="icon icon-right"
                  />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage == 8">
                  <p>With the electrical release function</p>
                  <p>the door can be opened with a force of 30N</p>
                </div>
              </Transition>
            </div>
          </div>
          <div class="img-item">
            <div class="txt" v-if="ispc" style="text-align: right">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage == 8">
                  19-inch glossy aluminum alloy hubs
                  <img
                    loading="lazy"
                    src="/images/models/page5Line-left.webp"
                    class="icon"
                  />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage == 8">
                  <p>It boasts the design that resembles the</p>
                  <p>aurora, making it even more trendy and dazzling</p>
                </div>
              </Transition>
            </div>
            <Transition name="slide-fade">
              <img
                loading="lazy"
                src="/images/models/page5Img2.webp"
                class="img"
                v-if="currentPage == 8"
              />
            </Transition>
            <div class="txt" v-if="!ispc" style="text-align: left">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage == 8">
                  19-inch glossy aluminum alloy hubs
                  <img
                    loading="lazy"
                    src="/images/models/page5Line-right.webp"
                    class="icon icon-right"
                  />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage == 8">
                  <p>It boasts the design that resembles the</p>
                  <p>aurora, making it even more trendy and dazzling</p>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="five-page" v-if="ispc">
        <div class="img-main">
          <div class="img-item">
            <Transition name="slide-fade">
              <img
                loading="lazy"
                src="/images/models/page5Img3.webp"
                class="img"
                v-if="currentPage == 9"
              />
            </Transition>
            <div class="txt" style="text-align: left">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage == 9">
                  1.1M² large panoramic sunroof
                  <img
                    loading="lazy"
                    src="/images/models/page5Line-right.webp"
                    class="icon icon-right"
                  />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage == 9">
                  <p>With both large size and industry-leading smart open</p>
                  <p>and close functions</p>
                </div>
              </Transition>
            </div>
          </div>
          <div class="img-item">
            <div class="txt" v-if="ispc" style="text-align: right">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage == 9">
                  All-sense seats
                  <img
                    loading="lazy"
                    src="/images/models/page5Line-left.webp"
                    class="icon"
                  />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage == 9">
                  <p>Multi-mode seats are soft and comfortable</p>
                  <p>with ten powerful adjustment functions</p>
                </div>
              </Transition>
            </div>
            <Transition name="slide-fade">
              <img
                loading="lazy"
                src="/images/models/page5Img4.webp"
                class="img"
                v-if="currentPage == 9"
              />
            </Transition>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="five-page" v-if="ispc">
        <div class="img-main">
          <div class="img-item">
            <Transition name="slide-fade">
              <img
                loading="lazy"
                src="/images/models/page5Img5.webp"
                class="img"
                v-if="currentPage >= 10"
              />
            </Transition>
            <div class="txt" style="text-align: left">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage >= 10">
                  10 safety airbags
                  <img
                    loading="lazy"
                    src="/images/models/page5Line-right.webp"
                    class="icon icon-right"
                  />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage >= 10">
                  <p>The whole series adopt a 6-second pressure maintaining</p>
                  <p>
                    technology which can effectively prevent secondary injuries
                    from accidents
                  </p>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Swiper
          class="insideSwiper"
          style="width: 100%; height: 100vh; transform: none"
          :modules="[SwiperFreeMode, SwiperMousewheel]"
          direction="vertical"
          :mousewheel="true"
          slidesPerView="auto"
          :freeMode="{
            enabled: true,
            minimumVelocity: 0.1,
          }"
          :nested="true"
          :observer="true"
          :observeParents="true"
          :autoHeight="true"
        >
          <SwiperSlide class="another-five-page" v-if="!ispc">
            <div class="img-main">
              <div class="img-item item1">
                <img
                  loading="lazy"
                  src="/images/models/page5Img5.webp"
                  class="img animate__animated animate__fadeIn"
                />
                <Transition name="slide-fade">
                  <img
                    loading="lazy"
                    src="/images/models/10safetyairbags.webp"
                    v-if="currentPage >= 8"
                    class="titleimg"
                  />
                </Transition>
              </div>
              <div class="row">
                <div class="img-item item2">
                  <img
                    loading="lazy"
                    src="/images/models/page5Img1.webp"
                    class="img animate__animated animate__fadeIn"
                  />
                  <Transition name="slide-fade">
                    <img
                      loading="lazy"
                      src="/images/models/Electrichiddendoorhandles.webp"
                      class="titleimg"
                      v-if="currentPage >= 8"
                    />
                  </Transition>
                </div>
                <div class="img-item item3">
                  <img
                    loading="lazy"
                    src="/images/models/page5Img2.webp"
                    class="img animate__animated animate__fadeIn"
                  />
                  <Transition name="slide-fade">
                    <img
                      loading="lazy"
                      src="/images/models/CrystaldiamondarrayLEDtaillamp.webp"
                      class="titleimg"
                      v-if="currentPage >= 8"
                    />
                  </Transition>
                </div>
              </div>
              <div class="img-item item4">
                <img
                  loading="lazy"
                  src="/images/models/page5Img3.webp"
                  class="img animate__animated animate__fadeIn"
                />
                <Transition name="slide-fade">
                  <img
                    loading="lazy"
                    src="/images/models/1.1M2largepanoramicsunroof.webp"
                    class="titleimg"
                    v-if="currentPage >= 8"
                  />
                </Transition>
              </div>
              <div class="img-item item5">
                <img
                  loading="lazy"
                  src="/images/models/page5Img4.webp"
                  class="img animate__animated animate__fadeIn"
                />
                <Transition name="slide-fade">
                  <img
                    loading="lazy"
                    src="/images/models/All-senseseats.webp"
                    class="titleimg"
                    v-if="currentPage >= 8"
                  />
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style="height: auto; display: block">
            <div class="min-h-[100vh] flex flex-col">
              <ClientOnly fallback-tag="span" fallback="Loading comments...">
                <xlsxTable class="flex-1"></xlsxTable>
              </ClientOnly>
              <LayoutsFooter />
            </div>
          </SwiperSlide>
        </Swiper>
      </SwiperSlide>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import type { Ref } from "vue";
const dir = useRuntimeConfig().public.staticURL + "/";
const { isMobile } = useDeviceType();
const ispc = computed(() => {
  return !isMobile.value;
});
const currentPage: Ref<number> = ref(999);
var npagination = {
  clickable: true,
};
var page4Swiper: any;
const onPage4Swiper = (swiper4) => {
  page4Swiper = swiper4;
  // // console.log("page4444", page4Swiper);
};
var startNumAni = ref(false);
var web360: any = ref(null);
var web360_iframe: any = ref(null);
var dis360: Ref<boolean> = ref(true);
var playweb360: Ref<boolean> = ref(false);
function handleCustomEvent(cur) {
  let pagecur;
  if (cur > 6) {
    pagecur = cur + 1;
  } else {
    pagecur = cur - 1;
  }
  if (cur == 2) {
    dis360.value = false;
  }
  // console.log(cur, 'page', pagecur)
  setTimeout(
    () => {
      currentPage.value = pagecur;
      if (cur - 1 == 0) {
        setTimeout(() => {
          startNumAni.value = true;
        }, 800);
      } else {
        startNumAni.value = false;
      }
    },
    cur - 1 < 6 ? 310 : 0
  );
}
// function callback(entries, instance) {
//   // console.log('可见性', entries)
//   //   // if (entry.isIntersecting) {
//   //   //   const element = entry.target;
//   //   //   element.classList.remove("opaque");
//   //   //   element.classList.add("come-in");
//   //   //   instance.unobserve(element);
//   //   // }
//   // entries.forEach((entry) => {
//   //   // 判断元素是否出现在
//   //   // 每个对象表示一个目标元素与父元素或视窗的交叉状态信息，包括目标元素的位置、大小、可见性等
//   //   // console.log(entry.isIntersecting)
//   //   // if (entry.isIntersecting) {
//   //   //   const element = entry.target;
//   //   //   element.classList.remove("opaque");
//   //   //   element.classList.add("come-in");
//   //   //   instance.unobserve(element);
//   //   // }
//   // });
// }
// 监听message事件
let goon = true;
function handleMessage(event) {
  // console.log('message')
  if (goon == true) {
    goon = false;
    var fullpage = document.querySelector(".fullPageContainer").swiper;
    if (event.data.message > 0) {
      fullpage.slideNext();
    } else if (event.data.message < 0) {
      fullpage.slidePrev();
    }
    setTimeout(() => {
      goon = true;
    }, 1500);
  }
}
onMounted(() => {
  handleCustomEvent(1);

  nextTick(() => {
    // console.log(window)
    window.addEventListener("message", handleMessage, "*");
    var elements = document.querySelectorAll(".wrap_360");
    var observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        // 判断元素是否出现在父元素中
        // 每个对象表示一个目标元素与父元素或视窗的交叉状态信息，包括目标元素的位置、大小、可见性等
        playweb360.value = entry.isIntersecting;
        if (entry.isIntersecting) {
          // // console.log('entry.isIntersecting',entry.isIntersecting)
          const element = entry.target;
          instance.unobserve(element);
        }
      });
    });
    elements.forEach((ele) => {
      // 观察元素
      observer.observe(ele);
    });
  });
});
onBeforeUnmount(() => {
  window.removeEventListener("message", handleMessage);
});
// 第一屏
var firstPage_arr = [
  { label: "POWER", num: 145, txt: "kW" },
  {
    label: "TORQUE",
    num: 290,
    txt: ispc.value
      ? "N<div style='width: calc(0.23 * 16 / 19.2 * 1vw);height: calc(0.23 * 16 / 19.2 * 1vw);background: #fff;border-radius: 50%;margin:calc(0.4 * 16 / 19.2 * 1vw) calc(0.2 * 16 / 19.2 * 1vw) 0;'></div>m"
      : "N<div style='width: calc(0.13 * 16 / 3.75 * 1vw);height: calc(0.13 * 16 / 3.75 * 1vw);background: #fff;border-radius: 50%;margin:calc(0.13 * 16 / 3.75 * 1vw) calc(0.1 * 16 / 3.75 * 1vw) 0;'></div>m",
  },
  { label: "WHEELBASE", num: 2672, txt: "mm" },
  { label: "GROUND CLEARANCE", num: 200, txt: "mm" },
];
// 第二屏
const secondIdx: Ref<number> = ref(0);
function onSecondPageSwiper(swiper) {
  swiper.on("slideChangeTransitionEnd", function () {
    let sw = this;
    let mySwiper: any = document.querySelector(".fullPageContainer").swiper;
    setTimeout(() => {
      secondIdx.value = sw.activeIndex;
      if (sw.activeIndex == 0 || sw.activeIndex == 3) {
        mySwiper.mousewheel.enable();
      }
    }, 1000);
  });
  swiper.on("slideChangeTransitionStart", function () {
    let sw = this;
    let mySwiper: any = document.querySelector(".fullPageContainer").swiper;
    mySwiper.mousewheel.disable();
  });
}
function web360Change(txt) {
  let mySwiper: any = document.querySelector(".fullPageContainer").swiper;
  // console.log('change', txt)
  switch (txt) {
    case "top":
      mySwiper.slidePrev();
      break;
    case "bottom":
      dis360.value = true;
      setTimeout(() => {
        mySwiper.slideNext();
      }, 100);

      break;
  }
}
// 第三屏
var thirdPage_title = ["Intelligent", "technology", "cabin"];
var thirdPage_title2 = ["Intelligent", "4WD", "for", "all", "roads"];
var thirdPage_title3 = ["Sophisticated", "off-road", "styling"];
// 第四屏
type swiperItem = {
  label: string[];
  txtarr: Object;
  imgsrc: string;
  isvideo: boolean;
  vsrc: string;
  ismask: boolean;
};
type sideswiperItem = {
  src: string;
  txt: string;
};
var slides: Array<swiperItem> = [
  {
    label: ["50W", "wireless", "fast", "charging", "for", "cell", "phones"],
    txtarr: {},
    imgsrc: dir + "images/models/page4Swiper1.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  },
  {
    label: ["14.8-inch", "large", "screen"],
    txtarr: {},
    imgsrc: dir + "images/models/page4Swiper2.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  },
  {
    label: ["Aircraft", "style", "gear", "shift", "handle"],
    txtarr: {},
    imgsrc: dir + "images/models/page4Swiper3.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  },
];
var slides_mob: sideswiperItem[] = [
  {
    src: dir + "images/models/page4Swiper1_mob.webp",
    txt: "50W wireless fast charging for cell phones",
  },
  {
    src: dir + "images/models/page4Swiper2_mob.webp",
    txt: "14.8-inch large screen",
  },
  {
    src: dir + "images/models/page4Swiper3_mob.webp",
    txt: "Aircraft style gear shift handle",
  },
];
function changePage4(type) {
  const swiper_2 = document.querySelector(".my_swiper_2").swiper;
  if (type == "next") {
    swiper_2.slideNext();
  } else {
    swiper_2.slidePrev();
  }
}
var slides2: Array<swiperItem> = [
  // {
  //   label: ["290T", "excellent", "power"],
  //   txtarr: {},
  //   imgsrc:dir + "images/models/page4Swiper5.webp",
  //   isvideo: false,
  //   vsrc: "",
  //   ismask: true,
  // },
  {
    label: ["Caged", "energy-absorbing", "space", "capsule"],
    txtarr: {},
    imgsrc: dir + "images/models/page4Swiper6.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  },
  {
    label: ["1.6TGDI", "excellent", "power", "engine"],
    txtarr: {},
    imgsrc: dir + "images/models/page4Swiper7.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  },
  // {
  //   label: ["International", "superb", "chassis", "tuning"],
  //   txtarr: {},
  //   imgsrc:dir + "images/models/page4Swiper4.webp",
  //   isvideo: false,
  //   vsrc: "",
  //   ismask: true,
  // },
];

var slides2_mob: sideswiperItem[] = [
  // {
  //   src:dir + "images/models/page4Swiper5_mob.webp",
  //   txt: "290T excellent power",
  // },
  {
    src: dir + "images/models/page4Swiper6_mob.webp",
    txt: "Caged energy-absorbing space capsule",
  },
  {
    src: dir + "images/models/page4Swiper7_mob.webp",
    txt: "1.6TGDI excellent power engine",
  },
  // {
  //   src:dir + "images/models/page4Swiper4_mob.webp",
  //   txt: "International superb chassis tuning",
  // },
];
function changePage4_2(type) {
  const swiper_2 = document.querySelector(".my_swiper_3").swiper;
  if (type == "next") {
    swiper_2.slideNext();
  } else {
    swiper_2.slidePrev();
  }
}
var slides3: Array<swiperItem> = [
  {
    label: ["Minimalist", "and", "flying", "waistline"],
    txtarr: {},
    imgsrc: dir + "images/models/page6Swiper1.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  },
  {
    label: ["Crystal", "diamond", "array", "LED", "tail", "lamp"],
    txtarr: {},
    imgsrc: dir + "images/models/page6Swiper2.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  },
];

var slides3_mob: sideswiperItem[] = [
  {
    src: dir + "images/models/page6Swiper1_mob.webp",
    txt: "Minimalist and flying waistline",
  },
  {
    src: dir + "images/models/page6Swiper2_mob.webp",
    txt: "Crystal diamond array LED tail lamp",
  },
];
function changePage4_3(type) {
  const swiper_3 = document.querySelector(".my_swiper_4").swiper;
  if (type == "next") {
    swiper_3.slideNext();
  } else {
    swiper_3.slidePrev();
  }
}
</script>

<style scoped>
.swiper-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #000;
}

.swiper-slide {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-size: calc(1 * 16 / 19.2 * 1vw);
  text-align: center;
  color: #fff;
}

.swiper-container :deep() .swiper-pagination {
  width: 100%;
  height: 4rem;
  height: calc(4 * 16 / 19.2 * 1vw);
  position: absolute;
  bottom: 1.8rem !important;
  bottom: calc(1.8 * 16 / 19.2 * 1vw) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.swiper-container :deep() .swiper-pagination .swiper-pagination-bullet {
  width: 4rem;
  width: calc(4 * 16 / 19.2 * 1vw);
  height: 0.35rem;
  height: calc(0.35 * 16 / 19.2 * 1vw);
  margin: 0 0.3rem;
  margin: 0 calc(0.3 * 16 / 19.2 * 1vw);
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 99;
  cursor: pointer;
  border-radius: 0;
  opacity: 1;
}

.swiper-container :deep() .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #e4e2e2a4;
}

.btn:hover {
  opacity: 1;
}

.btn.next {
  right: 5%;
}

.btn.prev {
  left: 5%;
}

/*第一屏*/
.first-page {
  width: 100%;
  height: 100vh;
  position: relative;
}

.first-page .logoimg {
  width: 15rem;
  width: calc(15 * 16 / 19.2 * 1vw);
  height: auto;
  color: #fff;
  font-family: "SourceHanSansSC-Light";
  position: absolute;
  top: 28%;
  left: 26%;
}

.first-page .banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.msg-main {
  width: 70vw;
  height: auto;
  position: absolute;
  bottom: 5rem;
  bottom: calc(5 * 16 / 19.2 * 1vw);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 20;
}

.msg-item {
  width: 25%;
  height: auto;
  border-right: 1px solid #ffffff6b;
  transition: 1.5s;
}

.msg-item:last-child {
  border-right: none;
}

.msg-item .msg-row {
  height: 2rem;
  height: calc(2 * 16 / 19.2 * 1vw);
  overflow: hidden;
  font-family: "SourceHanSansSC-Regular";
  font-size: 2.1rem;
  font-size: calc(2.1 * 16 / 19.2 * 1vw);
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 2px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.msg-item .msg-row .txt {
  display: flex;
  align-items: center;
}

.msg-item .label-row {
  font-family: "SourceHanSansSC-Normal";
  font-size: 1rem;
  font-size: calc(1 * 16 / 19.2 * 1vw);
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
  padding-top: 1.3rem;
  padding-top: calc(1.3 * 16 / 19.2 * 1vw);
}

@media (max-width: 1024px) {
  .first-page .logoimg {
    width: 10rem;
    width: calc(10 * 16 / 3.75 * 1vw);
    height: auto;
    color: #fff;
    font-family: "SourceHanSansSC-Light";
    position: absolute;
    top: 16%;
    left: 50%;
    transform: translateX(-50%);
  }

  .msg-main {
    width: 90%;
    height: auto;
    position: absolute;
    bottom: 13rem;
    bottom: calc(13 * 16 / 3.75 * 1vw);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .msg-item {
    width: 25%;
    height: auto;
    border-right: 1px solid #ffffff38;
    transition: 1.5s;
  }

  .msg-item:last-child {
    border-right: none;
  }

  .msg-item .msg-row {
    height: 1rem;
    height: calc(1 * 16 / 3.75 * 1vw);
    overflow: hidden;
    font-family: "SourceHanSansSC-Regular";
    font-size: 0.8rem;
    font-size: calc(0.8 * 16 / 3.75 * 1vw);
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 2px;
    color: #ffffff;
  }

  .msg-item .label-row {
    font-family: "SourceHanSansSC-Normal";
    font-size: 0.5rem;
    font-size: calc(0.5 * 16 / 3.75 * 1vw);
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    padding-top: 0.8rem;
    padding-top: calc(0.8 * 16 / 3.75 * 1vw);
  }

  .mob-icon {
    width: 3rem;
    width: calc(3 * 16 / 3.75 * 1vw);
    height: auto;
    position: absolute;
    bottom: 6rem;
    bottom: calc(6 * 16 / 3.75 * 1vw);
    left: 50%;
    transform: translateX(-50%);
    animation: move 1.2s infinite;
    transition: 1.2s;
  }

  @keyframes move {
    0% {
      bottom: 6rem;
      bottom: calc(6 * 16 / 3.75 * 1vw);
    }

    50% {
      bottom: 5rem;
      bottom: calc(5 * 16 / 3.75 * 1vw);
    }

    100% {
      bottom: 6rem;
      bottom: calc(6 * 16 / 3.75 * 1vw);
    }
  }
}

/*第二屏*/
.second-page {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
}

.second-page .banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.second-page {
  position: relative;
}

.wrap_360 {
  width: 100%;
  height: 100%;
  /* height: 85%; */
  /* padding-top: 47%; */
  /* position: absolute;
    top: 57%;
    left: 50%;
    transform: translate(-50%, -50%); */
}

.wrap_360 .iframe {
  width: 100%;
  height: 94%;
  position: absolute;
  left: 0;
  top: 6%;
  border: none;
  z-index: 10;
}

.wrap_360 .iframe.dis {
  pointer-events: none;
}

.wrap_360 .iframe canvas {
  z-index: 1;
}

.wrap_360 .icon {
  width: 3.2rem;
  width: calc(3.2 * 16 / 19.2 * 1vw);
  height: auto;
  position: absolute;
  left: 3%;
  transition: 1.2s;
  z-index: 200 !important;
  cursor: pointer;
  transition: 1s;
  transition-delay: 1.5s;
  display: block;
}

.wrap_360 .icon.top {
  top: 40%;
  animation: move2top 1.2s infinite;
}

.wrap_360 .icon.bottom {
  top: 80%;
  animation: move2bottom 1.2s infinite;
}

@keyframes move2top {
  0% {
    transform: translateY(-50%);
  }

  50% {
    transform: translateY(-70%);
  }

  100% {
    transform: translateY(-50%);
  }
}

@keyframes move2bottom {
  0% {
    transform: translateY(-70%);
  }

  50% {
    transform: translateY(-50%);
  }

  100% {
    transform: translateY(-70%);
  }
}

/*第三屏*/
.third-page {
  width: 100%;
  height: 100vh;
  position: relative;
}

.third-page .banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.third-page .title {
  width: 100%;
  height: 2.6rem;
  height: calc(2.6 * 16 / 19.2 * 1vw);
  overflow: hidden;
  font-family: "SourceHanSansSC-Light";
  font-size: 1.5rem;
  font-size: calc(1.5 * 16 / 19.2 * 1vw);
  font-weight: 400;
  font-stretch: normal;
  letter-spacing: 1.2px;
  color: #ffffff;
  position: absolute;
  top: auto;
  bottom: 2.5rem;
  bottom: calc(2.5 * 16 / 19.2 * 1vw);
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  --animate-duration: 800ms;
  --animate-delay: 0.8s;
}

.third-page .title .txt {
  margin: 0 0.4rem;
  margin: 0 calc(0.4 * 16 / 19.2 * 1vw);
  text-transform: uppercase;
}

.third-page .title .icon {
  width: 7rem;
  width: calc(7 * 16 / 19.2 * 1vw);
  height: auto;
  margin: 0.15rem 1.5rem 0;
  margin: calc(0.15 * 16 / 19.2 * 1vw) calc(1.5 * 16 / 19.2 * 1vw) 0;
}

@media (max-width: 1024px) {
  .wrap_360 .icon {
    left: 3%;
    z-index: 200 !important;
  }

  .wrap_360 .icon.top {
    top: 20%;
    animation: move2top 1.2s infinite;
  }

  .wrap_360 .icon.bottom {
    top: 80%;
    animation: move2bottom 1.2s infinite;
  }

  .third-page .titleimg {
    width: 95%;
    height: auto;
    position: absolute;
    top: 18%;
    left: 2.5%;
    z-index: 2;
  }
}

/*第四屏*/
.fourth-page {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #000;
  padding-top: 6rem;
  padding-top: calc(6 * 16 / 19.2 * 1vw);
  box-sizing: border-box;
}

.fourth-page .swiper-container {
  width: 100%;
  height: 48rem;
  height: calc(48 * 16 / 19.2 * 1vw);
  position: relative;
}

.fourth-page .swiper-slide {
  width: 80%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.fourth-page .swiper-container :deep() .swiper-pagination {
  width: 100%;
  height: 4rem;
  height: calc(4 * 16 / 19.2 * 1vw);
  position: absolute;
  bottom: 1rem !important;
  bottom: calc(1 * 16 / 19.2 * 1vw) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.fourth-page
  .swiper-container
  :deep()
  .swiper-pagination
  .swiper-pagination-bullet {
  width: 4rem;
  width: calc(4 * 16 / 19.2 * 1vw);
  height: 0.35rem;
  height: calc(0.35 * 16 / 19.2 * 1vw);
  margin: 0 0.3rem;
  margin: 0 calc(0.3 * 16 / 19.2 * 1vw);
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 99;
  cursor: pointer;
  border-radius: 0;
  opacity: 1;
}

.fourth-page
  .swiper-container
  :deep()
  .swiper-pagination
  .swiper-pagination-bullet-active {
  background-color: #e4e2e2a4;
}

.fourth-page .btn {
  width: 1.3rem;
  width: calc(1.3 * 16 / 19.2 * 1vw);
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;
  cursor: pointer;
}

.fourth-page .next {
  right: 5%;
}

.fourth-page .prev {
  left: 5%;
}

.fourth-page .swiper-slide .title {
  width: 100%;
  height: 3.8rem;
  height: calc(3.8 * 16 / 19.2 * 1vw);
  overflow: hidden;
  text-align: center;
  font-family: "SourceHanSansSC-Light";
  text-shadow: rgba(0, 0, 0, 0.3) 1px 1px 5px;
  font-size: 1.5rem;
  font-size: calc(1.5 * 16 / 19.2 * 1vw);
  line-height: 1;
  letter-spacing: 3px;
  color: #ffffff;
  z-index: 10;
  transition: 1.8s cubic-bezier(0, 1, 0.65, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.fourth-page .swiper-slide .title .icon {
  width: 7rem;
  width: calc(7 * 16 / 19.2 * 1vw);
  height: auto;
  margin: 0.15rem 1.5rem 0;
  margin: calc(0.15 * 16 / 19.2 * 1vw) calc(0.15 * 16 / 19.2 * 1vw) 0;
}

.fourth-page .swiper-slide .title .word {
  margin: 0 0.4rem;
  margin: 0 calc(0.4 * 16 / 19.2 * 1vw);
  text-transform: uppercase;
}

.fourth-page .swiper-slide .mask {
  width: 100%;
  height: 100vh;
  background: url(/images/mask.webp);
  background-repeat: repeat;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  opacity: 0.2;
  display: none;
}

.fourth-page .swiper-slide .img {
  width: 80%;
  height: 40rem;
  height: calc(40 * 16 / 19.2 * 1vw);
  object-fit: cover;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 1rem;
  border-radius: calc(1 * 16 / 19.2 * 1vw);
}

@media (max-width: 1024px) {
  .fourth-page {
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #000;
    padding-top: 0;
    box-sizing: border-box;
    display: block;
  }

  .fourth-page .swiper-container {
    width: 100%;
    height: 30rem;
    height: calc(30 * 16 / 3.75 * 1vw);
    position: relative;
    margin-top: 0;
  }

  .fourth-page .swiper-slide {
    width: 93%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .fourth-page .swiper-container :deep() .swiper-pagination {
    width: 100%;
    height: 1rem;
    height: calc(1 * 16 / 3.75 * 1vw);
    position: absolute;
    bottom: 1rem !important;
    bottom: calc(1 * 16 / 3.75 * 1vw) !important;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .fourth-page
    .swiper-container
    :deep()
    .swiper-pagination
    .swiper-pagination-bullet {
    width: 4rem;
    width: calc(4 * 16 / 3.75 * 1vw);
    height: 0.1rem;
    height: calc(0.1 * 16 / 3.75 * 1vw);
    margin: 0 0.3rem;
    margin: 0 calc(0.3 * 16 / 3.75 * 1vw);
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 99;
    cursor: pointer;
    border-radius: 0;
    opacity: 1;
  }

  .fourth-page
    .swiper-container
    :deep()
    .swiper-pagination
    .swiper-pagination-bullet-active {
    background-color: #e4e2e2a4;
  }

  .fourth-page .btn {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    z-index: 10;
    width: 1rem;
    width: calc(1 * 16 / 3.75 * 1vw);
    height: auto;
    opacity: 0.6;
    cursor: pointer;
  }

  .fourth-page .btn:hover {
    opacity: 1;
  }

  .fourth-page .btn.next {
    right: 5%;
  }

  .fourth-page .btn.prev {
    left: 5%;
  }

  .fourth-page .swiper-slide .title {
    width: 93%;
    height: 2.8rem;
    height: calc(2.8 * 16 / 3.75 * 1vw);
    overflow: hidden;
    text-align: center;
    font-family: "SourceHanSansSC-Light";
    text-shadow: rgba(0, 0, 0, 0.3) 1px 1px 5px;
    font-size: 0.9rem;
    font-size: calc(0.9 * 16 / 3.75 * 1vw);
    line-height: 1;
    letter-spacing: 3px;
    color: #ffffff;
    z-index: 10;
    transition: 1.8s cubic-bezier(0, 1, 0.65, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    left: 50%;
    top: 1rem;
    top: calc(1 * 16 / 3.75 * 1vw);
    transform: translateX(-50%);
  }

  .fourth-page .swiper-slide .title .word {
    margin: 0 0.25rem;
    margin: 0 calc(0.25 * 16 / 3.75 * 1vw);
    text-transform: uppercase;
  }

  .fourth-page .swiper-slide .mask {
    width: 100%;
    height: 100vh;
    background: url(/images/mask.webp);
    background-repeat: repeat;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
    opacity: 0.2;
    display: none;
  }

  .fourth-page .swiper-slide .img {
    width: 90%;
    height: 20rem;
    height: calc(20 * 16 / 3.75 * 1vw);
    object-fit: cover;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0;
  }
}

/*第五屏*/
.five-page {
  width: 100%;
  height: 100vh;
  position: relative;
  background: #000;
}

.five-page .img-main {
  width: 80%;
  height: auto;
  position: relative;
}

.five-page .img-main .img-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1.2rem;
  margin-bottom: calc(1.2 * 16 / 19.2 * 1vw);
}

.img-item .img {
  width: 38rem;
  width: calc(38 * 16 / 19.2 * 1vw);
  height: 20rem;
  height: calc(20 * 16 / 19.2 * 1vw);
  transition: 1s;
  transition-delay: 0.3s;
  object-fit: cover;
  border-radius: 0.5rem;
  border-radius: calc(0.5 * 16 / 19.2 * 1vw);
}

.img-item .txt {
  width: 35rem;
  width: calc(35 * 16 / 19.2 * 1vw);
  font-size: 1.2rem;
  font-size: calc(1.2 * 16 / 19.2 * 1vw);
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: 3px;
  color: #ffffff;
  margin: 0 2.2rem;
  margin: 0 calc(2.2 * 16 / 19.2 * 1vw);
}

.img-item .txt .title {
  width: 100%;
  margin-bottom: 2.6rem;
  margin-bottom: calc(2.6 * 16 / 19.2 * 1vw);
  font-size: 1.5rem;
  font-size: calc(1.5 * 16 / 19.2 * 1vw);
  transition: 1s;
  transition-delay: 0.1s;
  position: relative;
  text-transform: uppercase;
}

.img-item .txt .title .icon {
  width: 13rem;
  width: calc(13 * 16 / 19.2 * 1vw);
  height: auto;
  bottom: -1rem;
  bottom: calc(-1 * 16 / 19.2 * 1vw);
  position: absolute;
  right: 0;
  left: auto;
}

.img-item .txt .title .icon-right {
  left: 0;
  right: auto;
}

.img-item .txt .memo {
  width: 100%;
  font-family: "SourceHanSansSC-Light";
  font-size: 1.2rem;
  font-size: calc(1.2 * 16 / 19.2 * 1vw);
  font-stretch: normal;
  letter-spacing: 1px;
  transition: 1s;
  transition-delay: 0.3s;
}

.img-item .txt .memo p {
  margin-bottom: 0.4rem;
  margin-bottom: calc(0.4 * 16 / 19.2 * 1vw);
}

@media (max-width: 1024px) {
  .another-five-page {
    width: 100%;
    height: auto;
    position: relative;
  }

  .another-five-page .img-main {
    width: 100%;
    height: auto;
    position: relative;
    padding-top: 6rem;
    padding-top: calc(6 * 16 / 3.75 * 1vw);
    padding-bottom: 2rem;
    padding-bottom: calc(2 * 16 / 3.75 * 1vw);
  }

  .another-five-page .img-main .img-item {
    display: block;
    position: relative;
  }

  .another-five-page .img-main .row {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .another-five-page .img-main .img-item .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
  }

  .another-five-page .img-main .img-item .titleimg {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    bottom: 1%;
    transition: 0.6s;
    transition-delay: 0.3s;
  }

  .another-five-page .img-main .item1 {
    width: 100%;
    height: 13rem;
    height: calc(13 * 16 / 3.75 * 1vw);
    border-top: 1px solid #fff;
  }

  .another-five-page .img-main .item1 .titleimg {
    width: 70%;
    bottom: 3%;
    left: 10%;
  }

  .another-five-page .img-main .item2 {
    width: 50%;
    height: 12rem;
    height: calc(12 * 16 / 3.75 * 1vw);
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
  }

  .another-five-page .img-main .item2 .titleimg {
    width: 100%;
    bottom: 3%;
    left: 6%;
  }

  .another-five-page .img-main .item3 {
    width: 50%;
    height: 12rem;
    height: calc(12 * 16 / 3.75 * 1vw);
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
  }

  .another-five-page .img-main .item3 .titleimg {
    width: 85%;
    bottom: 3%;
    left: 6%;
  }

  .another-five-page .img-main .item4 {
    width: 100%;
    height: 13rem;
    height: calc(13 * 16 / 3.75 * 1vw);
    border-bottom: 1px solid #fff;
  }

  .another-five-page .img-main .item4 .titleimg {
    width: 90%;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }

  .another-five-page .img-main .item5 {
    width: 100%;
    height: 13rem;
    height: calc(13 * 16 / 3.75 * 1vw);
    border-bottom: 1px solid #fff;
  }

  .another-five-page .img-main .item5 .titleimg {
    width: 70%;
    bottom: 5%;
    left: 52%;
    transform: translateX(-50%);
  }
}
</style>
