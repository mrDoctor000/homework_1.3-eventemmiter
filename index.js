const webinarChat = require('./webinarChat');
const facebookChat = require('./facebookChat')
const vkChat = require('./vkChat')


let readyToMessage = () => {
  console.log('Готовлюсь к ответу');
};

//1.1
let chatOnMessage = (message) => {
  console.log(message);
};

webinarChat.on('message', chatOnMessage);
facebookChat.on('message', chatOnMessage);
vkChat.on('message', chatOnMessage);

//1.1
webinarChat.on('message', readyToMessage);
//1.2
vkChat.setMaxListeners(2);
//1.3
vkChat.on('message', readyToMessage);

//2.2
vkChat.on('close', () => {
  console.log('Чат вконтакте закрылся :(');
});


// Закрыть вконтакте
setTimeout(() => {
  console.log('Закрываю вконтакте...');
  vkChat.removeListener('message', chatOnMessage);
}, 10000);

//2.3
vkChat.close();

// Закрыть фейсбук
setTimeout(() => {
  console.log('Закрываю фейсбук, все внимание — вебинару!');
  facebookChat.removeListener('message', chatOnMessage);
}, 15000);


//Дополнительное
setTimeout(() => {
  webinarChat.removeListener('message', chatOnMessage);
}, 30000)