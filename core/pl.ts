export default {
  global: {
    notEnabled:
      "Wygląda na to, że próbujesz skorzystać z Ambienta na grupie która nie została dodana do listy dozwolonych w *panelu zarządzania*. Poproś administratora bota o dodanie grupy lub stwórz własnego bota całkowicie za darmo na {0}",
    properBotIssues: [
      "Wygląda na to, że próbujesz skorzystać z bota który nie działa prawidłowo. Informacje o bocie włączonym na tej grupie:\n",
      "🤖 Nazwa bota: *{0}*",
      "🪪 Konto: *{1}*",
    ],
    wrongBot: [
      "Wygląda na to, że próbujesz skorzystać z niewłaściwego bota. Informacje o bocie włączonym na tej grupie:\n", //
      "🤖 Nazwa bota: *{0}*",
      "🪪 Konto: *{1}*",
    ],
    disabledManual: "🛑 Bot *{0}* został wyłączony na tej grupie przez administratora!",
    disabledAuto: "🖇️ Bot *{0}* został wyłączony na tej grupie, ponieważ została ona dodana do dozwolonych grup w innym bocie.",
    enabled: "⚡ Bot *{0}* został włączony na tej grupie, wszyscy członkowie grupy mogą z niego teraz korzystać.",
    eventError: [
      "💀 Ambient napotkał nieznany błąd podczas próby przetworzenia zdarzenia, spróbuj ponownie później. Zgłoszenie zostało automatycznie wysłane na nasz serwer Discord: {0}\n",
      "⚠️️ Nazwa: *{1}*",
      "📜 Opis: *{2}*",
      "📎 Szczegóły: {3}",
    ],
    execError: [
      "💀 Ambient napotkał nieznany błąd podczas próby wykonania komendy, spróbuj ponownie później. Zgłoszenie zostało automatycznie wysłane na nasz serwer Discord: {0}\n",
      "⚠️️ Nazwa: *{1}*",
      "📜 Opis: *{2}*",
      "📎 Szczegóły: {3}",
    ],
    welcome:
      "👋🏻 Cześć, *{0}*! Nazywam się *Ambient*, jestem bezpiecznym, wydajnym i wielofunkcyjnym botem dla grup na Messengerze. Aby zobaczyć co potrafię, skorzystaj z komendy *{1}*.\n\n🤗 Masz pytania lub potrzebujesz pomocy? Znajdziesz ją na naszym *serwerze Discord*, gdzie również dowiesz się o nowościach związanych z Ambientem: {2}",
    welcomeGroup:
      "👋🏻 Cześć! Nazywam się *Ambient*, jestem bezpiecznym, wydajnym i wielofunkcyjnym botem dla grup na Messengerze. Aby zobaczyć co potrafię, skorzystaj z komendy *{0}*.\n\n🤗 Masz pytania lub potrzebujesz pomocy? Znajdziesz ją na naszym *serwerze Discord*, gdzie również dowiesz się o nowościach związanych z Ambientem: {1}",
    mentionedNotMember: "❌ Oznaczony użytkownik nie jest członkiem tej grupy.",
    mentionedNotUser: "❌ Oznaczony użytkownik nigdy nie skorzystał z Ambienta.",
    commandNotFound: "❌ Nie odnaleziono komendy. Wpisz *{0}* aby uzyskać listę dostępnych komend.",
    unexpectedArgs: "❌ Ta komenda nie przyjmuje żadnych argumentów.",
    groupAdminOnly: "❌ Z tej komendy mogą korzystać tylko administratorzy grupy.",
    teamMemberOnly: "❌ Nie posiadasz uprawnień do korzystania z tej komendy.",
    goodNight: "🥱 Dobranoc, *{0}*! 😴",
    happyBirthday: "🎂 Wszystkiego najlepszego, *{0}*! 🥳",
    outOfRange: "❌ Wybrana pozycja nie istnieje! (maks. *{0}*, wybrano *{1}*)",
    botAdminRequired: "❌ Bot musi być administratorem grupy aby skorzystać z tej komendy.",
    nsfwNotAllowed: "❌ Treści NSFW nie są dostępne w tej grupie, sprawdź komendę *{0}*.",
    userBlacklisted: [
      "🫨 Nie możesz korzystać z *Ambienta*, ponieważ znajdujesz się na *czarnej liście*.\n",
      "🤨 Uważasz że to pomyłka? Dołącz na nasz *serwer Discord* i złóż odwołanie - przyjrzymy się Twojej sprawie: {0}",
    ],
    userPurplelisted: [
      "😤 W tej grupie znajdują się osoby, które zostały dodane do fioletowej listy. Korzystanie z Ambienta nie będzie możliwe do momentu usunięcia z konwersacji poniższych członków:\n",
      "{0}",
      "\n⏳ Grupa jest sprawdzana pod kątem obecności osób na fioletowej liście co *5 minut*. Kolejne sprawdzenie odbędzie się za *⌚ {1}* i *{2}*.",
    ],
    announcement: [
      "📣 Ogłoszenie od załogi Ambienta:\n",
      "{0}",
      "\n🤗 Dołącz na nasz *serwer Discord* aby być na bieżąco z nowościami dotyczącymi *Ambienta*, a także uzyskać pomoc i odpowiedzi na pytania: {1}",
    ],
    limitReached:
      "🚧 Osiągnięto dzienny limit komend do wykonania, aby korzystać ze wszystkich funkcjonalności *Ambienta* bez ograniczeń, wesprzyj projekt. Szczegóły znajdziesz pod komendą *{0}*.",
    premiumExtended: [
      "💎 {0}, ważność Twojego Premium została pomyślnie przedłużona!\n",
      "🧮 Liczba miesięcy: *{1}*",
      "📅 Data ważności: *{2}*",
      "\n🚀 Pamiętaj, że posiadając aktywne Premium możesz ulepszyć do *2* grup. Dzięki temu wszyscy ich członkowie będą mogli korzystać w nich ze wszystkich funkcji *Ambienta* bez ograniczeń, niezależnie od tego, czy posiadają aktywne Premium. W dowolnym momencie możesz przenieść swoje ulepszenia na inne grupy.",
      "\n✨ Aby zarządzać swoimi ulepszeniami grup, skorzystaj z komendy *{3}*.",
      "\n🫶🏻 Dziękujemy za wspieranie *Ambienta*!",
    ],
  },
  commands: {
    alpaca: {
      searching: "⏳ Szukam zdjęcia alpaki...",
      done: "{0} Oto losowe zdjęcie alpaki autorstwa *{1}* z *{2}*:",
    },
    beaver: {
      searching: "⏳ Szukam zdjęcia bobra...",
      done: "{0} Oto losowe zdjęcie bobra autorstwa *{1}* z *{2}*:",
    },
    capybara: {
      searching: "⏳ Szukam zdjęcia kapibary...",
      done: "{0} Oto losowe zdjęcie kapibary autorstwa *{1}* z *{2}*:",
    },
    cat: {
      searching: "⏳ Szukam zdjęcia kota...",
      done: "{0} Oto losowe zdjęcie kota autorstwa *{1}* z *{2}*:",
    },
    cow: {
      searching: "⏳ Szukam zdjęcia krowy...",
      done: "{0} Oto losowe zdjęcie krowy autorstwa *{1}* z *{2}*:",
    },
    dog: {
      searching: "⏳ Szukam zdjęcia psa...",
      done: "{0} Oto losowe zdjęcie psa autorstwa *{1}* z *{2}*:",
    },
    duck: {
      searching: "⏳ Szukam zdjęcia kaczki...",
      done: "{0} Oto losowe zdjęcie kaczki autorstwa *{1}* z *{2}*:",
    },
    fox: {
      searching: "⏳ Szukam zdjęcia lisa...",
      done: "{0} Oto losowe zdjęcie lisa autorstwa *{1}* z *{2}*:",
    },
    frog: {
      searching: "⏳ Szukam zdjęcia żaby...",
      done: "{0} Oto losowe zdjęcie żaby autorstwa *{1}* z *{2}*:",
    },
    hamster: {
      searching: "⏳ Szukam zdjęcia chomika...",
      done: "{0} Oto losowe zdjęcie chomika autorstwa *{1}* z *{2}*:",
    },
    hedgehog: {
      searching: "⏳ Szukam zdjęcia jeża...",
      done: "{0} Oto losowe zdjęcie jeża autorstwa *{1}* z *{2}*:",
    },
    horse: {
      searching: "⏳ Szukam zdjęcia konia...",
      done: "{0} Oto losowe zdjęcie konia autorstwa *{1}* z *{2}*:",
    },
    lizard: {
      searching: "⏳ Szukam zdjęcia jaszczurki...",
      done: "{0} Oto losowe zdjęcie jaszczurki autorstwa *{1}* z *{2}*:",
    },
    monkey: {
      searching: "⏳ Szukam zdjęcia małpy...",
      done: "{0} Oto losowe zdjęcie małpy autorstwa *{1}* z *{2}*:",
    },
    penguin: {
      searching: "⏳ Szukam zdjęcia pingwina...",
      done: "{0} Oto losowe zdjęcie pingwina autorstwa *{1}* z *{2}*:",
    },
    pigeon: {
      searching: "⏳ Szukam zdjęcia gołębia...",
      done: "{0} Oto losowe zdjęcie gołębia autorstwa *{1}* z *{2}*:",
    },
    rabbit: {
      searching: "⏳ Szukam zdjęcia królika...",
      done: "{0} Oto losowe zdjęcie królika autorstwa *{1}* z *{2}*:",
    },
    racoon: {
      searching: "⏳ Szukam zdjęcia szopa...",
      done: "{0} Oto losowe zdjęcie szopa autorstwa *{1}* z *{2}*:",
    },
    rat: {
      searching: "⏳ Szukam zdjęcia szczura...",
      done: "{0} Oto losowe zdjęcie szczura autorstwa *{1}* z *{2}*:",
    },
    shiba: {
      searching: "⏳ Szukam zdjęcia Shiba Inu...",
      done: "{0} Oto losowe zdjęcie Shiba Inu autorstwa *{1}* z *{2}*:",
    },
    snake: {
      searching: "⏳ Szukam zdjęcia węża...",
      done: "{0} Oto losowe zdjęcie węża autorstwa *{1}* z *{2}*:",
    },
    spider: {
      searching: "⏳ Szukam zdjęcia pająka...",
      done: "{0} Oto losowe zdjęcie pająka autorstwa *{1}* z *{2}*:",
    },
    turtle: {
      searching: "⏳ Szukam zdjęcia żółwia...",
      done: "{0} Oto losowe zdjęcie żółwia autorstwa *{1}* z *{2}*:",
    },
    unicorn: {
      searching: "⏳ Szukam zdjęcia jednorożca...",
      done: "{0} Oto losowe zdjęcie jednorożca autorstwa *{1}* z *{2}*:",
    },
    boosts: {
      summary: [
        "{0} Zarządzanie ulepszeniami grup:\n",
        "✨ Posiadając aktywne Premium możesz ulepszyć do *2* grup. Dzięki temu wszyscy ich członkowie będą mogli korzystać w nich ze wszystkich funkcji *Ambienta* bez ograniczeń, niezależnie od tego, czy posiadają aktywne Premium. W dowolnym momencie możesz przenieść swoje ulepszenia na inne grupy.",
        "\n💎 Twój stan Premium: {1}\n",
        "1️⃣ Pierwsza ulepszona grupa: *{2}*",
        "2️⃣ Druga ulepszona grupa: *{3}*",
        "\n✅ Aby aktywować ulepszenie na tej grupie, wpisz *{4} aktywuj*.",
        "\n🚫 Aby dezaktywować ulepszenie wybranej grupy, wpisz *{4} dezaktywuj 1/2*.",
        "\n💸 Aby dowiedzieć się więcej na temat wspierania *Ambienta* i zdobywania Premium, wpisz *{5}*.",
      ],
      premiumInactive: "❌ Aby ulepszać grupy musisz posiadać aktywne Premium!",
      alreadyBoosted: "❌ Ta grupa jest już przez Ciebie ulepszana!",
      noneLeft: "❌ Posiadasz już maksymalną liczbę ulepszonych grup! Dezaktywuj swoje ulepszenie na innej grupie i spróbuj ponownie.",
      successfullyBoosted:
        "✅ Pomyślnie aktywowano ulepszenie w tej grupie! Wszyscy jej członkowie mogą teraz korzystać w niej ze wszystkich funkcji *Ambienta* bez ograniczeń, niezależnie od tego, czy posiadają aktywne Premium.",
      positionEmpty: "❌ Nie posiadasz żadnej ulepszonej grupy na podanej pozycji!",
      boostDeactivated: "✅ Pomyślnie dezaktywowano ulepszenie w grupie *{0}*!",
    },
    interactions: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n",
        "✨ *{1} on/off*",
        "\n💡 Wybierz, czy Ambient ma reagować na niektóre słowa oraz automatycznie pobierać filmy z przesyłanych linków.",
        "\n🔧 Aktualny status interakcji: *{2}*",
      ],
      disabled: "🤐 Pomyślnie wyłączono interakcje w tej grupie, Ambient nie będzie reagował na żadne wiadomości poza komendami rozpoczynającymi się znakiem *{0}*.",
      enabled: "👉🏻 Pomyślnie włączono interakcje w tej grupie, Ambient będzie reagował na niektóre wiadomości poza komendami rozpoczynającymi się znakiem *{0}*.",
    },
    nsfw: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n",
        "✨ *{1} on/off*",
        "\n💡 Wybierz, czy komendy z kategorii NSFW mają być dostępne w tej grupie.",
        "\n🔧 Aktualny status NSFW: *{2}*",
      ],
      disabled: "😌 Pomyślnie wyłączono komendy NSFW w tej grupie!",
      enabled: "♨ Pomyślnie włączono komendy NSFW w tej grupie!",
    },
    privacy: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n",
        "✨ *{1} on/off*",
        "\n💡 Wybierz, czy Twoje dane mają być ukryte w globalnych rankingach.",
        "\n🔧 Aktualny status prywatności: *{2}*",
      ],
      disabled: "🙌🏻 Pomyślnie wyłączono tryb prywatności w globalnych rankingach!",
      enabled: "😎 Pomyślnie włączono tryb prywatności w globalnych rankingach!",
    },
    toggle: {
      summary: [
        "{0} Prawidłowe użycie komendy *{1}*:\n",
        "✨ *{1} <komenda>*",
        "\n💡 Przełącz możliwość korzystania z wybranych komend przez członków, którzy nie są administratorami tej grupy.",
        "\n🔧 Aktualnie zabronione komendy: *{2}*",
      ],
      unableToToggle: "❌ Nie możesz zabronić korzystania z komendy *{0}* członkom grupy.",
      toggledAllowed: "👌🏻 Pomyślnie zezwolono na korzystanie z komendy *{0}* wszystkim członkom grupy!",
      toggledDisallowed: "⛔️ Pomyślnie zabroniono korzystania z komendy *{0}* wszystkim członkom poza administratorami grupy!",
      disallowedExecute:
        "✋🏻 Administratorzy tej grupy nie zezwalają na korzystanie w niej z komendy *{0}*. Spróbuj skorzystać z tej komendy w innej grupie lub poproś administrację grupy o zmianę ustawień przy pomocy komendy *{1}*.",
    },
    bet: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n",
        "✨ *{1} <obstawiane 🪙> <przewidywana liczba>*\n",
        "✨ Jeśli wylosowana liczba będzie mniejsza od Twojej przewidywanej liczby, zachowasz swoje 🪙 i otrzymasz nagrodę. W przeciwnym wypadku stracisz obstawione 🪙.\n",
        "✨ Im mniejszą liczbę wybierzesz, tym większa będzie Twoja nagroda, jeśli wygrasz.\n",
        "✨ Przewidywana liczba nie może być mniejsza niż *1*, ani większa od *90*.\n",
        "💡 Przykłady:",
        "⭐ *{1} 420 69*",
        "⭐ *{1} 50 1*",
        "⭐ *{1} 1337 90*",
      ],
      notEnoughCoins: "❌ Nie posiadasz wystarczającej ilości 🪙! (potrzebne: *{1} 🪙* {0} posiadane: *{2} 🪙* {0} brakujące: *{3} 🪙*)",
      victory: [
        "📈 Wygrał{0}ś *{1} 🪙*, masz teraz *{2} 🪙*.\n", //
        "🎰 Wylosowana liczba: *{3}*",
      ],
      loss: [
        "📉 Przegrał{0}ś *{1} 🪙*, masz teraz *{2} 🪙*.\n", //
        "🎰 Wylosowana liczba: *{3}*",
      ],
    },
    catch: {
      missingFishingRod: "❌ Nie posiadasz aktywnej wędki! Użyj komendy *{0}* aby kupić nową.",
      missingBait: "❌ Nie posiadasz aktywnej przynęty! Użyj komendy *{0}* aby kupić nową.",
      escaped: "💨 Ryba uciekła! Spróbuj ponownie.",
      snapped: "⛓️‍💥 Linka zerwała się! Spróbuj ponownie.",
      trash: "🗑️ Złowił{0}ś *{1}*! Spróbuj ponownie.",
      success: "{0} Złowił{1}ś *🎏 {2}* ważąc{3} *⚖️ {4} kg* o wartości *{5} 🪙*! Masz teraz *{6} 🪙*.",
    },
    daily: {
      cooldown: "🙄 *{0}*, kolejne darmowe 🪙 będziesz {1} otrzymać za *⌚ {2}*, *{3}* i *{4}*.",
      received: [
        "{0} *{1}*, otrzymał{2}ś *{3}* darmowych 🪙! Posiadasz teraz *{4} 🪙*. Kolejne darmowe 🪙 będziesz {5} otrzymać za *⌚ 24 godziny*.\n",
        "🤑 Odbieraj regularnie darmowe monety aby zyskiwać bonus za każdy kolejny dodatkowy dzień!",
      ],
      receivedWithBonus: [
        "{0} *{1}*, otrzymał{2}ś *{3}* darmowych 🪙 (w tym dodatkowo *{4} 🪙* za odbieranie ich *{5}* dzień z rzędu)! Posiadasz teraz *{6} 🪙*. Kolejne darmowe 🪙 będziesz {7} otrzymać za *⌚ 24 godziny*.\n",
        "🤑 Odbieraj regularnie darmowe monety aby zyskiwać bonus za każdy kolejny dodatkowy dzień!",
      ],
    },
    inventory: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <@użytkownik (opcjonalnie)>*",
      ],
      done: [
        "{1} Informacje o ekwipunku *{2}*:",
        "\n🏦 _*OGÓLNE*_:",
        "👛 Majątek: *{3} 🪙*",
        "📅 Ostatnia dzienna nagroda: {4}",
        "🔥 Dni pod rząd: *{5}*",
        "\n🐟 _*ŁOWIECTWO*_:",
        "🎣 Wędka: *{6}*",
        "⏳ Pozostałe użycia wędki: *{7}*",
        "🪝 Przynęta: *{8}*",
        "♾️ Pozostałe użycia przynęty: *{9}*",
        "⚖️ Złowione ryby: *{10}*",
        "\n🎰 _*KASYNO*_:",
        "🎲 Ostatni zakład: {11}",
        "📈 Wygrane zakłady: *{12}*",
        "📉 Przegrane zakłady: *{13}*",
        "\n🥷🏼 _*NAPADY*_:",
        "💰 Udane napady: *{14}*",
        "🔒 Nieudane napady: *{15}*",
        "💥 Doznane napady: *{16}*",
        "🛡️ Udaremnione napady: *{17}*",
        "🕵️ Ostatni napad: {18}",
        "🦹 Ostatnio napadnięt{19}: {20}",
        "⛓️ Aresztowan{19}: {21}",
        "🧰 Ochrona przed napadem: *{22}*",
        "🎒 Wsparcie przy napadzie: *{23}*",
      ],
    },
    rank: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:",
        "\n🪙 *{1} monety globalnie/grupaglobalnie* {2} Pokazuje ranking {3} użytkowników, którzy mają najwięcej monet",
        "\n🔥 *{1} dni globalnie/grupaglobalnie* {2} Pokazuje ranking {3} użytkowników, którzy odbierają darmowe monety najwięcej dni z rzędu",
        "\n💰 *{1} udanenapady globalnie/grupaglobalnie* {2} Pokazuje ranking {3} użytkowników, którzy wykonali najwięcej udanych napadów",
        "\n🔒 *{1} nieudanenapady globalnie/grupaglobalnie* {2} Pokazuje ranking {3} użytkowników, którzy wykonali najwięcej nieudanych napadów",
        "\n💥 *{1} doznanenapady globalnie/grupaglobalnie* {2} Pokazuje ranking {3} użytkowników, którzy doznali najwięcej napadów",
        "\n🛡️ *{1} udaremnionenapady globalnie/grupaglobalnie* {2} Pokazuje ranking {3} użytkowników, którzy obronili się przed największą ilością napadów",
        "\n📈 *{1} wygranezakłady globalnie/grupaglobalnie* {2} Pokazuje ranking {3} użytkowników, którzy wygrali najwięcej zakładów",
        "\n📉 *{1} przegranezakłady globalnie/grupaglobalnie* {2} Pokazuje ranking {3} użytkowników, którzy przegrali najwięcej zakładów",
        "\n⚖️ *{1} złowioneryby globalnie/grupaglobalnie* {2} Pokazuje ranking {3} użytkowników, którzy złowili najwięcej ryb",
        "\n💬 Szukasz rankingu użytkowników w kontekście czatu? Sprawdź komendę *{4}*.",
      ],
      coinsGlobal: [
        "🪙 Top {0} użytkowników, którzy mają najwięcej monet globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      streakGlobal: [
        "🔥 Top {0} użytkowników, którzy odbierają darmowe monety najwięcej dni z rzędu globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      successfulRobberiesGlobal: [
        "💰 Top {0} użytkowników, którzy wykonali najwięcej udanych napadów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      failedRobberiesGlobal: [
        "🔒 Top {0} użytkowników, którzy wykonali najwięcej nieudanych napadów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      sufferedRobberiesGlobal: [
        "💥 Top {0} użytkowników, którzy doznali najwięcej napadów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      defendedRobberiesGlobal: [
        "🛡️ Top {0} użytkowników, którzy obronili się przed największą ilością napadów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      betVictoriesGlobal: [
        "📈 Top {0} użytkowników, którzy wygrali najwięcej zakładów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      betLossesGlobal: [
        "📉 Top {0} użytkowników, którzy przegrali najwięcej zakładów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      caughtFishGlobal: [
        "⚖️ Top {0} użytkowników, którzy złowili najwięcej ryb globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      coinsGroupGlobal: [
        "🪙 Top {0} członków, którzy mają najwięcej monet globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś *#{2}* w rankingu.",
      ],
      streakGroupGlobal: [
        "🔥 Top {0} członków, którzy odbierają darmowe monety najwięcej dni z rzędu globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś *#{2}* w rankingu.",
      ],
      successfulRobberiesGroupGlobal: [
        "💰 Top {0} członków, którzy wykonali najwięcej udanych napadów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś *#{2}* w rankingu.",
      ],
      failedRobberiesGroupGlobal: [
        "🔒 Top {0} członków, którzy wykonali najwięcej nieudanych napadów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś *#{2}* w rankingu.",
      ],
      sufferedRobberiesGroupGlobal: [
        "💥 Top {0} członków, którzy doznali najwięcej napadów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś *#{2}* w rankingu.",
      ],
      defendedRobberiesGroupGlobal: [
        "🛡️ Top {0} członków, którzy obronili się przed największą ilością napadów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś *#{2}* w rankingu.",
      ],
      betVictoriesGroupGlobal: [
        "📈 Top {0} członków, którzy wygrali najwięcej zakładów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś *#{2}* w rankingu.",
      ],
      betLossesGroupGlobal: [
        "📉 Top {0} członków, którzy przegrali najwięcej zakładów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś *#{2}* w rankingu.",
      ],
      caughtFishGroupGlobal: [
        "⚖️ Top {0} członków, którzy złowili najwięcej ryb globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś *#{2}* w rankingu.",
      ],
    },
    rob: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <@użytkownik>*",
      ],
      arrested: "👮🏼 Nie możesz teraz wykonać napadu, ponieważ jesteś aresztowan{0} jeszcze przez *⌚ {1}* i *{2}*.",
      cooldown: "🏴‍☠️ Kolejny napad będziesz {0} wykonać za *⌚ {1}* i *{2}*.",
      nothingNothingCaught:
        "🚨 Próbował{0}ś okraść *{1}*, któr{2} nie posiadał{3} żadnych zabezpieczeń z *{4} 🪙*. Niestety nie miał{0}ś żadnych pomocniczych narzędzi i został{0}ś przyłapan{5} przez policję. Zapłacił{0}ś grzywnę w wysokości *{6} 🪙* i został{7}ś aresztowan{5} na *⌚ godzinę*. Masz teraz *{8} 🪙*.",
      nothingNothingUncaught: "{0} *{1}* nie posiadał{2} żadnego zabezpieczenia i udało Ci się okraść {3} z *{4} 🪙* bez użycia dodatkowych narzędzi! Masz teraz *{5} 🪙*.",
      nothingHighProofBeerCaught:
        "🚨 Próbował{0}ś okraść *{1}*, któr{2} nie posiadał{3} żadnych zabezpieczeń z *{4} 🪙*. Niestety był{0}ś pod wpływem alkoholu i został{0}ś przyłapan{5} przez policję. Zapłacił{0}ś podwójną grzywnę w wysokości *{6} 🪙* i został{7}ś aresztowan{5} na *⌚ godzinę*. Masz teraz *{8} 🪙*.",
      nothingHighProofBeerUncaught: "{0} *{1}* nie posiadał{2} żadnego zabezpieczenia i udało Ci się okraść {3} z *{4} 🪙* pod wpływem alkoholu! Masz teraz *{5} 🪙*.",
      nothingBribeForThePoliceCaught:
        "🚨 Próbował{0}ś okraść *{1}*, któr{2} nie posiadał{3} żadnych zabezpieczeń z *{4} 🪙*. Niestety został{0}ś przyłapan{5} przez policję, ale ominęła Cię grzywna i aresztowanie, ponieważ wręczył{0}ś im łapówkę.",
      nothingBribeForThePoliceUncaught:
        "{0} *{1}* nie posiadał{2} żadnego zabezpieczenia i udało Ci się okraść {3} z *{4} 🪙*! Zachował{5}ś swoją łapówkę dla policji, ponieważ nie przydała się. Masz teraz *{6} 🪙*.",
      nothingFastCarCaught:
        "🚨 *{0}* nie posiadał{1} żadnego zabezpieczenia i udało Ci się okraść {2} z *{3} 🪙*! Został{4}ś przyłapan{5} przez policję, ale udało Ci się uciec z łupem dzięki szybkiemu samochodowi. Masz teraz *{6} 🪙*.",
      nothingFastCarUncaught:
        "{0} *{1}* nie posiadał{2} żadnego zabezpieczenia i udało Ci się okraść {3} z *{4} 🪙*! Zachował{5}ś szybki samochód, ponieważ nie przydał się. Masz teraz *{6} 🪙*.",
      steelPadlockNothingCaught:
        "🚨 Próbował{0}ś okraść *{1}* z *{2} 🪙* bez żadnych pomocnicznych narzędzi. Niestety został{0}ś przyłapan{3} przez policję próbując otworzyć kłódkę i został{0}ś aresztowan{3} na *⌚ godzinę*.",
      steelPadlockNothingUncaught: "🔒 Próbował{0}ś okraść *{1}* z *{2} 🪙* bez żadnych pomocnicznych narzędzi. Niestety napotkał{0}ś na kłódkę, której nie udało Ci się otworzyć.",
      steelPadlockHighProofBeerCaught:
        "🚨 Próbował{0}ś okraść *{1}* z *{2} 🪙* pod wpływem alkoholu. Niestety został{0}ś przyłapan{3} przez policję próbując otworzyć kłódkę i został{0}ś aresztowan{3} na *⌚ godzinę*.",
      steelPadlockHighProofBeerUncaught: "🔒 Próbował{0}ś okraść *{1}* z *{2} 🪙* pod wpływem alkoholu. Niestety napotkał{0}ś na kłódkę, której nie udało Ci się otworzyć.",
      steelPadlockBribeForThePoliceCaught:
        "🚨 Próbował{0}ś okraść *{1}* z *{2} 🪙*. Niestety został{0}ś przyłapan{3} przez policję próbując otworzyć kłódkę, ale nie został{0}ś aresztowan{3}, ponieważ wręczył{0}ś im łapówkę.",
      steelPadlockBribeForThePoliceUncaught:
        "🔒 Próbował{0}ś okraść *{1}* z *{2} 🪙*. Niestety napotkał{0}ś na kłódkę, której nie udało Ci się otworzyć. Zachował{0}ś swoją łapówkę dla policji, ponieważ nie przydała się.",
      steelPadlockFastCarCaught:
        "🚨 Próbował{0}ś okraść *{1}* z *{2} 🪙*. Niestety został{0}ś przyłapan{3} przez policję próbując otworzyć kłódkę, ale udało Ci się uciec dzięki szybkiemu samochodowi.",
      steelPadlockFastCarUncaught:
        "🔒 Próbował{0}ś okraść *{1}* z *{2} 🪙*. Niestety napotkał{0}ś na kłódkę, której nie udało Ci się otworzyć. Zachował{0}ś szybki samochód, ponieważ nie przydał się.",
      aggressiveDogNothingCaught:
        "🚨 Próbował{0}ś okraść *{1}* z *{2} 🪙* bez żadnych pomocnicznych narzędzi. Niestety został{0}ś przyłapan{3} przez policję próbując ominąć agresywnego psa i został{0}ś aresztowan{3} na *⌚ godzinę*.",
      aggressiveDogNothingUncaught:
        "🐶 Próbował{0}ś okraść *{1}* z *{2} 🪙* bez żadnych pomocnicznych narzędzi. Niestety został{0}ś zranion{3} przez agresywnego psa i musiał{0}ś zapłacić *{4} 🪙* za leczenie. Masz teraz *{5} 🪙*.",
      aggressiveDogHighProofBeerCaught:
        "🚨 Próbował{0}ś okraść *{1}* z *{2} 🪙* pod wpływem alkoholu. Niestety został{0}ś przyłapan{3} przez policję próbując ominąć agresywnego psa i został{0}ś aresztowan{3} na *⌚ godzinę*.",
      aggressiveDogHighProofBeerUncaught:
        "🐶 Próbował{0}ś okraść *{1}* z *{2} 🪙* pod wpływem alkoholu. Niestety został{0}ś zranion{3} przez agresywnego psa i musiał{0}ś zapłacić *{4} 🪙* za leczenie. Masz teraz *{5} 🪙*.",
      aggressiveDogBribeForThePoliceCaught:
        "🚨 Próbował{0}ś okraść *{1}* z *{2} 🪙*. Niestety został{0}ś przyłapan{3} przez policję próbując ominąć agresywnego psa, ale nie został{0}ś aresztowan{3}, ponieważ wręczył{0}ś im łapówkę.",
      aggressiveDogBribeForThePoliceUncaught:
        "🐶 Próbował{0}ś okraść *{1}* z *{2} 🪙*. Niestety został{0}ś zranion{3} przez agresywnego psa i musiał{0}ś zapłacić *{4} 🪙* za leczenie. Zachował{0}ś swoją łapówkę dla policji, ponieważ nie przydała się. Masz teraz *{5} 🪙*.",
      aggressiveDogFastCarCaught:
        "🚨 Próbował{0}ś okraść *{1}* z *{2} 🪙*. Niestety został{0}ś przyłapan{3} przez policję próbując ominąć agresywnego psa, ale udało Ci się uciec dzięki szybkiemu samochodowi.",
      aggressiveDogFastCarUncaught:
        "🐶 Próbował{0}ś okraść *{1}* z *{2} 🪙*. Niestety został{0}ś zaatakowan{3} przez agresywnego psa, ale udało Ci się uciec przed pogryzieniem dzięki szybkiemu samochodowi.",
      clusterBombNothingCaught:
        "🚨 Próbował{0}ś okraść *{1}* z *{2} 🪙* bez żadnych pomocnicznych narzędzi. Niestety został{0}ś przyłapan{3} przez policję próbując ominąć bombę kasetową i został{0}ś aresztowan{3} na *⌚ godzinę*.",
      clusterBombNothingUncaught:
        "💣 Próbował{0}ś okraść *{1}* z *{2} 🪙* bez żadnych pomocnicznych narzędzi. Niestety został{0}ś zranion{3} przez bombę kasetową i musiał{0}ś zapłacić *{4} 🪙* za leczenie. Masz teraz *{5} 🪙*.",
      clusterBombHighProofBeerCaught:
        "🚨 Próbował{0}ś okraść *{1}* z *{2} 🪙* pod wpływem alkoholu. Niestety został{0}ś przyłapan{3} przez policję próbując ominąć bombę kasetową i został{0}ś aresztowan{3} na *⌚ godzinę*.",
      clusterBombHighProofBeerUncaught:
        "💣 Próbował{0}ś okraść *{1}* z *{2} 🪙* pod wpływem alkoholu. Niestety został{0}ś zranion{3} przez bombę kasetową i musiał{0}ś zapłacić *{4} 🪙* za leczenie. Masz teraz *{5} 🪙*.",
      clusterBombBribeForThePoliceCaught:
        "🚨 Próbował{0}ś okraść *{1}* z *{2} 🪙*. Niestety został{0}ś przyłapan{3} przez policję próbując ominąć bombę kasetową, ale nie został{0}ś aresztowan{3}, ponieważ wręczył{0}ś im łapówkę.",
      clusterBombBribeForThePoliceUncaught:
        "💣 Próbował{0}ś okraść *{1}* z *{2} 🪙*. Niestety został{0}ś zranion{3} przez bombę kasetową i musiał{0}ś zapłacić *{4} 🪙* za leczenie. Zachował{0}ś swoją łapówkę dla policji, ponieważ nie przydała się. Masz teraz *{5} 🪙*.",
      clusterBombFastCarCaught:
        "🚨 Próbował{0}ś okraść *{1}* z *{2} 🪙*. Niestety został{0}ś przyłapan{3} przez policję próbując ominąć bombę kasetową, ale udało Ci się uciec dzięki szybkiemu samochodowi.",
      clusterBombFastCarUncaught:
        "💣 Próbował{0}ś okraść *{1}* z *{2} 🪙*. Niestety został{0}ś zaatakowan{3} przez bombę kasetową, ale udało Ci się uciec przed wybuchem dzięki szybkiemu samochodowi.",
    },
    shop: {
      summary: [
        "{0} Przedmioty i ułatwienia dostępne do zakupu:",
        "\n🎣 _*WĘDKI*_:",
        "1. {2} *{3}* {1} {4} 🪙",
        "2. {5} *{6}* {1} {7} 🪙",
        "3. {8} *{9}* {1} {10} 🪙",
        "\n🪝 _*PRZYNĘTY*_:",
        "4. {11} *{12}* {1} {13} 🪙",
        "5. {14} *{15}* {1} {16} 🪙",
        "6. {17} *{18}* {1} {19} 🪙",
        "\n🛡️ _*OCHRONA PRZED ZŁODZIEJAMI*_:",
        "7. {20} *{21}* {1} {22} 🪙",
        "8. {23} *{24}* {1} {25} 🪙",
        "9. {26} *{27}* {1} {28} 🪙",
        "\n🎒 _*WSPARCIE PRZY KRADZIEŻY*_:",
        "10. {29} *{30}* {1} {31} 🪙",
        "11. {32} *{33}* {1} {34} 🪙",
        "12. {35} *{36}* {1} {37} 🪙",
        "\n👛 Twój majątek: *{38} 🪙*",
        "\n💡 Aby sprawdzić szczegóły przedmiotu, wpisz *{39} info <numer>*. Aby go kupić, wpisz *{39} kup <numer>*.",
      ],
      invalidItemNumber: "❌ Podany numer przedmiotu jest nieprawidłowy!",
      sameTypeItemAlreadyActive: "❌ Nie możesz zakupić tej rzeczy, ponieważ posiadasz już aktywny przedmiot tego samego typu: *{0} {1}*",
      bought: "✅ Zakupił{0}ś *{1} {2}* za *{3} 🪙*! Masz teraz *{4} 🪙*.",
      details: [
        "{0} Informacje o przedmiocie *{1}*:\n", //
        "🏷️ Opis: *{2}*",
        "📐 Charakterystyka: *{3}*",
        "🛒 Cena: *{4}* 🪙",
        "\n💡 Aby kupić ten przedmiot, wpisz *{5} kup {6}*.",
      ],
    },
    tip: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} @użytkownik <liczba 🪙>*\n",
        "💡 Przykłady:",
        "⭐ *{1} @użytkownik 69*",
        "⭐ *{1} @użytkownik 4.20*",
        "⭐ *{1} @użytkownik 13.37*",
      ],
      done: "✅ Pomyślnie przekazał{0}ś *{1} 🪙* *{2}*! Masz teraz *{3} 🪙*.",
    },
    achievement: {
      empty: "❌ Musisz podać treść osiągnięcia! (maks. *{0}* znaki)",
      mentions: "❌ Treść osiągnięcia nie może zawierać wzmianek!",
      tooLong: "❌ Treść osiągnięcia jest zbyt długa! (maks. *{0}* znaki, podano *{1}*)",
      generating: "⏳ Trwa generowanie osiągnięcia...",
      done: "{0} Oto wygenerowane osiągnięcie:",
    },
    airplane: {
      searching: "⏳ Szukam zdjęcia samolotu...",
      done: "{0} Oto losowe zdjęcie samolotu autorstwa *{1}* z *{2}*:",
    },
    car: {
      searching: "⏳ Szukam zdjęcia samochodu...",
      done: "{0} Oto losowe zdjęcie samochodu autorstwa *{1}* z *{2}*:",
    },
    coinflip: {
      heads: "🦅 Orzeł",
      tails: "🪙 Reszka",
    },
    couple: {
      tooFewUsers: "❌ W grupie znajduje się zbyt mało członków którzy skorzystali z Ambienta!",
      done: "{0} Para najlepiej pasujących do siebie osób w tej grupie to *{1}* i *{2}* (*{3}%*) 💍",
    },
    diceroll: "{0} Wynik rzutu kostką: *{1}*",
    heart: {
      empty: "❌ Musisz podać treść serca! (maks. *{0}* znaków)",
      mentions: "❌ Treść serca nie może zawierać wzmianek!",
      tooLong: "❌ Treść serca jest zbyt długa! (maks. *{0}* znaków, podano *{1}*)",
      generating: "⏳ Trwa generowanie serca...",
      done: "{0} Oto wygenerowane serce:",
    },
    labubu: {
      searching: "⏳ Szukam zdjęcia Labubu...",
      done: "{0} Oto losowe zdjęcie Labubu autorstwa *{1}* z *{2}*:",
    },
    meme: {
      searching: "⏳ Szukam losowego mema...",
      done: "{0} Oto losowy mem autorstwa *{1}* z *{2}*:",
    },
    motorcycle: {
      searching: "⏳ Szukam zdjęcia motocyklu...",
      done: "{0} Oto losowe zdjęcie motocyklu autorstwa *{1}* z *{2}*:",
    },
    train: {
      searching: "⏳ Szukam zdjęcia pociągu...",
      done: "{0} Oto losowe zdjęcie pociągu autorstwa *{1}* z *{2}*:",
    },
    tvp: {
      empty: "❌ Musisz podać treść paska! (maks. *{0}* znaków)",
      mentions: "❌ Treść paska nie może zawierać wzmianek!",
      tooLong: "❌ Treść paska jest zbyt długa! (maks. *{0}* znaków, podano *{1}*)",
      generating: "⏳ Trwa generowanie paska...",
      done: "{0} Oto wygenerowany pasek:",
    },
    apod: {
      searching: "⏳ Szukam astronomicznego zdjęcia dnia...",
      doneVideoExternal: "{0} Oto astronomiczny filmik dnia pod tytułem *{1}*: {2}",
      doneVideo: "{0} Oto astronomiczny filmik dnia pod tytułem *{1}*:",
      done: "{0} Oto astronomiczne zdjęcie dnia pod tytułem *{1}*:",
    },
    bot: [
      "{0} Informacje o Ambiencie:",
      "\n📝 _*OGÓLNE*_:",
      "☯ RAM: *{1}/{2} GiB* {3} *{4}%*",
      "💾 NVMe: *{5}/{6} GiB* {3} *{7}%*",
      "🏓 Ping: *{8} ms*",
      "📦 Instancja: *{9}*",
      "🤖 Uruchomione boty: *{10}*",
      "🌡️ Średnia temperatura CPU: *{11}°C* {12}",
      "♨️ Średnia temperatura NVMe: *{13}°C* {14}",
      "💖 Liczba wspierających: *{15}*",
      "🍒 Data powstania: *{16}*",
      "\n✨ _*JĄDRO*_:",
      "🔖 Wersja: *{17}*",
      "🌳 Środowisko: *{18}*",
      "⌚ Czas działania: *{19}*",
      "🆙 Data aktualizacji: *{20}* {3} *{21}*",
      "\n🔌 _*KLIENT*_:",
      "🔖 Wersja: *{22}*",
      "🌳 Środowisko: *{23}*",
      "⌚ Czas działania: *{24}*",
      "🆙 Data aktualizacji: *{25}* {3} *{26}*",
      "\n🪙 _*EKONOMIA*_:",
      "🔖 Wersja: *{27}*",
      "🌳 Środowisko: *{28}*",
      "⌚ Czas działania: *{29}*",
      "🆙 Data aktualizacji: *{30}* {3} *{31}*",
      "\n📱 Ten bot został stworzony *całkowicie za darmo* na stronie {32}, Ty również możesz to zrobić aby korzystać z niego na swoich grupach!",
      "\n🤗 Dołącz na nasz *serwer Discord* aby być na bieżąco z nowościami dotyczącymi *Ambienta*, a także uzyskać pomoc i odpowiedzi na pytania: {33}",
    ],
    group: {
      collecting: "⏳ Zbieram informacje o grupie...",
      done: [
        "{0} Informacje o grupie *{1}*:\n",
        "🆔 ID: *{2}*",
        "👥 Członkowie: *{3}*",
        "👮🏻‍♂️ Administratorzy: *{4}*",
        "👨🏻 Mężczyźni: *{5}*",
        "👩🏼 Kobiety: *{6}*",
        "🤗 Użytkownicy Ambienta: *{7}*",
        "🎨 Nazwa motywu: *{8}*",
        "🗂 Widoczne wiadomości: *{9}*",
        "🗃 Przetworzone wiadomości: *{10}*",
        "🤖 Wykonane komendy: *{11}*",
        "🐒 Liczba oznaczeń: *{12}*",
        "⚠️ Liczba ostrzeżeń: *{13}*",
        "🧐 Zatwierdzanie członków: *{14}*",
        "⏳ Członkowie w kolejce: *{15}*",
        "🔞 NSFW: *{16}*",
        "🤐 Interakcje: *{17}*",
        "👀 Przywracanie wiadomości: *{18}*",
        "🔗 Link do zaproszenia: {19}",
        "🤓 Pierwsze użycie Ambienta: *{21}* {20} *{22}*",
      ],
    },
    help: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <nazwa komendy (opcjonalnie)>*\n",
        "💡 Przykłady:",
        "⭐ *{1}*",
        "⭐ *{1} {2}*",
        "⭐ *{1} {3}*",
      ],
      list: [
        "{0} Lista dostępnych komend (*{1}*):\n",
        "🦊 Zwierzęta (*{2}*): {3}\n",
        "⚙️ Konfiguracja (*{4}*): {5}\n",
        "🪙 Ekonomia (*{6}*): {7}\n",
        "👾 Zabawa (*{8}*): {9}\n",
        "ℹ️ Informacje (*{10}*): {11}\n",
        "🔞 NSFW (*{12}*): {13}\n",
        "📸 Społecznościowe (*{14}*): {15}\n",
        "🛠️ Narzędzia (*{16}*): {17}\n",
        "✨ Aby zobaczyć szczegółowe informacje na temat wybranej komendy, wpisz *{18} <nazwa komendy>*, np. *{18} {19}*.",
        "\n📱 Ten bot został stworzony *całkowicie za darmo* na stronie {20}, Ty również możesz to zrobić aby korzystać z niego na swoich grupach!",
        "\n🤗 Dołącz na nasz *serwer Discord* aby być na bieżąco z nowościami dotyczącymi *Ambienta*, a także uzyskać pomoc i odpowiedzi na pytania: {21}",
      ],
      about: [
        "{0} Informacje o komendzie *{1}*:\n", //
        "✏ Opis: *{2}*",
        "🗃 Kategoria: *{3}*",
        "⚓ Inne nazwy: {4}",
      ],
    },
    instances: "{0} Informacje o instancjach Ambienta:\n\n{1}",
    nodes: "{0} Informacje o węzłach Ambienta:\n\n{1}",
    rules: {
      empty: [
        "{0} Zasady grupy nie są obecnie ustawione.", //
        "\n📝 Aby ustawić zasady grupy, wpisz *{1} <treść zasad>*.",
      ],
      view: [
        "{0} Oto zasady grupy *{1}* określone przez administrację:\n",
        "{2}",
        "\n📝 Aby zmienić zasady grupy, wpisz *{3} <treść nowych zasad>*.",
        "\n🗑 Aby usunąć zasady grupy, wpisz *{3} usuń*.",
      ],
      mentions: "❌ Treść zasad grupy nie może zawierać wzmianek!",
      removed: "✅ Pomyślnie usunięto zasady grupy!",
      tooLong: "❌ Treść zasad grupy jest zbyt długa! (maks. *{0}* znaków, podano *{1}*)",
      updated: "✅ Pomyślnie zaktualizowano zasady grupy!",
    },
    team: [
      "{0} Lista członków załogi Ambienta:\n",
      "{1}",
      "\n🤗 Chcesz zostać jednym z nas? Wystarczy, że wykażesz się aktywnością i pomocą dla innych użytkowników na naszym *serwerze Discord*, a odezwiemy się do Ciebie gdy zauważymy Twoje starania: {2}",
    ],
    top: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:",
        "\n✉ *{1} wiadomości grupa/globalnie/grupaglobalnie* {2} Pokazuje top {3} użytkowników, którzy wysłali najwięcej wiadomości",
        "\n🪄 *{1} komendy grupa/globalnie/grupaglobalnie* {2} Pokazuje top {3} użytkowników, którzy wykonali najwięcej komend",
        "\n🐒 *{1} oznaczenia grupa/globalnie/grupaglobalnie* {2} Pokazuje top {3} użytkowników, którzy zostali najwięcej oznaczeni",
        "\n🪙 Szukasz top użytkowników w kontekście ekonomii? Sprawdź komendę *{4}*.",
      ],
      messagesGroup: [
        "✉ Top {0} członków, którzy wysłali najwięcej wiadomości w tej grupie:", //
        "\n{1}\n",
        "🧮 Jesteś *#{2}* w rankingu.",
      ],
      commandsGroup: [
        "🪄 Top {0} członków, którzy wykonali najwięcej komend w tej grupie:", //
        "\n{1}\n",
        "🧮 Jesteś *#{2}* w rankingu.",
      ],
      mentionsGroup: [
        "🐒 Top {0} członków, którzy zostali najwięcej oznaczeni w tej grupie:", //
        "\n{1}\n",
        "🧮 Jesteś *#{2}* w rankingu.",
      ],
      messagesGlobal: [
        "✉ Top {0} użytkowników, którzy wysłali najwięcej wiadomości globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      commandsGlobal: [
        "🪄 Top {0} użytkowników, którzy wykonali najwięcej komend globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      mentionsGlobal: [
        "🐒 Top {0} użytkowników, którzy zostali najwięcej oznaczeni globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      messagesGroupGlobal: [
        "✉ Top {0} członków, którzy wysłali najwięcej wiadomości globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś *#{2}* w rankingu.",
      ],
      commandsGroupGlobal: [
        "🪄 Top {0} członków, którzy wykonali najwięcej komend globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś *#{2}* w rankingu.",
      ],
      mentionsGroupGlobal: [
        "🐒 Top {0} członków, którzy zostali najwięcej oznaczeni globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś *#{2}* w rankingu.",
      ],
    },
    weather: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n",
        "✨ *{1} <lokalizacja lub @użytkownik (opcjonalne jeśli lokalizacja jest zapisana)>*\n",
        "💡 Przykłady:",
        "⭐ *{1}*",
        "⭐ *{1} Leszno*",
        "⭐ *{1} Zielona Góra, PL*",
        "⭐ *{1} @użytkownik*",
      ],
      notSetMentioned: "❌ *{0}* nie podał{1} swojej lokalizacji!",
      notFound: "❌ Podana lokalizacja nie została odnaleziona!",
      done: [
        "{0} Aktualna pogoda w lokalizacji *{1}*:\n",
        "🌡️ Temperatura: *{2}°C* {3}",
        "✋🏻 Odczuwalna: *{4}°C* {5}",
        "🌃 Niebo: *{6}* {7}",
        "🎈 Ciśnienie: *{8} hPa*",
        "💨 Prędkość wiatru: *{9} km/h*",
        "💧 Wilgotność: *{10}%*",
        "☁️ Zachmurzenie: *{11}%*",
        "🌅 Wschód słońca: *{12}*",
        "🌇 Zachód słońca: *{13}*",
      ],
    },
    boobs: {
      searching: "⏳ Szukam zdjęcia piersi...",
      done: "{0} Oto losowe zdjęcie piersi autorstwa *{1}* z *{2}*:",
    },
    butt: {
      searching: "⏳ Szukam zdjęcia pośladków...",
      done: "{0} Oto losowe zdjęcie pośladków autorstwa *{1}* z *{2}*:",
    },
    dick: {
      searching: "⏳ Szukam zdjęcia penisa...",
      done: "{0} Oto losowe zdjęcie penisa autorstwa *{1}* z *{2}*:",
    },
    feet: {
      searching: "⏳ Szukam zdjęcia kobiecych stóp...",
      done: "{0} Oto losowe zdjęcie kobiecych stóp autorstwa *{1}* z *{2}*:",
    },
    konachan: {
      searching: "⏳ Szukam zdjęcia Konachan...",
      done: "{0} Oto losowe zdjęcie Konachan:",
    },
    muscles: {
      searching: "⏳ Szukam zdjęcia mięśni...",
      done: "{0} Oto losowe zdjęcie mięśni autorstwa *{1}* z *{2}*:",
    },
    pussy: {
      searching: "⏳ Szukam zdjęcia waginy...",
      done: "{0} Oto losowe zdjęcie waginy autorstwa *{1}* z *{2}*:",
    },
    reddit: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <subreddit 1> <subreddit 2 (opcjonalnie)> ...*",
      ],
      notFound: "❌ Nie odnaleziono zdjęcia w podanych subredditach!",
      searching: "⏳ Szukam zdjęcia w podanych subredditach...",
      done: "{0} Oto losowe zdjęcie autorstwa *{1}* z *{2}*:",
    },
    rule34: {
      empty: "❌ Musisz podać tagi! (maks. *{0}* znaki)",
      mentions: "❌ Tagi nie mogą zawierać wzmianek!",
      tooLong: "❌ Tagi są zbyt długie! (maks. *{0}* znaki, podano *{1}*)",
      searching: "⏳ Szukam zdjęcia pasującego do podanych tagów...",
      notFound: "❌ Nie odnaleziono zdjęcia pasującego do podanych tagów!",
      done: "{0} Oto losowe zdjęcie autorstwa *{1}* z tagami *{2}*:",
    },
    veins: {
      searching: "⏳ Szukam zdjęcia żył...",
      done: "{0} Oto losowe zdjęcie żył autorstwa *{1}* z *{2}*:",
    },
    yandere: {
      searching: "⏳ Szukam zdjęcia Yandere...",
      done: "{0} Oto losowe zdjęcie Yandere autorstwa *{1}* z *{2}*:",
    },
    guard: {
      status: [
        "{0} Konfiguracja funkcji ochrony grupy przed zmianą nazwy, zdjęcia, motywu i nicków:\n",
        "🔔 Powiadomienia o zdarzeniach dla administracji grupy: *{1}*",
        "👉🏻 Blokada zmiany nicków innych członków: *{2}*",
        "🫡 Blokada zmiany własnego nicku: *{3}*",
        "🏷 Blokada zmiany nazwy grupy: *{6}*",
        "🖼️ Blokada zmiany zdjęcia grupy: *{4}*",
        "🎨 Blokada zmiany motywu grupy: *{5}*",
        "\n⚙ Aby zmienić ustawienia, wpisz *{7} zmień*.",
      ],
      firstSettingQuestion: [
        "🔔 Czy chcesz włączyć powiadomienia o zdarzeniach dla administracji grupy?\n",
        "1. *❌ nie*",
        "2. *✅ tak*",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      secondSettingQuestion: [
        "👉🏻 Czy chcesz włączyć blokadę zmiany nicków innych członków?\n",
        "1. *❌ nie*",
        "2. *✅ tak*",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      thirdSettingQuestion: [
        "🫡 Czy chcesz włączyć blokadę zmiany własnego nicku?\n",
        "1. *❌ nie*",
        "2. *✅ tak*",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      fourthSettingQuestion: [
        "🏷 Czy chcesz włączyć blokadę zmiany nazwy grupy?\n",
        "1. *❌ nie*",
        "2. *✅ tak*",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      fifthSettingQuestion: [
        "🖼️ Czy chcesz włączyć blokadę zmiany zdjęcia grupy?\n",
        "1. *❌ nie*",
        "2. *✅ tak*",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      sixthSettingQuestion: [
        "🎨 Czy chcesz włączyć blokadę zmiany motywu grupy?\n",
        "1. *❌ nie*",
        "2. *✅ tak*",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      saved: "✅ Ustawienia funkcji ochrony grupy przed zmianą nazwy, zdjęcia, motywu i nicków zostały pomyślnie zapisane!",
    },
    invitation: {
      status: [
        "{0} Konfiguracja linku do zaproszenia do grupy:\n",
        "🔗 Aktualny link: {1}",
        "🧮 Liczba użyć: *{2}*",
        "\n🆔 Aby włączyć lub zmienić link do zaproszenia do grupy, wpisz *{3} <nowe ID zaproszenia>*.",
        "\n🚪 Aby wyłączyć link do zaproszenia do grupy, wpisz *{3} off*.",
      ],
      tooShort: "❌ Podane ID zaproszenia jest zbyt krótkie! (min. *{0}* znaki, podano *{1}*)",
      tooLong: "❌ Podane ID zaproszenia jest zbyt długie! (maks. *{0}* znaki, podano *{1}*)",
      illegalCharacters: "❌ Podane ID zaproszenia zawiera niedozwolone znaki, możesz użyć tylko małych i dużych liter oraz cyfr.",
      alreadyUsed: "❌ Podane ID zaproszenia jest już zajęte!",
      saved: "✅ ID zaproszenia do grupy zostało pomyślnie ustawione na *{0}*! Aktualny link do dołączenia do grupy to {1}",
      disabled: "🚪 Funkcja zaproszeń do grupy została pomyślnie wyłączona!",
      groupAdminOnly: "❌ Ustawienia dotyczące zaproszenia do grupy mogą zostać zmienione tylko przez administratorów grupy!",
      joinRequestedUser: [
        "🚪 *{0}* chce dołączyć do tej grupy korzystając z linku zaproszenia, sprawdź oczekujące prośby.\n", //
        "🤗 Ten użytkownik korzysta z Ambienta od *{3}* {2} *{4}*.",
      ],
      joinedUser: [
        "👋🏻 *{0}* dołączył{1} do tej grupy korzystając z linku zaproszenia.\n", //
        "🤗 Ten użytkownik korzysta z Ambienta od *{3}* {2} *{4}*.",
      ],
      joinRequestedNotUser: [
        "🚪 *{0}* chce dołączyć do tej grupy korzystając z linku zaproszenia, sprawdź oczekujące prośby.\n", //
        "🧐 Ten użytkownik nie korzysta z Ambienta.",
      ],
      joinedNotUser: [
        "👋🏻 *{0}* dołączył{1} do tej grupy korzystając z linku zaproszenia.\n", //
        "🧐 Ten użytkownik nie korzysta z Ambienta.",
      ],
    },
    premium: [
      "{0} Możesz wesprzeć *Ambienta*, aby otrzymać Premium i korzystać ze wszystkich funkcji bez ograniczeń - we wszystkich botach stworzonych w systemie *Ambienta* i na wszystkich grupach. Mając Premium, możesz także ulepszać do *2* grup jednocześnie, dzięki czemu wszyscy ich członkowie również będą mogli korzystać w nich ze wszystkich funkcji *Ambienta* bez ograniczeń, niezależnie od tego, czy posiadają Premium.",
      "\n💖 Aktualna liczba wspierających: *{1}*",
      "\n💎 Twój stan Premium: {2}",
      "\n🔗 Twój link do szczegółów wsparcia i Premium: {3}",
      "\n🤗 Masz pytania lub potrzebujesz pomocy? Dołącz na nasz *serwer Discord*: {4}",
      "\n🫶🏻 Dziękujemy za wspieranie *Ambienta*!",
    ],
    purge: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <liczba dni nieaktywności>*",
      ],
      nothingToPurge: "❌ Wszyscy członkowie grupy byli aktywni przez ostatni{0} *{1}* {2}!",
      confirmation: [
        "ℹ️ W tej grupie znajduje się obecnie *{0}* użytkowników, po oczyszczeniu jej z *{1}* członk{2} któr{3}y by{4} nieaktywn{5} od co najmniej *{6}* {7}, zostanie ich *{8}*. Czy chcesz kontynuować?\n",
        "1. *✅ tak*",
        "2. *❌ nie*",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranej opcji, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwszą opcję.",
      ],
      cancelled: "❌ Przerwano oczyszczanie grupy z nieaktywnych członków!",
      jailed: "❌ Poczekaj aż obecne czyszczenie zakończy się!",
      purging: "⏳ Trwa oczyszczanie grupy z *{0}* członk{1}...",
      done: "{0} Pomyślnie oczyszczono grupę z *{1}* członk{2}, usuwanie *{3}* członk{4} nie powiodło się.",
    },
    restoration: {
      status: [
        "{0} Konfiguracja funkcji przywracania usuniętych wiadomości:\n",
        "🛡 Włączone: *{1}*",
        "👮🏻‍♂️ Przywracanie wiadomości administracji: *{2}*",
        "📎 Załączniki jako linki: *{3}*",
        "👨‍👩‍👧‍👦 Grupa do przywracania: {4}",
        "\n⚙ Aby zmienić ustawienia, wpisz *{5} zmień*.",
      ],
      firstSettingQuestion: [
        "🛡 Czy chcesz włączyć funkcję przywracania usuniętych wiadomości?\n",
        "1. *❌ nie*",
        "2. *✅ tak*",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      secondSettingQuestion: [
        "👮🏻‍♂️ Czy wiadomości wysłane przez administratorów grupy również mają być przywracane?\n",
        "1. *❌ nie*",
        "2. *✅ tak*",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      thirdSettingQuestion: [
        "📎 Czy załączniki z usuniętych wiadomości mają być przywracane w formie linków?\n",
        "1. *❌ nie* - załączniki z usuniętych wiadomości będą wysyłane w oryginalnej formie",
        "2. *✅ tak* - załączniki z usuniętych wiadomości będą wysyłane w formie linków do nich",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwsze ustawienie.",
      ],
      fourthSettingQuestion: [
        "👨‍👩‍👧‍👦 Wybierz grupę, na którą mają być przywracane wiadomości usunięte w tej grupie:\n",
        "{0}",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranej grupie, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać obecną grupę.",
      ],
      disabled: "📴 Funkcja przywracania usuniętych wiadomości została pomyślnie wyłączona!",
      saved: "✅ Ustawienia funkcji przywracania usuniętych wiadomości zostały pomyślnie zapisane!",
      threadUnavailable:
        "❌ Nie można przywrócić usuniętej wiadomości do skonfigurowanej grupy, ponieważ jest ona niedostępna lub bot nie jest jej członkiem. Skorzystaj z komendy *{0}* aby zmienić grupę do przywracania usuniętych wiadomości lub wyłączyć tę funkcję.",
      restored: [
        "👀 *{0}* usun{1} wiadomość w grupie *{2}*!",
        "\n💡 Użyj komendy *{3}* aby zobaczyć szczegółowe informacje na temat konfiguracji funkcji przywracania usuniętych wiadomości.\n",
        "📨 Data wysłania: *{5}* {4} *{6}*",
        "📮 Data usunięcia: *{7}* {4} *{8}*",
        "🕰 Usunięto po: {9}",
        "📜 Treść wiadomości: *{10}*",
      ],
      restoredAttachments: [
        "👀 *{0}* usun{1} wiadomość w grupie *{2}*!",
        "\n💡 Użyj komendy *{3}* aby zobaczyć szczegółowe informacje na temat konfiguracji funkcji przywracania usuniętych wiadomości.\n",
        "📨 Data wysłania: *{5}* {4} *{6}*",
        "📮 Data usunięcia: *{7}* {4} *{8}*",
        "🕰 Usunięto po: {9}",
        "📜 Treść wiadomości: *{10}*",
        "\n📎 Załączniki:\n{11}",
      ],
    },
    roblox: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <nazwa użytkownika>*\n",
        "💡 Przykłady:",
        "⭐ *{1} dxmqa_Ok*",
        "⭐ *{1} Wolfpaq*",
        "⭐ *{1} wxqa0a*",
      ],
      notFound: "❌ Podana nazwa użytkownika nie została odnaleziona!",
      collecting: "⏳ Zbieram informacje o użytkowniku *@{0}*...",
      done: [
        "{0} Informacje o profilu *@{1}* w Roblox:\n",
        "🫡 Pełna nazwa: *{2}*",
        "🆎 Biografia: *{3}*",
        "💎 Roblox Premium: *{4}*",
        "🚫 Zbanowane: *{5}*",
        "🤔 Zweryfikowane: *{6}*",
        "🤩 Obserwujących: *{7}*",
        "👀 Obserwowanych: *{8}*",
        "🫂 Znajomi: *{9}*",
        "🔗 Profil: {10}",
        "➕ Data utworzenia konta: *{12}* {11} *{13}*",
        "👻 Data ostatniej aktywności: *{14}* {11} *{15}*",
        "🎭 Poprzednie nazwy: {16}",
        "🙋🏼‍♀️ Teraz online: *{17}*",
        "🎮 {18} aktywność: {19}",
      ],
    },
    tts: {
      empty: "❌ Musisz podać treść nagrania głosowego! (maks. *{0}* znaków)",
      mentions: "❌ Treść nagrania głosowego nie może zawierać wzmianek!",
      tooLong: "❌ Treść nagrania głosowego jest zbyt długa! (maks. *{0}* znaków, podano *{1}*)",
      generating: "⏳ Trwa generowanie nagrania głosowego...",
      done: "{0} Oto wygenerowane nagranie głosowe:",
    },
    instagram: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <nazwa użytkownika>*\n",
        "💡 Przykłady:",
        "⭐ *{1} klaudixiara*",
        "⭐ *{1} negatywny*",
        "⭐ *{1} pqmidor*",
      ],
      notFound: "❌ Podana nazwa użytkownika nie została odnaleziona!",
      collecting: "⏳ Zbieram informacje o użytkowniku *@{0}*...",
      done: [
        "{0} Informacje o profilu *@{1}* na Instagramie:\n",
        "🫡 Pełna nazwa: *{2}*",
        "🆎 Biografia: *{3}*",
        "🔒 Prywatne: *{4}*",
        "🤔 Zweryfikowane: *{5}*",
        "🤩 Obserwujących: *{6}*",
        "👀 Obserwowanych: *{7}*",
        "📰 Liczba postów: *{8}*",
        "🔗 Profil: {9}",
        "🚪 Link zewnętrzny: {10}",
      ],
    },
    afk: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <powód>/off*",
        "\n💡 Wybierz swój status AFK który będzie wyświetlany gdy ktoś Cię oznaczy.",
        "\n🔧 Aktualny status AFK: *{2}*",
      ],
      tooLong: "❌ Powód AFK jest zbyt długi! (maks. *{0}* znaki, podano *{1}*)",
      disabled: "✅ Pomyślnie wyłączono status AFK!",
      done: "✅ Pomyślnie ustawiono powód AFK na *{0}*!",
      mentioned: "{0} *{1}* jest aktualnie AFK, powód: *{2}*",
    },
    play: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n",
        "✨ *{1} <tytuł lub link>*\n",
        "💡 Przykłady:",
        "⭐ *{1} Ginseng Strip 2002*",
        "⭐ *{1} youtu.be/vrQWhFysPKY*",
        "⭐ *{1} on.soundcloud.com/QPxti*",
        "⭐ *{1} open.spotify.com/track/7v3rmoy5jcn4h5UqwQyCM3*",
      ],
      searching: "🔎 Szukam *{0}*...",
      unavailable: "❌ Wybrana pozycja jest niedostępna!",
      tooBig: "❌ Rozmiar wybranej pozycji jest zbyt duży! (*{0}*, maks. *{1}*)",
      preparing: "⏳ Przygotowuję *{0}*... (*{1}*, *{2}*)",
      done: "{0} {1}",
    },
    profile: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <@użytkownik (opcjonalnie)>*",
      ],
      unavailable: "❌ Informacje o Twoim profilu są obecnie niedostępne!",
      unavailableMentioned: "❌ Informacje o profilu *{0}* są obecnie niedostępne!",
      collecting: "⏳ Zbieram informacje o *{0}*...",
      done: [
        "{0} Informacje o profilu Facebook *{1}*:\n",
        "📛 Alternatywna nazwa: *{2}*",
        "🆎 Nazwa użytkownika: *{3}*",
        "🆔 ID konta: *{4}*",
        "👗 Płeć: *{5}*",
        "🔗 Profil: {6}",
        "😴 Status AFK: *{7}*",
        "🏷 Nick w grupie: *{8}*",
        "🥰 Ma bota w znajomych: *{9}*",
        "👮🏻‍♂️ Administrator grupy: *{10}*",
        "🎂 Obchodzi dziś urodziny: *{11}*",
        "🌍 Lokalizacja: *{12}*",
        "🤓 Korzysta z Ambienta od: *{14}* {13} *{15}*",
        "🤖 Jest botem: *{16}*",
        "🖤 Czarna lista: *{17}*",
        "👑 Członek załogi Ambienta: *{18}*",
        "#️⃣ Kod Premium: *{19}*",
        "💎 Stan Premium: {20}",
        "👅 Język w Ambiencie: *{21}*",
        "🎛️ Połączone Spotify: *{22}*",
        "🎭 Tryb prywatności: *{23}*",
        "🫣 Ostatnia aktywność: *{24}* {13} *{25}* (w tej grupie: *{26}*)",
        "🐒 Wzmianki: *{27}* (w tej grupie: *{28}*)",
        "✉ Wysłane wiadomości: *{29}* (w tej grupie: *{30}*)",
        "🪄 Wykonane komendy: *{31}* (w tej grupie: *{32}*)",
        "🔄 Zaktualizowano dane: *{33}* {13} *{34}*",
      ],
    },
    skin: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <nick gracza>*",
      ],
      notFound: "❌ Gracz o podanym nicku nie istnieje!",
      searching: "⏳ Szukam skina gracza *{0}*...",
      done: "{0} Oto skin gracza *{1}*:",
    },
    spotify: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:",
        "\n🔌 *{1} połącz* {2} Pozwala połączyć Ambienta z kontem Spotify",
        "\n🔥 *{1} odłącz* {2} Pozwala odłączyć Ambienta od konta Spotify",
        "\n🤠 *{1} profil <@użytkownik (opcjonalnie)>* {2} Pozwala sprawdzić informacje o Twoim lub oznaczonego użytkownika profilu Spotify",
        "\n🧐 *{1} grupa* {2} Pozwala sprawdzić czego obecnie słuchają członkowie tej grupy",
        "\n🎧 *{1} aktualnie <@użytkownik (opcjonalnie)>* {2} Pozwala sprawdzić czego obecnie słuchasz Ty lub oznaczony użytkownik",
        "\n⭐ *{1} toputwory 1m/6m/12m <@użytkownik (opcjonalnie)>* {2} Pozwala sprawdzić Twoje najczęściej słuchane utwory lub oznaczonego użytkownika w podanym zakresie czasu",
        "\n🤩 *{1} topartyści 1m/6m/12m <@użytkownik (opcjonalnie)>* {2} Pozwala sprawdzić Twoich najczęściej słuchanych artystów lub oznaczonego użytkownika w podanym zakresie czasu",
        "\n🕰 *{1} ostatnie <@użytkownik (opcjonalnie)>* {2} Pozwala sprawdzić czego ostatnio słuchał{3}ś Ty lub oznaczony użytkownik",
        "\n🥸 *{1} incognito on/off* {2} Pozwala wybrać, czy inni członkowie grupy mają mieć możliwość sprawdzania Twoich statystyk Spotify",
        "\n📋 *{1} kolejka <utwór lub @użytkownik>* {2} Pozwala dodać do Twojej kolejki odtwarzania wybrany utwór lub ten, którego słucha oznaczony użytkownik",
        "\n💿 *{1} play <utwór lub @użytkownik>* {2} Pozwala odtworzyć na Twoim koncie Spotify wybrany utwór lub ten, którego słucha oznaczony użytkownik",
        "\n🎶 *{1} youtube <@użytkownik (opcjonalnie)>* {2} Wysyła utwór którego słuchasz Ty lub oznaczony użytkownik z YouTube",
      ],
      incognitoUsage: [
        "{0} Prawidłowe użycie komendy *{1} incognito*:\n",
        "✨ *{1} incognito on/off*",
        "\n💡 Wybierz, czy inni członkowie grupy mają mieć możliwość sprawdzania Twoich statystyk Spotify.",
        "\n🔧 Aktualny status incognito: *{2}*",
      ],
      incognitoDisabled: "🎼 Pomyślnie wyłączono tryb incognito w statystykach Spotify!",
      incognitoEnabled: "👓 Pomyślnie włączono tryb incognito w statystykach Spotify!",
      alreadyConnected: "❌ Musisz odłączyć obecne konto przed połączeniem nowego!",
      connectionUrl: "🔗 Oto Twój link do połączenia konta Spotify z Ambientem: {0}",
      userIncognito: "❌ *{0}* posiada włączony tryb incognito, tylko {1} może zobaczyć swoje statystyki Spotify.",
      notConnected: "❌ Nie połączył{1}ś Ambienta z kontem Spotify!",
      notConnectedMentioned: "❌ *{0}* nie połączył{1} Ambienta z kontem Spotify!",
      disconnected: "✅ Pomyślnie odłączył{0}ś Ambienta od konta Spotify!",
      mustReconnect: "❌ Musisz ponownie połączyć Ambienta z kontem Spotify!",
      mustReconnectMentioned: "❌ *{0}* musi ponownie połączyć Ambienta z kontem Spotify!",
      statsUnavailable: "❌ Statystyki dla Twojego konta są niedostępne, prawdopodobnie konto zostało utworzone niedawno lub było nieużywane od dłuższego czasu.",
      statsUnavailableMentioned: "❌ Statystyki dla konta *{0}* są niedostępne, prawdopodobnie konto zostało utworzone niedawno lub było nieużywane od dłuższego czasu.",
      notListening:
        "❌ Niczego aktualnie nie słuchasz. Jeśli to nieprawda, upewnij się, że nie masz włączonej sesji prywatnej i uruchom ponownie aplikację Spotify na swoim urządzeniu.",
      notListeningMentioned: "❌ *{0}* niczego aktualnie nie słucha lub ma włączoną sesję prywatną.",
      listeningLocal: "❌ *{0}* słucha obecnie lokalnego utworu, nie możesz odtworzyć go na swoim koncie Spotify.",
      unableToPlay: "❌ Nie udało nam się odtworzyć utworu na Twoim koncie Spotify.",
      unableToQueue: "❌ Nie udało nam się dodać utworu do Twojej kolejki Spotify.",
      premiumRequired: "❌ Odtwarzanie utworów na swoim koncie Spotify przy użyciu Ambienta wymaga posiadania konta *💎 Spotify Premium*!",
      emptyResults: "❌ Nie znaleziono żadnych pozycji pasujących do Twojego zapytania!",
      mustReplyToVerifiedMessage: "❌ Musisz odpowiedzieć na wiadomość wysłaną przez Ambienta!",
      noPlayableSpotifyTracks: "❌ Wybrana wiadomość nie posiada powiązań z żadnymi utworami Spotify!",
      selectionTimeout: "❌ Nie wybrano żadnej pozycji w ciągu *{0}* sekund! Spróbuj ponownie.",
      trackSelectionList: [
        "🕵🏽‍♂️ Wybierz pozycję, którą chcesz odtworzyć:\n",
        "{0}",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranej pozycji, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) aby wybrać pierwszą pozycję.",
      ],
      playbackStarted: "💿 Rozpoczynam odtwarzanie *{0}* {1} *{2}* z albumu *{3}* na urządzeniu *{4} {5}*...",
      queued: "📋 Dodano *{0}* {1} *{2}* z albumu *{3}* do kolejki odtwarzania!",
      nobodyConnected: "❌ Żaden członek grupy nie połączył swojego konta Spotify z Ambientem!",
      group: [
        "🧐 Czego aktualnie słuchają członkowie grupy *{0}*?\n",
        "{1}",
        "\n🧮 *{2}* z *{3}* członków tej grupy połączyło swoje konto Spotify z Ambientem, *{4}* z nich aktualnie słucha muzyki.",
      ],
      profile: [
        "🤠 Informacje o profilu Spotify *{0}*:\n",
        "🆎 Nazwa: *{1}*",
        "🌍 Kraj: *{2}*",
        "💖 Liczba ulubionych: *{3}*",
        "👀 Liczba obserwujących: *{4}*",
        "🔗 Profil: {5}",
        "💎 Spotify Premium: *{6}*",
      ],
      nowListening: [
        "🎧 *{0}* {1} *Aktualnie słucha*",
        "\n💿 *{2}* {1} *{3}*\n",
        "{4}",
        "\n💽 Album: *{5}*",
        "💖 W ulubionych: *{6}*",
        "💾 Plik lokalny: *{7}*",
        "🎚️ Poziom głośności: *{8}%*",
        "{9} Urządzenie: *{10}*",
      ],
      recentlyPlayed: [
        "🕰 Ostatnio słuchane utwory *{0}*:", //
        "\n{1}",
      ],
      topTracks: [
        "⭐ Najczęściej słuchane utwory *{0}*:", //
        "\n{1}",
      ],
      topArtists: [
        "🤩 Najczęściej słuchani artyści *{0}*:", //
        "\n{1}",
      ],
    },
    tiktok: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <link do TikToka>*",
      ],
      unavailable: "❌ Podany TikTok jest niedostępny!",
      tooBig: "❌ Rozmiar TikToka jest zbyt duży! (*{0}*, maks. *{1}*)",
      done: [
        "{0} Oto Twój TikTok: *{1}* {2} *{3}*\n",
        "🫡 Autor: *{4}* {2} *@{5}*",
        "📅 Data: *{6}* {2} *{7}*",
        "💖 Polubienia: *{8}*",
        "💬 Komentarze: *{9}*",
        "🏹 Udostępnienia: *{10}*",
        "👀 Wyświetlenia: *{11}*",
        "💿 Dźwięk: *{12}* {13} *{14}*",
      ],
    },
    twitter: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <link do filmiku z Twittera>*",
      ],
      unavailable: "❌ Podany filmik z Twittera jest niedostępny!",
      tooBig: "❌ Rozmiar filmiku z Twittera jest zbyt duży! (*{0}*, maks. *{1}*)",
      done: [
        "{0} Oto Twój filmik z Twittera: *{1}* {2} *{3}*\n",
        "🫡 Autor: *{4}* {2} *@{5}*",
        "📅 Data: *{6}* {2} *{7}*",
        "💖 Polubienia: *{8}*",
        "💬 Komentarze: *{9}*",
        "🏹 Udostępnienia: *{10}*",
        "🔞 Ograniczenia wiekowe: *{11}*",
      ],
    },
    reel: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <link do rolki na Instagramie>*",
      ],
      unavailable: "❌ Podana rolka jest niedostępna!",
      tooBig: "❌ Rozmiar podanej rolki jest zbyt duży! (*{0}*, maks. *{1}*)",
      done: [
        "{0} Oto Twoja rolka z Instagrama: *{1}* {2} *{3}*\n", //
        "🫡 Autor: *{4}* {2} *@{5}*",
        "📅 Data: *{6}* {2} *{7}*",
        "💖 Polubienia: *{8}*",
        "💬 Komentarze: *{9}*",
      ],
    },
    adduser: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <link do profilu, nazwa użytkownika lub ID>*",
      ],
      invalidBatch: "❌ Podane namiary na użytkownika są nieprawidłowe!",
      notFound: "❌ Podany użytkownik nie został odnaleziony!",
      alreadyMember: "❌ Podany użytkownik jest już członkiem tej grupy!",
      inQueue: "❌ Podany użytkownik znajduje się już w kolejce członków do dodania!",
      groupFull: "❌ Grupa posiada już maksymalną liczbę członków!",
      queueFull: "❌ Kolejka użytkowników do dołączenia jest już pełna!",
      unableToAdd: "❌ Ustawienia prywatności podanego użytkownika nie pozwalają na dodanie go do grupy!",
      queuedUser: [
        "🚪 *{0}* został{1} dodan{2} do kolejki, prośba o dołączenie musi zostać zaakceptowana przez administratora grupy.\n", //
        "🤗 Ten użytkownik korzysta z Ambienta od *{4}* {3} *{5}*.",
      ],
      addedUser: [
        "👋🏻 *{0}* został{1} pomyślnie dodan{2} do grupy!\n", //
        "🤗 Ten użytkownik korzysta z Ambienta od *{4}* {3} *{5}*.",
      ],
      queuedNotUser: [
        "🚪 *{0}* został{1} dodan{2} do kolejki, prośba o dołączenie musi zostać zaakceptowana przez administratora grupy.\n", //
        "🧐 Ten użytkownik nie korzysta z Ambienta.",
      ],
      addedNotUser: [
        "👋🏻 *{0}* został{1} pomyślnie dodan{2} do grupy!\n", //
        "🧐 Ten użytkownik nie korzysta z Ambienta.",
      ],
    },
    admin: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <@użytkownik>*",
      ],
      donePromoted: "{0} Pomyślnie nadano *{1}* uprawnienia administratora!",
      doneDemoted: "🫥 Pomyślnie odebrano *{1}* uprawnienia administratora!",
    },
    attachments: {
      mustReplyToAttachments: "❌ Musisz odpowiedzieć na wiadomość zawierającą załączniki!",
      done: "{0} Oto lista załączników z wybranej wiadomości:\n\n{1}",
    },
    blacklist: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:",
        "\n👮🏼‍♂️ *{1} dodaj <@użytkownik, link lub ID>* {2} Pozwala dodać użytkownika do czarnej listy",
        "\n🗑 *{1} usuń <@użytkownik, link lub ID>* {2} Pozwala usunąć użytkownika z czarnej listy",
        "\n📜 *{1} lista* {2} Pokazuje listę użytkowników znajdujących się obecnie na czarnej liście",
        "\n🏆 *{1} top* {2} Pokazuje top administratorów, którzy dodali najwięcej osób do czarnej listy",
      ],
      unableToAdd: "❌ *{0}* nie może zostać dodan{1} do czarnej listy!",
      alreadyAdded: "❌ *{0}* znajduje się już na czarnej liście!",
      notFound: "❌ *{0}* nie znajduje się na czarnej liście!",
      jailed: "❌ Poczekaj aż obecne operacje na czarnej liście zakończą się!",
      added: "✅ *{0}* został{1} pomyślnie dodan{2} do czarnej listy!",
      removed: "✅ *{0}* został{1} pomyślnie usunięt{2} z czarnej listy!",
      empty: "❌ Żaden użytkownik nie znajduje się obecnie na czarnej liście!",
      list: "{0} Lista użytkowników znajdujacych się obecnie na czarnej liście (*{1}*):\n\n{2}",
      top: [
        "🏆 Top administratorzy, którzy dodali najwięcej osób do czarnej listy:", //
        "\n{0}\n",
        "🧮 Na czarnej liście znajduje się obecnie *{1}* użytkownik{2}.",
      ],
    },
    everyone: "{0} Pomyślnie oznaczono {1} użytkowników!",
    kick: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <@użytkownik>*",
      ],
      done: "{0} Pomyślnie wyrzucono *{1}* z grupy!",
    },
    lookup: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <numer telefonu>*\n",
        "💡 Przykłady:",
        "⭐ *{1} 789167462*",
        "⭐ *{1} +48789167462*",
        "⭐ *{1} +48 789-167-462*",
      ],
      mentions: "❌ Numer telefonu nie może zawierać wzmianek!",
      invalid: "❌ Podany numer telefonu jest nieprawidłowy lub nie jest obsługiwany!",
      result: "{0} Operatorem numeru telefonu *{1}* jest *{2}* (RPT: *{3}*).",
    },
    name: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <nowa nazwa grupy>*",
      ],
      tooLong: "❌ Podana nazwa jest zbyt długa! (maks. *{0}* znaków, podano *{1}*)",
      same: "❌ Podana nazwa jest taka sama jak obecnie ustawiona!",
      doneSet: "{0} Pomyślnie nadano grupie nazwę *{1}*!",
      doneChanged: "{0} Pomyślnie zmieniono nazwę grupy z *{1}* na *{2}*!",
    },
    nick: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <@użytkownik (opcjonalnie)> <nowy nick>*",
      ],
      tooLong: "❌ Podany nick jest zbyt długi! (maks. *{0}* znaków, podano *{1}*)",
      same: "❌ Podany nick jest taki sam jak obecnie ustawiony!",
      doneSetOwn: "{0} Twój nick został pomyślnie ustawiony na *{1}*!",
      doneSetOther: "{0} Nick *{1}* został pomyślnie ustawiony na *{2}*!",
      doneChangedOwn: "{0} Twój nick został pomyślnie zmieniony z *{1}* na *{2}*!",
      doneChangedOther: "{0} Nick *{1}* został pomyślnie zmieniony z *{2}* na *{3}*!",
    },
    paste: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <tekst>*",
      ],
      done: "{0} Oto Twoja wklejka: {1}",
    },
    purplelist: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:",
        "\n👮🏼‍♂️ *{1} dodaj <@użytkownik, link lub ID>* {2} Pozwala dodać użytkownika do fioletowej listy",
        "\n🗑 *{1} usuń <@użytkownik, link lub ID>* {2} Pozwala usunąć użytkownika z fioletowej listy",
        "\n📜 *{1} lista* {2} Pokazuje listę użytkowników znajdujących się obecnie na fioletowej liście",
        "\n🏆 *{1} top* {2} Pokazuje top administratorów, którzy dodali najwięcej osób do fioletowej listy",
      ],
      unableToAdd: "❌ *{0}* nie może zostać dodan{1} do fioletowej listy!",
      alreadyAdded: "❌ *{0}* znajduje się już na fioletowej liście!",
      notFound: "❌ *{0}* nie znajduje się na fioletowej liście!",
      jailed: "❌ Poczekaj aż obecne operacje na fioletowej liście zakończą się!",
      added: "✅ *{0}* został{1} pomyślnie dodan{2} do fioletowej listy!",
      removed: "✅ *{0}* został{1} pomyślnie usunięt{2} z fioletowej listy!",
      empty: "❌ Żaden użytkownik nie znajduje się obecnie na fioletowej liście!",
      list: "{0} Lista użytkowników znajdujacych się obecnie na fioletowej liście (*{1}*):\n\n{2}",
      top: [
        "🏆 Top administratorzy, którzy dodali najwięcej osób do fioletowej listy:", //
        "\n{0}\n",
        "🧮 Na fioletowej liście znajduje się obecnie *{1}* użytkownik{2}.",
      ],
    },
    screenshot: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n",
        "✨ *{1} <link do strony>*\n",
        "💡 Przykłady:",
        "⭐ *{1} https://facebook.com/mateuszeq.xd*",
        "⭐ *{1} https://github.com/AmbientBot-xyz*",
        "⭐ *{1} https://reddit.com/r/linux*",
      ],
      taking: "⏳ Wykonuję zrzut ekranu...",
      done: "{0} Oto zrzut ekranu podanej strony internetowej:",
    },
    shorten: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n",
        "✨ *{1} <link do skrócenia>*\n",
        "💡 Przykłady:",
        "⭐ *{1} https://facebook.com/mateuszeq.xd*",
        "⭐ *{1} https://github.com/AmbientBot-xyz*",
        "⭐ *{1} https://reddit.com/r/linux*",
      ],
      done: "{0} Oto Twój skrócony link: {1}",
    },
    translate: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:\n", //
        "✨ *{1} <język docelowy> <tekst do przetłumaczenia>*\n",
        "💡 Przykłady:",
        "⭐ *{1} en To jest przykładowy tekst*",
      ],
      invalidTargetLanguage: "❌ Podany język docelowy jest nieprawidłowy!",
      done: [
        "{0} Oto wynik tłumaczenia:\n", //
        "🚰 Język źródłowy: *{1}*",
        "🎯 Język docelowy: *{2}*",
        "📖 Liczba zdań: *{3}*",
        "🗣 Wynik: *{4}*",
      ],
    },
    verify: {
      mustReplyToMessage: "❌ Musisz odpowiedzieć na wiadomość którą chcesz zweryfikować!",
      success: "{0} Ta wiadomość została wysłana przez Ambienta!",
      failed:
        "❓ Ta wiadomość nie została wysłana przez Ambienta!\n\nℹ️ Jeśli ta wiadomość została wysłana z konta które jest używane przez Ambienta, najprawdopodobniej oznacza to, że właściciel tego konta sam wysłał tę wiadomość ręcznie, lub została ona wysłana przez inne oprogramowanie.",
    },
    warning: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:",
        "\n👮🏼‍♂️ *{1} dodaj <@użytkownik> <powód>* {2} Pozwala nadać użytkownikowi ostrzeżenie z wybranym powodem",
        "\n🗑 *{1} usuń <@użytkownik> <* lub numer>* {2} Pozwala usunąć użytkownikowi wszystkie ostrzeżenia lub o wybranym numerze",
        "\n📜 *{1} lista <@użytkownik (opcjonalnie)>* {2} Pozwala sprawdzić listę Twoich lub oznaczonego użytkownika ostrzeżeń",
        "\n🧐 *{1} grupa* {2} Pozwala sprawdzić liczbę ostrzeżeń poszczególnych członków grupy",
      ],
      reasonMentions: "❌ Powód ostrzeżenia nie może zawierać wzmianek!",
      maxWarningsReached: "❌ *{0}* posiada już maksymalną liczbę ostrzeżeń (*{1}*)!",
      reasonTooLong: "❌ Podany powód jest zbyt długi! (maks. *{0}* znaków, podano *{1}*)",
      jailed: "❌ Poczekaj aż obecne operacje na ostrzeżeniach zakończą się!",
      added: "{0} Administrator *{1}* nadał ostrzeżenie *{2}* z powodu *{3}*, jest to je{4} *{5}* ostrzeżenie.",
      noWarnings: "❌ Nie posiadasz jeszcze żadnych ostrzeżeń!",
      noWarningsMentioned: "❌ *{0}* nie posiada jeszcze żadnych ostrzeżeń!",
      noWarningsGroup: "❌ Żaden członek grupy nie posiada jeszcze ostrzeżeń!",
      list: "📜 Lista ostrzeżeń *{0}* (*{1}*):\n\n{2}",
      group: [
        "🧐 Ile ostrzeżeń mają członkowie grupy *{0}*?\n", //
        "{1}",
        "\n🧮 *{2}* z *{3}* członków tej grupy posiada ostrzeżenia, mają ich razem *{4}*.",
      ],
      deleted: "🗑 Administrator *{0}* usunął *{1}* ostrzeżenie o numerze *{2}*, pozostało {3} teraz *{4}* ostrzeżeń.",
      deletedAll: "🗑 Administrator *{0}* usunął *{1}* wszystkie ostrzeżenia.",
    },
    yellowlist: {
      usage: [
        "{0} Prawidłowe użycie komendy *{1}*:",
        "\n👮🏼‍♂️ *{1} dodaj <@użytkownik, link lub ID>* {2} Pozwala dodać użytkownika do żółtej listy",
        "\n🗑 *{1} usuń <@użytkownik, link lub ID>* {2} Pozwala usunąć użytkownika z żółtej listy",
        "\n📜 *{1} lista* {2} Pokazuje listę użytkowników znajdujących się obecnie na żółtej liście",
        "\n🏆 *{1} top* {2} Pokazuje top administratorów, którzy dodali najwięcej osób do żółtej listy",
      ],
      unableToAdd: "❌ *{0}* nie może zostać dodan{1} do żółtej listy!",
      alreadyAdded: "❌ *{0}* znajduje się już na żółtej liście!",
      notFound: "❌ *{0}* nie znajduje się na żółtej liście!",
      jailed: "❌ Poczekaj aż obecne operacje na żółtej liście zakończą się!",
      added: "✅ *{0}* został{1} pomyślnie dodan{2} do żółtej listy!",
      removed: "✅ *{0}* został{1} pomyślnie usunięt{2} z żółtej listy!",
      empty: "❌ Żaden użytkownik nie znajduje się obecnie na żółtej liście!",
      list: "{0} Lista użytkowników znajdujacych się obecnie na żółtej liście (*{1}*):\n\n{2}",
      top: [
        "🏆 Top administratorzy, którzy dodali najwięcej osób do żółtej listy:", //
        "\n{0}\n",
        "🧮 Na żółtej liście znajduje się obecnie *{1}* użytkownik{2}.",
      ],
    },
  },
};
