import Vue from 'vue'
import main from './message.vue'
const MessageCMD = Vue.extend(main)

let message;
let messages = []
let key = 1;

const WMessage = function(options){
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let onClose = options.onClose;
  let id = 'message_' + key++;

  options.onClose = function() {
    WMessage.close(id, onClose);
  };

  message = new MessageCMD({
    data: options
  });
  message.id = key + 1
  messages.push(message)
  message.$mount();
  document.body.appendChild(message.$el);
  message.visible = true
  messages.map((item,index) => {
    let offsetTop = (item.$el.offsetHeight + 15) * (messages.length - index - 1) + 15
    item.offsetTop = offsetTop
  })
  return message;
}

WMessage.close = function (id, onClose) {
  let len = messages.length;
  for (let i = 0; i < len; i++) {
    if (id === messages[i].id) {
      if (typeof userOnClose === 'function') {
        onClose(messages[i]);
      }
      messages.splice(i, 1);
      break;
    }
  }
}

WMessage.closeAll = function () {
  for (let i = messages.length - 1; i >= 0; i--) {
    messages[i].close();
  }
}

export default WMessage;
