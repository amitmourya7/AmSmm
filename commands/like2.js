/*CMD
  command: like2
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

var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
userPayment.add(+message)
  var user_link = Libs.commonLib.getLinkFor(user)
  var withdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var like = User.getProperty("like")
  var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
  var balance = Libs.ResourcesLib.userRes("balance")
  if (isNaN(message)) {
    
  } else {
  }
  if (message < 2500) {
    Bot.sendMessage("_❌ Minimum Order Is 100 Likes_")
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "_❌ Not Enough Balance_"
      )
    } else {
      var apikey = Bot.getProperty("apikey")
      var amount = message/25
      var url = "https://imperialsmm.in/api/v2?key="+apikey+"&action=add&service=649&link="+like+"&quantity="+amount+""

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
         amount +
          " Likes\n\n🔗 Link =\n " +
          like+
          "\n\n👮🏻‍♂ Bot = @" +
          bot.name +
          "*",
        parse_mode: "Markdown",
        disable_web_page_preview: true
     })
    }
  }
