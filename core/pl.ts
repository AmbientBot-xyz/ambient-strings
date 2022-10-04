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
    welcome:
      "👋🏻 Cześć, <c>{0}</c>! Nazywam się <c>Ambient</c>, jestem bezpiecznym, wydajnym i wielofunkcyjnym botem dla grup na Messengerze. Aby zobaczyć co potrafię, skorzystaj z komendy <c>{1}</c>.\n\n🤗 Masz pytania lub potrzebujesz pomocy? Znajdziesz ją na naszym <c>serwerze Discord</c>, gdzie również dowiesz się o nowościach związanych z Ambientem: {2}",
    commandNotFound: "❌ Nie odnaleziono komendy! Wpisz <c>{0}</c> aby uzyskać listę dostępnych komend.",
    unexpectedArgs: "❌ Ta komenda nie przyjmuje żadnych argumentów!",
    groupOnly: "❌ Z tej komendy można korzystać tylko w konwersacjach grupowych!",
    goodNight: "🥱 Dobranoc, <c>{0}</c>! 😴",
  },
  commands: {
    cat: {
      searching: "⏳ Szukam zdjęcia kotka...",
      done: "{0} Oto losowe zdjęcie kotka:",
    },
    dog: {
      searching: "⏳ Szukam zdjęcia pieska...",
      done: "{0} Oto losowe zdjęcie pieska:",
    },
    fox: {
      searching: "⏳ Szukam zdjęcia liska...",
      done: "{0} Oto losowe zdjęcie liska:",
    },
    shiba: {
      searching: "⏳ Szukam zdjęcia Shiba Inu...",
      done: "{0} Oto losowe zdjęcie Shiba Inu:",
    },
    heart: {
      empty: "❌ Musisz podać treść serca! (max. <c>{0}</c> znaków)",
      mentions: "❌ Treść serca nie może zawierać wzmianek!",
      tooLong: "❌ Treść serca jest zbyt długa! (max. <c>{0}</c> znaków, podano <c>{1}</c>)",
      generating: "⏳ Trwa generowanie serca...",
      done: "{0} Oto wygenerowane serce:",
    },
    rip: {
      empty: "❌ Musisz podać treść nagrobka! (max. <c>{0}</c> znaków)",
      mentions: "❌ Treść nagrobka nie może zawierać wzmianek!",
      tooLong: "❌ Treść nagrobka jest zbyt długa! (max. <c>{0}</c> znaków, podano <c>{1}</c>)",
      generating: "⏳ Trwa generowanie nagrobka...",
      done: "{0} Oto wygenerowany nagrobek:",
    },
    tvp: {
      empty: "❌ Musisz podać treść paska! (max. <c>{0}</c> znaków)",
      mentions: "❌ Treść paska nie może zawierać wzmianek!",
      tooLong: "❌ Treść paska jest zbyt długa! (max. <c>{0}</c> znaków, podano <c>{1}</c>)",
      generating: "⏳ Trwa generowanie paska...",
      done: "{0} Oto wygenerowany pasek:",
    },
    bot: [
      "{0} Informacje o Ambiencie:\n",
      "☯ RAM: <c>{1}/{2} GiB</c> {3} <c>{4}%</c>",
      "💾 Dysk: <c>{5}/{6} GiB</c> {3} <c>{7}%</c>",
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
        "🦊 Zwierzęta: {2}\n",
        "⚙️ Konfiguracja: {3}\n",
        "😆 Zabawa: {4}\n",
        "ℹ Informacje: {5}\n",
        "🫡 Społecznościowe: {7}\n",
        "🛠️ Narzędzia: {8}\n",
        "✨ Aby zobaczyć szczegółowe informacje na temat wybranej komendy, wpisz <c>{9} <nazwa komendy></c>, np. <c>{9} {10}</c>.",
      ],
      about: [
        "{0} Informacje o komendzie <c>{1}</c>:\n", //
        "✏ Opis: <c>{2}</c>",
        "🗃 Kategoria: <c>{3}</c>",
        "⚓ Inne nazwy: {4}",
      ],
    },
    instagram: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:", //
        "\n✨ <c>{1} <nazwa użytkownika></c>\n",
      ],
      notFound: "❌ Podana nazwa użytkownika nie została odnaleziona!",
      collecting: "⏳ Zbieram informacje o użytkowniku <c>@{0}</c>...",
      done: [
        "{0} Informacje o profilu <c>@{1}</c> na Instagramie:\n",
        "🫡 Pełna nazwa: <c>{2}</c>",
        "🆎 Biografia: <c>{3}</c>",
        "🔒 Prywatne: <c>{4}</c>",
        "🤔 Zweryfikowane: <c>{5}</c>",
        "🤩 Obserwujących: <c>{6}</c>",
        "👀 Obserwowanych: <c>{7}</c>",
        "📰 Liczba postów: <c>{8}</c>",
        "🔗 Profil: https://instagram.com/{1}",
        "🚪 Link zewnętrzny: {9}",
      ],
    },
    spotify: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:",
        "\n🔌 <c>{1} połącz</c> {2} Pozwala połączyć Ambienta z kontem Spotify",
        "\n🔥 <c>{1} odłącz</c> {2} Pozwala odłączyć Ambienta od konta Spotify",
        "\n🤠 <c>{1} profil <@użytkownik (opcjonalnie)></c> {2} Pozwala sprawdzić informacje o Twoim lub oznaczonego użytkownika profilu Spotify",
        "\n🧐 <c>{1} grupa</c> {2} Pozwala sprawdzić czego obecnie słuchają członkowie tej grupy",
        "\n🎧 <c>{1} aktualnie <@użytkownik (opcjonalnie)></c> {2} Pozwala sprawdzić czego obecnie słuchasz Ty lub oznaczony użytkownik",
        "\n⭐ <c>{1} toputwory <@użytkownik (opcjonalnie)></c> {2} Pozwala sprawdzić Twoje najczęściej słuchane utwory lub oznaczonego użytkownika",
        "\n🤩 <c>{1} topartyści <@użytkownik (opcjonalnie)></c> {2} Pozwala sprawdzić Twoich najczęściej słuchanych artystów lub oznaczonego użytkownika",
        "\n🕰 <c>{1} ostatnie <@użytkownik (opcjonalnie)></c> {2} Pozwala sprawdzić czego ostatnio słuchał{3}ś Ty lub oznaczony użytkownik",
        "\n💿 <c>{1} play <utwór lub @użytkownik></c> {2} Pozwala odtworzyć na Twoim koncie Spotify wybrany utwór lub ten, którego słucha oznaczony użytkownik",
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
      premiumRequired: "❌ Odtwarzanie utworów na swoim koncie Spotify przy użyciu Ambienta wymaga posiadania konta 💎 Spotify Premium!",
      outOfRange: "❌ Wybrana pozycja nie istnieje! (max. <c>{0}</c> znaków, wybrano <c>{1}</c>)",
      emptyResults: "❌ Nie znaleziono żadnego utworu pasującego do Twojego zapytania!",
      selectionTimeout: "❌ Nie wybrano żadnej pozycji w ciągu <c>{0}</c> sekund! Spróbuj ponownie.",
      trackSelectionList: [
        "🕵🏽‍♂️ Wybierz utwór, który chcesz odtworzyć:\n",
        "{0}",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranej pozycji, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwszą pozycję.",
      ],
      playbackStarted: "💿 Rozpoczynam odtwarzanie <c>{0}</c> {1} <c>{2}</c> z albumu <c>{3}</c> na urządzeniu <c>{4} {5}</c>...",
      group: [
        "🧐 Czego aktualnie słuchają członkowie grupy <c>{0}</c>?\n", //
        "{1}",
        "\n🧮 <c>{2}</c> z <c>{3}</c> członków tej grupy połączyło swoje konto Spotify z Ambientem, <c>{4}</c> z nich aktualnie słucha muzyki.",
      ],
      groupNoName: [
        "🧐 Czego aktualnie słuchają członkowie tej grupy?\n", //
        "{1}",
        "\n🧮 <c>{2}</c> z <c>{3}</c> członków tej grupy połączyło swoje konto Spotify z Ambientem, <c>{4}</c> z nich aktualnie słucha muzyki.",
      ],
      profile: [
        "🤠 Informacje o profilu Spotify <c>{0}</c>:\n",
        "🆎 Nazwa: <c>{1}</c>",
        "🌍 Kraj: <c>{2}</c>",
        "👀 Liczba obserwujących: <c>{3}</c>",
        "🔗 Link: {4}",
        "💎 Spotify Premium: <c>{5}</c>",
      ],
      nowListening: [
        "🎧 <c>{0}</c> {1} <c>Aktualnie słucha</c>",
        "\n💿 <c>{2}</c> {1} <c>{3}</c>\n",
        "⏸️ {4}",
        "\n💽 Album: <c>{5}</c>",
        "💾 Plik lokalny: <c>{6}</c>",
        "🎚️ Poziom głośności: <c>{7}%</c>",
        "{8} Urządzenie: <c>{9}</c>",
      ],
      recentlyPlayed: [
        "🕰 Ostatnio słuchane utwory <c>{0}</c>:", //
        "\n{1}",
      ],
      topTracks: [
        "⭐ Najczęściej słuchane utwory <c>{0}</c>:", //
        "\n{1}",
      ],
      topArtists: [
        "🤩 Najczęściej słuchani artyści <c>{0}</c>:", //
        "\n{1}",
      ],
    },
    tiktok: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:", //
        "\n✨ <c>{1} <link do TikToka></c>\n",
      ],
      invalidUrl: "❌ Podany link do TikToka jest nieprawidłowy!",
      preparing: "⏳ Przygotowuję TikToka: <c>{0}</c> {1} <c>{2}</c>",
      tooLong: "❌ TikTok jest zbyt długi! (<c>{0}</c>, maks. <c>{1}</c>)",
      tooBig: "❌ Rozmiar TikToka jest zbyt duży! (<c>{0}</c>, maks. <c>{1}</c>)",
      done: [
        "{0} Oto Twój TikTok: <c>{1}</c> {2} <c>{3}</c>\n",
        "🫡 Autor: <c>{4}</c> {2} <c>@{5}</c>",
        "🌍 Kraj: <c>{6}</c>",
        "📅 Data: <c>{7}</c> {2} <c>{8}</c>",
        "💖 Polubienia: <c>{9}</c>",
        "💬 Komentarze: <c>{10}</c>",
        "⭐ Ulubione: <c>{11}</c>",
        "🏹 Udostępnienia: <c>{12}</c>",
        "👀 Wyświetlenia: <c>{13}</c>",
        "💾 Pobrania: <c>{14}</c>",
      ],
    },
    name: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:", //
        "\n✨ <c>{1} <nowa nazwa grupy></c>\n",
      ],
      doneSet: "{0} Pomyślnie nadano grupie nazwę <c>{1}</c>!",
      doneChanged: "{0} Pomyślnie zmieniono nazwę grupy z <c>{1}</c> na <c>{2}</c>!",
    },
  },
};
