/*CMD
  command: /setapikey
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Enter Api Key 🔐*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = "1076028197"
if (user.telegramid== key){
let apikey = Bot.getProperty("apikey")
Bot.setProperty("apikey" , data.message ,"string")
Bot.sendMessage("*✅ Api Key set To :* "+data.message+"")
}else{
return
}
