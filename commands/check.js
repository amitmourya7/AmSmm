/*CMD
  command: check
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

var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("BOSS")
User.addToGroup("user")
}

if (user=="left"){
Bot.sendMessage("*🚫You didn't Joined The Channel\n \n 🚫Join @cheapestsmmpro and try again*")
}
