!(function flexible(window, document) {
  console.log('start calclater rem')
  let docEl = document.documentElement;
  let isMac = /macintosh|mac os x/i.test(navigator.userAgent);
  let dpr = isMac ? 1 : (window.devicePixelRatio || 1);

  function setRemUnit() {
    let rem = 100;
    let docElWidth = docEl.clientWidth;

    if (docElWidth < 375) {
      rem = 50;
    } else if (docElWidth <= 750 && docElWidth >= 375) {
      rem = 50 + ((docElWidth - 375) / 375) * 50
    } else if (docElWidth > 1024 && docElWidth <= 1440) {
      rem = ((docElWidth / 1024) * 0.3 + 0.5) * rem / dpr
    } else if (docEl.clientWidth <= 1440) {
      rem = ((docElWidth / 1440) *0.3 +  0.7) * rem /dpr
    } else if (docElWidth > 3000) {
      rem = rem * 1.5 / dpr
    } else {
      rem = rem / dpr
    }
    // console.log(rem, 'rem',dpr)
    docEl.style.fontSize = limitRem(docElWidth, rem) + 'px'
  }

  setRemUnit()

  // 窗口变化重置
  window.addEventListener('resize', setRemUnit, 300)

  function limitRem(docElWidth, num) {
    const max = docElWidth > 3000 ? 150 : 125
    return num > max ? max : (num < 50 ? 50 : num)
  }
})(window, document)