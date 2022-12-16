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
      "💀 Ambient napotkał nieznany błąd podczas próby przetworzenia Twojej wiadomości, spróbuj ponownie później. Zgłoszenie zostało automatycznie wysłane na nasz serwer Discord: {0}\n",
      "⚠️ Nazwa: <c>{1}</c>",
      "📜 Opis: <c>{2}</c>",
      "📎 Szczegóły: {3}",
    ],
    execError: [
      "💀 Ambient napotkał nieznany błąd podczas próby wykonania komendy, spróbuj ponownie później. Zgłoszenie zostało automatycznie wysłane na nasz serwer Discord: {0}\n",
      "⚠️ Nazwa: <c>{1}</c>",
      "📜 Opis: <c>{2}</c>",
      "📎 Szczegóły: {3}",
    ],
    welcome:
      "👋🏻 Cześć, <c>{0}</c>! Nazywam się <c>Ambient</c>, jestem bezpiecznym, wydajnym i wielofunkcyjnym botem dla grup na Messengerze. Aby zobaczyć co potrafię, skorzystaj z komendy <c>{1}</c>.\n\n🤗 Masz pytania lub potrzebujesz pomocy? Znajdziesz ją na naszym <c>serwerze Discord</c>, gdzie również dowiesz się o nowościach związanych z Ambientem: {2}",
    mentionedItself: "🤯",
    mentionedNotMember: "❌ Oznaczony użytkownik nie jest członkiem tej grupy!",
    mentionedNotUser: "❌ Oznaczony użytkownik nigdy nie skorzystał z Ambienta.",
    commandNotFound: "❌ Nie odnaleziono komendy! Wpisz <c>{0}</c> aby uzyskać listę dostępnych komend.",
    unexpectedArgs: "❌ Ta komenda nie przyjmuje żadnych argumentów!",
    groupOnly: "❌ Z tej komendy można korzystać tylko w konwersacjach grupowych!",
    groupAdminOnly: "❌ Z tej komendy mogą korzystać tylko administratorzy grupy!",
    globalAdminOnly: "❌ Nie posiadasz uprawnień do korzystania z tej komendy!",
    goodNight: "🥱 Dobranoc, <c>{0}</c>! 😴",
    outOfRange: "❌ Wybrana pozycja nie istnieje! (max. <c>{0}</c>, wybrano <c>{1}</c>)",
    botAdminRequired: "❌ Bot musi być administratorem grupy aby skorzystać z tej komendy.",
    nsfwNotAllowed: "❌ Treści NSFW nie są dostępne w tej grupie, sprawdź komendę <c>{0}</c>.",
  },
  commands: {
    alpaca: {
      searching: "⏳ Szukam zdjęcia alpaki...",
      done: "{0} Oto losowe zdjęcie alpaki autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    capybara: {
      searching: "⏳ Szukam zdjęcia kapibary...",
      done: "{0} Oto losowe zdjęcie kapibary autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    cat: {
      searching: "⏳ Szukam zdjęcia kotka...",
      done: "{0} Oto losowe zdjęcie kotka:",
    },
    dog: {
      searching: "⏳ Szukam zdjęcia pieska...",
      done: "{0} Oto losowe zdjęcie pieska:",
    },
    duck: {
      searching: "⏳ Szukam zdjęcia kaczki...",
      done: "{0} Oto losowe zdjęcie kaczki autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    fox: {
      searching: "⏳ Szukam zdjęcia liska...",
      done: "{0} Oto losowe zdjęcie liska:",
    },
    frog: {
      searching: "⏳ Szukam zdjęcia żaby...",
      done: "{0} Oto losowe zdjęcie żaby autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    pigeon: {
      searching: "⏳ Szukam zdjęcia gołębia...",
      done: "{0} Oto losowe zdjęcie gołębia autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    racoon: {
      searching: "⏳ Szukam zdjęcia szopa...",
      done: "{0} Oto losowe zdjęcie szopa autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    shiba: {
      searching: "⏳ Szukam zdjęcia Shiba Inu...",
      done: "{0} Oto losowe zdjęcie Shiba Inu:",
    },
    turtle: {
      searching: "⏳ Szukam zdjęcia żółwia...",
      done: "{0} Oto losowe zdjęcie żółwia autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    interactions: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <on/off></c>",
      ],
      disabled: "🤐 Pomyślnie wyłączono interakcje w tej grupie, Ambient nie będzie reagował na żadne wiadomości poza komendami rozpoczynającymi się znakiem <c>{0}</c>.",
      enabled: "👉🏻 Pomyślnie włączono interakcje w tej grupie, Ambient będzie reagował na niektóre wiadomości poza komendami rozpoczynającymi się znakiem <c>{0}</c>.",
    },
    nsfw: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <on/off></c>",
      ],
      disabled: "😌 Pomyślnie wyłączono komendy NSFW w tej grupie!",
      enabled: "♨ Pomyślnie włączono komendy NSFW w tej grupie!",
    },
    variables: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} list</c>",
        "✨ <c>{1} set <nazwa> <zawartość></c>",
        "✨ <c>{1} del <nazwa></c>",
        "✨ <c>{1} get <nazwa></c>",
      ],
      list: "{0} Lista aktualnie ustawionych zmiennych: <c>{1}</c>",
      set: "✅ Pomyślnie zaktualizowano zmienną <c>{0}</c>!",
      notFound: "❌ Zmienna <c>{0}</c> nie istnieje!",
      deleted: "🗑 Pomyślnie usunięto zmienną <c>{0}</c>!",
      about: [
        "{0} Informacje o zmiennej:\n", //
        "🔖 Nazwa: <c>{1}</c>",
        "📖 Zawartość: <c>{2}</c>",
        "🗓 Ostatnia aktualizacja: <c>{4}</c> {3} <c>{5}</c>",
        "🤡 Zaktualizowano przez: <c>{6}</c>",
      ],
    },
    achievement: {
      empty: "❌ Musisz podać treść osgiągnięcia! (max. <c>{0}</c> znaki)",
      mentions: "❌ Treść osgiągnięcia nie może zawierać wzmianek!",
      tooLong: "❌ Treść osgiągnięcia jest zbyt długa! (max. <c>{0}</c> znaki, podano <c>{1}</c>)",
      generating: "⏳ Trwa generowanie osgiągnięcia...",
      done: "{0} Oto wygenerowane osgiągnięcie:",
    },
    disco: {
      jailed: "❌ Poczekaj aż obecna impreza zakończy się!",
      unavailable: "❌ Nie można rozpocząć imprezy, ponieważ przywrócenie obecnego motywu nie będzie możliwe. Zmień motyw na inny przed rozpoczęciem imprezy.",
      starting: "{0} Rozkręcam imprezę...",
      done: "🥂 Impreza zakończona!",
    },
    coinflip: {
      heads: "🦅 Orzeł",
      tails: "🪙 Reszka",
    },
    couple: {
      tooFewUsers: "❌ W grupie znajduje się zbyt mało członków którzy skorzystali z Ambienta!",
      done: "{0} Para najlepiej pasujących do siebie osób w tej grupie to <c>{1}</c> i <c>{2}</c> (<c>{3}%</c>) 💍",
    },
    diceroll: "{0} Wynik rzutu kostką: <c>{1}</c>",
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
    apod: {
      searching: "⏳ Szukam astronomicznego zdjęcia dnia...",
      doneVideo: "{0} Oto astronomiczny filmik dnia pod tytułem <c>{1}</c>: {2}",
      done: "{0} Oto astronomiczne zdjęcie dnia pod tytułem <c>{1}</c>:",
    },
    bot: [
      "{0} Informacje o Ambiencie:\n",
      "☯ RAM: <c>{1}/{2} GiB</c> {3} <c>{4}%</c>",
      "💾 Dysk: <c>{5}/{6} GiB</c> {3} <c>{7}%</c>",
      "⏳ Czas działania: <c>{8}</c>",
      "🏓 Ping: <c>{9} ms</c>",
      "🤖 Uruchomione boty: <c>{10}</c>",
      "✨ Jądro: <c>v{11}+{12}/{13}</c>",
      "📦 Instancja: <c>{14}</c>",
      "🪁 Środowisko: <c>v{15}+{16}/{17}</c>",
      "🏷 TypeScript: <c>v{18}</c>",
      "🆙 Data aktualizacji: <c>{19}</c> {3} <c>{20}</c>",
      "🍒 Data powstania: <c>{21}</c>",
      "😼 Autor: <c>{22}</c>",
      "🤗 Discord: {23}",
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
        "🦊 Zwierzęta (<c>{2}</c>): {3}\n",
        "⚙️ Konfiguracja (<c>{4}</c>): {5}\n",
        "😆 Zabawa (<c>{6}</c>): {7}\n",
        "ℹ Informacje (<c>{8}</c>): {9}\n",
        "🔞 NSFW (<c>{10}</c>): {11}\n",
        "🫡 Społecznościowe (<c>{12}</c>): {13}\n",
        "🛠️ Narzędzia (<c>{14}</c>): {15}\n",
        "✨ Aby zobaczyć szczegółowe informacje na temat wybranej komendy, wpisz <c>{16} <nazwa komendy></c>, np. <c>{16} {17}</c>.",
      ],
      about: [
        "{0} Informacje o komendzie <c>{1}</c>:\n", //
        "✏ Opis: <c>{2}</c>",
        "🗃 Kategoria: <c>{3}</c>",
        "⚓ Inne nazwy: {4}",
      ],
    },
    weather: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:",
        "\n✨ <c>{1} <lokalizacja lub @użytkownik (opcjonalne jeśli lokalizacja jest zapisana)></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1}</c>",
        "⭐ <c>{1} Leszno</c>",
        "⭐ <c>{1} Zielona Góra, PL</c>",
        "⭐ <c>{1} @użytkownik</c>",
      ],
      notSetMentioned: "❌ <c>{0}</c> nie podał{1} swojej lokalizacji!",
      notFound: "❌ Podana lokalizacja nie została odnaleziona!",
      done: [
        "{0} Aktualna pogoda w lokalizacji <c>{1}</c>:\n",
        "🌡️ Temperatura: <c>{2}°C</c> {3}",
        "✋🏻 Odczuwalna: <c>{4}°C</c> {5}",
        "🌃 Niebo: <c>{6}</c> {7}",
        "🎈 Ciśnienie: <c>{8} hPa</c>",
        "💨 Prędkość wiatru: <c>{9} km/h</c>",
        "💧 Wilgotność: <c>{10}%</c>",
        "☁️ Pochmurność: <c>{11}%</c>",
        "🌅 Wschód słońca: <c>{12}</c>",
        "🌇 Zachód słońca: <c>{13}</c>",
      ],
    },
    rule34: {
      empty: "❌ Musisz podać tagi! (max. <c>{0}</c> znaki)",
      mentions: "❌ Tagi nie mogą zawierać wzmianek!",
      tooLong: "❌ Tagi są zbyt długie! (max. <c>{0}</c> znaki, podano <c>{1}</c>)",
      searching: "⏳ Szukam zdjęcia pasującego do podanych tagów...",
      notFound: "❌ Nie odnaleziono zdjęcia pasującego do podanych tagów!",
      done: "{0} Oto losowe zdjęcie autorstwa <c>{1}</c> z tagami <c>{2}</c>:",
    },
    instagram: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:", //
        "\n✨ <c>{1} <nazwa użytkownika></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1} existencefornoreason</c>",
        "⭐ <c>{1} kmatuszak04</c>",
        "⭐ <c>{1} maciekkarecki</c>",
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
    play: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:",
        "\n✨ <c>{1} <tytuł lub link do piosenki></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1} kukon ostatni bal</c>",
        "⭐ <c>{1} youtu.be/-g9O5GDV33k</c>",
        "⭐ <c>{1} on.soundcloud.com/oZBMU</c>",
        "⭐ <c>{1} open.spotify.com/track/3WqlO1SqWksaYDyUKZw4Kn</c>",
      ],
      searching: "🔎 Szukam <c>{0}</c>...",
      unavailable: "❌ Wybrany utwór jest niedostępny!",
      tooBig: "❌ Rozmiar wybranego utworu jest zbyt duży! (<c>{0}</c>, maks. <c>{1}</c>)",
      preparing: "⏳ Przygotowuję <c>{0}</c>... (<c>{1}</c>, <c>{2}</c>)",
      done: "{0} {1}",
    },
    profile: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <@użytkownik (opcjonalnie)></c>",
      ],
      collecting: "⏳ Zbieram informacje o <c>{0}</c>...",
      done: [
        "{0} Informacje o profilu Facebook <c>{1}</c>:\n",
        "📛 Alternatywna nazwa: <c>{2}</c>",
        "🆎 Nazwa użytkownika: <c>{3}</c>",
        "🆔 ID konta: <c>{4}</c>",
        "👗 Płeć: <c>{5}</c>",
        "🔗 Profil: {6}",
        "🥰 Ma bota w znajomych: <c>{7}</c>",
        "👮🏻‍♂️ Administrator grupy: <c>{8}</c>",
        "🎂 Obchodzi dziś urodziny: <c>{9}</c>",
        "🌍 Lokalizacja: <c>{10}</c>",
        "🤓 Korzysta z Ambienta od: <c>{12}</c> {11} <c>{13}</c>",
        "🤖 Jest botem: <c>{14}</c>",
        "👅 Język w Ambiencie: <c>{15}</c>",
        "🎛️ Połączone Spotify: <c>{16}</c>",
        "✉ Wysłane wiadomości: <c>{17}</c> (<c>{18}</c> w tej grupie)",
        "🪄 Wykonane komendy: <c>{19}</c> (<c>{20}</c> w tej grupie)",
        "🔄 Zaktualizowano dane: <c>{21}</c> {11} <c>{22}</c>",
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
        "\n🎶 <c>{1} youtube <@użytkownik (opcjonalnie)></c> {2} Wysyła utwór którego słuchasz Ty lub oznaczony użytkownik z YouTube",
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
      listeningLocal: "❌ <c>{0}</c> słucha obecnie lokalnego utworu, nie możesz odtworzyć go na swoim koncie Spotify.",
      unableToPlay: "❌ Nie udało nam się odtworzyć utworu na Twoim koncie Spotify.",
      premiumRequired: "❌ Odtwarzanie utworów na swoim koncie Spotify przy użyciu Ambienta wymaga posiadania konta 💎 Spotify Premium!",
      emptyResults: "❌ Nie znaleziono żadnego utworu pasującego do Twojego zapytania!",
      selectionTimeout: "❌ Nie wybrano żadnej pozycji w ciągu <c>{0}</c> sekund! Spróbuj ponownie.",
      trackSelectionList: [
        "🕵🏽‍♂️ Wybierz utwór, który chcesz odtworzyć:\n",
        "{0}",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranej pozycji, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwszą pozycję.",
      ],
      playbackStarted: "💿 Rozpoczynam odtwarzanie <c>{0}</c> {1} <c>{2}</c> z albumu <c>{3}</c> na urządzeniu <c>{4} {5}</c>...",
      nobodyConnected: "❌ Żaden członek grupy nie połączył swojego konta Spotify z Ambientem!",
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
        "🔗 Profil: {4}",
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
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <link do TikToka></c>",
      ],
      unavailable: "❌ Podany TikTok jest niedostępny!",
      tooBig: "❌ Rozmiar TikToka jest zbyt duży! (<c>{0}</c>, maks. <c>{1}</c>)",
      done: [
        "{0} Oto Twój TikTok: <c>{1}</c> {2} <c>{3}</c>\n",
        "🫡 Autor: <c>{4}</c> {2} <c>@{5}</c>",
        "📅 Data: <c>{6}</c> {2} <c>{7}</c>",
        "💖 Polubienia: <c>{8}</c>",
        "💬 Komentarze: <c>{9}</c>",
        "🏹 Udostępnienia: <c>{10}</c>",
        "👀 Wyświetlenia: <c>{11}</c>",
        "💿 Dźwięk: <c>{12}</c> {13} <c>{14}</c>",
      ],
    },
    attachments: {
      mustReplyToAttachments: "❌ Musisz odpowiedzieć na wiadomość zawierającą załączniki!",
      done: "{0} Oto lista załączników z wybranej wiadomości:\n\n{1}",
    },
    everyone: "{0} Pomyślnie oznaczono {1} użytkowników!",
    kick: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <@użytkownik></c>",
      ],
      done: "{0} Pomyślnie wyrzucono <c>{1}</c> z grupy!",
    },
    name: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <nowa nazwa grupy></c>",
      ],
      doneSet: "{0} Pomyślnie nadano grupie nazwę <c>{1}</c>!",
      doneChanged: "{0} Pomyślnie zmieniono nazwę grupy z <c>{1}</c> na <c>{2}</c>!",
    },
    nick: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <@użytkownik (opcjonalnie)> <nowy nick></c>",
      ],
      tooLong: "❌ Podany nick jest zbyt długi!",
      doneSetOwn: "{0} Twój nick został pomyślnie ustawiony na <c>{1}</c>!",
      doneSetOther: "{0} Nick <c>{1}</c> został pomyślnie ustawiony na <c>{2}</c>!",
      doneChangedOwn: "{0} Twój nick został pomyślnie zmieniony z <c>{1}</c> na <c>{2}</c>!",
      doneChangedOther: "{0} Nick <c>{1}</c> został pomyślnie zmieniony z <c>{2}</c> na <c>{3}</c>!",
    },
    paste: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:", //
        "\n✨ <c>{1} <tekst></c>\n",
      ],
      done: "{0} Oto Twoja wklejka: {1}",
    },
    screenshot: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:",
        "\n✨ <c>{1} <link do strony></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1} https://facebook.com/confirmed2iq</c>",
        "⭐ <c>{1} https://github.com/AmbientBot-xyz</c>",
        "⭐ <c>{1} https://reddit.com/r/linux</c>",
      ],
      taking: "⏳ Wykonuję zrzut ekranu...",
      done: "{0} Oto zrzut ekranu podanej strony internetowej:",
    },
    shorten: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:",
        "\n✨ <c>{1} <link do skrócenia></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1} https://facebook.com/confirmed2iq</c>",
        "⭐ <c>{1} https://github.com/AmbientBot-xyz</c>",
        "⭐ <c>{1} https://reddit.com/r/linux</c>",
      ],
      done: "{0} Oto Twój skrócony link: {1}",
    },
    translate: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:", //
        "\n✨ <c>{1} <język docelowy> <tekst do przetłumaczenia></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1} en Ambient jest najlepszy</c>",
      ],
      done: [
        "{0} Oto wynik tłumaczenia:\n", //
        "🚰 Język źródłowy: <c>{1}</c>",
        "🎯 Język docelowy: <c>{2}</c>",
        "📖 Liczba zdań: <c>{3}</c>",
        "🗣 Wynik: <c>{4}</c>",
      ],
    },
    warning: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:",
        "\n👮🏼‍♂️ <c>{1} dodaj <@użytkownik> <powód></c> {2} Pozwala nadać użytkownikowi ostrzeżenie z wybranym powodem",
        "\n🗑 <c>{1} usuń <@użytkownik> <numer></c> {2} Pozwala usunąć użytkownikowi ostrzeżenie o wybranym numerze",
        "\n📜 <c>{1} lista <@użytkownik (opcjonalnie)></c> {2} Pozwala sprawdzić listę Twoich lub oznaczonego użytkownika ostrzeżeń",
        "\n🧐 <c>{1} grupa</c> {2} Pozwala sprawdzić liczbę ostrzeżeń poszczególnych członków grupy",
      ],
      reasonMentions: "❌ Powód ostrzeżenia nie może zawierać wzmianek!",
      maxWarningsReached: "❌ <c>{0}</c> posiada już maksymalną liczbę ostrzeżeń (<c>{1}</c>)!",
      reasonTooLong: "❌ Podany powód jest zbyt długi! (max. <c>{0}</c> znaków, podano <c>{1}</c>)",
      added: "{0} Administrator <c>{1}</c> nadał ostrzeżenie <c>{2}</c> z powodu <c>{3}</c>, jest to je{4} <c>{5}</c> ostrzeżenie.",
      noWarnings: "❌ Nie posiadasz jeszcze żadnych ostrzeżeń!",
      noWarningsMentioned: "❌ <c>{0}</c> nie posiada jeszcze żadnych ostrzeżeń!",
      noWarningsGroup: "❌ Żaden członek grupy nie posiada jeszcze ostrzeżeń!",
      list: "📜 Lista ostrzeżeń <c>{0}</c> (<c>{1}</c>):\n\n{2}",
      group: [
        "🧐 Ile ostrzeżeń mają członkowie grupy <c>{0}</c>?\n", //
        "{1}",
        "\n🧮 <c>{2}</c> z <c>{3}</c> członków tej grupy posiada ostrzeżenia, mają ich razem <c>{4}</c>.",
      ],
      groupNoName: [
        "🧐 Ile ostrzeżeń mają członkowie tej grupy?\n", //
        "{1}",
        "\n🧮 <c>{2}</c> z <c>{3}</c> członków tej grupy posiada ostrzeżenia, mają ich razem <c>{4}</c>.",
      ],
      deleted: "🗑 Administrator <c>{0}</c> usunął <c>{1}</c> ostrzeżenie o numerze <c>{2}</c>, pozostało {3} teraz <c>{4}</c> ostrzeżeń.",
    },
  },
};
