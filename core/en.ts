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
    welcome:
      "👋🏻 Hi, <c>{0}</c>! My name is <c>Ambient</c>, I am a secure, efficient and multifunctional bot for groups on Messenger. To see what I can do, use the <c>{1}</c> command.\n\n🤗 Do you have questions or need help? You will find it on our <c>Discord server</c>, where you will also learn about news related to Ambient: {2}",
    commandNotFound: "❌ Command not found! Type <c>{0}</c> for a list of available commands.",
    unexpectedArgs: "❌ This command takes no arguments!",
    groupOnly: "❌ This command can only be used in group conversations!",
    goodNight: "🥱 Good night, <c>{0}</c>! 😴",
  },
  commands: {
    cat: {
      searching: "⏳ Searching for a picture of a cat...",
      done: "{0} Here is a random cat photo:",
    },
    dog: {
      searching: "⏳ Searching for a picture of a dog...",
      done: "{0} Here is a random dog photo:",
    },
    fox: {
      searching: "⏳ Searching for a picture of a fox...",
      done: "{0} Here is a random fox photo:",
    },
    shiba: {
      searching: "⏳ Searching for a picture of Shiba Inu...",
      done: "{0} Here is a random Shiba Inu photo:",
    },
    heart: {
      empty: "❌ You must enter the text of the heart! (max. <c>{0}</c> characters)",
      mentions: "❌ The content of the heart must not contain any mentions!",
      tooLong: "❌ The content of the heart is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      generating: "⏳ Generating heart...",
      done: "{0} Here is the generated heart:",
    },
    rip: {
      empty: "❌ You must enter the text of the tombstone! (max. <c>{0}</c> characters)",
      mentions: "❌ The content of the tombstone must not contain any mentions!",
      tooLong: "❌ The content of the tombstone is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      generating: "⏳ Generating tombstone...",
      done: "{0} Here is the generated tombstone:",
    },
    tvp: {
      empty: "❌ You must enter the text of the bar! (max. <c>{0}</c> characters)",
      mentions: "❌ The content of the bar must not contain any mentions!",
      tooLong: "❌ The content of the bar is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      generating: "⏳ Generating bar...",
      done: "{0} Here is the generated bar:",
    },
    bot: [
      "{0} Ambient info:\n",
      "☯ RAM: <c>{1}/{2} GiB</c> {3} <c>{4}%</c>",
      "💾 Disk: <c>{5}/{6} GiB</c> {3} <c>{7}%</c>",
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
      usage: [
        "{0} Correct usage of command <c>{1}</c>:",
        "\n✨ <c>{1} <command name (optionally)></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1}</c>",
        "⭐ <c>{1} {2}</c>",
        "⭐ <c>{1} {3}</c>",
      ],
      list: [
        "{0} List of available commands (<c>{1}</c>):\n",
        "🦊 Animals: {2}\n",
        "⚙️ Configuration: {3}\n",
        "😆 Fun: {4}\n",
        "ℹ Info: {5}\n",
        "🫡 Social: {7}\n",
        "🛠️ Tools: {8}\n",
        "✨ To see detailed information on the selected command, type <c>{9} <command name></c>, e.g. <c>{9} {10}</c>.",
      ],
      about: [
        "{0} Info about command <c>{1}</c>:\n", //
        "✏ Description: <c>{2}</c>",
        "🗃 Category: <c>{3}</c>",
        "⚓ Other names: {4}",
      ],
    },
    instagram: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:", //
        "\n✨ <c>{1} <username></c>\n",
      ],
      notFound: "❌ The given username was not found!",
      collecting: "⏳ Collecting info about user <c>@{0}</c>...",
      done: [
        "{0} Info about <c>@{1}</c> profile on Instagram:\n",
        "🫡 Full name: <c>{2}</c>",
        "🆎 Biography: <c>{3}</c>",
        "🔒 Is private: <c>{4}</c>",
        "🤔 Is verified: <c>{5}</c>",
        "🤩 Followers: <c>{6}</c>",
        "👀 Following: <c>{7}</c>",
        "📰 Posts count: <c>{8}</c>",
        "🔗 Profile: https://instagram.com/{1}",
        "🚪 External link: {9}",
      ],
    },
    spotify: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:",
        "\n🔌 <c>{1} connect</c> {2} Allows you to connect Ambient with your Spotify account",
        "\n🔥 <c>{1} disconnect</c> {2} Allows you to disconnect Ambient from your Spotify account",
        "\n🤠 <c>{1} profile <@user (optionally)></c> {2} Allows you to check info about your or the mentioned user Spotify profile",
        "\n🧐 <c>{1} group</c> {2} Allows you to check what are members of this group currently listening to",
        "\n🎧 <c>{1} nowplaying <@user (optionally)></c> {2} Allows you to check what are you or the user mentioned listening to now",
        "\n⭐ <c>{1} toptracks <@user (optionally)></c> {2} Allows you to check what are your or the user mentioned most listened tracks",
        "\n🤩 <c>{1} topartists <@user (optionally)></c> {2} Allows you to check what are your or the user mentioned most listened artists",
        "\n🕰 <c>{1} recent <@user (optionally)></c> {2} Allows you to check what you or the user mentioned have been listening to recently",
        "\n💿 <c>{1} play <song or @user></c> {2} Allows you to play on your Spotify account the selected song or the one that the user mentioned is listening to",
      ],
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
      premiumRequired: "❌ Playing songs on your Spotify account using Ambient requires 💎 Spotify Premium account!",
      outOfRange: "❌ Selected position does not exist! (max. <c>{0}</c> znaków, <c>{1}</c> selected)",
      emptyResults: "❌ No track matching your query found!",
      selectionTimeout: "❌ No item was selected within <c>{0}</c> seconds! Try again.",
      trackSelectionList: [
        "🕵🏽‍♂️ Choose the track you wish to play:\n",
        "{0}",
        "\n🪄 Send only the number corresponding to the selected item, you can also react to this message by using 👍🏼 (variant irrelevant) to select the first item.",
      ],
      playbackStarted: "💿 Starting playback of <c>{0}</c> {1} <c>{2}</c> from album <c>{3}</c> on device <c>{4} {5}</c>...",
      group: [
        "🧐 What are currently members of <c>{0}</c> group listening to?\n", //
        "{1}",
        "\n🧮 <c>{2}</c> out of <c>{3}</c> members of this group connected Spotify accounts with Ambient, <c>{4}</c> of them are currently listening.",
      ],
      groupNoName: [
        "🧐 What are currently members of this group listening to?\n", //
        "{1}",
        "\n🧮 <c>{2}</c> out of <c>{3}</c> members of this group connected Spotify accounts with Ambient, <c>{4}</c> of them are currently listening.",
      ],
      profile: [
        "🤠 Info about Spotify profile of <c>{0}</c>:\n",
        "🆎 Name: <c>{1}</c>",
        "🌍 Country: <c>{2}</c>",
        "👀 Followers count: <c>{3}</c>",
        "🔗 URL: {4}",
        "💎 Spotify Premium: <c>{5}</c>",
      ],
      nowListening: [
        "🎧 <c>{0}</c> {1} <c>Now listening</c>",
        "\n💿 <c>{2}</c> {1} <c>{3}</c>\n",
        "⏸️ {4}",
        "\n💽 Album: <c>{5}</c>",
        "💾 Local file: <c>{6}</c>",
        "🎚️ Volume level: <c>{7}%</c>",
        "{8} Device: <c>{9}</c>",
      ],
      recentlyPlayed: [
        "🕰 Recently played tracks of <c>{0}</c>:", //
        "\n{1}",
      ],
      topTracks: [
        "⭐ Most played tracks of <c>{0}</c>:", //
        "\n{1}",
      ],
      topArtists: [
        "🤩 Most played artists of <c>{0}</c>:", //
        "\n{1}",
      ],
    },
    tiktok: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:", //
        "\n✨ <c>{1} <link to TikTok></c>\n",
      ],
      invalidUrl: "❌ TikTok link provided is invalid!",
      preparing: "⏳ Preparing TikTok: <c>{0}</c> {1} <c>{2}</c>",
      tooLong: "❌ TikTok is too long! (<c>{0}</c>, max. <c>{1}</c>)",
      tooBig: "❌ TikTok size is too big! (<c>{0}</c>, max. <c>{1}</c>)",
      done: [
        "{0} Here is your TikTok: <c>{1}</c> {2} <c>{3}</c>\n",
        "🫡 Author: <c>{4}</c> {2} <c>@{5}</c>",
        "🌍 Country: <c>{6}</c>",
        "📅 Date: <c>{7}</c> {2} <c>{8}</c>",
        "💖 Likes: <c>{9}</c>",
        "💬 Comments: <c>{10}</c>",
        "⭐ Favorites: <c>{11}</c>",
        "🏹 Shares: <c>{12}</c>",
        "👀 Views: <c>{13}</c>",
        "💾 Downloads: <c>{14}</c>",
      ],
    },
    name: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:", //
        "\n✨ <c>{1} <new group name></c>\n",
      ],
      doneSet: "{0} Successfully set group name to <c>{1}</c>!",
      doneChanged: "{0} Successfully changed group name from <c>{1}</c> to <c>{2}</c>!",
    },
  },
};
