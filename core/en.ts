export default {
  global: {
    notEnabled:
      "It looks like you are trying to use the bot on a group that has not been added to the allowed list in the <c>Ambient management panel</c>. Ask bot administrator to add a group or create your own bot completely free on {0}",
    properBotIssues: [
      "It looks like you are trying to use a bot that is not working properly. Information about the bot enabled on this group:\n",
      "🤖 Bot name: <c>{0}</c>",
      "🪪 Account: <c>{1}</c>",
    ],
    wrongBot: [
      "It looks like you are trying to use the wrong bot. Information about the bot enabled on this group:\n", //
      "🤖 Bot name: <c>{0}</c>",
      "🪪 Account: <c>{1}</c>",
    ],
    disabledManual: "♿ Bot <c>{0}</c> has been disabled on this group by the administrator!",
    disabledAuto: "💡 Bot <c>{0}</c> has been disabled on this group because it has been added to allowed groups in another bot.",
    enabled: "🔘 Bot <c>{0}</c> has been enabled on this group, all members of the group can now use it.",
    eventError: [
      "💀 Ambient encountered an unknown error while trying to process your message, please try again later. It has been automatically reported to our Discord server: {0}\n",
      "⚠️ Name: <c>{1}</c>",
      "📜 Description: <c>{2}</c>",
      "📎 Details: {3}",
    ],
    execError: [
      "💀 Ambient encountered an unknown error while trying to execute command, please try again later. It has been automatically reported to our Discord server: {0}\n",
      "⚠️ Name: <c>{1}</c>",
      "📜 Description: <c>{2}</c>",
      "📎 Details: {3}",
    ],
    welcome:
      "👋🏻 Hi, <c>{0}</c>! My name is <c>Ambient</c>, I am a secure, efficient and multifunctional bot for groups on Messenger. To see what I can do, use the <c>{1}</c> command.\n\n🤗 Do you have questions or need help? You will find it on our <c>Discord server</c>, where you will also learn about news related to Ambient: {2}",
    welcomeGroup:
      "👋🏻 Hi! My name is <c>Ambient</c>, I am a secure, efficient and multifunctional bot for groups on Messenger. To see what I can do, use the <c>{1}</c> command.\n\n🤗 Do you have questions or need help? You will find it on our <c>Discord server</c>, where you will also learn about news related to Ambient: {2}",
    mentionedNotMember: "❌ Mentioned user is not a member of this group!",
    mentionedNotUser: "❌ Mentioned user has never used Ambient.",
    commandNotFound: "❌ Command not found! Type <c>{0}</c> for a list of available commands.",
    unexpectedArgs: "❌ This command takes no arguments!",
    commandUnavailable:
      "👨🏻‍🍳 This command is not yet available. Join our <c>Discord server</c> to stay updated on Ambient latest features and don't miss the moment when this functionality is completed: {0}",
    groupOnly: "❌ This command can only be used in group conversations!",
    groupAdminOnly: "❌ This command can only be used by group administrators!",
    teamMemberOnly: "❌ You don't have permission to use this command!",
    premiumOnly: "❌ This command is only available in <c>💎 Ambient Premium</c>!",
    goodNight: "🥱 Good night, <c>{0}</c>! 😴",
    happyBirthday: "🎂 Happy birthday, <c>{0}</c>! 🥳",
    outOfRange: "❌ Selected position does not exist! (max. <c>{0}</c>, <c>{1}</c> selected)",
    botAdminRequired: "❌ Bot must be a group admin to use this command.",
    nsfwNotAllowed: "❌ NSFW content is not available in this group, check <c>{0}</c> command.",
    userBlacklisted: "🫨 You cannot use <c>Ambient</c> because you are <c>blacklisted</c>.",
    userPurplelisted: [
      "😤 This group contains users who have been added to the purplelist. Using the bot will not be possible until the following members are removed from the conversation:\n",
      "{0}",
      "\n⏳ The group is checked for the presence of purplelisted users every <c>5 minutes</c>. Next check will take place in <c>⌚ {1}</c> and <c>{2}</c>.",
    ],
  },
  commands: {
    alpaca: {
      searching: "⏳ Searching for a photo of the alpaca...",
      done: "{0} Here is a random photo of the alpaca by <c>{1}</c> from <c>{2}</c>:",
    },
    beaver: {
      searching: "⏳ Searching for a photo of a beaver...",
      done: "{0} Here is a random photo of a beaver by <c>{1}</c> from <c>{2}</c>:",
    },
    capybara: {
      searching: "⏳ Searching for a photo of the capybara...",
      done: "{0} Here is a random photo of the capybara by <c>{1}</c> from <c>{2}</c>:",
    },
    cat: {
      searching: "⏳ Searching for a photo of a cat...",
      done: "{0} Here is a random cat photo:",
    },
    dog: {
      searching: "⏳ Searching for a photo of a dog...",
      done: "{0} Here is a random dog photo:",
    },
    duck: {
      searching: "⏳ Searching for a photo of the duck...",
      done: "{0} Here is a random photo of the duck by <c>{1}</c> from <c>{2}</c>:",
    },
    fox: {
      searching: "⏳ Searching for a photo of a fox...",
      done: "{0} Here is a random fox photo:",
    },
    frog: {
      searching: "⏳ Searching for a photo of a frog...",
      done: "{0} Here is a random photo of a frog by <c>{1}</c> from <c>{2}</c>:",
    },
    hamster: {
      searching: "⏳ Searching for a photo of a hamster...",
      done: "{0} Here is a random photo of a hamster by <c>{1}</c> from <c>{2}</c>:",
    },
    lizard: {
      searching: "⏳ Searching for a photo of a lizard...",
      done: "{0} Here is a random photo of a lizard by <c>{1}</c> from <c>{2}</c>:",
    },
    monkey: {
      searching: "⏳ Searching for a photo of a monkey...",
      done: "{0} Here is a random photo of a monkey by <c>{1}</c> from <c>{2}</c>:",
    },
    penguin: {
      searching: "⏳ Searching for a photo of the penguin...",
      done: "{0} Here is a random photo of the penguin by <c>{1}</c> from <c>{2}</c>:",
    },
    pigeon: {
      searching: "⏳ Searching for a photo of a pigeon...",
      done: "{0} Here is a random photo of a pigeon by <c>{1}</c> from <c>{2}</c>:",
    },
    racoon: {
      searching: "⏳ Searching for a photo of the racoon...",
      done: "{0} Here is a random photo of the racoon by <c>{1}</c> from <c>{2}</c>:",
    },
    rat: {
      searching: "⏳ Searching for a photo of the rat...",
      done: "{0} Here is a random photo of the rat by <c>{1}</c> from <c>{2}</c>:",
    },
    shiba: {
      searching: "⏳ Searching for a photo of Shiba Inu...",
      done: "{0} Here is a random Shiba Inu photo by <c>{1}</c> from <c>{2}</c>:",
    },
    snake: {
      searching: "⏳ Searching for a photo of the snake...",
      done: "{0} Here is a random photo of the snake by <c>{1}</c> from <c>{2}</c>:",
    },
    spider: {
      searching: "⏳ Searching for a photo of the spider...",
      done: "{0} Here is a random photo of the spider by <c>{1}</c> from <c>{2}</c>:",
    },
    turtle: {
      searching: "⏳ Searching for a photo of a turtle...",
      done: "{0} Here is a random photo of a turtle by <c>{1}</c> from <c>{2}</c>:",
    },
    unicorn: {
      searching: "⏳ Searching for a photo of a unicorn...",
      done: "{0} Here is a random photo of a unicorn by <c>{1}</c> from <c>{2}</c>:",
    },
    interactions: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <on/off></c>",
      ],
      disabled: "🤐 Successfully disabled interactions in this group, Ambient will not respond to any messages except for commands starting with <c>{0}</c>.",
      enabled: "👉🏻 Successfully enabled interactions in this group, Ambient will respond to some messages in addition to commands starting with <c>{0}</c>.",
    },
    nsfw: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <on/off></c>",
      ],
      disabled: "😌 Successfully disabled NSFW commands in this group!",
      enabled: "♨ Successfully enabled NSFW commands in this group!",
    },
    bet: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n",
        "✨ <c>{1} <bet 🪙> <predicted number></c>\n",
        "✨ If the drawn number is lower than your predicted number, you will keep your 🪙 and be rewarded. Otherwise, you will lose the bet 🪙.\n",
        "✨ The lower the number you choose, the higher your reward if you win.\n",
        "✨ The predicted number cannot be less than <c>1</c> or greater than <c>90</c>.\n",
        "💡 Examples:",
        "⭐ <c>{1} 420 69</c>",
        "⭐ <c>{1} 50 1</c>",
        "⭐ <c>{1} 1337 90</c>",
      ],
      notEnoughCoins: "❌ You do not have enough 🪙! (required: <c>{1} 🪙</c> {0} owned: <c>{2} 🪙</c> {0} missing: <c>{3} 🪙</c>)",
      victory: ["📈 You have won <c>{1} 🪙</c>, you now have <c>{2} 🪙</c>.\n", "🎰 Drawn number: <c>{3}</c>"],
      loss: ["📉 You have lost <c>{1} 🪙</c>, you now have <c>{2} 🪙</c>.\n", "🎰 Drawn number: <c>{3}</c>"],
    },
    daily: {
      cooldown: "🙄 <c>{0}</c>, you will be able to receive your next free 🪙 in <c>⌚ {2}</c>, <c>{3}</c> and <c>{4}</c>.",
      received: [
        "{0} <c>{1}</c>, you have received <c>{3}</c> free 🪙! You now have <c>{4} 🪙</c>. You will be able to receive your next free 🪙 in <c>⌚ 24 hours</c>.\n",
        "🤑 Collect your free coins regularly to earn a bonus for each additional consecutive day!",
      ],
      receivedWithBonus: [
        "{0} <c>{1}</c>, you have received <c>{3}</c> free 🪙 (including an extra <c>{4} 🪙</c> for collecting them <c>{5}</c> days in a row)! You now have <c>{6} 🪙</c>. You will be able to receive your next free 🪙 in <c>⌚ 24 hours</c>.\n",
        "🤑 Collect your free coins regularly to earn a bonus for each additional consecutive day!",
      ],
    },
    achievement: {
      empty: "❌ You must enter the text of the achievement! (max. <c>{0}</c> characters)",
      mentions: "❌ The content of the achievement must not contain any mentions!",
      tooLong: "❌ The content of the achievement is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      generating: "⏳ Generating achievement...",
      done: "{0} Here is the generated achievement:",
    },
    airplane: {
      searching: "⏳ Searching for a photo of an airplane...",
      done: "{0} Here is a random photo of an airplane by <c>{1}</c> from <c>{2}</c>:",
    },
    car: {
      searching: "⏳ Searching for a photo of a car...",
      done: "{0} Here is a random photo of a car by <c>{1}</c> from <c>{2}</c>:",
    },
    coinflip: {
      heads: "🦅 Heads",
      tails: "🪙 Tails",
    },
    couple: {
      tooFewUsers: "❌ There are too few members in the group who have used Ambient!",
      done: "{0} The pair of people who are best suited for each other in this group are <c>{1}</c> and <c>{2}</c> (<c>{3}%</c>) 💍",
    },
    diceroll: "{0} Result of the dice roll: <c>{1}</c>",
    heart: {
      empty: "❌ You must enter the text of the heart! (max. <c>{0}</c> characters)",
      mentions: "❌ The content of the heart must not contain any mentions!",
      tooLong: "❌ The content of the heart is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      generating: "⏳ Generating heart...",
      done: "{0} Here is the generated heart:",
    },
    meme: {
      searching: "⏳ Searching a random meme...",
      done: "{0} Here is a random meme by <c>{1}</c> from <c>{2}</c>:",
    },
    motorcycle: {
      searching: "⏳ Searching for a photo of a motorcycle...",
      done: "{0} Here is a random photo of a motorcycle by <c>{1}</c> from <c>{2}</c>:",
    },
    rip: {
      empty: "❌ You must enter the text of the tombstone! (max. <c>{0}</c> characters)",
      mentions: "❌ The content of the tombstone must not contain any mentions!",
      tooLong: "❌ The content of the tombstone is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      generating: "⏳ Generating tombstone...",
      done: "{0} Here is the generated tombstone:",
    },
    train: {
      searching: "⏳ Searching for a photo of a train...",
      done: "{0} Here is a random photo of a train by <c>{1}</c> from <c>{2}</c>:",
    },
    tvp: {
      empty: "❌ You must enter the text of the bar! (max. <c>{0}</c> characters)",
      mentions: "❌ The content of the bar must not contain any mentions!",
      tooLong: "❌ The content of the bar is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      generating: "⏳ Generating bar...",
      done: "{0} Here is the generated bar:",
    },
    apod: {
      searching: "⏳ Searching an Astronomy Picture of the Day...",
      doneVideo: "{0} Here is an Astronomy Video of the Day named <c>{1}</c>: {2}",
      done: "{0} Here is an Astronomy Picture of the Day named <c>{1}</c>:",
    },
    bot: [
      "{0} Ambient info:\n",
      "☯ RAM: <c>{1}/{2} GiB</c> {3} <c>{4}%</c>",
      "💾 Disk: <c>{5}/{6} GiB</c> {3} <c>{7}%</c>",
      "⏳ Uptime: <c>{8}</c>",
      "🏓 Ping: <c>{9} ms</c>",
      "👑 Premium accounts: <c>{10}</c>",
      "💎 Premium state: {11}",
      "🤖 Running bots: <c>{12}</c>",
      "✨ Core: <c>{13}</c>",
      "🔌 Client: <c>{14}</c>",
      "📦 Instance: <c>{15}</c>",
      "🪁 Core environment: <c>{16}</c>",
      "🧇 Client environment: <c>{17}</c>",
      "🏷 TypeScript: <c>{18}</c>",
      "🆙 Update date: <c>{19}</c> {3} <c>{20}</c>",
      "🍒 Creation date: <c>{21}</c>",
      "😼 Author: <c>{22}</c>",
      "\n📱 This bot was created <c>completely free</c> on {23}, you can also do it to use it on your groups!",
      "\n🤗 Join our <c>Discord server</c> to stay up to date with <c>Ambient</c> news, as well as get help and answers to your questions: {24}",
    ],
    group: {
      collecting: "⏳ Collecting info about group...",
      done: [
        "{0} Info about group <c>{1}</c>:\n",
        "🆔 ID: <c>{2}</c>",
        "👥 Participants: <c>{3}</c>",
        "👮🏻‍♂️ Administrators: <c>{4}</c>",
        "♂️ Males: <c>{5}</c>",
        "♀️ Females: <c>{6}</c>",
        "🤗 Ambient users: <c>{7}</c>",
        "🎨 Theme name: <c>{8}</c>",
        "🗂 Visible messages: <c>{9}</c>",
        "🗃 Processed messages: <c>{10}</c>",
        "🤖 Executed commands: <c>{11}</c>",
        "🐒 Mentions count: <c>{12}</c>",
        "⚠ Warnings count: <c>{13}</c>",
        "🧐 Members approval: <c>{14}</c>",
        "⏳ Members in queue: <c>{15}</c>",
        "🔞 NSFW: <c>{16}</c>",
        "🤐 Interactions: <c>{17}</c>",
        "👀 Messages restoration: <c>{18}</c>",
        "🔗 Invitation link: {19}",
        "🤓 First Ambient usage: <c>{21}</c> {20} <c>{22}</c>",
      ],
    },
    help: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n",
        "✨ <c>{1} <command name (optionally)></c>\n",
        "💡 Examples:",
        "⭐ <c>{1}</c>",
        "⭐ <c>{1} {2}</c>",
        "⭐ <c>{1} {3}</c>",
      ],
      list: [
        "{0} List of available commands (<c>{1}</c>):\n",
        "🦊 Animals (<c>{2}</c>): {3}\n",
        "⚙️ Configuration (<c>{4}</c>): {5}\n",
        "🪙 Economy (<c>{6}</c>): {7}\n",
        "👾 Fun (<c>{8}</c>): {9}\n",
        "ℹ Info (<c>{10}</c>): {11}\n",
        "🔞 NSFW (<c>{12}</c>): {13}\n",
        "💎 Premium (<c>{14}</c>): {15}\n",
        "📸 Social (<c>{16}</c>): {17}\n",
        "🛠️ Tools (<c>{18}</c>): {19}\n",
        "✨ To see detailed information on the selected command, type <c>{20} <command name></c>, e.g. <c>{20} {21}</c>.",
        "\n📱 This bot was created <c>completely free</c> on {22}, you can also do it to use it on your groups!",
        "\n🤗 Join our <c>Discord server</c> to stay up to date with <c>Ambient</c> news, as well as get help and answers to your questions: {23}",
      ],
      about: [
        "{0} Info about command <c>{1}</c>:\n", //
        "✏ Description: <c>{2}</c>",
        "🗃 Category: <c>{3}</c>",
        "⚓ Other names: {4}",
      ],
    },
    instances: "{0} Info about Ambient instances:\n\n{1}",
    nodes: "{0} Info about Ambient nodes:\n\n{1}",
    rules: {
      empty: [
        "{0} Group rules are not currently set.", //
        "\n📝 To set the group rules, type <c>{1} <rules content></c>.",
      ],
      view: [
        "{0} Here are the group rules of <c>{1}</c> set by the administration:\n", //
        "{2}",
        "\n📝 To change the group rules, type <c>{3} <new rules content></c>.",
        "\n🗑 To remove the group rules, type <c>{3} remove</c>.",
      ],
      mentions: "❌ Group rules cannot contain mentions!",
      removed: "✅ Group rules have been successfully removed!",
      tooLong: "❌ Group rules are too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      updated: "✅ Group rules have been successfully updated!",
    },
    team: [
      "{0} List of Ambient team members:\n",
      "{1}",
      "\n🤗 Would you like to join us? All you need to do is be active and helpful to other users on our <c>Discord server</c>, and we’ll reach out to you when we notice your efforts: {2}",
    ],
    top: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:",
        "\n🐒 <c>{1} mentions</c> {2} Shows the top {3} users who have been mentioned the most in this group",
        "\n✉ <c>{1} messages</c> {2} Shows the top {3} users who sent the most messages in this group",
        "\n🪄 <c>{1} commands</c> {2} Shows the top {3} users who executed the most commands in this group",
      ],
      mentions: [
        "🐒 Top {0} users who have been mentioned the most in this group:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      messages: [
        "✉ Top {0} users who sent the most messages in this group:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      commands: [
        "🪄 Top {0} users who executed the most commands in this group:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
    },
    weather: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n",
        "✨ <c>{1} <location or @user (optional if the location is saved)></c>\n",
        "💡 Examples:",
        "⭐ <c>{1}</c>",
        "⭐ <c>{1} Leszno</c>",
        "⭐ <c>{1} Zielona Góra, PL</c>",
        "⭐ <c>{1} @user</c>",
      ],
      notSetMentioned: "❌ <c>{0}</c> did not provide location!",
      notFound: "❌ The given location was not found!",
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
    boobs: {
      searching: "⏳ Searching for a photo of female boobs...",
      done: "{0} Here is a random photo of female boobs by <c>{1}</c> from <c>{2}</c>:",
    },
    butt: {
      searching: "⏳ Searching for a photo of female butt...",
      done: "{0} Here is a random photo of female butt by <c>{1}</c> from <c>{2}</c>:",
    },
    dick: {
      searching: "⏳ Searching for a photo of dick...",
      done: "{0} Here is a random photo of dick by <c>{1}</c> from <c>{2}</c>:",
    },
    feet: {
      searching: "⏳ Searching for a photo of female feet...",
      done: "{0} Here is a random photo of female feet by <c>{1}</c> from <c>{2}</c>:",
    },
    pussy: {
      searching: "⏳ Searching for a photo of pussy...",
      done: "{0} Here is a random photo of pussy by <c>{1}</c> from <c>{2}</c>:",
    },
    reddit: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <subreddit 1> <subreddit 2 (optionally)> ...</c>",
      ],
      notFound: "❌ No photo found in the given subreddits!",
      searching: "⏳ Searching for a photo in the given subreddits...",
      done: "{0} Here is a random photo by <c>{1}</c> from <c>{2}</c>:",
    },
    rule34: {
      empty: "❌ You must provide tags! (max. <c>{0}</c> characters)",
      mentions: "❌ Tags cannot contain mentions!",
      tooLong: "❌ Tags are too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      searching: "⏳ Searching for a photo matching the given tags...",
      notFound: "❌ No photo found matching the given tags!",
      done: "{0} Here is a random photo by <c>{1}</c> with tags <c>{2}</c>:",
    },
    invitation: {
      status: [
        "{0} Configuration of the group invitation link:\n", //
        "🔗 Current link: {1}",
        "🧮 Usages count: <c>{2}</c>",
        "\n⚠ Warning! This feature is only available in <c>💎 Ambient Premium</c>!",
        "\n🆔 To enable or change the group invitation link, type <c>{3} <new invitation ID></c>.",
        "\n🚪 To disable the group invitation link, type <c>{3} off</c>.",
      ],
      tooShort: "❌ The given invitation ID is too short! (min. <c>{0}</c> characters, <c>{1}</c> entered)",
      tooLong: "❌ The given invitation ID is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      illegalCharacters: "❌ The specified invitation ID contains illegal characters, you can only use lowercase and uppercase letters and numbers.",
      alreadyUsed: "❌ The invitation ID you entered is already taken!",
      saved: "✅ The group invitation ID has been successfully set to <c>{0}</c>! The current link to join the group is {1}",
      disabled: "🚪 The group invitation link feature has been successfully disabled!",
      groupAdminOnly: "❌ Group invitation link settings can only be changed by group administrators!",
      premiumMissing: "⚠ Warning! Group invitation link feature will not work as it requires <c>💎 Ambient Premium</c>!",
      joinRequestedUser: [
        "🚪 <c>{0}</c> wants to join this group using the invitation link, check pending requests.\n", //
        "🤗 This user uses Ambient since <c>{3}</c> {2} <c>{4}</c>.",
      ],
      joinedUser: [
        "👋🏻 <c>{0}</c> joined this group using the invitation link.\n", //
        "🤗 This user uses Ambient since <c>{3}</c> {2} <c>{4}</c>.",
      ],
      joinRequestedNotUser: [
        "🚪 <c>{0}</c> wants to join this group using the invitation link, check pending requests.\n", //
        "🧐 This user is not using Ambient.",
      ],
      joinedNotUser: [
        "👋🏻 <c>{0}</c> joined this group using the invitation link.\n", //
        "🧐 This user is not using Ambient.",
      ],
    },
    premium: [
      "{0} You can support <c>Ambient</c> by sending a transfer to the phone number <c>{1}</c> using BLIK. If you want this bot to be rewarded with access to exclusive features available only to Premium users, send at least <c>{2}</c> at a time with the Premium ID <c>{3}</c> in the title or receiver field.\n",
      "⚠ Attention! Premium validity is cumulative - each <c>{2}</c> is an additional <c>{4}</c>. You will receive premium within <c>15 minutes</c> from receiving the transfer, if you have any questions or problems, join our <c>Discord server</c>: {5}\n",
      "💓 Current Premium state: {6}\n",
      "👑 Current Premium accounts: <c>{7}</c>\n",
      "✨ The necessary data has been sent below in <c>separate messages</c> for easier copying.\n",
      "🥰 Thank you for supporting <c>Ambient</c>!",
    ],
    purge: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <number of inactivity days></c>",
      ],
      nothingToPurge: "❌ All group members have been active for the last <c>{1}</c> day{2}!",
      confirmation: [
        "ℹ This group currently has <c>{0}</c> users, after purging it from <c>{1}</c> member{2} which {4} inactive for at least <c>{6}</c> day{7}, there will be <c>{8}</c> of them. Do you want to continue?\n",
        "1. <c>✅ yes</c>",
        "2. <c>❌ no</c>",
        "\n🪄 Send only the number corresponding to the selected option, you can also react to this message by using 👍🏼 (variant irrelevant) to select the first option.",
      ],
      cancelled: "❌ Cancelled purging group from inactive members!",
      jailed: "❌ Please wait until the current purging is finished!",
      purging: "⏳ Purging group from <c>{0}</c> member{1}...",
      done: "{0} Successfully purged group from <c>{1}</c> member{2}, removing <c>{3}</c> member{4} failed.",
    },
    restoration: {
      status: [
        "{0} Restoration of deleted messages feature configuration:\n", //
        "🛡 Enabled: <c>{1}</c>",
        "👮🏻‍♂️ Restore administrator messages: <c>{2}</c>",
        "📎 Attachments as links: <c>{3}</c>",
        "🔒 Restore in private messages to administrators: <c>{4}</c>",
        "\n⚠ Warning! This feature is only available in <c>💎 Ambient Premium</c>!",
        "\n⚙ To change settings, type <c>{5} change</c>.",
      ],
      firstSettingQuestion: [
        "🛡 Do you want to enable the restoration of deleted messages feature ?\n",
        "1. <c>❌ no</c>",
        "2. <c>✅ yes</c>",
        "\n🪄 Send only the number corresponding to the selected setting, you can also react to this message by using 👍🏼 (variant irrelevant) to select the first setting.",
      ],
      secondSettingQuestion: [
        "👮🏻‍♂️ Should messages sent by group administrators be restored as well?\n",
        "1. <c>❌ no</c>",
        "2. <c>✅ yes</c>",
        "\n🪄 Send only the number corresponding to the selected setting, you can also react to this message by using 👍🏼 (variant irrelevant) to select the first setting.",
      ],
      thirdSettingQuestion: [
        "📎 Should attachments from deleted messages be restored as links?\n",
        "1. <c>❌ no</c> - attachments from deleted messages will be sent in their original form",
        "2. <c>✅ yes</c> - attachments from deleted messages will be sent in the form of links to them",
        "\n🪄 Send only the number corresponding to the selected setting, you can also react to this message by using 👍🏼 (variant irrelevant) to select the first setting.",
      ],
      fourthSettingQuestion: [
        "🔒 Should messages be restored in private messages to group administrators?\n",
        "1. <c>❌ no</c> - restored messages will be sent to the group where they were deleted",
        "2. <c>✅ yes</c> - restored messages will be sent in private messages to group administrators",
        "\n🪄 Send only the number corresponding to the selected setting, you can also react to this message by using 👍🏼 (variant irrelevant) to select the first setting.",
      ],
      disabled: "📴 Restoration of deleted messages feature has been successfully disabled!",
      saved: "✅ Restoration of deleted messages feature settings has been successfully saved!",
      premiumMissing: "⚠ Warning! Restoration of deleted messages feature will not work as it requires <c>💎 Ambient Premium</c>!",
      restored: [
        "👀 User <c>{0}</c> deleted a message in <c>{2}</c> group!", //
        "\n💡 Use <c>{3}</c> command to see detailed information on restoration of deleted messages feature configuration.\n",
        "📨 Sent on: <c>{5}</c> {4} <c>{6}</c>",
        "📮 Deleted on: <c>{7}</c> {4} <c>{8}</c>",
        "🕰 Deleted after: {9}",
        "📜 Message content: <c>{10}</c>",
      ],
      restoredAttachments: [
        "👀 User <c>{0}</c> deleted a message in <c>{2}</c> group!", //
        "\n💡 Use <c>{3}</c> command to see detailed information on restoration of deleted messages feature configuration.\n",
        "📨 Sent on: <c>{5}</c> {4} <c>{6}</c>",
        "📮 Deleted on: <c>{7}</c> {4} <c>{8}</c>",
        "🕰 Deleted after: {9}",
        "📜 Message content: <c>{10}</c>",
        "\n📎 Attachments:\n{11}",
      ],
    },
    roblox: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <username></c>\n",
        "💡 Examples:",
        "⭐ <c>{1} HizoreQ</c>",
        "⭐ <c>{1} Magicznykonik11</c>",
        "⭐ <c>{1} wxqa0a</c>",
      ],
      notFound: "❌ The given username was not found!",
      collecting: "⏳ Collecting info about user <c>@{0}</c>...",
      done: [
        "{0} Info about <c>@{1}</c> profile in Roblox:\n",
        "🫡 Full name: <c>{2}</c>",
        "🆎 Biography: <c>{3}</c>",
        "💎 Roblox Premium: <c>{4}</c>",
        "🚫 Is banned: <c>{5}</c>",
        "🤔 Is verified: <c>{6}</c>",
        "🤩 Followers: <c>{7}</c>",
        "👀 Following: <c>{8}</c>",
        "🫂 Friends: <c>{9}</c>",
        "🔗 Profile: {10}",
        "➕ Account creation date: <c>{12}</c> {11} <c>{13}</c>",
        "👻 Last activity date: <c>{14}</c> {11} <c>{15}</c>",
        "🎭 Previous usernames: {16}",
        "🙋🏼‍♀️ Currently online: <c>{17}</c>",
        "🎮 {18} activity: {19}",
      ],
    },
    tts: {
      empty: "❌ You must enter the text to say! (max. <c>{0}</c> characters)",
      mentions: "❌ The text to say must not contain any mentions!",
      tooLong: "❌ The text to say is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      generating: "⏳ Generating a voice message...",
      done: "{0} Here is the generated voice message:",
    },
    instagram: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <username></c>\n",
        "💡 Examples:",
        "⭐ <c>{1} existencefornoreason</c>",
        "⭐ <c>{1} janeksniezyn</c>",
        "⭐ <c>{1} yyyshuhua</c>",
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
        "🔗 Profile: {9}",
        "🚪 External link: {10}",
      ],
    },
    afk: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <reason>/off</c>",
      ],
      tooLong: "❌ The reason for being AFK is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      disabled: "✅ Successfully disabled AFK mode!",
      done: "✅ Succcessfully set AFK reason to <c>{0}</c>!",
      mentioned: "{0} <c>{1}</c> is currently AFK, reason: <c>{2}</c>",
    },
    play: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n",
        "✨ <c>{1} <title or link></c>\n",
        "💡 Examples:",
        "⭐ <c>{1} Ginseng Strip 2002</c>",
        "⭐ <c>{1} youtu.be/vrQWhFysPKY</c>",
        "⭐ <c>{1} on.soundcloud.com/QPxti</c>",
        "⭐ <c>{1} open.spotify.com/track/7v3rmoy5jcn4h5UqwQyCM3</c>",
      ],
      searching: "🔎 Searching <c>{0}</c>...",
      unavailable: "❌ The selected item is not available!",
      tooBig: "❌ Size of the selected item is too big! (<c>{0}</c>, max. <c>{1}</c>)",
      preparing: "⏳ Preparing <c>{0}</c>... (<c>{1}</c>, <c>{2}</c>)",
      done: "{0} {1}",
    },
    profile: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <@user (optionally)></c>",
      ],
      unavailable: "❌ Info about your profile is currently unavailable!",
      unavailableMentioned: "❌ Info about profile of <c>{0}</c> is currently unavailable!",
      collecting: "⏳ Collecting info about <c>{0}</c>...",
      done: [
        "{0} Info about Facebook profile of <c>{1}</c>:\n",
        "📛 Alternate name: <c>{2}</c>",
        "🆎 Username: <c>{3}</c>",
        "🆔 Account ID: <c>{4}</c>",
        "👗 Sex: <c>{5}</c>",
        "🔗 Profile: {6}",
        "😴 AFK status: <c>{7}</c>",
        "🏷 Nickname in group: <c>{8}</c>",
        "🥰 Has bot in friends: <c>{9}</c>",
        "👮🏻‍♂️ Group administrator: <c>{10}</c>",
        "🎂 Celebrating a birthday today: <c>{11}</c>",
        "🌍 Location: <c>{12}</c>",
        "🤓 Uses Ambient since: <c>{14}</c> {13} <c>{15}</c>",
        "🤖 Is bot: <c>{16}</c>",
        "🖤 Is blacklisted: <c>{17}</c>",
        "👑 Ambient team member: <c>{18}</c>",
        "👅 Language in Ambient: <c>{19}</c>",
        "🎛️ Spotify connected: <c>{20}</c>",
        "🫣 Last activity: <c>{21}</c> {13} <c>{22}</c> (in this group: <c>{23}</c>)",
        "🐒 Mentions: <c>{24}</c> (in this group: <c>{25}</c>)",
        "✉ Messages sent: <c>{26}</c> (in this group: <c>{27}</c>)",
        "🪄 Commands executed: <c>{28}</c> (in this group: <c>{29}</c>)",
        "🔄 Data updated: <c>{30}</c> {13} <c>{31}</c>",
      ],
    },
    skin: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <player name></c>",
      ],
      notFound: "❌ The player with the given nickname does not exist!",
      searching: "⏳ Searching for a skin of player <c>{0}</c>...",
      done: "{0} Here is the skin of player <c>{1}</c>:",
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
        "\n🎶 <c>{1} youtube <@user (optionally)></c> {2} Sends the track you or the user mentioned are listening to from YouTube",
      ],
      alreadyConnected: "❌ You must disconnect your current account before connecting a new one!",
      connectionUrl: "🔌 Here is the link to connect your Spotify account to Ambient: {0}",
      notConnected: "❌ You haven't connected Ambient to your Spotify account!",
      notConnectedMentioned: "❌ <c>{0}</c> has not connected Ambient to Spotify account!",
      disconnected: "✅ Successfully disconnected Ambient from Spotify account!",
      mustReconnect: "❌ You need to reconnect Ambient to your Spotify account!",
      mustReconnectMentioned: "❌ <c>{0}</c> must reconnect Ambient to the Spotify account!",
      statsUnavailable: "❌ Statistics for your account are unavailable, the account was likely created recently or has been inactive for a long time.",
      statsUnavailableMentioned: "❌ Statistics for <c>{0}</c> are unavailable, the account was likely created recently or has been inactive for a long time.",
      notListening:
        "❌ You're not listening to anything at the moment. If this is not true, make sure you do not have a private session enabled and restart the Spotify app on your device.",
      notListeningMentioned: "❌ <c>{0}</c> is not currently listening to anything or is in a private session.",
      listeningLocal: "❌ <c>{0}</c> is currently listening to a local track, you cannot play it on your Spotify account.",
      unableToPlay: "❌ We couldn't play the song on your Spotify account.",
      premiumRequired: "❌ Playing songs on your Spotify account using Ambient requires <c>💎 Spotify Premium</c> account!",
      emptyResults: "❌ No items matching your query found!",
      selectionTimeout: "❌ No item was selected within <c>{0}</c> seconds! Try again.",
      trackSelectionList: [
        "🕵🏽‍♂️ Choose the item you wish to play:\n",
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
      profile: [
        "🤠 Info about Spotify profile of <c>{0}</c>:\n",
        "🆎 Name: <c>{1}</c>",
        "🌍 Country: <c>{2}</c>",
        "👀 Followers count: <c>{3}</c>",
        "🔗 Profile: {4}",
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
    tellonym: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <username> <message (optionally)></c>",
      ],
      notFound: "❌ The given user was not found!",
      tooFast: "❌ You send messages too fast, wait a while before sending the next one.",
      sent: "{0} Anonymous message has been successfully sent to <c>@{1}</c>!",
      about: [
        "{0} Info about user <c>@{1}</c>:\n",
        "🫡 Full name: <c>{2}</c>",
        "🆎 Biography: <c>{3}</c>",
        "🤩 Followers: <c>{4}</c>",
        "🕵🏻‍♂️ Anonymous followers: <c>{5}</c>",
        "👀 Following: <c>{6}</c>",
        "✉ Messages: <c>{7}</c>",
        "🌍 Country: <c>{8}</c>",
        "📱 Active: <c>{9}</c>",
        "🔗 Profile: {10}",
        "\n{11}",
      ],
    },
    tiktok: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <link to TikTok></c>",
      ],
      unavailable: "❌ The TikTok provided is unavailable!",
      tooBig: "❌ TikTok size is too big! (<c>{0}</c>, max. <c>{1}</c>)",
      done: [
        "{0} Here is your TikTok: <c>{1}</c> {2} <c>{3}</c>\n",
        "🫡 Author: <c>{4}</c> {2} <c>@{5}</c>",
        "📅 Date: <c>{6}</c> {2} <c>{7}</c>",
        "💖 Likes: <c>{8}</c>",
        "💬 Comments: <c>{9}</c>",
        "🏹 Shares: <c>{10}</c>",
        "👀 Views: <c>{11}</c>",
        "💿 Sound: <c>{12}</c> {13} <c>{14}</c>",
      ],
    },
    twitter: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <link to Twitter video></c>",
      ],
      unavailable: "❌ The Twitter video provided is unavailable!",
      tooBig: "❌ Size of Twitter video is too big! (<c>{0}</c>, max. <c>{1}</c>)",
      done: [
        "{0} Here is your Twitter video: <c>{1}</c> {2} <c>{3}</c>\n",
        "🫡 Author: <c>{4}</c> {2} <c>@{5}</c>",
        "📅 Date: <c>{6}</c> {2} <c>{7}</c>",
        "💖 Likes: <c>{8}</c>",
        "💬 Comments: <c>{9}</c>",
        "🏹 Shares: <c>{10}</c>",
        "🔞 Age restrictions: <c>{11}</c>",
      ],
    },
    reel: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <link to reel on Instagram></c>",
      ],
      unavailable: "❌ The reel provided is unavailable!",
      tooBig: "❌ Size of the provided reel is too big! (<c>{0}</c>, max. <c>{1}</c>)",
      done: [
        "{0} Here is your reel from Instagram: <c>{1}</c> {2} <c>{3}</c>\n",
        "🫡 Author: <c>{4}</c> {2} <c>@{5}</c>",
        "📅 Date: <c>{6}</c> {2} <c>{7}</c>",
        "💖 Likes: <c>{8}</c>",
        "💬 Comments: <c>{9}</c>",
      ],
    },
    adduser: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <profile link, username or ID></c>",
      ],
      invalidBatch: "❌ The given user batch is invalid!",
      notFound: "❌ The specified user was not found!",
      alreadyMember: "❌ The specified user is already a member of this group!",
      inQueue: "❌ The specified user is already in the queue of members to be added!",
      groupFull: "❌ The group already has the maximum number of members!",
      queueFull: "❌ The queue of users to join is already full!",
      unableToAdd: "❌ The specified user's privacy settings do not allow him to be added to the group!",
      queuedUser: [
        "🚪 <c>{0}</c> has been added to the queue, the request to join must be approved by the group administrator.\n", //
        "🤗 This user uses Ambient since <c>{4}</c> {3} <c>{5}</c>.",
      ],
      addedUser: [
        "👋🏻 <c>{0}</c> has been successfully added to the group!\n", //
        "🤗 This user uses Ambient since <c>{4}</c> {3} <c>{5}</c>.",
      ],
      queuedNotUser: [
        "🚪 <c>{0}</c> has been added to the queue, the request to join must be approved by the group administrator.\n", //
        "🧐 This user is not using Ambient.",
      ],
      addedNotUser: [
        "👋🏻 <c>{0}</c> has been successfully added to the group!\n", //
        "🧐 This user is not using Ambient.",
      ],
    },
    admin: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <@user></c>",
      ],
      donePromoted: "{0} <c>{1}</c> has been successfully promoted to an administrator!",
      doneDemoted: "🫥 <c>{1}</c> has been successfully demoted from an administrator!",
    },
    attachments: {
      mustReplyToAttachments: "❌ You must reply to a message that contains attachments!",
      done: "{0} Here is the list of attachments from the selected message:\n\n{1}",
    },
    blacklist: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:",
        "\n👮🏼‍♂️ <c>{1} add <@user, link or ID></c> {2} Allows to add a user to the blacklist",
        "\n🗑 <c>{1} remove <@user, link or ID></c> {2} Allows to remove a user from the blacklist",
        "\n📜 <c>{1} list</c> {2} Shows a list of users currently on the blacklist",
        "\n🏆 <c>{1} top</c> {2} Shows the top administrators who have added the most people to the blacklist",
      ],
      unableToAdd: "❌ <c>{0}</c> cannot be added to the blacklist!",
      alreadyAdded: "❌ <c>{0}</c> is already blacklisted!",
      notFound: "❌ <c>{0}</c> is not currently blacklisted!",
      jailed: "❌ Please wait until the current blacklist operations are over!",
      added: "✅ <c>{0}</c> has been successfully added to the blacklist!",
      removed: "✅ <c>{0}</c> has been successfully removed from the blacklist!",
      empty: "❌ No user is currently blacklisted!",
      list: "{0} List of users currently blacklisted (<c>{1}</c>):\n\n{2}",
      top: [
        "🏆 Top administrators who have added the most people to the blacklist:", //
        "\n{0}\n",
        "🧮 There {1} currently <c>{2}</c> user{3} on the blacklist.",
      ],
    },
    everyone: "{0} Successfully mentioned {1} users!",
    kick: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <@user></c>",
      ],
      done: "{0} Successfully kicked <c>{1}</c> out of the group!",
    },
    name: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <new group name></c>",
      ],
      tooLong: "❌ The given name is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      same: "❌ The given name is the same as the current one!",
      doneSet: "{0} Successfully set group name to <c>{1}</c>!",
      doneChanged: "{0} Successfully changed group name from <c>{1}</c> to <c>{2}</c>!",
    },
    nick: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <@user (optionally)> <new nickname></c>",
      ],
      tooLong: "❌ The given nickname is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      same: "❌ The given nickname is the same as the current one!",
      doneSetOwn: "{0} Your nickname has been successfully set to <c>{1}</c>!",
      doneSetOther: "{0} Nickname of <c>{1}</c> has been successfully set to <c>{2}</c>!",
      doneChangedOwn: "{0} Your nickname has been successfully changed from <c>{1}</c> to <c>{2}</c>!",
      doneChangedOther: "{0} Nickname of <c>{1}</c> has been successfully changed from <c>{2}</c> to <c>{3}</c>!",
    },
    paste: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <text></c>",
      ],
      done: "{0} Here is your paste: {1}",
    },
    purplelist: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:",
        "\n👮🏼‍♂️ <c>{1} add <@user, link or ID></c> {2} Allows to add a user to the purplelist",
        "\n🗑 <c>{1} remove <@user, link or ID></c> {2} Allows to remove a user from the purplelist",
        "\n📜 <c>{1} list</c> {2} Shows a list of users currently on the purplelist",
        "\n🏆 <c>{1} top</c> {2} Shows the top administrators who have added the most people to the purplelist",
      ],
      unableToAdd: "❌ <c>{0}</c> cannot be added to the purplelist!",
      alreadyAdded: "❌ <c>{0}</c> is already purplelisted!",
      notFound: "❌ <c>{0}</c> is not currently purplelisted!",
      jailed: "❌ Please wait until the current purplelist operations are over!",
      added: "✅ <c>{0}</c> has been successfully added to the purplelist!",
      removed: "✅ <c>{0}</c> has been successfully removed from the purplelist!",
      empty: "❌ No user is currently purplelisted!",
      list: "{0} List of users currently purplelisted (<c>{1}</c>):\n\n{2}",
      top: [
        "🏆 Top administrators who have added the most people to the purplelist:", //
        "\n{0}\n",
        "🧮 There {1} currently <c>{2}</c> user{3} on the purplelist.",
      ],
    },
    screenshot: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n",
        "✨ <c>{1} <link to webpage></c>\n",
        "💡 Examples:",
        "⭐ <c>{1} https://facebook.com/hunterazarx</c>",
        "⭐ <c>{1} https://github.com/AmbientBot-xyz</c>",
        "⭐ <c>{1} https://reddit.com/r/linux</c>",
      ],
      taking: "⏳ Taking a screenshot...",
      done: "{0} Here is a screenshot of the given website:",
    },
    shorten: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n",
        "✨ <c>{1} <link to shorten></c>\n",
        "💡 Examples:",
        "⭐ <c>{1} https://facebook.com/hunterazarx</c>",
        "⭐ <c>{1} https://github.com/AmbientBot-xyz</c>",
        "⭐ <c>{1} https://reddit.com/r/linux</c>",
      ],
      done: "{0} Here is your shortened link: {1}",
    },
    translate: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <target language> <text to translate></c>\n",
        "💡 Examples:",
        "⭐ <c>{1} pl This is a sample text</c>",
      ],
      invalidTargetLanguage: "❌ The target language specified is invalid!",
      done: [
        "{0} Here is translation result:\n", //
        "🚰 Source language: <c>{1}</c>",
        "🎯 Target language: <c>{2}</c>",
        "📖 Sentences count: <c>{3}</c>",
        "🗣 Result: <c>{4}</c>",
      ],
    },
    verify: {
      mustReplyToMessage: "❌ You must reply to the message you want to verify!",
      success: "{0} This message was sent by Ambient!",
      failed:
        "❓ This message was not sent by Ambient!\n\nℹ️ If this message was sent from an account that is used by Ambient, it most likely means that the owner of that account sent the message manually, or it was sent by other software.",
    },
    warning: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:",
        "\n👮🏼‍♂️ <c>{1} add <@user> <reason></c> {2} Allows you to give the user a warning with a selected reason",
        "\n🗑 <c>{1} remove <@user> <* or number></c> {2} Allows you to remove all or the selected warning from user",
        "\n📜 <c>{1} list <@user (optionally)></c> {2} Allows you to check a list of your or the mentioned user's warnings",
        "\n🧐 <c>{1} group</c> {2} Allows you to check the number of warnings of individual group users",
      ],
      reasonMentions: "❌ Reason for the warning must not contain mentions!",
      maxWarningsReached: "❌ <c>{0}</c> already has the maximum number of warnings (<c>{1}</c>)!",
      reasonTooLong: "❌ The given reason is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      jailed: "❌ Wait until current operations on warnings are finished!",
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
      deleted: "🗑 Administrator <c>{0}</c> removed warning number <c>{2}</c> from <c>{1}</c>, now {3}he has <c>{4}</c> warnings left.",
      deletedAll: "🗑 Administrator <c>{0}</c> removed all warnings from <c>{1}</c>.",
    },
    yellowlist: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:",
        "\n👮🏼‍♂️ <c>{1} add <@user, link or ID></c> {2} Allows to add a user to the yellowlist",
        "\n🗑 <c>{1} remove <@user, link or ID></c> {2} Allows to remove a user from the yellowlist",
        "\n📜 <c>{1} list</c> {2} Shows a list of users currently on the yellowlist",
        "\n🏆 <c>{1} top</c> {2} Shows the top administrators who have added the most people to the yellowlist",
      ],
      unableToAdd: "❌ <c>{0}</c> cannot be added to the yellowlist!",
      alreadyAdded: "❌ <c>{0}</c> is already yellowlisted!",
      notFound: "❌ <c>{0}</c> is not currently yellowlisted!",
      jailed: "❌ Please wait until the current yellowlist operations are over!",
      added: "✅ <c>{0}</c> has been successfully added to the yellowlist!",
      removed: "✅ <c>{0}</c> has been successfully removed from the yellowlist!",
      empty: "❌ No user is currently yellowlisted!",
      list: "{0} List of users currently yellowlisted (<c>{1}</c>):\n\n{2}",
      top: [
        "🏆 Top administrators who have added the most people to the yellowlist:", //
        "\n{0}\n",
        "🧮 There {1} currently <c>{2}</c> user{3} on the yellowlist.",
      ],
    },
  },
};
