/*CMD
  command: follow
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
if (balance.value() < 3000){
Bot.sendMessage("_❌ You have to own at least 3000 Points_")
}else{
Bot.sendMessage("*👁️‍🗨️ Enter Amount Of Points For Which You Want Followers\n\nIf You Want 10 Followers Then Enter 3000\n\n300 Points = 1 Follower 👍*")
Bot.runCommand("follow2")
}
