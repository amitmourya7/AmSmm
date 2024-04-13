/*CMD
  command: starts
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
if (balance.value() < 12500){
Bot.sendMessage("_❌ You have to own at least 12500 Points_")
}else{
Bot.sendMessage("*👁️‍🗨️ Enter Amount Of Points For Which You Want Followers\n\nIf You Want 25 Bot Starts Then Enter 12500 \n\n500 Points = 1 Bot Start 👍*")
Bot.runCommand("starts2")
}
