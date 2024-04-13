/*CMD
  command: answer
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
if (balance.value() < 5000){
Bot.sendMessage("_❌ You have to own at least 5000 Points_")
}else{
Bot.sendMessage("*👁️‍🗨️ Enter Amount Of Points For Which You Want Followers\n\nIf You Want 10 Votes Then Enter 5000\n\n500 Points = 1 Vote 👍*")
Bot.runCommand("answer2")
}
