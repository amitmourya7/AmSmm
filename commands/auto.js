/*CMD
  command: auto
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
if (balance.value() < 100){
Bot.sendMessage("_❌ You have to own at least 100 Points")
}else{
Bot.sendMessage("👁️‍🗨️ *Enter Amount On Views You Want Please Enter More Than 100 *")
Bot.runCommand("auto2")
}
