/*CMD
  command: votes
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Where You Want To Get Votes Send That Option Number*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let answer = User.getProperty("answer")
User.setProperty("answer" , data.message ,"string")
Bot.runCommand("answer")
