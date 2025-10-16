const isMobileDevice = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // 移动设备通常包含的关键字
  const mobileDevices = /Android|Mobi|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i;

  // 检测 userAgent 字符串中是否包含移动设备的关键字
  const isMobile = mobileDevices.test(userAgent);

  return window.innerWidth < 1024 ? true : isMobile;
}

const debunce = function (fn, delay = 300){
  let timer;
  return function(...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay);
  }
}

const changeDateMouth = (a) => {

  switch (a) {

    case "01":

      var b = "January";

      return b

      break;

    case "02":

      var b = "February";

      return b

      break;

    case "03":

      var b = "March";

      return b

      break;

    case "04":

      var b = "April";

      return b

      break

    case "05":

      var b = "May";

      return b

      break;

    case "06":

      var b = "June";

      return b

      break;

    case "07":

      var b = "July";

      return b

      break;

    case "08":

      var b = "August";

      return b

      break;

    case "09":

      var b = "September";

      return b

      break;

    case "10":

      var b = "October";

      return b

      break;

    case "11":

      var b = "November";

      return b

      break;

    case "12":

      var b = "December";

      return b

      break;

  }

}

const carFlowAnimation = () => {
  const isMobile = isMobileDevice();
  const animatedList = document.querySelectorAll(
          '.animated-container > .animated'
  )
  const animatedTitleList = document.querySelectorAll(
          '.animated-container .animated-title'
      ) //大/小标题
      
  animatedTitleList.forEach((item, idx) => {
  const rect = item.getBoundingClientRect()
  if (
      rect.top >= 0 &&
      rect.top <= innerHeight || document.documentElement.clientHeight
      // rect.left >= 0 &&
      /* rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) */ /* &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) */
  ) {
      const isSmallText = item.tagName === 'H5'
      const isThirdText = item.classList.contains('third-text-slide-up')
      setTimeout(
          () => {
          item.classList.add('slide-up')
          },
          isThirdText ? 1000 : isSmallText ? 500 : 0
      )
      }
  })
  let time = 50
  animatedList.forEach((item, idx) => {
      const rect = item.getBoundingClientRect()
      if (item.id === 'carType' && isMobile)
          item.classList.remove('animated')
      if (
          rect.top >= 0 &&
          rect.top <= (innerHeight || document.documentElement.clientHeight)
      ) {
          const delay = item.parentNode.getAttribute('data-delay') || 0
          if (item.id === 'carType') {
              if (!isMobile) {
                  setTimeout(() => {
                      item.classList.add('slide-up')
                  }, (time += 100))
              }
          } else {
              setTimeout(() => {
                  item.classList.add('slide-up')
              }, delay);
          }
      }
  }) 
}

 // 节流函数
const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
export { isMobileDevice, debunce, changeDateMouth, carFlowAnimation, throttle }