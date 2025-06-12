const moment = require('moment-timezone');
const axios = require('axios');

module.exports = {
  config: {
    name: "info",
    aliases: ["inf", "in4"],
    version: "2.0",
    author: " Eren",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Sends information about the bot and admin along with a video."
    },
    longDescription: {
      en: "Sends information about the bot and admin along with a video."
    },
    category: "Information",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ message }) {
    this.sendInfo(message);
  },

  onChat: async function ({ event, message }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.sendInfo(message);
    }
  },

  sendInfo: async function (message) {
    const botName = "乛ŋoɮıŤʌ シ︎";
    const authorName = "Nobita";
    const authorFB = "https://www.facebook.com/profile.php?id=61565108831644";
    const authorInsta = "tushann143";
    const status = "𝗦𝗶𝗻𝗴𝗹𝗲";

    const now = moment().tz('Asia/Dhaka');
    const time = now.format('h:mm:ss A');

    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const uptimeString = `${hours}h ${minutes}m ${seconds}s`;

    const videoUrl = "https://files.catbox.moe/t73j7v.mp4"; /*dont use imgur url for this cmd*/

    const body = `

┏━━━━━━━━━━━━━━━━┓
┃ 🧑 Admin Info
┃ ╰➤ Name: ${乛ŋoɮıŤʌ シ︎}
┃ ╰➤ Facebook: ${https://www.facebook.com/profile.php?id=61565108831644}
┃ ╰➤ Instagram: ${Tushan}
┃ ╰➤ Status: ${Single}
┃
┃ 🤖 Bot Details
┃ ╰➤ Name: ${乛ŋoɮıŤʌ シ︎}
┃ ╰➤ Time: ${time}
┃ ╰➤ Uptime: ${uptimeString}
┗━━━━━━━━━━━━━━━━┛

I may not be perfect,
   but I’ll always reply to you.`;

    const response = await axios.get(videoUrl, { responseType: 'stream' });

    message.reply({
      body,
      attachment: response.data
    });
  }
};
