/*CMD
  command: 👨‍👨‍👦‍👦 Followers
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Services
  answer: *🔰 Send Insta Username Where You Want To Get Followers*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let Link = User.getProperty("follow")
User.setProperty("follow" , data.message ,"string")
Bot.runCommand("follow")
