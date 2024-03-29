export default {
  global: {
    notEnabled:
      "Wygląda na to, że próbujesz skorzystać z bota na grupie która nie została dodana do listy dozwolonych w <c>panelu zarządzania Ambientem</c>. Poproś administratora bota o dodanie grupy lub stwórz własnego bota całkowicie za darmo na {0}",
    properBotIssues: [
      "Wygląda na to, że próbujesz skorzystać z bota który nie działa prawidłowo. Informacje o bocie włączonym na tej grupie:\n",
      "🤖 Nazwa bota: <c>{0}</c>",
      "🪪 Konto: <c>{1}</c>",
    ],
    wrongBot: [
      "Wygląda na to, że próbujesz skorzystać z niewłaściwego bota. Informacje o bocie włączonym na tej grupie:\n", //
      "🤖 Nazwa bota: <c>{0}</c>",
      "🪪 Konto: <c>{1}</c>",
    ],
    disabledManual: "♿ Bot <c>{0}</c> został wyłączony na tej grupie przez administratora!",
    disabledAuto: "💡 Bot <c>{0}</c> został wyłączony na tej grupie, ponieważ została ona dodana do dozwolonych grup w innym bocie.",
    enabled: "🔘 Bot <c>{0}</c> został włączony na tej grupie, wszyscy członkowie grupy mogą z niego teraz korzystać.",
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
    welcomeGroup:
      "👋🏻 Cześć! Nazywam się <c>Ambient</c>, jestem bezpiecznym, wydajnym i wielofunkcyjnym botem dla grup na Messengerze. Aby zobaczyć co potrafię, skorzystaj z komendy <c>{0}</c>.\n\n🤗 Masz pytania lub potrzebujesz pomocy? Znajdziesz ją na naszym <c>serwerze Discord</c>, gdzie również dowiesz się o nowościach związanych z Ambientem: {1}",
    mentionedNotMember: "❌ Oznaczony użytkownik nie jest członkiem tej grupy!",
    mentionedNotUser: "❌ Oznaczony użytkownik nigdy nie skorzystał z Ambienta.",
    commandNotFound: "❌ Nie odnaleziono komendy! Wpisz <c>{0}</c> aby uzyskać listę dostępnych komend.",
    unexpectedArgs: "❌ Ta komenda nie przyjmuje żadnych argumentów!",
    groupOnly: "❌ Z tej komendy można korzystać tylko w konwersacjach grupowych!",
    groupAdminOnly: "❌ Z tej komendy mogą korzystać tylko administratorzy grupy!",
    globalAdminOnly: "❌ Nie posiadasz uprawnień do korzystania z tej komendy!",
    premiumOnly: "❌ Ta komenda dostępna jest tylko w <c>💝 Ambiencie Premium</c>!",
    goodNight: "🥱 Dobranoc, <c>{0}</c>! 😴",
    happyBirthday: "🎂 Wszystkiego najlepszego, <c>{0}</c>! 🥳",
    outOfRange: "❌ Wybrana pozycja nie istnieje! (max. <c>{0}</c>, wybrano <c>{1}</c>)",
    botAdminRequired: "❌ Bot musi być administratorem grupy aby skorzystać z tej komendy.",
    nsfwNotAllowed: "❌ Treści NSFW nie są dostępne w tej grupie, sprawdź komendę <c>{0}</c>.",
    userBlacklisted: "🫨 Nie możesz korzystać z <c>Ambienta</c>, ponieważ znajdujesz się na <c>czarnej liście</c>.",
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
      empty: "❌ Musisz podać treść osiągnięcia! (max. <c>{0}</c> znaki)",
      mentions: "❌ Treść osiągnięcia nie może zawierać wzmianek!",
      tooLong: "❌ Treść osiągnięcia jest zbyt długa! (max. <c>{0}</c> znaki, podano <c>{1}</c>)",
      generating: "⏳ Trwa generowanie osiągnięcia...",
      done: "{0} Oto wygenerowane osiągnięcie:",
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
    meme: {
      searching: "⏳ Szukam losowego mema...",
      done: "{0} Oto losowy mem autorstwa <c>{1}</c> z <c>{2}</c>:",
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
      "👑 Konta Premium: <c>{10}</c>",
      "💝 Stan Premium: {11}",
      "🤖 Uruchomione boty: <c>{12}</c>",
      "✨ Jądro: <c>{13}</c>",
      "🔌 Klient: <c>{14}</c>",
      "📦 Instancja: <c>{15}</c>",
      "🪁 Środowisko jądra: <c>{16}</c>",
      "🧇 Środowisko klienta: <c>{17}</c>",
      "🏷 TypeScript: <c>{18}</c>",
      "🆙 Data aktualizacji: <c>{19}</c> {3} <c>{20}</c>",
      "🍒 Data powstania: <c>{21}</c>",
      "😼 Autor: <c>{22}</c>",
      "\n📱 Ten bot został stworzony <c>całkowicie za darmo</c> na stronie {23}, Ty również możesz to zrobić aby korzystać z niego na swoich grupach!",
      "\n🤗 Dołącz na nasz <c>serwer Discord</c> aby być na bieżąco z nowościami dotyczącymi <c>Ambienta</c>, a także uzyskać pomoc i odpowiedzi na pytania: {24}",
    ],
    group: {
      collecting: "⏳ Zbieram informacje o grupie...",
      done: [
        "{0} Informacje o grupie <c>{1}</c>:\n",
        "🆔 ID: <c>{2}</c>",
        "👥 Członkowie: <c>{3}</c>",
        "👮🏻‍♂️ Administratorzy: <c>{4}</c>",
        "♂️ Mężczyźni: <c>{5}</c>",
        "♀️ Kobiety: <c>{6}</c>",
        "🤗 Użytkownicy Ambienta: <c>{7}</c>",
        "🎨 Nazwa motywu: <c>{8}</c>",
        "💅🏻 Motyw dostępny: <c>{9}</c>",
        "🗂 Widoczne wiadomości: <c>{10}</c>",
        "🗃 Przetworzone wiadomości: <c>{11}</c>",
        "🤖 Wykonane komendy: <c>{12}</c>",
        "🐒 Liczba oznaczeń: <c>{13}</c>",
        "⚠ Liczba ostrzeżeń: <c>{14}</c>",
        "🧐 Zatwierdzanie członków: <c>{15}</c>",
        "⏳ Członkowie w kolejce: <c>{16}</c>",
        "🔞 NSFW: <c>{17}</c>",
        "🤐 Interakcje: <c>{18}</c>",
        "👀 Przywracanie wiadomości: <c>{19}</c>",
        "🔗 Link do zaproszenia: {20}",
        "🤓 Pierwsze użycie Ambienta: <c>{22}</c> {21} <c>{23}</c>",
      ],
    },
    help: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n",
        "✨ <c>{1} <nazwa komendy (opcjonalnie)></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1}</c>",
        "⭐ <c>{1} {2}</c>",
        "⭐ <c>{1} {3}</c>",
      ],
      list: [
        "{0} Lista dostępnych komend (<c>{1}</c>):\n",
        "🦊 Zwierzęta (<c>{2}</c>): {3}\n",
        "⚙️ Konfiguracja (<c>{4}</c>): {5}\n",
        "👾 Zabawa (<c>{6}</c>): {7}\n",
        "ℹ Informacje (<c>{8}</c>): {9}\n",
        "🔞 NSFW (<c>{10}</c>): {11}\n",
        "💝 Premium (<c>{12}</c>): {13}\n",
        "📸 Społecznościowe (<c>{14}</c>): {15}\n",
        "🛠️ Narzędzia (<c>{16}</c>): {17}\n",
        "✨ Aby zobaczyć szczegółowe informacje na temat wybranej komendy, wpisz <c>{18} <nazwa komendy></c>, np. <c>{18} {19}</c>.",
        "\n📱 Ten bot został stworzony <c>całkowicie za darmo</c> na stronie {20}, Ty również możesz to zrobić aby korzystać z niego na swoich grupach!",
        "\n🤗 Dołącz na nasz <c>serwer Discord</c> aby być na bieżąco z nowościami dotyczącymi <c>Ambienta</c>, a także uzyskać pomoc i odpowiedzi na pytania: {21}",
      ],
      about: [
        "{0} Informacje o komendzie <c>{1}</c>:\n", //
        "✏ Opis: <c>{2}</c>",
        "🗃 Kategoria: <c>{3}</c>",
        "⚓ Inne nazwy: {4}",
      ],
    },
    instances: "{0} Informacje o instancjach Ambienta:\n\n{1}",
    nodes: "{0} Informacje o węzłach Ambienta:\n\n{1}",
    top: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:", //
        "\n🤝🏻 <c>{1} konto</c> {2} Pokazuje top 15 użytkowników, którzy mają najstarsze konto w tej grupie",
        "\n🐒 <c>{1} oznaczenia</c> {2} Pokazuje top 15 użytkowników, którzy zostali najwięcej oznaczeni w tej grupie",
        "\n✉ <c>{1} wiadomości</c> {2} Pokazuje top 15 użytkowników, którzy wysłali najwięcej wiadomości w tej grupie",
        "\n🪄 <c>{1} komendy</c> {2} Pokazuje top 15 użytkowników, którzy wykonali najwięcej komend w tej grupie",
      ],
      account: [
        "🤝🏻 Top 15 użytkowników, którzy mają najstarsze konto w tej grupie:", //
        "\n{0}\n",
        "🧮 Jesteś <c>#{1}</c> w rankingu.",
      ],
      mentions: [
        "🐒 Top 15 użytkowników, którzy zostali najwięcej oznaczeni w tej grupie:", //
        "\n{0}\n",
        "🧮 Jesteś <c>#{1}</c> w rankingu.",
      ],
      messages: [
        "✉ Top 15 użytkowników, którzy wysłali najwięcej wiadomości w tej grupie:", //
        "\n{0}\n",
        "🧮 Jesteś <c>#{1}</c> w rankingu.",
      ],
      commands: [
        "🪄 Top 15 użytkowników, którzy wykonali najwięcej komend w tej grupie:", //
        "\n{0}\n",
        "🧮 Jesteś <c>#{1}</c> w rankingu.",
      ],
    },
    weather: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n",
        "✨ <c>{1} <lokalizacja lub @użytkownik (opcjonalne jeśli lokalizacja jest zapisana)></c>\n",
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
    boobs: {
      searching: "⏳ Szukam zdjęcia kobiecych piersi...",
      done: "{0} Oto losowe zdjęcie kobiecych piersi autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    butt: {
      searching: "⏳ Szukam zdjęcia kobiecych pośladków...",
      done: "{0} Oto losowe zdjęcie kobiecych pośladków autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    dick: {
      searching: "⏳ Szukam zdjęcia penisa...",
      done: "{0} Oto losowe zdjęcie penisa autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    feet: {
      searching: "⏳ Szukam zdjęcia kobiecych stóp...",
      done: "{0} Oto losowe zdjęcie kobiecych stóp autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    pussy: {
      searching: "⏳ Szukam zdjęcia waginy...",
      done: "{0} Oto losowe zdjęcie waginy autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    reddit: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <subreddit 1> <subreddit 2 (opcjonalnie)> ...</c>",
      ],
      notFound: "❌ Nie odnaleziono zdjęcia w podanych subredditach!",
      searching: "⏳ Szukam zdjęcia w podanych subredditach...",
      done: "{0} Oto losowe zdjęcie autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    rule34: {
      empty: "❌ Musisz podać tagi! (max. <c>{0}</c> znaki)",
      mentions: "❌ Tagi nie mogą zawierać wzmianek!",
      tooLong: "❌ Tagi są zbyt długie! (max. <c>{0}</c> znaki, podano <c>{1}</c>)",
      searching: "⏳ Szukam zdjęcia pasującego do podanych tagów...",
      notFound: "❌ Nie odnaleziono zdjęcia pasującego do podanych tagów!",
      done: "{0} Oto losowe zdjęcie autorstwa <c>{1}</c> z tagami <c>{2}</c>:",
    },
    guard: {
      status: [
        "{0} Konfiguracja funkcji ochrony grupy przed zmianą nazwy, zdjęcia, motywu i nicków:\n", //
        "🔔 Powiadomienia o zdarzeniach dla administracji grupy: <c>{1}</c>",
        "👉🏻 Blokada zmiany nicków innych członków: <c>{2}</c>",
        "🫡 Blokada zmiany własnego nicku: <c>{3}</c>",
        "🏷 Blokada zmiany nazwy grupy: <c>{6}</c>",
        "🖼️ Blokada zmiany zdjęcia grupy: <c>{4}</c>",
        "🎨 Blokada zmiany motywu grupy: <c>{5}</c>",
        "\n⚠ Uwaga! Ta funkcja dostępna jest tylko w <c>💝 Ambiencie Premium</c>!",
        "\n⚙ Aby zmienić ustawienia, wpisz <c>{7} zmień</c>.",
      ],
      firstSettingQuestion: [
        "🔔 Czy chcesz włączyć powiadomienia o zdarzeniach dla administracji grupy?\n",
        "1. <c>❌ nie</c>",
        "2. <c>✅ tak</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      secondSettingQuestion: [
        "👉🏻 Czy chcesz włączyć blokadę zmiany nicków innych członków?\n",
        "1. <c>❌ nie</c>",
        "2. <c>✅ tak</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      thirdSettingQuestion: [
        "🫡 Czy chcesz włączyć blokadę zmiany własnego nicku?\n",
        "1. <c>❌ nie</c>",
        "2. <c>✅ tak</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      fourthSettingQuestion: [
        "🏷 Czy chcesz włączyć blokadę zmiany nazwy grupy?\n",
        "1. <c>❌ nie</c>",
        "2. <c>✅ tak</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      fifthSettingQuestion: [
        "🖼️ Czy chcesz włączyć blokadę zmiany zdjęcia grupy?\n",
        "1. <c>❌ nie</c>",
        "2. <c>✅ tak</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      sixthSettingQuestion: [
        "🎨 Czy chcesz włączyć blokadę zmiany motywu grupy?\n",
        "1. <c>❌ nie</c>",
        "2. <c>✅ tak</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      saved: "✅ Ustawienia funkcji ochrony grupy przed zmianą nazwy, zdjęcia, motywu i nicków zostały pomyślnie zapisane!",
      premiumMissing: "⚠ Uwaga! Funkcja ochrony grupy przed zmianą nazwy, zdjęcia, motywu i nicków nie będzie działała, ponieważ wymaga ona posiadania <c>💝 Ambienta Premium</c>!",
    },
    invitation: {
      status: [
        "{0} Konfiguracja linku do zaproszenia do grupy:\n", //
        "🔗 Aktualny link: {1}",
        "🧮 Liczba użyć: <c>{2}</c>",
        "\n⚠ Uwaga! Ta funkcja dostępna jest tylko w <c>💝 Ambiencie Premium</c>!",
        "\n🆔 Aby włączyć lub zmienić link do zaproszenia do grupy, wpisz <c>{3} <nowe ID zaproszenia></c>.",
        "\n🚪 Aby wyłączyć link do zaproszenia do grupy, wpisz <c>{3} off</c>.",
      ],
      tooShort: "❌ Podane ID zaproszenia jest zbyt krótkie! (min. <c>{0}</c> znaki, podano <c>{1}</c>)",
      tooLong: "❌ Podane ID zaproszenia jest zbyt długie! (max. <c>{0}</c> znaki, podano <c>{1}</c>)",
      illegalCharacters: "❌ Podane ID zaproszenia zawiera niedozwolone znaki, możesz użyć tylko małych i dużych liter oraz cyfr.",
      alreadyUsed: "❌ Podane ID zaproszenia jest już zajęte!",
      saved: "✅ ID zaproszenia do grupy zostało pomyślnie ustawione na <c>{0}</c>! Aktualny link do dołączenia do grupy to {1}",
      disabled: "🚪 Funkcja zaproszeń do grupy została pomyślnie wyłączona!",
      groupAdminOnly: "❌ Ustawienia dotyczące zaproszenia do grupy mogą zostać zmienione tylko przez administratorów grupy!",
      premiumMissing: "⚠ Uwaga! Funkcja zaproszeń do grupy nie będzie działała, ponieważ wymaga ona posiadania <c>💝 Ambienta Premium</c>!",
      joinRequestedUser: [
        "🚪 <c>{0}</c> chce dołączyć do tej grupy korzystając z linku zaproszenia, sprawdź oczekujące prośby.\n", //
        "🤗 Ten użytkownik korzysta z Ambienta od <c>{3}</c> {2} <c>{4}</c>.",
      ],
      joinedUser: [
        "👋🏻 <c>{0}</c> dołączył{1} do tej grupy korzystając z linku zaproszenia.\n", //
        "🤗 Ten użytkownik korzysta z Ambienta od <c>{3}</c> {2} <c>{4}</c>.",
      ],
      joinRequestedNotUser: [
        "🚪 <c>{0}</c> chce dołączyć do tej grupy korzystając z linku zaproszenia, sprawdź oczekujące prośby.\n", //
        "🧐 Ten użytkownik nie korzysta z Ambienta.",
      ],
      joinedNotUser: [
        "👋🏻 <c>{0}</c> dołączył{1} do tej grupy korzystając z linku zaproszenia.\n", //
        "🧐 Ten użytkownik nie korzysta z Ambienta.",
      ],
    },
    premium: [
      "{0} Możesz wesprzeć <c>Ambienta</c> dowolną kwotą wysyłając przelew pod numer telefonu <c>{1}</c> korzystając z BLIKa. Jeśli chcesz, aby ten bot w nagrodę za wsparcie uzyskał dostęp do wyjątkowych funkcji dostępnych tylko dla użytkowników wersji Premium, wyślij jednorazowo co najmniej <c>{2}</c> podając w tytule lub odbiorcy identyfikator Premium <c>{3}</c>.\n",
      "⚠ Uwaga! Ważność Premium sumuje się - każde <c>{2}</c> to dodatkowe <c>{4}</c>. Premium zostanie nadane w ciągu <c>15 minut</c> od otrzymania przelewu, w razie pytań lub problemów dołącz na nasz <c>serwer Discord</c>: {5}\n",
      "💓 Obecny stan Premium: {6}\n",
      "👑 Obecne konta Premium: <c>{7}</c>\n",
      "✨ Potrzebne dane zostały wysłane poniżej w <c>oddzielnych wiadomościach</c> w celu łatwiejszego skopiowania ich.\n",
      "🥰 Dziękujemy za wspieranie <c>Ambienta</c>!",
    ],
    purge: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <liczba dni nieaktywności></c>",
      ],
      nothingToPurge: "❌ Wszyscy członkowie grupy byli aktywni przez ostatni{0} <c>{1}</c> {2}!",
      confirmation: [
        "ℹ W tej grupie znajduje się obecnie <c>{0}</c> użytkowników, po oczyszczeniu jej z <c>{1}</c> członk{2} któr{3}y by{4} nieaktywn{5} od co najmniej <c>{6}</c> {7}, zostanie ich <c>{8}</c>. Czy chcesz kontynuować?\n",
        "1. <c>✅ tak</c>",
        "2. <c>❌ nie</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranej opcji, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwszą opcję.",
      ],
      cancelled: "❌ Przerwano oczyszczanie grupy z nieaktywnych członków!",
      jailed: "❌ Poczekaj aż obecne czyszczenie zakończy się!",
      purging: "⏳ Trwa oczyszczanie grupy z <c>{0}</c> członk{1}...",
      done: "{0} Pomyślnie oczyszczono grupę z <c>{1}</c> członk{2}, usuwanie <c>{3}</c> członk{4} nie powiodło się.",
    },
    restoration: {
      status: [
        "{0} Konfiguracja funkcji przywracania usuniętych wiadomości:\n", //
        "🛡 Włączone: <c>{1}</c>",
        "👮🏻‍♂️ Przywracanie wiadomości administracji: <c>{2}</c>",
        "📎 Załączniki jako linki: <c>{3}</c>",
        "🔒 Przywracanie w wiadomościach prywatnych do administracji: <c>{4}</c>",
        "\n⚠ Uwaga! Ta funkcja dostępna jest tylko w <c>💝 Ambiencie Premium</c>!",
        "\n⚙ Aby zmienić ustawienia, wpisz <c>{5} zmień</c>.",
      ],
      firstSettingQuestion: [
        "🛡 Czy chcesz włączyć funkcję przywracania usuniętych wiadomości?\n",
        "1. <c>❌ nie</c>",
        "2. <c>✅ tak</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      secondSettingQuestion: [
        "👮🏻‍♂️ Czy wiadomości wysłane przez administratorów grupy również mają być przywracane?\n",
        "1. <c>❌ nie</c>",
        "2. <c>✅ tak</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      thirdSettingQuestion: [
        "📎 Czy załączniki z usuniętych wiadomości mają być przywracane w formie linków?\n",
        "1. <c>❌ nie</c> - załączniki z usuniętych wiadomości będą wysyłane w oryginalnej formie",
        "2. <c>✅ tak</c> - załączniki z usuniętych wiadomości będą wysyłane w formie linków do nich",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      fourthSettingQuestion: [
        "🔒 Czy wiadomości mają być przywracane w prywatnych wiadomościach do administratorów grupy?\n",
        "1. <c>❌ nie</c> - przywrócone wiadomości będą wysyłane na grupie w której zostały usunięte",
        "2. <c>✅ tak</c> - przywrócone wiadomości będą wysyłane w wiadomościach prywatnych do administratorów grupy",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      disabled: "📴 Funkcja przywracania usuniętych wiadomości została pomyślnie wyłączona!",
      saved: "✅ Ustawienia funkcji przywracania usuniętych wiadomości zostały pomyślnie zapisane!",
      premiumMissing: "⚠ Uwaga! Funkcja przywracania usuniętych wiadomości nie będzie działała, ponieważ wymaga ona posiadania <c>💝 Ambienta Premium</c>!",
      restored: [
        "👀 <c>{0}</c> usun{1} wiadomość!", //
        "\n💡 Użyj komendy <c>{2}</c> aby zobaczyć szczegółowe informacje na temat konfiguracji funkcji przywracania usuniętych wiadomości.\n",
        "📨 Data wysłania: <c>{4}</c> {3} <c>{5}</c>",
        "📮 Data usunięcia: <c>{6}</c> {3} <c>{7}</c>",
        "🕰 Usunięto po: {8}",
        "📜 Treść wiadomości: <c>{9}</c>",
      ],
      restoredAttachments: [
        "👀 <c>{0}</c> usun{1} wiadomość!", //
        "\n💡 Użyj komendy <c>{2}</c> aby zobaczyć szczegółowe informacje na temat konfiguracji funkcji przywracania usuniętych wiadomości.\n",
        "📨 Data wysłania: <c>{4}</c> {3} <c>{5}</c>",
        "📮 Data usunięcia: <c>{6}</c> {3} <c>{7}</c>",
        "🕰 Usunięto po: {8}",
        "📜 Treść wiadomości: <c>{9}</c>",
        "\n📎 Załączniki:\n{10}",
      ],
    },
    tts: {
      empty: "❌ Musisz podać treść nagrania głosowego! (max. <c>{0}</c> znaków)",
      mentions: "❌ Treść nagrania głosowego nie może zawierać wzmianek!",
      tooLong: "❌ Treść nagrania głosowego jest zbyt długa! (max. <c>{0}</c> znaków, podano <c>{1}</c>)",
      generating: "⏳ Trwa generowanie nagrania głosowego...",
      done: "{0} Oto wygenerowane nagranie głosowe:",
    },
    instagram: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <nazwa użytkownika></c>\n",
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
        "🔗 Profil: {9}",
        "🚪 Link zewnętrzny: {10}",
      ],
    },
    play: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n",
        "✨ <c>{1} <tytuł lub link></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1} kukon ostatni bal</c>",
        "⭐ <c>{1} youtu.be/-g9O5GDV33k</c>",
        "⭐ <c>{1} on.soundcloud.com/oZBMU</c>",
        "⭐ <c>{1} open.spotify.com/track/3WqlO1SqWksaYDyUKZw4Kn</c>",
      ],
      searching: "🔎 Szukam <c>{0}</c>...",
      unavailable: "❌ Wybrana pozycja jest niedostępna!",
      tooBig: "❌ Rozmiar wybranej pozycji jest zbyt duży! (<c>{0}</c>, maks. <c>{1}</c>)",
      preparing: "⏳ Przygotowuję <c>{0}</c>... (<c>{1}</c>, <c>{2}</c>)",
      done: "{0} {1}",
    },
    profile: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <@użytkownik (opcjonalnie)></c>",
      ],
      unavailable: "❌ Informacje o Twoim profilu są obecnie niedostępne!",
      unavailableMentioned: "❌ Informacje o profilu <c>{0}</c> są obecnie niedostępne!",
      collecting: "⏳ Zbieram informacje o <c>{0}</c>...",
      done: [
        "{0} Informacje o profilu Facebook <c>{1}</c>:\n",
        "📛 Alternatywna nazwa: <c>{2}</c>",
        "🆎 Nazwa użytkownika: <c>{3}</c>",
        "🆔 ID konta: <c>{4}</c>",
        "👗 Płeć: <c>{5}</c>",
        "🔗 Profil: {6}",
        "🏷 Nick w grupie: <c>{7}</c>",
        "🥰 Ma bota w znajomych: <c>{8}</c>",
        "👮🏻‍♂️ Administrator grupy: <c>{9}</c>",
        "🎂 Obchodzi dziś urodziny: <c>{10}</c>",
        "🌍 Lokalizacja: <c>{11}</c>",
        "🤓 Korzysta z Ambienta od: <c>{13}</c> {12} <c>{14}</c>",
        "🤖 Jest botem: <c>{15}</c>",
        "🖤 Czarna lista: <c>{16}</c>",
        "👑 Globalny administrator: <c>{17}</c>",
        "👅 Język w Ambiencie: <c>{18}</c>",
        "🎛️ Połączone Spotify: <c>{19}</c>",
        "🫣 Ostatnia aktywność: <c>{20}</c> {12} <c>{21}</c> (w tej grupie: <c>{22}</c>)",
        "🐒 Wzmianki: <c>{23}</c> (w tej grupie: <c>{24}</c>)",
        "✉ Wysłane wiadomości: <c>{25}</c> (w tej grupie: <c>{26}</c>)",
        "🪄 Wykonane komendy: <c>{27}</c> (w tej grupie: <c>{28}</c>)",
        "🔄 Zaktualizowano dane: <c>{29}</c> {12} <c>{30}</c>",
      ],
    },
    skin: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <nick gracza></c>",
      ],
      notFound: "❌ Gracz o podanym nicku nie istnieje!",
      searching: "⏳ Szukam skina gracza <c>{0}</c>...",
      done: "{0} Oto skin gracza <c>{1}</c>:",
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
      premiumRequired: "❌ Odtwarzanie utworów na swoim koncie Spotify przy użyciu Ambienta wymaga posiadania konta <c>💝 Spotify Premium</c>!",
      emptyResults: "❌ Nie znaleziono żadnych pozycji pasujących do Twojego zapytania!",
      selectionTimeout: "❌ Nie wybrano żadnej pozycji w ciągu <c>{0}</c> sekund! Spróbuj ponownie.",
      trackSelectionList: [
        "🕵🏽‍♂️ Wybierz pozycję, którą chcesz odtworzyć:\n",
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
      profile: [
        "🤠 Informacje o profilu Spotify <c>{0}</c>:\n",
        "🆎 Nazwa: <c>{1}</c>",
        "🌍 Kraj: <c>{2}</c>",
        "👀 Liczba obserwujących: <c>{3}</c>",
        "🔗 Profil: {4}",
        "💝 Spotify Premium: <c>{5}</c>",
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
    tellonym: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <nazwa użytkownika> <wiadomość (opcjonalnie)></c>",
      ],
      notFound: "❌ Podany użytkownik nie został odnaleziony!",
      tooFast: "❌ Wysyłasz wiadomości zbyt szybko, odczekaj chwilę przed wysłaniem kolejnej.",
      sent: "{0} Anonimowa wiadomość została pomyślnie wysłana do użytkownika <c>@{1}</c>!",
      about: [
        "{0} Informacje o użytkowniku <c>@{1}</c>:\n",
        "🫡 Pełna nazwa: <c>{2}</c>",
        "🆎 Biografia: <c>{3}</c>",
        "🤩 Obserwujących: <c>{4}</c>",
        "🕵🏻‍♂️ Anonimowych obserwujących: <c>{5}</c>",
        "👀 Obserwowanych: <c>{6}</c>",
        "✉ Wiadomości: <c>{7}</c>",
        "🌍 Kraj: <c>{8}</c>",
        "📱 Aktywny/a: <c>{9}</c>",
        "🔗 Profil: {10}",
        "\n{11}",
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
    twitter: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <link do filmiku z Twittera></c>",
      ],
      unavailable: "❌ Podany filmik z Twittera jest niedostępny!",
      tooBig: "❌ Rozmiar filmiku z Twittera jest zbyt duży! (<c>{0}</c>, maks. <c>{1}</c>)",
      done: [
        "{0} Oto Twój filmik z Twittera: <c>{1}</c> {2} <c>{3}</c>\n",
        "🫡 Autor: <c>{4}</c> {2} <c>@{5}</c>",
        "📅 Data: <c>{6}</c> {2} <c>{7}</c>",
        "💖 Polubienia: <c>{8}</c>",
        "💬 Komentarze: <c>{9}</c>",
        "🏹 Udostępnienia: <c>{10}</c>",
        "🔞 Ograniczenia wiekowe: <c>{11}</c>",
      ],
    },
    reel: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <link do rolki na Instagramie></c>",
      ],
      unavailable: "❌ Podana rolka jest niedostępna!",
      tooBig: "❌ Rozmiar podanej rolki jest zbyt duży! (<c>{0}</c>, maks. <c>{1}</c>)",
      done: [
        "{0} Oto Twoja rolka z Instagrama: <c>{1}</c> {2} <c>{3}</c>\n",
        "🫡 Autor: <c>{4}</c> {2} <c>@{5}</c>",
        "📅 Data: <c>{6}</c> {2} <c>{7}</c>",
        "💖 Polubienia: <c>{8}</c>",
        "💬 Komentarze: <c>{9}</c>",
      ],
    },
    adduser: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <link do profilu, nazwa użytkownika lub ID></c>",
      ],
      invalidBatch: "❌ Podane namiary na użytkownika są nieprawidłowe!",
      notFound: "❌ Podany użytkownik nie został odnaleziony!",
      alreadyMember: "❌ Podany użytkownik jest już członkiem tej grupy!",
      inQueue: "❌ Podany użytkownik znajduje się już w kolejce członków do dodania!",
      groupFull: "❌ Grupa posiada już maksymalną liczbę członków!",
      queueFull: "❌ Kolejka użytkowników do dołączenia jest już pełna!",
      unableToAdd: "❌ Ustawienia prywatności podanego użytkownika nie pozwalają na dodanie go do grupy!",
      queuedUser: [
        "🚪 <c>{0}</c> został{1} dodan{2} do kolejki, prośba o dołączenie musi zostać zaakceptowana przez administratora grupy.\n", //
        "🤗 Ten użytkownik korzysta z Ambienta od <c>{4}</c> {3} <c>{5}</c>.",
      ],
      addedUser: [
        "👋🏻 <c>{0}</c> został{1} pomyślnie dodan{2} do grupy!\n", //
        "🤗 Ten użytkownik korzysta z Ambienta od <c>{4}</c> {3} <c>{5}</c>.",
      ],
      queuedNotUser: [
        "🚪 <c>{0}</c> został{1} dodan{2} do kolejki, prośba o dołączenie musi zostać zaakceptowana przez administratora grupy.\n", //
        "🧐 Ten użytkownik nie korzysta z Ambienta.",
      ],
      addedNotUser: [
        "👋🏻 <c>{0}</c> został{1} pomyślnie dodan{2} do grupy!\n", //
        "🧐 Ten użytkownik nie korzysta z Ambienta.",
      ],
    },
    admin: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <@użytkownik></c>",
      ],
      donePromoted: "{0} Pomyślnie nadano <c>{1}</c> uprawnienia administratora!",
      doneDemoted: "🫥 Pomyślnie odebrano <c>{1}</c> uprawnienia administratora!",
    },
    attachments: {
      mustReplyToAttachments: "❌ Musisz odpowiedzieć na wiadomość zawierającą załączniki!",
      done: "{0} Oto lista załączników z wybranej wiadomości:\n\n{1}",
    },
    blacklist: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:",
        "\n👮🏼‍♂️ <c>{1} dodaj <@użytkownik, link lub ID></c> {2} Pozwala dodać użytkownika do czarnej listy",
        "\n🗑 <c>{1} usuń <@użytkownik, link lub ID></c> {2} Pozwala usunąć użytkownika z czarnej listy",
        "\n📜 <c>{1} lista</c> {2} Pokazuje listę użytkowników znajdujących się obecnie na czarnej liście",
      ],
      unableToAdd: "❌ <c>{0}</c> nie może zostać dodan{1} do czarnej listy!",
      alreadyAdded: "❌ <c>{0}</c> znajduje się już na czarnej liście!",
      notFound: "❌ <c>{0}</c> nie znajduje się na czarnej liście!",
      jailed: "❌ Poczekaj aż obecne operacje na czarnej liście zakończą się!",
      added: "✅ <c>{0}</c> został{1} pomyślnie dodan{2} do czarnej listy!",
      removed: "✅ <c>{0}</c> został{1} pomyślnie usunięt{2} z czarnej listy!",
      empty: "❌ Żaden użytkownik nie znajduje się obecnie na czarnej liście!",
      list: "{0} Lista użytkowników znajdujacych się obecnie na czarnej liście (<c>{1}</c>):\n\n{2}",
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
      tooLong: "❌ Podany nick jest zbyt długi! (max. <c>{0}</c> znaków, podano <c>{1}</c>)",
      doneSetOwn: "{0} Twój nick został pomyślnie ustawiony na <c>{1}</c>!",
      doneSetOther: "{0} Nick <c>{1}</c> został pomyślnie ustawiony na <c>{2}</c>!",
      doneChangedOwn: "{0} Twój nick został pomyślnie zmieniony z <c>{1}</c> na <c>{2}</c>!",
      doneChangedOther: "{0} Nick <c>{1}</c> został pomyślnie zmieniony z <c>{2}</c> na <c>{3}</c>!",
    },
    paste: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <tekst></c>",
      ],
      done: "{0} Oto Twoja wklejka: {1}",
    },
    screenshot: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n",
        "✨ <c>{1} <link do strony></c>\n",
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
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n",
        "✨ <c>{1} <link do skrócenia></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1} https://facebook.com/confirmed2iq</c>",
        "⭐ <c>{1} https://github.com/AmbientBot-xyz</c>",
        "⭐ <c>{1} https://reddit.com/r/linux</c>",
      ],
      done: "{0} Oto Twój skrócony link: {1}",
    },
    verify: {
      mustReplyToMessage: "❌ Musisz odpowiedzieć na wiadomość którą chcesz zweryfikować!",
      success: "{0} Ta wiadomość została wysłana przez Ambienta!",
      failed:
        "❓ Ta wiadomość nie została wysłana przez Ambienta!\n\nℹ️ Jeśli ta wiadomość została wysłana z konta które jest używane przez Ambienta, najprawdopodobniej oznacza to, że właściciel tego konta sam wysłał tą wiadomość ręcznie, lub została ona wysłana przez inne oprogramowanie.",
    },
    warning: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:",
        "\n👮🏼‍♂️ <c>{1} dodaj <@użytkownik> <powód></c> {2} Pozwala nadać użytkownikowi ostrzeżenie z wybranym powodem",
        "\n🗑 <c>{1} usuń <@użytkownik> <* lub numer></c> {2} Pozwala usunąć użytkownikowi wszystkie ostrzeżenia lub o wybranym numerze",
        "\n📜 <c>{1} lista <@użytkownik (opcjonalnie)></c> {2} Pozwala sprawdzić listę Twoich lub oznaczonego użytkownika ostrzeżeń",
        "\n🧐 <c>{1} grupa</c> {2} Pozwala sprawdzić liczbę ostrzeżeń poszczególnych członków grupy",
      ],
      reasonMentions: "❌ Powód ostrzeżenia nie może zawierać wzmianek!",
      maxWarningsReached: "❌ <c>{0}</c> posiada już maksymalną liczbę ostrzeżeń (<c>{1}</c>)!",
      reasonTooLong: "❌ Podany powód jest zbyt długi! (max. <c>{0}</c> znaków, podano <c>{1}</c>)",
      jailed: "❌ Poczekaj aż obecne operacje na ostrzeżeniach zakończą się!",
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
      deleted: "🗑 Administrator <c>{0}</c> usunął <c>{1}</c> ostrzeżenie o numerze <c>{2}</c>, pozostało {3} teraz <c>{4}</c> ostrzeżeń.",
      deletedAll: "🗑 Administrator <c>{0}</c> usunął <c>{1}</c> wszystkie ostrzeżenia.",
    },
  },
};
