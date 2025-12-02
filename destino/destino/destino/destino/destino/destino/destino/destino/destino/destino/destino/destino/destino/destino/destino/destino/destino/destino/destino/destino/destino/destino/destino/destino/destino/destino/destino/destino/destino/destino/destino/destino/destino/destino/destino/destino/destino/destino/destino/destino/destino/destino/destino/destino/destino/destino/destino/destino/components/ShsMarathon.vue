<template>
  <div class="shs-box shs-marathon" :class="'shs-marathon' + tabIndex">
    <transition-group
      mode="in-out"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <picture
        v-show="tabIndex === 0"
        class="shs-marathon-bg shs-marathon-bg0"
        :class="'shs-marathon' + tabIndex"
        :key="0"
      >
        <source
          media="(min-width: 1024px)"
          :srcset="config?.public?.staticURL + '/images/shs/bg_16_1.jpg'"
        />
        <source
          media="(min-width: 320px)"
          :srcset="config?.public?.staticURL + '/images/shs/bg_16_m_1.jpg'"
        />
        <img
          :src="config?.public?.staticURL + '/images/shs/bg_16_1.jpg'"
          loading="lazy"
        />
      </picture>
      <picture
        v-show="tabIndex === 1"
        class="shs-marathon-bg shs-marathon-bg1"
        :key="1"
      >
        <source
          media="(min-width: 1024px)"
          :srcset="config?.public?.staticURL + '/images/shs/bg_16_1.jpg'"
        />
        <source
          media="(min-width: 320px)"
          :srcset="config?.public?.staticURL + '/images/shs/bg_16_m_2.jpg'"
        />
        <img
          :src="config?.public?.staticURL + '/images/shs/bg_16_1.jpg'"
          loading="lazy"
        />
      </picture>
    </transition-group>
    <picture class="shs-marathon-logo">
      <source
        media="(min-width: 1024px)"
        :srcset="config?.public?.staticURL + '/images/shs/bg_16_logo.svg'"
      />
      <source
        media="(min-width: 320px)"
        :srcset="config?.public?.staticURL + '/images/shs/bg_16_logo.svg'"
      />
      <img
        :src="config?.public?.staticURL + '/images/shs/bg_16_logo.svg'"
        loading="lazy"
      />
    </picture>
    <div
      class="shs-marathon-title"
      v-html="
        ispc
          ? 'THE LIST OF GLOBAL SUPER HYBRID MARATHON'
          : 'THE LIST OF GLOBAL SUPER<br />HYBRID MARATHON'
      "
      v-animate="{
        effect: 'fadeInUp',
        once: !ispc,
      }"
    ></div>
    <div
      class="shs-marathon-box"
      v-animate="{
        effect: 'fadeInUp',
        once: !ispc,
      }"
    >
      <div class="shs-marathon-page">
        <transition-group
          mode="out-in"
          enter-active-class="animate__animated animate__fadeInUp"
          leave-active-class="animate__animated animate__fadeOutDown"
        >
          <div
            v-show="tabIndex === 0"
            class="shs-marathon-main"
            :class="[{ ispc }, 'shs-marathon-main' + tabIndex]"
            :key="0"
          >
            <div class="shs-media-title">China Station</div>
            <div class="shs-media-list" :class="{ ispc }">
              <div class="shs-media-item">
                <img
                  :src="
                    config?.public?.staticURL + '/images/shs/banner17_cont1.png'
                  "
                  loading="lazy"
                  style="cursor: pointer"
                  @click="
                    linkTo(
                      'https://www.piston.my/2024/10/18/jaecoo-j7-phev-ultra-long-range-test-over-1300km-on-a-single-charge-and-a-tank-of-fuel/'
                    )
                  "
                />
              </div>
              <div class="shs-media-item">
                <img
                  :src="
                    config?.public?.staticURL + '/images/shs/banner17_cont2.jpg'
                  "
                  loading="lazy"
                  style="cursor: pointer"
                  @click="
                    linkTo(
                      'https://it.motor1.com/news/737722/jaecoo-7-phev-viaggio-cina-2024/'
                    )
                  "
                />
              </div>
              <div class="shs-media-item">
                <video
                  class="w-full h-full"
                  loop
                  muted
                  autoplay
                  :poster="
                    config?.public?.staticURL + '/videos/shs/bg_16_1_mp.jpg'
                  "
                  playsinline="true"
                  x5-playsinline="true"
                  webkit-playsinline="true"
                  x-webkit-airplay="allow"
                  x5-video-player-type="h5"
                  x5-video-player-fullscreen="true"
                  x5-video-ignore-metadata="true"
                >
                  <source
                    :src="config?.public?.staticURL + '/videos/shs/bg_16_1.mp4'"
                  />
                </video>
              </div>
              <div class="shs-media-item">
                <video
                  class="w-full h-full"
                  loop
                  muted
                  autoplay
                  :poster="
                    config?.public?.staticURL + '/videos/shs/bg_16_2_mp.jpg'
                  "
                  playsinline="true"
                  x5-playsinline="true"
                  webkit-playsinline="true"
                  x-webkit-airplay="allow"
                  x5-video-player-type="h5"
                  x5-video-player-fullscreen="true"
                  x5-video-ignore-metadata="true"
                >
                  <source
                    :src="config?.public?.staticURL + '/videos/shs/bg_16_2.mp4'"
                  />
                </video>
              </div>
            </div>
            <div class="shs-text-list" :class="{ ispc }">
              <div class="shs-text-item">
                <div class="shs-text-title"><span>1353km</span> (1200km)</div>
                <div class="shs-text-desc">
                  The Challenge Of Comprehensive Driving Range Has Been Achieved
                  At
                  <br />112%.
                </div>
              </div>
              <div class="shs-text-item">
                <div class="shs-text-title"><span>125.2km</span> (90km)</div>
                <div class="shs-text-desc">
                  The Challenge Of Pure Electric Driving Range Has Been Achieved
                  At 139%.
                </div>
              </div>
              <div class="shs-text-item">
                <div class="shs-text-title"><span>3.3l</span> (6l)</div>
                <div class="shs-text-desc">
                  The Challenge Of Charge Sustaining Fuel Consumption Has Been
                  Achieved.
                </div>
              </div>
            </div>
          </div>
          <div
            v-show="tabIndex === 1"
            class="shs-marathon-main"
            :class="[{ ispc }, 'shs-marathon-main' + tabIndex]"
            :key="1"
          >
            <div v-if="ispc" class="shs-media-title shs-media-title1">
              A Long - Distance Test Of Traveling Through Singapore,<br />
              Malaysia And Thailand With One Tank Of Fuel
            </div>
            <div v-else class="shs-media-title shs-media-title1">
              A Long - Distance Test Of<br />
              Traveling Through Singapore,<br />
              Malaysia And Thailand With One<br />
              Tank Of Fuel
            </div>
            <div class="shs-media-tip">
              The best distance covered with one tank of fuel is
              <span>1,427.5 Km</span>
            </div>
            <div class="shs-media-list shs-media-list1" :class="{ ispc }">
              <div class="shs-media-item">
                <img
                  :src="config?.public?.staticURL + '/images/shs/bg_16_m_3.jpg'"
                  loading="lazy"
                  style="cursor: pointer"
                />
              </div>
              <div class="shs-media-item">
                <img
                  :src="config?.public?.staticURL + '/images/shs/bg_16_m_4.jpg'"
                  loading="lazy"
                  style="cursor: pointer"
                />
              </div>
              <div class="shs-media-item">
                <img
                  :src="config?.public?.staticURL + '/images/shs/bg_16_m_5.jpg'"
                  loading="lazy"
                  style="cursor: pointer"
                />
              </div>
              <div class="shs-media-item">
                <img
                  :src="config?.public?.staticURL + '/images/shs/bg_16_m_6.jpg'"
                  loading="lazy"
                  style="cursor: pointer"
                />
              </div>
              <div class="shs-media-item">
                <img
                  :src="config?.public?.staticURL + '/images/shs/bg_16_m_7.jpg'"
                  loading="lazy"
                  style="cursor: pointer"
                />
              </div>
            </div>
            <div class="shs-table">
              <div class="shs-table-tr">
                <div class="shs-table-td">Vehicle</div>
                <div class="shs-table-td">Media</div>
                <div class="shs-table-td">Total Range（km)</div>
              </div>
              <div class="shs-table-tr">
                <div class="shs-table-td">Car1</div>
                <div class="shs-table-td">
                  SG Carmart/Motorist<br />Singapore
                </div>
                <div class="shs-table-td">1427.5</div>
              </div>
              <div class="shs-table-tr">
                <div class="shs-table-td">Car2</div>
                <div class="shs-table-td">Carlist/iGarage</div>
                <div class="shs-table-td">1355.9</div>
              </div>
              <div class="shs-table-tr">
                <div class="shs-table-td">Car3</div>
                <div class="shs-table-td">EnGear/Motoqar</div>
                <div class="shs-table-td">1341.7</div>
              </div>
              <div class="shs-table-tr">
                <div class="shs-table-td">Car4</div>
                <div class="shs-table-td">Paultan.org/Autobuzz</div>
                <div class="shs-table-td">1274.3</div>
              </div>
              <div class="shs-table-tr">
                <div class="shs-table-td">Car5</div>
                <div class="shs-table-td">Eshton<br />Chua/Paddleshift SG</div>
                <div class="shs-table-td">1257</div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
    <div v-if="ispc" class="shs-select">
      <el-select
        class="select"
        v-model="tabIndex"
        size="large"
        placeholder="Select Country"
      >
        <el-option
          :value="tab.value"
          :label="tab.label"
          v-for="tab in tabList"
          :key="tab.value"
        ></el-option>
      </el-select>
    </div>
    <div v-else class="shs-marathon-tab">
      <div
        v-for="tab in tabList"
        :key="tab.value"
        :class="{ active: tab.value === tabIndex }"
        class="shs-tab"
        @click.stop="tabIndex = tab.value"
      >
        {{ tab.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface PageData {
  ispc: boolean;
}

const props = withDefaults(defineProps<PageData>(), {
  ispc: true,
});

const tabList = [
  {
    value: 0,
    label: "China",
  },
  {
    value: 1,
    label: "Malaysia",
  },
];
const tabIndex = ref(0);

const config = useRuntimeConfig();

const linkTo = (url: string) => {
  window.open(url, "_blank");
};

onMounted(() => {});
</script>

<style lang="scss" scoped>
.shs-marathon {
  position: relative;
  font-family: "MiSans";
  height: 56.25vw;
  background: no-repeat top/100%;
  overflow: hidden;
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    will-change: transform, opacity;
  }
  &-logo {
    position: absolute;
    top: 14.346%;
    left: 50%;
    /* transform: translateX(-50%); */
    width: 6.82vw;
    margin-left: -3.41vw;
  }
  &-title {
    position: absolute;
    top: calc(11.3 / 56.25 * 100%);
    left: 50%;
    /* transform: translateX(-50%); */
    width: 91.47vw;
    margin-left: -45.735vw;
    font-size: 0.4rem;
    line-height: 0.53rem;
    font-weight: 305;
    letter-spacing: 0.002083em;
    text-align: center;
  }
  &-tab {
    position: absolute;
    top: 52.8vw;
    left: 50%;
    /* transform: translateX(-50%); */
    display: flex;
    justify-content: space-between;
    width: 30.93vw;
    margin-left: -15.465vw;
    font-size: 2.93vw;
    line-height: 3.87vw;
    font-weight: 330;
    color: #999999;
    .active {
      color: #ffffff;
    }
  }
  &-main {
    position: absolute;
    top: calc(19.06 / 56.25 * 100%);
    left: 18.8vw;
    width: 43.02vw;
    border: 1px solid transparent;
    border-image: linear-gradient(
        208deg,
        rgba(103, 176, 196, 0.45) 5%,
        rgba(255, 255, 255, 0.72) 100%
      )
      100% 100% round;
    border-image-slice: 1;
    padding: 1.77vw 2.24vw 2.37vw 1.41vw;
    will-change: transform, opacity;

    &.ispc {
      height: 25.6vw;
    }

    &1.ispc {
      left: 15.36vw;
      width: 46.51vw;
      height: 29.64vw;
      padding: 1.77vw 1.41vw 1.46vw 1.41vw;
    }
  }
  &-box {
    position: relative;
    top: 20vw;
    height: 20vw;
  }
  &-page {
    position: relative;
    top: -20vw;
    height: 56.25vw;
  }
}
.shs-media {
  &-title {
    font-size: 1.67vw;
    line-height: 2.19vw;
    font-weight: 380;
    text-align: center;
    &1 {
      width: 46.51vw;
      margin-left: -1.41vw;
    }
  }
  &-tip {
    margin-top: 1.61vw;
    font-size: 0.73vw;
    font-weight: 305;
    span {
      font-size: 1.46vw;
      line-height: 1.93vw;
    }
  }
  &-item {
    width: 12.5vw;
    &:nth-of-type(-n + 2) {
      height: 10.21vw;
      margin-bottom: 0.62vw;
    }
    &:nth-last-type(-n + 2) {
      height: 7.19vw;
    }
  }
  &-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 3.2vw;
    &.ispc {
      position: absolute;
      top: 5.21vw;
      right: 2.24vw;
      width: 25.63vw;
      margin-top: 0;
    }
    &1.ispc {
      top: 10.83vw;
      right: 1.41vw;
      width: 16.88vw;
      margin-top: 0;

      .shs-media-item {
        width: 8.13vw;
        height: 4.11vw;

        &:last-of-type {
          width: 100%;
          height: 7.76vw;
          margin-top: 0.62vw;
        }
      }
    }
  }
}
.shs-text {
  &-list {
    margin-top: 0;
    &.ispc {
      position: absolute;
      top: 5.21vw;
      left: 1.41vw;
      width: 12.5vw;
      margin-top: 0;
    }
  }
  &-item {
    font-weight: 305;
    margin-bottom: 1.35vw;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
  &-title {
    font-size: 0.83vw;
    line-height: 1.93vw;
    span {
      font-size: 1.4525vw;
    }
  }
  &-desc {
    margin-top: 0.21vw;
    font-size: 0.73vw;
    line-height: 0.99vw;
  }
}
.shs-table {
  width: 25.42vw;
  margin-top: 1.15vw;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  &-tr {
    display: flex;
    &:nth-of-type(1) {
      .shs-table-td {
        padding: 0.52vw 0;
      }
    }
  }
  &-td {
    padding: calc(0.83vw - 1px) 0;
    font-size: 0.73vw;
    line-height: 0.99vw;
    font-weight: 305;
    text-align: center;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-of-type(1) {
      width: 4.95vw;
    }
    &:nth-of-type(2) {
      width: 12.71vw;
    }
    &:nth-of-type(3) {
      flex: 1;
    }
  }
}
.shs-select {
  display: flex;
  position: absolute;
  top: calc(19.06 / 56.25 * 100%);
  right: 16.98vw;
  width: 17.81vw;

  :deep(.el-select) {
    /* width: 17.81vw;
    height: 100%;
    border: none; */

    --el-fill-color-blank: transparent;
    --el-border-radius-base: 4px;
    --el-border-color: rgba(255, 255, 255, 0.45);
    --el-text-color-regular: #fff;
  }
}
@media screen and (max-width: 1023px) {
  .shs-marathon {
    position: relative;
    font-family: "MiSans";
    height: 216.53vw;
    background: none;
    &1 {
      height: 235.2vw;
    }
    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 216.53vw;
      &1 {
        height: 235.2vw;
      }
      img {
        object-fit: fill;
      }
    }
    &-logo {
      position: absolute;
      top: 20vw;
      left: 50%;
      /* transform: translateX(-50%); */
      width: 17.47vw;
      margin-left: -8.735vw;
    }
    &-title {
      position: absolute;
      top: 30.4vw;
      left: 50%;
      /* transform: translateX(-50%); */
      width: 91.47vw;
      margin-left: -45.735vw;
      font-size: 6.4vw;
      line-height: 8.535vw;
      font-weight: 305;
      text-align: center;
    }
    &-tab {
      position: absolute;
      top: 52.8vw;
      left: 50%;
      /* transform: translateX(-50%); */
      display: flex;
      justify-content: space-between;
      width: 30.93vw;
      margin-left: -15.465vw;
      font-size: 2.93vw;
      line-height: 3.87vw;
      font-weight: 330;
      color: #999999;
      .active {
        color: #ffffff;
      }
    }
    &-main {
      position: absolute;
      /* top: 112.67vw; */
      top: 70vw;
      left: 50%;
      width: calc(72.7vw + 2vw);
      margin-left: calc(-36.35vw - 1vw);
      border: 1px solid transparent;
      border-image: linear-gradient(
          208deg,
          rgba(103, 176, 196, 0.45) 5%,
          rgba(255, 255, 255, 0.72) 100%
        )
        100% 100% round;
      border-image-slice: 1;
      /* border-radius: 1.07vw; */
      padding: 3.2vw 3.6vw;
      will-change: transform, opacity;
    }
    &-box {
      position: relative;
      top: 100vw;
      height: 20vw;
    }
    &-page {
      position: relative;
      top: -100vw;
      height: 56.25vw;
    }
  }
  .shs-media {
    &-title {
      font-size: 4.27vw;
      line-height: 5.6vw;
      font-weight: 380;
      text-align: center;

      &1 {
        width: 72.7vw;
        margin-left: -3.6vw;
      }
    }
    &-tip {
      margin-top: 3.2vw;
      font-size: 1.865vw;
      line-height: 4.93vw;
      font-weight: 305;
      span {
        font-size: 3.73vw;
      }
    }
    &-item {
      width: 32vw;
      &:nth-of-type(-n + 2) {
        height: 26.13vw;
        margin-bottom: 1.6vw;
      }
      &:nth-last-type(-n + 2) {
        height: 18.4vw;
      }
    }
    &-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 65.6vw;
      margin: 3.2vw auto 0;
      &1 {
        .shs-media-item {
          height: 16vw;

          &:last-of-type {
            width: 100%;
            height: 29.33vw;
            margin-top: 1.6vw;
          }
        }
      }
    }
  }
  .shs-text {
    &-list {
      margin-top: 3.2vw;
    }
    &-item {
      font-weight: 305;
    }
    &-title {
      font-size: 2.13vw;
      line-height: 4.93vw;
      margin-top: 2.67vw;
      span {
        font-size: 3.7275vw;
      }
    }
    &-desc {
      width: 120%;
      margin-top: 0.53vw;
      font-size: 1.87vw;
      line-height: 2.53vw;
    }
  }
  .shs-table {
    position: relative;
    width: 65.6vw;
    margin-top: 3.2vw;
    border-top: 1px solid transparent;
    border-right: 1px solid transparent;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 200%;
      height: 200%;
      border-top: 1px solid #fff;
      border-right: 1px solid #fff;
      transform-origin: 0 0;
      transform: scale(0.5);
      pointer-events: none;
    }
    &-tr {
      display: flex;
      &:nth-of-type(1) {
        .shs-table-td {
          padding: 1.33vw 0;
        }
      }
    }
    &-td {
      position: relative;
      padding: 2.13vw 0;
      font-size: 1.87vw;
      line-height: 2.53vw;
      text-align: center;
      border-left: 1px solid transparent;
      border-bottom: 1px solid transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 200%;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        transform-origin: 0 0;
        transform: scale(0.5);
        pointer-events: none;
      }

      &:nth-of-type(1) {
        width: 12.67vw;
      }
      &:nth-of-type(2) {
        width: 32.53vw;
      }
      &:nth-of-type(3) {
        flex: 1;
      }
    }
  }
}
</style>
<style lang="scss">
.el-select-dropdown__item {
  width: 100%;
}
</style>
