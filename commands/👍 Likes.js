/*CMD
  command: 👍 Likes
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🔰 Send Post LinkWhere You Want To Get Likes*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let like = User.getProperty("like")
User.setProperty("like" , data.message ,"string")
Bot.runCommand("like")
