/*CMD
  command: react
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
if (balance.value() < 500){
Bot.sendMessage("_❌ You have to own at least 500 Points_")
}else{
Bot.sendMessage("*👁️‍🗨️ Enter Amount Of Points For Which You Want Followers\n\nIf You Want 10 Reactions Then Enter 500\n\n50 Points = 1 Reactions 👍*")
Bot.runCommand("react2")
}
