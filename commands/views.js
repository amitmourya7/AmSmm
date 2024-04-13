/*CMD
  command: views
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
if (balance.value() < 1700){
Bot.sendMessage("_❌ You have to own at least 1700 Points_")
}else{
Bot.sendMessage("*👁️‍🗨️ Enter Amount Of Points For Which You Want Views\n\nIf You Want 100 Views Then Enter 1700\n\n17 Points = 1 View👍*")
Bot.runCommand("views2")
}
