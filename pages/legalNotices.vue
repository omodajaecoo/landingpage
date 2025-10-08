<template>
  <div>
    <div class="legalNotices">
      <!-- <div class="bgmask"></div> -->
      <section class="cti-privacy">
        <div class="privacy">
          <!--<div class="close">-->
          <!--<span class="iconfont iconclose1"></span>-->
          <!--</div>-->
          <div class="privacy_con">
            <div class="title">
              <p>Legal Notice</p>
              <img loading="lazy" src="/images/goback.webp" @click="goback" class="back" alt="goback" />
            </div>
            <div class="html-main" v-html="htmlstr"></div>
            <!-- <div class="con">
              <p>1. Service Terms and Legal Disclaimer</p>
              <p class="first">
                CHERY as well as its affiliates and subsidiaries around the globe
                (hereinafter referred to as "CHERY" for short) would like to thank you for
                visiting CHERY's products and global website (www.omodajaecoo.com)
                (hereinafter referred to as this "Website" for short).
              </p>
            </div>
            <div class="con">
              <p>2. Note</p>
              <p class="first">
                This Service Terms and Legal Disclaimer (hereinafter referred to as the
                "Disclaimer" for short) applies to all the users visiting this Website as
                well as all the information, suggestions and/or services provided for you
                through this Website. Please read through the Disclaimer carefully before
                using this Website. If you do not consent to any term in the Disclaimer,
                please stop using this Website. Your use of/access to this Website shall
                be deemed as you have understood and completely consented to all terms in
                the Disclaimer, including any revision to the Disclaimer by this Website.
                CHERY might modify these terms at any time, and the modified terms will
                take effect immediately after they are released. For behaviors violating
                these terms, CHERY shall have the right to take remedial measures,
                including legal actions.
              </p>
            </div>
            <div class="con">
              <p>3. Interpretation Right</p>
              <p class="first">
                The right to interpret this Disclaimer and the right to interpret the use
                of this Website belong to CHERY. CHERY can revise the contents at this
                Website at any time without any notice or reminder. In order to get
                information about the latest version, please visit this Website regularly
                to learn about the current terms. CHERY can terminate, modify, suspend or
                stop any part of this Website at any time, such as restricting certain
                services or restricting you from visiting certain parts of this Website or
                all the features and services of this Website, without having to notify
                you in advance and without assuming any responsibility.
              </p>
            </div>
            <div class="con">
              <p>4. No Warranties and Representations</p>
              <p class="first">
                For all information published at this Website, including but not limited
                to texts, images, data, viewpoints, suggestions, webpages or links, the
                Company doesn't provide a guarantee in any form. As the Company is unable
                to obtain all the related information, there might be some incorrect,
                missing and expired information. Meanwhile, the Company explicitly
                declares that it doesn't take responsibility for the errors or omissions
                of these materials and contents, nor does it make any expressed or implied
                guarantee for these materials and contents, including but not limited to
                the guarantee for ownership, the guarantee for not infringing upon the
                rights of third parties, the guarantee for quality, and the guarantee for
                having no computer viruses. When the users of this Website have breached
                the provisions of this Disclaimer and thus have broken the related laws,
                they shall take responsibility for the outcomes on their own. CHERY and
                this Website don't assume any responsibility arising therefrom.
              </p>
            </div>
            <div class="con">
              <p>5. Third-party Websites</p>
              <p class="first">
                The links from this Website to the websites of third parties are provided
                to you as a service for convenience only, and do not indicate CHERY's
                recognition and recommendation for the information, nor are they used for
                publicity or advertising purposes. The Company doesn't guarantee the
                accuracy, completeness, adequacy and reliability of any information, data,
                viewpoint, image, statement or suggestion provided by those links. Once
                you use those links, you will leave this Website. If you decide to visit
                any third-party website linked to this Website, you shall bear all the
                possible outcomes and risks, and CHERY doesn't assume any responsibility
                arising therefrom.
              </p>
            </div>
            <div class="con">
              <p>6. Disclaimer</p>
              <p class="first">
                CHERY accepts no responsibility for any damage that might be caused to
                your computer or other properties by your access to or your use of this
                Website or your download of any information or material from this Website,
                or for any computer virus that might infect your computer or other
                properties. CHERY makes no guarantee that this Website will operate
                perfectly, will be stable and reliable, or will have no errors. CHERY
                accepts no responsibility in any circumstance for any loss or damage you
                have suffered for not being able to log in to this Website or not being
                able to obtain information from this Website.
              </p>
            </div>
            <div class="con">
              <p>7. Product Terms</p>
              <p class="first">
                All the information, instructions and illustrations provided at this
                Website are compiled based on the latest product information published at
                the time. CHERY reserves the right to change this Website's content at any
                time without prior notice. Due to limitations of technical conditions,
                CHERY accepts no responsibility for typos about colors, materials,
                products, instructions and product series. These typos might affect the
                price and description of a vehicle. CHERY will do its best to ensure that
                the information at this Website is up-to-date and accurate. But CHERY
                takes no responsibility for anyone relying on any information at this
                Website. The product prices are the suggested retail prices for the
                authorized dealers. To learn the specific price of a product, please
                contact the company's sales representatives and service outlets, as well
                as authorized dealers.
              </p>
            </div>
            <div class="con">
              <p>8. Data Collection and Protection</p>
              <p class="first">
                When you browse our Website, the Website's server will automatically
                record some of your browsing data. This Website promises to protect your
                privacy. For any personal information that you might be asked to provide
                when you browse this Website, you are free to determine whether you want
                to provide it. After you have provided the information, CHERY will use it
                to the extent permitted by law, to improve its services for you. Once you
                have submitted your personal information, it indicates that you have
                already understood and accepted the usage of your personal information,
                and that you have agreed to allow CHERY to use your personal information
                for this specific purpose. Without your permission, CHERY promises not to
                sell your personal information at any time and under any circumstance.
                However, CHERY might provide certain of your personal information to the
                legal or government agencies at their request; or CHERY might make certain
                of your personal information public within a scope as small as possible
                when it has a reason to believe that it's necessary to do so to protect
                the Company, its customers or the public. When you provide your personal
                information, you are supposed to have foreseen such a situation or have
                agreed that there might be such a situation. See the Privacy and Cookie
                Policy for details.
              </p>
            </div>
            <div class="con">
              <p>9. Information Uploading</p>
              <p class="first">
                Any visitor shall not mail or send any material or information containing
                viruses or involving insults, defamations, rumors, other material or
                information designated as illegal or infringing by relevant Chinese laws
                to this Website or from this Website. CHERY doesn't have the obligation to
                monitor and/or check the information entered to this Website by you, and
                doesn't assume any responsibility and obligation related to the
                information entered to this Website by you. CHERY reserves the right to
                check and delete the information entered by you at its sole discretion
                without notice or explanation.
              </p>
            </div>

            <div class="con">
              <p>10. Copyrights</p>
              <p class="first">
                CHERY reserves all rights. All the texts, graphics, images, photos, audio
                files, animation files, and video files at this Website as well as all the
                page designs and other intellectual property rights of this Website are
                under protection. You shall not reproduce or distribute them for
                commercial purposes, and you shall not revise them or use or publish them
                at other websites in any way. The copyrights of some images at this
                Website belong to their third-party providers.
              </p>
            </div>
            <div class="con">
              <p>11. Trademarks</p>
              <p class="first">
                Unless otherwise indicated, all the trademarks and logos at this Website
                are the properties of CHERY, including but not limited to the names of all
                the product models, the name of each series and each vehicle model, as
                well as the company's logos, brands and images.
              </p>
            </div>
            <div class="con">
              <p>12. Permission</p>
              <p class="first">
                CHERY strives to create an innovative website with a wide range of
                contents. We sincerely hope that you are satisfied with our services and
                can become one of CHERY's supporters. In the meantime, CHERY respects and
                protects the intellectual property rights of this Website, including its
                patents, trademarks and copyrights. Therefore, we hope you know that none
                of CHERY's intellectual property rights or third-party intellectual
                property rights used at this Website is permitted or authorized for use in
                other places by individuals or other organizations or corporations.
              </p>
            </div>
            <div class="con">
              <p>13. Applicable Laws</p>
              <p class="first">
                The laws of the People's Republic of China shall apply to the disputes
                arising from this Disclaimer or the use of this Website.
              </p>
            </div> -->
          </div>
        </div>
      </section>
    </div>
    <NuxtLayout name="footer" />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, nextTick } from "vue";
  import useCustomFetch from '~/composables/api/useDollarFetchRequest';
  import type { Ref } from "vue";
  function goback() {
    window.history.go(-1);
  }
  var showAgree: Ref<Boolean> = ref(false);
  var showSetup: Ref<Boolean> = ref(false);
  const customFetch = useCustomFetch();
  function changeSetup(status) {
    showSetup.value = status;

    setTimeout(() => {
      var privacy = document.querySelector(".agree .privacy");
      // // console.log(privacy.scrollHeight - privacy.clientHeight);
      privacy.scrollTo({
        top: privacy.scrollHeight - privacy.clientHeight,
        behavior: "smooth",
      });
    }, 100);
  }
  var htmlstr = ref('');
  const getLegislationFun = async () => {
    try {
      let res = await await customFetch("/jaecoo-omoda/openapi/legislation");
      // console.log("法律", res);
      htmlstr.value = res.content;
    } catch (error) {
      // console.log(error);
    }
  };
  onMounted(() => {
    getLegislationFun();
  });

  function changeAgree(status) {
    showAgree.value = status;
  }
  var showCookies1: Ref<Boolean> = ref(false);
  var showCookies2: Ref<Boolean> = ref(false);
  var showCookies3: Ref<Boolean> = ref(false);
  function changeShowCookies(no: Number) {
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

  var showDflag: Ref<String> = ref("");
  function changeShowDflag(txt) {
    showDflag.value = txt;
  }
  var chooseStatistics: Ref<Boolean> = ref(false);
  var choosePerformance: Ref<Boolean> = ref(false);
  var chooseBing: Ref<Boolean> = ref(false);
  var chooseHuanxin: Ref<Boolean> = ref(false);
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
</script>

<style scoped>
  .legalNotices {
    width: 100%;
    height: 100%;
    position: relative;
    padding-bottom: 2rem;
  }

  .legalNotices .bgmask {
    width: 100%;
    height: 100vh;
    background: url(/images/mask-w.webp);
    background-repeat: repeat;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.5;
  }

  .cti-privacy {
    background-color: transparent;
    width: 100%;
    overflow: auto;
    overflow-y: auto;
    margin: 0 auto;
    z-index: 22;
  }

  .cti-privacy .privacy {
    width: 100%;
  }

  .cti-privacy .privacy .close {
    text-align: right;
    font-size: 2.2vw;
    z-index: 6;
    position: fixed;
    top: 6vw;
    right: 10%;
  }

  .cti-privacy .privacy .close span {
    margin-right: 3%;
    cursor: pointer;
  }

  .cti-privacy .privacy .privacy_con {
    width: 70%;
    margin: auto;
    padding-top: 10%;
    box-sizing: border-box;
    position: relative;
    z-index: 3;
  }

  .cti-privacy .privacy .privacy_con .title {
    width: 100%;
    text-align: center;
    position: relative;
  }

  .cti-privacy .privacy .privacy_con .title p {
    font-size: 0.28rem;
  }

  .cti-privacy .privacy .privacy_con .title .back {
    width: 0.35rem;
    height: auto;
    position: absolute;
    right: 0;
    bottom: -1.8rem;
    cursor: pointer;
    top: 0;
  }

  .cti-privacy .privacy .privacy_con .title p:nth-child(2) {
    margin-top: 1%;
  }

  .cti-privacy .privacy .privacy_con .html-main {
    min-height: 100vh;
    font-family: "SourceHanSansSC-Light";
    font-size: 0.19rem;
    line-height: 2;
    margin-top: 1.5%;
  }

  .cti-privacy .privacy .privacy_con .html-main :deep() li {
    display: block !important;
  }

  .cti-privacy .privacy .privacy_con .html-main :deep() strong {
    font-family: "SourceHanSansSC-Bold";
  }

  @media screen and (max-width: 750px) {
    .cti-privacy {
      overflow: hidden;
    }

    .cti-privacy .privacy {
      width: 100%;
    }

    .cti-privacy .privacy .privacy_con {
      width: 85%;
      margin: auto;
      padding-top: 25%;
      box-sizing: border-box;
    }

    .cti-privacy .privacy .privacy_con .title {
      width: 100%;
      text-align: center;
      /* padding-bottom: 1rem; */
    }

    .cti-privacy .privacy .privacy_con .title p {
      font-size: 0.34rem;
    }

    .cti-privacy .privacy .privacy_con .title .back {
      width: 1.6rem;
      height: auto;
      position: absolute;
      right: 0;
      bottom: -0.8rem;
      cursor: pointer;
      display: none;
    }

    .cti-privacy .privacy .privacy_con .title p:nth-child(2) {
      margin-top: 2%;
    }

    .cti-privacy .privacy .privacy_con .con .first {
      margin-top: 7%;
    }

    .cti-privacy .privacy .privacy_con .html-main {
      margin-top: 0%;
      font-size: 0.9rem;
      line-height: 2;
    }

    .c ti-privacy .privacy .close {
      font-size: 5.2vw;
      right: 7%;
    }
  }

  .agree {
    z-index: 9;
    position: fixed;
    display: none;
  }

  .agree .privacy {
    width: 85vw;
    position: absolute;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 5%;
    padding-bottom: 2%;
    box-sizing: border-box;
    margin: auto;
    max-height: 30vw;
    overflow-y: auto;
    color: #0e0e0e;
  }

  .agree .privacy .privacy-con {
    width: 100%;
    padding-top: 5%;
    padding-left: 2%;
    padding-right: 2%;
    line-height: 1.6rem;
    font-family: "SourceHanSansSC-Light";
    font-weight: 400;
    font-size: 1.2rem;
  }

  .agree .privacy .privacy-con p:first-child {
    font-size: 1.5rem;
  }

  .agree .privacy .privacy-con p:nth-child(2) {
    margin-top: 2%;
    font-size: 1em;
  }

  .agree .privacy .privacy-con p:nth-child(2) .privacy_all {
    display: inline-block;
    width: 1.8em;
    height: 1.8em;
    color: #fff;
    font-style: 1.2rem;
    text-align: center;
    margin-left: 0.5%;
    vertical-align: middle;
    cursor: pointer;
    position: relative;
    top: -0.1rem;
  }

  .agree .privacy .privacy-con .privacy_btn {
    width: 100%;
    text-align: right;
    margin-top: 3%;
  }

  .agree .privacy .privacy-con .privacy_btn a {
    background-color: #000;
    color: #fff;
  }

  .agree .privacy .privacy-con .privacy_btn a:first-child,
  .agree .privacy .privacy-con .privacy_btn a:nth-child(2) {
    padding: 1em 2em;
    font-size: 1vw;
    margin-right: 1%;
  }

  .agree .privacy .privacy-con .privacy_btn a:nth-child(3),
  .agree .privacy .privacy-con .privacy_btn a:nth-child(4) {
    padding: 1em 2em;
    font-size: 1vw;
  }

  .agree .privacy .privacy-con .paivacy_bottom {
    width: 100%;
    text-align: right;
    margin-top: 3%;
    font-size: 1em;
  }

  .agree .privacy .privacy-con .paivacy_bottom a {
    text-decoration: underline;
    color: #000;
  }

  .agree .privacy .privacy-con .paivacy_bottom a:first-child {
    box-sizing: border-box;
  }

  .agree .privacy .set_up_mask {
    width: 100%;
    font-family: "SourceHanSansSC-Light";
    font-weight: 400;
  }

  .agree .privacy .set_up_mask .to_all {
    width: 100%;
    padding: 3% 3% 0 2%;
    box-sizing: border-box;
  }

  .agree .privacy .set_up_mask .to_all .arrow {
    padding: 0;
    border: none;
    outline: 0;
    background: 0 0;
    display: block;
    font-size: 1rem;
    cursor: pointer;
    margin: 0.5% auto 1rem;
    color: #26539d;
  }

  .agree .privacy .set_up_mask .to_all .arrow .arrow_down {
    display: block;
    width: 2.18em;
    height: auto;
    margin: auto;
    transform: rotate(180deg);
    transition: 250ms;
  }

  .agree .privacy .set_up_mask .to_all .arrow .arrow_down svg {
    width: 100%;
    height: 1.2vw;
    fill: currentColor;
    max-height: 100%;
  }

  .agree .privacy .set_up_mask .to_all .arrow .arrow_up {
    display: block;
    width: 2.18em;
    height: auto;
    margin: auto;
    transform: rotate(0);
    transition: 250ms;
  }

  .agree .privacy .set_up_mask .to_all .arrow .arrow_up svg {
    width: 100%;
    height: 1.2vw;
    fill: currentColor;
    max-height: 100%;
  }

  .agree .privacy .set_up_mask .to_all ul li {
    margin-top: 2%;
  }

  .agree .privacy .set_up_mask .to_all ul .Agree label {
    display: flex;
    align-items: center;
    font-size: 1em;
  }

  .agree .privacy .set_up_mask .to_all ul .Agree label input {
    width: 1px;
    height: 1px;
    position: absolute;
  }

  .agree .privacy .set_up_mask .to_all ul .Agree label .sign {
    width: 1.5em;
    height: 1.5em;
    background-color: #26539d;
    margin-right: 0.6rem;
    cursor: pointer;
    position: relative;
  }

  .agree .privacy .set_up_mask .to_all ul .Agree label .sign::after {
    content: "";
    width: 0.7em;
    height: 2px;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item label {
    display: flex;
    align-items: center;
    font-size: 1em;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item label .sign_con {
    width: 1.5em;
    height: 1.5em;
    background-color: #bfbfbf;
    margin-right: 1%;
    position: relative;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item label .sign_con::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    content: "";
    width: 0.77em;
    height: 0.35em;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    -webkit-transform: rotate(-45deg) translate(0.04em, -0.025em);
    transform: rotate(-45deg) translate(0.04em, -0.025em);
  }

  .agree .privacy .set_up_mask .to_all ul .category-item label .sign_not {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 1.5em;
    height: 1.5em;
    border: 1px solid #bfbfbf;
    background: #fff;
    margin-right: 10px;
    cursor: pointer;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item label .background {
    background: #26539d;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item label .sign_not::after {
    position: absolute;
    margin-top: 0.1%;
    content: "";
    width: 0.77em;
    height: 0.35em;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    -webkit-transform: rotate(-45deg) translate(0.04em, -0.025em);
    transform: rotate(-45deg) translate(0.04em, -0.025em);
  }

  .agree .privacy .set_up_mask .to_all ul .category-item label .sign_index {
    width: 1.5em;
    height: 1.5em;
    background-color: #26539d;
    margin-right: 1%;
    cursor: pointer;
    position: relative;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item label .sign_index::after {
    content: "";
    width: 0.7em;
    height: 2px;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: none;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item label .sign_background {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 1.5em;
    height: 1.5em;
    border: 1px solid #26539d;
    background: #26539d;
    margin-right: 10px;
    cursor: pointer;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item label .sign_background::after {
    position: absolute;
    margin-top: 0;
    content: "";
    width: 0.77em;
    height: 0.35em;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    -webkit-transform: rotate(-45deg) translate(0.04em, -0.025em);
    transform: rotate(-45deg) translate(0.04em, -0.025em);
  }

  .agree .privacy .set_up_mask .to_all ul .category-item p {
    margin-top: 1.5%;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item .arrow {
    padding: 0;
    border: none;
    outline: 0;
    background: 0 0;
    display: block;
    font-size: 1rem;
    cursor: pointer;
    margin: 0.5% auto 1rem;
    color: #26539d;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item .arrow .arrow_down {
    display: block;
    width: 2.18em;
    height: auto;
    transform: rotate(180deg);
    transition: 250ms;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item .arrow .arrow_down svg {
    width: 100%;
    height: 1.2vw;
    fill: currentColor;
    max-height: 100%;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item .arrow .arrow_up {
    display: block;
    width: 2.18em;
    height: auto;
    margin: auto;
    transform: rotate(0);
    transition: 250ms;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item .arrow .arrow_up svg {
    width: 100%;
    height: 1.2vw;
    fill: currentColor;
    max-height: 100%;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item .hide {
    display: none;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item .consent-list {
    width: 90%;
    margin: auto;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item .consent-list .consent-item {
    width: 48%;
    display: inline-block;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item .consent-list .consent-item .sign_con {
    width: 1.5em;
    height: 1.5em;
    background-color: #bfbfbf;
    margin-right: 1%;
    position: relative;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item .consent-list .consent-item .sign_con::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    content: "";
    width: 0.77em;
    height: 0.35em;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    -webkit-transform: rotate(-45deg) translate(0.04em, -0.025em);
    transform: rotate(-45deg) translate(0.04em, -0.025em);
  }

  .agree .privacy .set_up_mask .to_all ul .category-item .consent-list .consent-item .cookie_introduction {
    padding: 0;
    border: none;
    outline: 0;
    display: -ms-inline-flexbox;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 1rem;
    width: 1.4em;
    height: 1.4em;
    background: #999;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    margin-left: 0.8%;
  }

  .agree .privacy .set_up_mask .to_all ul .category-item::after {
    content: "";
    display: block;
    width: 50px;
    height: 1px;
    background: #fff;
    margin: 2rem 0;
  }

  .agree .privacy .set_up_mask .to_all .button-wrapper {
    width: 100%;
    text-align: right;
  }

  .agree .privacy .set_up_mask .to_all .button-wrapper button {
    padding: 1em 2em;
    background-color: #fff;
    font-size: 1vw;
    margin-right: 1%;
    color: #000;
  }

  .agree .d-flag {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 2rem;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .agree .d-flag .dlog {
    width: 85%;
    height: 90%;
    position: absolute;
    background-color: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 10px;
    overflow-y: auto;
  }

  .agree .d-flag .dlog .d-close {
    width: 50%;
    padding: 1.3% 0 0;
    text-align: right;
    box-sizing: border-box;
    font-size: 2em;
    position: fixed;
    right: 10%;
    cursor: pointer;
  }

  .agree .d-flag .dlog .d-body {
    width: 100%;
    padding: 1% 5% 10%;
    box-sizing: border-box;
    margin-top: 5%;
    font-family: "SourceHanSansSC-Light";
    font-weight: 400;
  }

  .agree .d-flag .dlog .d-body h3 {
    font-weight: 900;
    line-height: 3em;
    font-size: 1.6em;
  }

  .agree .d-flag .dlog .d-body h4 {
    font-size: 1.5em;
    margin-bottom: 1.3em;
    font-weight: 800;
  }

  .agree .d-flag .dlog .d-body p {
    line-height: 2em;
    font-size: 1em;
    margin-bottom: 1.5em;
  }

  .agree .d-flag .dlog .d-body ul {
    margin-bottom: 1.5em;
  }

  .agree .d-flag .dlog .d-body ul li {
    line-height: 2em;
    font-size: 1em;
    margin-bottom: 1em;
    text-indent: 1em;
  }

  .privacy_popup {
    display: none;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    overflow-y: auto;
    z-index: 9;
  }

  .d-cover,
  .d-mask,
  .g-mask {
    height: 100%;
    left: 0;
    width: 100%;
    top: 0;
  }

  .g-mask {
    z-index: 9;
  }

  .d-mask {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
  }

  .cookie_table td,
  .cookie_table th {
    word-break: break-all;
    word-wrap: break-word;
    border: 1px solid #939598;
    text-align: left;
  }

  .cookie_table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 80%;
    margin: 2% auto 0;
  }

  .cookie_table tr:nth-child(1) td:nth-child(1) {
    font-family: "SourceHanSansSC-Bold";
  }

  .cookie_table th {
    padding: 30px;
  }

  .cookie_table td {
    font: 500 14px;
    padding: 10px 30px;
  }

  @media (max-width: 1024px) {
    .agree .privacy {
      background-color: #fff;
      bottom: 5%;
      box-sizing: border-box;
      color: #0e0e0e;
      left: 0;
      margin: auto;
      max-height: 112vw;
      overflow-y: scroll;
      padding-bottom: 2%;
      position: fixed;
      right: 0;
      width: 90%;
    }

    .agree .privacy .privacy-con {
      width: 100%;
      padding-top: 5%;
      padding-left: 4%;
      padding-right: 4%;
      line-height: 1.4rem;
      font-family: "SourceHanSansSC-Light";
      font-weight: 400;
      font-size: 1rem;
    }

    .agree .privacy .privacy-con .privacy_btn a:first-child,
    .agree .privacy .privacy-con .privacy_btn a:nth-child(2),
    .agree .privacy .privacy-con .privacy_btn a:nth-child(3) {
      padding: 1rem 2em;
      font-size: 1.2rem;
      margin-right: 1%;
      width: 100%;
      display: block;
      text-align: center;
      margin-bottom: 3%;
    }

    .agree .privacy .privacy-con .paivacy_bottom {
      width: 100%;
      text-align: left;
      margin-top: 3%;
      font-size: 1.2rem;
    }

    .agree .privacy .set_up_mask .to_all .button-wrapper button {
      padding: 1rem 2em;
      background-color: #e4e4e5;
      color: #fff;
      font-size: 1.2rem;
      margin-right: 1%;
      width: 100%;
      display: block;
      text-align: center;
      margin-bottom: 3%;
      border: none;
    }

    .agree .privacy .set_up_mask .to_all ul .category-item p {
      font-size: 1rem;
      padding-top: 0.3rem;
    }

    .agree .privacy .set_up_mask .to_all ul .category-item .consent-list .consent-item {
      width: 100%;
    }

    .agree .d-flag .dlog {
      width: 90%;
      height: 30rem;
      position: fixed;
      background-color: #fff;
      top: 13%;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 10px;
      overflow-y: auto;
      z-index: 999;
    }
  }
</style>