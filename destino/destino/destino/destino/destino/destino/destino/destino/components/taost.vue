<template>
  <div class="toast-main" :class="show ? 'showtoast' : 'hidetoast'">
    <img
      loading="lazy"
      v-if="icontype == 'success'"
      src="/images/success_icon.webp"
      class="icon"
    />
    <img
      loading="lazy"
      v-if="icontype == 'error'"
      src="/images/error_icon.webp"
      class="icon"
    />
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  msg: {
    type: String,
    default: "",
  },
  icontype: {
    type: String,
    default: "normal",
  },
});
</script>

<style scoped>
.toast-main {
  width: auto;
  min-height: 2rem;
  min-height: calc(2 * 16 / 19.2 * 1vw);
  background-color: #fff;
  box-shadow: #000000b6 0 0 0.5rem;
  box-shadow: #000000b6 0 0 calc(0.5 * 16 / 19.2 * 1vw);
  /* backdrop-filter: blur(5px); */
  border-radius: 0.6rem;
  border-radius: calc(0.6 * 16 / 19.2 * 1vw);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-family: "SourceHanSansSC-Light";
  z-index: 99999;
  color: #000;
  font-size: 1.1rem;
  font-size: calc(1.1 * 16 / 19.2 * 1vw);
  padding: 0.5rem 1.2rem;
  padding: calc(0.5 * 16 / 19.2 * 1vw) calc(1.2 * 16 / 19.2 * 1vw);
  transition: 0.5s;
  display: flex;
  align-items: center;
}

.toast-main .icon {
  width: 1.3rem;
  width: calc(1.3 * 16 / 19.2 * 1vw);
  height: auto;
  margin-right: 0.6rem;
  margin-right: calc(0.6 * 16 / 19.2 * 1vw);
}

.showtoast {
  top: 50%;
  left: 50%;
  transform: scale(1.3) translateX(-50%) translateY(-50%);
  opacity: 1;
  visibility: visible;
}

.hidetoast {
  top: 70%;
  left: 50%;
  transform: scale(0.2) translateX(-50%) translateY(100%);
  opacity: 0;
  visibility: hidden;
}

@media (max-width: 1024px) {
  .toast-main {
    width: auto;
    min-height: 2rem;
    min-height: calc(2 * 16 / 3.75 * 1vw);
    min-width: 60%;
    text-align: center;
    background-color: #fff;
    box-shadow: #000000b6 0 0 0.5rem;
    box-shadow: #000000b6 0 0 calc(0.5 * 16 / 3.75 * 1vw);
    /* backdrop-filter: blur(5px); */
    border-radius: 0.5rem;
    border-radius: calc(0.5 * 16 / 3.75 * 1vw);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 99999;
    color: #000;
    font-size: 0.9rem;
    font-size: calc(0.9 * 16 / 3.75 * 1vw);
    padding: 0.5rem 0.8rem;
    padding: calc(0.5 * 16 / 3.75 * 1vw) calc(0.8 * 16 / 3.75 * 1vw);
    transition: 0.5s;
  }
}
</style>
