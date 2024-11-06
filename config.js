
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sten10royal@gmail.com";
global.location = "Port-au-Prince,Haïti.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "50931461936@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/Hxduja6rDRh30gSNeUNyfm";
global.website = process.env.GURL || "https://chat.whatsapp.com/Hxduja6rDRh30gSNeUNyfm";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3e1d82ab139d29975cad4.jpg";
global.devs = "50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "50931461936";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "trur";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/994a791a5a601fe82d480.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
 "{"noiseKey":{"private":{"type":"Buffer","data":"gCT57nVnHhVbsEcVl2CYF47sTVNJT0aDLG5vlFZMYnU="},"public":{"type":"Buffer","data":"gXHYlkyBGLXpx+t0gXiFJD+p9AYwym2Ijvivb0mi9yw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"KOgPOfxI+v3IYFloASU74W8GpLQF0jUrsgi9kfPFR1k="},"public":{"type":"Buffer","data":"lmU6nsKA7U1inb4UDUFi61VmXc17xSR6s0Hp7Bx/mQw="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"eD1z5ML6EyR4MS+eXvNc6kgvd4xVdcaG9JVM05761k4="},"public":{"type":"Buffer","data":"aMSv3vjBz2zDLjwDAwHIydsrNUWLSsI0PDVo9N9GjXY="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"OPafKxISp8s9mUrsszzzmZh/gnfVcF9P4eXx38/RwUU="},"public":{"type":"Buffer","data":"U3R+2JSIvIic/qmjKl7oanWUTbDVan+oZ14neFNblHA="}},"signature":{"type":"Buffer","data":"kYDPKF4bE/7hWDx0NMWlopxoNfLxyynsPXDQaGzxdUIQbr9yS6i5qf1eDzIL4y0m8evD14SeykLqH7jL0uqaiQ=="},"keyId":1},"registrationId":191,"advSecretKey":"HZjP2VOxSxzqK+0KWxSejXTmuXywqfbWajySiBbyL2I=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"fpc-f_pkSI64nxOqFaq1cg","phoneId":"3989024b-a11e-427b-84e7-0e50c4341cd4","identityId":{"type":"Buffer","data":"9aYuiu20I0vGa/H0U+uc9TasD8Y="},"registered":true,"backupToken":{"type":"Buffer","data":"g1JmO8Y6Gee17uktsi8ycXqHIqw="},"registration":{},"pairingCode":"BRHMX4E9","me":{"id":"243906834923:13@s.whatsapp.net","lid":"110200774254837:13@lid"},"account":{"details":"COuinooEEKKlqrkGGAEgACgA","accountSignatureKey":"mbcAngFiAkPRyQVZWuse9jy6scgcOL/Oha5C6mYavHI=","accountSignature":"vbjYMR+dcfNMFtDauqbfTqW3Oo1y8sfuYWo2fySvyKuL6WqeQhqEtPoDS67F1yOD/jECaXDfStGkW5lqsOgXAw==","deviceSignature":"vy/Lu+sQBZnJl9nGMZJvcZRZGXsk/JwLsD1ixtKCctZ+eYYfYy5oprxntzJ25U6B/z6tuZl8yHxgInolY8KcjA=="},"signalIdentities":[{"identifier":{"name":"243906834923:13@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZm3AJ4BYgJD0ckFWVrrHvY8urHIHDi/zoWuQupmGrxy"}}],"platform":"android","lastAccountSyncTimestamp":1730843305}" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By 𝙎-𝙏𝞢𝞜*",
  author: process.env.PACK_AUTHER || "DRK-ST-MD ",
  packname: process.env.PACK_NAME || "𝙎-𝙏𝞢𝞜",
  botname: process.env.BOT_NAME || "DRK-ST-MD",
  ownername: process.env.OWNER_NAME || "𝙎-𝙏𝞢𝞜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
