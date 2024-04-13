/*CMD
  command: 👁‍🗨 Views
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🔰 Send Insta link Where You Want To Get views*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let views = User.getProperty("views")
User.setProperty("views" , data.message ,"string")
Bot.runCommand("views")
