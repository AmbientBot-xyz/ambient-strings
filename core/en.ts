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
    mentionedNotUser: "❌ Mentioned user has never used Ambient.",
    commandNotFound: "❌ Command not found! Type <c>{0}</c> for a list of available commands.",
    unexpectedArgs: "❌ This command takes no arguments!",
    groupOnly: "❌ This command can only be used in group conversations!",
    groupAdminOnly: "❌ This command can only be used by group administrators!",
    globalAdminOnly: "❌ You don't have permission to use this command!",
    goodNight: "🥱 Good night, <c>{0}</c>! 😴",
    unavailable: "❌ This command is currently unavailable.",
    outOfRange: "❌ Selected position does not exist! (max. <c>{0}</c>, <c>{1}</c> selected)",
  },
  commands: {
    alpaca: {
      searching: "⏳ Searching for a picture of the alpaca...",
      done: "{0} Here is a random photo of the alpaca by <c>{1}</c> from <c>{2}</c>:",
    },
    capybara: {
      searching: "⏳ Searching for a picture of the capybara...",
      done: "{0} Here is a random photo of the capybara by <c>{1}</c> from <c>{2}</c>:",
    },
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
    frog: {
      searching: "⏳ Searching for a picture of a frog...",
      done: "{0} Here is a random photo of a frog by <c>{1}</c> from <c>{2}</c>:",
    },
    pigeon: {
      searching: "⏳ Searching for a picture of a pigeon...",
      done: "{0} Here is a random photo of a pigeon by <c>{1}</c> from <c>{2}</c>:",
    },
    racoon: {
      searching: "⏳ Searching for a picture of the racoon...",
      done: "{0} Here is a random photo of the racoon by <c>{1}</c> from <c>{2}</c>:",
    },
    shiba: {
      searching: "⏳ Searching for a picture of Shiba Inu...",
      done: "{0} Here is a random Shiba Inu photo:",
    },
    turtle: {
      searching: "⏳ Searching for a picture of a turtle...",
      done: "{0} Here is a random photo of a turtle by <c>{1}</c> from <c>{2}</c>:",
    },
    interactions: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <on/off></c>",
      ],
      disabled: "🤐 Successfully disabled interactions in this group, Ambient will not respond to any messages except for commands starting with <c>{0}</c>.",
      enabled: "👉🏻 Successfully enabled interactions in this group, Ambient will respond to some messages in addition to commands starting with <c>{0}</c>.",
    },
    variables: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} list</c>",
        "✨ <c>{1} set <name> <content></c>",
        "✨ <c>{1} del <name></c>",
        "✨ <c>{1} get <name></c>",
      ],
      list: "{0} List of currently set variables: <c>{1}</c>",
      set: "✅ Successfully updated variable <c>{0}</c>!",
      notFound: "❌ Variable <c>{0}</c> does not exist!",
      deleted: "🗑 Successfully deleted variable <c>{0}</c>!",
      about: [
        "{0} Info about variable:\n", //
        "🔖 Name: <c>{1}</c>",
        "📖 Content: <c>{2}</c>",
        "🗓 Last updated: <c>{4}</c> {3} <c>{5}</c>",
        "🤡 Last updated by: <c>{6}</c>",
      ],
    },
    achievement: {
      empty: "❌ You must enter the text of the achievement! (max. <c>{0}</c> characters)",
      mentions: "❌ The content of the achievement must not contain any mentions!",
      tooLong: "❌ The content of the achievement is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      generating: "⏳ Generating achievement...",
      done: "{0} Here is the generated achievement:",
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
      "🏷 TypeScript: <c>v{17}</c>",
      "🆙 Update date: <c>{18}</c> {3} <c>{19}</c>",
      "🍒 Creation date: <c>{20}</c>",
      "😼 Author: <c>{21}</c>",
      "🤗 Discord: {22}",
    ],
    help: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:",
        "\n✨ <c>{1} <command name (optionally)></c>\n",
        "💡 Examples:",
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
        "🫡 Social: {6}\n",
        "🛠️ Tools: {7}\n",
        "✨ To see detailed information on the selected command, type <c>{8} <command name></c>, e.g. <c>{8} {9}</c>.",
      ],
      about: [
        "{0} Info about command <c>{1}</c>:\n", //
        "✏ Description: <c>{2}</c>",
        "🗃 Category: <c>{3}</c>",
        "⚓ Other names: {4}",
      ],
    },
    weather: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:",
        "\n✨ <c>{1} <location or @user (optionally)></c>\n",
        "💡 Examples:",
        "⭐ <c>{1}</c>",
        "⭐ <c>{1} Leszno</c>",
        "⭐ <c>{1} Zielona Góra, PL</c>",
        "⭐ <c>{1} Chicago, US</c>",
      ],
      notSetMentioned: "❌ <c>{0}</c> did not provide location!",
      notFound: [
        "❌ The given location was not found!\n",
        "{0} Correct usage of command <c>{1}</c>:",
        "\n✨ <c>{1} <location or @user (optionally)></c>\n",
        "💡 Examples:",
        "⭐ <c>{1}</c>",
        "⭐ <c>{1} Leszno</c>",
        "⭐ <c>{1} Zielona Góra, PL</c>",
        "⭐ <c>{1} Chicago, US</c>",
      ],
      done: [
        "{0} Current weather in <c>{1}</c>:\n",
        "🌡️ Temperature: <c>{2}°C</c> {3}",
        "✋🏻 Feels like: <c>{4}°C</c> {5}",
        "🌃 Sky: <c>{6}</c> {7}",
        "🎈 Pressure: <c>{8} hPa</c>",
        "💨 Wind speed: <c>{9} km/h</c>",
        "💧 Humidity: <c>{10}%</c>",
        "☁️ Cloudiness: <c>{11}%</c>",
        "🌅 Sunrise: <c>{12}</c>",
        "🌇 Sunset: <c>{13}</c>",
      ],
    },
    instagram: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:", //
        "\n✨ <c>{1} <username></c>\n",
        "💡 Examples:",
        "⭐ <c>{1} existencefornoreason</c>",
        "⭐ <c>{1} kmatuszak04</c>",
        "⭐ <c>{1} maciekkarecki</c>",
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
      listeningLocal: "❌ <c>{0}</c> is currently listening to a local track, you cannot play it on your Spotify account.",
      unableToPlay: "❌ We couldn't play the song on your Spotify account.",
      premiumRequired: "❌ Playing songs on your Spotify account using Ambient requires 💎 Spotify Premium account!",
      emptyResults: "❌ No track matching your query found!",
      selectionTimeout: "❌ No item was selected within <c>{0}</c> seconds! Try again.",
      trackSelectionList: [
        "🕵🏽‍♂️ Choose the track you wish to play:\n",
        "{0}",
        "\n🪄 Send only the number corresponding to the selected item, you can also react to this message by using 👍🏼 (variant irrelevant) to select the first item.",
      ],
      playbackStarted: "💿 Starting playback of <c>{0}</c> {1} <c>{2}</c> from album <c>{3}</c> on device <c>{4} {5}</c>...",
      nobodyConnected: "❌ No group member has connected their Spotify account to Ambient!",
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
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <link to TikTok></c>",
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
    attachments: {
      mustReplyToAttachments: "❌ You must reply to a message that contains attachments!",
      done: "{0} Here is the list of attachments from the selected message:\n\n{1}",
    },
    everyone: "{0} Successfully mentioned {1} users!",
    name: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <new group name></c>",
      ],
      doneSet: "{0} Successfully set group name to <c>{1}</c>!",
      doneChanged: "{0} Successfully changed group name from <c>{1}</c> to <c>{2}</c>!",
    },
    shorten: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:",
        "\n✨ <c>{1} <link to shorten></c>\n",
        "💡 Examples:",
        "⭐ <c>{1} https://facebook.com/confirmed2iq</c>",
        "⭐ <c>{1} https://github.com/AmbientBot-xyz</c>",
        "⭐ <c>{1} https://reddit.com/r/linux</c>",
      ],
      done: "{0} Here is your shortened link: {1}",
    },
    warning: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:",
        "\n👮🏼‍♂️ <c>{1} add <@user> <reason></c> {2} Allows you to give the user a warning with a selected reason",
        "\n🗑 <c>{1} remove <@user> <number></c> {2} Allows you to remove the user's warning with the selected number",
        "\n📜 <c>{1} list <@user (optionally)></c> {2} Allows you to check a list of your or the mentioned user's warnings",
        "\n🧐 <c>{1} group</c> {2} Allows you to check the number of warnings of individual group users",
      ],
      reasonMentions: "❌ Reason for the warning must not contain mentions!",
      added: "{0} Administrator <c>{1}</c> gave a warning to <c>{2}</c> because of <c>{3}</c>, it is h{4} <c>{5}</c> warning.",
      noWarnings: "❌ You don't have any warnings yet!",
      noWarningsMentioned: "❌ <c>{0}</c> doesn't have any warnings yet!",
      noWarningsGroup: "❌ No group member has any warnings yet!",
      list: "📜 Warning list of <c>{0}</c> (<c>{1}</c>):\n\n{2}",
      group: [
        "🧐 How many warnings do members of <c>{0}</c> group have?\n", //
        "{1}",
        "\n🧮 <c>{2}</c> out of <c>{3}</c> members of this group have warnings, they have <c>{4}</c> in total.",
      ],
      groupNoName: [
        "🧐 How many warnings do members of this group have?\n", //
        "{1}",
        "\n🧮 <c>{2}</c> out of <c>{3}</c> members of this group have warnings, they have <c>{4}</c> in total.",
      ],
      deleted: "🗑 Administrator <c>{0}</c> removed warning number <c>{2}</c> from <c>{1}</c>, now {3}he has <c>{4}</c> warnings left.",
    },
  },
};
