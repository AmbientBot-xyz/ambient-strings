export default {
  global: {
    notEnabled:
      "It looks like you are trying to use the bot on a group that has not been added to the allowed list in the <c>Ambient management panel</c>. Ask bot administrator to add a group or create your own bot completely free on https://www.ambientbot.xyz/",
    properBotIssues: [
      "It looks like you are trying to use a bot that is not working properly. Information about the bot enabled on this group:\n", //
      "🤖 Bot name: <c>{0}</c>",
      "🪪 Account: <c>{1}</c>",
    ],
    wrongBotMentioned: [
      "It looks like you are trying to use the wrong bot. Information about the bot enabled on this group:\n", //
      "🤖 Bot name: <c>{0}</c>",
      "🪪 Account: <c>{1}</c>",
    ],
    disabledManual: "❌ Bot <c>{0}</c> has been disabled on this group by the administrator!",
    disabledAuto: "❌ Bot <c>{0}</c> has been disabled on this group because it has been added to allowed groups in another bot.",
    enabled: "✅ Bot <c>{0}</c> has been enabled on this group, all members of the group can now use it.",
  },
  commands: {
    bot: [
      "🤖 Info about Ambient:\n", //
      "🪁 Core version: <c>v{0}+{1}/{2}</c>",
      "🫡 Instance: <c>{3}</c>",
      "⏳ Instance uptime: <c>{4}</c>",
      "⏳ Bot uptime: <c>{5}</c>",
      "🪁 Environment: <c>v{6}+{7}/{8}</c>",
      "🍒 Creation date: <c>{9}</c>",
      "😼 Author: <c>{10}</c>",
      "🤗 Discord: {11}",
    ],
  },
};
