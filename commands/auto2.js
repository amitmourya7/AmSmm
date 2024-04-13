/*CMD
  command: auto2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
userPayment.add(+message)
  var user_link = Libs.commonLib.getLinkFor(user)
  var withdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var link = User.getProperty("Link")
  var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
  var balance = Libs.ResourcesLib.userRes("balance")
  if (isNaN(message)) {
    
  } else {
  }
  if (message < 100) {
    Bot.sendMessage("_❌ Minimum Order Is 100 Views_")
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "_❌ Maximum Order" + balance.value().toFixed(6) + " Views_"
      )
    } else {
      var apikey = Bot.getProperty("apikey")
      var url = "https://imperialsmm.in/api/v2?key="+apikey+"&action=add&service=15&link="+link+"&quantity="+message+""

HTTP.get({
  url: url,
  success: "/onSuccess"
  })
      balance.add(-message)
      Api.sendMessage({
        chat_id: "@cheapestsmmpro",
        text:
          "*📄 New Order Submitted  \n\n✅ Status = Done\n🆔 User ID = " +
          user.telegramid +
          "\n👁️‍🗨️ Amount = " +
          message +
          " Views\n\n🔗 Post Link =\n " +
          link +
          "\n\n👮🏻‍♂ Bot = @" +
          bot.name +
          "*",
        parse_mode: "Markdown",
        disable_web_page_preview: true
     })
    }
  }
}
