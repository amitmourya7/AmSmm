/*CMD
  command: /reflist
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

let refList = Libs.ReferralLib.getRefList();

if (!refList.exist) {
  Bot.sendMessage("No any affiliated users");
  return
}

let users_rows = ""

// only 100 first users here
// for other users you need use pagination:
// https://help.bots.business/bjs/lists#paginating
let users = refList.getUsers();

for (var ind in users) {
  users_rows = users_rows + "\n👤 " + Libs.commonLib.getLinkFor( users[ind] )
}

let msg =
  "*Total users:* " +
  Libs.ReferralLib.getRefCount() +
  "\n _the first user was tracked:_ \n" +
  "   _" +
  refList.created_at +
  "_" +
  "\n----" +
  users_rows

Bot.sendMessage(msg);



