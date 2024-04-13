/*CMD
  command: 🚀 Profile Visit
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🔰 Send Post Link*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let profile = User.getProperty("profile")
User.setProperty("profile" , data.message ,"string")
Bot.runCommand("profile")
