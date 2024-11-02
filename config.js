
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


  
 "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VENlZQRnd3WGtpSWcvdW8xR0ViOUJLRTJUVWVLZlBZbkhpaVhSZUFFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejgwZGNXeWZlaWQzZStMQ3daNElhT0paaHBWcS9XSWFIZmhZSW1VM1kxND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRlJtOVdQMkIyL2FEMnpQd09JaFZaZlczc1JCeTlpMDY2LzZXUFpHMzNRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvK3VhY2xFWEZ4UTIyRjBYaGdFOVY4aFg4VzY4ellDZlVTQ0dTVnh1TUh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBMbVNYdUM4engrYWgzTTlEcHdCVDZGd1BSSmZOS2RkMmE3bmM5MWJwSE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHWncwbzdJTFpPUStUQWQ2b2xabmsrUXJCMUxqNEEwTmM5T0tMVVpiM2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0d1cnB5V3BhV2g0aGl5Y3Nnem9aWmYvRXpuTnBYRThRemVzeW1yc3FHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUFtcU1vS2I2VE9NMUUxaUJ1dFVydy9GOUhGeUNoL3JjUTRWZFE4V1RIWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFvRUlDV1E5L3BVTUUrWURtU2Jvd2x1QkhSSnNLUDZITklqc3Mzc2RSc05XQTJUU1FNWE8wSDRMRDRyNVpjdE1Rc0N1VGRNWXZZQ2NiQTlHZFdSb2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiJxK3hYOEFrdkxIR0kwd2ZqUUlzQjBDOUNiU20zY2ZpdjhnOENOVWxuTHRRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyODk4MDI4OTc1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBMDY4NERERkQ2NTI1MkVGQzIxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA1ODQ2OTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlpHcURRV0owU18yeG5RSmtJV1FWWmciLCJwaG9uZUlkIjoiMmEyNzljZjQtZmI1YS00MDYwLWI3NmQtNjI0YzZhZjMzMTRjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx1Ymh6VlRLS2xWdDduOU9KVWhLbTFnTU1kYz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVERrTG96N3ZKVTBtb0hVZVA2UmRlOXRYUitRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHliMC9FSUVPWEFtcmtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYnp3OEdIdzNtLzFuem02Q2VLdVpoYnhNSm9qT1RQczJEeEh2ZzFyVDMxRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRThyYTdsTS9SNFhvTVFSK1BocVRtRit1RkJGbzY5N2xJVENTUEY2cjB2VnNYb0s2SUVPVjQrRzNTbFhlRVErdkM3bWNja3l2ZFUyS0gxQWZXN01aQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IlNjZGxlNG1RN1M5OFNBekdiZHZtc1pIbnIwSnRvb2NlRkhKbmQ5eVpaTGVPZFFwOW9LdU40clVDcTZscU8zd0ovcmRlQ1RIcHcxSHg0ZjBseXl6TGdnPT0ifSwibWUiOnsiaWQiOiIyMjg5ODAyODk3NToxNkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjY4MDg0MzU4NDg0MTM3OjE2QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjg5ODAyODk3NToxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXODhQQmg4TjV2OVo4NXVnbmlybVlXOFRDYUl6a3o3Tmc4Ujc0TmEwOTlSIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDU4NDY5MCwibGFzdFByb3BIYXNoIjoiMlpONml2IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQbHQifQ==" //Make sure session id starts with Byte;;;



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
