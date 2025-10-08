<template>
  <div
    class="privacy-container font-[MiSans] text-[0.28rem]/[1.8] lg:text-[0.2rem]/[1.8] font-[330] text-[#666666]"
  >
    <div class="privacy">
      <div class="privacy_con">
        <div class="html-main" v-html="htmlstr"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import useCustomFetch from "~/composables/api/useDollarFetchRequest";
import { useHeaderStore } from "~/stores/useHeader";
const customFetch = useCustomFetch();
const store = useHeaderStore();

var htmlstr = ref("");
const getPrivacyFun = async () => {
  try {
    let res = await customFetch("/jaecoo-omoda/openapi/privacy");
    // console.log("隐私政策", res);
    htmlstr.value = res.content;
  } catch (error) {
    // console.log(error);
  }
};
const goback = () => {
  window.history.go(-1);
};
onMounted(() => {
  getPrivacyFun();
});
</script>
<style lang="scss">
.privacy-container {
  width: 100%;
  height: 100%;
  background: #fff;

  .html-main {
    span {
      font-family: MiSans !important;
      font-weight: 330;
    }
    p:nth-of-type(1) {
      text-align: left !important;
      font-size: 0.32rem;
      line-height: 0.42rem;
      color: #222;
    }

    p:nth-of-type(5),
    p:nth-of-type(24),
    p:nth-of-type(27),
    p:nth-of-type(34),
    p:nth-of-type(41),
    p:nth-of-type(45),
    p:nth-of-type(71),
    p:nth-of-type(74),
    p:nth-of-type(77),
    p:nth-of-type(80),
    p:nth-of-type(85) {
      margin-top: 0.24rem;
    }
    strong {
      font-weight: 520 !important;
      margin-top: 0.24rem;
    }

    table {
      width: 100%;
      text-align: center;
      margin-top: 0.24rem;
      margin-bottom: 0.24rem;
    }
    table thead {
      background: #f2f2f2;
    }
    table td {
      border: 1px solid #e5e5e5;
      padding: 0.24rem;
      font-size: 0.16rem;
      line-height: 0.24rem;
      font-weight: 305;
    }
    table tr:first-of-type {
      background: #f2f2f2;
    }
    table tr:first-of-type td {
      padding: 0.14rem 0.24rem;
    }
  }
}
.privacy-container .privacy .privacy_con {
  width: calc(1440 / 19.2 * 1vw);
  margin: 0 auto;
  padding-top: calc(162 / 19.2 * 1vw);
}

@media screen and (max-width: 1023px) {
  .privacy-container .privacy .privacy_con {
    width: calc(686 / 7.5 * 1vw);
    padding-top: calc(256 / 7.5 * 1vw);
  }
  .privacy-container {
    .html-main {
      p:nth-of-type(1) {
        font-size: 0.48rem;
        line-height: 0.64rem;
      }

      p:nth-of-type(5),
      p:nth-of-type(24),
      p:nth-of-type(27),
      p:nth-of-type(34),
      p:nth-of-type(41),
      p:nth-of-type(45),
      p:nth-of-type(71),
      p:nth-of-type(74),
      p:nth-of-type(77),
      p:nth-of-type(80),
      p:nth-of-type(85) {
        margin-top: 0.32rem;
      }
      strong {
        margin-top: 0.32rem;
      }

      table {
        margin-top: 0.32rem;
        margin-bottom: 0.32rem;
      }
    }
  }
  .privacy-container .html-main table td {
    font-size: 0.24rem;
  }
}
</style>
