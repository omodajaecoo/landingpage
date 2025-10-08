<template>
  <div class="body-main">
    <taost :show="showToast" msg="Downloading, please wait" />
    <div class="kv-banner">
      <img src="/images/e5-edit/first-banner-bg.webp" v-if="ispc" class="kv" />
      <img src="/images/e5/kv_mob.webp" v-if="ispc == false" class="kv" />
      <img src="/images/e5-edit/first-title.webp" class="kv-title" />
      <div class="msg-main">
        <Transition
          name="slide-fade"
          v-for="(item, idx) in firstPage_arr"
          :key="idx"
        >
          <div
            class="msg-item"
            v-if="sectionNum >= 1"
            :style="[
              sectionNum == 1
                ? 'transition-delay: ' + idx * 0.2 + 's;'
                : 'transition-delay: 0s;',
            ]"
          >
            <div class="msg-row">
              <div class="txt" v-html="item.btxt"></div>
              <vue-count-to
                v-if="startNumAni"
                class="num"
                :start="item.start_num || 0"
                :end="item.num"
                :autoPlay="true"
                :duration="1500"
                :default="item.default || 0"
              />
              <div class="txt" v-html="item.txt"></div>
            </div>
            <div class="label-row">{{ item.label }}</div>
          </div>
        </Transition>
      </div>
    </div>
    <div class="section swiper-page page2 c2" id="page2">
      <div class="page-title" v-if="ispc == false">
        <img
          loading="lazy"
          src="/images/e5-edit/page-titles/page2title.webp"
          class="img animate__animated animate__zoomIn"
          v-if="sectionNum == 2"
        />
      </div>
      <div
        class="title-banner"
        v-if="ispc"
        @mouseover="changeFixedTag(true)"
        @mouseout="changeFixedTag(false)"
      >
        <img
          loading="lazy"
          src="/images/e5-edit/fixed-top-title.webp"
          class="img"
        />
        <!--  :class="zoomPage3Top?'hide':'show'" -->
        <!-- <img loading="lazy" src="/images/e5-edit/fixed-top-title-b.webp" class="img" :class="!zoomPage3Top?'hide':'show'"> -->
        <!-- hoverFixedTag -->
        <div class="top-list" :class="!hoverFixedTag ? 'hide' : 'show'">
          <a
            :href="item.url"
            class="top-list-item choose"
            v-for="(item, index) in toplist"
            :key="index"
            >{{ item.txt }}</a
          >
        </div>
        <div class="top-list" :class="hoverFixedTag ? 'hide' : 'show'">
          <a
            :href="item.url"
            class="top-list-item noborder"
            :class="sectionNum == item.id ? 'choose' : ''"
            v-for="(item, index) in toplist"
            :key="index"
            >{{ item.txt }}</a
          >
        </div>
      </div>
      <div class="kv">
        <img
          loading="lazy"
          src="/images/e5-edit/second-banner.webp"
          v-if="ispc"
          class="img"
        />
        <img
          loading="lazy"
          src="/images/e5/page2_banner_mob.webp"
          v-if="ispc == false"
          class="img"
        />
        <img
          loading="lazy"
          src="/images/e5-edit/second-title-2.webp"
          class="txt animate__animated animate__backInRight animate__delay-2s"
          v-if="sectionNum == 2"
        />
        <img
          loading="lazy"
          src="/images/e5-edit/second-title-1.webp"
          class="icon animate__animated animate__backInLeft animate__delay-2s"
          v-if="sectionNum == 2 && ispc == true"
        />
        <img
          loading="lazy"
          src="/images/e5-edit/second-title-1-mob.webp"
          class="icon animate__animated animate__backInLeft animate__delay-2s"
          v-if="sectionNum == 2 && ispc == false"
        />
      </div>

      <Swiper
        class="push-pull-container"
        :autoplay="{ delay: 3000 }"
        :effect="'fade'"
        :pagination="{ clickable: true }"
        :loop="true"
        :modules="[SwiperEffectFade, SwiperPagination, SwiperAutoplay]"
        @swiper="onPage2Swiper"
      >
        <!-- class="push-pull-item" -->
        <swiperSlide v-for="(item, index) in page2SwiperArr" :key="index">
          <img loading="lazy" :src="item.src" class="img" />
          <div class="title" v-html="item.title"></div>
          <div class="memo" v-html="item.memo"></div>
        </swiperSlide>
      </Swiper>

      <div class="page2-bottom-img bottom-img">
        <img
          loading="lazy"
          src="/images/e5-edit/sencond-bottom-banner.webp"
          v-if="ispc"
          class="img"
        />
        <img
          loading="lazy"
          src="/images/e5-edit/sencond-bottom-banner-mob.webp"
          v-if="!ispc"
          class="img"
        />
        <div
          class="txt animate__animated animate__backInDown"
          v-if="showPage2Bottom"
        >
          <div class="title">28 MINS, FROM 30% TO 80%</div>
          <div class="memo">
            Efficient energy replenishment over just one cup of coffee
          </div>
        </div>
      </div>
    </div>
    <div class="section swiper-page page3 c3" id="page3">
      <div class="page-title" v-if="ispc == false">
        <img
          loading="lazy"
          src="/images/e5-edit/page-titles/page3title.webp"
          class="img animate__animated animate__zoomIn"
          v-if="sectionNum == 3"
        />
      </div>
      <div class="swiper-main" id="page3-swiper-main">
        <div class="top-title-row">
          <div class="top-title" id="page3-top-title">
            <div class="title">BATTERY SAFETY</div>
            <!-- <div class="memo">Our advanced electric safetyand driving systems mean you can concentrate <br /> on
                whatmatters -the road ahead.</div> -->
          </div>
        </div>

        <img
          loading="lazy"
          src="/images/e5-edit/third-banner-bg.webp"
          v-if="ispc"
          class="bg"
        />
        <img
          loading="lazy"
          src="/images/e5-edit/third-banner-bg-mob.webp"
          v-if="!ispc"
          class="bg"
        />
        <!-- <img loading="lazy" src="/images/e5-edit/third-banner-bg2.webp" alt="" class="bg"> -->
        <!-- <img loading="lazy" src="/images/e5-edit/third-left-img.webp" v-if="sectionNum == 3"
            class="banner-img animate__animated animate__fadeInRight animate__delay-2s"> -->
        <!-- :mousewheel="{
              enabled:true,
              noMousewheelClass:'swiper-no-mousewheel'
            }" :effect="'coverflow'" :centeredSlides="true" :slidesPerView="3" :coverflowEffect="{
              rotate: 10,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }" :spaceBetween="-150" :modules="[SwiperMousewheel,SwiperEffectFade ,SwiperPagination]"-->
        <Swiper
          id="page3VS"
          class="main-swiper-container"
          :effect="'fade'"
          :speed="800"
          :fadeEffect="{ crossFade: true }"
          :pagination="{ clickable: true }"
          :loop="true"
          :modules="[SwiperEffectFade, SwiperPagination]"
          @swiper="onPage3VideoSwiper2"
        >
          <!-- :class="page3_vdx2==idx?'choose-main':''" -->
          <swiperSlide
            class="slide"
            v-for="(item, idx) in page3VideoSwiperArr2"
            :key="idx"
          >
            <div class="title-img" v-html="item.title"></div>
            <img
              loading="lazy"
              src="/images/e5-edit/third-right-border-top.webp"
              class="border top"
            />
            <!-- <img loading="lazy" :src="item.title" class="title-img"> -->
            <img loading="lazy" :src="item.pos" class="video" />
            <img
              loading="lazy"
              src="/images/e5-edit/third-right-border-bottom.webp"
              class="border bottom"
            />
            <div class="memo" v-html="item.memo"></div>
          </swiperSlide>
          <!-- <div class="myhandle top swiper-no-mousewheel"></div>
          <div class="myhandle bottom swiper-no-mousewheel"></div> -->
        </Swiper>
      </div>

      <Swiper
        class="push-pull-container"
        :autoplay="{ delay: 3000 }"
        :effect="'fade'"
        :pagination="{ clickable: true }"
        :loop="true"
        :modules="[SwiperEffectFade, SwiperPagination, SwiperAutoplay]"
        @swiper="onPage3Swiper"
      >
        <!-- class="push-pull-item" -->
        <swiperSlide v-for="(item, index) in page3SwiperArr" :key="index">
          <img loading="lazy" :src="item.src" class="img" />
          <div class="title" v-html="item.title"></div>
          <div class="memo" v-html="item.memo"></div>
        </swiperSlide>
      </Swiper>

      <!-- <div class="push-pull-container" style="margin-top: 0;">
          <div class="push-pull-item"
            :class="[index==0?'top':index==1?'bottom':'',page3_idx==item.id?'choose':page3_idx==0?'':'no-choose']"
            v-for="(item, index) in page3SwiperArr" :key="index" @mouseenter="changeSwiperIdx('page3idx',item.id)"
            @mouseleave="changeSwiperIdx('page3idx',0)">
            <img loading="lazy" :src="item.src" class="img">
            <div class="title" v-html="item.title"></div>
            <div class="memo" v-html="item.memo"></div>
          </div>
          <img loading="lazy" src="/images/e5-edit/bg-line.png" class="bg-line">
        </div> -->
      <div class="bottom-img">
        <!-- :pagination="{ clickable: true }" -->
        <!-- :effect="'fade'" :speed="800" :fadeEffect=" {
            crossFade: true,
          }"  :pagination="{ clickable: true }"
            :loop="true" :modules="[SwiperEffectFade ,SwiperPagination]" -->
        <Swiper
          id="page3VS2"
          class="swiper-container"
          :effect="'fade'"
          :speed="800"
          :fadeEffect="{ crossFade: true }"
          :modules="[SwiperEffectFade]"
          @swiper="onPage3VideoSwiper"
        >
          <swiperSlide
            class="slide"
            v-for="(item, idx) in page3VideoSwiperArr"
            :key="idx"
          >
            <video
              :id="'page3Video' + idx"
              class="img"
              loop
              muted
              playsinline="true"
              x5-playsinline="true"
              webkit-playsinline="true"
              x-webkit-airplay="allow"
              x5-video-player-type="h5"
              x5-video-player-fullscreen="true"
              x5-video-ignore-metadata="true"
            >
              <source :src="item.src" v-if="ispc == true" />
              <source :src="item.mobsrc" v-if="ispc == false" />
            </video>
          </swiperSlide>
        </Swiper>
        <!-- pc -->
        <div class="text-container" v-if="ispc">
          <img
            loading="lazy"
            src="/images/e5-edit/toLeft.png"
            class="icon prev"
            v-show="page3_vdx > 0"
            @click="changeSwiperIdx('page3-video', page3_vdx - 1)"
          />
          <Swiper
            class="txt-row"
            :modules="[SwiperPagination]"
            @swiper="onPage3VideoTextSwiper"
            :slidesPerView="5"
            :slidesPerGroup="2"
            :spaceBetween="10"
            :slidesPerGroupSkip="6"
          >
            <swiperSlide
              class="txt-item"
              :class="page3_vdx == idx ? 'choose' : ''"
              v-for="(item, idx) in page3VideoSwiperArr"
              :key="idx"
              @click="changeSwiperIdx('page3-video', idx)"
            >
              <div class="border-img normal" v-if="page3_vdx != idx"></div>
              <img
                src="/images/e5-edit/third-bottom-choose-border.png"
                class="border-img"
                v-if="page3_vdx == idx"
              />
              <div class="title" v-html="item.title"></div>
              <div class="memo" v-html="item.memo"></div>
            </swiperSlide>
          </Swiper>
          <img
            loading="lazy"
            src="/images/e5-edit/toRight.png"
            class="icon next"
            v-show="page3_vdx < page3VideoSwiperArr.length - 1"
            @click="changeSwiperIdx('page3-video', page3_vdx + 1)"
          />
        </div>
        <!-- mob -->
        <div class="text-container" v-if="!ispc">
          <img
            loading="lazy"
            src="/images/e5-edit/toLeft.png"
            class="icon prev"
            @click="changeSwiperIdx('page3-video', page3_vdx - 1)"
          />
          <Swiper
            class="txt-row"
            :effect="'fade'"
            :modules="[SwiperEffectFade]"
            @swiper="onPage3VideoTextSwiper"
          >
            <swiperSlide
              class="txt-item"
              :class="page3_vdx == idx ? 'choose' : ''"
              v-for="(item, idx) in page3VideoSwiperArr"
              :key="idx"
              @click="changeSwiperIdx('page3-video', idx)"
            >
              <img
                loading="lazy"
                src="/images/e5-edit/third-bottom-choose-border.png"
                class="border-img"
              />
              <div class="title" v-html="item.title"></div>
              <div class="memo" v-html="item.memo"></div>
            </swiperSlide>
          </Swiper>
          <img
            loading="lazy"
            src="/images/e5-edit/toRight.png"
            class="icon next"
            @click="changeSwiperIdx('page3-video', page3_vdx + 1)"
          />
        </div>
      </div>
    </div>
    <div class="section swiper-page page4 c4" id="page4">
      <div class="page-title" v-if="ispc == false">
        <img
          loading="lazy"
          src="/images/e5-edit/page-titles/page4title.webp"
          class="img animate__animated animate__zoomIn"
          v-if="sectionNum == 4"
        />
      </div>
      <Swiper
        class="kv-main"
        id="page4-kv-main"
        :effect="'fade'"
        :loop="true"
        :modules="[SwiperEffectFade]"
        @swiper="onPage4KVSwiper"
        :noSwiping="true"
      >
        <swiperSlide
          :class="ispc ? 'swiper-no-swiping' : ''"
          v-for="(item, sdx) in page4SwiperArr2"
          :key="sdx"
        >
          <!--  :class="page4_sdx==sdx?'showimg':'hideimg'" -->
          <img loading="lazy" :src="item.src" class="bg" />
        </swiperSlide>
        <div
          class="icon-main animate__animated animate__backInLeft animate__delay-2s"
          v-if="sectionNum == 4"
        >
          <div class="title">MAIN SCENE MODES</div>
          <div class="txt-main">
            <img
              loading="lazy"
              src="/images/e5-edit/fourth-top-swiper-title-bg.webp"
              class="bg"
            />
            <div class="txt">{{ page4SwiperArr2[page4_sdx].memo }}</div>
          </div>
          <div class="icon-row">
            <div
              class="icon-item"
              v-for="(item, sdx) in page4SwiperArr2"
              :key="sdx"
            >
              <!--  @mouseenter="changeSwiperIdx('page4sdx',sdx)" -->
              <img
                loading="lazy"
                :src="item.icon"
                class="icon"
                v-if="sdx == page4_sdx"
                @mouseenter="changeSwiperIdx('page4sdx', sdx)"
              />
              <img
                loading="lazy"
                :src="item.unicon"
                class="icon"
                v-if="sdx != page4_sdx"
                @mouseenter="changeSwiperIdx('page4sdx', sdx)"
              />
              <div
                class="txt"
                :class="sdx == page4_sdx ? 'choose' : 'no-choose'"
                v-if="item.txt"
              >
                {{ item.txt }}
              </div>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </Swiper>
      <!-- <div class="kv-main" id="page4-kv-main">
          <img loading="lazy" :src="item.src" class="bg" :class="page4_sdx==sdx?'showimg':'hideimg'"
            v-for="(item, sdx) in page4SwiperArr2" :key="sdx">
          <div class="icon-main animate__animated animate__backInLeft animate__delay-2s" v-if="sectionNum==4">
            <div class="title">MAIN SCENE MODES</div>
            <div class="txt-main">
              <img loading="lazy" src="/images/e5-edit/fourth-top-swiper-title-bg.webp" class="bg">
              <div class="txt">{{page4SwiperArr2[page4_sdx].memo}}</div>
            </div>
            <div class="icon-row">
              <div class="icon-item" v-for="(item, sdx) in page4SwiperArr2" :key="sdx">
                <img loading="lazy" :src="item.icon" class="icon" v-if="sdx==page4_sdx" @mouseenter="changeSwiperIdx('page4sdx',sdx)">
                <img loading="lazy" :src="item.unicon" class="icon" v-if="sdx!=page4_sdx"
                  @mouseenter="changeSwiperIdx('page4sdx',sdx)">
                <div class="txt" :class="sdx==page4_sdx?'choose':'no-choose'" v-if="item.txt">{{item.txt}}</div>
                <div class="line"></div>
              </div>
            </div>

          </div>
        </div> -->
      <Swiper
        class="push-pull-container"
        :autoplay="{ delay: 3000 }"
        :effect="'fade'"
        :pagination="{ clickable: true }"
        :loop="true"
        :modules="[SwiperEffectFade, SwiperPagination, SwiperAutoplay]"
        @swiper="onPage4Swiper"
      >
        <!-- class="push-pull-item" -->
        <swiperSlide v-for="(item, index) in page4SwiperArr" :key="index">
          <img loading="lazy" :src="item.src" class="img" />
          <div class="title" v-html="item.title"></div>
          <div class="memo" v-html="item.memo"></div>
        </swiperSlide>
      </Swiper>

      <div class="bottom-img">
        <!-- <img loading="lazy" src="/images/e5-edit/fourth-bottom-kv.webp" v-if="ispc" class="img"> -->
        <video
          src="/videos/e5-edit/fourth-bottom-kv.mp4"
          id="fourthBottomKv"
          v-if="ispc"
          class="img"
          loop
          muted
          playsinline="true"
          x5-playsinline="true"
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          x5-video-ignore-metadata="true"
        ></video>
        <img
          loading="lazy"
          src="/videos/e5-edit/fourth-bottom-kv-mob.gif"
          v-if="!ispc"
          class="img"
        />
        <!-- <img loading="lazy" src="/images/e5-edit/fourth-bottom-title.webp" class="title animate__animated animate__fadeInUp"
            v-if="showPage4Bottom"> -->
        <!-- <div class="title animate__animated animate__fadeInUp" v-if="showPage4Bottom">
            <div class="txt1">ULTIMATE SILENCE</div>
            <div class="txt2">120 kM/h WIND NOISE：62.9 dB</div>
          </div> -->
      </div>
    </div>
    <div class="page-title" v-if="ispc == false">
      <img
        loading="lazy"
        src="/images/e5-edit/page-titles/page5title.webp"
        class="img animate__animated animate__zoomIn"
        v-if="sectionNum >= 5"
      />
    </div>
    <div class="section moreConfig-page swiper-page page5" id="page5">
      <!-- <Swiper class="swiper-container" v-if="!ispc" :modules="[SwiperNavigation, SwiperPagination]" :navigation="true"
          @swiper="onPage5Swiper" spaceBetween="30">
          <swiperSlide class="slide" v-for="(item, idx) in page5SwiperArr.list" :key="idx">
            <img loading="lazy" :src="item.src" class="img" />
          </swiperSlide>
          <div class="black-mask black-left"></div>
          <div class="black-mask black-right"></div>
        </Swiper>
        <div class="swiper-pagination" v-if="!ispc">
          <div class="swiper-pagination-progressbar-fill"
            :style="'transform: translate3d(0px, 0px, 0px) scaleX(' + (1 / page5SwiperArr.list.length) * (page5_idx + 1) + ') scaleY(1); transition-duration: 300ms;'">
          </div>
          <div class="swiper-pagination-txt" :class="page5_idx == index ? 'show' : 'hide'"
            v-for="(item, index) in page5SwiperArr.list" :key="index">{{ item.title }}</div>
          <div class="num-txt">{{ page5_idx + 1 }}<span class="line">/</span><span class="all">{{
              page5SwiperArr.list.length
              }}</span></div>
        </div> -->
      <div class="config-img-view">
        <div class="top-img">
          <div class="top-titles">
            <div class="block"></div>
            <div
              class="txt"
              v-html="page5SwiperArr.list[page5_idx].title"
            ></div>
          </div>
          <!-- :class="page5_idx == index && page5_idx > 0 ? 'img1' : 'img0'" -->
          <img
            loading="lazy"
            :src="item.src"
            class="img img0"
            :class="page5_idx == index ? 'img1' : 'img0'"
            v-for="(item, index) in page5SwiperArr.list"
            :key="index"
          />
          <!-- <img loading="lazy" :src="item.src" class="img a0" :class="page5_idx == 0 && page5_i1_sdx==index ? 'img1' : 'img0'"
              v-for="(item, index) in page5SwiperArr.list[0].arr" :key="index"> -->
          <!-- <Swiper class="img a0" :class="page5_idx == 0 ? 'img1' : 'img0'" :effect="'fade'" :loop="true"
                            :modules="[SwiperEffectFade]" @swiper="onPage5KVSwiper" :noSwiping="true" :speed="800">
                            <swiperSlide :class="ispc ? 'swiper-no-swiping' : ''"
                                v-for="(item, index) in page5SwiperArr.list[0].arr" :key="index">
                                <img loading="lazy" :src="item.src">
                            </swiperSlide>
                        </Swiper>
                        <Swiper class="color-row" v-show="page5_idx == 0" @swiper="onPage5ColorSwiper"
                            :slidesPerView="5" :centeredSlides="true" :centeredSlidesBounds="true">
                            <swiperSlide class="color-item" v-for="(item, idx) in page5SwiperArr.list[0].arr" :key="idx"
                                @click="changeSwiperIdx('page5-i1', idx)">
                                <div class="row-main">
                                    <img loading="lazy" :src="item.icon" class="icon"
                                        :class="page5_i1_sdx == idx ? 'choose' : 'normal'">
                                    <img loading="lazy" src="/images/e5-edit/fifth-line.webp" class="line">
                                </div>
                                <div class="txt">{{ item.txt }}</div>
                            </swiperSlide>
                        </Swiper> -->
        </div>
        <div class="top-row">
          <div
            class="img"
            @mouseover="changeSwiperIdx('page5', index)"
            :class="page5_idx == index ? 'show' : 'hide'"
            v-for="(item, index) in page5SwiperArr.list"
            :key="index"
          >
            <img loading="lazy" :src="item.src" />
            <div class="mask"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="section moreConfig-page swiper-page page5" id="page6">
      <iframe
        ref="web360_iframe"
        id="wrap_360"
        scrolling="no"
        frameborder="0"
        :src="dir + 'e5360/index.html'"
        class="iframe"
        v-once
      ></iframe>
    </div>
    <div class="section moreConfig-page swiper-page page6" id="page7">
      <div class="page5-configTable">
        <div class="page5-configTable-title">
          <div class="txt">SPECIFICATION</div>
          <img
            loading="lazy"
            src="/images/e5/configs/config_title_border.webp"
            v-if="ispc == true"
            class="border"
          />
          <img
            loading="lazy"
            src="/images/e5/configs/config_title_border-mob.webp"
            v-if="ispc == false"
            class="border"
          />
        </div>
        <div class="page5-configTable-form">
          <div
            class="table-item"
            v-for="(item, index) in page5_configForm"
            :key="index"
          >
            <div class="table-item-A" v-if="item.isOneForm == true">
              <div class="item-title">
                <!-- <div class="txt">{{ item.table_title }}</div>
                  <img loading="lazy" src="/images/e5/configs/table_title_border.webp" class="border"> -->
                <img loading="lazy" :src="item.titlesrc" class="img" />
              </div>
              <div class="item-row" v-for="(rtem, rdx) in item.form" :key="rdx">
                <img
                  loading="lazy"
                  src="/images/e5-edit/fifth-form-row-bg.webp"
                  class="bg"
                />
                <div class="title" v-html="rtem.title"></div>
                <span class="icon">:</span>
                <div class="value" v-html="rtem.value"></div>
              </div>
            </div>
            <div class="table-item-B" v-if="item.isOneForm != true">
              <div
                class="all-table-item"
                v-for="(allitem, allidx) in item.all_form"
                :key="allidx"
              >
                <div class="item-title">
                  <!-- <div class="txt">{{ allitem.table_title }}</div>
                    <img loading="lazy" src="/images/e5/configs/table_title_border.webp" class="border"> -->
                  <img loading="lazy" :src="allitem.titlesrc" class="img" />
                </div>
                <div
                  class="item-row"
                  v-for="(rtem, rdx) in allitem.form"
                  :key="rdx"
                >
                  <img
                    loading="lazy"
                    src="/images/e5-edit/fifth-form-row-bg.webp"
                    class="bg"
                  />
                  <div class="title" v-html="rtem.title"></div>
                  <span class="icon">:</span>
                  <div class="value" v-html="rtem.value"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="/images/e5-edit/fifth-hint-row.webp"
        v-if="ispc"
        class="hint-img"
        @click="downLoad"
      />
      <div class="hint-img" v-if="ispc == false" @click="downLoad">
        <img
          loading="lazy"
          src="/images/e5-edit/page5_mobhint.webp"
          class="img"
        />
        <div class="txt">
          The pictures and parameters in this website are for reference only,
          and the relevant configuration of the vehicle model will be adjusted
          differently due to different national markets. The actual release of
          the country shall prevail.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, reactive } from "vue";
import type { Ref } from "vue";
const dir = useRuntimeConfig().public.staticURL + '/';
// if (useRuntimeConfig().public.baseURL.indexOf('www.omodaglobal.com') != -1) {
//     dir = '/e5/';
// } else {
//     dir = '/en/e5/';
// }
const { isMobile } = useDeviceType();
const ispc = computed(() => {
  return !isMobile.value;
});
const sectionNum: Ref<number> = ref(0);
const startNumAni = ref(false);
const hoverFixedTag = ref(false);
const toplist = [
  { txt: "RANGE&CHARGING", url: "#page2", id: 2 },
  // { txt: 'SAFETY&SUSTAINABILITY', url: '#page3', id: 3 },
  { txt: "SAFETY", url: "#page3", id: 3 },
  { txt: "TECHNOLOGY", url: "#page4", id: 4 },
  { txt: "FUTURISTIC STYLING", url: "#page5", id: 5 },
  { txt: "THE VR PROGRAM", url: "#page6", id: 6 },
  { txt: "SPECIFICATION", url: "#page7", id: 7 },
];
function changeFixedTag(status) {
  hoverFixedTag.value = status;
}
// 视频
const banner1Play: Ref<Boolean> = ref(false);
function playVideo() {
  var Video: any = document.getElementById("bannerVideo");
  Video.play();
  banner1Play.value = false;
}
const isShowToptag: Boolean = ref(false);
const showToptag: Boolean = ref(false);
const closeTopbarTime: Number = ref(6000);
function changeToptag(status) {
  isShowToptag.value = true;
  showToptag.value = true;
  setTimeout(() => {
    showToptag.value = false;
    isShowToptag.value = false;
  }, closeTopbarTime.value);
}
const showPage2Bottom: Boolean = ref(false);
const showPage4Bottom: Boolean = ref(false);
const zoomPage3Top: Boolean = ref(false);
function getScrollSection() {
  var sections = document.querySelectorAll(".section");
  // var page3SM = document.getElementById('page3-swiper-main');
  // var page4KM = document.getElementById('page4-kv-main');
  var stAll = document.body.scrollTop || document.documentElement.scrollTop;

  for (let i = 0; i < sections.length; i++) {
    const element: any = sections[i];

    if (i < sections.length - 1) {
      var pingH;
      const element2: any = sections[i + 1];
      if (i == 0 || i == sections.length - 4 || i == sections.length - 2) {
        pingH = window.innerHeight;
      } else {
        pingH = window.innerHeight + 60;
      }
      let num = Number(i) + 2;
      if (
        stAll > element.offsetTop - pingH &&
        stAll <= element2.offsetTop - pingH
      ) {
        if (num != sectionNum.value) {
          // isShowToptag.value = false;
          if (!isShowToptag.value) {
            changeToptag();
          }
        }
        let aa = element2.offsetTop - pingH - 600;
        if (stAll > aa) {
          if (i == 0) {
            showPage2Bottom.value = true;
          } else {
            showPage4Bottom.value = true;
          }
        }
        // let page3MainNum = (sections[1].offsetTop - pingH) + page3SM.getBoundingClientRect().height;
        // let page4MainNum = (sections[2].offsetTop - pingH) + page4KM.getBoundingClientRect().height;
        // if (num == 3 && stAll > page3MainNum + page3SM.getBoundingClientRect().height|| num == 4 && stAll <= page4MainNum + 260) {
        //   zoomPage3Top.value = true;
        // } else {
        //   zoomPage3Top.value = false;
        // }
        sectionNum.value = num;
        break;
      }
    } else if (i == sections.length - 1) {
      pingH = window.innerHeight;
      const element2: any = sections[i - 1];
      let num = Number(i) + 2;
      // console.log('num', num)
      if (
        stAll >= element.offsetTop - pingH &&
        stAll >= element2.offsetTop - pingH
      ) {
        if (num != sectionNum.value) {
          // isShowToptag.value = false;
          if (!isShowToptag.value) {
            changeToptag();
          }
        }
        sectionNum.value = num;
        break;
      }
    }
  }
}
const page3ScaleNum: number = ref(1);
onMounted(() => {
  var bVideo0: any = document.getElementById("page3Video0");
  if (ispc.value == true) {
    nextTick(() => {
      var fourthBottomKv: any = document.getElementById("fourthBottomKv");
      fourthBottomKv.play();
      bVideo0.play();
      var swiper: any = document.getElementById("page3VS");
      var slides: any = swiper.getElementsByTagName("video");
      let video = slides[1];
      if (video && video.paused) {
        video.play();
      }
    });
  }
  // alert(ispc.value)
  if (ispc.value == false) {
    // wx_size_match();
    document.addEventListener(
      "WeixinTSBridgeReady",
      function (params) {
        // page2video[0].play();
        bVideo0.play();
      },
      false
    );
    document.addEventListener("touchstart", function (params) {
      // page2video[0].play();
      bVideo0.play();
    });
    firstPage_arr = [
      // { label: "CO₂ emissions", start_num: 99, num: 0, txt: "g/kM*" },
      {
        label: "CHARGING EFFICIENCY",
        btxt: "SOC30%~80%",
        num: 28,
        txt: "<span style='transform:scale(0.8);transform-origin: 50% 50%;position:relative;left:-10%;'>mins</span>",
      },
      {
        label: "WLTP-est. range",
        num: 430,
        txt: "kM",
      },
      {
        label: "ENERGY CONSUMPTION",
        btxt: "",
        start_num: 99,
        num: 15.5,
        txt: "kWh/100kM",
        default: 1,
      },
    ];
    page2SwiperArr = [
      {
        src: dir + "images/e5/page2_s1i1_mob.webp",
        title: "WIND RESISTANCE COEFFICIENT : 0.281",
        memo: `The smoother a car 'drags' through the air, the less energy it needs to move, and that means better fuel efficiency or range`,
      },
      {
        src: dir + "images/e5/page2_s1i2_mob.webp",
        title: "EFFICIENCY IN ELECTRIC DRIVE：94%",
        memo: "Thanks to its powerful electric motor and controller, the OMODA E5 is incredibly efficient. ",
      },
    ];
    page3SwiperArr = [
      {
        src: dir + "images/e5/page3_s1i1_mob.webp",
        title: "78% HIGH-STRENGTH STEEL BODY",
        memo: "Cage energy-absorbing body technology.",
      },
      {
        src: dir + "images/e5/page3_s1i2_mob.webp",
        title: "7 SAFETY AIRBAGS",
        memo: "Comprehensive security assurance.",
      },
      // { src: dir+'images/e5/page4_banner.webp', title: 'W-HUD', memo: 'No need to lower your head, you can see all the information at a glance' },
    ];
    page4SwiperArr = [
      {
        src: dir + "images/e5/page4_s1i1_mob.webp",
        title: '12.3" large curved duplex screen',
        memo: "The oversized screen provides a remarkably view, coupled with intelligent voice capabilities, bringing you unlimited driving pleasure.",
      },
      {
        src: dir + "images/e5/page4_s1i2_mob.webp",
        title: "50W WIRELESS FAST CHARGING",
        memo: "Industry-leading wireless charging capability.",
      },
      {
        src: dir + "images/e5/page4_s1i3_mob.webp",
        title: "W-HUD ALL-ROAD HEAD-UP DISPLAY",
        memo: "Suspended display, more technological advanced and visually appealing, with a high-end focus, improving driving safety.",
      },
    ];
    page4SwiperArr2 = [
      {
        id: 4,
        src: dir + "images/e5-edit/fouth-top-swiper-img3-mob.webp",
        icon: dir + "images/e5-edit/fouth-top-swiper-icon3.webp",
        unicon: dir + "images/e5-edit/fouth-top-swiper-icon3-b.webp",
        memo: `An interior temperature of 22°C provides the most comfortable ride for your pet.`,
      },
      {
        id: 2,
        src: dir + "images/e5-edit/fouth-top-swiper-img1-mob.webp",
        icon: dir + "images/e5-edit/fouth-top-swiper-icon1.webp",
        unicon: dir + "images/e5-edit/fouth-top-swiper-icon1-b.webp",
        memo: `The separate large space offers a luxurious tent-like ambiance, providing a delightful experience reminiscent of a camping night.`,
      },
    ];
    // page5SwiperArr.list = [
    //   { src: page5_i1_list.arr[page5_i1_sdx.value].src, hasSwiper: true, title: 'Light and Shadow Cutting Streamlined Body', arr: page5_i1_list.arr },
    //   { src: dir + 'images/e5/page5_s1i2_mob.webp', title: 'Star Shield color stitching interior', },
    //   { src: dir + 'images/e5/page5_s1i1_mob.webp', title: 'X-SHAPED FRONT', },
    //   { src: dir + 'images/e5/page5_s1i4_mob.webp', title: 'LED Rear Lamp', },
    // ];
  }

  setTimeout(() => {
    sectionNum.value = 1;
    setTimeout(() => {
      startNumAni.value = true;
    }, 1000);
    nextTick(() => {
      changeSwiperIdx("page3", 1);
      getScrollSection();
    });
  }, 360);
  window.addEventListener("scroll", getScrollSection);
});
// 第一屏 KV
var firstPage_arr = [
  {
    label: "CHARGING EFFICIENCY",
    btxt: "SOC30%~80%&nbsp;",
    num: 28,
    start_num: 499,
    txt: "<span style='transform:scale(0.8);position:relative;left:-10%;'>mins</span>",
  },
  {
    label: "WLTP-est. range",
    num: 430,
    txt: "kM",
  },
  // { label: " CO₂ emissions", start_num: 99, num: 0, txt: "g/kM*" },
  {
    label: "ENERGY CONSUMPTION",
    btxt: "",
    start_num: 99,
    num: 15.5,
    txt: "kWh/100kM",
    default: 1,
  },
];

// swiper
// 第二屏
var page2SwiperArr = [
  {
    id: 1,
    src: dir + "images/e5-edit/second-img1.webp",
    title: "WIND RESISTANCE COEFFICIENT : 0.281",
    memo: `The smoother a car 'drags' through the air, the less energy it needs to move, and that means better fuel eficiency or range.`,
  },
  {
    id: 2,
    src: dir + "images/e5-edit/second-img2.webp",
    title: "EFFICIENCY IN ELECTRIC DRIVE ：94%",
    memo: "Thanks to its powerful electric motor and controller, the OMODA E5 is incredibly efficient.",
  },
];
var page2_idx: Ref<number> = ref(0);
let page2Swiper: any = null;
var onPage2Swiper = (swiper) => {
  // // console.log(swiper);
  page2Swiper = swiper;

  swiper.on("slideChange", function () {
    // // // console.log(this);
    page2_idx.value = this.realIndex;
  });
};
// 第三屏
var page3SwiperArr = [
  {
    id: 1,
    src: dir + "images/e5-edit/third-img1.webp",
    title: "78% HIGH-STRENGTH STEEL BODY",
    memo: `Cage energy-absorbing body technology.`,
  },
  {
    id: 2,
    src: dir + "images/e5-edit/third-img2.webp",
    title: "7 SAFETY AIRBAGS",
    memo: "Comprehensive security assurance.",
  },
];
var page3_idx: Ref<number> = ref(0);
var page3_idx: Ref<number> = ref(0);
let page3Swiper: any = null;
var onPage3Swiper = (swiper) => {
  // // console.log(swiper);
  page3Swiper = swiper;

  swiper.on("slideChange", function () {
    // // // console.log(this);
    page3_idx.value = this.realIndex;
  });
};
var page3VideoSwiperArr = [
  {
    mobsrc: dir + "videos/e5-edit/ADAS/mob/ACC.mp4",
    src: dir + "videos/e5-edit/ADAS/ACC.mp4",
    title: "ACC",
    memo: `Automatically adjusts the vehicle's speed based on the speed and distance of the preceding vehicles, ensuring a safe distance is maintained, reducing driver stress and enhancing driving comfort.`,
  },
  {
    mobsrc: dir + "videos/e5-edit/ADAS/mob/BSD.mp4",
    src: dir + "videos/e5-edit/ADAS/BSD.mp4",
    title: "BSD",
    memo: `It is used to monitor vehicles in the rear area of the left and right sides of the vehicle reminding the driver to pay attention to traffic safety and lane change safety.`,
  },
  {
    mobsrc: dir + "videos/e5-edit/ADAS/mob/DMS.mp4",
    src: dir + "videos/e5-edit/ADAS/DMS.mp4",
    title: "DMS",
    memo: `It assists the driver in staying alert while driving, monitoring the driver's fatigue levels, and issuing behavioral danger warnings when necessary.`,
  },
  {
    mobsrc: dir + "videos/e5-edit/ADAS/mob/ELK.mp4",
    src: dir + "videos/e5-edit/ADAS/ELK.mp4",
    title: "ELK",
    memo: `When the vehicle veers from the road edge, posing a collision risk with either an "oncoming vehicle" or a "following vehicle," it controls lateral movement to maintain the original lane, thereby mitigating or avoiding collision damage.`,
  },
  {
    mobsrc: dir + "videos/e5-edit/ADAS/mob/FCW&AEB.mp4",
    src: dir + "videos/e5-edit/ADAS/FCW&AEB.mp4",
    title: "FCW&AEB",
    memo: `When the vehicle is on the brink of colliding with a vehicle or pedestrian ahead, an alarm is triggered to alert the driver. If the driver cannot react swiftly, the vehicle will autonomously brake to minimize the impact of the collision and mitigate resulting losses.`,
  },
  {
    mobsrc: dir + "videos/e5-edit/ADAS/mob/LCA.mp4",
    src: dir + "videos/e5-edit/ADAS/LCA.mp4",
    title: "LCA",
    memo: `Real-time monitoring of adjacent lanes during lane changes and warning of impending collision hazards.`,
  },
  {
    mobsrc: dir + "videos/e5-edit/ADAS/mob/LDP.mp4",
    src: dir + "videos/e5-edit/ADAS/LDP.mp4",
    title: "LDP",
    memo: `The front-view multi-function camera continuously monitors the relative position of the vehicle and the lane lines in real-time, ensuring the vehicle stays within its original lane when it's at risk of deviation.`,
  },
  {
    mobsrc: dir + "videos/e5-edit/ADAS/mob/RCTA.mp4",
    src: dir + "videos/e5-edit/ADAS/RCTA.mp4",
    title: "RCTA",
    memo: `Other road users approaching laterally in the rear of the vehicle are monitored in real time while the vehicle is reversing. If there's a potential collision hazard, warning messages are promptly issued.`,
  },
  {
    mobsrc: dir + "videos/e5-edit/ADAS/mob/TJA.mp4",
    src: dir + "videos/e5-edit/ADAS/TJA.mp4",
    title: "TJA",
    memo: `It enables the vehicle to maintain the speed set by the driver, while also capable of following other vehicles at the set safe distance.`,
  },
];
var page3_vdx: Ref<number> = ref(0);
let page3VideoSwiper: any = null;
let page3VideoTextSwiper: any = null;
var onPage3VideoTextSwiper = (swiper) => {
  // // console.log(swiper);
  page3VideoTextSwiper = swiper;
  swiper.on("slideChange", function () {
    if (ispc.value == false) {
      page3_vdx.value = this.realIndex;
      page3VideoSwiper.slideTo(page3_vdx.value, 500, false);
    }
  });
};
/** swiper加载完毕 */
var onPage3VideoSwiper = (swiper) => {
  // // console.log(swiper);
  page3VideoSwiper = swiper;
  swiper.on("slideChange", function () {
    page3_vdx.value = this.realIndex;
    page3VideoTextSwiper.slideTo(page3_vdx.value, 500, false);
    for (const key in this.slides) {
      let video = this.slides[key].getElementsByTagName("video")[0];

      if (key == page3_vdx.value) {
        if (video && video.paused) {
          video.play();
        }
      } else {
        if (video && !video.paused) {
          video.pause();
        }
      }
    }
  });
};

var page3VideoSwiperArr2 = [
  {
    pos: dir + "videos/e5-edit/CHARGING/PUNCTURE TEST.gif",
    zdx: 3,
    title: "PUNCTURE TEST",
    memo: `Following the rigorous battery puncture test, it ensures your driving safety. `,
  },
  {
    pos: dir + "videos/e5-edit/CHARGING/BOTTOM SCRAPING TEST.gif",
    zdx: 1,
    title: "BOTTOM SCRAPING TEST",
    memo: `The structure of the OMODA E5 remains secure and stable even after scraping the lowest part of the body 30mm above the obstacle. `,
  },
  {
    pos: dir + "videos/e5-edit/CHARGING/WATER WADING  TEST.gif",
    zdx: 2,
    title: "WATER WADING TEST",
    memo: `With the front grille nearly completely submerged, the OMODA E5 continues to drive steadily through the pool.`,
  },
];
var page3_vdx2: Ref<number> = ref(0);
let page3VideoSwiper2: any = null;
/** swiper加载完毕 */
var onPage3VideoSwiper2 = (swiper) => {
  page3VideoSwiper2 = swiper;
  swiper.on("slideChange", function () {
    page3_vdx2.value = this.realIndex;
    setTimeout(() => {
      for (const key in this.slides) {
        let video = this.slides[key].getElementsByTagName("video")[0];
        if (this.slides[key].className.indexOf("swiper-slide-active") != -1) {
          if (video && video.paused) {
            video.play();
          }
        } else {
          if (video && !video.paused) {
            video.pause();
          }
        }
      }
    }, 100);
  });
};
// 第四屏
var page4SwiperArr = [
  {
    id: 1,
    src: dir + "images/e5-edit/fourth-img1.webp",
    title: '12.3"LARGE CURVED DUPLEX SCREEN',
    memo: `The oversized screen provides a remarkably view, coupled with intelligent voice capabilities, bringing you unlimited driving pleasure.`,
  },
  {
    id: 2,
    src: dir + "images/e5-edit/fourth-img2.webp",
    title: "50W WIRELESS FAST CHARGING",
    memo: "Industry-leading wireless charging capability.",
  },
  {
    id: 3,
    src: dir + "images/e5-edit/fourth-img3.webp",
    title: "W-HUD ALL-ROAD HEAD-UP DISPLAY",
    memo: "Suspended display, more technological advanced and visually appealing, with a high-end focus, improving driving safety.",
  },
];
var page4_idx: Ref<number> = ref(0);
var page4_idx: Ref<number> = ref(0);
let page4Swiper: any = null;
var onPage4Swiper = (swiper) => {
  // // console.log(swiper);
  page4Swiper = swiper;

  swiper.on("slideChange", function () {
    // // // console.log(this);
    page4_idx.value = this.realIndex;
  });
};
var page4SwiperArr2 = [
  {
    id: 4,
    src: dir + "images/e5-edit/fouth-top-swiper-img3.webp",
    icon: dir + "images/e5-edit/fouth-top-swiper-icon3.webp",
    unicon: dir + "images/e5-edit/fouth-top-swiper-icon3-b.webp",
    memo: `An interior temperature of 22°C provides the most comfortable ride for your pet.`,
  },
  {
    id: 2,
    src: dir + "images/e5-edit/fouth-top-swiper-img1.webp",
    icon: dir + "images/e5-edit/fouth-top-swiper-icon1.webp",
    unicon: dir + "images/e5-edit/fouth-top-swiper-icon1-b.webp",
    memo: `The separate large space offers a luxurious tent-like ambiance, providing a delightful experience reminiscent of a camping night.`,
  },
];
var page4_sdx: Ref<number> = ref(0);
let page4KVSwiper: any = null;
var onPage4KVSwiper = (swiper) => {
  // // console.log(swiper);
  page4KVSwiper = swiper;
  swiper.on("slideChange", function () {
    // // // console.log(this);
    page4_sdx.value = this.realIndex;
  });
};
// 第五屏
var page5_i1_sdx: any = ref(0);
var page5_i1_list = reactive({
  arr: [
    {
      id: 1,
      src: dir + "images/e5-edit/fifth-cars/Titan Green.webp",
      icon: dir + "images/e5-edit/fifth-colors/Titan Green.webp",
      txt: "Titan Green",
    },
    {
      id: 2,
      src: dir + "images/e5-edit/fifth-cars/Space Black.webp",
      icon: dir + "images/e5-edit/fifth-colors/Space Black.webp",
      txt: "Space Black",
    },
    {
      id: 3,
      src: dir + "images/e5-edit/fifth-cars/Martian Red.webp",
      icon: dir + "images/e5-edit/fifth-colors/Martian Red.webp",
      txt: "Martian Red",
    },
    {
      id: 4,
      src: dir + "images/e5-edit/fifth-cars/Midnight Blue.webp",
      icon: dir + "images/e5-edit/fifth-colors/Midnight Blue.webp",
      txt: "Midnight Blue",
    },
    {
      id: 5,
      src: dir + "images/e5-edit/fifth-cars/Mercurial Grey.webp",
      icon: dir + "images/e5-edit/fifth-colors/Mercurial Grey.webp",
      txt: "Mercurial Grey",
    },
    {
      id: 6,
      src: dir + "images/e5-edit/fifth-cars/Lunar White.webp",
      icon: dir + "images/e5-edit/fifth-colors/Lunar White.webp",
      txt: "Lunar White",
    },
    {
      id: 7,
      src: dir + "images/e5-edit/fifth-cars/Saturn Silver.webp",
      icon: dir + "images/e5-edit/fifth-colors/Saturn Silver.webp",
      txt: "Saturn Silver",
    },
    {
      id: 8,
      src:
        dir +
        "images/e5-edit/fifth-cars/Titan Green with Space Black roof.webp",
      icon:
        dir +
        "images/e5-edit/fifth-colors/Titan Green with Space Black roof.webp",
      txt: "Titan Green with Space Black roof",
    },
    {
      id: 9,
      src:
        dir +
        "images/e5-edit/fifth-cars/Saturn Silver with Space Black roof.webp",
      icon:
        dir +
        "images/e5-edit/fifth-colors/Saturn Silver with Space Black roof.webp",
      txt: "Saturn Silver with Space Black roof",
    },
    {
      id: 10,
      src:
        dir +
        "images/e5-edit/fifth-cars/Lunar White with Space Black roof.webp",
      icon:
        dir +
        "images/e5-edit/fifth-colors/Lunar White with Space Black roof.webp",
      txt: "Lunar White with Space Black roof",
    },
  ],
});

var page5SwiperArr = reactive({
  list: [
    {
      src: page5_i1_list.arr[page5_i1_sdx.value].src,
      hasSwiper: true,
      title: "Light and Shadow Cutting Streamlined Body",
      arr: page5_i1_list.arr,
    },
    {
      src: dir + "images/e5/page5_s1i2.webp",
      hasSwiper: false,
      title: "Star Shield color stitching interior",
    },
    {
      src: dir + "images/e5/page5_s1i1.webp",
      hasSwiper: false,
      title: "X-SHAPED FRONT",
    },
    {
      src: dir + "images/e5/page5_s1i4.webp",
      hasSwiper: false,
      title: "LED Rear Lamp",
    },
  ],
});
var page5_idx: Ref<number> = ref(0);
let page5Swiper: any = null;
let page5ColorSwiper: any = null;
/** swiper加载完毕 */
var onPage5Swiper = (swiper) => {
  // // console.log(swiper);
  page5Swiper = swiper;

  swiper.on("slideChange", function () {
    // // // console.log(this);
    page5_idx.value = this.realIndex;
  });
};
var onPage5ColorSwiper = (swiper) => {
  // // console.log(swiper);
  page5ColorSwiper = swiper;

  swiper.on("slideChange", function () {
    // // // console.log(this);
    // page5_i1_sdx.value = this.realIndex;
    // page5ColorSwiper.slideTo(page5_i1_sdx.value, 500, false);
    // page5SwiperArr.list[0].src = page5_i1_list.arr[page5_i1_sdx.value].src;
  });
};
let page5KVSwiper: any = null;
var onPage5KVSwiper = (swiper) => {
  // // console.log(swiper);
  page5KVSwiper = swiper;
  swiper.on("slideChange", function () {
    // // // console.log(this);
    page5_i1_sdx.value = this.realIndex;
    page5ColorSwiper.slideTo(page5_i1_sdx.value, 500, false);
  });
};
// 第五屏配置表数据
var page5_configForm = [
  {
    table_title: "Basic parameter",
    isOneForm: true,
    titlesrc: dir + "images/e5-edit/fifth-form-title1.webp",
    form: [
      { title: "Acceleration (0-100km) (s)", bgType: "long", value: "7.2" },
      { title: "Max power (KW)", bgType: "short", value: "150/99" },
      { title: "Electric range (WLTP) (KM)", bgType: "long", value: "430" },
      { title: "Max torque (N*M) ", bgType: "short", value: "340" },
    ],
  },
  {
    table_title: "Full specifications",
    isOneForm: true,
    titlesrc: dir + "images/e5-edit/fifth-form-title2.webp",
    form: [
      {
        title: "Length × Width × Height (mm)",
        bgType: "long",
        value: "4424 × 1830 × 1588",
      },
      { title: "Weight (kg)", bgType: "short", value: "1785" },
      { title: "Seats", bgType: "long", value: "5" },
      {
        title: "Boot capacity (Seats folded/up)",
        bgType: "short",
        value: "1075/380L",
      },
    ],
  },
  {
    table_title: "Battery",
    isOneForm: true,
    titlesrc: dir + "images/e5-edit/fifth-form-title3.webp",
    form: [
      {
        title: "Battery type ",
        bgType: "long",
        value: "Lithium iron phospphate battery",
      },
      { title: "Battery capacity (kWh)", bgType: "short", value: "61.0566" },
      { title: "Battery voltage", bgType: "long", value: "350V" },
      { title: "30%~80% Charging time (11kW)", bgType: "short", value: "3~4h" },
      {
        title: "30%~80% Charging time (80kW)",
        bgType: "long",
        value: "28mins",
      },
    ],
  },
  {
    isOneForm: false,
    all_form: [
      {
        table_title: "Chassis",
        titlesrc: dir + "images/e5-edit/fifth-form-title4.webp",
        form: [
          {
            title: "Front/Rear suspension",
            bgType: "long",
            value: "Front MacPherson/Rear multi-link ",
          },
        ],
      },
      {
        table_title: "Brakes ",
        titlesrc: dir + "images/e5-edit/fifth-form-title5.webp",
        form: [
          { title: "Front brakes", bgType: "long", value: "Ventilated disc" },
          { title: "Rear brakes", bgType: "long", value: "Disc brake" },
        ],
      },
    ],
  },
  {
    table_title: "Aerodynamics",
    titlesrc: dir + "images/e5-edit/fifth-form-title6.webp",
    isOneForm: true,
    form: [
      { title: "Drag coefficient", bgType: "long", value: "0.281" },
      { title: "Electric Consumption (kWh)", bgType: "long", value: "15.5" },
    ],
  },
];
function changeSwiperIdx(page, idx) {
  switch (page) {
    case "page2":
      page2_idx.value = idx;
      break;
    case "page3idx":
      page3_idx.value = idx;
      break;
    case "page3":
      page3VideoSwiper2.slideTo(idx);
      page3_vdx2.value = idx;
      break;
    case "page3-video":
      let num = idx;
      if (idx < 0) {
        num = page3VideoSwiperArr.length - 1;
      } else if (idx >= page3VideoSwiperArr.length) {
        num = 0;
      }
      // // console.log('page3-video', num)
      page3VideoSwiper.slideTo(num, 500, false);
      page3_vdx.value = num;
      break;
    case "page4":
      page4_idx.value = idx;
      break;
    case "page4sdx":
      page4_sdx.value = idx;
      page4KVSwiper.slideToLoop(idx, 500, false);
      break;
    case "page5":
      page5_idx.value = idx;
      // page5_i1_sdx.value = 0;
      // page5ColorSwiper.slideTo(0, 500, false);
      page5KVSwiper?.slideTo(idx, 100, false);
      break;
    case "page5-i1":
      // page5_i1_sdx.value = idx;
      // page5ColorSwiper.slideToLoop(idx-1, 500, false);
      page5KVSwiper?.slideTo(idx, 100, false);
      break;
  }
}
// 是否展示toast
var showToast = ref(false);
// 仅支持视频下载和图片下载
function downLoad() {
  let url = dir + "images/e5/configs/car_config.jpg";
  // let fileName = url.slice(url.lastIndexOf("/") + 1); //下载的文件名换成自己的
  let fileName = "OMODA E5"; //dayjs
  showToast.value = true;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob"; // 返回类型blob
  xhr.onprogress = function (event) {
    if (event.lengthComputable) {
      if (event.loaded) {
        // 下载太快可能会看不到提示所以toast最少出现900毫秒
        setTimeout(() => {
          showToast.value = false;
        }, 900);
      }
    }
  };
  xhr.onload = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let blob = xhr.response;
      let downLoadUrl = window.URL.createObjectURL(
        new Blob([blob], {
          type: "image/jpeg",
        })
      );
      let a = document.createElement("a");
      a.download = fileName;
      a.href = downLoadUrl;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  };
  xhr.send();
}
</script>

<style scoped>
.border{
  border-width: 0;
}
.hide {
  display: none !important;
}
.body-main {
  width: 100%;
  height: auto;
  background-color: #213436;
  transition: 0.8s;
  overflow-x: hidden;
}

.body-main * {
  font-family: "SourceHanSansSC-Regular";
}

.body-main video {
  pointer-events: none;
}

.body-main .section {
  width: 100%;
  height: 100%;
  /* transition: 0.6s; */
  display: block;
}

.c2 {
  background-color: #000000;
}

.c3 {
  background-color: #ffffff;
}

.c4 {
  background-color: #000000;
}

.c5 {
  /* background-color: #DEFEFB; */
}

.c6 {
  /* background-color: #DEFEFB; */
}

.header__logo {
  width: 135px;
  height: 18px;
  margin: 0 auto;
  color: #0d0e0e;
}

.header__logo img {
  width: 100%;
  height: 100%;
}

@media (max-width: 1267px) {
  .header__logo {
    width: 120px;
    height: 16px;
  }
}

@media (max-width: 1023px) {
  .header__logo {
    width: 120px;
    height: 16px;
  }
}

/* 第一屏 */
.kv-banner {
  width: 100%;
  height: 100vh;
  position: relative;
  transition: 0.5s;
  z-index: 80;
}

.iframe {
  width: 100%;
  height: 100vh;
  /* position: absolute;
        left: 0;
        top: 0; */
  border: none;
  z-index: 1;
  margin-bottom: 3%;
}

.kv-banner .kv {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  transition: 0.5s;
  display: block;
}

.kv-banner .kv-title {
  width: 35vw;
  height: auto;
  position: absolute;
  top: 15%;
  left: 3%;
}

.msg-main {
  width: 75vw;
  height: auto;
  position: absolute;
  bottom: 2vw;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.msg-item {
  width: 30%;
  height: auto;
  border-right: 1px solid #ffffff6b;
  transition: 1.5s;
}

.msg-item:last-child {
  border-right: none;
}

.msg-item .msg-row {
  height: auto;
  overflow: hidden;
  font-family: "SourceHanSansSC-Regular";
  font-size: var(--kv-normal-pc-font-size);
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 2px;
  line-height: 1;
  color: #ffffff;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.msg-item .msg-row .txt {
  display: flex;
  align-items: flex-end;
}

.msg-item .msg-row .num {
  font-size: var(--kv-big-pc-font-size);
  padding-right: 0.2rem;
  padding-right: calc(0.2 * 16 / 19.2 * 1vw);
  position: relative;
  transform: translateY(8%);
}

.msg-item .label-row {
  font-size: var(--kv-small-pc-font-size);
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
  padding-top: 1.3rem;
  padding-top: calc(1.3 * 16 / 19.2 * 1vw);
  text-transform: uppercase;
}

/* 首字母变色 */
/* .msg-item .label-row::first-letter {
    color: #97f0dd;
  } */

/* 第二屏  */
.swiper-page {
  position: relative;
}

.swiper-page .title-banner {
  width: 18vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "SourceHanSansSC-Light";
  color: #000000;
  transition: 0.6s;
  position: fixed;
  top: 6vw;
  left: 2vw;
  z-index: 79;
  margin-bottom: 3vw;
  --animate-duration: 0.5s;
}

.swiper-page .title-banner .img {
  width: 100%;
  height: auto;
  --animate-delay: 1.3s;
  --animate-duration: 1.3s;
  transition: 0.3s;
  position: absolute;
  top: 0.2vw;
  left: 0;
  z-index: 3;
}

.swiper-page .title-banner .img.show {
  opacity: 1;
}

.swiper-page .title-banner .img.hide {
  opacity: 0;
}

.swiper-page .title-banner .top-list {
  width: 13vw;
  height: auto;
  background-color: #162d3bcb;
  border-radius: 0.21vw;
  position: relative;
  top: 1.2vw;
  left: -5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0.2vw 0; */
  transition: 0.6s;
  z-index: 2;
}

.swiper-page .title-banner .top-list .top-list-item {
  padding: 0.6vw 0;
  border-bottom: 1px solid #a0d1b334;
  width: 11.3vw;
  display: none;
  font-size: 0.86vw;
  color: #ffffff;
  transition: 0.4s;
}

.swiper-page .title-banner .top-list .top-list-item.choose {
  display: block;
}

.swiper-page .title-banner .top-list .top-list-item:last-child,
.swiper-page .title-banner .top-list .top-list-item.noborder {
  border-bottom: none;
}

.swiper-page .kv {
  width: 100%;
  height: auto;
  min-height: 60vh;
  position: relative;
}

.swiper-page .kv .img {
  width: 100%;
  height: auto;
}

.swiper-page .kv .video {
  width: 100%;
  height: auto;
}

.page2 .kv .icon {
  height: auto;
  top: 15%;
  right: 3%;
  position: absolute;
  width: 35%;
  --animate-delay: 0.6s;
  --animate-duration: 1.5s;
}

.page2 .kv .txt {
  width: 30%;
  height: auto;
  color: #ffffff;
  position: absolute;

  left: 7%;
  bottom: 10%;
  --animate-delay: 0.6s;
  --animate-duration: 1.5s;
}

.page2 .kv .icon2 {
  width: 16%;
  height: auto;
  position: absolute;
  top: 38%;
  left: 8%;
  --animate-delay: 2.3s;
  --animate-duration: 1.3s;
}

.page2 .kv .txt .blue {
  color: #79fce7;
  font-family: "SourceHanSansSC-Medium";
}

.page3 .kv .title {
  width: 35vw;
  height: auto;
  position: absolute;
  top: 13%;
  left: 7%;
}

.page3 .kv .memo {
  width: 29vw;
  height: auto;
  position: absolute;
  top: 28%;
  left: 8%;
}

.page4 .kv-main {
  width: 100%;
  height: auto;
  min-height: 46.34vw;
  position: relative;
}

.page4 .kv-main .bg {
  width: 100%;
  height: auto;
  display: block;
  transition: 0.5s;
  /* position: absolute;
    top: 0;
    left: 0; */
  position: relative;
  z-index: 1;
}

.page4 .kv-main .bg.showimg {
  opacity: 1;
}

.page4 .kv-main .bg.hideimg {
  opacity: 0;
}

.page4 .kv-main .icon-main {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  top: 40%;
  left: 7vw;
  --animate-delay: 0.3s;
  --animate-duration: 1.5s;
  z-index: 2;
}

.page4 .kv-main .icon-main .title {
  font-family: "SourceHanSansSC-Medium";
  font-size: var(--normal-pc-font-size);
  line-height: 4.29vw;
  letter-spacing: 0vw;
  color: #ffffff;
}

.page4 .kv-main .icon-main .txt-main {
  width: 18.54vw;
  height: auto;
  position: relative;
}

.page4 .kv-main .icon-main .txt-main .bg {
  width: 17vw;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
}

.page4 .kv-main .icon-main .txt-main .txt {
  width: 17.94vw;
  min-height: 7vw;
  padding: 0.86vw 1.74vw 0.86vw 0.86vw;
  font-family: "SourceHanSansSC-Light";
  font-size: var(--small-pc-font-size);
  color: #ffffff;
  position: relative;
  z-index: 2;
}

.page4 .kv-main .icon-main .icon-row {
  display: flex;
  align-items: center;
  margin-left: 0.6vw;
  margin-top: 1.4vw;
}

.page4 .kv-main .icon-main .icon-row .icon-item {
  width: 2.85vw;
  height: auto;
  margin-right: 1.6vw;
  /* cursor: pointer; */
}

.page4 .kv-main .icon-main .icon-row .icon-item img {
  width: 100%;
  height: auto;
}

.swiper-page .push-pull-container {
  /* width: 100%; */
  width: 77vw;
  height: auto;
  display: block;
  position: relative;
  margin: 5vw auto;
}

.swiper-page .push-pull-container .push-pull-item {
  /* width: 100%;
    height: 100%;
    transition: 0.8s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.21vw; */
}

.swiper-page .push-pull-container :deep() .swiper-slide *:not(.img) {
  opacity: 0;
  transition: 0.4s;
}

.swiper-page .push-pull-container :deep() .swiper-slide .img {
  width: 100%;
  height: 33vw;
  object-fit: cover;
  position: relative;
  display: block;
}

.swiper-page .push-pull-container :deep() .swiper-slide .title {
  width: 72vw;
  font-size: var(--normal-pc-font-size);
  line-height: 0.64vw;
  letter-spacing: 0vw;
  color: #ffffff;
  font-family: "SourceHanSansSC-Medium";
  margin-top: 3.4vw;
  margin-left: 2.1vw;
  text-transform: uppercase;
}

.swiper-page .push-pull-container :deep() .swiper-slide .memo {
  width: 72vw;
  min-height: 2vw;
  font-size: var(--small-pc-font-size);
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.49vw;
  letter-spacing: 0vw;
  color: #ffffff;
  font-family: "SourceHanSansSC-Light";
  margin-top: 1.3vw;
  margin-left: 2.1vw;
}

.swiper-page .push-pull-container :deep() .swiper-slide-active *:not(.img) {
  opacity: 1;
}

.swiper-page .push-pull-container :deep() .swiper-pagination {
  height: 2vw;
  padding: 0 8% 1.2vw 2.1vw;
  box-sizing: border-box;
  text-align: left;
  z-index: 999 !important;
  bottom: 13%;
  transform: translateY(50%);
  display: flex;
  align-items: center;
}

.swiper-page .push-pull-container :deep() .swiper-pagination-bullet {
  width: 1vw;
  /* flex: 1; */
  height: 3px;
  background: transparent;
  border-radius: 2px;
  transition: 0.5s;
  background: rgba(255, 255, 255, 0.6);
  z-index: 999 !important;
  opacity: 1;
  padding: 2px;
}

.swiper-page .push-pull-container :deep() .swiper-pagination-bullet-active {
  width: 2.7vw;
  background: rgba(255, 255, 255, 1);
}

.page3 .push-pull-container :deep() .swiper-slide .title {
  color: #000000;
}

.page3 .push-pull-container :deep() .swiper-slide .memo {
  color: #000000;
}

.page3 .push-pull-container :deep() .swiper-pagination-bullet {
  background: rgba(0, 0, 0, 0.6);
}

.page3 .push-pull-container :deep() .swiper-pagination-bullet-active {
  background: rgba(0, 0, 0, 1);
}

/* .swiper-page .push-pull-container .bg-line {
    width: 80vw;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 1%;
    opacity: 0;
    transform: translateY(30%);
  }

  .page3 .push-pull-container .bg-line {
    left: auto;
    right: 1%;
  }

  .swiper-page .push-pull-container .push-pull-item {
    height: auto;
    position: absolute;
    transition: 0.8s;
  }

  .swiper-page .push-pull-container .push-pull-item * {
    transition: 0.4s;
  }

  .swiper-page .push-pull-container .push-pull-item.top {
    width: 58%;
    left: 0;
    top: 0;
    text-align: right;
  }

  .swiper-page .push-pull-container .push-pull-item.bottom {
    width: 60%;
    right: 0;
    top: 15%;
    text-align: left;
  }

  .swiper-page .push-pull-container .push-pull-item .img {
    width: 100%;
    height: auto;
  }

  .swiper-page .push-pull-container .push-pull-item .title {
    min-width: 30%;
    position: absolute;
    font-size: 100%;
    line-height: 1.2;
    color: #a0d1b3;
    font-family: "SourceHanSansSC-Bold";
  }

  .swiper-page .push-pull-container .push-pull-item .memo {
    min-width: 21%;
    position: absolute;
    font-size: 80%;
    letter-spacing: 0px;
    color: #ffffff;
  }

  .swiper-page .push-pull-container .push-pull-item.top .title {
    bottom: 17%;
    right: 48.2%;
  }

  .swiper-page .push-pull-container .push-pull-item.top .memo {
    bottom: 6%;
    right: 48.2%;
  }

  .swiper-page .push-pull-container .push-pull-item.bottom .title {
    top: 6%;
    left: 44.8%;
  }

  .swiper-page .push-pull-container .push-pull-item.bottom .memo {
    top: 16%;
    left: 44.8%;
  }

  .swiper-page .push-pull-container .push-pull-item.choose {
    width: 73%;
  }

  .swiper-page .push-pull-container .push-pull-item.no-choose {
    width: 57%;
  }

  .swiper-page .push-pull-container .push-pull-item.bottom.no-choose {
    top: 25%;
  }

  .swiper-page .push-pull-container .push-pull-item.top.choose .title,
  .swiper-page .push-pull-container .push-pull-item.top.choose .memo,
  .swiper-page .push-pull-container .push-pull-item.bottom.choose .title,
  .swiper-page .push-pull-container .push-pull-item.bottom.choose .memo {
    transform: scale(1.1);
  }

  .swiper-page .push-pull-container .push-pull-item.top.no-choose .title,
  .swiper-page .push-pull-container .push-pull-item.top.no-choose .memo,
  .swiper-page .push-pull-container .push-pull-item.bottom.no-choose .title,
  .swiper-page .push-pull-container .push-pull-item.bottom.no-choose .memo {
    transform: scale(0.8);
  } */

.swiper-page .bottom-img {
  width: 100%;
  height: auto;
  min-height: 60vh;
  margin-top: 5rem;
  margin-top: calc(5 * 16 / 19.2 * 1vw);
  position: relative;
}

.swiper-page .bottom-img .swiper-container {
  width: 77.15vw;
  height: 33.11vw;
  border-radius: 0;
}

.swiper-page .bottom-img .swiper-container .img {
  width: 77.15vw;
  height: 33.11vw;
  background-color: #000000;
  border-radius: 0.21vw;
  object-fit: cover;
  position: relative;
  top: 1px;
}

.swiper-page .bottom-img .img {
  width: 100%;
  height: auto;
}

.page4 .bottom-img .img {
  display: block;
}

.page2-bottom-img {
  overflow: hidden;
}

.page2-bottom-img .txt {
  width: 28%;
  height: auto;
  position: absolute;
  top: 9vw;
  right: 7%;
  --animate-delay: 0.3s;
  text-align: right;
}

.page2-bottom-img .txt .title {
  width: 100%;
  font-size: var(--normal-pc-font-size);
  /* line-height: 3.22vw; */
  letter-spacing: 0vw;
  color: #ffffff;
}

.page2-bottom-img .txt .memo {
  width: 100%;
  font-family: "SourceHanSansSC-Light";
  font-size: var(--small-pc-font-size);
  line-height: 1.48vw;
  letter-spacing: 0vw;
  color: #ffffff;
  margin-top: 0.86vw;
}

.page3 {
  position: relative;
  /* transform: translateY(-3%); */
}

.page3 .swiper-main {
  /* width: 100%; */
  width: 99%;
  min-height: 60vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0.21vw;
  padding-top: 2vw;
  /* border-radius: 0; */
}

.page3 .swiper-main .bg {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
  border-radius: 0.21vw;
  /* border-radius: 0; */
}

.page3 .swiper-main .top-title-row {
  z-index: 2;
  position: absolute;
  top: 5.3vw;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.page3 .swiper-main .top-title {
  z-index: 2;
  /* transform: scale(0.25); */
  transition: 0.3s;
  transform-origin: 50% 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page3 .swiper-main .top-title .title {
  font-size: var(--normal-pc-font-size);
  line-height: 3.22vw;
  color: #ffffff;
}

.page3 .swiper-main .top-title .memo {
  font-size: var(--small-pc-font-size);
  font-family: "SourceHanSansSC-Light";
  color: #ffffff;
  opacity: 0.86;
  margin-top: 1.2vw;
  text-align: center;
}

.page3 .main-swiper-container {
  width: 58vw;
  height: 45vw;
  position: absolute;
  margin: 0;
  z-index: 2;
}

.page3 .banner-img {
  width: 35vw;
  height: auto;
  position: absolute;
  top: 11%;
  transform: translateY(-50%);
  left: 7%;
  --animate-delay: 0.5s;
  --animate-duration: 1.3s;
}

.page3 .main-swiper-container :deep() .swiper-slide {
  width: 100%;
  height: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 1s;
  top: 13vw;
}

.page3 .main-swiper-container :deep() .swiper-slide .memo {
  width: 38vw;
  min-height: 2vw;
  font-family: "SourceHanSansSC-Light";
  font-size: var(--small-pc-font-size);
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 0vw;
  color: #ffffff;
  opacity: 0.86;
  text-align: left;
}

.page3 .main-swiper-container :deep() .swiper-slide .memo {
  opacity: 0;
  transition: 0.5s;
}

.page3 .main-swiper-container :deep() .swiper-slide .border {
  /* width: 45vw; */
  width: 43.56vw;
  height: auto;
  position: relative;
  z-index: 20;
}

.page3 .main-swiper-container :deep() .swiper-slide .title-img {
  width: 18.5vw;
  height: auto;
  position: absolute;
  top: -1vw;
  left: 10vw;
  transition: 0.3s;
  z-index: 3;
  font-size: var(--small-pc-font-size);
  line-height: 0.81vw;
  letter-spacing: 0vw;
  color: #ffffff;
  opacity: 0.86;
}

.page3 .main-swiper-container :deep() .swiper-slide-active * {
  opacity: 1 !important;
}

.page3 .main-swiper-container :deep() .swiper-slide .border.top {
  transform: translateY(72%);
}

.page3 .main-swiper-container :deep() .swiper-slide .border.bottom {
  transform: translateY(-73%);
}

.page3 .main-swiper-container .video {
  width: 36vw;
  height: 20vw;
  /* width: 48vw;
    height: 25vw; */
  object-fit: cover;
  display: block;
  /* border-radius: 0.8vw; */
  position: relative;
  z-index: 1;
  margin: 1vw 0;
  transition: 1s;
}

.page3 .main-swiper-container :deep() .swiper-pagination {
  height: 8px;
  padding: 0 8% 0 9.8vw;
  box-sizing: border-box;
  text-align: left;
  z-index: 999 !important;
  /* bottom: -1vw; */
  top: 36.5vw;
  display: flex;
  align-items: center;
}

.page3 .main-swiper-container :deep() .swiper-pagination-bullet {
  width: 1.2vw;
  /* flex: 1; */
  height: 5px;
  background: transparent;
  border-radius: 3px;
  transition: 0.5s;
  background: rgba(255, 255, 255, 0.6);
  z-index: 999 !important;
  opacity: 1;
}

.page3 .main-swiper-container :deep() .swiper-pagination-bullet-active {
  width: 2vw;
  background: rgba(255, 255, 255, 1);
}

.page3 .bottom-img {
  margin-top: 0;
}

.page3 .bottom-img .swiper-container {
  width: 77.15vw;
  height: 44.11vw;
  border-radius: 0.21vw;
}

.swiper-page .bottom-img .swiper-container video.img {
  width: 77.15vw;
  height: 44.11vw;
  background-color: transparent;
  border-radius: 0.21vw;
  object-fit: cover;
}

.page3 .bottom-img .swiper-container :deep() .swiper-pagination {
  padding: 0 4%;
  box-sizing: border-box;
  text-align: left;
}

.page3 .bottom-img .swiper-container :deep() .swiper-pagination-bullet {
  width: 4vw;
  height: 4px;
  background: #ffffff;
  border-radius: 3px;
  transition: 0.8s;
  position: relative;
}

.page3 .bottom-img .swiper-container :deep() .swiper-pagination-bullet-active {
  width: 15vw;
  height: 4px;
  background: linear-gradient(
    270deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.25) 99%
  );
  border-radius: 3px;
}

.page3 .bottom-img .swiper-container :deep() .swiper-pagination {
  padding: 0 3%;
  box-sizing: border-box;
  text-align: left;
  z-index: 999 !important;
  bottom: 10%;
  display: flex;
  align-items: center;
}

.page3 .bottom-img .swiper-container :deep() .swiper-pagination-bullet {
  /* width: 2vw; */
  flex: 1;
  height: 2px;
  background: transparent;
  border-radius: 50%;
  transition: 0.8s;
  background: radial-gradient(
    #a8edd67c 15.4639%,
    rgba(255, 255, 255, 0.13) 99.4845%
  );
  z-index: 999 !important;
  opacity: 1;
}

.page3 .bottom-img .swiper-container :deep() .swiper-pagination-bullet-active {
  /* width: 8vw; */
  background: radial-gradient(#70e1bb 45.4639%, #a8edd6 99.4845%);
}

.page3 .bottom-img .text-container {
  width: 100%;
  height: auto;
  position: relative;
  margin-top: 2vw;
  padding-bottom: 15vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page3 .bottom-img .text-container .icon {
  width: 1vw;
  min-width: 1vw;
  height: auto;
  position: relative;
  cursor: pointer;
}

.page3 .bottom-img .text-container .icon.prev {
  left: 5%;
}

.page3 .bottom-img .text-container .icon.next {
  right: 5%;
}

.page3 .bottom-img .text-container .txt-row {
  width: 76vw;
  display: flex;
  align-items: flex-start;
}

.page3 .bottom-img .text-container .txt-row .txt-item {
  height: auto;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
}

.page3 .bottom-img .text-container .txt-row .txt-item * {
  opacity: 0.5;
  transition: 0.5s;
}

.page3 .bottom-img .text-container .txt-row .txt-item.choose * {
  opacity: 1;
}

.page3 .bottom-img .text-container .txt-row .txt-item .border-img {
  width: 100%;
  height: auto;
  position: relative;
  top: -1px;
  margin-bottom: 1vw;
}

.page3 .bottom-img .text-container .txt-row .txt-item .border-img.normal {
  width: 100%;
  height: 0.25vw;
  background-color: #000000;
}

.page3 .bottom-img .text-container .txt-row .txt-item .title {
  width: 100%;
  font-size: var(--small-pc-font-size);
  font-family: "SourceHanSansSC-Medium";
  color: #000000;
  min-height: 1.92vw;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}

.page3 .bottom-img .text-container .txt-row .txt-item .memo {
  width: 100%;
  font-family: "SourceHanSansSC-Light";
  font-size: var(--small-pc-font-size);
  color: #000000;
  line-height: 1.6;
  letter-spacing: 1px;
}

/* .page4 .bottom-img {
    margin-top: 0;
  } */

.page4 .bottom-img .title {
  width: 17.36vw;
  height: auto;
  position: absolute;
  top: 20%;
  right: 7%;
  --animate-delay: 3s;
  --animate-duration: 2s;
  text-align: right;
}

.page4 .bottom-img .title .txt1 {
  width: 100%;
  font-size: var(--normal-pc-font-size);
  color: #ffffff;
}

.page4 .bottom-img .title .txt2 {
  width: 100%;
  font-family: "SourceHanSansSC-Light";
  font-size: var(--small-pc-font-size);
  margin-top: 1vw;
  color: #ffffff;
}

.page6 {
  padding-bottom: 3%;
  /* padding-top: 3%; */
}

/* .moreConfig-page .title-banner {
    width: 100%;
    height: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "SourceHanSansSC-Light";
    transition: 0.6s;
    color: #000000;
    padding-top: 5rem;
  }

  .moreConfig-page .title-banner .t1 {
    font-size: 2.6rem;
    font-weight: 600;
    line-height: 6rem;
    letter-spacing: 0.2rem;
    transition: 0.6s;
  }

  .moreConfig-page .title-banner .t2 {
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 2rem;
    letter-spacing: 0px;
    transition: 0.6s;
  } */

.moreConfig-page .swiper-container {
  position: relative;
}

.moreConfig-page .swiper-container .black-mask {
  width: 8vw;
  height: 43vw;
  position: absolute;
  top: 0;
  opacity: 0.75;
  z-index: 2;
}

.moreConfig-page .swiper-container .black-left {
  left: 0;
  border-top-left-radius: 2.4rem;
  border-top-left-radius: calc(2.4 * 16 / 19.2 * 1vw);
  border-bottom-left-radius: 2.4rem;
  border-bottom-left-radius: calc(2.4 * 16 / 19.2 * 1vw);
  background-image: linear-gradient(
    90deg,
    #00000071 0%,
    rgba(8, 24, 25, 0.3) 50%,
    #ffffff00 100%
  );
}

.moreConfig-page .swiper-container .black-right {
  right: 0;
  border-top-right-radius: 2.4rem;
  border-top-right-radius: calc(2.4 * 16 / 19.2 * 1vw);
  border-bottom-right-radius: 2.4rem;
  border-bottom-right-radius: calc(2.4 * 16 / 19.2 * 1vw);
  background-image: linear-gradient(
    90deg,
    #ffffff00 0%,
    rgba(8, 24, 25, 0.3) 50%,
    #00000071 100%
  );
}

.moreConfig-page .swiper-container :deep() .swiper-button-prev,
.moreConfig-page .swiper-container :deep() .swiper-button-next {
  color: #fff;
}

.moreConfig-page .swiper-container :deep() .swiper-button-prev {
  transform: scale(0.7) translateX(130%);
}

.moreConfig-page .swiper-container :deep() .swiper-button-next {
  transform: scale(0.7) translateX(-130%);
}

.moreConfig-page .swiper-pagination {
  display: block;
  width: 76vw;
  height: 1px;
  position: relative;
  background-color: #a5a5a5;
  margin: 3vw auto 5vw;
}

.moreConfig-page .swiper-pagination-progressbar-fill {
  display: block;
  width: 100%;
  height: 1px;
  background: #000000;
  transform-origin: left top;
  position: relative;
}

.moreConfig-page .swiper-pagination-txt {
  font-size: var(--small-pc-font-size);
  position: absolute;
  top: -1.6rem;
  top: calc(-1.6 * 16 / 19.2 * 1vw);
  left: 0;
  transition: all 0.5s;
}

.moreConfig-page .swiper-pagination .show {
  opacity: 1;
}

.moreConfig-page .swiper-pagination .hide {
  opacity: 0;
}

.moreConfig-page .num-txt {
  font-size: var(--normal-pc-font-size);
  position: absolute;
  bottom: -2.6rem;
  bottom: calc(-2.6 * 16 / 19.2 * 1vw);
  right: 0;
}

.moreConfig-page .num-txt .line {
  margin: 0 2px;
}

.moreConfig-page .num-txt .all {
  font-size: var(--small-pc-font-size);
}

.moreConfig-page .hint-img {
  width: 65vw;
  height: auto;
  margin: 0 auto;
  cursor: pointer;
}

.moreConfig-page .config-img-view {
  width: 94vw;
  height: auto;
  position: relative;
  margin: 5vw auto 3vw;
  display: flex;
  align-items: flex-start;
}

.moreConfig-page .config-img-view .top-img {
  width: 78.86vw;
  height: 46vw;
  background-color: #8c999e;
  position: relative;
  border-radius: 0.21vw;
}

.moreConfig-page .config-img-view .top-img .img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.8s all;
  border-radius: 0.21vw;
}

.moreConfig-page .config-img-view .top-img .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.moreConfig-page .config-img-view .top-img .img0 {
  opacity: 0;
}

.moreConfig-page .config-img-view .top-img .img1 {
  opacity: 1;
}

.moreConfig-page .config-img-view .top-img.a0 img {
  transition: 0.4s;
}

.moreConfig-page .config-img-view .top-img.a0 .img0 {
  opacity: 0.5s;
  z-index: 1;
}

.moreConfig-page .config-img-view .top-img.a0 .img1 {
  z-index: 2;
}

.moreConfig-page .config-img-view .color-row {
  width: 62%;
  height: 6vw;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
}

.moreConfig-page .config-img-view .color-row .color-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.moreConfig-page .config-img-view .color-row .color-item .row-main {
  display: flex;
  align-items: center;
  position: relative;
  left: 17%;
}

.moreConfig-page .config-img-view .color-row .color-item:last-child .row-main {
  left: -18%;
}

.moreConfig-page .config-img-view .color-row .color-item .icon {
  width: 1.8vw;
  height: 1.8vw;
  object-fit: cover;
  border-radius: 50%;
  padding: 1px;
  margin: 0 1.53% 0 0;
}

.moreConfig-page .config-img-view .color-row .color-item:last-child .icon {
  margin: 0;
}

.moreConfig-page .config-img-view .color-row .color-item .icon.choose {
  border: 1px solid #fff;
}

.moreConfig-page .config-img-view .color-row .color-item .txt {
  width: 100%;
  font-family: "SourceHanSansSC-Light";
  font-size: var(--small-pc-font-size);
  color: #ffffff;
  position: relative;
  top: 0.4vw;
  left: 0;
  transform: translateX(-20%);
  text-align: center;
  text-transform: uppercase;
}

.moreConfig-page .config-img-view .color-row .color-item .line {
  width: 6.96vw;
  height: auto;
  position: relative;
  left: 0;
  transform: translateX(7%);
  pointer-events: none;
}

.moreConfig-page .config-img-view .color-row .color-item:last-child .line {
  display: none;
}

.moreConfig-page .top-titles {
  position: absolute;
  top: 6.5%;
  left: 3.5%;
  --animate-delay: 3s;
  --animate-duration: 2s;
  z-index: 2;
}

.moreConfig-page .top-titles .txt {
  font-size: 1.6vw;
  font-variant-numeric: lining-nums;
  line-height: 1.5;
  letter-spacing: 1px;
  color: #ffffff;
  text-transform: uppercase;
}

.moreConfig-page .top-row {
  width: 13.37vw;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 0.62%;
}

.moreConfig-page .top-row .img {
  width: 13.37vw;
  height: 11.5vw;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  box-sizing: border-box;
}

.moreConfig-page .top-row .img:not(:last-child) {
  padding-bottom: 0.74vw;
}

.moreConfig-page .top-row .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.moreConfig-page .top-row .img .mask {
  transition: 0.5s;
}

.moreConfig-page .top-row .show .mask {
  opacity: 0;
}

.moreConfig-page .top-row .hide {
  display: block !important;
}

.moreConfig-page .top-row .hide .mask {
  width: 25vw;
  height: 13vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000;
  opacity: 0.6;
  filter: blur(10px);
  z-index: 2;
}

/* 配置表 */
.page5-configTable {
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page5-configTable-title {
  width: 94vw;
  height: auto;
  position: relative;
  margin: 0% 0 3%;
}

.page5-configTable-title .txt {
  text-transform: uppercase;
  /* font-family: "SourceHanSansSC-Medium"; */
  font-size: var(--normal-pc-font-size);
  font-weight: normal;
  font-stretch: normal;
  line-height: 3.22vw;
  letter-spacing: 0.04vw;
  color: #fefefe;
  position: absolute;
  left: 9.6%;
  bottom: 2.5%;
}

.page5-configTable-title .border {
  width: 100%;
  height: auto;
}

.page5-configTable-form {
  width: 88vw;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  margin: 4% auto;
  left: 50%;
  transform: translateX(-50%);
}

.page5-configTable-form .table-item {
  width: 50%;
  height: auto;
  margin-bottom: 3rem;
  margin-bottom: calc(3 * 16 / 19.2 * 1vw);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.page5-configTable-form .table-item .all-table-item {
  width: 100%;
  height: auto;
  margin-bottom: 3rem;
  margin-bottom: calc(3 * 16 / 19.2 * 1vw);
}

.page5-configTable-form .table-item .item-title {
  width: 100%;
  height: auto;
  position: relative;
}

.page5-configTable-form .table-item .item-title .txt {
  font-family: "SourceHanSansSC-Bold";
  font-size: var(--normal-pc-font-size);
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.1;
  letter-spacing: 0vw;
  color: #43b3ac;
  position: absolute;
  bottom: 40%;
  left: 9.5%;
}

.page5-configTable-form .table-item .item-title .img {
  width: 70%;
  height: auto;
  margin-bottom: 1.9vw;
}

.page5-configTable-form .table-item .item-row {
  width: 95%;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  margin-top: calc(1 * 16 / 19.2 * 1vw);
  font-size: var(--small-pc-font-size);
  font-weight: normal;
  font-stretch: normal;
  line-height: 2vw;
  letter-spacing: 0px;
  color: #ffffff;
  padding-left: 0.7rem;
  padding-left: calc(0.7 * 16 / 19.2 * 1vw);
  box-sizing: border-box;
}

.page5-configTable-form .table-item .item-row .bg {
  width: auto;
  height: 2vw;
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.page5-configTable-form .table-item .item-row .title {
  min-width: 20vw;
  width: auto;
  z-index: 2;
}

.page5-configTable-form .table-item .item-row .icon {
  padding-right: 0.3rem;
  padding-right: calc(0.3 * 16 / 19.2 * 1vw);
  z-index: 2;
}

@media (max-width: 1100px) {
  /* .body-main{
      background-color: #ffffff;
    } */
  .c2 {
    background-color: #ffffff;
  }

  .c3 {
    background-color: #ffffff;
  }

  .c4 {
    background-color: #ffffff;
  }

  /* .moreConfig-page{
      background-color: #213436;
    } */
  .kv-banner .kv-title {
    width: 67vw;
    height: auto;
    top: 25%;
    left: 10%;
  }

  .msg-main {
    width: 97%;
    height: auto;
    position: absolute;
    bottom: 14%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    justify-content: center;
    flex-wrap: wrap;
  }

  .msg-item {
    /* width: 30%; */
    width: auto;
    flex: 1;
    height: auto;
    border-right: 1px solid #ffffff;
    transition: 1.5s;
    padding: 1% 0;
  }

  /* .msg-item:nth-child(3),
    .msg-item:last-child {
      padding-bottom: 0;
    } */

  /* .msg-item:nth-child(2), */
  .msg-item:last-child {
    border-right: none;
    padding-left: 1.2vw;
    box-sizing: border-box;
  }

  .msg-item .msg-row {
    width: 100%;
    height: auto;
    padding-bottom: 2.26vw;
    /* font-size: 2.3vw; */
    font-size: var(--kv-normal-mob-font-size);
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 2px;
    color: #ffffff;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .msg-item .label-row {
    /* font-size: 2.3vw; */
    font-size: var(--kv-small-mob-font-size);
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    padding-top: 0;
  }

  .msg-item .msg-row .num {
    /* font-size: 3vw; */
    font-size: var(--kv-big-mob-font-size);
    padding-left: 0.1rem;
    padding-left: calc(0.1 * 16 / 3.75 * 1vw);
  }

  .page-title {
    width: 100%;
    height: 35vw;
    padding-bottom: 9vw;
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: #ffffff;
  }

  .page-title .img {
    width: 99.18vw;
    height: auto;
    display: block;
  }

  .swiper-page .title-banner {
    width: 100%;
    height: 16rem;
    height: calc(16 * 16 / 3.75 * 1vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "SourceHanSansSC-Light";
    color: #000000;
    transition: 0.6s;
  }

  .swiper-page .title-banner .img {
    width: 86%;
    height: auto;
    --animate-delay: 1.3s;
    --animate-duration: 1.3s;
  }

  .swiper-page .swiper-container {
    width: 91vw;
    height: 87vw;
    object-fit: cover;
    margin: 3rem auto 1rem;
    margin: calc(3 * 16 / 3.75 * 1vw) auto calc(1 * 16 / 3.75 * 1vw);
    box-sizing: content-box;
    border-radius: 1.4rem;
    border-radius: calc(1.4 * 16 / 3.75 * 1vw);
  }

  .swiper-page .swiper-container .img {
    width: 100%;
    height: 100%;
    border-radius: 1.4rem;
    border-radius: calc(1.4 * 16 / 3.75 * 1vw);
    object-fit: cover;
  }

  .swiper-page .bottom-img {
    width: 91%;
    height: auto;
    min-height: 35vh;
    margin: 3rem auto 0;
    margin: calc(3 * 16 / 3.75 * 1vw) auto 0;
    /* padding-bottom: 2rem; */
    padding-bottom: 0;
    position: relative;
  }

  .moreConfig-page .swiper-container {
    width: 100%;
    height: 91vw;
    border-radius: 0;
    margin: 3rem auto 3rem;
    margin: calc(3 * 16 / 3.75 * 1vw) auto calc(3 * 16 / 3.75 * 1vw);
  }

  .moreConfig-page .swiper-container .img {
    border-radius: 0;
  }

  .moreConfig-page .swiper-container .black-mask {
    display: none;
  }

  .moreConfig-page .swiper-container :deep() .swiper-button-prev,
  .moreConfig-page .swiper-container :deep() .swiper-button-next {
    display: none;
  }

  .moreConfig-page .swiper-pagination {
    display: block;
    width: 85vw;
    height: 1px;
    position: relative;
    background-color: #a5a5a5;
    margin: 7vw auto 10vw;
  }

  .moreConfig-page .swiper-pagination-progressbar-fill {
    display: block;
    width: 100%;
    height: 1px;
    background: #000000;
    transform-origin: left top;
    position: relative;
  }

  .moreConfig-page .swiper-pagination-txt {
    font-size: 0.7rem;
    font-size: calc(0.7 * 16 / 3.75 * 1vw);
    position: absolute;
    top: -1.3rem;
    top: calc(-1.3 * 16 / 3.75 * 1vw);
    left: 0;
    transition: all 0.5s;
  }

  .moreConfig-page .swiper-pagination .show {
    opacity: 1;
  }

  .moreConfig-page .swiper-pagination .hide {
    opacity: 0;
  }

  .moreConfig-page .num-txt {
    font-size: 0.9rem;
    font-size: calc(0.9 * 16 / 3.75 * 1vw);
    position: absolute;
    bottom: -1.6rem;
    bottom: calc(-1.6 * 16 / 3.75 * 1vw);
    right: 0;
  }

  .moreConfig-page .num-txt .line {
    margin: 0 2px;
  }

  .moreConfig-page .num-txt .all {
    font-size: 0.7rem;
    font-size: calc(0.7 * 16 / 3.75 * 1vw);
  }

  .moreConfig-page .config-img-view {
    width: 100vw;
    flex-direction: column;
    margin: 0 auto;
    padding-bottom: 3vw;
  }

  .moreConfig-page .top-row {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 0;
    margin-top: 1.03vw;
  }

  .moreConfig-page .config-img-view .top-img {
    width: 100%;
    height: 58.39vw;
    border-radius: 0.41vw;
    position: relative;
  }

  .moreConfig-page .top-row .img {
    width: 24.27vw;
    height: 20.22vw;
    border-radius: 0.41vw;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .moreConfig-page .config-img-view .color-row {
    width: 84%;
    height: 10vw;
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
    padding-left: 3%;
    box-sizing: border-box;
  }

  .moreConfig-page .config-img-view .color-row .color-item .row-main {
    display: flex;
    align-items: center;
    position: relative;
    left: 15%;
  }

  .moreConfig-page .config-img-view .color-row .color-item {
    -webkit-tap-highlight-color: transparent;
  }

  .moreConfig-page .config-img-view .color-row .color-item .icon {
    width: 4.5vw;
    height: 4.5vw;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
    padding: 1px;
    margin: 0 auto 0;
  }

  .moreConfig-page .config-img-view .color-row .color-item .line {
    width: 10vw;
    height: auto;
    position: relative;
    left: 0;
    transform: translateX(8%);
  }

  .moreConfig-page .config-img-view .color-row .color-item .txt {
    width: 98%;
    font-family: "SourceHanSansSC-Light";
    font-size: var(--smaller-swiper-mob-font-size);
    color: #ffffff;
    position: relative;
    top: 0.4vw;
    left: 3%;
    transform: translateX(-20%);
    text-align: center;
    text-transform: uppercase;
  }

  .page5-configTable {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: 2vw; */
    margin-top: 0;
    padding-top: 2vw;
    overflow: hidden;
  }

  .page5-configTable-title {
    width: 96vw;
  }

  .page5-configTable-title .txt {
    font-size: var(--normal-mob-font-size);
    left: 12%;
    bottom: 5%;
    line-height: 5.22vw;
  }

  .page5-configTable-form {
    width: 88vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    margin: 4% 2vw 0 6vw;
    left: 0;
    transform: none;
  }

  .page5-configTable-form .table-item {
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
    margin-bottom: calc(2 * 16 / 3.75 * 1vw);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .page5-configTable-form .table-item .all-table-item {
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
    margin-bottom: calc(2 * 16 / 3.75 * 1vw);
  }

  .page5-configTable-form .table-item-B {
    margin-bottom: 0;
  }

  .page5-configTable-form .table-item-B .all-table-item:last-child {
    margin-bottom: 0;
  }

  .page5-configTable-form .table-item .item-title {
    width: 100%;
    height: auto;
    position: relative;
    margin-bottom: 1rem;
    margin-bottom: calc(1 * 16 / 3.75 * 1vw);
  }

  .page5-configTable-form .table-item .item-title .txt {
    font-family: "SourceHanSansSC-Bold";
    font-size: 1rem;
    font-size: calc(1 * 16 / 3.75 * 1vw);
    font-weight: normal;
    font-stretch: normal;
    line-height: 1.1;
    letter-spacing: 0vw;
    color: #43b3ac;
    position: absolute;
    bottom: 40%;
    left: 10.2%;
  }

  .page5-configTable-form .table-item .item-row {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 0.5rem;
    margin-top: calc(0.5 * 16 / 3.75 * 1vw);
    font-size: var(--smaller-mob-font-size);
    font-weight: normal;
    font-stretch: normal;
    line-height: 6vw;
    letter-spacing: 0px;
    color: #ffffff;
    padding-left: 1.4vw;
    box-sizing: border-box;
  }

  .page5-configTable-form .table-item .item-row .bg {
    width: auto;
    height: 5.8vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .page5-configTable-form .table-item .item-row:not(.bg) {
    position: relative;
    z-index: 2;
  }

  .page5-configTable-form .table-item .item-row .title {
    min-width: 48%;
    width: auto;
  }

  .page5-configTable-form .table-item .item-row .icon {
    padding-right: 0.3rem;
    padding-right: calc(0.3 * 16 / 3.75 * 1vw);
  }

  .moreConfig-page .hint-img {
    width: 85vw;
    height: auto;
    margin: 1rem auto 0;
    margin: calc(1 * 16 / 3.75 * 1vw) auto 0;
    cursor: pointer;
  }

  .moreConfig-page .hint-img .img {
    width: 35vw;
    height: auto;
    margin: 0 auto 1rem;
    margin: 0 auto calc(1 * 16 / 3.75 * 1vw);
  }

  .moreConfig-page .hint-img .txt {
    width: 100%;
    text-align: center;
    font-size: 2.5vw;
    color: #ffffff;
    opacity: 0.7;
  }

  .swiper-page .push-pull-container {
    /* width: 100%; */
    width: 90.51vw;
    height: 113vw;
    display: block;
    position: relative;
    margin: 5vw auto;
  }

  .swiper-page .push-pull-container :deep() .swiper-slide *:not(.img) {
    opacity: 0;
    transition: 0.4s;
  }

  .swiper-page .push-pull-container :deep() .swiper-slide .img {
    width: 100%;
    height: 87.12vw;
    object-fit: cover;
    position: relative;
    display: block;
    border-radius: 0.36vw;
  }

  .swiper-page .push-pull-container :deep() .swiper-slide .title {
    width: 82vw;
    font-size: var(--normal-mob-font-size);
    line-height: 1.6;
    margin-top: 4.05vw;
    margin-left: 3.44vw;
  }

  .swiper-page .push-pull-container :deep() .swiper-slide .memo {
    width: 82vw;
    min-height: 2vw;
    font-size: var(--small-mob-font-size);
    line-height: 1.2;
    margin-top: 0.8vw;
    margin-left: 3.44vw;
  }

  .swiper-page .push-pull-container :deep() .swiper-slide-active *:not(.img) {
    opacity: 1;
  }

  .swiper-page .push-pull-container :deep() .swiper-pagination {
    width: 82.81vw;
    height: 1.5vw;
    padding: 0;
    box-sizing: border-box;
    text-align: left;
    z-index: 999 !important;
    bottom: 1%;
    left: 3.22vw;
    /* transform: translateY(50%); */
    display: flex;
    align-items: center;
  }

  .swiper-page .push-pull-container :deep() .swiper-pagination-bullet {
    width: 50%;
    height: 1px;
    background: transparent;
    border-radius: 0px;
    transition: 0.5s;
    background: rgba(255, 255, 255, 0.6);
    z-index: 999 !important;
    opacity: 1;
    padding: 0px;
    margin: 0;
  }

  .swiper-page .push-pull-container :deep() .swiper-pagination-bullet-active {
    /* width: 2.7vw; */
    background: rgba(255, 255, 255, 1);
  }

  .swiper-page .push-pull-container :deep() .swiper-slide .title {
    color: #000000;
  }

  .swiper-page .push-pull-container :deep() .swiper-slide .memo {
    color: #000000;
  }

  .swiper-page .push-pull-container :deep() .swiper-pagination-bullet {
    background: rgba(0, 0, 0, 0.32);
  }

  .swiper-page .push-pull-container :deep() .swiper-pagination-bullet-active {
    background: rgb(0, 0, 0);
  }

  .page2 .kv .txt {
    width: 66.67%;
    height: auto;
    font-size: 1.2rem;
    font-size: calc(1.2 * 16 / 3.75 * 1vw);
    position: absolute;
    bottom: 18%;
    top: auto;
    left: 12%;
    right: auto;
    --animate-delay: 1s;
    --animate-duration: 1.3s;
  }

  .page2 .kv .icon {
    width: 45%;
    height: auto;
    position: absolute;
    right: 0%;
    top: 15%;
    --animate-delay: 1s;
    --animate-duration: 1.3s;
  }

  .page2 .bottom-img .txt {
    width: 100%;
    height: auto;
    position: absolute;
    top: 11%;
    right: 5%;
  }

  .page2-bottom-img .txt .title {
    font-size: var(--normal-mob-font-size);
  }

  .page2-bottom-img .txt .memo {
    font-size: var(--small-mob-font-size);
    margin-top: 1.3vw;
  }

  .page3 .swiper-main {
    width: 100%;
    border-radius: 0;
    padding-top: 0;
  }

  .page3 .swiper-main .top-title-row {
    top: 9.8vw;
  }

  .page3 .swiper-main .top-title .title {
    font-size: var(--normal-mob-font-size);
    line-height: 3.22vw;
    color: #ffffff;
  }

  .page3 .main-swiper-container {
    width: 85vw;
    height: 70.55vw;
    bottom: 10vw;
    left: 50%;
    transform: translateX(-50%);
  }

  .page3 .main-swiper-container :deep() .swiper-slide {
    width: 100%;
    height: 50vw;
    top: 9vw;
  }

  .page3 .main-swiper-container :deep() .swiper-slide .memo {
    width: 75vw;
    min-height: 5vw;
    font-size: var(--small-mob-font-size);
  }

  .page3 .main-swiper-container :deep() .swiper-slide .border {
    /* width: 45vw; */
    width: 83.43vw;
    height: auto;
    position: relative;
    z-index: 20;
  }

  .page3 .main-swiper-container :deep() .swiper-slide .title-img {
    width: auto;
    height: auto;
    position: absolute;
    /* top: -1.6rem; */
    top: -5.5vw;
    left: 5vw;
    font-size: var(--small-mob-font-size);
    line-height: 1;
  }

  .page3 .main-swiper-container :deep() .swiper-slide-active * {
    opacity: 1 !important;
  }

  .page3 .main-swiper-container :deep() .swiper-slide .border.top {
    transform: translateY(100%);
  }

  .page3 .main-swiper-container :deep() .swiper-slide .border.bottom {
    transform: translateY(-100%);
  }

  .page3 .main-swiper-container .video {
    width: 82.25vw;
    height: 45.31vw;
    margin: 2vw auto;
  }

  .page3 .main-swiper-container :deep() .swiper-pagination {
    height: 8px;
    padding: 0 8% 0 4vw;
    box-sizing: border-box;
    text-align: left;
    z-index: 999 !important;
    /* bottom: -1vw; */
    top: 57vw;
    display: flex;
    align-items: center;
  }

  .page3 .main-swiper-container :deep() .swiper-pagination-bullet {
    width: 2.31vw;
    height: 0.62vw;
    background: transparent;
    border-radius: 0.28vw;
    transition: 0.5s;
    background: rgba(255, 255, 255, 0.6);
    z-index: 999 !important;
    opacity: 1;
    margin: 0 0.6vw;
  }

  .page3 .main-swiper-container :deep() .swiper-pagination-bullet-active {
    width: 3.69vw;
    background: rgba(255, 255, 255, 1);
  }

  .page3 .bottom-img .swiper-container {
    width: 90.51vw;
    /* height: 104.36vw; */
    height: 64vw;
    border-radius: 0.36vw;
    margin-top: 0;
  }

  .swiper-page .bottom-img .swiper-container video.img {
    width: 90.51vw;
    /* height: 104.36vw; */
    height: 64vw;
    background-color: transparent;
    border-radius: 0.36vw;
    object-fit: cover;
  }

  .page3 .bottom-img .text-container {
    width: 100%;
    height: auto;
    position: relative;
    margin-top: 2vw;
    /* padding-bottom: 15vw; */
    padding-bottom: 0vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .page3 .bottom-img .text-container .icon {
    width: 2.5vw;
    min-width: 2.5vw;
    height: auto;
    position: relative;
    cursor: pointer;
  }

  .page3 .bottom-img .text-container .icon.prev {
    left: -2.2%;
  }

  .page3 .bottom-img .text-container .icon.next {
    right: -2.2%;
  }

  .page3 .bottom-img .text-container .txt-row {
    width: 84vw;
    display: flex;
    align-items: flex-start;
  }

  .page3 .bottom-img .text-container .txt-row .txt-item * {
    opacity: 0;
    transition: 0.6s;
  }

  .page3 .bottom-img .text-container .txt-row .txt-item.choose * {
    opacity: 1;
  }

  .page3 .bottom-img .text-container .txt-row .txt-item .border-img {
    width: 10.93vw;
    top: 0;
    margin-bottom: 3vw;
  }

  .page3 .bottom-img .text-container .txt-row .txt-item .title {
    font-size: var(--small-mob-font-size);
  }

  .page3 .bottom-img .text-container .txt-row .txt-item .memo {
    font-size: var(--small-mob-font-size);
  }

  .page4 .kv-main {
    width: 100%;
    height: auto;
    min-height: 89.48vw;
    position: relative;
  }

  .page4 .kv-main .icon-main {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: absolute;
    top: 10%;
    left: 7vw;
    --animate-delay: 0.3s;
    --animate-duration: 1.5s;
  }

  .page4 .kv-main .icon-main .title {
    font-family: "SourceHanSansSC-Medium";
    font-size: var(--normal-mob-font-size);
    line-height: 8.21vw;
    letter-spacing: 0vw;
    color: #ffffff;
  }

  .page4 .kv-main .icon-main .txt-main {
    width: 58vw;
    height: auto;
    position: relative;
  }

  .page4 .kv-main .icon-main .txt-main .bg {
    width: 52vw;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
  }

  .page4 .kv-main .icon-main .txt-main .txt {
    width: 55vw;
    min-height: 19.6vw;
    padding: 1.69vw 5.57vw 1.33vw 2.28vw;
    font-family: "SourceHanSansSC-Light";
    font-size: var(--small-mob-font-size);
    color: #ffffff;
    position: relative;
    z-index: 2;
    box-sizing: border-box;
  }

  .page4 .kv-main .icon-main .icon-row {
    display: flex;
    align-items: center;
    margin-left: 0.6vw;
    margin-top: 5.4vw;
  }

  .page4 .kv-main .icon-main .icon-row .icon-item {
    width: 5.85vw;
    height: auto;
    margin-right: 3vw;
    /* cursor: pointer; */
  }

  .page4 .kv-main .icon-main .icon-row .icon-item img {
    width: 100%;
    height: auto;
  }

  .page4 .bottom-img .title {
    width: 45%;
    height: auto;
    position: absolute;
    top: auto;
    right: 7%;
    bottom: 15%;
    --animate-delay: 3s;
    --animate-duration: 2s;
  }

  .page4 .bottom-img .title .txt1 {
    font-size: var(--normal-mob-font-size);
  }

  .page4 .bottom-img .title .txt2 {
    font-size: var(--small-mob-font-size);
    margin-top: 1.3vw;
  }

  .moreConfig-page .top-titles {
    position: absolute;
    top: 5.54vw;
    left: 50%;
    transform: translateX(-50%);
    --animate-delay: 3s;
    --animate-duration: 2s;
    z-index: 2;
    width: 98%;
  }

  .moreConfig-page .top-titles .block {
    display: none;
  }

  .moreConfig-page .top-titles .txt {
    width: 100%;
    font-size: var(--normal-mob-font-size);
    font-variant-numeric: lining-nums;
    line-height: 1.2;
    letter-spacing: 0;
    color: #ffffff;
    text-align: center;
  }

  .iframe {
    width: 100%;
    height: 80vh;
    /* position: absolute;
        left: 0;
        top: 0; */
    border: none;
    z-index: 1;
    margin-bottom: 6%;
    margin-top: 6%;
  }
}
</style>
