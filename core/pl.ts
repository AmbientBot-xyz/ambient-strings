export default {
  global: {
    notEnabled:
      "Wygląda na to, że próbujesz skorzystać z bota na grupie która nie została dodana do listy dozwolonych w <c>panelu zarządzania Ambientem</c>. Poproś administratora bota o dodanie grupy lub stwórz własnego bota całkowicie za darmo na https://www.ambientbot.xyz/",
    properBotIssues: [
      "Wygląda na to, że próbujesz skorzystać z bota który nie działa prawidłowo. Informacje o bocie włączonym na tej grupie:\n", //
      "🤖 Nazwa bota: <c>{0}</c>",
      "🪪 Konto: <c>{1}</c>",
    ],
    wrongBotMentioned: [
      "Wygląda na to, że próbujesz skorzystać z niewłaściwego bota. Informacje o bocie włączonym na tej grupie:\n", //
      "🤖 Nazwa bota: <c>{0}</c>",
      "🪪 Konto: <c>{1}</c>",
    ],
    disabledManual: "❌ Bot <c>{0}</c> został wyłączony na tej grupie przez administratora!",
    disabledAuto: "❌ Bot <c>{0}</c> został wyłączony na tej grupie, ponieważ została ona dodana do dozwolonych grup w innym bocie.",
    enabled: "✅ Bot <c>{0}</c> został włączony na tej grupie, wszyscy członkowie grupy mogą z niego teraz korzystać.",
  },
  commands: {
    bot: [
      "🤖 Informacje o Ambiencie:\n", //
      "🪁 Wersja jądra: <c>v{0}+{1}/{2}</c>",
      "🫡 Instancja: <c>{3}</c>",
      "⏳ Czas działania instancji: <c>{4}</c>",
      "⏳ Czas działania bota: <c>{5}</c>",
      "🪁 Środowisko: <c>v{6}+{7}/{8}</c>",
      "🍒 Data powstania: <c>{9}</c>",
      "😼 Autor: <c>{10}</c>",
      "🤗 Discord: {11}",
    ],
  },
};
