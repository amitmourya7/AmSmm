/*CMD
  command: 👥 Affiliate Earn
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER
*200 Points On Each Valid Invite*
Top Invite - /top
Refer Network - /reflist
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let link = Libs.ReferralLib.getLink();
Bot.sendMessage(link);



