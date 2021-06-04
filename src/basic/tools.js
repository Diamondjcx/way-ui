// 获取元素位置属性
export function getClientReat(client) {
  const { top, bottom, left, right, height, width } = client.getBoundingClientRect()
  return {
    top,
    bottom,
    left,
    right,
    height: height || bottom - top,
    width:  width || right - left
  }
}

// 防抖与节流
export function debounce(fn, wait) {
      let timeout = null;      //定义一个定时器
      return function(e) {
          if(timeout !== null) 
          clearTimeout(timeout);  //清除这个定时器
          timeout = setTimeout(fn(e), wait);  
      }
  }
export function  throttle(fn, wait) {
      let pre = Date.now();
      return function() {
          let args = arguments;
          let now = Date.now();
          if(now - pre >= wait) {
              fn(args);
              pre = now;
          }
      }
  }