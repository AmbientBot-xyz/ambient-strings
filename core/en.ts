export default {
  global: {
    notEnabled:
      "It looks like you are trying to use Ambient on a group that has not been added to the allowed list in the *management panel*. Ask bot administrator to add a group or create your own bot completely free on {0}",
    properBotIssues: [
      "It looks like you are trying to use a bot that is not working properly. Information about the bot enabled on this group:\n",
      "🤖 Bot name: *{0}*",
      "🪪 Account: *{1}*",
    ],
    wrongBot: [
      "It looks like you are trying to use the wrong bot. Information about the bot enabled on this group:\n", //
      "🤖 Bot name: *{0}*",
      "🪪 Account: *{1}*",
    ],
    disabledManual: "♿ Bot *{0}* has been disabled on this group by the administrator!",
    disabledAuto: "💡 Bot *{0}* has been disabled on this group because it has been added to allowed groups in another bot.",
    enabled: "🔘 Bot *{0}* has been enabled on this group, all members of the group can now use it.",
    eventError: [
      "💀 Ambient encountered an unknown error while trying to process your message, please try again later. It has been automatically reported to our Discord server: {0}\n",
      "⚠️️ Name: *{1}*",
      "📜 Description: *{2}*",
      "📎 Details: {3}",
    ],
    execError: [
      "💀 Ambient encountered an unknown error while trying to execute command, please try again later. It has been automatically reported to our Discord server: {0}\n",
      "⚠️️ Name: *{1}*",
      "📜 Description: *{2}*",
      "📎 Details: {3}",
    ],
    welcome:
      "👋🏻 Hi, *{0}*! My name is *Ambient*, I am a secure, efficient and multifunctional bot for groups on Messenger. To see what I can do, use the *{1}* command.\n\n🤗 Do you have questions or need help? You will find it on our *Discord server*, where you will also learn about news related to Ambient: {2}",
    welcomeGroup:
      "👋🏻 Hi! My name is *Ambient*, I am a secure, efficient and multifunctional bot for groups on Messenger. To see what I can do, use the *{1}* command.\n\n🤗 Do you have questions or need help? You will find it on our *Discord server*, where you will also learn about news related to Ambient: {2}",
    mentionedNotMember: "❌ Mentioned user is not a member of this group.",
    mentionedNotUser: "❌ Mentioned user has never used Ambient.",
    commandNotFound: "❌ Command not found. Type *{0}* for a list of available commands.",
    unexpectedArgs: "❌ This command takes no arguments.",
    groupAdminOnly: "❌ This command can only be used by group administrators.",
    teamMemberOnly: "❌ You don't have permission to use this command.",
    goodNight: "🥱 Good night, *{0}*! 😴",
    happyBirthday: "🎂 Happy birthday, *{0}*! 🥳",
    outOfRange: "❌ Selected position does not exist! (max. *{0}*, *{1}* selected)",
    botAdminRequired: "❌ Bot must be a group admin to use this command.",
    nsfwNotAllowed: "❌ NSFW content is not available in this group, check *{0}* command.",
    userBlacklisted: [
      "🫨 You can't use *Ambient* because you're *blacklisted*.\n",
      "🤨 Do you think this is a mistake? Join our *Discord server* and submit an appeal - we'll review your case: {0}",
    ],
    userPurplelisted: [
      "😤 This group contains users who have been added to the purplelist. Using Ambient will not be possible until the following members are removed from the conversation:\n",
      "{0}",
      "\n⏳ The group is checked for the presence of purplelisted users every *5 minutes*. Next check will take place in *⌚ {1}* and *{2}*.",
    ],
    announcement: [
      "📣 Announcement from Ambient team:\n",
      "{0}",
      "\n🤗 Join our *Discord server* to stay up to date with *Ambient* news, as well as get help and answers to your questions: {1}",
    ],
    limitReached:
      "🚧 Daily limit of commands has been reached. To use all *Ambient* features without restrictions, please support the project. Details can be found under the *{0}* command.",
    premiumExtended: [
      "💎 {0}, your Premium has been successfully extended!\n",
      "🧮 Months count: *{1}*",
      "📅 Expiration date: *{2}*",
      "\n🚀 Remember, that with active Premium, you can boost up to *2* groups. This allows all members of those groups to use all *Ambient* features without restrictions, even if they don't have active Premium themselves. You can transfer your boosts to other groups at any time.",
      "\n✨ To manage your group boosts, use *{3}* command.",
      "\n🫶🏻 Thank you for supporting *Ambient*!",
    ],
  },
  commands: {
    alpaca: {
      searching: "⏳ Searching for a photo of an alpaca...",
      done: "{0} Here is a random photo of an alpaca by *{1}* from *{2}*:",
    },
    beaver: {
      searching: "⏳ Searching for a photo of a beaver...",
      done: "{0} Here is a random photo of a beaver by *{1}* from *{2}*:",
    },
    capybara: {
      searching: "⏳ Searching for a photo of a capybara...",
      done: "{0} Here is a random photo of a capybara by *{1}* from *{2}*:",
    },
    cat: {
      searching: "⏳ Searching for a photo of a cat...",
      done: "{0} Here is a random photo of a cat by *{1}* from *{2}*:",
    },
    cow: {
      searching: "⏳ Searching for a photo of a cow...",
      done: "{0} Here is a random photo of a cow by *{1}* from *{2}*:",
    },
    dog: {
      searching: "⏳ Searching for a photo of a dog...",
      done: "{0} Here is a random photo of a dog by *{1}* from *{2}*:",
    },
    duck: {
      searching: "⏳ Searching for a photo of a duck...",
      done: "{0} Here is a random photo of a duck by *{1}* from *{2}*:",
    },
    fox: {
      searching: "⏳ Searching for a photo of a fox...",
      done: "{0} Here is a random photo of a fox by *{1}* from *{2}*:",
    },
    frog: {
      searching: "⏳ Searching for a photo of a frog...",
      done: "{0} Here is a random photo of a frog by *{1}* from *{2}*:",
    },
    hamster: {
      searching: "⏳ Searching for a photo of a hamster...",
      done: "{0} Here is a random photo of a hamster by *{1}* from *{2}*:",
    },
    hedgehog: {
      searching: "⏳ Searching for a photo of a hedgehog...",
      done: "{0} Here is a random photo of a hedgehog by *{1}* from *{2}*:",
    },
    horse: {
      searching: "⏳ Searching for a photo of a horse...",
      done: "{0} Here is a random photo of a horse by *{1}* from *{2}*:",
    },
    lizard: {
      searching: "⏳ Searching for a photo of a lizard...",
      done: "{0} Here is a random photo of a lizard by *{1}* from *{2}*:",
    },
    monkey: {
      searching: "⏳ Searching for a photo of a monkey...",
      done: "{0} Here is a random photo of a monkey by *{1}* from *{2}*:",
    },
    penguin: {
      searching: "⏳ Searching for a photo of a penguin...",
      done: "{0} Here is a random photo of a penguin by *{1}* from *{2}*:",
    },
    pigeon: {
      searching: "⏳ Searching for a photo of a pigeon...",
      done: "{0} Here is a random photo of a pigeon by *{1}* from *{2}*:",
    },
    rabbit: {
      searching: "⏳ Searching for a photo of a rabbit...",
      done: "{0} Here is a random photo of a rabbit by *{1}* from *{2}*:",
    },
    racoon: {
      searching: "⏳ Searching for a photo of a racoon...",
      done: "{0} Here is a random photo of a racoon by *{1}* from *{2}*:",
    },
    rat: {
      searching: "⏳ Searching for a photo of a rat...",
      done: "{0} Here is a random photo of a rat by *{1}* from *{2}*:",
    },
    shiba: {
      searching: "⏳ Searching for a photo of Shiba Inu...",
      done: "{0} Here is a random Shiba Inu photo by *{1}* from *{2}*:",
    },
    snake: {
      searching: "⏳ Searching for a photo of a snake...",
      done: "{0} Here is a random photo of a snake by *{1}* from *{2}*:",
    },
    spider: {
      searching: "⏳ Searching for a photo of a spider...",
      done: "{0} Here is a random photo of a spider by *{1}* from *{2}*:",
    },
    turtle: {
      searching: "⏳ Searching for a photo of a turtle...",
      done: "{0} Here is a random photo of a turtle by *{1}* from *{2}*:",
    },
    unicorn: {
      searching: "⏳ Searching for a photo of a unicorn...",
      done: "{0} Here is a random photo of a unicorn by *{1}* from *{2}*:",
    },
    boosts: {
      summary: [
        "{0} Group boosting management:\n",
        "✨ With active Premium, you can boost up to *2* groups. This allows all members of those groups to use all *Ambient* features without restrictions, even if they don't have active Premium themselves. You can transfer your boosts to other groups at any time.",
        "\n💎 Your Premium state: {1}\n",
        "1️⃣ First boosted group: *{2}*",
        "2️⃣ Second boosted group: *{3}*",
        "\n✅ To activate boost in this group, type *{4} activate*.",
        "\n🚫 To deactivate boost in selected group, type *{4} deactivate 1/2*.",
        "\n💸 To learn more about supporting *Ambient* and getting Premium, type *{5}*.",
      ],
      premiumInactive: "❌ To boost groups you must have active Premium!",
      alreadyBoosted: "❌ This group is already being boosted by you!",
      noneLeft: "❌ You have reached the maximum number of boosted groups! Deactivate your boost on another group and try again.",
      successfullyBoosted:
        "✅ Boost has been successfully activated in this group! All members can now use all *Ambient* features without restrictions in this group, even if they don't have active Premium.",
      positionEmpty: "❌ You do not have any boosted group in the given position!",
      boostDeactivated: "✅ Successfully deactivated boost in group *{0}*!",
    },
    interactions: {
      usage: [
        "{0} Correct usage of command *{1}*:\n",
        "✨ *{1} on/off*",
        "\n💡 Choose whether Ambient should react to certain words and automatically download videos from sent links.",
        "\n🔧 Current interactions status: *{2}*",
      ],
      disabled: "🤐 Successfully disabled interactions in this group, Ambient will not respond to any messages except for commands starting with *{0}*.",
      enabled: "👉🏻 Successfully enabled interactions in this group, Ambient will respond to some messages in addition to commands starting with *{0}*.",
    },
    nsfw: {
      usage: [
        "{0} Correct usage of command *{1}*:\n",
        "✨ *{1} on/off*",
        "\n💡 Choose whether NSFW commands should be available in this group.",
        "\n🔧 Current NSFW status: *{2}*",
      ],
      disabled: "😌 Successfully disabled NSFW commands in this group!",
      enabled: "♨ Successfully enabled NSFW commands in this group!",
    },
    privacy: {
      usage: [
        "{0} Correct usage of command *{1}*:\n",
        "✨ *{1} on/off*",
        "\n💡 Choose whether your data should be hidden in global rankings.",
        "\n🔧 Current privacy status: *{2}*",
      ],
      disabled: "🙌🏻 Successfully disabled privacy mode in global rankings!",
      enabled: "😎 Successfully enabled privacy mode in global rankings!",
    },
    toggle: {
      summary: [
        "{0} Correct usage of command *{1}*:\n",
        "✨ *{1} <command>*",
        "\n💡 Toggle the ability of members who are not administrators of this group to use selected commands.",
        "\n🔧 Currently disallowed commands: *{2}*",
      ],
      unableToToggle: "❌ You cannot prevent group members from using the *{0}* command.",
      toggledAllowed: "👌🏻 Successfully allowed all group members to use the *{0}* command!",
      toggledDisallowed: "⛔️ Successfully disallowed all members except group admins from using the *{0}* command!",
      disallowedExecute:
        "✋🏻 Administrators of this group do not allow *{0}* command to be used in this group. Try using this command in a different group or ask the group administrators to change the settings using the *{1}* command.",
    },
    bet: {
      usage: [
        "{0} Correct usage of command *{1}*:\n",
        "✨ *{1} <bet 🪙> <predicted number>*\n",
        "✨ If the drawn number is lower than your predicted number, you will keep your 🪙 and be rewarded. Otherwise, you will lose the bet 🪙.\n",
        "✨ The lower the number you choose, the higher your reward if you win.\n",
        "✨ The predicted number cannot be less than *1* or greater than *90*.\n",
        "💡 Examples:",
        "⭐ *{1} 420 69*",
        "⭐ *{1} 50 1*",
        "⭐ *{1} 1337 90*",
      ],
      notEnoughCoins: "❌ You do not have enough 🪙! (required: *{1} 🪙* {0} owned: *{2} 🪙* {0} missing: *{3} 🪙*)",
      victory: [
        "📈 You have won *{1} 🪙*, you now have *{2} 🪙*.\n", //
        "🎰 Drawn number: *{3}*",
      ],
      loss: [
        "📉 You have lost *{1} 🪙*, you now have *{2} 🪙*.\n", //
        "🎰 Drawn number: *{3}*",
      ],
    },
    catch: {
      missingFishingRod: "❌ You don't have an active fishing rod! Use command *{0}* to buy a new one.",
      missingBait: "❌ You don't have an active bait! Use command *{0}* to buy a new one.",
      escaped: "💨 The fish got away! Try again.",
      snapped: "⛓️‍💥 The line snapped! Try again.",
      trash: "🗑️ You fished out *{1}*! Try again.",
      success: "{0} You caught a *🎏 {2}* weighing *{4} kg* worth *{5} 🪙*! You now have *{6} 🪙*.",
    },
    daily: {
      cooldown: "🙄 *{0}*, you will be able to receive your next free 🪙 in *⌚ {2}*, *{3}* and *{4}*.",
      received: [
        "{0} *{1}*, you have received *{3}* free 🪙! You now have *{4} 🪙*. You will be able to receive your next free 🪙 in *⌚ 24 hours*.\n",
        "🤑 Collect your free coins regularly to earn a bonus for each additional consecutive day!",
      ],
      receivedWithBonus: [
        "{0} *{1}*, you have received *{3}* free 🪙 (including an extra *{4} 🪙* for collecting them *{5}* days in a row)! You now have *{6} 🪙*. You will be able to receive your next free 🪙 in *⌚ 24 hours*.\n",
        "🤑 Collect your free coins regularly to earn a bonus for each additional consecutive day!",
      ],
    },
    inventory: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <@user (optionally)>*",
      ],
      done: [
        "{1} Info about inventory of *{2}*:",
        "\n🏦 _*GENERAL*_:",
        "👛 Balance: *{3} 🪙*",
        "📅 Last daily reward: {4}",
        "🔥 Days in a row: *{5}*",
        "\n🐟 _*FISHING*_:",
        "🎣 Fishing rod: *{6}*",
        "⏳ Remaining fishing rod uses: *{7}*",
        "🪝 Bait: *{8}*",
        "♾️ Remaining bait uses: *{9}*",
        "⚖️ Caught fish: *{10}*",
        "\n🎰 _*CASINO*_:",
        "🎲 Last bet: {11}",
        "📈 Bet victories: *{12}*",
        "📉 Bet losses: *{13}*",
        "\n🥷🏼 _*ROBBERIES*_:",
        "💰 Successful robberies: *{14}*",
        "🔒 Failed robberies: *{14}*",
        "💥 Suffered robberies: *{15}*",
        "🛡️ Defended robberies: *{16}*",
        "🕵️ Last robbery: {18}",
        "🦹 Last robbed: {20}",
        "⛓️ Arrested: {21}",
        "🧰 Robbery defense item: *{22}*",
        "🎒 Robbery assist item: *{23}*",
      ],
    },
    rank: {
      usage: [
        "{0} Correct usage of command *{1}*:",
        "\n🪙 *{1} coins globally/groupglobally* {2} Shows the ranking of {3} users who have the most coins",
        "\n🔥 *{1} streak globally/groupglobally* {2} Shows the ranking of {3} users who claim free coins the most days in a row",
        "\n💰 *{1} successfulrobberies globally/groupglobally* {2} Shows the ranking of the {3} users who performed the most successful robberies",
        "\n🔒 *{1} failedrobberies globally/groupglobally* {2} Shows the ranking of the {3} users who performed the most unsuccessful robberies",
        "\n💥 *{1} sufferedrobberies globally/groupglobally* {2} Shows the ranking of the {3} users who experienced the most robberies",
        "\n🛡️ *{1} defendedrobberies globally/groupglobally* {2} Shows the ranking of {3} users who defended themselves against the most robberies",
        "\n📈 *{1} betvictories globally/groupglobally* {2} Shows the ranking of the {3} users who won the most bets",
        "\n📉 *{1} betlosses globally/groupglobally* {2} Shows the ranking of {3} users who lost the most bets",
        "\n⚖️ *{1} caughtfish globally/groupglobally* {2} Shows the ranking of the {3} users who caught the most fish",
        "\n💬 Looking for user rankings in the context of chat? Check out the *{4}* command.",
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
      caughtFishGlobal: [
        "⚖️ Top {0} users who caught the most fish globally:", //
        "\n{1}\n",
        "🧮 You're {2} in the ranking.",
      ],
      coinsGroupGlobal: [
        "🪙 Top {0} members who have the most coins globally:", //
        "\n{1}\n",
        "🧮 You're *#{2}* in the ranking.",
      ],
      streakGroupGlobal: [
        "🔥 Top {0} members who claim free coins the most days in a row globally:", //
        "\n{1}\n",
        "🧮 You're *#{2}* in the ranking.",
      ],
      successfulRobberiesGroupGlobal: [
        "💰 Top {0} members who performed the most successful robberies globally:", //
        "\n{1}\n",
        "🧮 You're *#{2}* in the ranking.",
      ],
      failedRobberiesGroupGlobal: [
        "🔒 Top {0} members who performed the most unsuccessful robberies globally:", //
        "\n{1}\n",
        "🧮 You're *#{2}* in the ranking.",
      ],
      sufferedRobberiesGroupGlobal: [
        "💥 Top {0} members who experienced the most robberies globally:", //
        "\n{1}\n",
        "🧮 You're *#{2}* in the ranking.",
      ],
      defendedRobberiesGroupGlobal: [
        "🛡️ Top {0} members who defended themselves against the most robberies globally:", //
        "\n{1}\n",
        "🧮 You're *#{2}* in the ranking.",
      ],
      betVictoriesGroupGlobal: [
        "📈 Top {0} members who won the most bets globally:", //
        "\n{1}\n",
        "🧮 You're *#{2}* in the ranking.",
      ],
      betLossesGroupGlobal: [
        "📉 Top {0} members who lost the most bets globally:", //
        "\n{1}\n",
        "🧮 You're *#{2}* in the ranking.",
      ],
      caughtFishGroupGlobal: [
        "⚖️ Top {0} members who caught the most fish globally:", //
        "\n{1}\n",
        "🧮 You're *#{2}* in the ranking.",
      ],
    },
    rob: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <@user>*",
      ],
      arrested: "👮🏼 You can't rob now because you're arrested for another *⌚ {1}* and *{2}*.",
      cooldown: "🏴‍☠️ You will be able to rob again in *⌚ {1}* and *{2}*.",
      nothingNothingCaught:
        "🚨 You tried to rob *{1}*, who had no protection, of *{4} 🪙*. Unfortunately, you had no tools and were caught by the police. You paid a fine of *{6} 🪙* and were arrested for *⌚ an hour*. You now have *{8} 🪙*.",
      nothingNothingUncaught: "{0} *{1}* had no protection and you managed to rob them of *{4} 🪙* without using any additional tools! You now have *{5} 🪙*.",
      nothingHighProofBeerCaught:
        "🚨 You tried to rob *{1}*, who had no security, of *{4} 🪙*. Unfortunately, you were drunk and caught by the police. You paid a double fine of *{6} 🪙* and were arrested for *⌚ an hour*. You now have *{8} 🪙*.",
      nothingHighProofBeerUncaught: "{0} *{1}* had no protection and you managed to rob them of *{4} 🪙* under the influence of alcohol! You now have *{5} 🪙*.",
      nothingBribeForThePoliceCaught:
        "🚨 You tried to rob *{1}*, who had no security, of *{4} 🪙*. Unfortunately, you were caught by the police, but you avoided a fine and arrest because you gave them a bribe.",
      nothingBribeForThePoliceUncaught:
        "{0} *{1}* had no protection and you managed to rob them of *{4} 🪙*! You kept your bribe for the police as it was not needed. You now have *{6} 🪙*.",
      nothingFastCarCaught:
        "🚨 *{0}* had no protection and you managed to rob them of *{3} 🪙*! You were caught by the police, but you managed to escape with the loot thanks to a fast car. You now have *{6} 🪙*.",
      nothingFastCarUncaught: "{0} *{1}* had no protection and you managed to rob them of *{4} 🪙*! You kept your fast car as it was not needed. You now have *{6} 🪙*.",
      steelPadlockNothingCaught:
        "🚨 You tried to rob *{1}* of *{2} 🪙* without any tools. Unfortunately, you were caught by the police trying to open the padlock and were arrested for *⌚ an hour*.",
      steelPadlockNothingUncaught: "🔒 You tried to rob *{1}* of *{2} 🪙* without any tools. Unfortunately, you came across a padlock that you could not open.",
      steelPadlockHighProofBeerCaught:
        "🚨 You tried to rob *{1}* of *{2} 🪙* while drunk. Unfortunately, you were caught by the police trying to open the padlock and were arrested for *⌚ an hour*.",
      steelPadlockHighProofBeerUncaught: "🔒 You tried to rob *{1}* of *{2} 🪙* while drunk. Unfortunately, you came across a padlock that you could not open.",
      steelPadlockBribeForThePoliceCaught:
        "🚨 You tried to rob *{1}* of *{2} 🪙*. Unfortunately, you were caught by the police trying to open the padlock, but you avoided a fine and arrest because you gave them a bribe.",
      steelPadlockBribeForThePoliceUncaught:
        "🔒 You tried to rob *{1}* of *{2} 🪙*. Unfortunately, you came across a padlock that you could not open. You kept your bribe for the police as it was not needed.",
      steelPadlockFastCarCaught:
        "🚨 You tried to rob *{1}* of *{2} 🪙*. Unfortunately, you were caught by the police trying to open the padlock, but you managed to escape thanks to a fast car.",
      steelPadlockFastCarUncaught:
        "🔒 You tried to rob *{1}* of *{2} 🪙*. Unfortunately, you came across a padlock that you could not open. You kept your fast car as it was not needed.",
      aggressiveDogNothingCaught:
        "🚨 You tried to rob *{1}* of *{2} 🪙* without any tools. Unfortunately, you were caught by the police trying to avoid an aggressive dog and were arrested for *⌚ an hour*.",
      aggressiveDogNothingUncaught:
        "🐶 You tried to rob *{1}* of *{2} 🪙* without any tools. Unfortunately, you were injured by an aggressive dog and had to pay *{4} 🪙* for treatment. You now have *{5} 🪙*.",
      aggressiveDogHighProofBeerCaught:
        "🚨 You tried to rob *{1}* of *{2} 🪙* while drunk. Unfortunately, you were caught by the police trying to avoid an aggressive dog and were arrested for *⌚ an hour*.",
      aggressiveDogHighProofBeerUncaught:
        "🐶 You tried to rob *{1}* of *{2} 🪙* while drunk. Unfortunately, you were injured by an aggressive dog and had to pay *{4} 🪙* for treatment. You now have *{5} 🪙*.",
      aggressiveDogBribeForThePoliceCaught:
        "🚨 You tried to rob *{1}* of *{2} 🪙*. Unfortunately, you were caught by the police trying to avoid an aggressive dog, but you avoided a fine and arrest because you gave them a bribe.",
      aggressiveDogBribeForThePoliceUncaught:
        "🐶 You tried to rob *{1}* of *{2} 🪙*. Unfortunately, you were injured by an aggressive dog and had to pay *{4} 🪙* for treatment. You kept your bribe for the police as it was not needed. You now have *{5} 🪙*.",
      aggressiveDogFastCarCaught:
        "🚨 You tried to rob *{1}* of *{2} 🪙*. Unfortunately, you were caught by the police trying to avoid an aggressive dog, but you managed to escape thanks to a fast car.",
      aggressiveDogFastCarUncaught:
        "🐶 You tried to rob *{1}* of *{2} 🪙*. Unfortunately, you were attacked by an aggressive dog, but you managed to escape the bite thanks to a fast car.",
      clusterBombNothingCaught:
        "🚨 You tried to rob *{1}* of *{2} 🪙* without any tools. Unfortunately, you were caught by the police trying to avoid a cluster bomb and were arrested for *⌚ an hour*.",
      clusterBombNothingUncaught:
        "💣 You tried to rob *{1}* of *{2} 🪙* without any tools. Unfortunately, you were injured by a cluster bomb and had to pay *{4} 🪙* for treatment. You now have *{5} 🪙*.",
      clusterBombHighProofBeerCaught:
        "🚨 You tried to rob *{1}* of *{2} 🪙* while drunk. Unfortunately, you were caught by the police trying to avoid a cluster bomb and were arrested for *⌚ an hour*.",
      clusterBombHighProofBeerUncaught:
        "💣 You tried to rob *{1}* of *{2} 🪙* while drunk. Unfortunately, you were injured by a cluster bomb and had to pay *{4} 🪙* for treatment. You now have *{5} 🪙*.",
      clusterBombBribeForThePoliceCaught:
        "🚨 You tried to rob *{1}* of *{2} 🪙*. Unfortunately, you were caught by the police trying to avoid a cluster bomb, but you avoided a fine and arrest because you gave them a bribe.",
      clusterBombBribeForThePoliceUncaught:
        "💣 You tried to rob *{1}* of *{2} 🪙*. Unfortunately, you were injured by a cluster bomb and had to pay *{4} 🪙* for treatment. You kept your bribe for the police as it was not needed. You now have *{5} 🪙*.",
      clusterBombFastCarCaught:
        "🚨 You tried to rob *{1}* of *{2} 🪙*. Unfortunately, you were caught by the police trying to avoid a cluster bomb, but you managed to escape thanks to a fast car.",
      clusterBombFastCarUncaught:
        "💣 You tried to rob *{1}* of *{2} 🪙*. Unfortunately, you were attacked by a cluster bomb, but you managed to escape the explosion thanks to a fast car.",
    },
    shop: {
      summary: [
        "{0} Items and facilities available for purchase:",
        "\n🎣 _*FISHING RODS*_:",
        "1. {2} *{3}* {1} {4} 🪙",
        "2. {5} *{6}* {1} {7} 🪙",
        "3. {8} *{9}* {1} {10} 🪙",
        "\n🪝 _*BAITS*_:",
        "4. {11} *{12}* {1} {13} 🪙",
        "5. {14} *{15}* {1} {16} 🪙",
        "6. {17} *{18}* {1} {19} 🪙",
        "\n🛡️ _*PROTECTION AGAINST THIEVES*_:",
        "7. {20} *{21}* {1} {22} 🪙",
        "8. {23} *{24}* {1} {25} 🪙",
        "9. {26} *{27}* {1} {28} 🪙",
        "\n🎒 _*THEFT SUPPORT*_:",
        "10. {29} *{30}* {1} {31} 🪙",
        "11. {32} *{33}* {1} {34} 🪙",
        "12. {35} *{36}* {1} {37} 🪙",
        "\n👛 Your balance: *{38} 🪙*",
        "\n💡 Type *{39} info <number>* to see details about an item, or *{39} buy <number>* to purchase it.",
      ],
      invalidItemNumber: "❌ The item number provided is invalid!",
      sameTypeItemAlreadyActive: "❌ You can't buy this item because you already have an active item of the same type: *{0} {1}*",
      bought: "✅ You bought *{1} {2}* for *{3} 🪙*! You now have *{4} 🪙*.",
      details: [
        "{0} Info about item *{1}*:\n", //
        "🏷️ Description: *{2}*",
        "📐 Characteristics: *{3}*",
        "🛒 Price: *{4}* 🪙",
        "\n💡 To buy this item, type *{5} buy {6}*.",
      ],
    },
    tip: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} @user <amount of 🪙>*\n",
        "💡 Examples:",
        "⭐ *{1} @user 69*",
        "⭐ *{1} @user 4.20*",
        "⭐ *{1} @user 13.37*",
      ],
      done: "✅ Successfully tipped *{1} 🪙* to *{2}*! You now have *{3} 🪙*.",
    },
    achievement: {
      empty: "❌ You must enter the text of the achievement! (max. *{0}* characters)",
      mentions: "❌ The content of the achievement must not contain any mentions!",
      tooLong: "❌ The content of the achievement is too long! (max. *{0}* characters, *{1}* entered)",
      generating: "⏳ Generating achievement...",
      done: "{0} Here is the generated achievement:",
    },
    airplane: {
      searching: "⏳ Searching for a photo of an airplane...",
      done: "{0} Here is a random photo of an airplane by *{1}* from *{2}*:",
    },
    car: {
      searching: "⏳ Searching for a photo of a car...",
      done: "{0} Here is a random photo of a car by *{1}* from *{2}*:",
    },
    coinflip: {
      heads: "🦅 Heads",
      tails: "🪙 Tails",
    },
    couple: {
      tooFewUsers: "❌ There are too few members in the group who have used Ambient!",
      done: "{0} The pair of people who are best suited for each other in this group are *{1}* and *{2}* (*{3}%*) 💍",
    },
    diceroll: "{0} Result of the dice roll: *{1}*",
    heart: {
      empty: "❌ You must enter the text of the heart! (max. *{0}* characters)",
      mentions: "❌ The content of the heart must not contain any mentions!",
      tooLong: "❌ The content of the heart is too long! (max. *{0}* characters, *{1}* entered)",
      generating: "⏳ Generating heart...",
      done: "{0} Here is the generated heart:",
    },
    labubu: {
      searching: "⏳ Searching for a photo of Labubu...",
      done: "{0} Here is a random photo of Labubu by *{1}* from *{2}*:",
    },
    meme: {
      searching: "⏳ Searching a random meme...",
      done: "{0} Here is a random meme by *{1}* from *{2}*:",
    },
    motorcycle: {
      searching: "⏳ Searching for a photo of a motorcycle...",
      done: "{0} Here is a random photo of a motorcycle by *{1}* from *{2}*:",
    },
    rip: {
      empty: "❌ You must enter the text of the tombstone! (max. *{0}* characters)",
      mentions: "❌ The content of the tombstone must not contain any mentions!",
      tooLong: "❌ The content of the tombstone is too long! (max. *{0}* characters, *{1}* entered)",
      generating: "⏳ Generating tombstone...",
      done: "{0} Here is the generated tombstone:",
    },
    train: {
      searching: "⏳ Searching for a photo of a train...",
      done: "{0} Here is a random photo of a train by *{1}* from *{2}*:",
    },
    tvp: {
      empty: "❌ You must enter the text of the bar! (max. *{0}* characters)",
      mentions: "❌ The content of the bar must not contain any mentions!",
      tooLong: "❌ The content of the bar is too long! (max. *{0}* characters, *{1}* entered)",
      generating: "⏳ Generating bar...",
      done: "{0} Here is the generated bar:",
    },
    apod: {
      searching: "⏳ Searching an Astronomy Picture of the Day...",
      doneVideoExternal: "{0} Here is an Astronomy Video of the Day named *{1}*: {2}",
      doneVideo: "{0} Here is an Astronomy Video of the Day named *{1}*:",
      done: "{0} Here is an Astronomy Picture of the Day named *{1}*:",
    },
    bot: [
      "{0} Ambient info:",
      "\n📝 _*GENERAL*_:",
      "☯ RAM: *{1}/{2} GiB* {3} *{4}%*",
      "💾 Disk: *{5}/{6} GiB* {3} *{7}%*",
      "🏓 Ping: *{8} ms*",
      "📦 Instance: *{9}*",
      "🤖 Running bots: *{10}*",
      "🌡️ Average CPU temperature: *{11}°C*",
      "💎 Premium users: *{12}*",
      "🍒 Creation date: *{13}*",
      "😼 Author: *{14}*",
      "\n✨ _*CORE*_:",
      "🔖 Version: *{15}*",
      "🌳 Environment: *{16}*",
      "⌚ Uptime: *{17}*",
      "🆙 Update date: *{18}* {3} *{19}*",
      "\n🔌 _*CLIENT*_:",
      "🔖 Version: *{20}*",
      "🌳 Environment: *{21}*",
      "⌚ Uptime: *{22}*",
      "🆙 Update date: *{23}* {3} *{24}*",
      "\n🪙 _*ECONOMY*_:",
      "🔖 Version: *{25}*",
      "🌳 Environment: *{26}*",
      "⌚ Uptime: *{27}*",
      "🆙 Update date: *{28}* {3} *{29}*",
      "\n📱 This bot was created *completely free* on {30}, you can also do it to use it on your groups!",
      "\n🤗 Join our *Discord server* to stay up to date with *Ambient* news, as well as get help and answers to your questions: {31}",
    ],
    group: {
      collecting: "⏳ Collecting info about group...",
      done: [
        "{0} Info about group *{1}*:\n",
        "🆔 ID: *{2}*",
        "👥 Participants: *{3}*",
        "👮🏻‍♂️ Administrators: *{4}*",
        "👨🏻 Males: *{5}*",
        "👩🏼 Females: *{6}*",
        "🤗 Ambient users: *{7}*",
        "🎨 Theme name: *{8}*",
        "🗂 Visible messages: *{9}*",
        "🗃 Processed messages: *{10}*",
        "🤖 Executed commands: *{11}*",
        "🐒 Mentions count: *{12}*",
        "⚠️ Warnings count: *{13}*",
        "🧐 Members approval: *{14}*",
        "⏳ Members in queue: *{15}*",
        "🔞 NSFW: *{16}*",
        "🤐 Interactions: *{17}*",
        "👀 Messages restoration: *{18}*",
        "🔗 Invitation link: {19}",
        "🤓 First Ambient usage: *{21}* {20} *{22}*",
      ],
    },
    help: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <command name (optionally)>*\n",
        "💡 Examples:",
        "⭐ *{1}*",
        "⭐ *{1} {2}*",
        "⭐ *{1} {3}*",
      ],
      list: [
        "{0} List of available commands (*{1}*):\n",
        "🦊 Animals (*{2}*): {3}\n",
        "⚙️ Configuration (*{4}*): {5}\n",
        "🪙 Economy (*{6}*): {7}\n",
        "👾 Fun (*{8}*): {9}\n",
        "ℹ️ Info (*{10}*): {11}\n",
        "🔞 NSFW (*{12}*): {13}\n",
        "📸 Social (*{14}*): {15}\n",
        "🛠️ Tools (*{16}*): {17}\n",
        "✨ To see detailed information on the selected command, type *{18} <command name>*, e.g. *{18} {19}*.",
        "\n📱 This bot was created *completely free* on {20}, you can also do it to use it on your groups!",
        "\n🤗 Join our *Discord server* to stay up to date with *Ambient* news, as well as get help and answers to your questions: {21}",
      ],
      about: [
        "{0} Info about command *{1}*:\n", //
        "✏ Description: *{2}*",
        "🗃 Category: *{3}*",
        "⚓ Other names: {4}",
      ],
    },
    instances: "{0} Info about Ambient instances:\n\n{1}",
    nodes: "{0} Info about Ambient nodes:\n\n{1}",
    rules: {
      empty: [
        "{0} Group rules are not currently set.", //
        "\n📝 To set the group rules, type *{1} <rules content>*.",
      ],
      view: [
        "{0} Here are the group rules of *{1}* set by the administration:\n",
        "{2}",
        "\n📝 To change the group rules, type *{3} <new rules content>*.",
        "\n🗑 To remove the group rules, type *{3} remove*.",
      ],
      mentions: "❌ Group rules cannot contain mentions!",
      removed: "✅ Group rules have been successfully removed!",
      tooLong: "❌ Group rules are too long! (max. *{0}* characters, *{1}* entered)",
      updated: "✅ Group rules have been successfully updated!",
    },
    team: [
      "{0} List of Ambient team members:\n",
      "{1}",
      "\n🤗 Would you like to join us? All you need to do is be active and helpful to other users on our *Discord server*, and we’ll reach out to you when we notice your efforts: {2}",
    ],
    top: {
      usage: [
        "{0} Correct usage of command *{1}*:",
        "\n✉ *{1} messages group/globally/groupglobally* {2} Shows the top {3} users who sent the most messages",
        "\n🪄 *{1} commands group/globally/groupglobally* {2} Shows the top {3} users who executed the most commands",
        "\n🐒 *{1} mentions group/globally/groupglobally* {2} Shows the top {3} users who have been mentioned the most",
        "\n🪙 Looking for top users in the context of economy? Check out the *{4}* command.",
      ],
      messagesGroup: [
        "✉ Top {0} members who sent the most messages in this group:", //
        "\n{1}\n",
        "🧮 You're *#{2}* in the ranking.",
      ],
      commandsGroup: [
        "🪄 Top {0} members who executed the most commands in this group:", //
        "\n{1}\n",
        "🧮 You're *#{2}* in the ranking.",
      ],
      mentionsGroup: [
        "🐒 Top {0} members who have been mentioned the most in this group:", //
        "\n{1}\n",
        "🧮 You're *#{2}* in the ranking.",
      ],
      messagesGlobal: [
        "✉ Top {0} users who sent the most messages globally:", //
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
        "✉ Top {0} members who sent the most messages globally:", //
        "\n{1}\n",
        "🧮 You're *#{2}* in the ranking.",
      ],
      commandsGroupGlobal: [
        "🪄 Top {0} members who executed the most commands globally:", //
        "\n{1}\n",
        "🧮 You're *#{2}* in the ranking.",
      ],
      mentionsGroupGlobal: [
        "🐒 Top {0} members who have been mentioned the most globally:", //
        "\n{1}\n",
        "🧮 You're *#{2}* in the ranking.",
      ],
    },
    weather: {
      usage: [
        "{0} Correct usage of command *{1}*:\n",
        "✨ *{1} <location or @user (optional if the location is saved)>*\n",
        "💡 Examples:",
        "⭐ *{1}*",
        "⭐ *{1} Leszno*",
        "⭐ *{1} Zielona Góra, PL*",
        "⭐ *{1} @user*",
      ],
      notSetMentioned: "❌ *{0}* did not provide location!",
      notFound: "❌ The given location was not found!",
      done: [
        "{0} Current weather in *{1}*:\n",
        "🌡️ Temperature: *{2}°C* {3}",
        "✋🏻 Feels like: *{4}°C* {5}",
        "🌃 Sky: *{6}* {7}",
        "🎈 Pressure: *{8} hPa*",
        "💨 Wind speed: *{9} km/h*",
        "💧 Humidity: *{10}%*",
        "☁️ Cloudiness: *{11}%*",
        "🌅 Sunrise: *{12}*",
        "🌇 Sunset: *{13}*",
      ],
    },
    boobs: {
      searching: "⏳ Searching for a photo of boobs...",
      done: "{0} Here is a random photo of boobs by *{1}* from *{2}*:",
    },
    butt: {
      searching: "⏳ Searching for a photo of a butt...",
      done: "{0} Here is a random photo of a butt by *{1}* from *{2}*:",
    },
    dick: {
      searching: "⏳ Searching for a photo of a dick...",
      done: "{0} Here is a random photo of a dick by *{1}* from *{2}*:",
    },
    feet: {
      searching: "⏳ Searching for a photo of female feet...",
      done: "{0} Here is a random photo of female feet by *{1}* from *{2}*:",
    },
    konachan: {
      searching: "⏳ Searching for Konachan photo...",
      done: "{0} Here is a random Konachan photo:",
    },
    muscles: {
      searching: "⏳ Searching for a photo of muscles...",
      done: "{0} Here is a random photo of muscles by *{1}* from *{2}*:",
    },
    pussy: {
      searching: "⏳ Searching for a photo of a pussy...",
      done: "{0} Here is a random photo of a pussy by *{1}* from *{2}*:",
    },
    reddit: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <subreddit 1> <subreddit 2 (optionally)> ...*",
      ],
      notFound: "❌ No photo found in the given subreddits!",
      searching: "⏳ Searching for a photo in the given subreddits...",
      done: "{0} Here is a random photo by *{1}* from *{2}*:",
    },
    rule34: {
      empty: "❌ You must provide tags! (max. *{0}* characters)",
      mentions: "❌ Tags cannot contain mentions!",
      tooLong: "❌ Tags are too long! (max. *{0}* characters, *{1}* entered)",
      searching: "⏳ Searching for a photo matching the given tags...",
      notFound: "❌ No photo found matching the given tags!",
      done: "{0} Here is a random photo by *{1}* with tags *{2}*:",
    },
    veins: {
      searching: "⏳ Searching for a photo of veins...",
      done: "{0} Here is a random photo of veins by *{1}* from *{2}*:",
    },
    yandere: {
      searching: "⏳ Searching for Yandere photo...",
      done: "{0} Here is a random Yandere photo by *{1}* from *{2}*:",
    },
    invitation: {
      status: [
        "{0} Configuration of the group invitation link:\n",
        "🔗 Current link: {1}",
        "🧮 Usages count: *{2}*",
        "\n🆔 To enable or change the group invitation link, type *{3} <new invitation ID>*.",
        "\n🚪 To disable the group invitation link, type *{3} off*.",
      ],
      tooShort: "❌ The given invitation ID is too short! (min. *{0}* characters, *{1}* entered)",
      tooLong: "❌ The given invitation ID is too long! (max. *{0}* characters, *{1}* entered)",
      illegalCharacters: "❌ The specified invitation ID contains illegal characters, you can only use lowercase and uppercase letters and numbers.",
      alreadyUsed: "❌ The invitation ID you entered is already taken!",
      saved: "✅ The group invitation ID has been successfully set to *{0}*! The current link to join the group is {1}",
      disabled: "🚪 The group invitation link feature has been successfully disabled!",
      groupAdminOnly: "❌ Group invitation link settings can only be changed by group administrators!",
      joinRequestedUser: [
        "🚪 *{0}* wants to join this group using the invitation link, check pending requests.\n", //
        "🤗 This user uses Ambient since *{3}* {2} *{4}*.",
      ],
      joinedUser: [
        "👋🏻 *{0}* joined this group using the invitation link.\n", //
        "🤗 This user uses Ambient since *{3}* {2} *{4}*.",
      ],
      joinRequestedNotUser: [
        "🚪 *{0}* wants to join this group using the invitation link, check pending requests.\n", //
        "🧐 This user is not using Ambient.",
      ],
      joinedNotUser: [
        "👋🏻 *{0}* joined this group using the invitation link.\n", //
        "🧐 This user is not using Ambient.",
      ],
    },
    premium: [
      "{0} You can support *Ambient* to get Premium and use all features without restrictions - across all bots created in the *Ambient* system and across all groups. With Premium, you can also boost up to *2* groups simultaneously, so all members can also use all *Ambient* features in those groups without restrictions, regardless of whether they have Premium.",
      "\n💎 Your Premium state: {1}",
      "\n🔗 Your link to support and Premium details: {2}",
      "\n🤗 Have questions or need help? Join our *Discord server*: {3}",
      "\n🫶🏻 Thank you for supporting *Ambient*!",
    ],
    purge: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <number of inactivity days>*",
      ],
      nothingToPurge: "❌ All group members have been active for the last *{1}* day{2}!",
      confirmation: [
        "ℹ️ This group currently has *{0}* users, after purging it from *{1}* member{2} which {4} inactive for at least *{6}* day{7}, there will be *{8}* of them. Do you want to continue?\n",
        "1. *✅ yes*",
        "2. *❌ no*",
        "\n🪄 Send only the number corresponding to the selected option, you can also react to this message by using 👍🏼 (variant irrelevant) to select the first option.",
      ],
      cancelled: "❌ Cancelled purging group from inactive members!",
      jailed: "❌ Please wait until the current purging is finished!",
      purging: "⏳ Purging group from *{0}* member{1}...",
      done: "{0} Successfully purged group from *{1}* member{2}, removing *{3}* member{4} failed.",
    },
    restoration: {
      status: [
        "{0} Restoration of deleted messages feature configuration:\n",
        "🛡 Enabled: *{1}*",
        "👮🏻‍♂️ Restore administrator messages: *{2}*",
        "📎 Attachments as links: *{3}*",
        "👨‍👩‍👧‍👦 Thread to restore to: {4}",
        "\n⚙ To change settings, type *{5} change*.",
      ],
      firstSettingQuestion: [
        "🛡 Do you want to enable the restoration of deleted messages feature?\n",
        "1. *❌ no*",
        "2. *✅ yes*",
        "\n🪄 Send only the number corresponding to the selected setting, you can also react to this message by using 👍🏼 (variant irrelevant) to select the first setting.",
      ],
      secondSettingQuestion: [
        "👮🏻‍♂️ Should messages sent by group administrators be restored as well?\n",
        "1. *❌ no*",
        "2. *✅ yes*",
        "\n🪄 Send only the number corresponding to the selected setting, you can also react to this message by using 👍🏼 (variant irrelevant) to select the first setting.",
      ],
      thirdSettingQuestion: [
        "📎 Should attachments from deleted messages be restored as links?\n",
        "1. *❌ no* - attachments from deleted messages will be sent in their original form",
        "2. *✅ yes* - attachments from deleted messages will be sent in the form of links to them",
        "\n🪄 Send only the number corresponding to the selected setting, you can also react to this message by using 👍🏼 (variant irrelevant) to select the first setting.",
      ],
      fourthSettingQuestion: [
        "👨‍👩‍👧‍👦 Select thread to which you want to restore messages deleted in this group:\n",
        "{0}",
        "\n🪄 Send only the number corresponding to the selected thread, you can also react to this message by using 👍🏼 (variant irrelevant) to select current group.",
      ],
      disabled: "📴 Restoration of deleted messages feature has been successfully disabled!",
      saved: "✅ Restoration of deleted messages feature settings has been successfully saved!",
      restored: [
        "👀 User *{0}* deleted a message in *{2}* group!",
        "\n💡 Use *{3}* command to see detailed information on restoration of deleted messages feature configuration.\n",
        "📨 Sent on: *{5}* {4} *{6}*",
        "📮 Deleted on: *{7}* {4} *{8}*",
        "🕰 Deleted after: {9}",
        "📜 Message content: *{10}*",
      ],
      restoredAttachments: [
        "👀 User *{0}* deleted a message in *{2}* group!",
        "\n💡 Use *{3}* command to see detailed information on restoration of deleted messages feature configuration.\n",
        "📨 Sent on: *{5}* {4} *{6}*",
        "📮 Deleted on: *{7}* {4} *{8}*",
        "🕰 Deleted after: {9}",
        "📜 Message content: *{10}*",
        "\n📎 Attachments:\n{11}",
      ],
    },
    roblox: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <username>*\n",
        "💡 Examples:",
        "⭐ *{1} dxmqa_Ok*",
        "⭐ *{1} Wolfpaq*",
        "⭐ *{1} wxqa0a*",
      ],
      notFound: "❌ The given username was not found!",
      collecting: "⏳ Collecting info about user *@{0}*...",
      done: [
        "{0} Info about *@{1}* profile in Roblox:\n",
        "🫡 Full name: *{2}*",
        "🆎 Biography: *{3}*",
        "💎 Roblox Premium: *{4}*",
        "🚫 Is banned: *{5}*",
        "🤔 Is verified: *{6}*",
        "🤩 Followers: *{7}*",
        "👀 Following: *{8}*",
        "🫂 Friends: *{9}*",
        "🔗 Profile: {10}",
        "➕ Account creation date: *{12}* {11} *{13}*",
        "👻 Last activity date: *{14}* {11} *{15}*",
        "🎭 Previous usernames: {16}",
        "🙋🏼‍♀️ Currently online: *{17}*",
        "🎮 {18} activity: {19}",
      ],
    },
    tts: {
      empty: "❌ You must enter the text to say! (max. *{0}* characters)",
      mentions: "❌ The text to say must not contain any mentions!",
      tooLong: "❌ The text to say is too long! (max. *{0}* characters, *{1}* entered)",
      generating: "⏳ Generating a voice message...",
      done: "{0} Here is the generated voice message:",
    },
    instagram: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <username>*\n",
        "💡 Examples:",
        "⭐ *{1} amandaismissing*",
        "⭐ *{1} hunterazarx*",
        "⭐ *{1} negatywny*",
      ],
      notFound: "❌ The given username was not found!",
      collecting: "⏳ Collecting info about user *@{0}*...",
      done: [
        "{0} Info about *@{1}* profile on Instagram:\n",
        "🫡 Full name: *{2}*",
        "🆎 Biography: *{3}*",
        "🔒 Is private: *{4}*",
        "🤔 Is verified: *{5}*",
        "🤩 Followers: *{6}*",
        "👀 Following: *{7}*",
        "📰 Posts count: *{8}*",
        "🔗 Profile: {9}",
        "🚪 External link: {10}",
      ],
    },
    afk: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <reason>/off*",
        "\n💡 Choose your AFK status which will be displayed when someone mentions you.",
        "\n🔧 Current AFK status: *{2}*",
      ],
      tooLong: "❌ The reason for being AFK is too long! (max. *{0}* characters, *{1}* entered)",
      disabled: "✅ Successfully disabled AFK status!",
      done: "✅ Succcessfully set AFK reason to *{0}*!",
      mentioned: "{0} *{1}* is currently AFK, reason: *{2}*",
    },
    play: {
      usage: [
        "{0} Correct usage of command *{1}*:\n",
        "✨ *{1} <title or link>*\n",
        "💡 Examples:",
        "⭐ *{1} Ginseng Strip 2002*",
        "⭐ *{1} youtu.be/vrQWhFysPKY*",
        "⭐ *{1} on.soundcloud.com/QPxti*",
        "⭐ *{1} open.spotify.com/track/7v3rmoy5jcn4h5UqwQyCM3*",
      ],
      searching: "🔎 Searching *{0}*...",
      unavailable: "❌ The selected item is not available!",
      tooBig: "❌ Size of the selected item is too big! (*{0}*, max. *{1}*)",
      preparing: "⏳ Preparing *{0}*... (*{1}*, *{2}*)",
      done: "{0} {1}",
    },
    profile: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <@user (optionally)>*",
      ],
      unavailable: "❌ Info about your profile is currently unavailable!",
      unavailableMentioned: "❌ Info about profile of *{0}* is currently unavailable!",
      collecting: "⏳ Collecting info about *{0}*...",
      done: [
        "{0} Info about Facebook profile of *{1}*:\n",
        "📛 Alternate name: *{2}*",
        "🆎 Username: *{3}*",
        "🆔 Account ID: *{4}*",
        "👗 Sex: *{5}*",
        "🔗 Profile: {6}",
        "😴 AFK status: *{7}*",
        "🏷 Nickname in group: *{8}*",
        "🥰 Has bot in friends: *{9}*",
        "👮🏻‍♂️ Group administrator: *{10}*",
        "🎂 Celebrating a birthday today: *{11}*",
        "🌍 Location: *{12}*",
        "🤓 Uses Ambient since: *{14}* {13} *{15}*",
        "🤖 Is bot: *{16}*",
        "🖤 Is blacklisted: *{17}*",
        "👑 Ambient team member: *{18}*",
        "#️⃣ Premium code: *{19}*",
        "💎 Premium state: {20}",
        "👅 Language in Ambient: *{21}*",
        "🎛️ Spotify connected: *{22}*",
        "🎭 Privacy mode: *{23}*",
        "🫣 Last activity: *{24}* {13} *{25}* (in this group: *{26}*)",
        "🐒 Mentions: *{27}* (in this group: *{28}*)",
        "✉ Messages sent: *{29}* (in this group: *{30}*)",
        "🪄 Commands executed: *{31}* (in this group: *{32}*)",
        "🔄 Data updated: *{33}* {13} *{34}*",
      ],
    },
    skin: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <player name>*",
      ],
      notFound: "❌ The player with the given nickname does not exist!",
      searching: "⏳ Searching for a skin of player *{0}*...",
      done: "{0} Here is the skin of player *{1}*:",
    },
    spotify: {
      usage: [
        "{0} Correct usage of command *{1}*:",
        "\n🔌 *{1} connect* {2} Allows you to connect Ambient with your Spotify account",
        "\n🔥 *{1} disconnect* {2} Allows you to disconnect Ambient from your Spotify account",
        "\n🤠 *{1} profile <@user (optionally)>* {2} Allows you to check info about your or the mentioned user Spotify profile",
        "\n🧐 *{1} group* {2} Allows you to check what are members of this group currently listening to",
        "\n🎧 *{1} nowplaying <@user (optionally)>* {2} Allows you to check what are you or the user mentioned listening to now",
        "\n⭐ *{1} toptracks 1m/6m/12m <@user (optionally)>* {2} Allows you to check what are your or the user mentioned most listened tracks in the given time range",
        "\n🤩 *{1} topartists 1m/6m/12m <@user (optionally)>* {2} Allows you to check what are your or the user mentioned most listened artists in the given time range",
        "\n🕰 *{1} recent <@user (optionally)>* {2} Allows you to check what you or the user mentioned have been listening to recently",
        "\n🥸 *{1} incognito on/off* {2} Allows you to choose whether other group members can see your Spotify statistics",
        "\n📋 *{1} queue <song or @user>* {2} Allows you to add to your playback queue the selected song or the one that the user mentioned is listening to",
        "\n💿 *{1} play <song or @user>* {2} Allows you to play on your Spotify account the selected song or the one that the user mentioned is listening to",
        "\n🎶 *{1} youtube <@user (optionally)>* {2} Sends the track you or the user mentioned are listening to from YouTube",
      ],
      incognitoUsage: [
        "{0} Correct usage of command *{1} incognito*:\n",
        "✨ *{1} incognito on/off*",
        "\n💡 Choose whether other group members can see your Spotify statistics.",
        "\n🔧 Current incognito status: *{2}*",
      ],
      incognitoDisabled: "🎼 Successfully disabled incognito mode in Spotify statistics!",
      incognitoEnabled: "👓 Successfully enabled incognito mode in Spotify statistics!",
      alreadyConnected: "❌ You must disconnect your current account before connecting a new one!",
      connectionUrl: "🔌 Here is your link to connect Spotify account with Ambient: {0}",
      userIncognito: "❌ *{0}* has incognito mode enabled, only {1} can see {2} Spotify statistics.",
      notConnected: "❌ You haven't connected Ambient to your Spotify account!",
      notConnectedMentioned: "❌ *{0}* has not connected Ambient to Spotify account!",
      disconnected: "✅ Successfully disconnected Ambient from Spotify account!",
      mustReconnect: "❌ You need to reconnect Ambient to your Spotify account!",
      mustReconnectMentioned: "❌ *{0}* must reconnect Ambient to the Spotify account!",
      statsUnavailable: "❌ Statistics for your account are unavailable, the account was likely created recently or has been inactive for a long time.",
      statsUnavailableMentioned: "❌ Statistics for *{0}* are unavailable, the account was likely created recently or has been inactive for a long time.",
      notListening:
        "❌ You're not listening to anything at the moment. If this is not true, make sure you do not have a private session enabled and restart the Spotify app on your device.",
      notListeningMentioned: "❌ *{0}* is not currently listening to anything or is in a private session.",
      listeningLocal: "❌ *{0}* is currently listening to a local track, you cannot play it on your Spotify account.",
      unableToPlay: "❌ We couldn't play the song on your Spotify account.",
      unableToQueue: "❌ We were unable to add the song to your Spotify queue.",
      premiumRequired: "❌ Playing songs on your Spotify account using Ambient requires *💎 Spotify Premium* account!",
      emptyResults: "❌ No items matching your query found!",
      selectionTimeout: "❌ No item was selected within *{0}* seconds! Try again.",
      trackSelectionList: [
        "🕵🏽‍♂️ Choose the item you wish to play:\n",
        "{0}",
        "\n🪄 Send only the number corresponding to the selected item, you can also react to this message by using 👍🏼 (variant irrelevant) to select the first item.",
      ],
      playbackStarted: "💿 Starting playback of *{0}* {1} *{2}* from album *{3}* on device *{4} {5}*...",
      queued: "📋 Added *{0}* {1} *{2}* from album *{3}* to the playback queue!",
      nobodyConnected: "❌ No group member has connected their Spotify account to Ambient!",
      group: [
        "🧐 What are currently members of *{0}* group listening to?\n",
        "{1}",
        "\n🧮 *{2}* out of *{3}* members of this group connected Spotify accounts with Ambient, *{4}* of them are currently listening.",
      ],
      profile: [
        "🤠 Info about Spotify profile of *{0}*:\n",
        "🆎 Name: *{1}*",
        "🌍 Country: *{2}*",
        "💖 Favorites count: *{3}*",
        "👀 Followers count: *{4}*",
        "🔗 Profile: {5}",
        "💎 Spotify Premium: *{6}*",
      ],
      nowListening: [
        "🎧 *{0}* {1} *Now listening*",
        "\n💿 *{2}* {1} *{3}*\n",
        "{4}",
        "\n💽 Album: *{5}*",
        "💖 In favorites: *{6}*",
        "💾 Local file: *{7}*",
        "🎚️ Volume level: *{8}%*",
        "{9} Device: *{10}*",
      ],
      recentlyPlayed: [
        "🕰 Recently played tracks of *{0}*:", //
        "\n{1}",
      ],
      topTracks: [
        "⭐ Most played tracks of *{0}*:", //
        "\n{1}",
      ],
      topArtists: [
        "🤩 Most played artists of *{0}*:", //
        "\n{1}",
      ],
    },
    tiktok: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <link to TikTok>*",
      ],
      unavailable: "❌ The TikTok provided is unavailable!",
      tooBig: "❌ TikTok size is too big! (*{0}*, max. *{1}*)",
      done: [
        "{0} Here is your TikTok: *{1}* {2} *{3}*\n",
        "🫡 Author: *{4}* {2} *@{5}*",
        "📅 Date: *{6}* {2} *{7}*",
        "💖 Likes: *{8}*",
        "💬 Comments: *{9}*",
        "🏹 Shares: *{10}*",
        "👀 Views: *{11}*",
        "💿 Sound: *{12}* {13} *{14}*",
      ],
    },
    twitter: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <link to Twitter video>*",
      ],
      unavailable: "❌ The Twitter video provided is unavailable!",
      tooBig: "❌ Size of Twitter video is too big! (*{0}*, max. *{1}*)",
      done: [
        "{0} Here is your Twitter video: *{1}* {2} *{3}*\n",
        "🫡 Author: *{4}* {2} *@{5}*",
        "📅 Date: *{6}* {2} *{7}*",
        "💖 Likes: *{8}*",
        "💬 Comments: *{9}*",
        "🏹 Shares: *{10}*",
        "🔞 Age restrictions: *{11}*",
      ],
    },
    reel: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <link to reel on Instagram>*",
      ],
      unavailable: "❌ The reel provided is unavailable!",
      tooBig: "❌ Size of the provided reel is too big! (*{0}*, max. *{1}*)",
      done: [
        "{0} Here is your reel from Instagram: *{1}* {2} *{3}*\n", //
        "🫡 Author: *{4}* {2} *@{5}*",
        "📅 Date: *{6}* {2} *{7}*",
        "💖 Likes: *{8}*",
        "💬 Comments: *{9}*",
      ],
    },
    adduser: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <profile link, username or ID>*",
      ],
      invalidBatch: "❌ The given user batch is invalid!",
      notFound: "❌ The specified user was not found!",
      alreadyMember: "❌ The specified user is already a member of this group!",
      inQueue: "❌ The specified user is already in the queue of members to be added!",
      groupFull: "❌ The group already has the maximum number of members!",
      queueFull: "❌ The queue of users to join is already full!",
      unableToAdd: "❌ The specified user's privacy settings do not allow them to be added to the group!",
      queuedUser: [
        "🚪 *{0}* has been added to the queue, the request to join must be approved by the group administrator.\n", //
        "🤗 This user uses Ambient since *{4}* {3} *{5}*.",
      ],
      addedUser: [
        "👋🏻 *{0}* has been successfully added to the group!\n", //
        "🤗 This user uses Ambient since *{4}* {3} *{5}*.",
      ],
      queuedNotUser: [
        "🚪 *{0}* has been added to the queue, the request to join must be approved by the group administrator.\n", //
        "🧐 This user is not using Ambient.",
      ],
      addedNotUser: [
        "👋🏻 *{0}* has been successfully added to the group!\n", //
        "🧐 This user is not using Ambient.",
      ],
    },
    admin: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <@user>*",
      ],
      donePromoted: "{0} *{1}* has been successfully promoted to an administrator!",
      doneDemoted: "🫥 *{1}* has been successfully demoted from an administrator!",
    },
    attachments: {
      mustReplyToAttachments: "❌ You must reply to a message that contains attachments!",
      done: "{0} Here is the list of attachments from the selected message:\n\n{1}",
    },
    blacklist: {
      usage: [
        "{0} Correct usage of command *{1}*:",
        "\n👮🏼‍♂️ *{1} add <@user, link or ID>* {2} Allows to add a user to the blacklist",
        "\n🗑 *{1} remove <@user, link or ID>* {2} Allows to remove a user from the blacklist",
        "\n📜 *{1} list* {2} Shows a list of users currently on the blacklist",
        "\n🏆 *{1} top* {2} Shows the top administrators who have added the most people to the blacklist",
      ],
      unableToAdd: "❌ *{0}* cannot be added to the blacklist!",
      alreadyAdded: "❌ *{0}* is already blacklisted!",
      notFound: "❌ *{0}* is not currently blacklisted!",
      jailed: "❌ Please wait until the current blacklist operations are over!",
      added: "✅ *{0}* has been successfully added to the blacklist!",
      removed: "✅ *{0}* has been successfully removed from the blacklist!",
      empty: "❌ No user is currently blacklisted!",
      list: "{0} List of users currently blacklisted (*{1}*):\n\n{2}",
      top: [
        "🏆 Top administrators who have added the most people to the blacklist:", //
        "\n{0}\n",
        "🧮 There {1} currently *{2}* user{3} on the blacklist.",
      ],
    },
    everyone: "{0} Successfully mentioned {1} users!",
    kick: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <@user>*",
      ],
      done: "{0} Successfully kicked *{1}* out of the group!",
    },
    name: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <new group name>*",
      ],
      tooLong: "❌ The given name is too long! (max. *{0}* characters, *{1}* entered)",
      same: "❌ The given name is the same as the current one!",
      doneSet: "{0} Successfully set group name to *{1}*!",
      doneChanged: "{0} Successfully changed group name from *{1}* to *{2}*!",
    },
    nick: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <@user (optionally)> <new nickname>*",
      ],
      tooLong: "❌ The given nickname is too long! (max. *{0}* characters, *{1}* entered)",
      same: "❌ The given nickname is the same as the current one!",
      doneSetOwn: "{0} Your nickname has been successfully set to *{1}*!",
      doneSetOther: "{0} Nickname of *{1}* has been successfully set to *{2}*!",
      doneChangedOwn: "{0} Your nickname has been successfully changed from *{1}* to *{2}*!",
      doneChangedOther: "{0} Nickname of *{1}* has been successfully changed from *{2}* to *{3}*!",
    },
    paste: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <text>*",
      ],
      done: "{0} Here is your paste: {1}",
    },
    purplelist: {
      usage: [
        "{0} Correct usage of command *{1}*:",
        "\n👮🏼‍♂️ *{1} add <@user, link or ID>* {2} Allows to add a user to the purplelist",
        "\n🗑 *{1} remove <@user, link or ID>* {2} Allows to remove a user from the purplelist",
        "\n📜 *{1} list* {2} Shows a list of users currently on the purplelist",
        "\n🏆 *{1} top* {2} Shows the top administrators who have added the most people to the purplelist",
      ],
      unableToAdd: "❌ *{0}* cannot be added to the purplelist!",
      alreadyAdded: "❌ *{0}* is already purplelisted!",
      notFound: "❌ *{0}* is not currently purplelisted!",
      jailed: "❌ Please wait until the current purplelist operations are over!",
      added: "✅ *{0}* has been successfully added to the purplelist!",
      removed: "✅ *{0}* has been successfully removed from the purplelist!",
      empty: "❌ No user is currently purplelisted!",
      list: "{0} List of users currently purplelisted (*{1}*):\n\n{2}",
      top: [
        "🏆 Top administrators who have added the most people to the purplelist:", //
        "\n{0}\n",
        "🧮 There {1} currently *{2}* user{3} on the purplelist.",
      ],
    },
    screenshot: {
      usage: [
        "{0} Correct usage of command *{1}*:\n",
        "✨ *{1} <link to webpage>*\n",
        "💡 Examples:",
        "⭐ *{1} https://facebook.com/hunterazarx*",
        "⭐ *{1} https://github.com/AmbientBot-xyz*",
        "⭐ *{1} https://reddit.com/r/linux*",
      ],
      taking: "⏳ Taking a screenshot...",
      done: "{0} Here is a screenshot of the given website:",
    },
    shorten: {
      usage: [
        "{0} Correct usage of command *{1}*:\n",
        "✨ *{1} <link to shorten>*\n",
        "💡 Examples:",
        "⭐ *{1} https://facebook.com/hunterazarx*",
        "⭐ *{1} https://github.com/AmbientBot-xyz*",
        "⭐ *{1} https://reddit.com/r/linux*",
      ],
      done: "{0} Here is your shortened link: {1}",
    },
    translate: {
      usage: [
        "{0} Correct usage of command *{1}*:\n", //
        "✨ *{1} <target language> <text to translate>*\n",
        "💡 Examples:",
        "⭐ *{1} pl This is a sample text*",
      ],
      invalidTargetLanguage: "❌ The target language specified is invalid!",
      done: [
        "{0} Here is translation result:\n", //
        "🚰 Source language: *{1}*",
        "🎯 Target language: *{2}*",
        "📖 Sentences count: *{3}*",
        "🗣 Result: *{4}*",
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
        "{0} Correct usage of command *{1}*:",
        "\n👮🏼‍♂️ *{1} add <@user> <reason>* {2} Allows you to give the user a warning with a selected reason",
        "\n🗑 *{1} remove <@user> <* or number>* {2} Allows you to remove all or the selected warning from user",
        "\n📜 *{1} list <@user (optionally)>* {2} Allows you to check a list of your or the mentioned user's warnings",
        "\n🧐 *{1} group* {2} Allows you to check the number of warnings of individual group users",
      ],
      reasonMentions: "❌ Reason for the warning must not contain mentions!",
      maxWarningsReached: "❌ *{0}* already has the maximum number of warnings (*{1}*)!",
      reasonTooLong: "❌ The given reason is too long! (max. *{0}* characters, *{1}* entered)",
      jailed: "❌ Wait until current operations on warnings are finished!",
      added: "{0} Administrator *{1}* gave a warning to *{2}* because of *{3}*, it is h{4} *{5}* warning.",
      noWarnings: "❌ You don't have any warnings yet!",
      noWarningsMentioned: "❌ *{0}* doesn't have any warnings yet!",
      noWarningsGroup: "❌ No group member has any warnings yet!",
      list: "📜 Warning list of *{0}* (*{1}*):\n\n{2}",
      group: [
        "🧐 How many warnings do members of *{0}* group have?\n", //
        "{1}",
        "\n🧮 *{2}* out of *{3}* members of this group have warnings, they have *{4}* in total.",
      ],
      deleted: "🗑 Administrator *{0}* removed warning number *{2}* from *{1}*, now {3}he has *{4}* warnings left.",
      deletedAll: "🗑 Administrator *{0}* removed all warnings from *{1}*.",
    },
    yellowlist: {
      usage: [
        "{0} Correct usage of command *{1}*:",
        "\n👮🏼‍♂️ *{1} add <@user, link or ID>* {2} Allows to add a user to the yellowlist",
        "\n🗑 *{1} remove <@user, link or ID>* {2} Allows to remove a user from the yellowlist",
        "\n📜 *{1} list* {2} Shows a list of users currently on the yellowlist",
        "\n🏆 *{1} top* {2} Shows the top administrators who have added the most people to the yellowlist",
      ],
      unableToAdd: "❌ *{0}* cannot be added to the yellowlist!",
      alreadyAdded: "❌ *{0}* is already yellowlisted!",
      notFound: "❌ *{0}* is not currently yellowlisted!",
      jailed: "❌ Please wait until the current yellowlist operations are over!",
      added: "✅ *{0}* has been successfully added to the yellowlist!",
      removed: "✅ *{0}* has been successfully removed from the yellowlist!",
      empty: "❌ No user is currently yellowlisted!",
      list: "{0} List of users currently yellowlisted (*{1}*):\n\n{2}",
      top: [
        "🏆 Top administrators who have added the most people to the yellowlist:", //
        "\n{0}\n",
        "🧮 There {1} currently *{2}* user{3} on the yellowlist.",
      ],
    },
  },
};
