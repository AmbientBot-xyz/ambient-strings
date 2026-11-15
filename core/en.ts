export default {
  global: {
    notEnabled:
      "It looks like you are trying to use Ambient on a group that has not been added to the allowed list in the <c>management panel</c>. Ask bot administrator to add a group or create your own bot completely free on {0}",
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
    disabledManual: "🛑 Bot <c>{0}</c> has been disabled on this group by the administrator!",
    disabledAuto: "🖇️ Bot <c>{0}</c> has been disabled on this group because it has been added to allowed groups in another bot.",
    enabled: "⚡ Bot <c>{0}</c> has been enabled on this group, all members of the group can now use it.",
    unhandledEventException: [
      "🥀 Ambient encountered an unhandled exception while handling an event, please try again later. It has been automatically reported to our Discord server: {0}\n",
      "📦 Class: <c>{1}</c>",
      "💬 Reason: <c>{2}</c>",
      "🪜 Dump: {3}",
    ],
    unhandledCommandException: [
      "🥀 Ambient encountered an unhandled exception while executing a command, please try again later. It has been automatically reported to our Discord server: {0}\n",
      "📦 Class: <c>{1}</c>",
      "💬 Reason: <c>{2}</c>",
      "🪜 Dump: {3}",
    ],
    welcome:
      "👋🏻 Hi, <c>{0}</c>! My name is <c>Ambient</c>, I am a secure, efficient and multifunctional bot for groups on Messenger. To see what I can do, use the <c>{1}</c> command.\n\n🤗 Do you have questions or need help? You will find it on our <c>Discord server</c>, where you will also learn about news related to Ambient: {2}",
    welcomeGroup:
      "👋🏻 Hi! My name is <c>Ambient</c>, I am a secure, efficient and multifunctional bot for groups on Messenger. To see what I can do, use the <c>{1}</c> command.\n\n🤗 Do you have questions or need help? You will find it on our <c>Discord server</c>, where you will also learn about news related to Ambient: {2}",
    mentionedNotMember: "❌ Mentioned user is not a member of this group.",
    mentionedNotUser: "❌ Mentioned user has never used Ambient.",
    commandNotFound: "🤨 Command not found. Use <c>{0}</c> to see what I can do!",
    emptyCommand: "🫡 Awaiting your commands. Use <c>{0}</c> to see what I can do!",
    unexpectedArgs: "❌ This command takes no arguments.",
    groupAdminOnly: "❌ This command can only be used by group administrators.",
    teamMemberOnly: "❌ You don't have permission to use this command.",
    goodNight: "🥱 Good night, <c>{0}</c>! 😴",
    happyBirthday: "🎂 Happy birthday, <c>{0}</c>! 🥳",
    outOfRange: "❌ Selected position does not exist! (max. <c>{0}</c>, <c>{1}</c> selected)",
    botAdminRequired: "❌ Bot must be a group admin to use this command.",
    botAdminAdded: [
      "{0} Administrator privileges have been granted to the bot.",
      "\n⚙️ Most Ambient features work without them, however, these permissions allow the bot to perform additional administrative actions, such as:",
      "- cleaning inactive members from the group using the <c>{1}</c> command,",
      "- automatically adding users to the group (bypassing manual approval) using the <c>{2}</c>, <c>{3}</c>, and <c>{4}</c> features,",
      "- kicking members <c>({5})</c>, granting administrator privileges to others <c>({6})</c> and changing their nicknames <c>({7})</c> even with an active invite link.",
      "\n⚠️ <c>Warning!</c> Please remember that anyone can create their own bot in the Ambient system. The accounts these bots run on belong to random individuals unaffiliated with the Ambient team, and their owners still have permanent access to them. If you do not personally know the owner of this account, do not trust them, or do not need the features listed above, we strongly recommend revoking the bot administrator privileges. This will prevent potential attempts by third parties to take control of your group.",
      "\n🤗 Have questions or need help? Join our <c>Discord server</c>: {8}",
    ],
    botAdminRemoved: [
      "{0} Administrator privileges have been revoked from the bot.",
      "\n⚙️ Most Ambient features work without them, however, these permissions allow the bot to perform additional administrative actions, such as:",
      "- cleaning inactive members from the group using the <c>{1}</c> command,",
      "- automatically adding users to the group (bypassing manual approval) using the <c>{2}</c>, <c>{3}</c>, and <c>{4}</c> features,",
      "- kicking members <c>({5})</c>, granting administrator privileges to others <c>({6})</c> and changing their nicknames <c>({7})</c> even with an active invite link.",
      "\n⚠️ <c>Warning!</c> Please remember that anyone can create their own bot in the Ambient system. The accounts these bots run on belong to random individuals unaffiliated with the Ambient team, and their owners still have permanent access to them. If you do not personally know the owner of this account, do not trust them, or do not need the features listed above, we strongly advise against granting administrator privileges to the bot. This will prevent potential attempts by third parties to take control of your group.",
      "\n🤗 Have questions or need help? Join our <c>Discord server</c>: {8}",
    ],
    nsfwNotAllowed: "❌ NSFW content is not available in this group, check <c>{0}</c> command.",
    userBlacklisted: [
      "🫨 You can't use <c>Ambient</c> because you're <c>blacklisted</c>.\n",
      "🤨 Do you think this is a mistake? Join our <c>Discord server</c> and submit an appeal - we'll review your case: {0}",
    ],
    userPurplelisted: [
      "😤 This group contains users who have been added to the purplelist. Using Ambient will not be possible until the following members are removed from the conversation:\n",
      "{0}",
      "\n⚡ The group is checked for the presence of purplelisted users in real time. Ambient will start to work in this conversation immediately after the indicated users are removed.",
    ],
    limitReached: [
      "🚧 Daily limit of commands has been reached. To use all <c>Ambient</c> features without restrictions, please support the project. Details can be found under the <c>{0}</c> command.\n",
      "💡 Know someone who already has active Premium? They can boost this group to remove restrictions for all members. Boosts can be managed with the <c>{1}</c> command.",
    ],
    premiumExtended: [
      "{0} <c>{1}</c>, your Premium has been successfully extended!\n",
      "🧮 Months count: <c>{2}</c>",
      "📅 Expiration date: <c>{3}</c>",
      "\n🚀 Remember, that with active Premium, you can boost up to <c>3</c> groups. This allows all members of those groups to use all <c>Ambient</c> features without restrictions, even if they don't have active Premium themselves. You can transfer your boosts to other groups at any time.",
      "\n✨ To manage your group boosts, use <c>{4}</c> command.",
      "\n🫶🏻 Thank you for supporting <c>Ambient</c>!",
    ],
    authenticationPrompt: [
      "{0} <c>{1}</c>, are you trying to connect your Ambient profile with an external service right now?\n",
      "🤝🏻 Service: <c>{2}</c>",
      "🆔 ID: <c>{3}</c>",
      "{4} Device: <c>{5}</c>",
      "⏱️ Start date: <c>{6}</c>",
      "\n🟢 React to this message using 👍🏼 (variant irrelevant) or ✅ within <c>{7} seconds</c> ONLY if the details above are correct and you wish to authorize this request.",
      "\n🔴 Ignore this message if this is not you or the details above do not match. You can also react using 👎🏼 (variant irrelevant) or ❌ to decline the request immediately.",
      "\n🟡 To manage your connection with the <c>{2}</c> service, use the <c>{8}</c> command.",
      "\n🤗 Have questions or need help? Join our <c>Discord server</c>: {9}",
    ],
    unauthorizedAuthenticationPromptResponseAttempt: "{0} <c>{1}</c>, you cannot respond to a request that is not addressed to you.",
    authenticationPromptAuthorized: [
      "{0} <c>{1}</c>, the request <c>{2}</c> from device {3} <c>{4}</c> has been authorized by you. You can now return to your link: {5}\n",
      "⌚ You now have another <c>{6} minutes</c> to complete connecting your account.\n",
      "⚠️ <c>Warning!</c> The link will only work on the same device and browser for which this request was authorized.",
    ],
    authenticationPromptRejected: "{0} <c>{1}</c>, the request <c>{2}</c> from device {3} <c>{4}</c> has been rejected by you.",
    authenticationPromptTimeout: "{0} <c>{1}</c>, time to authorize the request <c>{2}</c> from device {3} <c>{4}</c> has expired. It has been automatically rejected.",
    authenticationPromptSuperseded:
      "{0} <c>{1}</c>, the request <c>{2}</c> from device {3} <c>{4}</c> was automatically rejected because you authorized another request for this service.",
    connectionUrl: [
      "🔗 Here is your link to connect your Ambient profile with the <c>{0}</c> service: {1}\n",
      "⌚ The link is valid for <c>{2} minutes</c> or until first request authorization.\n",
      "🎥 Need help? See how to connect your profile in <c>45 seconds</c>: https://youtu.be/HGzguY7H3n0",
    ],
    connectedSuccessfully:
      "{0} <c>{1}</c>, your Ambient profile has been successfully connected to the service <c>{2}</c>! You can now use the features available via the <c>{3}</c> command.",
    unableToRestoreUser: "❌ Privacy settings of <c>{0}</c> do not allow them to be added to the group or the bot has been blocked by them.",
    restoredUserQueued: "🚪 <c>{0}</c> has been restored to the group, but the request requires approval because the bot is not an admin and member approval is turned on.",
  },
  commands: {
    alpaca: {
      searching: "⏳ Searching for a photo of an alpaca...",
      done: "{0} Here is a random photo of an alpaca by <c>{1}</c> from <c>{2}</c>:",
    },
    beaver: {
      searching: "⏳ Searching for a photo of a beaver...",
      done: "{0} Here is a random photo of a beaver by <c>{1}</c> from <c>{2}</c>:",
    },
    capybara: {
      searching: "⏳ Searching for a photo of a capybara...",
      done: "{0} Here is a random photo of a capybara by <c>{1}</c> from <c>{2}</c>:",
    },
    cat: {
      searching: "⏳ Searching for a photo of a cat...",
      done: "{0} Here is a random photo of a cat by <c>{1}</c> from <c>{2}</c>:",
    },
    cow: {
      searching: "⏳ Searching for a photo of a cow...",
      done: "{0} Here is a random photo of a cow by <c>{1}</c> from <c>{2}</c>:",
    },
    dog: {
      searching: "⏳ Searching for a photo of a dog...",
      done: "{0} Here is a random photo of a dog by <c>{1}</c> from <c>{2}</c>:",
    },
    duck: {
      searching: "⏳ Searching for a photo of a duck...",
      done: "{0} Here is a random photo of a duck by <c>{1}</c> from <c>{2}</c>:",
    },
    fox: {
      searching: "⏳ Searching for a photo of a fox...",
      done: "{0} Here is a random photo of a fox by <c>{1}</c> from <c>{2}</c>:",
    },
    frog: {
      searching: "⏳ Searching for a photo of a frog...",
      done: "{0} Here is a random photo of a frog by <c>{1}</c> from <c>{2}</c>:",
    },
    hamster: {
      searching: "⏳ Searching for a photo of a hamster...",
      done: "{0} Here is a random photo of a hamster by <c>{1}</c> from <c>{2}</c>:",
    },
    hedgehog: {
      searching: "⏳ Searching for a photo of a hedgehog...",
      done: "{0} Here is a random photo of a hedgehog by <c>{1}</c> from <c>{2}</c>:",
    },
    horse: {
      searching: "⏳ Searching for a photo of a horse...",
      done: "{0} Here is a random photo of a horse by <c>{1}</c> from <c>{2}</c>:",
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
      searching: "⏳ Searching for a photo of a penguin...",
      done: "{0} Here is a random photo of a penguin by <c>{1}</c> from <c>{2}</c>:",
    },
    pigeon: {
      searching: "⏳ Searching for a photo of a pigeon...",
      done: "{0} Here is a random photo of a pigeon by <c>{1}</c> from <c>{2}</c>:",
    },
    rabbit: {
      searching: "⏳ Searching for a photo of a rabbit...",
      done: "{0} Here is a random photo of a rabbit by <c>{1}</c> from <c>{2}</c>:",
    },
    racoon: {
      searching: "⏳ Searching for a photo of a racoon...",
      done: "{0} Here is a random photo of a racoon by <c>{1}</c> from <c>{2}</c>:",
    },
    rat: {
      searching: "⏳ Searching for a photo of a rat...",
      done: "{0} Here is a random photo of a rat by <c>{1}</c> from <c>{2}</c>:",
    },
    shiba: {
      searching: "⏳ Searching for a photo of Shiba Inu...",
      done: "{0} Here is a random Shiba Inu photo by <c>{1}</c> from <c>{2}</c>:",
    },
    snake: {
      searching: "⏳ Searching for a photo of a snake...",
      done: "{0} Here is a random photo of a snake by <c>{1}</c> from <c>{2}</c>:",
    },
    spider: {
      searching: "⏳ Searching for a photo of a spider...",
      done: "{0} Here is a random photo of a spider by <c>{1}</c> from <c>{2}</c>:",
    },
    turtle: {
      searching: "⏳ Searching for a photo of a turtle...",
      done: "{0} Here is a random photo of a turtle by <c>{1}</c> from <c>{2}</c>:",
    },
    unicorn: {
      searching: "⏳ Searching for a photo of a unicorn...",
      done: "{0} Here is a random photo of a unicorn by <c>{1}</c> from <c>{2}</c>:",
    },
    boosts: {
      summary: [
        "{0} Group boosting management:\n",
        "✨ With active Premium, you can boost up to <c>3</c> groups. This allows all members of those groups to use all <c>Ambient</c> features without restrictions, even if they don't have active Premium themselves. You can transfer your boosts to other groups at any time.",
        "\n💎 Your Premium state: {1}\n",
        "1️⃣ First boosted group: <c>{2}</c>",
        "2️⃣ Second boosted group: <c>{3}</c>",
        "3️⃣ Third boosted group: <c>{4}</c>",
        "\n✅ To activate boost in this group, type <c>{5} activate</c>.",
        "\n🚫 To deactivate boost in selected group, type <c>{5} deactivate 1/2/3</c>.",
        "\n💸 To learn more about supporting <c>Ambient</c> and getting Premium, type <c>{6}</c>.",
      ],
      premiumInactive: "❌ To boost groups you must have active Premium!",
      alreadyBoosted: "❌ This group is already being boosted by you!",
      noneLeft: "❌ You have reached the maximum number of boosted groups! Deactivate your boost on another group and try again.",
      successfullyBoosted:
        "✅ Boost has been successfully activated in this group! All members can now use all <c>Ambient</c> features without restrictions in this group, even if they don't have active Premium.",
      positionEmpty: "❌ You do not have any boosted group in the given position!",
      boostDeactivated: "✅ Successfully deactivated boost in group <c>{0}</c>!",
    },
    interactions: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n",
        "✨ <c>{1} on/off</c>",
        "\n💡 Choose whether Ambient should react to certain words and automatically download videos from sent links.",
        "\n🔧 Current interactions status: <c>{2}</c>",
      ],
      disabled: "🤐 Successfully disabled interactions in this group, Ambient will not respond to any messages except for commands starting with <c>{0}</c>.",
      enabled: "👉🏻 Successfully enabled interactions in this group, Ambient will respond to some messages in addition to commands starting with <c>{0}</c>.",
    },
    nsfw: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n",
        "✨ <c>{1} on/off</c>",
        "\n💡 Choose whether NSFW commands should be available in this group.",
        "\n🔧 Current NSFW status: <c>{2}</c>",
      ],
      disabled: "😌 Successfully disabled NSFW commands in this group!",
      enabled: "♨ Successfully enabled NSFW commands in this group!",
    },
    privacy: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n",
        "✨ <c>{1} on/off</c>",
        "\n💡 Choose whether your data should be hidden in global rankings.",
        "\n🔧 Current privacy status: <c>{2}</c>",
      ],
      disabled: "🙌🏻 Successfully disabled privacy mode in global rankings!",
      enabled: "😎 Successfully enabled privacy mode in global rankings!",
    },
    toggle: {
      summary: [
        "{0} Correct usage of command <c>{1}</c>:\n",
        "✨ <c>{1} <command></c>",
        "\n💡 Toggle the ability of members who are not administrators of this group to use selected commands.",
        "\n🔧 Currently disallowed commands: <c>{2}</c>",
      ],
      unableToToggle: "❌ You cannot prevent group members from using the <c>{0}</c> command.",
      toggledAllowed: "👌🏻 Successfully allowed all group members to use the <c>{0}</c> command!",
      toggledDisallowed: "⛔️ Successfully disallowed all members except group admins from using the <c>{0}</c> command!",
      disallowedExecute:
        "✋🏻 Administrators of this group do not allow <c>{0}</c> command to be used in this group. Try using this command in a different group or ask the group administrators to change the settings using the <c>{1}</c> command.",
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
      victory: [
        "📈 You won <c>{1} 🪙</c>, you now have <c>{2} 🪙</c>.\n", //
        "{3} Drawn number: <c>{4}</c>",
      ],
      loss: [
        "📉 You lost <c>{1} 🪙</c>, you now have <c>{2} 🪙</c>.\n", //
        "{3} Drawn number: <c>{4}</c>",
      ],
    },
    blackjack: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <bet 🪙></c>\n",
        "✨ Blackjack is a card game you can play against the dealer. Once the game starts, you can stand with your initial cards, double down if you think your starting hand is particularly strong, or hit to draw another card.\n",
        "✨ The goal is to get more points than the dealer without going over <c>21</c>. Exceeding this value or ending up with fewer points will result in a loss and forfeiting your bet 🪙.\n",
        "✨ If you hit <c>21</c> points in your starting hand right off the bat, the game ends immediately with a <c>x2.5</c> payout. For a standard win, the multiplier is <c>x2</c>.\n",
        "💡 Examples:",
        "⭐ <c>{1} 420.69</c>",
        "⭐ <c>{1} half</c>",
        "⭐ <c>{1} all</c>",
      ],
      notStarted: "❌ You don't have an active blackjack game! Use <c>{0}</c> to see details.",
      alreadyStarted: "❌ You already have an active blackjack game! Finish it before starting a new one. Use <c>{0}</c> to see details.",
      tooLateToDouble: "❌ You can only double down on your first move after starting the game!",
      couldNotAffordToDouble: "❌ You didn't have enough 🪙 when the game started! You can't double down now, even if you have enough.",
      started: [
        "{0} You started a blackjack game with dealer {3} <c>{4}</c>!\n",
        "💰 Bet: <c>{5}</c> 🪙 {6} 👛 Remaining: <c>{7}</c> 🪙\n",
        "🥃 {8} cards: {9} {6} {10} pts",
        "🤲🏻 Your cards: {11} {6} <c>{12}</c> pts\n",
        "🕹️ Use <c>{13} hit</c>, <c>{13} stand</c>, or <c>{13} double</c> to continue.",
      ],
      existingFirstMove: [
        "{0} You already have an active blackjack game with dealer {2} <c>{3}</c>!\n",
        "⌚ Start date: <c>{5}</c> {4} <c>{6}</c>\n",
        "💰 Bet: <c>{7}</c> 🪙 {4} 👛 Remaining: <c>{8}</c> 🪙\n",
        "🥃 {9} cards: {10} {4} {11} pts",
        "🤲🏻 Your cards: {12} {4} <c>{13}</c> pts\n",
        "🕹️ Use <c>{14} hit</c>, <c>{14} stand</c>, or <c>{14} double</c> to continue.",
      ],
      existingNextMoves: [
        "{0} You already have an active blackjack game with dealer {2} <c>{3}</c>!\n",
        "⌚ Start date: <c>{5}</c> {4} <c>{6}</c>\n",
        "💰 Bet: <c>{7}</c> 🪙 {4} 👛 Remaining: <c>{8}</c> 🪙\n",
        "🥃 {9} cards: {10} {4} {11} pts",
        "🤲🏻 Your cards: {12} {4} <c>{13}</c> pts\n",
        "🕹️ Use <c>{14} hit</c> or <c>{14} stand</c> to continue.",
      ],
      playerBust: [
        "{0} You lost the blackjack game against dealer {3} <c>{4}</c>! You went over <c>21</c> points.\n",
        "💰 Loss: <c>{5}</c> 🪙 {6} 👛 You now have: <c>{7}</c> 🪙\n",
        "🥃 {8} cards: {9} {6} {10} pts",
        "🤲🏻 Your cards: {11} {6} <c>{12}</c> pts\n",
        "🕹️ Use <c>{13} <bet 🪙></c> to play again.",
      ],
      dealerBust: [
        "{0} You won the blackjack game against dealer {3} <c>{4}</c>! The dealer went over <c>21</c> points.\n",
        "💰 Win: <c>{7}</c> 🪙 {8} 👛 You now have: <c>{9}</c> 🪙\n",
        "🥃 {10} cards: {11} {8} {12} pts",
        "🤲🏻 Your cards: {13} {8} <c>{14}</c> pts\n",
        "🕹️ Use <c>{15} <bet 🪙></c> to play again.",
      ],
      dealerWin: [
        "{0} You lost the blackjack game against dealer {3} <c>{4}</c>! The dealer has more points.\n",
        "💰 Loss: <c>{6}</c> 🪙 {7} 👛 You now have: <c>{8}</c> 🪙\n",
        "🥃 {9} cards: {10} {7} {11} pts",
        "🤲🏻 Your cards: {12} {7} <c>{13}</c> pts\n",
        "🕹️ Use <c>{14} <bet 🪙></c> to play again.",
      ],
      playerWin: [
        "{0} You won the blackjack game against dealer {3} <c>{4}</c>! You have more points.\n",
        "💰 Win: <c>{5}</c> 🪙 {6} 👛 You now have: <c>{7}</c> 🪙\n",
        "🥃 {8} cards: {9} {6} {10} pts",
        "🤲🏻 Your cards: {11} {6} <c>{12}</c> pts\n",
        "🕹️ Use <c>{13} <bet 🪙></c> to play again.",
      ],
      playerNatural: [
        "{0} You won the blackjack game against dealer {3} <c>{4}</c>! You hit <c>21</c> points right off the bat.\n",
        "💰 Win: <c>{5}</c> 🪙 {6} 👛 You now have: <c>{7}</c> 🪙\n",
        "🥃 {8} cards: {9} {6} {10} pts",
        "🤲🏻 Your cards: {11} {6} <c>{12}</c> pts\n",
        "🕹️ Use <c>{13} <bet 🪙></c> to play again.",
      ],
      dealerNatural: [
        "{0} You lost the blackjack game against dealer {3} <c>{4}</c>! The dealer hit <c>21</c> points right off the bat.\n",
        "💰 Loss: <c>{7}</c> 🪙 {8} 👛 You now have: <c>{9}</c> 🪙\n",
        "🥃 {10} cards: {11} {8} {12} pts",
        "🤲🏻 Your cards: {13} {8} <c>{14}</c> pts\n",
        "🕹️ Use <c>{15} <bet 🪙></c> to play again.",
      ],
      pushNatural: [
        "{0} You tied the blackjack game with dealer {2} <c>{3}</c>! Both sides hit <c>21</c> points right off the bat.\n",
        "💰 Bet: <c>{4}</c> 🪙 {5} 👛 You now have: <c>{6}</c> 🪙\n",
        "🥃 {7} cards: {8} {5} {9} pts",
        "🤲🏻 Your cards: {10} {5} <c>{11}</c> pts\n",
        "🕹️ Use <c>{12} <bet 🪙></c> to play again.",
      ],
      push: [
        "{0} You tied the blackjack game with dealer {2} <c>{3}</c>! Both sides finished with the same number of points.\n",
        "💰 Bet: <c>{4}</c> 🪙 {5} 👛 You now have: <c>{6}</c> 🪙\n",
        "🥃 {7} cards: {8} {5} {9} pts",
        "🤲🏻 Your cards: {10} {5} <c>{11}</c> pts\n",
        "🕹️ Use <c>{12} <bet 🪙></c> to play again.",
      ],
      awaitingMove: [
        "{0} You drew another card from the deck!\n",
        "💰 Bet: <c>{2}</c> 🪙 {3} 👛 Remaining: <c>{4}</c> 🪙\n",
        "🥃 {5} cards: {6} {3} {7} pts",
        "🤲🏻 Your cards: {8} {3} <c>{9}</c> pts\n",
        "🕹️ Use <c>{10} hit</c> or <c>{10} stand</c> to continue.",
      ],
    },
    catch: {
      missingFishingRod: "❌ You don't have an active fishing rod! Use command <c>{0}</c> to buy a new one.",
      missingBait: "❌ You don't have an active bait! Use command <c>{0}</c> to buy a new one.",
      escaped: "💨 The fish got away! Try again.",
      snapped: "⛓️‍💥 The line snapped! Try again.",
      trash: "🗑️ You fished out <c>{1}</c>! Try again.",
      success: "{0} You caught a <c>🎏 {2}</c> weighing <c>⚖️ {4} kg</c> worth <c>{5} 🪙</c>! You now have <c>{6} 🪙</c>.",
    },
    daily: {
      cooldown: "🙄 <c>{0}</c>, you will be able to receive your next free 🪙 in <c>⌚ {2}</c>, <c>{3}</c> and <c>{4}</c>.",
      received: [
        "{0} <c>{1}</c>, you have received free <c>{3}</c> 🪙! You now have <c>{4} 🪙</c>. You will be able to receive your next free 🪙 in <c>⌚ 24 hours</c>.\n",
        "🤑 Collect your free coins regularly to earn a bonus for each additional consecutive day!",
      ],
      receivedWithBonus: [
        "{0} <c>{1}</c>, you have received free <c>{3}</c> 🪙 (including an extra <c>{4} 🪙</c> for collecting them <c>{5}</c> days in a row)! You now have <c>{6} 🪙</c>. You will be able to receive your next free 🪙 in <c>⌚ 24 hours</c>.\n",
        "🤑 Collect your free coins regularly to earn a bonus for each additional consecutive day!",
      ],
    },
    inventory: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <@user (optionally)></c>",
      ],
      done: [
        "{1} Info about inventory of <c>{2}</c>:",
        "\n🏦 <c>GENERAL</c>:",
        "👛 Balance: <c>{3} 🪙</c>",
        "📅 Last daily reward: {4}",
        "🔥 Days in a row: <c>{5}</c>",
        "\n🐟 <c>FISHING</c>:",
        "🎣 Fishing rod: <c>{6}</c>",
        "⏳ Remaining fishing rod uses: <c>{7}</c>",
        "🪝 Bait: <c>{8}</c>",
        "♾️ Remaining bait uses: <c>{9}</c>",
        "⚖️ Caught fish: <c>{10}</c>",
        "\n🎰 <c>CASINO</c>:",
        "🤝🏻 Last bet: {11}",
        "📈 Bet victories: <c>{12}</c>",
        "📉 Bet losses: <c>{13}</c>",
        "🎡 Last roulette: {14}",
        "👑 Roulette victories: <c>{15}</c>",
        "💀 Roulette losses: <c>{16}</c>",
        "🃏 Last blackjack: {17}",
        "🌟 Blackjack naturals: <c>{18}</c>",
        "🏆 Blackjack victories: <c>{19}</c>",
        "🪫 Blackjack losses: <c>{20}</c>",
        "🫠 Blackjack busts: <c>{21}</c>",
        "🪃 Blackjack pushes: <c>{22}</c>",
        "\n🥷🏼 <c>ROBBERIES</c>:",
        "💰 Successful robberies: <c>{23}</c>",
        "🔒 Failed robberies: <c>{24}</c>",
        "💥 Suffered robberies: <c>{25}</c>",
        "🛡️ Defended robberies: <c>{26}</c>",
        "🕵️ Last robbery: {27}",
        "🦹 Last robbed: {29}",
        "⛓️ Arrested: {30}",
        "🧰 Robbery defense item: <c>{31}</c>",
        "🎒 Robbery assist item: <c>{32}</c>",
      ],
    },
    rank: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:",
        "\n🪙 <c>{1} coins globally/groupglobally</c> {2} Shows the ranking of {3} users who have the most coins",
        "\n🔥 <c>{1} streak globally/groupglobally</c> {2} Shows the ranking of {3} users who claim free coins the most days in a row",
        "\n💰 <c>{1} successfulrobberies globally/groupglobally</c> {2} Shows the ranking of the {3} users who performed the most successful robberies",
        "\n🔒 <c>{1} failedrobberies globally/groupglobally</c> {2} Shows the ranking of the {3} users who performed the most unsuccessful robberies",
        "\n💥 <c>{1} sufferedrobberies globally/groupglobally</c> {2} Shows the ranking of the {3} users who experienced the most robberies",
        "\n🛡️ <c>{1} defendedrobberies globally/groupglobally</c> {2} Shows the ranking of {3} users who defended themselves against the most robberies",
        "\n📈 <c>{1} betvictories globally/groupglobally</c> {2} Shows the ranking of the {3} users who won the most bets",
        "\n📉 <c>{1} betlosses globally/groupglobally</c> {2} Shows the ranking of {3} users who lost the most bets",
        "\n⚖️ <c>{1} caughtfish globally/groupglobally</c> {2} Shows the ranking of the {3} users who caught the most fish",
        "\n👑 <c>{1} roulettevictories globally/groupglobally</c> {2} Shows the ranking of the {3} users who won the most roulettes",
        "\n💀 <c>{1} roulettelosses globally/groupglobally</c> {2} Shows the ranking of the {3} users who lost the most roulettes",
        "\n🌟 <c>{1} blackjacknaturals globally/groupglobally</c> {2} Shows the ranking of the {3} users who hit the most natural blackjacks",
        "\n🏆 <c>{1} blackjackvictories globally/groupglobally</c> {2} Shows the ranking of the {3} users who won the most blackjacks",
        "\n🪫 <c>{1} blackjacklosses globally/groupglobally</c> {2} Shows the ranking of the {3} users who lost the most blackjacks",
        "\n🫠 <c>{1} blackjackbusts globally/groupglobally</c> {2} Shows the ranking of the {3} users who busted the most blackjacks",
        "\n🪃 <c>{1} blackjackpushes globally/groupglobally</c> {2} Shows the ranking of the {3} users who pushed the most blackjacks",
        "\n💬 Looking for user rankings in the context of chat? Check out the <c>{4}</c> command.",
      ],
      coinsGlobal: [
        "🪙 Top {0} users who have the most coins globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      streakGlobal: [
        "🔥 Top {0} users who claim free coins the most days in a row globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      successfulRobberiesGlobal: [
        "💰 Top {0} users who performed the most successful robberies globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      failedRobberiesGlobal: [
        "🔒 Top {0} users who performed the most unsuccessful robberies globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      sufferedRobberiesGlobal: [
        "💥 Top {0} users who experienced the most robberies globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      defendedRobberiesGlobal: [
        "🛡️ Top {0} users who defended themselves against the most robberies globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      betVictoriesGlobal: [
        "📈 Top {0} users who won the most bets globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      betLossesGlobal: [
        "📉 Top {0} users who lost the most bets globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      rouletteVictoriesGlobal: [
        "👑 Top {0} users who won the most roulettes globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      rouletteLossesGlobal: [
        "💀 Top {0} users who lost the most roulettes globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      blackjackNaturalsGlobal: [
        "🌟 Top {0} users who hit the most natural blackjacks globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      blackjackVictoriesGlobal: [
        "🏆 Top {0} users who won the most blackjacks globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      blackjackLossesGlobal: [
        "🪫 Top {0} users who lost the most blackjacks globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      blackjackBustsGlobal: [
        "🫠 Top {0} users who busted the most blackjacks globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      blackjackPushesGlobal: [
        "🪃 Top {0} users who pushed the most blackjacks globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      caughtFishGlobal: [
        "⚖️ Top {0} users who caught the most fish globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      coinsGroupGlobal: [
        "🪙 Top {0} members who have the most coins globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      streakGroupGlobal: [
        "🔥 Top {0} members who claim free coins the most days in a row globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      successfulRobberiesGroupGlobal: [
        "💰 Top {0} members who performed the most successful robberies globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      failedRobberiesGroupGlobal: [
        "🔒 Top {0} members who performed the most unsuccessful robberies globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      sufferedRobberiesGroupGlobal: [
        "💥 Top {0} members who experienced the most robberies globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      defendedRobberiesGroupGlobal: [
        "🛡️ Top {0} members who defended themselves against the most robberies globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      betVictoriesGroupGlobal: [
        "📈 Top {0} members who won the most bets globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      betLossesGroupGlobal: [
        "📉 Top {0} members who lost the most bets globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      rouletteVictoriesGroupGlobal: [
        "👑 Top {0} members who won the most roulettes globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      rouletteLossesGroupGlobal: [
        "💀 Top {0} members who lost the most roulettes globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      blackjackNaturalsGroupGlobal: [
        "🌟 Top {0} members who hit the most natural blackjacks globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      blackjackVictoriesGroupGlobal: [
        "🏆 Top {0} members who won the most blackjacks globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      blackjackLossesGroupGlobal: [
        "🪫 Top {0} members who lost the most blackjacks globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      blackjackBustsGroupGlobal: [
        "🫠 Top {0} members who busted the most blackjacks globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      blackjackPushesGroupGlobal: [
        "🪃 Top {0} members who pushed the most blackjacks globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      caughtFishGroupGlobal: [
        "⚖️ Top {0} members who caught the most fish globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
    },
    rob: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <@user></c>",
      ],
      arrested: "👮🏼 You can't rob now because you're arrested for another <c>⌚ {1}</c> and <c>{2}</c>.",
      cooldown: "🏴‍☠️ You will be able to rob again in <c>⌚ {1}</c> and <c>{2}</c>.",
      nothingNothingCaught:
        "🚨 You tried to rob <c>{1}</c>, who had no protection, of <c>{4} 🪙</c>. Unfortunately, you had no tools and were caught by the police. You paid a fine of <c>{6} 🪙</c> and were arrested for <c>⌚ an hour</c>. You now have <c>{8} 🪙</c>.",
      nothingNothingUncaught: "{0} <c>{1}</c> had no protection and you managed to rob them of <c>{4} 🪙</c> without using any additional tools! You now have <c>{5} 🪙</c>.",
      nothingHighProofBeerCaught:
        "🚨 You tried to rob <c>{1}</c>, who had no security, of <c>{4} 🪙</c>. Unfortunately, you were drunk and caught by the police. You paid a double fine of <c>{6} 🪙</c> and were arrested for <c>⌚ an hour</c>. You now have <c>{8} 🪙</c>.",
      nothingHighProofBeerUncaught: "{0} <c>{1}</c> had no protection and you managed to rob them of <c>{4} 🪙</c> under the influence of alcohol! You now have <c>{5} 🪙</c>.",
      nothingBribeForThePoliceCaught:
        "🚨 You tried to rob <c>{1}</c>, who had no security, of <c>{4} 🪙</c>. Unfortunately, you were caught by the police, but you avoided a fine and arrest because you gave them a bribe.",
      nothingBribeForThePoliceUncaught:
        "{0} <c>{1}</c> had no protection and you managed to rob them of <c>{4} 🪙</c>! You kept your bribe for the police as it was not needed. You now have <c>{6} 🪙</c>.",
      nothingFastCarCaught:
        "🚨 <c>{0}</c> had no protection and you managed to rob them of <c>{3} 🪙</c>! You were caught by the police, but you managed to escape with the loot thanks to a fast car. You now have <c>{6} 🪙</c>.",
      nothingFastCarUncaught:
        "{0} <c>{1}</c> had no protection and you managed to rob them of <c>{4} 🪙</c>! You kept your fast car as it was not needed. You now have <c>{6} 🪙</c>.",
      steelPadlockNothingCaught:
        "🚨 You tried to rob <c>{1}</c> of <c>{2} 🪙</c> without any tools. Unfortunately, you were caught by the police trying to open the padlock and were arrested for <c>⌚ an hour</c>.",
      steelPadlockNothingUncaught: "🔒 You tried to rob <c>{1}</c> of <c>{2} 🪙</c> without any tools. Unfortunately, you came across a padlock that you could not open.",
      steelPadlockHighProofBeerCaught:
        "🚨 You tried to rob <c>{1}</c> of <c>{2} 🪙</c> while drunk. Unfortunately, you were caught by the police trying to open the padlock and were arrested for <c>⌚ an hour</c>.",
      steelPadlockHighProofBeerUncaught: "🔒 You tried to rob <c>{1}</c> of <c>{2} 🪙</c> while drunk. Unfortunately, you came across a padlock that you could not open.",
      steelPadlockBribeForThePoliceCaught:
        "🚨 You tried to rob <c>{1}</c> of <c>{2} 🪙</c>. Unfortunately, you were caught by the police trying to open the padlock, but you avoided a fine and arrest because you gave them a bribe.",
      steelPadlockBribeForThePoliceUncaught:
        "🔒 You tried to rob <c>{1}</c> of <c>{2} 🪙</c>. Unfortunately, you came across a padlock that you could not open. You kept your bribe for the police as it was not needed.",
      steelPadlockFastCarCaught:
        "🚨 You tried to rob <c>{1}</c> of <c>{2} 🪙</c>. Unfortunately, you were caught by the police trying to open the padlock, but you managed to escape thanks to a fast car.",
      steelPadlockFastCarUncaught:
        "🔒 You tried to rob <c>{1}</c> of <c>{2} 🪙</c>. Unfortunately, you came across a padlock that you could not open. You kept your fast car as it was not needed.",
      aggressiveDogNothingCaught:
        "🚨 You tried to rob <c>{1}</c> of <c>{2} 🪙</c> without any tools. Unfortunately, you were caught by the police trying to avoid an aggressive dog and were arrested for <c>⌚ an hour</c>.",
      aggressiveDogNothingUncaught:
        "🐶 You tried to rob <c>{1}</c> of <c>{2} 🪙</c> without any tools. Unfortunately, you were injured by an aggressive dog and had to pay <c>{4} 🪙</c> for treatment. You now have <c>{5} 🪙</c>.",
      aggressiveDogHighProofBeerCaught:
        "🚨 You tried to rob <c>{1}</c> of <c>{2} 🪙</c> while drunk. Unfortunately, you were caught by the police trying to avoid an aggressive dog and were arrested for <c>⌚ an hour</c>.",
      aggressiveDogHighProofBeerUncaught:
        "🐶 You tried to rob <c>{1}</c> of <c>{2} 🪙</c> while drunk. Unfortunately, you were injured by an aggressive dog and had to pay <c>{4} 🪙</c> for treatment. You now have <c>{5} 🪙</c>.",
      aggressiveDogBribeForThePoliceCaught:
        "🚨 You tried to rob <c>{1}</c> of <c>{2} 🪙</c>. Unfortunately, you were caught by the police trying to avoid an aggressive dog, but you avoided a fine and arrest because you gave them a bribe.",
      aggressiveDogBribeForThePoliceUncaught:
        "🐶 You tried to rob <c>{1}</c> of <c>{2} 🪙</c>. Unfortunately, you were injured by an aggressive dog and had to pay <c>{4} 🪙</c> for treatment. You kept your bribe for the police as it was not needed. You now have <c>{5} 🪙</c>.",
      aggressiveDogFastCarCaught:
        "🚨 You tried to rob <c>{1}</c> of <c>{2} 🪙</c>. Unfortunately, you were caught by the police trying to avoid an aggressive dog, but you managed to escape thanks to a fast car.",
      aggressiveDogFastCarUncaught:
        "🐶 You tried to rob <c>{1}</c> of <c>{2} 🪙</c>. Unfortunately, you were attacked by an aggressive dog, but you managed to escape the bite thanks to a fast car.",
      clusterBombNothingCaught:
        "🚨 You tried to rob <c>{1}</c> of <c>{2} 🪙</c> without any tools. Unfortunately, you were caught by the police trying to avoid a cluster bomb and were arrested for <c>⌚ an hour</c>.",
      clusterBombNothingUncaught:
        "💣 You tried to rob <c>{1}</c> of <c>{2} 🪙</c> without any tools. Unfortunately, you were injured by a cluster bomb and had to pay <c>{4} 🪙</c> for treatment. You now have <c>{5} 🪙</c>.",
      clusterBombHighProofBeerCaught:
        "🚨 You tried to rob <c>{1}</c> of <c>{2} 🪙</c> while drunk. Unfortunately, you were caught by the police trying to avoid a cluster bomb and were arrested for <c>⌚ an hour</c>.",
      clusterBombHighProofBeerUncaught:
        "💣 You tried to rob <c>{1}</c> of <c>{2} 🪙</c> while drunk. Unfortunately, you were injured by a cluster bomb and had to pay <c>{4} 🪙</c> for treatment. You now have <c>{5} 🪙</c>.",
      clusterBombBribeForThePoliceCaught:
        "🚨 You tried to rob <c>{1}</c> of <c>{2} 🪙</c>. Unfortunately, you were caught by the police trying to avoid a cluster bomb, but you avoided a fine and arrest because you gave them a bribe.",
      clusterBombBribeForThePoliceUncaught:
        "💣 You tried to rob <c>{1}</c> of <c>{2} 🪙</c>. Unfortunately, you were injured by a cluster bomb and had to pay <c>{4} 🪙</c> for treatment. You kept your bribe for the police as it was not needed. You now have <c>{5} 🪙</c>.",
      clusterBombFastCarCaught:
        "🚨 You tried to rob <c>{1}</c> of <c>{2} 🪙</c>. Unfortunately, you were caught by the police trying to avoid a cluster bomb, but you managed to escape thanks to a fast car.",
      clusterBombFastCarUncaught:
        "💣 You tried to rob <c>{1}</c> of <c>{2} 🪙</c>. Unfortunately, you were attacked by a cluster bomb, but you managed to escape the explosion thanks to a fast car.",
    },
    roulette: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <bet 🪙> <green/red/black/even/odd/low/high/0-36></c>\n",
        "✨ If the landed spot matches your pick or belongs to the chosen group, you keep your 🪙 and receive a reward. Otherwise, you lose the bet 🪙.\n",
        "✨ The multiplier is <c>x36</c> when picking a specific spot, and <c>x2</c> when picking a group.\n",
        "✨ You have an exact <c>2.7%</c> chance of hitting a specific spot, and a <c>48.65%</c> chance of hitting any of the groups.\n",
        "💡 Examples:",
        "⭐ <c>{1} 67 low</c>",
        "⭐ <c>{1} half black</c>",
        "⭐ <c>{1} all 0</c>",
      ],
      victory: [
        "👑 You won <c>{1} 🪙</c>, you now have <c>{2} 🪙</c>.\n", //
        "🎯 Where the ball landed:\n",
        "{3}\n",
        "{4} Your bet: {5} <c>{6}</c> (Multiplier: <c>x{7}</c>)",
      ],
      loss: [
        "💀 You lost <c>{1} 🪙</c>, you now have <c>{2} 🪙</c>.\n", //
        "🎯 Where the ball landed:\n",
        "{3}\n",
        "{4} Your bet: {5} <c>{6}</c> (Multiplier: <c>x{7}</c>)",
      ],
    },
    shop: {
      summary: [
        "{0} Items and facilities available for purchase:",
        "\n🎣 <c>FISHING RODS</c>:",
        "1. {2} <c>{3}</c> {1} {4} 🪙",
        "2. {5} <c>{6}</c> {1} {7} 🪙",
        "3. {8} <c>{9}</c> {1} {10} 🪙",
        "\n🪝 <c>BAITS</c>:",
        "4. {11} <c>{12}</c> {1} {13} 🪙",
        "5. {14} <c>{15}</c> {1} {16} 🪙",
        "6. {17} <c>{18}</c> {1} {19} 🪙",
        "\n🛡️ <c>PROTECTION AGAINST THIEVES</c>:",
        "7. {20} <c>{21}</c> {1} {22} 🪙",
        "8. {23} <c>{24}</c> {1} {25} 🪙",
        "9. {26} <c>{27}</c> {1} {28} 🪙",
        "\n🎒 <c>THEFT SUPPORT</c>:",
        "10. {29} <c>{30}</c> {1} {31} 🪙",
        "11. {32} <c>{33}</c> {1} {34} 🪙",
        "12. {35} <c>{36}</c> {1} {37} 🪙",
        "\n👛 Your balance: <c>{38} 🪙</c>",
        "\n💡 Type <c>{39} info <number></c> to see details about an item, or <c>{39} buy <number></c> to purchase it.",
      ],
      invalidItemNumber: "❌ The item number provided is invalid!",
      sameTypeItemAlreadyActive: "❌ You can't buy this item because you already have an active item of the same type: <c>{0} {1}</c>",
      bought: "✅ You bought <c>{1} {2}</c> for <c>{3} 🪙</c>! You now have <c>{4} 🪙</c>.",
      details: [
        "{0} Info about item <c>{1}</c>:\n", //
        "🏷️ Description: <c>{2}</c>",
        "📐 Characteristics: <c>{3}</c>",
        "🛒 Price: <c>{4}</c> 🪙",
        "\n💡 To buy this item, type <c>{5} buy {6}</c>.",
      ],
    },
    tip: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} @user <amount of 🪙></c>\n",
        "💡 Examples:",
        "⭐ <c>{1} @user 69</c>",
        "⭐ <c>{1} @user 4.20</c>",
        "⭐ <c>{1} @user 13.37</c>",
      ],
      done: "✅ Successfully tipped <c>{1} 🪙</c> to <c>{2}</c>! You now have <c>{3} 🪙</c>.",
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
    labubu: {
      searching: "⏳ Searching for a photo of Labubu...",
      done: "{0} Here is a random photo of Labubu by <c>{1}</c> from <c>{2}</c>:",
    },
    meme: {
      searching: "⏳ Searching a random meme...",
      done: "{0} Here is a random meme by <c>{1}</c> from <c>{2}</c>:",
    },
    motorcycle: {
      searching: "⏳ Searching for a photo of a motorcycle...",
      done: "{0} Here is a random photo of a motorcycle by <c>{1}</c> from <c>{2}</c>:",
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
      doneVideoExternal: "{0} Here is an Astronomy Video of the Day named <c>{1}</c>: {2}",
      doneVideo: "{0} Here is an Astronomy Video of the Day named <c>{1}</c>:",
      done: "{0} Here is an Astronomy Picture of the Day named <c>{1}</c>:",
    },
    bot: [
      "{0} Ambient info:",
      "\n📝 <c>GENERAL</c>:",
      "☯️ RAM: <c>{1}/{2} GiB</c> {3} <c>{4}%</c>",
      "💾 NVMe: <c>{5}/{6} GiB</c> {3} <c>{7}%</c>",
      "🏓 Ping: <c>{8} ms</c>",
      "📦 Instance: <c>{9}</c>",
      "🤖 Running bots: <c>{10}</c>",
      "🌡️ Average CPU temperature: <c>{11}°C</c> {12}",
      "♨️ Average NVMe temperature: <c>{13}°C</c> {14}",
      "💖 Supporters count: <c>{15}</c>",
      "🍒 Creation date: <c>{16}</c>",
      "🥐 Creation date (v3): <c>{17}</c>",
      "\n✨ <c>CORE</c>:",
      "🔖 Version: <c>{18}</c>",
      "🌳 Environment: <c>{19}</c>",
      "⌚ Uptime: <c>{20}</c>",
      "🆙 Update date: <c>{21}</c> {3} <c>{22}</c>",
      "\n🔌 <c>CLIENT</c>:",
      "🔖 Version: <c>{23}</c>",
      "🌳 Environment: <c>{24}</c>",
      "⌚ Uptime: <c>{25}</c>",
      "🆙 Update date: <c>{26}</c> {3} <c>{27}</c>",
      "\n🪙 <c>ECONOMY</c>:",
      "🔖 Version: <c>{28}</c>",
      "🌳 Environment: <c>{29}</c>",
      "⌚ Uptime: <c>{30}</c>",
      "🆙 Update date: <c>{31}</c> {3} <c>{32}</c>",
      "\n📱 This bot was created <c>completely free</c> on {33}, you can also do it to use it on your groups!",
      "\n🤗 Join our <c>Discord server</c> to stay up to date with <c>Ambient</c> news, as well as get help and answers to your questions: {34}",
    ],
    group: {
      collecting: "⏳ Collecting info about group...",
      done: [
        "{0} Info about group <c>{1}</c>:\n",
        "🆔 ID: <c>{2}</c>",
        "👥 Participants: <c>{3}</c>",
        "👮🏻‍♂️ Administrators: <c>{4}</c>",
        "👨🏻 Males: <c>{5}</c>",
        "👩🏼 Females: <c>{6}</c>",
        "🤗 Ambient users: <c>{7}</c>",
        "🎨 Theme name: <c>{8}</c>",
        "🗂 Visible messages: <c>{9}</c>",
        "🗃 Processed messages: <c>{10}</c>",
        "🤖 Executed commands: <c>{11}</c>",
        "🐒 Mentions count: <c>{12}</c>",
        "⚠️ Warnings count: <c>{13}</c>",
        "🧐 Members approval: <c>{14}</c>",
        "⏳ Members in queue: <c>{15}</c>",
        "🔞 NSFW: <c>{16}</c>",
        "🤐 Interactions: <c>{17}</c>",
        "👀 Messages restoration: <c>{18}</c>",
        "⛓️ Jail mode: <c>{19}</c>",
        "🔗 Invitation link (Ambient): {20}",
        "♾️ Invitation link (Meta): {21}",
        "🤓 First Ambient usage: <c>{23}</c> {22} <c>{24}</c>",
      ],
    },
    help: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <command name (optionally)></c>\n",
        "💡 Examples:",
        "⭐ <c>{1}</c>",
        "⭐ <c>{1} {2}</c>",
        "⭐ <c>{1} {3}</c>",
      ],
      list: [
        "{0} List of commands available in Ambient (<c>{1}</c>):\n",
        "🦊 Animals (<c>{2}</c>): {3}\n",
        "⚙️ Configuration (<c>{4}</c>): {5}\n",
        "🪙 Economy (<c>{6}</c>): {7}\n",
        "👾 Fun (<c>{8}</c>): {9}\n",
        "ℹ️ Info (<c>{10}</c>): {11}\n",
        "🔞 NSFW (<c>{12}</c>): {13}\n",
        "📸 Social (<c>{14}</c>): {15}\n",
        "🛠️ Tools (<c>{16}</c>): {17}\n",
        "✨ To see detailed information on the selected command, type <c>{18} <command name></c>, e.g. <c>{18} {19}</c>.",
        "\n📱 This bot was created <c>completely free</c> on {20}, you can also do it to use it on your groups!",
        "\n🤗 Join our <c>Discord server</c> to stay up to date with <c>Ambient</c> news, as well as get help and answers to your questions: {21}",
      ],
      commandNotFound: "❌ Command not found. Type <c>{0}</c> for a list of available commands.",
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
        "{0} Here are the group rules of <c>{1}</c> set by the administration:\n",
        "{2}",
        "\n📝 To change the group rules, type <c>{3} <new rules content></c>.",
        "\n🗑️ To remove the group rules, type <c>{3} remove</c>.",
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
        "\n✉️ <c>{1} messages group/globally/groupglobally</c> {2} Shows the top {3} users who sent the most messages",
        "\n🪄 <c>{1} commands group/globally/groupglobally</c> {2} Shows the top {3} users who executed the most commands",
        "\n🐒 <c>{1} mentions group/globally/groupglobally</c> {2} Shows the top {3} users who have been mentioned the most",
        "\n🪙 Looking for top users in the context of economy? Check out the <c>{4}</c> command.",
      ],
      messagesGroup: [
        "✉️ Top {0} members who sent the most messages in this group:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      commandsGroup: [
        "🪄 Top {0} members who executed the most commands in this group:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      mentionsGroup: [
        "🐒 Top {0} members who have been mentioned the most in this group:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      messagesGlobal: [
        "✉️ Top {0} users who sent the most messages globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      commandsGlobal: [
        "🪄 Top {0} users who executed the most commands globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      mentionsGlobal: [
        "🐒 Top {0} users who have been mentioned the most globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      messagesGroupGlobal: [
        "✉️ Top {0} members who sent the most messages globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      commandsGroupGlobal: [
        "🪄 Top {0} members who executed the most commands globally:", //
        "\n{1}\n",
        "🧮 You're <c>#{2}</c> in the ranking.",
      ],
      mentionsGroupGlobal: [
        "🐒 Top {0} members who have been mentioned the most globally:", //
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
        "☁️ Cloud level: <c>{11}%</c>",
        "🌅 Sunrise: <c>{12}</c>",
        "🌇 Sunset: <c>{13}</c>",
      ],
    },
    boobs: {
      searching: "⏳ Searching for a photo of boobs...",
      done: "{0} Here is a random photo of boobs by <c>{1}</c> from <c>{2}</c>:",
    },
    butt: {
      searching: "⏳ Searching for a photo of a butt...",
      done: "{0} Here is a random photo of a butt by <c>{1}</c> from <c>{2}</c>:",
    },
    dick: {
      searching: "⏳ Searching for a photo of a dick...",
      done: "{0} Here is a random photo of a dick by <c>{1}</c> from <c>{2}</c>:",
    },
    feet: {
      searching: "⏳ Searching for a photo of female feet...",
      done: "{0} Here is a random photo of female feet by <c>{1}</c> from <c>{2}</c>:",
    },
    konachan: {
      searching: "⏳ Searching for Konachan photo...",
      done: "{0} Here is a random Konachan photo:",
    },
    muscles: {
      searching: "⏳ Searching for a photo of muscles...",
      done: "{0} Here is a random photo of muscles by <c>{1}</c> from <c>{2}</c>:",
    },
    pussy: {
      searching: "⏳ Searching for a photo of a pussy...",
      done: "{0} Here is a random photo of a pussy by <c>{1}</c> from <c>{2}</c>:",
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
    veins: {
      searching: "⏳ Searching for a photo of veins...",
      done: "{0} Here is a random photo of veins by <c>{1}</c> from <c>{2}</c>:",
    },
    yandere: {
      searching: "⏳ Searching for Yandere photo...",
      done: "{0} Here is a random Yandere photo by <c>{1}</c> from <c>{2}</c>:",
    },
    invitation: {
      status: [
        "{0} Configuration of the group invitation link:\n",
        "🔗 Current link: {1}",
        "🧮 Usages count: <c>{2}</c>",
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
    jail: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} on/off</c>",
        "\n💡 Choose whether Ambient should attempt to automatically restore members to the group when they leave by themselves.",
        "\n🔧 Current jail status: <c>{2}</c>",
      ],
      disabled: "🧱 Successfully disabled jail mode, Ambient will not attempt to automatically restore members to the group when they leave by themselves.",
      enabled: "🦹🏻 Successfully enabled jail mode, Ambient will attempt to automatically restore members to the group when they leave by themselves.",
    },
    premium: [
      "{0} You can support <c>Ambient</c> to get Premium and use all features without restrictions - across all bots created in the <c>Ambient</c> system and across all groups. With Premium, you can also boost up to <c>3</c> groups simultaneously, so all members can also use all <c>Ambient</c> features in those groups without restrictions, regardless of whether they have Premium.",
      "\n💖 Current supporters count: <c>{1}</c>",
      "\n💎 Your Premium state: {2}",
      "\n🔗 Your link to support and Premium details: {3}",
      "\n🤗 Have questions or need help? Join our <c>Discord server</c>: {4}",
      "\n🫶🏻 Thank you for supporting <c>Ambient</c>!",
    ],
    purge: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <number of inactivity days></c>",
      ],
      nothingToPurge: "❌ All group members have been active for the last <c>{1}</c> day{2}!",
      confirmation: [
        "ℹ️ This group currently has <c>{0}</c> users, after purging it from <c>{1}</c> member{2} which {4} inactive for at least <c>{6}</c> day{7}, there will be <c>{8}</c> of them. Do you want to continue?\n",
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
        "{0} Restoration of deleted messages feature configuration:\n",
        "🛡 Enabled: <c>{1}</c>",
        "👮🏻‍♂️ Restore administrator messages: <c>{2}</c>",
        "📎 Attachments as links: <c>{3}</c>",
        "👨‍👩‍👧‍👦 Thread to restore to: {4}",
        "\n⚙ To change settings, type <c>{5} change</c>.",
      ],
      firstSettingQuestion: [
        "🛡 Do you want to enable the restoration of deleted messages feature?\n",
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
        "👨‍👩‍👧‍👦 Select thread to which you want to restore messages deleted in this group:\n",
        "{0}",
        "\n🪄 Send only the number corresponding to the selected thread, you can also react to this message by using 👍🏼 (variant irrelevant) to select current group.",
      ],
      disabled: "📴 Restoration of deleted messages feature has been successfully disabled!",
      saved: "✅ Restoration of deleted messages feature settings has been successfully saved!",
      threadUnavailable:
        "❌ Unable to restore deleted message to the configured group, because it is unavailable or the bot is not a member. Use the <c>{0}</c> command to change the group for restoring deleted messages or disable this feature.",
      restored: [
        "👀 User <c>{0}</c> deleted a message in <c>{2}</c> group!",
        "\n💡 Use <c>{3}</c> command to see detailed information on restoration of deleted messages feature configuration.\n",
        "📨 Sent on: <c>{5}</c> {4} <c>{6}</c>",
        "📮 Deleted on: <c>{7}</c> {4} <c>{8}</c>",
        "🕰 Deleted after: {9}",
        "📜 Message content: <c>{10}</c>",
      ],
      restoredAttachments: [
        "👀 User <c>{0}</c> deleted a message in <c>{2}</c> group!",
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
        "⭐ <c>{1} dxmqa_Ok</c>",
        "⭐ <c>{1} Wolfpaq</c>",
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
    discord: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:",
        "\n🔌 <c>{1} connect</c> {2} Allows you to connect your Ambient profile to Discord account",
        "\n🔥 <c>{1} disconnect</c> {2} Allows you to disconnect your Ambient profile from Discord account",
      ],
      notConnected: "❌ You haven't connected your Ambient profile to Discord account!",
      disconnected: "✅ Successfully disconnected your Ambient profile from Discord account!",
    },
    instagram: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <username></c>\n",
        "💡 Examples:",
        "⭐ <c>{1} klaudixiara</c>",
        "⭐ <c>{1} negatywny</c>",
        "⭐ <c>{1} pqmidor</c>",
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
        "\n💡 Choose your AFK status which will be displayed when someone mentions you.",
        "\n🔧 Current AFK status: <c>{2}</c>",
      ],
      tooLong: "❌ The reason for being AFK is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      disabled: "✅ Successfully disabled AFK status!",
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
        "🏷️ Nickname in group: <c>{8}</c>",
        "🥰 Has bot in friends: <c>{9}</c>",
        "👮🏻‍♂️ Group administrator: <c>{10}</c>",
        "🎂 Celebrating a birthday today: <c>{11}</c>",
        "🌍 Location: <c>{12}</c>",
        "🤓 Uses Ambient since: <c>{14}</c> {13} <c>{15}</c>",
        "🤖 Is bot: <c>{16}</c>",
        "🖤 Is blacklisted: <c>{17}</c>",
        "👑 Ambient team member: <c>{18}</c>",
        "#️⃣ Premium code: <c>{19}</c>",
        "💎 Premium state: {20}",
        "👅 Language in Ambient: <c>{21}</c>",
        "🎛️ Spotify connected: <c>{22}</c>",
        "🎭 Privacy mode: <c>{23}</c>",
        "🫣 Last activity: <c>{24}</c> {13} <c>{25}</c> (in this group: <c>{26}</c>)",
        "🐒 Mentions: <c>{27}</c> (in this group: <c>{28}</c>)",
        "✉️ Messages sent: <c>{29}</c> (in this group: <c>{30}</c>)",
        "🪄 Commands executed: <c>{31}</c> (in this group: <c>{32}</c>)",
        "🔄 Data updated: <c>{33}</c> {13} <c>{34}</c>",
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
        "\n🔌 <c>{1} connect</c> {2} Allows you to connect your Ambient profile to Spotify account",
        "\n🔥 <c>{1} disconnect</c> {2} Allows you to disconnect your Ambient profile from Spotify account",
        "\n🤠 <c>{1} profile <@user (optionally)></c> {2} Allows you to check info about your or the mentioned user Spotify profile",
        "\n🧐 <c>{1} group</c> {2} Allows you to check what are members of this group currently listening to",
        "\n🎧 <c>{1} nowplaying <@user (optionally)></c> {2} Allows you to check what are you or the user mentioned listening to now",
        "\n⭐ <c>{1} toptracks 1m/6m/12m <@user (optionally)></c> {2} Allows you to check what are your or the user mentioned most listened tracks in the given time range",
        "\n🤩 <c>{1} topartists 1m/6m/12m <@user (optionally)></c> {2} Allows you to check what are your or the user mentioned most listened artists in the given time range",
        "\n🕰 <c>{1} recent <@user (optionally)></c> {2} Allows you to check what you or the user mentioned have been listening to recently",
        "\n🥸 <c>{1} incognito on/off</c> {2} Allows you to choose whether other group members can see your Spotify statistics",
        "\n📋 <c>{1} queue <song or @user></c> {2} Allows you to add to your playback queue the selected song or the one that the user mentioned is listening to",
        "\n💿 <c>{1} play <song or @user></c> {2} Allows you to play on your Spotify account the selected song or the one that the user mentioned is listening to",
        "\n🎶 <c>{1} youtube <@user (optionally)></c> {2} Sends the track you or the user mentioned are listening to from YouTube",
      ],
      incognitoUsage: [
        "{0} Correct usage of command <c>{1} incognito</c>:\n",
        "✨ <c>{1} incognito on/off</c>",
        "\n💡 Choose whether other group members can see your Spotify statistics.",
        "\n🔧 Current incognito status: <c>{2}</c>",
      ],
      incognitoDisabled: "🎼 Successfully disabled incognito mode in Spotify statistics!",
      incognitoEnabled: "👓 Successfully enabled incognito mode in Spotify statistics!",
      userIncognito: "❌ <c>{0}</c> has incognito mode enabled, only {1} can see {2} Spotify statistics.",
      notConnected: "❌ You haven't connected your Ambient profile to Spotify account!",
      notConnectedMentioned: "❌ <c>{0}</c> has not connected Ambient profile to Spotify account!",
      disconnected: "✅ Successfully disconnected your Ambient profile from Spotify account!",
      expired: [
        "❌ Your Ambient profile connection with Spotify has expired! Use command <c>{0} connect</c>.\n",
        "💡 As of <c>20 July 2026</c>, Spotify requires all connections with external applications to be renewed every <c>6 months</c>.",
      ],
      expiredMentioned: [
        "❌ Ambient profile connection with Spotify for <c>{0}</c> has expired! The information will not be available until reconnection.\n",
        "💡 As of <c>20 July 2026</c>, Spotify requires all connections with external applications to be renewed every <c>6 months</c>.",
      ],
      expiringSoon: [
        "{0} <c>{1}</c>, your Ambient profile connection with Spotify will expire soon! Reconnect now using command <c>{2} connect</c> to continue using the integration without interruption.\n",
        "💡 As of <c>20 July 2026</c>, Spotify requires all connections with external applications to be renewed every <c>6 months</c>.",
      ],
      statsUnavailable: "❌ Statistics of your profile for the given time range are unavailable, this may be due to insufficient activity on the linked account.",
      statsUnavailableMentioned: "❌ Statistics of <c>{0}</c> profile for the given time range are unavailable, this may be due to insufficient activity on the linked account.",
      notListening:
        "❌ You're not listening to anything at the moment. If this is not true, make sure you do not have a private session enabled and restart the Spotify app on your device.",
      notListeningMentioned: "❌ <c>{0}</c> is not currently listening to anything or is in a private session.",
      listeningLocal: "❌ <c>{0}</c> is currently listening to a local track, you cannot play it on your Spotify account.",
      unableToPlay: "❌ We couldn't play the song on your Spotify account.",
      unableToQueue: "❌ We were unable to add the song to your Spotify queue.",
      premiumRequired: "❌ Playing songs on your Spotify account using Ambient requires <c>💎 Spotify Premium</c> account!",
      emptyResults: "❌ No items matching your query found!",
      mustReplyToVerifiedMessage: "❌ You must reply to the message sent by Ambient!",
      noPlayableSpotifyTracks: "❌ Selected message has no association with any Spotify tracks!",
      selectionTimeout: "❌ No item was selected within <c>{0}</c> seconds! Try again.",
      trackSelectionList: [
        "🕵🏽‍♂️ Choose the item you wish to play:\n",
        "{0}",
        "\n🪄 Send only the number corresponding to the selected item, you can also react to this message by using 👍🏼 (variant irrelevant) to select the first item.",
      ],
      playbackStarted: "💿 Starting playback of <c>{0}</c> {1} <c>{2}</c> from album <c>{3}</c> on device <c>{4} {5}</c>...",
      queued: "📋 Added <c>{0}</c> {1} <c>{2}</c> from album <c>{3}</c> to the playback queue!",
      nobodyConnected: "❌ No group member has connected their Spotify account to Ambient!",
      group: [
        "🧐 What are currently members of <c>{0}</c> group listening to?\n",
        "{1}",
        "\n🧮 <c>{2}</c> out of <c>{3}</c> members of this group connected their Ambient profile to their Spotify account, <c>{4}</c> of them are currently listening.",
      ],
      profile: [
        "🤠 Info about Spotify profile of <c>{0}</c>:\n",
        "🆎 Name: <c>{1}</c>",
        "🌍 Country: <c>{2}</c>",
        "💖 Favorites count: <c>{3}</c>",
        "👀 Followers count: <c>{4}</c>",
        "🔗 Profile: {5}",
        "💎 Spotify Premium: <c>{6}</c>",
      ],
      nowListening: [
        "🎧 <c>{0}</c> {1} <c>Now listening</c>",
        "\n💿 <c>{2}</c> {1} <c>{3}</c>\n",
        "{4}",
        "\n💽 Album: <c>{5}</c>",
        "💖 In favorites: <c>{6}</c>",
        "💾 Local file: <c>{7}</c>",
        "🎚️ Volume level: <c>{8}%</c>",
        "{9} Device: <c>{10}</c>",
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
        "{0} Here is your reel from Instagram: <c>{1}</c> {2} <c>{3}</c>\n", //
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
      unableToAdd: "❌ The specified user's privacy settings do not allow them to be added to the group!",
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
        "\n🗑️ <c>{1} remove <@user, link or ID></c> {2} Allows to remove a user from the blacklist",
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
    connections: {
      noConnections: [
        "ℹ️ No groups of accounts belonging to the same user have been identified in this conversation.",
        "\n🔮 Linked accounts are analyzed and updated automatically based on chat activity. If a profile shows very low activity, it may not be linked to other profiles belonging to the same person. This overview is for informational purposes only; however, the accuracy of identified links is extremely high, with a minimal risk of false positives.",
      ],
      done: [
        "{0} List of account groups belonging to the same user in this conversation:",
        "\n{1}",
        "\n🔮 Linked accounts are analyzed and updated automatically based on chat activity. If a profile shows very low activity, it may not be linked to other profiles belonging to the same person. This overview is for informational purposes only; however, the accuracy of identified links is extremely high, with a minimal risk of false positives.",
      ],
    },
    everyone: "{0} Successfully mentioned <c>{1}</c> users!",
    kick: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <@user></c>",
      ],
      done: "{0} Successfully kicked <c>{1}</c> out of the group!",
    },
    lookup: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} <phone number></c>\n",
        "💡 Examples:",
        "⭐ <c>{1} 789167462</c>",
        "⭐ <c>{1} +48789167462</c>",
        "⭐ <c>{1} +48 789-167-462</c>",
      ],
      mentions: "❌ Phone number cannot contain mentions!",
      invalid: "❌ The provided phone number is invalid or not supported!",
      result: "{0} The carrier for phone number <c>{1}</c> is <c>{2}</c> (RPT: <c>{3}</c>).",
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
        "\n🔧 Your current nickname: <c>{2}</c>",
      ],
      tooLong: "❌ The given nickname is too long! (max. <c>{0}</c> characters, <c>{1}</c> entered)",
      same: "❌ The given nickname is the same as the current one!",
      invitationUrlActive:
        "❌ Ambient cannot change the nicknames of group members when the invitation link (Meta) is active and at the same time the bot is not the group administrator.",
      unableToChangeOthers: "❌ Only group administrators can change nicknames of other members!",
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
    publish: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:\n", //
        "✨ <c>{1} announcement/highlight <content></c>",
      ],
      announcement: [
        "{0} Announcement from <c>Ambient team</c>:\n",
        "{1}",
        "\n🤗 Join our <c>Discord server</c> to stay up to date with <c>Ambient</c> news, as well as get help and answers to your questions: {2}",
      ],
      highlight: [
        "{0} <c>Ambient</c> {1} <c>Highlight</c>:\n", //
        "{2}",
        "\n🤗 Discord: {3}",
      ],
      confirmation: [
        "ℹ️ Above is the message that will be published. Do you want to continue?\n",
        "1. <c>✅ yes</c>",
        "2. <c>❌ no</c>",
        "\n🪄 Send only the number corresponding to the selected option, you can also react to this message by using 👍🏼 (variant irrelevant) to select the first option.",
      ],
      cancelled: "❌ Message publication cancelled!",
      done: [
        "✅ Publication requests sent successfully!\n", //
        "📝 Responses from all instances:",
        "{0}",
      ],
    },
    purplelist: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:",
        "\n👮🏼‍♂️ <c>{1} add <@user, link or ID></c> {2} Allows to add a user to the purplelist",
        "\n🗑️ <c>{1} remove <@user, link or ID></c> {2} Allows to remove a user from the purplelist",
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
        "⭐ <c>{1} https://facebook.com/mateuszeq.xd</c>",
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
        "⭐ <c>{1} https://facebook.com/mateuszeq.xd</c>",
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
        "❓ This message was not sent by Ambient!\n\nℹ️ If this message was sent from an account that is used by Ambient, it most likely means that the owner of that account sent the message manually or it was sent by other software.",
    },
    warning: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:",
        "\n👮🏼‍♂️ <c>{1} add <@user> <reason></c> {2} Allows you to give the user a warning with a selected reason",
        "\n🗑️ <c>{1} remove <@user> <* or number></c> {2} Allows you to remove all or the selected warning from user",
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
      deleted: "🗑️ Administrator <c>{0}</c> removed warning number <c>{2}</c> from <c>{1}</c>, now {3}he has <c>{4}</c> warnings left.",
      deletedAll: "🗑️ Administrator <c>{0}</c> removed all warnings from <c>{1}</c>.",
    },
    yellowlist: {
      usage: [
        "{0} Correct usage of command <c>{1}</c>:",
        "\n👮🏼‍♂️ <c>{1} add <@user, link or ID></c> {2} Allows to add a user to the yellowlist",
        "\n🗑️ <c>{1} remove <@user, link or ID></c> {2} Allows to remove a user from the yellowlist",
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
