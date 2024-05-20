const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "sh!t is happenin 💀" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "0702807156";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256760712236";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // SUHAIL_12_29_05_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEzLFxuICAgICAgICA3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDk1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTczLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDk0LFxuICAgICAgICAxODUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU0LFxuICAgICAgICA1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjksXG4gICAgICAgIDMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDUzLFxuICAgICAgICAxNyxcbiAgICAgICAgOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDY3LFxuICAgICAgICA2NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDk4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDk2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQxLFxuICAgICAgICA3NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MixcbiAgICAgICAgMTg5LFxuICAgICAgICAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTExLFxuICAgICAgICAyMyxcbiAgICAgICAgODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxODIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmcDI1d0xad1ZwdFdrMUEyUm1qZnRTWnRjRzVzbVpGR2E1SElmeTNCZE9ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1Njc2MDcxMjIzNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzZEMDU0MjU3RkQ5NUVENkIyQUIxMEEyNDIzRTE5QzhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2MjA4MTQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzYwNzEyMjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDODU1N0EyMzI1MThFQjUyNzc0RjNBRUMyOENCMEM2NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTYyMDgxNDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid2Q0Z0N6NDZTUWUyOFcyNXBMUkpsQVwiLFxuICBcInBob25lSWRcIjogXCIzZGRhZGExMC02M2NjLTRjNTAtYmM2Ni1mNmMwZDFmMGNhZjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ0LFxuICAgICAgMjA4LFxuICAgICAgMTE1LFxuICAgICAgMTQyLFxuICAgICAgMTkxLFxuICAgICAgNzQsXG4gICAgICAxMTEsXG4gICAgICAxNTAsXG4gICAgICAxMTIsXG4gICAgICA3NixcbiAgICAgIDE0NyxcbiAgICAgIDEzNixcbiAgICAgIDE0MSxcbiAgICAgIDI1NSxcbiAgICAgIDE3LFxuICAgICAgMTUsXG4gICAgICAyMjIsXG4gICAgICAxOTIsXG4gICAgICAxNDksXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICA1NSxcbiAgICAgIDc5LFxuICAgICAgNTUsXG4gICAgICAxNDEsXG4gICAgICAxNTEsXG4gICAgICA5OCxcbiAgICAgIDEwMixcbiAgICAgIDE0MSxcbiAgICAgIDQ1LFxuICAgICAgMTIsXG4gICAgICAxNTYsXG4gICAgICAxMjUsXG4gICAgICAxNTAsXG4gICAgICAzMixcbiAgICAgIDEyOSxcbiAgICAgIDU1LFxuICAgICAgMzcsXG4gICAgICAxNzcsXG4gICAgICAyMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVFDRENRVDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc2MDcxMjIzNjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNhZHogUHJvXCIsXG4gICAgXCJsaWRcIjogXCIxNDMxMDAxOTAxNTQ5NTA6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHI4bHlnUWhvU3RzZ1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaNUhYTUpKY0NMTytvc09nNHMzNjl6Rk1XM1dyS1JZZDl4V1J3dndTM1FrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInE0blEwMDlwRVBrRHBYVDcxYkxxc2U5VTE2eUdZc2tkSXJBN3ZBRDZKOThyZ3owMTBOWjFwSGNGYkJraitibWhnVSswaVhmK3I5ckxiOXRBZHNTYkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRJNVRzQXNlaWo4ZDdSOVppSkhucFNVYk9TZE8xQUNRbENtZkRRTnRJQ2wyQW5jQ05hYU9EMnNLSjN5UUFTOXA5cVN0eGNoaDZtQnpwaWdwOVpTMmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc2MDcxMjIzNjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYyMDgxMzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCK3ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUIrdi5qc29uIjogIntcImtleURhdGFcIjpcImRsUkI1eXl0U3lMTmMyaVFQcEhvVmN2bUhQelJVTThCM1dnNkwxcGlqZEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODQyNzg4NDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjIwODE0MTIyNFwifSIKfQ==


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```sh!t is happenin```", //* 💀 "),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "SADZPRO",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
