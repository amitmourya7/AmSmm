/*CMD
  command: like
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
if (balance.value() < 2500){
Bot.sendMessage("_❌ You have to own at least 2500 Points_")
}else{
Bot.sendMessage("*👁️‍🗨️ Enter Amount Of Points For Which You Want Followers\n\nIf You Want 10 Likes Then Enter 250\n\n25 Points = 1 Like 👍*")
Bot.runCommand("like2")
}
