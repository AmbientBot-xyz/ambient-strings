export default {
  global: {
    notEnabled:
      "Wygląda na to, że próbujesz skorzystać z bota na grupie która nie została dodana do listy dozwolonych w <c>panelu zarządzania Ambientem</c>. Poproś administratora bota o dodanie grupy lub stwórz własnego bota całkowicie za darmo na {0}",
    properBotIssues: [
      "Wygląda na to, że próbujesz skorzystać z bota który nie działa prawidłowo. Informacje o bocie włączonym na tej grupie:\n",
      "🤖 Nazwa bota: <c>{0}</c>",
      "🪪 Konto: <c>{1}</c>",
    ],
    wrongBotMentioned: [
      "Wygląda na to, że próbujesz skorzystać z niewłaściwego bota. Informacje o bocie włączonym na tej grupie:\n",
      "🤖 Nazwa bota: <c>{0}</c>",
      "🪪 Konto: <c>{1}</c>",
    ],
    disabledManual: "♿ Bot <c>{0}</c> został wyłączony na tej grupie przez administratora!",
    disabledAuto: "💡 Bot <c>{0}</c> został wyłączony na tej grupie, ponieważ została ona dodana do dozwolonych grup w innym bocie.",
    enabled: "🔘 Bot <c>{0}</c> został włączony na tej grupie, wszyscy członkowie grupy mogą z niego teraz korzystać.",
    threadJailed: "⏳ W tej grupie są obecnie wykonywane operacje uniemożliwiające przetworzenie Twojej wiadomości.",
    userJailed: "⏳ Na Twoim koncie są obecnie wykonywane operacje uniemożliwiające przetworzenie Twojej wiadomości.",
    eventError: [
      "💀 Wystąpił nieznany błąd podczas próby przetworzenia Twojej wiadomości. Spróbuj ponownie później, a jeśli błąd będzie się powtarzał, powiadom nas na serwerze Discord: {0}\n",
      "📜 Szczegółowe informacje:",
      "{1}",
    ],
    execError: [
      "💀 Wystąpił nieznany błąd podczas próby wykonania komendy. Spróbuj ponownie później, a jeśli błąd będzie się powtarzał, powiadom nas na serwerze Discord: {0}\n",
      "📜 Szczegółowe informacje:",
      "{1}",
    ],
    welcome: "👋🏻 Witaj, <c>{0}</c>!",
    commandNotFound: "❌ Nie odnaleziono komendy! Wpisz <c>{0}</c> aby uzyskać listę dostępnych komend.",
    unexpectedArgs: "❌ Ta komenda nie przyjmuje żadnych argumentów!",
  },
  commands: {
    tvp: {
      empty: "❌ Musisz podać treść paska! (max. <c>{0}</c> znaków)",
      mentions: "❌ Treść paska nie może zawierać wzmianek!",
      tooLong: "❌ Treść paska jest zbyt długa! (max. <c>{0}</c> znaków, podano <c>{1}</c>)",
      generating: "⏳ Trwa generowanie paska...",
      done: "{0} Oto wygenerowany pasek:",
    },
    bot: [
      "{0} Informacje o Ambiencie:\n",
      "☯ RAM: <c>{1}/{2} GB</c> {3} <c>{4}%</c>",
      "💾 Dysk: <c>{5}/{6} GB</c> {3} <c>{7}%</c>",
      "⏳ Czas działania: <c>{8}</c>",
      "🤖 Uruchomione boty: <c>{9}</c>",
      "✨ Jądro: <c>v{10}+{11}/{12}</c>",
      "📦 Instancja: <c>{13}</c>",
      "🪁 Środowisko: <c>v{14}+{15}/{16}</c>",
      "🆙 Data aktualizacji: <c>{17}</c> {3} <c>{18}</c>",
      "🍒 Data powstania: <c>{19}</c>",
      "😼 Autor: <c>{20}</c>",
      "🤗 Discord: {21}",
    ],
    help: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:",
        "\n✨ <c>{1} <nazwa komendy (opcjonalnie)></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1}</c>",
        "⭐ <c>{1} {2}</c>",
        "⭐ <c>{1} {3}</c>",
      ],
      list: [
        "{0} Lista dostępnych komend (<c>{1}</c>):\n",
        "😆 Zabawa: {2}\n",
        "ℹ Informacje: {3}\n",
        "🎶 Muzyka: {4}\n",
        "🤔 Inne: {5}\n",
        "✨ Aby zobaczyć szczegółowe informacje na temat wybranej komendy, wpisz <c>{6} <nazwa komendy></c>, np. <c>{6} {7}</c>.",
      ],
      about: [
        "{0} Informacje o komendzie <c>{1}</c>:\n", //
        "✏ Opis: <c>{2}</c>",
        "🗃 Kategoria: <c>{3}</c>",
        "⚓ Inne nazwy: {4}",
      ],
    },
    spotify: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:", //
        "\n🔌 <c>{1} połącz</c> {2} Pozwala połączyć Ambienta z kontem Spotify",
        "\n🔥 <c>{1} odłącz</c> {2} Pozwala odłączyć Ambienta od konta Spotify",
        "\n😀 <c>{1} profil <@użytkownik (opcjonalnie)></c> {2} Pozwala sprawdzić informacje o Twoim lub oznaczonego użytkownika profilu Spotify",
        "\n🎧 <c>{1} aktualnie <@użytkownik (opcjonalnie)></c> {2} Pozwala sprawdzić czego obecnie słuchasz Ty lub oznaczony użytkownik",
        "\n🕰 <c>{1} ostatnie <@użytkownik (opcjonalnie)></c> {2} Pozwala sprawdzić czego ostatnio słuchał{3}ś Ty lub oznaczony użytkownik",
        "\n💿 <c>{1} play <piosenka lub @użytkownik></c> {2} Pozwala odtworzyć na Twoim koncie Spotify wybraną piosenkę lub tą, której słucha oznaczony użytkownik",
      ],
      alreadyConnected: "❌ Musisz odłączyć obecne konto przed połączeniem nowego!",
      urlSent: "✅ Wysłaliśmy do Ciebie link do połączenia konta Spotify z Ambientem w wiadomości prywatnej, sprawdź również folder <c>inne</c>.",
      unableToSend: "🔌 Nie udało nam się wysłać do Ciebie wiadomości prywatnej, więc musimy zrobić to tutaj. Oto link do połączenia konta Spotify z Ambientem: {0}",
      connectionUrl: "🔌 Oto link do połączenia konta Spotify z Ambientem: {0}",
      notConnected: "❌ Nie połączył{1}ś Ambienta z kontem Spotify!",
      notConnectedMentioned: "❌ <c>{0}</c> nie połączył{1} Ambienta z kontem Spotify!",
      disconnected: "✅ Pomyślnie odłączył{0}ś Ambienta od konta Spotify!",
      mustReconnect: "❌ Musisz ponownie połączyć Ambienta z kontem Spotify!",
      mustReconnectMentioned: "❌ <c>{0}</c> musi ponownie połączyć Ambienta z kontem Spotify!",
      notListening: "❌ Niczego aktualnie nie słuchasz.",
      notListeningMentioned: "❌ <c>{0}</c> niczego aktualnie nie słucha.",
      mentionedNotUser: "❌ Oznaczony użytkownik nigdy nie skorzystał z Ambienta.",
      listeningLocal: "❌ <c>{0}</c> słucha obecnie lokalnego utworu, nie możesz odtworzyć go na swoim koncie Spotify.",
      unableToPlay: "❌ Nie udało nam się odtworzyć utworu na Twoim koncie Spotify.",
      playbackStarted: "💿 Rozpoczynam odtwarzanie <c>{0}</c> {1} <c>{2}</c> z albumu <c>{3}</c> na urządzeniu <c>{4} {5}</c>...",
      profile: [
        "🤠 Informacje o profilu Spotify <c>{0}</c>:\n",
        "🆎 Nazwa użytkownika: <c>{1}</c>",
        "🌍 Kraj: <c>{2}</c>",
        "👀 Liczba obserwujących: <c>{3}</c>",
        "💎 Spotify Premium: <c>{4}</c>",
      ],
      nowListening: [
        "🎶 <c>{0}</c> {1} <c>Aktualnie słucha</c>",
        "\n💿 <c>{2}</c> {1} <c>{3}</c>\n",
        "⏸️ {4}",
        "\n💽 Album: <c>{5}</c>",
        "💾 Plik lokalny: <c>{6}</c>",
        "🎚️ Poziom głośności: <c>{7}%</c>",
        "{8} Urządzenie: <c>{9}</c>",
      ],
      recentlyPlayed: [
        "🎶 <c>{0}</c> {1} <c>Ostatnio słuchane utwory</c>", //
        "\n{2}",
      ],
    },
  },
};