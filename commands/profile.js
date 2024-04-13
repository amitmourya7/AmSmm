/*CMD
  command: profile
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
if (balance.value() < 2000){
Bot.sendMessage("_❌ You have to own at least 2000 Points_")
}else{
Bot.sendMessage("*👁️‍🗨️ Enter Amount Of Points For Which You Want Followers\n\nIf You Want 100 Profile Visits Then Enter 2000\n\n20 Points = 1 Profile Visit👍*")
Bot.runCommand("profile2")
}
