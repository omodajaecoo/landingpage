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
          <div class="privacy-con text-justify">
            <p>Centro de preferencias de Privacidad</p>
            <p>
                Colocamos cookies para asegurarnos de que nuestro sitio web funcione correctamente
                y para mejorar su experiencia de navegación, para optimizar y
                personalizar nuestro contenido de marketing y para mostrarle
                anuncios personalizados (incluso en sitios web de terceros). A veces
                compartimos datos de cookies con nuestros socios para estos fines. Nuestras
                cookies recuerdan su configuración y los datos que completa en formularios
                en nuestro sitio web y analizan el tráfico a nuestro sitio web. Nuestras cookies
                también registran cómo nos encontró y recopilan información sobre sus
                hábitos de navegación.
              <br />
              
              Puede leer más sobre nuestro uso de cookies en nuestro
              <nuxt-link to="/cookieNotice" target="_blank" class="privacy-btn"
                >Aviso de cookies</nuxt-link
              >.
            </p>
            <div class="privacy_btn">
              <a
                href="javascript:"
                class="set_up"
                @click="changeShowDflag('Analytics')"
                >CONFIGURACIÓN DE COOKIES</a
              >
              <div class="btns">
                <a href="javascript:" class="privacy_agree" @click="closeAgree"
                  >RECHAZAR TODO</a
                >
                <a
                  href="javascript:"
                  class="privacy_agree"
                  @click="changeAgree(false)"
                  >ACEPTAR TODO</a
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
            <p>Centro de Preferencias de Cookies</p>
            <label class="flex gap-[0.16rem] items-center mt-[0.26rem]">
              <div class="sign_con">
                <BaseImg :src="'/common/check_no.webp'" class="h-full w-full" />
              </div>
              <span>Cookies estrictamente necesarias</span>
            </label>
            <p class="mt-[0.2rem] text-justify">
              Estas cookies se utilizan para garantizar que nuestro sitio web funcione
              correctamente y no se pueden desactivar.
            </p>
            <p class="mt-[0.2rem] text-justify">
              
              Las cookies estrictamente necesarias son necesarias para el correcto
              funcionamiento de nuestro sitio web y para ayudarle a acceder y moverse
              por nuestro sitio y utilizar todas sus funciones. También utilizamos cookies funcionales,
              por ejemplo, para recordar sus preferencias de idioma y evitar que tenga que cambiarlas cada vez que ingrese a nuestro
              sitio web. Sin estas cookies, nuestro sitio web no funcionaría
              correctamente y no podría utilizar ciertas funciones importantes.
            </p>
            <table border="1" class="mt-[0.2rem]">
              <tbody>
                <tr>
                  <td>Nombre</td>
                  <td>Dominio</td>
                  <td>Propósito</td>
                  <td>Duración</td>
                  <td>Técnica</td>
                </tr>
                <tr>
                  <td>cookies</td>
                  <td>.omodajaecoo.ec</td>
                  <td>Registra las cookies seleccionadas por el usuario</td>
                  <td>La duración es de seis meses.</td>
                  <td>Sitio web en Ecuador de<br />OMODA&JAECOO</td>
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
                  :src="'/common/check_yes.webp'"
                  class="h-full w-auto"
                />
              </div>
              <span>Cookies de Análisis</span>
            </label>
            <p class="mt-[0.2rem] text-justify">
              Utilizamos cookies de análisis para mejorar la calidad de nuestro sitio web y
              su contenido, y para garantizar que los servicios integrados de nuestros socios
              funcionen correctamente.
            </p>
            <p class="mt-[0.2rem] text-justify">
              Utilizamos Google Analytics para colocar y leer cookies para el
              uso mencionado anteriormente. Hemos cambiado la configuración de Google Analytics
              para proteger aún más su privacidad. Por ejemplo, nos hemos asegurado de que
              que el último octeto de su dirección IP sea invisible y hemos
              desactivado la configuración que permite compartir datos con Google. También
              no estamos utilizando ningún otro servicio de cookies relacionado con Google Analytics
              que sea ofrecido por Google.
            </p>
            <table border="1" class="mt-[0.2rem]">
              <tbody>
                <tr>
                  <td>Nombre</td>
                  <td>Dominio</td>
                  <td>Propósito</td>
                  <td>Duración</td>
                  <td>Técnica</td>
                </tr>
                <tr>
                  <td>_ga</td>
                  <td>.omodajaecoo.ec</td>
                  <td>
                    El analisis de cookies es realizado para<br />mejorar la calidad
                    del sitio web.
                  </td>
                  <td>La duración es de un mes.</td>
                  <td>Google Analytics</td>
                </tr>
                <tr>
                  <td>_ga_xxx</td>
                  <td>.omodajaecoo.ec</td>
                  <td>
                    El analisis de cookies es realizado para<br />mejorar la calidad
                    del sitio web.
                  </td>
                  <td>La duración es de un mes.</td>
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
                  >GUARDAR CONFIGURACIÓN</a
                >
                <a href="javascript:" class="set_up" @click="changeAgree(false)"
                  >ACEPTAR TODO</a
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
import { useCookie, useRuntimeConfig } from "nuxt/app";
import type { Ref } from "vue";
import { showCookies } from "@/composables/state";
import { useFooterStore } from "~/stores/useFooter";

const config = useRuntimeConfig();
const gtagId = config.public.gtagId as string;
const gtmId = config.public.gtmId as string;

const currentDate = new Date();
let milliseconds = currentDate.getTime();
milliseconds += 6 * 30 * 24 * 60 * 60 * 1000;
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

function getGtagUrl() {
  return `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
}

function getGtagScript() {
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "${gtagId}");
  `;
}

function getGTMHeadScript() {
  return `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`;
}

function loadGTM() {
  // Cargar GTM en el head
  if (!document.querySelector(`script[data-gtm-head="${gtmId}"]`)) {
    const gtmHeadScript = document.createElement("script");
    gtmHeadScript.setAttribute("data-gtm-head", gtmId);
    gtmHeadScript.innerHTML = getGTMHeadScript();
    document.head.appendChild(gtmHeadScript);
  }

  // Cargar GTM noscript en el body
  if (!document.querySelector(`noscript[data-gtm-noscript="${gtmId}"]`)) {
    const gtmNoScript = document.createElement("noscript");
    gtmNoScript.setAttribute("data-gtm-noscript", gtmId);
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";
    gtmNoScript.appendChild(iframe);
    document.body.insertBefore(gtmNoScript, document.body.firstChild);
  }
}

function closeAgree() {
  showCookies().value = false;
  showAgree.value = false;
  isAgree = true;
  chooseStatistics.value = false;
  useCookie<Record<string, boolean>>("cookies", { expires: futureDate }).value = {
    google: false,
  };
}
function changeAgree(status: boolean, type?: string) {
  showAgree.value = status;
  showCookies().value = status;
  if (status == false && type != "save") {
    isAgree = true;
    chooseStatistics.value = true;
    useCookie<Record<string, boolean>>("cookies", { expires: futureDate }).value = {
      google: true,
    };
  } else if (status == false && type == "save") {
    isAgree = true;
    useCookie<Record<string, boolean>>("cookies", { expires: futureDate }).value = {
      google: chooseStatistics.value,
    };
  }
  if (type == "save" && !chooseStatistics.value) {
    return false;
  }
  
  // Cargar Google Analytics
  const haveThisUrl = checkDuplicateScripts(getGtagUrl());
  if (!haveThisUrl && window.location.host.indexOf("127.0.0.1") == -1) {
    const script = document.createElement("script");
    const script2 = document.createElement("script");
    script.innerHTML = getGtagScript();
    script2.src = getGtagUrl();
    script2.async = true;
    document.body.appendChild(script2);
    script2.onload = function () {
      document.body.appendChild(script);
    };
  }

  // Cargar Google Tag Manager
  const isLocalhost = window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1' ||
                     window.location.hostname.startsWith('192.168.');
  
  if (!isLocalhost) {
    loadGTM();
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
    const haveThisUrl = checkDuplicateScripts(getGtagUrl());
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
        // Cargar Google Analytics
        const script_asy = document.createElement("script");
        const script = document.createElement("script");
        script_asy.src = getGtagUrl();
        script_asy.async = true;
        script.innerHTML = getGtagScript();
        document.body.appendChild(script_asy);
        document.body.appendChild(script);

        // Cargar Google Tag Manager
        loadGTM();
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
      const target = event.target || event.srcElement;
      if (target.nodeName.toLocaleLowerCase() === "a") {
        if (event.preventDefault) {
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
  font-size: 16px;
  line-height: 1.5;
}

.agree .privacy .privacy-con p:first-child {
  font-size: 20px;
  line-height: 1.4;
  font-weight: 550;
}
.agree .privacy .privacy-con span {
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
}

.agree .privacy .privacy-con p:nth-child(2) {
  margin-top: 0.16rem;
}

.agree .privacy .privacy-con .privacy_btn {
  width: 100%;
  margin-top: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.24rem;
}

.agree .privacy .privacy-con .privacy_btn .btns {
  display: flex;
  justify-content: end;
  text-align: center;
  width: 100%;
  gap: 0.24rem;
}

.agree .privacy .privacy-con .privacy_btn a {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  color: #fff;
  width: 100%;
  max-width: 250px;
  padding: 8px 0px;
  border: 1px solid #1a1a1a;
}

.agree .privacy .privacy-con .privacy_btn a.set_up {
  color: #1a1a1a;
  background-color: transparent;
  max-width: 300px;
}

.agree .privacy .privacy-con .privacy_btn a {
  font-size: 16px;
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
  word-break: break-word;
  padding: 0.16rem 0.24rem;
  box-sizing: border-box;
}

.agree table td {
  border-width: 1px;
  border-color: #808080;
}

.sign_con,
.parent_not {
  width: 17px;
  height: 17px;
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

@media (max-width: 720px) {
  .agree .privacy {
    width: 100%;
    max-height: 75%;
    bottom: 0;
    padding: 0.48rem 0.4rem;
  }

  .agree .privacy .privacy-close {
    width: 0.4rem;
    height: 0.4rem;
  }
  .agree .privacy .privacy-con {
    font-weight: 320;
  }
  .privacy-con p,
  .privacy-con span {
    font-size: 14px;
  }
  .agree .privacy .privacy-con p:first-child {
    font-size: 18px;
    font-weight: 500;
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
    max-width: none;
    margin-bottom: 0.32rem;
    font-size: 14px;
  }
   .agree .privacy .privacy-con .privacy_btn a.set_up {
    max-width: none;
  }
  .agree table * {
    font-size: 12px;
    padding: 0.08rem 0.12rem;
  }
}
</style>
