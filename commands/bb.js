/*CMD
  command: bb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: bb

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var balance = Libs.ResourcesLib.anotherUserRes("balance", user.telegramid)
balance.add((parseInt(message)))
Bot.sendMessage("Done")
