/*CMD
  command: BOSS
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🔙 back
  group: 
CMD*/

var userstat = User.getProperty("status");
var referbonus = User.getProperty("referbonus");
if (userstat=="member" | userstat =="administrator" | userstat=="creator"){

if (referbonus == undefined){
let refUser = Libs.ReferralLib.currentUser.attractedByUser()
if (refUser){
  var balanceref = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balanceref.add(200)
  Bot.sendMessageToChatWithId(refUser.chatId, "you got 200 point for inviting your friend ☑️")
User.setProperty("referbonus", user.telegramid, "integer")}
}

var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("⚖ Balance,🎰 Bonus,\n🆕 Order,📥 Deposit,📞 Help,\n👥 Affiliate Earn,🏆 Top Invites", "*Hello Sir 👋*\n\n_🙌 Welcome To Telegrams Fastest & Cheapest Smm Panel Bot._ ")
}
if (userstat=="left"){
Bot.runCommand("/start");
}
