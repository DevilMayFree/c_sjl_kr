// Scroll Animation (sa, 스크롤 애니메이션)
const SaDefaultMargin = 300;
let saTriggerMargin = 0;
let saTriggerHeight = 0;
const saElementList = document.querySelectorAll('.sa');

const SaFunc = function() {
  for (const element of saElementList) {
    if (!element.classList.contains('show')) {
      if (element.dataset.saMargin) {
        saTriggerMargin = parseInt(element.dataset.saMargin);
      } else {
        saTriggerMargin = SaDefaultMargin;
      }

      if (element.dataset.saTrigger) {
        saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
      } else {
        saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
      }

      if (window.innerHeight > saTriggerHeight) {
        let delay = (element.dataset.saDelay) ? element.dataset.saDelay : 0;
        setTimeout(function() {
          element.classList.add('show');
        }, delay);
      }
    }
  }
}

window.addEventListener('load', SaFunc);
window.addEventListener('scroll', SaFunc);