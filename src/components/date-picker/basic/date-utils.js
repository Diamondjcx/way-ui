export const weeks = ['日','一','二','三','四','五','六'];
export const months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']

// 获取当前月的第一天是星期几
export const getFirstDayByMonths = function(year, month){
  return new Date(year, month, 1).getDay()
}

// 获取当月的最后一天是星期几
export const getLastDayByMonth = function(year, month){
  return new Date(year, month + 1, 0).getDay()
}

// 获取一个月的天数
export const getDayCountOfMonth = function(year, month) {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month === 1) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return 29;
    } else {
      return 28;
    }
  }
  return 31;
};

// 获取一年的天数
export const getDayCountOfYear = function(year) {
  const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  return isLeapYear ? 366 : 365;
};

export const fillNum = function (num) {
  if(Number(num) < 10){
    return 0 + '' + num
  }else {
    return num
  }
}

// 获取下个月
export const getNextMonth = function (date) {
  const new_date = new Date(date)
  const month = date.getMonth()
  new_date.setMonth(month + 1)
  return new_date
}

// 清除时分秒
export const clearTime = function (date) {
  const new_date = new Date(date)
  new_date.setHours(0)
  new_date.setMinutes(0)
  new_date.setSeconds(0)
  new_date.setMilliseconds(0)
  return new_date
}

// 时间格式化
export function dateFormat(date,fmt) {
  if(!date.getMonth) date = new Date(parseInt(date) * 1000)
  const o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
  return fmt
}
