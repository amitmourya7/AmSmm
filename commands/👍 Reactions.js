/*CMD
  command: 👍 Reactions
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🔰 Send Post Link Where You Want To Get Reactions*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let react = User.getProperty("react")
User.setProperty("react" , data.message ,"string")
Bot.runCommand("react")
