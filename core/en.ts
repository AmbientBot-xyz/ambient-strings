export default {
  global: {
    notEnabled:
      "It looks like you are trying to use the bot on a group that has not been added to the allowed list in the <c>Ambient management panel</c>. Ask bot administrator to add a group or create your own bot completely free on {0}",
    properBotIssues: [
      "It looks like you are trying to use a bot that is not working properly. Information about the bot enabled on this group:\n",
      "🤖 Bot name: <c>{0}</c>",
      "🪪 Account: <c>{1}</c>",
    ],
    wrongBotMentioned: [
      "It looks like you are trying to use the wrong bot. Information about the bot enabled on this group:\n",
      "🤖 Bot name: <c>{0}</c>",
      "🪪 Account: <c>{1}</c>",
    ],
    disabledManual: "♿ Bot <c>{0}</c> has been disabled on this group by the administrator!",
    disabledAuto: "💡 Bot <c>{0}</c> has been disabled on this group because it has been added to allowed groups in another bot.",
    enabled: "🔘 Bot <c>{0}</c> has been enabled on this group, all members of the group can now use it.",
    threadJailed: "⏳ Operations are currently being performed in this group that prevent your message from being processed.",
    userJailed: "⏳ Operations are currently being performed on your account preventing the processing of your message.",
    eventError: [
      "💀 An unknown error occurred while trying to process your message. Please try again later and if the error persists, notify us on the Discord server: {0}\n",
      "📜 Detailed info:",
      "{1}",
    ],
    execError: [
      "💀 An unknown error occurred while trying to execute command. Please try again later and if the error persists, notify us on the Discord server: {0}\n",
      "📜 Detailed info:",
      "{1}",
    ],
    welcome: "👋🏻 Welcome, <c>{0}</c>!",
    commandNotFound: "❌ Command not found! Type <c>{0}</c> for a list of available commands.",
  },
  commands: {
    tvp: {
      empty: "❌ You must enter the text of the bar! (max. <c>{0}</c> characters)",
      mentions: "❌ The content of the bar must not contain any mentions!",
      tooLong: "❌ The content of the bar is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      generating: "⏳ Generating bar...",
      done: "{0} Here is the generated bar:",
    },
    bot: [
      "{0} Ambient info:\n",
      "☯ RAM: <c>{1}/{2} GB</c> {3} <c>{4}%</c>",
      "💾 Disk: <c>{5}/{6} GB</c> {3} <c>{7}%</c>",
      "⏳ Uptime: <c>{8}</c>",
      "🤖 Running bots: <c>{9}</c>",
      "✨ Core: <c>v{10}+{11}/{12}</c>",
      "📦 Instance: <c>{13}</c>",
      "🪁 Environment: <c>v{14}+{15}/{16}</c>",
      "🆙 Update date: <c>{17}</c> {3} <c>{18}</c>",
      "🍒 Creation date: <c>{19}</c>",
      "😼 Author: <c>{20}</c>",
      "🤗 Discord: {21}",
    ],
    help: {
      list: [
        "{0} List of available commands (<c>{1}</c>):\n", //
        "😆 Fun: {2}\n",
        "ℹ Info: {3}\n",
        "🎶 Music: {4}\n",
        "🤔 Others: {5}\n",
        "✨ To see detailed information on the selected command, type <c>{6} <command name></c>, e.g. <c>{6} {7}</c>.",
      ],
      about: [
        "{0} Info about command <c>{1}</c>:\n", //
        "✏ Description: <c>{2}</c>",
        "🗃 Category: <c>{3}</c>",
        "⚓ Other names: {4}",
      ],
    },
    spotify: {
      alreadyConnected: "❌ You must disconnect your current account before connecting a new one!",
      urlSent: "✅ We sent you a link to connect your Spotify account with Ambient in a private message, also check the <c>others</c> folder.",
      unableToSend: "🔌 We haven't been able to send you a private message, so we need to do it here. Here is the link to connect your Spotify account to Ambient: {0}",
      connectionUrl: "🔌 Here is the link to connect your Spotify account to Ambient: {0}",
      notConnected: "❌ You haven't connected Ambient to your Spotify account!",
      notConnectedMentioned: "❌ <c>{0}</c> has not connected Ambient to Spotify account!",
      disconnected: "✅ Successfully disconnected Ambient from Spotify account!",
      mustReconnect: "❌ You need to reconnect Ambient to your Spotify account!",
      mustReconnectMentioned: "❌ <c>{0}</c> must reconnect Ambient to the Spotify account!",
      notListening: "❌ You're not listening to anything at the moment.",
      notListeningMentioned: "❌ <c>{0}</c> is not currently listening to anything.",
      mentionedNotUser: "❌ Mentioned user has never used Ambient.",
      listeningLocal: "❌ <c>{0}</c> is currently listening to a local track, you cannot play it on your Spotify account.",
      unableToPlay: "❌ We couldn't play the song on your Spotify account.",
      playbackStarted: "💿 Starting playback of <c>{0}</c> {1} <c>{2}</c> from album <c>{3}</c> on device <c>{4} {5}</c>...",
      nowListening: [
        "🎶 <c>{0}</c> {1} <c>Now listening</c>", //
        "\n💿 <c>{2}</c> {1} <c>{3}</c>\n",
        "⏸️ {4}",
        "\n💽 Album: <c>{5}</c>",
        "💾 Local file: <c>{6}</c>",
        "🎚️ Volume level: <c>{7}%</c>",
        "{8} Device: <c>{9}</c>",
      ],
      recentlyPlayed: [
        "🎶 <c>{0}</c> {1} <c>Recently played tracks</c>", //
        "\n{2}",
      ],
    },
  },
};
