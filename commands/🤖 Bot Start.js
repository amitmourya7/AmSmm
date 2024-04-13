/*CMD
  command: 🤖 Bot Start
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🔰 Send Bot Link Where You Want To Get Starts*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let starts = User.getProperty("starts")
User.setProperty("starts" , data.message ,"string")
Bot.runCommand("starts")
