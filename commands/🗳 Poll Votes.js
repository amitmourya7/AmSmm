/*CMD
  command: 🗳 Poll Votes
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🔰 Send Poll Link Where You Want To Get Votes*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let votes = User.getProperty("votes")
User.setProperty("votes" , data.message ,"string")
Bot.runCommand("votes")
