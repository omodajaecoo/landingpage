<template>
  <div>
    <div class="fcontainer" v-if="showAgree">
      <div
        class="d-mask agree"
        :style="showAgree ? 'display: block' : 'display: none'"
      >
        <div v-if="showDflag == ''" class="privacy">
          <div class="privacy-close" @click="showAgree = false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="none"
              version="1.1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g>
                <g>
                  <g
                    transform="matrix(0.7071067690849304,0.7071067690849304,-0.7071067690849304,0.7071067690849304,4.755564281290731,-2.602522034414619)"
                  >
                    <path
                      d="M25.381904275512696,5.189212799072266C25.381904275512696,5.603242799072266,25.046404275512696,5.938962799072265,24.632404275512695,5.939212799072266L24.632404275512695,5.939212799072266L6.270005275512696,5.950392799072265L6.270005275512696,5.950392799072265L6.269304275512695,5.950392799072265C5.855090275512695,5.950392799072265,5.519304275512695,5.614612799072265,5.519304275512695,5.200393799072265C5.519304275512695,4.786358799072266,5.854812275512695,4.450646499072266,6.268847275512695,4.450394399072265L6.268847275512695,4.450394399072265L24.631104275512694,4.439213275909266L24.631104275512694,4.439213275909266L24.631904275512696,4.439212799072266C25.046104275512697,4.439212799072266,25.381904275512696,4.774998799072265,25.381904275512696,5.189212799072266Z"
                      fill-rule="evenodd"
                      fill="#000000"
                      fill-opacity="1"
                    />
                  </g>
                  <g
                    transform="matrix(0.7071067690849304,-0.7071067690849304,0.7071067690849304,0.7071067690849304,-11.774989673269488,8.55655408215955)"
                  >
                    <path
                      d="M24.303779275512696,19.241947174072266C24.303779275512696,19.655977174072266,23.968279275512696,19.991697174072264,23.554279275512695,19.991947174072266L23.554279275512695,19.991947174072266L5.191880275512696,20.003127174072265L5.191880275512696,20.003127174072265L5.191179275512695,20.003127174072265C4.776965275512695,20.003127174072265,4.441179275512695,19.667347174072265,4.441179275512695,19.253128174072266C4.441179275512695,18.839093174072264,4.776687275512695,18.503380874072267,5.190722275512695,18.503128774072266L5.190722275512695,18.503128774072266L23.552979275512694,18.491947650909264L23.552979275512694,18.491947650909264L23.553779275512696,18.491947174072266C23.967979275512697,18.491947174072266,24.303779275512696,18.827733174072264,24.303779275512696,19.241947174072266Z"
                      fill-rule="evenodd"
                      fill="#000000"
                      fill-opacity="1"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="privacy-con">
            <p>Privacy Preference Center</p>
            <p>
              We place cookies in order to make sure our website works properly
              and to improve your browsing experience, to streamline and
              personalize our marketing content and to show you personalized
              advertisements (including on third party websites). We sometimes
              share cookie data with our partners for these purposes. Our
              cookies remember your settings and the data you fill out on forms
              on our website and analyse traffic to our website. Our cookies
              also register how you found us and collect information about your
              browsing habits.
              <br />
              You can read more about our use of cookies in our
              <nuxt-link to="/cookieNotice" targt="_blank" class="privacy-btn"
                >Cookie Notice</nuxt-link
              >.
            </p>
            <div class="privacy_btn">
              <a
                href="javascript:"
                class="set_up"
                @click="changeShowDflag('Analytics')"
                >COOKIE SETTINGS</a
              >
              <div class="btns">
                <a href="javascript:" class="privacy_agree" @click="closeAgree"
                  >REJECT ALL</a
                >
                <a
                  href="javascript:"
                  class="privacy_agree"
                  @click="changeAgree(false)"
                  >ACCEPT ALL</a
                >
              </div>
            </div>
          </div>
        </div>
        <div v-if="showDflag == 'Analytics'" class="privacy privacy-scroll">
          <div class="privacy-close" @click="changeShowDflag('')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="none"
              version="1.1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g>
                <g>
                  <g
                    transform="matrix(0.7071067690849304,0.7071067690849304,-0.7071067690849304,0.7071067690849304,4.755564281290731,-2.602522034414619)"
                  >
                    <path
                      d="M25.381904275512696,5.189212799072266C25.381904275512696,5.603242799072266,25.046404275512696,5.938962799072265,24.632404275512695,5.939212799072266L24.632404275512695,5.939212799072266L6.270005275512696,5.950392799072265L6.270005275512696,5.950392799072265L6.269304275512695,5.950392799072265C5.855090275512695,5.950392799072265,5.519304275512695,5.614612799072265,5.519304275512695,5.200393799072265C5.519304275512695,4.786358799072266,5.854812275512695,4.450646499072266,6.268847275512695,4.450394399072265L6.268847275512695,4.450394399072265L24.631104275512694,4.439213275909266L24.631104275512694,4.439213275909266L24.631904275512696,4.439212799072266C25.046104275512697,4.439212799072266,25.381904275512696,4.774998799072265,25.381904275512696,5.189212799072266Z"
                      fill-rule="evenodd"
                      fill="#000000"
                      fill-opacity="1"
                    />
                  </g>
                  <g
                    transform="matrix(0.7071067690849304,-0.7071067690849304,0.7071067690849304,0.7071067690849304,-11.774989673269488,8.55655408215955)"
                  >
                    <path
                      d="M24.303779275512696,19.241947174072266C24.303779275512696,19.655977174072266,23.968279275512696,19.991697174072264,23.554279275512695,19.991947174072266L23.554279275512695,19.991947174072266L5.191880275512696,20.003127174072265L5.191880275512696,20.003127174072265L5.191179275512695,20.003127174072265C4.776965275512695,20.003127174072265,4.441179275512695,19.667347174072265,4.441179275512695,19.253128174072266C4.441179275512695,18.839093174072264,4.776687275512695,18.503380874072267,5.190722275512695,18.503128774072266L5.190722275512695,18.503128774072266L23.552979275512694,18.491947650909264L23.552979275512694,18.491947650909264L23.553779275512696,18.491947174072266C23.967979275512697,18.491947174072266,24.303779275512696,18.827733174072264,24.303779275512696,19.241947174072266Z"
                      fill-rule="evenodd"
                      fill="#000000"
                      fill-opacity="1"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="privacy-con">
            <p>Cookie Settings</p>
            <label class="flex gap-[0.16rem] items-center mt-[0.26rem]">
              <div class="sign_con">
                <BaseImg :src="'/check_0.png'" class="h-full w-full" />
              </div>
              <span>Strictly Necessary Cookies</span>
            </label>
            <p class="mt-[0.2rem]">
              These cookies are used to ensure that our website operates
              correctly and they cannot be deactivated.
            </p>
            <p class="mt-[0.2rem]">
              Strictly necessary cookies are necessary for the proper
              functioning of our website and to help you access and move around
              our site and use all its features. We also use functional cookies,
              for example to remember your language preferences to save you the
              trouble of having to change these every time you enter our
              website. Without these cookies, our website would not work
              properly and you would not be able to use certain important
              features.
            </p>
            <table border="1" class="mt-[0.2rem]">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Domain</td>
                  <td>Purpose</td>
                  <td>Lifetime</td>
                  <td>Technique</td>
                </tr>
                <tr>
                  <td>cookies</td>
                  <td>.omodajaecoo.com</td>
                  <td>Records the user's selected cookies</td>
                  <td>The duration of six months.</td>
                  <td>Interational website of<br />OMODA&JAECOO</td>
                </tr>
              </tbody>
            </table>
            <label class="flex gap-[0.16rem] items-center mt-[0.4rem]">
              <div
                class="parent_not"
                :class="chooseStatistics ? '' : 'sign_not'"
                @click="changeOtherChoose('chooseStatistics')"
              >
                <BaseImg
                  v-if="chooseStatistics"
                  :src="'/check_1.png'"
                  class="h-full w-auto"
                />
              </div>
              <span>Analytics Cookies</span>
            </label>
            <p class="mt-[0.2rem]">
              We use analytics cookies to improve the quality of our website and
              its content, and to ensure that our partners’ embedded services
              work properly.
            </p>
            <p class="mt-[0.2rem]">
              We use Google Analytics to place and read cookies for the
              abovementioned use. We have changed our Google Analytics settings
              to further protect your privacy. For example, we have made sure
              that the last octet of your IP-address is invisible and have
              turned off the setting which allows sharing data with Google. We
              are also not using any other Google Analytics related cookie
              services which are offered by Google.
            </p>
            <table border="1" class="mt-[0.2rem]">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Domain</td>
                  <td>Purpose</td>
                  <td>Lifetime</td>
                  <td>Technique</td>
                </tr>
                <tr>
                  <td>_ga</td>
                  <td>.omodajaecoo.com</td>
                  <td>
                    The analysis of cookies is conducted to<br />enhance the quality
                    of the website.
                  </td>
                  <td>The duration is one month.</td>
                  <td>Google Analytics</td>
                </tr>
                <tr>
                  <td>_ga_xxx</td>
                  <td>.omodajaecoo.com</td>
                  <td>
                    The analysis of cookies is conducted to<br />enhance the quality
                    of the website.
                  </td>
                  <td>The duration is one month.</td>
                  <td>Google Analytics</td>
                </tr>
              </tbody>
            </table>
            <div class="privacy_btn">
              <div></div>
              <div class="btns">
                <a
                  href="javascript:"
                  class="set_up"
                  @click="changeAgree(false, 'save')"
                  >SAVE SETTINGS</a
                >
                <a href="javascript:" class="set_up" @click="changeAgree(false)"
                  >ACCEPT ALL</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from "vue";
import { useRoute } from "vue-router";
import { useCookie } from "nuxt/app";
import type { Ref } from "vue";
import { showCookies } from "@/composables/state";
import { useFooterStore } from "~/stores/useFooter";
// const props = defineProps({
//   show: {
//     type: Boolean,
//     default: false,
//   },
// });
// 获取当前日期和时间
const currentDate = new Date();
// 将当前日期和时间转换为毫秒数
let milliseconds = currentDate.getTime();
// 添加半年的毫秒数
milliseconds += 6 * 30 * 24 * 60 * 60 * 1000; // 每个月有30天，每天有24小时，每小时有60分钟，每分钟有60秒，每秒有1000毫秒
// 创建一个新的Date对象，表示半年后的日期和时间
const futureDate = new Date(milliseconds);

const store = useFooterStore();

const showAgree: Ref<boolean> = ref(showCookies().value);
let isAgree: boolean = Boolean(useCookie("cookies").value);
const showCookies1: Ref<boolean> = ref(false);
const showCookies2: Ref<boolean> = ref(false);
const showCookies3: Ref<boolean> = ref(false);
function changeShowCookies(no: number) {
  switch (no) {
    case 1:
      showCookies1.value = !showCookies1.value;
      break;
    case 2:
      showCookies2.value = !showCookies2.value;
      break;
    case 3:
      showCookies3.value = !showCookies3.value;
      break;
  }
}

const showDflag: Ref<string> = ref("");
function changeShowDflag(txt: string) {
  showDflag.value = txt;
}
const jeacooCookies: Record<string, boolean> = useCookie("cookies")
  .value as unknown as Record<string, boolean>;
const chooseStatistics: Ref<boolean> = ref(false);
const choosePerformance: Ref<boolean> = ref(false);
const chooseBing: Ref<boolean> = ref(false);
const chooseHuanxin: Ref<boolean> = ref(false);
function changeOtherChoose(txt: string) {
  switch (txt) {
    case "chooseStatistics":
      chooseStatistics.value = !chooseStatistics.value;
      break;
    case "chooseBing":
      chooseBing.value = !chooseBing.value;
      if (chooseBing.value == true && chooseHuanxin.value == true) {
        choosePerformance.value = true;
      } else if (chooseBing.value == false && chooseHuanxin.value == false) {
        choosePerformance.value = false;
      } else {
        choosePerformance.value = false;
      }
      break;
    case "chooseHuanxin":
      chooseHuanxin.value = !chooseHuanxin.value;
      if (chooseBing.value == true && chooseHuanxin.value == true) {
        choosePerformance.value = true;
      } else if (chooseBing.value == false && chooseHuanxin.value == false) {
        choosePerformance.value = false;
      } else {
        choosePerformance.value = false;
      }
      break;
    case "choosePerformance":
      choosePerformance.value = !choosePerformance.value;
      if (choosePerformance.value) {
        chooseBing.value = true;
        chooseHuanxin.value = true;
      } else {
        chooseBing.value = false;
        chooseHuanxin.value = false;
      }

      break;
  }
}
function checkDuplicateScripts(fileurl: string | null) {
  const scriptElements = document.querySelectorAll("script");
  for (const key in scriptElements) {
    if (typeof scriptElements[key] == "object") {
      if (scriptElements[key].getAttribute("src") == fileurl) {
        return true;
      }
    }
  }
  return false;
}
function closeAgree() {
  showCookies().value = false;
  showAgree.value = false;
  isAgree = true;
  chooseStatistics.value = false;
  useCookie("cookies", { expires: futureDate }).value = {
    google: false,
  };
}
function changeAgree(status: boolean, type?: string) {
  showAgree.value = status;
  showCookies().value = status;
  if (status == false && type != "save") {
    isAgree = true;
    chooseStatistics.value = true;
    useCookie("cookies", { expires: futureDate }).value = {
      google: true,
    };
  } else if (status == false && type == "save") {
    isAgree = true;
    useCookie("cookies", { expires: futureDate }).value = {
      google: chooseStatistics.value,
    };
  }
  if (type == "save" && !chooseStatistics.value) {
    return false;
  }
  const haveThisUrl = checkDuplicateScripts(
    "https://www.googletagmanager.com/gtag/js?id=G-652S58106P"
  );
  if (!haveThisUrl && window.location.host.indexOf("127.0.0.1") == -1) {
    const script = document.createElement("script");
    const script2 = document.createElement("script");
    script.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);

          }
          gtag("js", new Date());
          gtag("config", "G-652S58106P");
      `;
    script2.src = "https://www.googletagmanager.com/gtag/js?id=G-652S58106P";
    script2.async = true;
    document.body.appendChild(script2);
    script2.onload = function () {
      document.body.appendChild(script);
    };
  }
}
const route = useRoute();
const cur_url = route.path;
watch(
  () => route.path,
  (path) => {
    const cookie = useCookie("cookies").value;
    if (
      path == "/cookieNotice" ||
      path == "/legalNotice" ||
      path == "/PrivacyStatement"
    ) {
      showAgree.value = false;
    } else {
      if (!cookie) {
        showAgree.value = true;
      }
    }
  }
);
watch(
  () => store.showCookie,
  (show) => {
    if (show && !showAgree.value) {
      showAgree.value = true;
    }
  }
);
watch(
  () => showAgree.value,
  (show) => {
    if (!show && store.showCookie) {
      store.setShowCookie(false);
    }
  }
);
onMounted(() => {
  nextTick(() => {
    const haveThisUrl = checkDuplicateScripts(
      "https://www.googletagmanager.com/gtag/js?id=-"
    );
    if (!isAgree) {
      if (
        cur_url != "/cookieNotice" &&
        cur_url != "/legalNotice" &&
        cur_url != "/PrivacyStatement"
      ) {
        showAgree.value = true;
      }
    } else {
      if (!haveThisUrl && jeacooCookies.google != false) {
        const script_asy = document.createElement("script");
        const script = document.createElement("script");
        script_asy.src =
          "https://www.googletagmanager.com/gtag/js?id=G-652S58106P";
        script_asy.async = true;
        script.innerHTML = `
         window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);

          }
          gtag("js", new Date());
          gtag("config", "G-652S58106P");
      `;
        document.body.appendChild(script_asy);
        document.body.appendChild(script);
      }
    }
  });

  if (jeacooCookies != undefined) {
    chooseStatistics.value = jeacooCookies.google || false;
    if (jeacooCookies.huaxin == true && jeacooCookies.bing == true) {
      choosePerformance.value = true;
    }
    chooseBing.value = jeacooCookies.bing || false;
    chooseHuanxin.value = jeacooCookies.huaxin || false;
  }
  document.body.addEventListener(
    "click",
    function (event: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      target: any;
      srcElement: unknown;
      preventDefault: unknown;
    }) {
      const target = event.target || event.srcElement; // 兼容处理
      if (target.nodeName.toLocaleLowerCase() === "a") {
        // 判断是否匹配目标元素
        if (event.preventDefault) {
          // 对捕获到的 a 标签进行处理
          if (target.href != "javascript:") {
            showCookies().value = false;
          }
        }
      }
    }.bind(this)
  );
});
</script>

<style scoped>
li {
  display: block;
}

.fcontainer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
}

.agree {
  z-index: 9;
  position: fixed;
  display: none;
}

.agree .privacy {
  position: absolute;
  left: 0;
  right: 0;
  bottom: calc(60 / 1920 * 100vw);
  width: calc(1800 / 1920 * 100vw);
  /* max-height: calc(292 / 1920 * 100vw); */
  padding: calc(32 / 1920 * 100vw);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  box-sizing: border-box;
  margin: auto;
  overflow-y: auto;
  color: #3d3d3d;
}

.agree .privacy .privacy-close {
  position: absolute;
  top: 0.32rem;
  right: 0.32rem;
  width: 0.24rem;
  height: 0.24rem;
  cursor: pointer;
}

.agree .privacy .privacy-con {
  width: 100%;
  font-family: "MiSans";
  font-weight: 305;
  font-size: 0.16rem;
  line-height: 1.5;
}

.agree .privacy .privacy-con p:first-child {
  font-size: 0.2rem;
  line-height: 1.4;
  font-weight: 330;
}

.agree .privacy .privacy-con p:nth-child(2) {
  margin-top: 0.16rem;
}

.agree .privacy .privacy-con .privacy_btn {
  width: 100%;
  text-align: right;
  margin-top: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.agree .privacy .privacy-con .privacy_btn .btns {
  display: flex;
  align-items: center;
}

.agree .privacy .privacy-con .privacy_btn a {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  color: #fff;
  width: 2.98rem;
  height: 0.48rem;
  border: 1px solid #1a1a1a;
}

.agree .privacy .privacy-con .privacy_btn a.set_up {
  color: #1a1a1a;
  background-color: transparent;
}

.agree .privacy .privacy-con .privacy_btn a {
  font-size: 0.14rem;
  margin-right: 0.24rem;
}

.agree .privacy .privacy-con .privacy_btn a:last-of-type {
  margin-right: 0;
}

.agree .privacy .privacy-con .privacy-btn {
  text-decoration: underline;
  color: #000;
}

.agree table {
  width: 100%;
  height: auto;
  border-collapse: collapse;
  text-align: center;
  line-height: 1.5;
  table-layout: fixed;
}

.agree table * {
  height: auto;
  word-break: break-all;
  padding: 0.16rem 0.24rem;
  box-sizing: border-box;
}

.agree table td {
  border-width: 1px;
  border-color: #808080;
}

.sign_con,
.parent_not {
  width: 0.2rem;
  height: 0.2rem;
}

.parent_not {
  cursor: pointer;
}

.sign_not {
  border-radius: 0.04rem;
  border: 1px solid #bfbfbf;
}

.privacy-scroll {
  max-height: 4.5rem;
}

.d-cover,
.d-mask {
  height: 100%;
  left: 0;
  width: 100%;
  top: 0;
}

.d-mask {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
}

@media (max-width: 1024px) {
  .agree .privacy {
    width: 100%;
    bottom: 0;
    /* max-height: 6.54rem; */
    padding: 0.48rem 0.4rem;
  }
  .privacy-scroll {
    max-height: 9.09rem;
  }
  .agree .privacy .privacy-close {
    width: 0.4rem;
    height: 0.4rem;
  }
  .agree .privacy .privacy-con {
    font-weight: 305;
  }
  .privacy-con p,
  .privacy-con span {
    font-size: 0.24rem;
  }
  .agree .privacy .privacy-con p:first-child {
    font-size: 0.28rem;
    line-height: 0.38rem;
    text-align: center;
    color: #222222;
  }
  .agree .privacy .privacy-con p:nth-child(2) {
    margin-top: 0.2rem;
    color: #3d3d3d;
  }
  .agree .privacy .privacy-con .privacy_btn {
    display: block;
    margin-top: 0.32rem;
  }
  .agree .privacy .privacy-con .privacy_btn .btns {
    display: block;
  }
  .agree .privacy .privacy-con .privacy_btn a {
    width: 100%;
    height: 0.65rem;
    margin-bottom: 0.32rem;
    font-size: 0.28rem;
  }
  .agree table * {
    font-size: 0.24rem;
    padding: 0.08rem 0.12rem;
  }
}
</style>
