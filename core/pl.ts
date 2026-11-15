export default {
  global: {
    notEnabled:
      "Wygląda na to, że próbujesz skorzystać z Ambienta na grupie, która nie została dodana do listy dozwolonych w <c>panelu zarządzania</c>. Poproś administratora bota o dodanie grupy lub stwórz własnego bota całkowicie za darmo na {0}",
    properBotIssues: [
      "Wygląda na to, że próbujesz skorzystać z bota, który nie działa prawidłowo. Informacje o bocie włączonym na tej grupie:\n",
      "🤖 Nazwa bota: <c>{0}</c>",
      "🪪 Konto: <c>{1}</c>",
    ],
    wrongBot: [
      "Wygląda na to, że próbujesz skorzystać z niewłaściwego bota. Informacje o bocie włączonym na tej grupie:\n", //
      "🤖 Nazwa bota: <c>{0}</c>",
      "🪪 Konto: <c>{1}</c>",
    ],
    disabledManual: "🛑 Bot <c>{0}</c> został wyłączony na tej grupie przez administratora!",
    disabledAuto: "🖇️ Bot <c>{0}</c> został wyłączony na tej grupie, ponieważ została ona dodana do dozwolonych grup w innym bocie.",
    enabled: "⚡ Bot <c>{0}</c> został włączony na tej grupie, wszyscy członkowie grupy mogą z niego teraz korzystać.",
    unhandledEventException: [
      "🥀 Ambient napotkał nieobsłużony wyjątek podczas obsługi zdarzenia, spróbuj ponownie później. Zgłoszenie zostało automatycznie wysłane na nasz serwer Discord: {0}\n",
      "📦 Klasa: <c>{1}</c>",
      "💬 Powód: <c>{2}</c>",
      "🪜 Zrzut: {3}",
    ],
    unhandledCommandException: [
      "🥀 Ambient napotkał nieobsłużony wyjątek podczas wykonywania komendy, spróbuj ponownie później. Zgłoszenie zostało automatycznie wysłane na nasz serwer Discord: {0}\n",
      "📦 Klasa: <c>{1}</c>",
      "💬 Powód: <c>{2}</c>",
      "🪜 Zrzut: {3}",
    ],
    welcome:
      "👋🏻 Cześć, <c>{0}</c>! Nazywam się <c>Ambient</c>, jestem bezpiecznym, wydajnym i wielofunkcyjnym botem dla grup na Messengerze. Aby zobaczyć co potrafię, skorzystaj z komendy <c>{1}</c>.\n\n🤗 Masz pytania lub potrzebujesz pomocy? Znajdziesz ją na naszym <c>serwerze Discord</c>, gdzie również dowiesz się o nowościach związanych z Ambientem: {2}",
    welcomeGroup:
      "👋🏻 Cześć! Nazywam się <c>Ambient</c>, jestem bezpiecznym, wydajnym i wielofunkcyjnym botem dla grup na Messengerze. Aby zobaczyć co potrafię, skorzystaj z komendy <c>{0}</c>.\n\n🤗 Masz pytania lub potrzebujesz pomocy? Znajdziesz ją na naszym <c>serwerze Discord</c>, gdzie również dowiesz się o nowościach związanych z Ambientem: {1}",
    mentionedNotMember: "❌ Oznaczony użytkownik nie jest członkiem tej grupy.",
    mentionedNotUser: "❌ Oznaczony użytkownik nigdy nie skorzystał z Ambienta.",
    commandNotFound: "🤨 Nie odnaleziono komendy. Użyj <c>{0}</c>, aby zobaczyć, co potrafię!",
    emptyCommand: "🫡 Czekam na polecenia. Użyj <c>{0}</c>, aby zobaczyć, co potrafię!",
    unexpectedArgs: "❌ Ta komenda nie przyjmuje żadnych argumentów.",
    groupAdminOnly: "❌ Z tej komendy mogą korzystać tylko administratorzy grupy.",
    teamMemberOnly: "❌ Nie posiadasz uprawnień do korzystania z tej komendy.",
    goodNight: "🥱 Dobranoc, <c>{0}</c>! 😴",
    happyBirthday: "🎂 Wszystkiego najlepszego, <c>{0}</c>! 🥳",
    outOfRange: "❌ Wybrana pozycja nie istnieje! (maks. <c>{0}</c>, wybrano <c>{1}</c>)",
    botAdminRequired: "❌ Bot musi być administratorem grupy, aby skorzystać z tej komendy.",
    botAdminAdded: [
      "{0} Zarejestrowano nadanie botowi uprawnień administratora.",
      "\n⚙️ Większość funkcji Ambienta działa bez nich, jednakże uprawnienia te pozwalają botowi na wykonywanie dodatkowych działań administracyjnych, takich jak:",
      "- oczyszczanie grupy z nieaktywnych członków za pomocą komendy <c>{1}</c>,",
      "- automatyczne dodawanie użytkowników do grupy (z pominięciem ręcznego zatwierdzania) przy użyciu funkcji <c>{2}</c>, <c>{3}</c> oraz <c>{4}</c>,",
      "- wyrzucanie członków <c>({5})</c>, nadawanie uprawnień administratora innym <c>({6})</c> oraz zmiana ich pseudonimów <c>({7})</c> mimo włączonego linku do zaproszenia.",
      "\n⚠️ <c>Uwaga!</c> Pamiętaj, że w systemie Ambienta każdy może stworzyć własnego bota. Konta, na których one działają, należą do przypadkowych osób niepowiązanych z zespołem Ambienta, a ich właściciele wciąż mają do nich stały dostęp. Jeśli nie znasz właściciela tego konta, nie ufasz mu lub nie potrzebujesz powyższych funkcji, stanowczo zalecamy odebranie botowi uprawnień administratora. Zapobiegnie to ewentualnym próbom przejęcia kontroli nad Twoją grupą przez osoby trzecie.",
      "\n🤗 Masz pytania lub potrzebujesz pomocy? Dołącz na nasz <c>serwer Discord</c>: {8}",
    ],
    botAdminRemoved: [
      "{0} Zarejestrowano odebranie botowi uprawnień administratora.",
      "\n⚙️ Większość funkcji Ambienta działa bez nich, jednakże uprawnienia te pozwalają botowi na wykonywanie dodatkowych działań administracyjnych, takich jak:",
      "- oczyszczanie grupy z nieaktywnych członków za pomocą komendy <c>{1}</c>,",
      "- automatyczne dodawanie użytkowników do grupy (z pominięciem ręcznego zatwierdzania) przy użyciu funkcji <c>{2}</c>, <c>{3}</c> oraz <c>{4}</c>,",
      "- wyrzucanie członków <c>({5})</c>, nadawanie uprawnień administratora innym <c>({6})</c> oraz zmiana ich pseudonimów <c>({7})</c> mimo włączonego linku do zaproszenia.",
      "\n⚠️ <c>Uwaga!</c> Pamiętaj, że w systemie Ambienta każdy może stworzyć własnego bota. Konta, na których one działają, należą do przypadkowych osób niepowiązanych z zespołem Ambienta, a ich właściciele wciąż mają do nich stały dostęp. Jeśli nie znasz właściciela tego konta, nie ufasz mu lub nie potrzebujesz powyższych funkcji, stanowczo odradzamy nadawanie botowi uprawnień administratora. Zapobiegnie to ewentualnym próbom przejęcia kontroli nad Twoją grupą przez osoby trzecie.",
      "\n🤗 Masz pytania lub potrzebujesz pomocy? Dołącz na nasz <c>serwer Discord</c>: {8}",
    ],
    nsfwNotAllowed: "❌ Treści NSFW nie są dostępne w tej grupie, sprawdź komendę <c>{0}</c>.",
    userBlacklisted: [
      "🫨 Nie możesz korzystać z <c>Ambienta</c>, ponieważ znajdujesz się na <c>czarnej liście</c>.\n",
      "🤨 Uważasz że to pomyłka? Dołącz na nasz <c>serwer Discord</c> i złóż odwołanie - przyjrzymy się Twojej sprawie: {0}",
    ],
    userPurplelisted: [
      "😤 W tej grupie znajdują się osoby, które zostały dodane do fioletowej listy. Korzystanie z Ambienta nie będzie możliwe do momentu usunięcia z konwersacji poniższych członków:\n",
      "{0}",
      "\n⚡ Grupa jest sprawdzana pod kątem obecności osób na fioletowej liście w czasie rzeczywistym. Ambient zacznie działać w tej konwersacji natychmiast po usunięciu wskazanych użytkowników.",
    ],
    limitReached: [
      "🚧 Osiągnięto dzienny limit komend do wykonania, aby korzystać ze wszystkich funkcjonalności <c>Ambienta</c> bez ograniczeń, wesprzyj projekt. Szczegóły znajdziesz pod komendą <c>{0}</c>.\n",
      "💡 Znasz kogoś, kto już posiada aktywne Premium? Może ulepszyć tę grupę aby pozbyć się ograniczeń dla wszystkich jej członków. Ulepszeniami można zarządzać pod komendą <c>{1}</c>.",
    ],
    premiumExtended: [
      "{0} <c>{1}</c>, ważność Twojego Premium została pomyślnie przedłużona!\n",
      "🧮 Liczba miesięcy: <c>{2}</c>",
      "📅 Data ważności: <c>{3}</c>",
      "\n🚀 Pamiętaj, że posiadając aktywne Premium możesz ulepszyć do <c>3</c> grup. Dzięki temu wszyscy ich członkowie będą mogli korzystać w nich ze wszystkich funkcji <c>Ambienta</c> bez ograniczeń, niezależnie od tego, czy posiadają aktywne Premium. W dowolnym momencie możesz przenieść swoje ulepszenia na inne grupy.",
      "\n✨ Aby zarządzać swoimi ulepszeniami grup, skorzystaj z komendy <c>{4}</c>.",
      "\n🫶🏻 Dziękujemy za wspieranie <c>Ambienta</c>!",
    ],
    authenticationPrompt: [
      "{0} <c>{1}</c>, czy to Ty próbujesz właśnie powiązać swój profil w Ambiencie z zewnętrznym serwisem?\n",
      "🤝🏻 Serwis: <c>{2}</c>",
      "🆔 ID: <c>{3}</c>",
      "{4} Urządzenie: <c>{5}</c>",
      "⏱️ Data rozpoczęcia: <c>{6}</c>",
      "\n🟢 Zareaguj na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia) lub ✅ w ciągu <c>{7} sekund</c> TYLKO, jeśli powyższe informacje zgadzają się i chcesz uwierzytelnić to żądanie.",
      "\n🔴 Zignoruj tę wiadomość, jeśli to nie Ty lub powyższe informacje nie zgadzają się. Możesz także zareagować używając 👎🏼 (odcień nie ma znaczenia) lub ❌, aby odrzucić żądanie natychmiast.",
      "\n🟡 Aby zarządzać swoim powiązaniem z serwisem <c>{2}</c>, skorzystaj z komendy <c>{8}</c>.",
      "\n🤗 Masz pytania lub potrzebujesz pomocy? Dołącz na nasz <c>serwer Discord</c>: {9}",
    ],
    unauthorizedAuthenticationPromptResponseAttempt: "{0} <c>{1}</c>, nie możesz odpowiedzieć na żądanie, które nie jest kierowane do Ciebie.",
    authenticationPromptAuthorized: [
      "{0} <c>{1}</c>, żądanie <c>{2}</c> z urządzenia {3} <c>{4}</c> zostało przez Ciebie uwierzytelnione. Możesz teraz wrócić pod swój link: {5}\n",
      "⌚ Masz od teraz kolejne <c>{6} minut</c> aby dokończyć łączenie konta.\n",
      "⚠️ <c>Uwaga!</c> Link zadziała tylko na tym samym urządzeniu i w tej samej przeglądarce, dla których to żądanie zostało uwierzytelnione.",
    ],
    authenticationPromptRejected: "{0} <c>{1}</c>, żądanie <c>{2}</c> z urządzenia {3} <c>{4}</c> zostało przez Ciebie odrzucone.",
    authenticationPromptTimeout: "{0} <c>{1}</c>, czas na uwierzytelnienie żądania <c>{2}</c> z urządzenia {3} <c>{4}</c> minął. Zostało ono automatycznie odrzucone.",
    authenticationPromptSuperseded:
      "{0} <c>{1}</c>, żądanie <c>{2}</c> z urządzenia {3} <c>{4}</c> zostało automatycznie odrzucone, ponieważ zostało przez Ciebie uwierzytelnione inne żądanie dla tego serwisu.",
    connectionUrl: [
      "🔗 Oto Twój link do powiązania profilu w Ambiencie z serwisem <c>{0}</c>: {1}\n",
      "⌚ Link jest ważny przez <c>{2} minut</c> lub do momentu pierwszego uwierzytelnienia żądania.\n",
      "🎥 Potrzebujesz pomocy? Zobacz jak połączyć swój profil w <c>45 sekund</c>: https://youtu.be/HGzguY7H3n0",
    ],
    connectedSuccessfully:
      "{0} <c>{1}</c>, Twój profil w Ambiencie został pomyślnie powiązany z serwisem <c>{2}</c>! Możesz teraz korzystać z funkcji dostępnych pod komendą <c>{3}</c>.",
    unableToRestoreUser: "❌ Ustawienia prywatności <c>{0}</c> nie pozwalają na przywrócenie {1} do grupy lub bot został przez ni{2} zablokowany.",
    restoredUserQueued:
      "🚪 <c>{0}</c> został{1} przywrócon{2} do grupy, ale żądanie musi zostać zaakceptowane, ponieważ bot nie jest administratorem grupy i zatwierdzanie członków jest włączone.",
  },
  commands: {
    alpaca: {
      searching: "⏳ Szukam zdjęcia alpaki...",
      done: "{0} Oto losowe zdjęcie alpaki autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    beaver: {
      searching: "⏳ Szukam zdjęcia bobra...",
      done: "{0} Oto losowe zdjęcie bobra autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    capybara: {
      searching: "⏳ Szukam zdjęcia kapibary...",
      done: "{0} Oto losowe zdjęcie kapibary autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    cat: {
      searching: "⏳ Szukam zdjęcia kota...",
      done: "{0} Oto losowe zdjęcie kota autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    cow: {
      searching: "⏳ Szukam zdjęcia krowy...",
      done: "{0} Oto losowe zdjęcie krowy autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    dog: {
      searching: "⏳ Szukam zdjęcia psa...",
      done: "{0} Oto losowe zdjęcie psa autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    duck: {
      searching: "⏳ Szukam zdjęcia kaczki...",
      done: "{0} Oto losowe zdjęcie kaczki autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    fox: {
      searching: "⏳ Szukam zdjęcia lisa...",
      done: "{0} Oto losowe zdjęcie lisa autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    frog: {
      searching: "⏳ Szukam zdjęcia żaby...",
      done: "{0} Oto losowe zdjęcie żaby autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    hamster: {
      searching: "⏳ Szukam zdjęcia chomika...",
      done: "{0} Oto losowe zdjęcie chomika autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    hedgehog: {
      searching: "⏳ Szukam zdjęcia jeża...",
      done: "{0} Oto losowe zdjęcie jeża autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    horse: {
      searching: "⏳ Szukam zdjęcia konia...",
      done: "{0} Oto losowe zdjęcie konia autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    lizard: {
      searching: "⏳ Szukam zdjęcia jaszczurki...",
      done: "{0} Oto losowe zdjęcie jaszczurki autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    monkey: {
      searching: "⏳ Szukam zdjęcia małpy...",
      done: "{0} Oto losowe zdjęcie małpy autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    penguin: {
      searching: "⏳ Szukam zdjęcia pingwina...",
      done: "{0} Oto losowe zdjęcie pingwina autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    pigeon: {
      searching: "⏳ Szukam zdjęcia gołębia...",
      done: "{0} Oto losowe zdjęcie gołębia autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    rabbit: {
      searching: "⏳ Szukam zdjęcia królika...",
      done: "{0} Oto losowe zdjęcie królika autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    racoon: {
      searching: "⏳ Szukam zdjęcia szopa...",
      done: "{0} Oto losowe zdjęcie szopa autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    rat: {
      searching: "⏳ Szukam zdjęcia szczura...",
      done: "{0} Oto losowe zdjęcie szczura autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    shiba: {
      searching: "⏳ Szukam zdjęcia Shiba Inu...",
      done: "{0} Oto losowe zdjęcie Shiba Inu autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    snake: {
      searching: "⏳ Szukam zdjęcia węża...",
      done: "{0} Oto losowe zdjęcie węża autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    spider: {
      searching: "⏳ Szukam zdjęcia pająka...",
      done: "{0} Oto losowe zdjęcie pająka autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    turtle: {
      searching: "⏳ Szukam zdjęcia żółwia...",
      done: "{0} Oto losowe zdjęcie żółwia autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    unicorn: {
      searching: "⏳ Szukam zdjęcia jednorożca...",
      done: "{0} Oto losowe zdjęcie jednorożca autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    boosts: {
      summary: [
        "{0} Zarządzanie ulepszeniami grup:\n",
        "✨ Posiadając aktywne Premium możesz ulepszyć do <c>3</c> grup. Dzięki temu wszyscy ich członkowie będą mogli korzystać w nich ze wszystkich funkcji <c>Ambienta</c> bez ograniczeń, niezależnie od tego, czy posiadają aktywne Premium. W dowolnym momencie możesz przenieść swoje ulepszenia na inne grupy.",
        "\n💎 Twój stan Premium: {1}\n",
        "1️⃣ Pierwsza ulepszona grupa: <c>{2}</c>",
        "2️⃣ Druga ulepszona grupa: <c>{3}</c>",
        "3️⃣ Trzecia ulepszona grupa: <c>{4}</c>",
        "\n✅ Aby aktywować ulepszenie na tej grupie, wpisz <c>{5} aktywuj</c>.",
        "\n🚫 Aby dezaktywować ulepszenie wybranej grupy, wpisz <c>{5} dezaktywuj 1/2/3</c>.",
        "\n💸 Aby dowiedzieć się więcej na temat wspierania <c>Ambienta</c> i zdobywania Premium, wpisz <c>{6}</c>.",
      ],
      premiumInactive: "❌ Aby ulepszać grupy, musisz posiadać aktywne Premium!",
      alreadyBoosted: "❌ Ta grupa jest już przez Ciebie ulepszana!",
      noneLeft: "❌ Posiadasz już maksymalną liczbę ulepszonych grup! Dezaktywuj swoje ulepszenie na innej grupie i spróbuj ponownie.",
      successfullyBoosted:
        "✅ Pomyślnie aktywowano ulepszenie w tej grupie! Wszyscy jej członkowie mogą teraz korzystać w niej ze wszystkich funkcji <c>Ambienta</c> bez ograniczeń, niezależnie od tego, czy posiadają aktywne Premium.",
      positionEmpty: "❌ Nie posiadasz żadnej ulepszonej grupy na podanej pozycji!",
      boostDeactivated: "✅ Pomyślnie dezaktywowano ulepszenie w grupie <c>{0}</c>!",
    },
    interactions: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n",
        "✨ <c>{1} on/off</c>",
        "\n💡 Wybierz, czy Ambient ma reagować na niektóre słowa oraz automatycznie pobierać filmy z przesyłanych linków.",
        "\n🔧 Aktualny status interakcji: <c>{2}</c>",
      ],
      disabled: "🤐 Pomyślnie wyłączono interakcje w tej grupie, Ambient nie będzie reagował na żadne wiadomości, poza komendami rozpoczynającymi się znakiem <c>{0}</c>.",
      enabled: "👉🏻 Pomyślnie włączono interakcje w tej grupie, Ambient będzie reagował na niektóre wiadomości, poza komendami rozpoczynającymi się znakiem <c>{0}</c>.",
    },
    nsfw: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n",
        "✨ <c>{1} on/off</c>",
        "\n💡 Wybierz, czy komendy z kategorii NSFW mają być dostępne w tej grupie.",
        "\n🔧 Aktualny status NSFW: <c>{2}</c>",
      ],
      disabled: "😌 Pomyślnie wyłączono komendy NSFW w tej grupie!",
      enabled: "♨ Pomyślnie włączono komendy NSFW w tej grupie!",
    },
    privacy: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n",
        "✨ <c>{1} on/off</c>",
        "\n💡 Wybierz, czy Twoje dane mają być ukryte w globalnych rankingach.",
        "\n🔧 Aktualny status prywatności: <c>{2}</c>",
      ],
      disabled: "🙌🏻 Pomyślnie wyłączono tryb prywatności w globalnych rankingach!",
      enabled: "😎 Pomyślnie włączono tryb prywatności w globalnych rankingach!",
    },
    toggle: {
      summary: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n",
        "✨ <c>{1} <komenda></c>",
        "\n💡 Przełącz możliwość korzystania z wybranych komend przez członków, którzy nie są administratorami tej grupy.",
        "\n🔧 Aktualnie zabronione komendy: <c>{2}</c>",
      ],
      unableToToggle: "❌ Nie możesz zabronić korzystania z komendy <c>{0}</c> członkom grupy.",
      toggledAllowed: "👌🏻 Pomyślnie zezwolono na korzystanie z komendy <c>{0}</c> wszystkim członkom grupy!",
      toggledDisallowed: "⛔️ Pomyślnie zabroniono korzystania z komendy <c>{0}</c> wszystkim członkom poza administratorami grupy!",
      disallowedExecute:
        "✋🏻 Administratorzy tej grupy nie zezwalają na korzystanie w niej z komendy <c>{0}</c>. Spróbuj skorzystać z tej komendy w innej grupie lub poproś administrację grupy o zmianę ustawień przy pomocy komendy <c>{1}</c>.",
    },
    bet: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n",
        "✨ <c>{1} <obstawiane 🪙> <przewidywana liczba></c>\n",
        "✨ Jeśli wylosowana liczba będzie mniejsza od Twojej przewidywanej liczby, zachowasz swoje 🪙 i otrzymasz nagrodę. W przeciwnym wypadku stracisz obstawione 🪙.\n",
        "✨ Im mniejszą liczbę wybierzesz, tym większa będzie Twoja nagroda, jeśli wygrasz.\n",
        "✨ Przewidywana liczba nie może być mniejsza niż <c>1</c>, ani większa od <c>90</c>.\n",
        "💡 Przykłady:",
        "⭐ <c>{1} 420 69</c>",
        "⭐ <c>{1} 50 1</c>",
        "⭐ <c>{1} 1337 90</c>",
      ],
      notEnoughCoins: "❌ Nie posiadasz wystarczającej ilości 🪙! (potrzebne: <c>{1} 🪙</c> {0} posiadane: <c>{2} 🪙</c> {0} brakujące: <c>{3} 🪙</c>)",
      victory: [
        "📈 Wygrał{0}ś <c>{1} 🪙</c>, masz teraz <c>{2} 🪙</c>.\n", //
        "{3} Wylosowana liczba: <c>{4}</c>",
      ],
      loss: [
        "📉 Przegrał{0}ś <c>{1} 🪙</c>, masz teraz <c>{2} 🪙</c>.\n", //
        "{3} Wylosowana liczba: <c>{4}</c>",
      ],
    },
    blackjack: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <obstawiane 🪙></c>\n",
        "✨ Blackjack to gra karciana, w którą możesz zagrać z krupierem. Po rozpoczęciu gry masz możliwość poprzestania na startowych kartach, podwojenia stawki, jeśli uznasz, że startowy układ jest dla Ciebie wyjątkowo korzystny lub dobrania kolejnej karty.\n",
        "✨ Celem jest zdobycie większej liczby punktów od krupiera, jednak nie większej niż <c>21</c>. Przekroczenie tej wartości lub zebranie mniejszej liczby spowoduje przegraną i utratę obstawionych 🪙.\n",
        "✨ Jeśli trafisz <c>21</c> punktów w startowym układzie po rozpoczęciu, gra kończy się natychmiast wygraną <c>x2.5</c> stawki. W przypadku standardowej wygranej mnożnik wynosi <c>x2</c>.\n",
        "💡 Przykłady:",
        "⭐ <c>{1} 420.69</c>",
        "⭐ <c>{1} połowa</c>",
        "⭐ <c>{1} wszystko</c>",
      ],
      notStarted: "❌ Nie posiadasz żadnej aktywnej gry w blackjacka! Użyj <c>{0}</c> aby zobaczyć szczegóły.",
      alreadyStarted: "❌ Posiadasz już aktywną grę w blackjacka! Dokończ ją przed rozpoczęciem nowej. Użyj <c>{0}</c> aby zobaczyć szczegóły.",
      tooLateToDouble: "❌ Możesz podwoić stawkę tylko w pierwszym kroku po rozpoczęciu gry!",
      couldNotAffordToDouble: "❌ Nie posiadał{0}ś wystarczającej ilości 🪙 w momencie rozpoczęcia gry! Nie możesz teraz podwoić stawki, nawet jeśli już posiadasz.",
      started: [
        "{0} Rozpocz{1}ś grę w blackjacka z krupier{2} {3} <c>{4}</c>!\n",
        "💰 Stawka: <c>{5}</c> 🪙 {6} 👛 Pozostało: <c>{7}</c> 🪙\n",
        "🥃 Karty {8}: {9} {6} {10} pkt",
        "🤲🏻 Twoje karty: {11} {6} <c>{12}</c> pkt\n",
        "🕹️ Użyj <c>{13} dobierz</c>, <c>{13} stop</c> lub <c>{13} podwój</c>, aby kontynuować.",
      ],
      existingFirstMove: [
        "{0} Posiadasz już aktywną grę w blackjacka z krupier{1} {2} <c>{3}</c>!\n",
        "⌚ Data rozpoczęcia: <c>{5}</c> {4} <c>{6}</c>\n",
        "💰 Stawka: <c>{7}</c> 🪙 {4} 👛 Pozostało: <c>{8}</c> 🪙\n",
        "🥃 Karty {9}: {10} {4} {11} pkt",
        "🤲🏻 Twoje karty: {12} {4} <c>{13}</c> pkt\n",
        "🕹️ Użyj <c>{14} dobierz</c>, <c>{14} stop</c> lub <c>{14} podwój</c>, aby kontynuować.",
      ],
      existingNextMoves: [
        "{0} Posiadasz już aktywną grę w blackjacka z krupier{1} {2} <c>{3}</c>!\n",
        "⌚ Data rozpoczęcia: <c>{5}</c> {4} <c>{6}</c>\n",
        "💰 Stawka: <c>{7}</c> 🪙 {4} 👛 Pozostało: <c>{8}</c> 🪙\n",
        "🥃 Karty {9}: {10} {4} {11} pkt",
        "🤲🏻 Twoje karty: {12} {4} <c>{13}</c> pkt\n",
        "🕹️ Użyj <c>{14} dobierz</c> lub <c>{14} stop</c>, aby kontynuować.",
      ],
      playerBust: [
        "{0} Przegrał{1}ś grę w blackjacka z krupier{2} {3} <c>{4}</c>! Przekroczył{1}ś <c>21</c> punktów.\n",
        "💰 Przegrana: <c>{5}</c> 🪙 {6} 👛 Masz teraz: <c>{7}</c> 🪙\n",
        "🥃 Karty {8}: {9} {6} {10} pkt",
        "🤲🏻 Twoje karty: {11} {6} <c>{12}</c> pkt\n",
        "🕹️ Użyj <c>{13} <obstawiane 🪙></c>, aby zagrać ponownie.",
      ],
      dealerBust: [
        "{0} Wygrał{1}ś grę w blackjacka z krupier{2} {3} <c>{4}</c>! Krupier{5} przekroczył{6} <c>21</c> punktów.\n",
        "💰 Wygrana: <c>{7}</c> 🪙 {8} 👛 Masz teraz: <c>{9}</c> 🪙\n",
        "🥃 Karty {10}: {11} {8} {12} pkt",
        "🤲🏻 Twoje karty: {13} {8} <c>{14}</c> pkt\n",
        "🕹️ Użyj <c>{15} <obstawiane 🪙></c>, aby zagrać ponownie.",
      ],
      dealerWin: [
        "{0} Przegrał{1}ś grę w blackjacka z krupier{2} {3} <c>{4}</c>! Krupier{5} ma więcej punktów.\n",
        "💰 Przegrana: <c>{6}</c> 🪙 {7} 👛 Masz teraz: <c>{8}</c> 🪙\n",
        "🥃 Karty {9}: {10} {7} {11} pkt",
        "🤲🏻 Twoje karty: {12} {7} <c>{13}</c> pkt\n",
        "🕹️ Użyj <c>{14} <obstawiane 🪙></c>, aby zagrać ponownie.",
      ],
      playerWin: [
        "{0} Wygrał{1}ś grę w blackjacka z krupier{2} {3} <c>{4}</c>! Masz więcej punktów.\n",
        "💰 Wygrana: <c>{5}</c> 🪙 {6} 👛 Masz teraz: <c>{7}</c> 🪙\n",
        "🥃 Karty {8}: {9} {6} {10} pkt",
        "🤲🏻 Twoje karty: {11} {6} <c>{12}</c> pkt\n",
        "🕹️ Użyj <c>{13} <obstawiane 🪙></c>, aby zagrać ponownie.",
      ],
      playerNatural: [
        "{0} Wygrał{1}ś grę w blackjacka z krupier{2} {3} <c>{4}</c>! Trafił{1}ś <c>21</c> punktów na starcie.\n",
        "💰 Wygrana: <c>{5}</c> 🪙 {6} 👛 Masz teraz: <c>{7}</c> 🪙\n",
        "🥃 Karty {8}: {9} {6} {10} pkt",
        "🤲🏻 Twoje karty: {11} {6} <c>{12}</c> pkt\n",
        "🕹️ Użyj <c>{13} <obstawiane 🪙></c>, aby zagrać ponownie.",
      ],
      dealerNatural: [
        "{0} Przegrał{1}ś grę w blackjacka z krupier{2} {3} <c>{4}</c>! Krupier{5} trafił{6} <c>21</c> punktów na starcie.\n",
        "💰 Przegrana: <c>{7}</c> 🪙 {8} 👛 Masz teraz: <c>{9}</c> 🪙\n",
        "🥃 Karty {10}: {11} {8} {12} pkt",
        "🤲🏻 Twoje karty: {13} {8} <c>{14}</c> pkt\n",
        "🕹️ Użyj <c>{15} <obstawiane 🪙></c>, aby zagrać ponownie.",
      ],
      pushNatural: [
        "{0} Remisujesz grę w blackjacka z krupier{1} {2} <c>{3}</c>! Obie strony tafiły <c>21</c> punktów na starcie.\n",
        "💰 Stawka: <c>{4}</c> 🪙 {5} 👛 Masz teraz: <c>{6}</c> 🪙\n",
        "🥃 Karty {7}: {8} {5} {9} pkt",
        "🤲🏻 Twoje karty: {10} {5} <c>{11}</c> pkt\n",
        "🕹️ Użyj <c>{12} <obstawiane 🪙></c>, aby zagrać ponownie.",
      ],
      push: [
        "{0} Remisujesz grę w blackjacka z krupier{1} {2} <c>{3}</c>! Obie strony zakończyły z tą samą ilością punktów.\n",
        "💰 Stawka: <c>{4}</c> 🪙 {5} 👛 Masz teraz: <c>{6}</c> 🪙\n",
        "🥃 Karty {7}: {8} {5} {9} pkt",
        "🤲🏻 Twoje karty: {10} {5} <c>{11}</c> pkt\n",
        "🕹️ Użyj <c>{12} <obstawiane 🪙></c>, aby zagrać ponownie.",
      ],
      awaitingMove: [
        "{0} Dobrał{1}ś kolejną kartę z talii!\n",
        "💰 Stawka: <c>{2}</c> 🪙 {3} 👛 Pozostało: <c>{4}</c> 🪙\n",
        "🥃 Karty {5}: {6} {3} {7} pkt",
        "🤲🏻 Twoje karty: {8} {3} <c>{9}</c> pkt\n",
        "🕹️ Użyj <c>{10} dobierz</c> lub <c>{10} stop</c>, aby kontynuować.",
      ],
    },
    catch: {
      missingFishingRod: "❌ Nie posiadasz aktywnej wędki! Użyj komendy <c>{0}</c>, aby kupić nową.",
      missingBait: "❌ Nie posiadasz aktywnej przynęty! Użyj komendy <c>{0}</c>, aby kupić nową.",
      escaped: "💨 Ryba uciekła! Spróbuj ponownie.",
      snapped: "⛓️‍💥 Linka zerwała się! Spróbuj ponownie.",
      trash: "🗑️ Złowił{0}ś <c>{1}</c>! Spróbuj ponownie.",
      success: "{0} Złowił{1}ś <c>🎏 {2}</c> ważąc{3} <c>⚖️ {4} kg</c> o wartości <c>{5} 🪙</c>! Masz teraz <c>{6} 🪙</c>.",
    },
    daily: {
      cooldown: "🙄 <c>{0}</c>, kolejne darmowe 🪙 będziesz {1} otrzymać za <c>⌚ {2}</c>, <c>{3}</c> i <c>{4}</c>.",
      received: [
        "{0} <c>{1}</c>, otrzymał{2}ś darmowe <c>{3}</c> 🪙! Posiadasz teraz <c>{4} 🪙</c>. Kolejne darmowe 🪙 będziesz {5} otrzymać za <c>⌚ 24 godziny</c>.\n",
        "🤑 Odbieraj regularnie darmowe monety, aby zyskiwać bonus za każdy kolejny dodatkowy dzień!",
      ],
      receivedWithBonus: [
        "{0} <c>{1}</c>, otrzymał{2}ś darmowe <c>{3}</c> 🪙 (w tym dodatkowo <c>{4} 🪙</c> za odbieranie ich <c>{5}</c> dzień z rzędu)! Posiadasz teraz <c>{6} 🪙</c>. Kolejne darmowe 🪙 będziesz {7} otrzymać za <c>⌚ 24 godziny</c>.\n",
        "🤑 Odbieraj regularnie darmowe monety, aby zyskiwać bonus za każdy kolejny dodatkowy dzień!",
      ],
    },
    inventory: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <@użytkownik (opcjonalnie)></c>",
      ],
      done: [
        "{1} Informacje o ekwipunku <c>{2}</c>:",
        "\n🏦 <c>OGÓLNE</c>:",
        "👛 Majątek: <c>{3} 🪙</c>",
        "📅 Ostatnia dzienna nagroda: {4}",
        "🔥 Dni pod rząd: <c>{5}</c>",
        "\n🐟 <c>ŁOWIECTWO</c>:",
        "🎣 Wędka: <c>{6}</c>",
        "⏳ Pozostałe użycia wędki: <c>{7}</c>",
        "🪝 Przynęta: <c>{8}</c>",
        "♾️ Pozostałe użycia przynęty: <c>{9}</c>",
        "⚖️ Złowione ryby: <c>{10}</c>",
        "\n🎰 <c>KASYNO</c>:",
        "🤝🏻 Ostatni zakład: {11}",
        "📈 Wygrane zakłady: <c>{12}</c>",
        "📉 Przegrane zakłady: <c>{13}</c>",
        "🎡 Ostatnia ruletka: {14}",
        "👑 Wygrane ruletki: <c>{15}</c>",
        "💀 Przegrane ruletki: <c>{16}</c>",
        "🃏 Ostatni blackjack: {17}",
        "🌟 Naturalne blackjacki: <c>{18}</c>",
        "🏆 Wygrane blackjacki: <c>{19}</c>",
        "🪫 Przegrane blackjacki: <c>{20}</c>",
        "🫠 Przekroczone blackjacki: <c>{21}</c>",
        "🪃 Zremisowane blackjacki: <c>{22}</c>",
        "\n🥷🏼 <c>NAPADY</c>:",
        "💰 Udane napady: <c>{23}</c>",
        "🔒 Nieudane napady: <c>{24}</c>",
        "💥 Doznane napady: <c>{25}</c>",
        "🛡️ Udaremnione napady: <c>{26}</c>",
        "🕵️ Ostatni napad: {27}",
        "🦹 Ostatnio napadnięt{28}: {29}",
        "⛓️ Aresztowan{28}: {30}",
        "🧰 Ochrona przed napadem: <c>{31}</c>",
        "🎒 Wsparcie przy napadzie: <c>{32}</c>",
      ],
    },
    rank: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:",
        "\n🪙 <c>{1} monety globalnie/grupaglobalnie</c> {2} Pokazuje ranking {3} użytkowników, którzy mają najwięcej monet",
        "\n🔥 <c>{1} dni globalnie/grupaglobalnie</c> {2} Pokazuje ranking {3} użytkowników, którzy odbierają darmowe monety najwięcej dni z rzędu",
        "\n💰 <c>{1} udanenapady globalnie/grupaglobalnie</c> {2} Pokazuje ranking {3} użytkowników, którzy wykonali najwięcej udanych napadów",
        "\n🔒 <c>{1} nieudanenapady globalnie/grupaglobalnie</c> {2} Pokazuje ranking {3} użytkowników, którzy wykonali najwięcej nieudanych napadów",
        "\n💥 <c>{1} doznanenapady globalnie/grupaglobalnie</c> {2} Pokazuje ranking {3} użytkowników, którzy doznali najwięcej napadów",
        "\n🛡️ <c>{1} udaremnionenapady globalnie/grupaglobalnie</c> {2} Pokazuje ranking {3} użytkowników, którzy obronili się przed największą ilością napadów",
        "\n📈 <c>{1} wygranezakłady globalnie/grupaglobalnie</c> {2} Pokazuje ranking {3} użytkowników, którzy wygrali najwięcej zakładów",
        "\n📉 <c>{1} przegranezakłady globalnie/grupaglobalnie</c> {2} Pokazuje ranking {3} użytkowników, którzy przegrali najwięcej zakładów",
        "\n⚖️ <c>{1} złowioneryby globalnie/grupaglobalnie</c> {2} Pokazuje ranking {3} użytkowników, którzy złowili najwięcej ryb",
        "\n👑 <c>{1} wygraneruletki globalnie/grupaglobalnie</c> {2} Pokazuje ranking {3} użytkowników, którzy wygrali najwięcej ruletek",
        "\n💀 <c>{1} przegraneruletki globalnie/grupaglobalnie</c> {2} Pokazuje ranking {3} użytkowników, którzy przegrali najwięcej ruletek",
        "\n🌟 <c>{1} naturalneblackjacki globalnie/grupaglobalnie</c> {2} Pokazuje ranking {3} użytkowników, którzy trafili najwięcej naturalnych blackjacków",
        "\n🏆 <c>{1} wygraneblackjacki globalnie/grupaglobalnie</c> {2} Pokazuje ranking {3} użytkowników, którzy wygrali najwięcej blackjacków",
        "\n🪫 <c>{1} przegraneblackjacki globalnie/grupaglobalnie</c> {2} Pokazuje ranking {3} użytkowników, którzy przegrali najwięcej blackjacków",
        "\n🫠 <c>{1} przekroczoneblackjacki globalnie/grupaglobalnie</c> {2} Pokazuje ranking {3} użytkowników, którzy przekroczyli najwięcej blackjacków",
        "\n🪃 <c>{1} zremisowaneblackjacki globalnie/grupaglobalnie</c> {2} Pokazuje ranking {3} użytkowników, którzy zremisowali najwięcej blackjacków",
        "\n💬 Szukasz rankingu użytkowników w kontekście czatu? Sprawdź komendę <c>{4}</c>.",
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
      rouletteVictoriesGlobal: [
        "👑 Top {0} użytkowników, którzy wygrali najwięcej ruletek globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      rouletteLossesGlobal: [
        "💀 Top {0} użytkowników, którzy przegrali najwięcej ruletek globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      blackjackNaturalsGlobal: [
        "🌟 Top {0} użytkowników, którzy trafili najwięcej naturalnych blackjacków globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      blackjackVictoriesGlobal: [
        "🏆 Top {0} użytkowników, którzy wygrali najwięcej blackjacków globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      blackjackLossesGlobal: [
        "🪫 Top {0} użytkowników, którzy przegrali najwięcej blackjacków globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      blackjackBustsGlobal: [
        "🫠 Top {0} użytkowników, którzy przekroczyli najwięcej blackjacków globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś {2} w rankingu.",
      ],
      blackjackPushesGlobal: [
        "🪃 Top {0} użytkowników, którzy zremisowali najwięcej blackjacków globalnie:", //
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
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      streakGroupGlobal: [
        "🔥 Top {0} członków, którzy odbierają darmowe monety najwięcej dni z rzędu globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      successfulRobberiesGroupGlobal: [
        "💰 Top {0} członków, którzy wykonali najwięcej udanych napadów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      failedRobberiesGroupGlobal: [
        "🔒 Top {0} członków, którzy wykonali najwięcej nieudanych napadów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      sufferedRobberiesGroupGlobal: [
        "💥 Top {0} członków, którzy doznali najwięcej napadów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      defendedRobberiesGroupGlobal: [
        "🛡️ Top {0} członków, którzy obronili się przed największą ilością napadów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      betVictoriesGroupGlobal: [
        "📈 Top {0} członków, którzy wygrali najwięcej zakładów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      betLossesGroupGlobal: [
        "📉 Top {0} członków, którzy przegrali najwięcej zakładów globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      rouletteVictoriesGroupGlobal: [
        "👑 Top {0} członków, którzy wygrali najwięcej ruletek globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      rouletteLossesGroupGlobal: [
        "💀 Top {0} członków, którzy przegrali najwięcej ruletek globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      blackjackNaturalsGroupGlobal: [
        "🌟 Top {0} członków, którzy trafili najwięcej naturalnych blackjacków globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      blackjackVictoriesGroupGlobal: [
        "🏆 Top {0} członków, którzy wygrali najwięcej blackjacków globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      blackjackLossesGroupGlobal: [
        "🪫 Top {0} członków, którzy przegrali najwięcej blackjacków globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      blackjackBustsGroupGlobal: [
        "🫠 Top {0} członków, którzy przekroczyli najwięcej blackjacków globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      blackjackPushesGroupGlobal: [
        "🪃 Top {0} członków, którzy zremisowali najwięcej blackjacków globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      caughtFishGroupGlobal: [
        "⚖️ Top {0} członków, którzy złowili najwięcej ryb globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
    },
    rob: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <@użytkownik></c>",
      ],
      arrested: "👮🏼 Nie możesz teraz wykonać napadu, ponieważ jesteś aresztowan{0} jeszcze przez <c>⌚ {1}</c> i <c>{2}</c>.",
      cooldown: "🏴‍☠️ Kolejny napad będziesz {0} wykonać za <c>⌚ {1}</c> i <c>{2}</c>.",
      nothingNothingCaught:
        "🚨 Próbował{0}ś okraść <c>{1}</c>, któr{2} nie posiadał{3} żadnych zabezpieczeń z <c>{4} 🪙</c>. Niestety nie miał{0}ś żadnych pomocniczych narzędzi i został{0}ś przyłapan{5} przez policję. Zapłacił{0}ś grzywnę w wysokości <c>{6} 🪙</c> i został{7}ś aresztowan{5} na <c>⌚ godzinę</c>. Masz teraz <c>{8} 🪙</c>.",
      nothingNothingUncaught:
        "{0} <c>{1}</c> nie posiadał{2} żadnego zabezpieczenia i udało Ci się okraść {3} z <c>{4} 🪙</c> bez użycia dodatkowych narzędzi! Masz teraz <c>{5} 🪙</c>.",
      nothingHighProofBeerCaught:
        "🚨 Próbował{0}ś okraść <c>{1}</c>, któr{2} nie posiadał{3} żadnych zabezpieczeń z <c>{4} 🪙</c>. Niestety był{0}ś pod wpływem alkoholu i został{0}ś przyłapan{5} przez policję. Zapłacił{0}ś podwójną grzywnę w wysokości <c>{6} 🪙</c> i został{7}ś aresztowan{5} na <c>⌚ godzinę</c>. Masz teraz <c>{8} 🪙</c>.",
      nothingHighProofBeerUncaught:
        "{0} <c>{1}</c> nie posiadał{2} żadnego zabezpieczenia i udało Ci się okraść {3} z <c>{4} 🪙</c> pod wpływem alkoholu! Masz teraz <c>{5} 🪙</c>.",
      nothingBribeForThePoliceCaught:
        "🚨 Próbował{0}ś okraść <c>{1}</c>, któr{2} nie posiadał{3} żadnych zabezpieczeń z <c>{4} 🪙</c>. Niestety został{0}ś przyłapan{5} przez policję, ale ominęła Cię grzywna i aresztowanie, ponieważ wręczył{0}ś im łapówkę.",
      nothingBribeForThePoliceUncaught:
        "{0} <c>{1}</c> nie posiadał{2} żadnego zabezpieczenia i udało Ci się okraść {3} z <c>{4} 🪙</c>! Zachował{5}ś swoją łapówkę dla policji, ponieważ nie przydała się. Masz teraz <c>{6} 🪙</c>.",
      nothingFastCarCaught:
        "🚨 <c>{0}</c> nie posiadał{1} żadnego zabezpieczenia i udało Ci się okraść {2} z <c>{3} 🪙</c>! Został{4}ś przyłapan{5} przez policję, ale udało Ci się uciec z łupem dzięki szybkiemu samochodowi. Masz teraz <c>{6} 🪙</c>.",
      nothingFastCarUncaught:
        "{0} <c>{1}</c> nie posiadał{2} żadnego zabezpieczenia i udało Ci się okraść {3} z <c>{4} 🪙</c>! Zachował{5}ś szybki samochód, ponieważ nie przydał się. Masz teraz <c>{6} 🪙</c>.",
      steelPadlockNothingCaught:
        "🚨 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c> bez żadnych pomocnicznych narzędzi. Niestety został{0}ś przyłapan{3} przez policję próbując otworzyć kłódkę i został{0}ś aresztowan{3} na <c>⌚ godzinę</c>.",
      steelPadlockNothingUncaught:
        "🔒 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c> bez żadnych pomocnicznych narzędzi. Niestety napotkał{0}ś na kłódkę, której nie udało Ci się otworzyć.",
      steelPadlockHighProofBeerCaught:
        "🚨 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c> pod wpływem alkoholu. Niestety został{0}ś przyłapan{3} przez policję próbując otworzyć kłódkę i został{0}ś aresztowan{3} na <c>⌚ godzinę</c>.",
      steelPadlockHighProofBeerUncaught:
        "🔒 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c> pod wpływem alkoholu. Niestety napotkał{0}ś na kłódkę, której nie udało Ci się otworzyć.",
      steelPadlockBribeForThePoliceCaught:
        "🚨 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c>. Niestety został{0}ś przyłapan{3} przez policję próbując otworzyć kłódkę, ale nie został{0}ś aresztowan{3}, ponieważ wręczył{0}ś im łapówkę.",
      steelPadlockBribeForThePoliceUncaught:
        "🔒 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c>. Niestety napotkał{0}ś na kłódkę, której nie udało Ci się otworzyć. Zachował{0}ś swoją łapówkę dla policji, ponieważ nie przydała się.",
      steelPadlockFastCarCaught:
        "🚨 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c>. Niestety został{0}ś przyłapan{3} przez policję próbując otworzyć kłódkę, ale udało Ci się uciec dzięki szybkiemu samochodowi.",
      steelPadlockFastCarUncaught:
        "🔒 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c>. Niestety napotkał{0}ś na kłódkę, której nie udało Ci się otworzyć. Zachował{0}ś szybki samochód, ponieważ nie przydał się.",
      aggressiveDogNothingCaught:
        "🚨 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c> bez żadnych pomocnicznych narzędzi. Niestety został{0}ś przyłapan{3} przez policję próbując ominąć agresywnego psa i został{0}ś aresztowan{3} na <c>⌚ godzinę</c>.",
      aggressiveDogNothingUncaught:
        "🐶 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c> bez żadnych pomocnicznych narzędzi. Niestety został{0}ś zranion{3} przez agresywnego psa i musiał{0}ś zapłacić <c>{4} 🪙</c> za leczenie. Masz teraz <c>{5} 🪙</c>.",
      aggressiveDogHighProofBeerCaught:
        "🚨 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c> pod wpływem alkoholu. Niestety został{0}ś przyłapan{3} przez policję próbując ominąć agresywnego psa i został{0}ś aresztowan{3} na <c>⌚ godzinę</c>.",
      aggressiveDogHighProofBeerUncaught:
        "🐶 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c> pod wpływem alkoholu. Niestety został{0}ś zranion{3} przez agresywnego psa i musiał{0}ś zapłacić <c>{4} 🪙</c> za leczenie. Masz teraz <c>{5} 🪙</c>.",
      aggressiveDogBribeForThePoliceCaught:
        "🚨 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c>. Niestety został{0}ś przyłapan{3} przez policję próbując ominąć agresywnego psa, ale nie został{0}ś aresztowan{3}, ponieważ wręczył{0}ś im łapówkę.",
      aggressiveDogBribeForThePoliceUncaught:
        "🐶 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c>. Niestety został{0}ś zranion{3} przez agresywnego psa i musiał{0}ś zapłacić <c>{4} 🪙</c> za leczenie. Zachował{0}ś swoją łapówkę dla policji, ponieważ nie przydała się. Masz teraz <c>{5} 🪙</c>.",
      aggressiveDogFastCarCaught:
        "🚨 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c>. Niestety został{0}ś przyłapan{3} przez policję próbując ominąć agresywnego psa, ale udało Ci się uciec dzięki szybkiemu samochodowi.",
      aggressiveDogFastCarUncaught:
        "🐶 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c>. Niestety został{0}ś zaatakowan{3} przez agresywnego psa, ale udało Ci się uciec przed pogryzieniem dzięki szybkiemu samochodowi.",
      clusterBombNothingCaught:
        "🚨 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c> bez żadnych pomocnicznych narzędzi. Niestety został{0}ś przyłapan{3} przez policję próbując ominąć bombę kasetową i został{0}ś aresztowan{3} na <c>⌚ godzinę</c>.",
      clusterBombNothingUncaught:
        "💣 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c> bez żadnych pomocnicznych narzędzi. Niestety został{0}ś zranion{3} przez bombę kasetową i musiał{0}ś zapłacić <c>{4} 🪙</c> za leczenie. Masz teraz <c>{5} 🪙</c>.",
      clusterBombHighProofBeerCaught:
        "🚨 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c> pod wpływem alkoholu. Niestety został{0}ś przyłapan{3} przez policję próbując ominąć bombę kasetową i został{0}ś aresztowan{3} na <c>⌚ godzinę</c>.",
      clusterBombHighProofBeerUncaught:
        "💣 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c> pod wpływem alkoholu. Niestety został{0}ś zranion{3} przez bombę kasetową i musiał{0}ś zapłacić <c>{4} 🪙</c> za leczenie. Masz teraz <c>{5} 🪙</c>.",
      clusterBombBribeForThePoliceCaught:
        "🚨 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c>. Niestety został{0}ś przyłapan{3} przez policję próbując ominąć bombę kasetową, ale nie został{0}ś aresztowan{3}, ponieważ wręczył{0}ś im łapówkę.",
      clusterBombBribeForThePoliceUncaught:
        "💣 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c>. Niestety został{0}ś zranion{3} przez bombę kasetową i musiał{0}ś zapłacić <c>{4} 🪙</c> za leczenie. Zachował{0}ś swoją łapówkę dla policji, ponieważ nie przydała się. Masz teraz <c>{5} 🪙</c>.",
      clusterBombFastCarCaught:
        "🚨 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c>. Niestety został{0}ś przyłapan{3} przez policję próbując ominąć bombę kasetową, ale udało Ci się uciec dzięki szybkiemu samochodowi.",
      clusterBombFastCarUncaught:
        "💣 Próbował{0}ś okraść <c>{1}</c> z <c>{2} 🪙</c>. Niestety został{0}ś zaatakowan{3} przez bombę kasetową, ale udało Ci się uciec przed wybuchem dzięki szybkiemu samochodowi.",
    },
    roulette: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n",
        "✨ <c>{1} <obstawiane 🪙> <zielone/czerwone/czarne/parzyste/nieparzyste/niskie/wysokie/0-36></c>\n",
        "✨ Jeśli wylosowane pole będzie zgodne z podanym lub będzie należało do wskazanej grupy, zachowasz swoje 🪙 i otrzymasz nagrodę. W przeciwnym wypadku stracisz obstawione 🪙.\n",
        "✨ Mnożnik wynosi <c>x36</c> w przypadku wskazania konkretnego pola, oraz <c>x2</c> w przypadku wskazania grupy.\n",
        "✨ Masz dokładnie <c>2.7%</c> szans na trafienie w konkretne pole, oraz <c>48.65%</c> na trafienie w każdą z grup.\n",
        "💡 Przykłady:",
        "⭐ <c>{1} 67 niskie</c>",
        "⭐ <c>{1} połowa czarne</c>",
        "⭐ <c>{1} wszystko 0</c>",
      ],
      victory: [
        "👑 Wygrał{0}ś <c>{1} 🪙</c>, masz teraz <c>{2} 🪙</c>.\n", //
        "🎯 Gdzie spadła kulka:\n",
        "{3}\n",
        "{4} Twój typ: {5} <c>{6}</c> (Mnożnik: <c>x{7}</c>)",
      ],
      loss: [
        "💀 Przegrał{0}ś <c>{1} 🪙</c>, masz teraz <c>{2} 🪙</c>.\n", //
        "🎯 Gdzie spadła kulka:\n",
        "{3}\n",
        "{4} Twój typ: {5} <c>{6}</c> (Mnożnik: <c>x{7}</c>)",
      ],
    },
    shop: {
      summary: [
        "{0} Przedmioty i ułatwienia dostępne do zakupu:",
        "\n🎣 <c>WĘDKI</c>:",
        "1. {2} <c>{3}</c> {1} {4} 🪙",
        "2. {5} <c>{6}</c> {1} {7} 🪙",
        "3. {8} <c>{9}</c> {1} {10} 🪙",
        "\n🪝 <c>PRZYNĘTY</c>:",
        "4. {11} <c>{12}</c> {1} {13} 🪙",
        "5. {14} <c>{15}</c> {1} {16} 🪙",
        "6. {17} <c>{18}</c> {1} {19} 🪙",
        "\n🛡️ <c>OCHRONA PRZED ZŁODZIEJAMI</c>:",
        "7. {20} <c>{21}</c> {1} {22} 🪙",
        "8. {23} <c>{24}</c> {1} {25} 🪙",
        "9. {26} <c>{27}</c> {1} {28} 🪙",
        "\n🎒 <c>WSPARCIE PRZY KRADZIEŻY</c>:",
        "10. {29} <c>{30}</c> {1} {31} 🪙",
        "11. {32} <c>{33}</c> {1} {34} 🪙",
        "12. {35} <c>{36}</c> {1} {37} 🪙",
        "\n👛 Twój majątek: <c>{38} 🪙</c>",
        "\n💡 Aby sprawdzić szczegóły przedmiotu, wpisz <c>{39} info <numer></c>. Aby go kupić, wpisz <c>{39} kup <numer></c>.",
      ],
      invalidItemNumber: "❌ Podany numer przedmiotu jest nieprawidłowy!",
      sameTypeItemAlreadyActive: "❌ Nie możesz zakupić tej rzeczy, ponieważ posiadasz już aktywny przedmiot tego samego typu: <c>{0} {1}</c>",
      bought: "✅ Zakupił{0}ś <c>{1} {2}</c> za <c>{3} 🪙</c>! Masz teraz <c>{4} 🪙</c>.",
      details: [
        "{0} Informacje o przedmiocie <c>{1}</c>:\n", //
        "🏷️ Opis: <c>{2}</c>",
        "📐 Charakterystyka: <c>{3}</c>",
        "🛒 Cena: <c>{4}</c> 🪙",
        "\n💡 Aby kupić ten przedmiot, wpisz <c>{5} kup {6}</c>.",
      ],
    },
    tip: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} @użytkownik <liczba 🪙></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1} @użytkownik 69</c>",
        "⭐ <c>{1} @użytkownik 4.20</c>",
        "⭐ <c>{1} @użytkownik 13.37</c>",
      ],
      done: "✅ Pomyślnie przekazał{0}ś <c>{1} 🪙</c> <c>{2}</c>! Masz teraz <c>{3} 🪙</c>.",
    },
    achievement: {
      empty: "❌ Musisz podać treść osiągnięcia! (maks. <c>{0}</c> znaki)",
      mentions: "❌ Treść osiągnięcia nie może zawierać wzmianek!",
      tooLong: "❌ Treść osiągnięcia jest zbyt długa! (maks. <c>{0}</c> znaki, podano <c>{1}</c>)",
      generating: "⏳ Trwa generowanie osiągnięcia...",
      done: "{0} Oto wygenerowane osiągnięcie:",
    },
    airplane: {
      searching: "⏳ Szukam zdjęcia samolotu...",
      done: "{0} Oto losowe zdjęcie samolotu autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    car: {
      searching: "⏳ Szukam zdjęcia samochodu...",
      done: "{0} Oto losowe zdjęcie samochodu autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    coinflip: {
      heads: "🦅 Orzeł",
      tails: "🪙 Reszka",
    },
    couple: {
      tooFewUsers: "❌ W grupie znajduje się zbyt mało członków, którzy skorzystali z Ambienta!",
      done: "{0} Para najlepiej pasujących do siebie osób w tej grupie to <c>{1}</c> i <c>{2}</c> (<c>{3}%</c>) 💍",
    },
    diceroll: "{0} Wynik rzutu kostką: <c>{1}</c>",
    heart: {
      empty: "❌ Musisz podać treść serca! (maks. <c>{0}</c> znaków)",
      mentions: "❌ Treść serca nie może zawierać wzmianek!",
      tooLong: "❌ Treść serca jest zbyt długa! (maks. <c>{0}</c> znaków, podano <c>{1}</c>)",
      generating: "⏳ Trwa generowanie serca...",
      done: "{0} Oto wygenerowane serce:",
    },
    labubu: {
      searching: "⏳ Szukam zdjęcia Labubu...",
      done: "{0} Oto losowe zdjęcie Labubu autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    meme: {
      searching: "⏳ Szukam losowego mema...",
      done: "{0} Oto losowy mem autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    motorcycle: {
      searching: "⏳ Szukam zdjęcia motocyklu...",
      done: "{0} Oto losowe zdjęcie motocyklu autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    train: {
      searching: "⏳ Szukam zdjęcia pociągu...",
      done: "{0} Oto losowe zdjęcie pociągu autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    tvp: {
      empty: "❌ Musisz podać treść paska! (maks. <c>{0}</c> znaków)",
      mentions: "❌ Treść paska nie może zawierać wzmianek!",
      tooLong: "❌ Treść paska jest zbyt długa! (maks. <c>{0}</c> znaków, podano <c>{1}</c>)",
      generating: "⏳ Trwa generowanie paska...",
      done: "{0} Oto wygenerowany pasek:",
    },
    apod: {
      searching: "⏳ Szukam astronomicznego zdjęcia dnia...",
      doneVideoExternal: "{0} Oto astronomiczny filmik dnia pod tytułem <c>{1}</c>: {2}",
      doneVideo: "{0} Oto astronomiczny filmik dnia pod tytułem <c>{1}</c>:",
      done: "{0} Oto astronomiczne zdjęcie dnia pod tytułem <c>{1}</c>:",
    },
    bot: [
      "{0} Informacje o Ambiencie:",
      "\n📝 <c>OGÓLNE</c>:",
      "☯️ RAM: <c>{1}/{2} GiB</c> {3} <c>{4}%</c>",
      "💾 NVMe: <c>{5}/{6} GiB</c> {3} <c>{7}%</c>",
      "🏓 Ping: <c>{8} ms</c>",
      "📦 Instancja: <c>{9}</c>",
      "🤖 Uruchomione boty: <c>{10}</c>",
      "🌡️ Średnia temperatura CPU: <c>{11}°C</c> {12}",
      "♨️ Średnia temperatura NVMe: <c>{13}°C</c> {14}",
      "💖 Liczba wspierających: <c>{15}</c>",
      "🍒 Data powstania: <c>{16}</c>",
      "🥐 Data powstania (v3): <c>{17}</c>",
      "\n✨ <c>JĄDRO</c>:",
      "🔖 Wersja: <c>{18}</c>",
      "🌳 Środowisko: <c>{19}</c>",
      "⌚ Czas działania: <c>{20}</c>",
      "🆙 Data aktualizacji: <c>{21}</c> {3} <c>{22}</c>",
      "\n🔌 <c>KLIENT</c>:",
      "🔖 Wersja: <c>{23}</c>",
      "🌳 Środowisko: <c>{24}</c>",
      "⌚ Czas działania: <c>{25}</c>",
      "🆙 Data aktualizacji: <c>{26}</c> {3} <c>{27}</c>",
      "\n🪙 <c>EKONOMIA</c>:",
      "🔖 Wersja: <c>{28}</c>",
      "🌳 Środowisko: <c>{29}</c>",
      "⌚ Czas działania: <c>{30}</c>",
      "🆙 Data aktualizacji: <c>{31}</c> {3} <c>{32}</c>",
      "\n📱 Ten bot został stworzony <c>całkowicie za darmo</c> na stronie {33}, Ty również możesz to zrobić, aby korzystać z niego na swoich grupach!",
      "\n🤗 Dołącz na nasz <c>serwer Discord</c>, aby być na bieżąco z nowościami dotyczącymi <c>Ambienta</c>, a także uzyskać pomoc i odpowiedzi na pytania: {34}",
    ],
    group: {
      collecting: "⏳ Zbieram informacje o grupie...",
      done: [
        "{0} Informacje o grupie <c>{1}</c>:\n",
        "🆔 ID: <c>{2}</c>",
        "👥 Członkowie: <c>{3}</c>",
        "👮🏻‍♂️ Administratorzy: <c>{4}</c>",
        "👨🏻 Mężczyźni: <c>{5}</c>",
        "👩🏼 Kobiety: <c>{6}</c>",
        "🤗 Użytkownicy Ambienta: <c>{7}</c>",
        "🎨 Nazwa motywu: <c>{8}</c>",
        "🗂 Widoczne wiadomości: <c>{9}</c>",
        "🗃 Przetworzone wiadomości: <c>{10}</c>",
        "🤖 Wykonane komendy: <c>{11}</c>",
        "🐒 Liczba oznaczeń: <c>{12}</c>",
        "⚠️ Liczba ostrzeżeń: <c>{13}</c>",
        "🧐 Zatwierdzanie członków: <c>{14}</c>",
        "⏳ Członkowie w kolejce: <c>{15}</c>",
        "🔞 NSFW: <c>{16}</c>",
        "🤐 Interakcje: <c>{17}</c>",
        "👀 Przywracanie wiadomości: <c>{18}</c>",
        "⛓️ Tryb więzienia: <c>{19}</c>",
        "🔗 Link do zaproszenia (Ambient): {20}",
        "♾️ Link do zaproszenia (Meta): {21}",
        "🤓 Pierwsze użycie Ambienta: <c>{23}</c> {22} <c>{24}</c>",
      ],
    },
    help: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <nazwa komendy (opcjonalnie)></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1}</c>",
        "⭐ <c>{1} {2}</c>",
        "⭐ <c>{1} {3}</c>",
      ],
      list: [
        "{0} Lista komend dostępnych w Ambiencie (<c>{1}</c>):\n",
        "🦊 Zwierzęta (<c>{2}</c>): {3}\n",
        "⚙️ Konfiguracja (<c>{4}</c>): {5}\n",
        "🪙 Ekonomia (<c>{6}</c>): {7}\n",
        "👾 Zabawa (<c>{8}</c>): {9}\n",
        "ℹ️ Informacje (<c>{10}</c>): {11}\n",
        "🔞 NSFW (<c>{12}</c>): {13}\n",
        "📸 Społecznościowe (<c>{14}</c>): {15}\n",
        "🛠️ Narzędzia (<c>{16}</c>): {17}\n",
        "✨ Aby zobaczyć szczegółowe informacje na temat wybranej komendy, wpisz <c>{18} <nazwa komendy></c>, np. <c>{18} {19}</c>.",
        "\n📱 Ten bot został stworzony <c>całkowicie za darmo</c> na stronie {20}, Ty również możesz to zrobić, aby korzystać z niego na swoich grupach!",
        "\n🤗 Dołącz na nasz <c>serwer Discord</c>, aby być na bieżąco z nowościami dotyczącymi <c>Ambienta</c>, a także uzyskać pomoc i odpowiedzi na pytania: {21}",
      ],
      commandNotFound: "❌ Nie odnaleziono komendy. Wpisz <c>{0}</c> aby uzyskać listę dostępnych komend.",
      about: [
        "{0} Informacje o komendzie <c>{1}</c>:\n", //
        "✏ Opis: <c>{2}</c>",
        "🗃 Kategoria: <c>{3}</c>",
        "⚓ Inne nazwy: {4}",
      ],
    },
    instances: "{0} Informacje o instancjach Ambienta:\n\n{1}",
    nodes: "{0} Informacje o węzłach Ambienta:\n\n{1}",
    rules: {
      empty: [
        "{0} Zasady grupy nie są obecnie ustawione.", //
        "\n📝 Aby ustawić zasady grupy, wpisz <c>{1} <treść zasad></c>.",
      ],
      view: [
        "{0} Oto zasady grupy <c>{1}</c> określone przez administrację:\n",
        "{2}",
        "\n📝 Aby zmienić zasady grupy, wpisz <c>{3} <treść nowych zasad></c>.",
        "\n🗑️ Aby usunąć zasady grupy, wpisz <c>{3} usuń</c>.",
      ],
      mentions: "❌ Treść zasad grupy nie może zawierać wzmianek!",
      removed: "✅ Pomyślnie usunięto zasady grupy!",
      tooLong: "❌ Treść zasad grupy jest zbyt długa! (maks. <c>{0}</c> znaków, podano <c>{1}</c>)",
      updated: "✅ Pomyślnie zaktualizowano zasady grupy!",
    },
    team: [
      "{0} Lista członków załogi Ambienta:\n",
      "{1}",
      "\n🤗 Chcesz zostać jednym z nas? Wystarczy, że wykażesz się aktywnością i pomocą dla innych użytkowników na naszym <c>serwerze Discord</c>, a odezwiemy się do Ciebie gdy zauważymy Twoje starania: {2}",
    ],
    top: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:",
        "\n✉️ <c>{1} wiadomości grupa/globalnie/grupaglobalnie</c> {2} Pokazuje top {3} użytkowników, którzy wysłali najwięcej wiadomości",
        "\n🪄 <c>{1} komendy grupa/globalnie/grupaglobalnie</c> {2} Pokazuje top {3} użytkowników, którzy wykonali najwięcej komend",
        "\n🐒 <c>{1} oznaczenia grupa/globalnie/grupaglobalnie</c> {2} Pokazuje top {3} użytkowników, którzy zostali najwięcej oznaczeni",
        "\n🪙 Szukasz top użytkowników w kontekście ekonomii? Sprawdź komendę <c>{4}</c>.",
      ],
      messagesGroup: [
        "✉️ Top {0} członków, którzy wysłali najwięcej wiadomości w tej grupie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      commandsGroup: [
        "🪄 Top {0} członków, którzy wykonali najwięcej komend w tej grupie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      mentionsGroup: [
        "🐒 Top {0} członków, którzy zostali najwięcej oznaczeni w tej grupie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      messagesGlobal: [
        "✉️ Top {0} użytkowników, którzy wysłali najwięcej wiadomości globalnie:", //
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
        "✉️ Top {0} członków, którzy wysłali najwięcej wiadomości globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      commandsGroupGlobal: [
        "🪄 Top {0} członków, którzy wykonali najwięcej komend globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
      ],
      mentionsGroupGlobal: [
        "🐒 Top {0} członków, którzy zostali najwięcej oznaczeni globalnie:", //
        "\n{1}\n",
        "🧮 Jesteś <c>#{2}</c> w rankingu.",
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
        "☁️ Zachmurzenie: <c>{11}%</c>",
        "🌅 Wschód słońca: <c>{12}</c>",
        "🌇 Zachód słońca: <c>{13}</c>",
      ],
    },
    boobs: {
      searching: "⏳ Szukam zdjęcia piersi...",
      done: "{0} Oto losowe zdjęcie piersi autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    butt: {
      searching: "⏳ Szukam zdjęcia pośladków...",
      done: "{0} Oto losowe zdjęcie pośladków autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    dick: {
      searching: "⏳ Szukam zdjęcia penisa...",
      done: "{0} Oto losowe zdjęcie penisa autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    feet: {
      searching: "⏳ Szukam zdjęcia kobiecych stóp...",
      done: "{0} Oto losowe zdjęcie kobiecych stóp autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    konachan: {
      searching: "⏳ Szukam zdjęcia Konachan...",
      done: "{0} Oto losowe zdjęcie Konachan:",
    },
    muscles: {
      searching: "⏳ Szukam zdjęcia mięśni...",
      done: "{0} Oto losowe zdjęcie mięśni autorstwa <c>{1}</c> z <c>{2}</c>:",
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
      empty: "❌ Musisz podać tagi! (maks. <c>{0}</c> znaki)",
      mentions: "❌ Tagi nie mogą zawierać wzmianek!",
      tooLong: "❌ Tagi są zbyt długie! (maks. <c>{0}</c> znaki, podano <c>{1}</c>)",
      searching: "⏳ Szukam zdjęcia pasującego do podanych tagów...",
      notFound: "❌ Nie odnaleziono zdjęcia pasującego do podanych tagów!",
      done: "{0} Oto losowe zdjęcie autorstwa <c>{1}</c> z tagami <c>{2}</c>:",
    },
    veins: {
      searching: "⏳ Szukam zdjęcia żył...",
      done: "{0} Oto losowe zdjęcie żył autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    yandere: {
      searching: "⏳ Szukam zdjęcia Yandere...",
      done: "{0} Oto losowe zdjęcie Yandere autorstwa <c>{1}</c> z <c>{2}</c>:",
    },
    guard: {
      status: [
        "{0} Konfiguracja funkcji ochrony grupy przed zmianą nazwy, zdjęcia, motywu i nicków:\n",
        "🔔 Powiadomienia o zdarzeniach dla administracji grupy: <c>{1}</c>",
        "👉🏻 Blokada zmiany nicków innych członków: <c>{2}</c>",
        "🫡 Blokada zmiany własnego nicku: <c>{3}</c>",
        "🏷️ Blokada zmiany nazwy grupy: <c>{6}</c>",
        "🖼️ Blokada zmiany zdjęcia grupy: <c>{4}</c>",
        "🎨 Blokada zmiany motywu grupy: <c>{5}</c>",
        "\n⚙ Aby zmienić ustawienia, wpisz <c>{7} zmień</c>.",
      ],
      firstSettingQuestion: [
        "🔔 Czy chcesz włączyć powiadomienia o zdarzeniach dla administracji grupy?\n",
        "1. <c>❌ nie</c>",
        "2. <c>✅ tak</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia), aby wybrać pierwsze ustawienie.",
      ],
      secondSettingQuestion: [
        "👉🏻 Czy chcesz włączyć blokadę zmiany nicków innych członków?\n",
        "1. <c>❌ nie</c>",
        "2. <c>✅ tak</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia), aby wybrać pierwsze ustawienie.",
      ],
      thirdSettingQuestion: [
        "🫡 Czy chcesz włączyć blokadę zmiany własnego nicku?\n",
        "1. <c>❌ nie</c>",
        "2. <c>✅ tak</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia), aby wybrać pierwsze ustawienie.",
      ],
      fourthSettingQuestion: [
        "🏷️ Czy chcesz włączyć blokadę zmiany nazwy grupy?\n",
        "1. <c>❌ nie</c>",
        "2. <c>✅ tak</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia), aby wybrać pierwsze ustawienie.",
      ],
      fifthSettingQuestion: [
        "🖼️ Czy chcesz włączyć blokadę zmiany zdjęcia grupy?\n",
        "1. <c>❌ nie</c>",
        "2. <c>✅ tak</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia), aby wybrać pierwsze ustawienie.",
      ],
      sixthSettingQuestion: [
        "🎨 Czy chcesz włączyć blokadę zmiany motywu grupy?\n",
        "1. <c>❌ nie</c>",
        "2. <c>✅ tak</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia), aby wybrać pierwsze ustawienie.",
      ],
      saved: "✅ Ustawienia funkcji ochrony grupy przed zmianą nazwy, zdjęcia, motywu i nicków zostały pomyślnie zapisane!",
    },
    invitation: {
      status: [
        "{0} Konfiguracja linku do zaproszenia do grupy:\n",
        "🔗 Aktualny link: {1}",
        "🧮 Liczba użyć: <c>{2}</c>",
        "\n🆔 Aby włączyć lub zmienić link do zaproszenia do grupy, wpisz <c>{3} <nowe ID zaproszenia></c>.",
        "\n🚪 Aby wyłączyć link do zaproszenia do grupy, wpisz <c>{3} off</c>.",
      ],
      tooShort: "❌ Podane ID zaproszenia jest zbyt krótkie! (min. <c>{0}</c> znaki, podano <c>{1}</c>)",
      tooLong: "❌ Podane ID zaproszenia jest zbyt długie! (maks. <c>{0}</c> znaki, podano <c>{1}</c>)",
      illegalCharacters: "❌ Podane ID zaproszenia zawiera niedozwolone znaki, możesz użyć tylko małych i dużych liter oraz cyfr.",
      alreadyUsed: "❌ Podane ID zaproszenia jest już zajęte!",
      saved: "✅ ID zaproszenia do grupy zostało pomyślnie ustawione na <c>{0}</c>! Aktualny link do dołączenia do grupy to {1}",
      disabled: "🚪 Funkcja zaproszeń do grupy została pomyślnie wyłączona!",
      groupAdminOnly: "❌ Ustawienia dotyczące zaproszenia do grupy mogą zostać zmienione tylko przez administratorów grupy!",
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
    jail: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n",
        "✨ <c>{1} on/off</c>",
        "\n💡 Wybierz, czy Ambient ma automatycznie próbować przywracać do grupy członków, kiedy samodzielnie ją opuszczą.",
        "\n🔧 Aktualny status więzienia: <c>{2}</c>",
      ],
      disabled: "🧱 Pomyślnie wyłączono tryb więzienia, Ambient nie będzie próbował automatycznie przywracać do grupy członków, kiedy samodzielnie ją opuszczą.",
      enabled: "🦹🏻 Pomyślnie włączono tryb więzienia, Ambient będzie próbował automatycznie przywracać do grupy członków, kiedy samodzielnie ją opuszczą.",
    },
    premium: [
      "{0} Możesz wesprzeć <c>Ambienta</c>, aby otrzymać Premium i korzystać ze wszystkich funkcji bez ograniczeń - we wszystkich botach stworzonych w systemie <c>Ambienta</c> i na wszystkich grupach. Mając Premium, możesz także ulepszać do <c>3</c> grup jednocześnie, dzięki czemu wszyscy ich członkowie również będą mogli korzystać w nich ze wszystkich funkcji <c>Ambienta</c> bez ograniczeń, niezależnie od tego, czy posiadają Premium.",
      "\n💖 Aktualna liczba wspierających: <c>{1}</c>",
      "\n💎 Twój stan Premium: {2}",
      "\n🔗 Twój link do szczegółów wsparcia i Premium: {3}",
      "\n🤗 Masz pytania lub potrzebujesz pomocy? Dołącz na nasz <c>serwer Discord</c>: {4}",
      "\n🫶🏻 Dziękujemy za wspieranie <c>Ambienta</c>!",
    ],
    purge: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <liczba dni nieaktywności></c>",
      ],
      nothingToPurge: "❌ Wszyscy członkowie grupy byli aktywni przez ostatni{0} <c>{1}</c> {2}!",
      confirmation: [
        "ℹ️ W tej grupie znajduje się obecnie <c>{0}</c> użytkowników, po oczyszczeniu jej z <c>{1}</c> członk{2} któr{3}y by{4} nieaktywn{5} od co najmniej <c>{6}</c> {7}, zostanie ich <c>{8}</c>. Czy chcesz kontynuować?\n",
        "1. <c>✅ tak</c>",
        "2. <c>❌ nie</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranej opcji, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia), aby wybrać pierwszą opcję.",
      ],
      cancelled: "❌ Przerwano oczyszczanie grupy z nieaktywnych członków!",
      jailed: "❌ Poczekaj, aż obecne czyszczenie zakończy się!",
      purging: "⏳ Trwa oczyszczanie grupy z <c>{0}</c> członk{1}...",
      done: "{0} Pomyślnie oczyszczono grupę z <c>{1}</c> członk{2}, usuwanie <c>{3}</c> członk{4} nie powiodło się.",
    },
    restoration: {
      status: [
        "{0} Konfiguracja funkcji przywracania usuniętych wiadomości:\n",
        "🛡 Włączone: <c>{1}</c>",
        "👮🏻‍♂️ Przywracanie wiadomości administracji: <c>{2}</c>",
        "📎 Załączniki jako linki: <c>{3}</c>",
        "👨‍👩‍👧‍👦 Grupa do przywracania: {4}",
        "\n⚙ Aby zmienić ustawienia, wpisz <c>{5} zmień</c>.",
      ],
      firstSettingQuestion: [
        "🛡 Czy chcesz włączyć funkcję przywracania usuniętych wiadomości?\n",
        "1. <c>❌ nie</c>",
        "2. <c>✅ tak</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia), aby wybrać pierwsze ustawienie.",
      ],
      secondSettingQuestion: [
        "👮🏻‍♂️ Czy wiadomości wysłane przez administratorów grupy również mają być przywracane?\n",
        "1. <c>❌ nie</c>",
        "2. <c>✅ tak</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia), aby wybrać pierwsze ustawienie.",
      ],
      thirdSettingQuestion: [
        "📎 Czy załączniki z usuniętych wiadomości mają być przywracane w formie linków?\n",
        "1. <c>❌ nie</c> - załączniki z usuniętych wiadomości będą wysyłane w oryginalnej formie",
        "2. <c>✅ tak</c> - załączniki z usuniętych wiadomości będą wysyłane w formie linków do nich",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranemu ustawieniu, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia), aby wybrać pierwsze ustawienie.",
      ],
      fourthSettingQuestion: [
        "👨‍👩‍👧‍👦 Wybierz grupę, na którą mają być przywracane wiadomości usunięte w tej grupie:\n",
        "{0}",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranej grupie, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia), aby wybrać obecną grupę.",
      ],
      disabled: "📴 Funkcja przywracania usuniętych wiadomości została pomyślnie wyłączona!",
      saved: "✅ Ustawienia funkcji przywracania usuniętych wiadomości zostały pomyślnie zapisane!",
      threadUnavailable:
        "❌ Nie można przywrócić usuniętej wiadomości do skonfigurowanej grupy, ponieważ jest ona niedostępna lub bot nie jest jej członkiem. Skorzystaj z komendy <c>{0}</c>, aby zmienić grupę do przywracania usuniętych wiadomości lub wyłączyć tę funkcję.",
      restored: [
        "👀 <c>{0}</c> usun{1} wiadomość w grupie <c>{2}</c>!",
        "\n💡 Użyj komendy <c>{3}</c>, aby zobaczyć szczegółowe informacje na temat konfiguracji funkcji przywracania usuniętych wiadomości.\n",
        "📨 Data wysłania: <c>{5}</c> {4} <c>{6}</c>",
        "📮 Data usunięcia: <c>{7}</c> {4} <c>{8}</c>",
        "🕰 Usunięto po: {9}",
        "📜 Treść wiadomości: <c>{10}</c>",
      ],
      restoredAttachments: [
        "👀 <c>{0}</c> usun{1} wiadomość w grupie <c>{2}</c>!",
        "\n💡 Użyj komendy <c>{3}</c>, aby zobaczyć szczegółowe informacje na temat konfiguracji funkcji przywracania usuniętych wiadomości.\n",
        "📨 Data wysłania: <c>{5}</c> {4} <c>{6}</c>",
        "📮 Data usunięcia: <c>{7}</c> {4} <c>{8}</c>",
        "🕰 Usunięto po: {9}",
        "📜 Treść wiadomości: <c>{10}</c>",
        "\n📎 Załączniki:\n{11}",
      ],
    },
    roblox: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <nazwa użytkownika></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1} dxmqa_Ok</c>",
        "⭐ <c>{1} Wolfpaq</c>",
        "⭐ <c>{1} wxqa0a</c>",
      ],
      notFound: "❌ Podana nazwa użytkownika nie została odnaleziona!",
      collecting: "⏳ Zbieram informacje o użytkowniku <c>@{0}</c>...",
      done: [
        "{0} Informacje o profilu <c>@{1}</c> w Roblox:\n",
        "🫡 Pełna nazwa: <c>{2}</c>",
        "🆎 Biografia: <c>{3}</c>",
        "💎 Roblox Premium: <c>{4}</c>",
        "🚫 Zbanowane: <c>{5}</c>",
        "🤔 Zweryfikowane: <c>{6}</c>",
        "🤩 Obserwujących: <c>{7}</c>",
        "👀 Obserwowanych: <c>{8}</c>",
        "🫂 Znajomi: <c>{9}</c>",
        "🔗 Profil: {10}",
        "➕ Data utworzenia konta: <c>{12}</c> {11} <c>{13}</c>",
        "👻 Data ostatniej aktywności: <c>{14}</c> {11} <c>{15}</c>",
        "🎭 Poprzednie nazwy: {16}",
        "🙋🏼‍♀️ Teraz online: <c>{17}</c>",
        "🎮 {18} aktywność: {19}",
      ],
    },
    tts: {
      empty: "❌ Musisz podać treść nagrania głosowego! (maks. <c>{0}</c> znaków)",
      mentions: "❌ Treść nagrania głosowego nie może zawierać wzmianek!",
      tooLong: "❌ Treść nagrania głosowego jest zbyt długa! (maks. <c>{0}</c> znaków, podano <c>{1}</c>)",
      generating: "⏳ Trwa generowanie nagrania głosowego...",
      done: "{0} Oto wygenerowane nagranie głosowe:",
    },
    discord: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:", //
        "\n🔌 <c>{1} połącz</c> {2} Pozwala połączyć Twój profil w Ambiencie z kontem Discord",
        "\n🔥 <c>{1} odłącz</c> {2} Pozwala odłączyć Twój profil w Ambiencie od konta Discord",
      ],
      notConnected: "❌ Nie połączył{1}ś profilu w Ambiencie z kontem Discord!",
      disconnected: "✅ Pomyślnie odłączył{0}ś profil w Ambiencie od konta Discord!",
    },
    instagram: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <nazwa użytkownika></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1} klaudixiara</c>",
        "⭐ <c>{1} negatywny</c>",
        "⭐ <c>{1} pqmidor</c>",
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
    afk: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <powód>/off</c>",
        "\n💡 Wybierz swój status AFK, który będzie wyświetlany, gdy ktoś Cię oznaczy.",
        "\n🔧 Aktualny status AFK: <c>{2}</c>",
      ],
      tooLong: "❌ Powód AFK jest zbyt długi! (maks. <c>{0}</c> znaki, podano <c>{1}</c>)",
      disabled: "✅ Pomyślnie wyłączono status AFK!",
      done: "✅ Pomyślnie ustawiono powód AFK na <c>{0}</c>!",
      mentioned: "{0} <c>{1}</c> jest aktualnie AFK, powód: <c>{2}</c>",
    },
    play: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n",
        "✨ <c>{1} <tytuł lub link></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1} Ginseng Strip 2002</c>",
        "⭐ <c>{1} youtu.be/vrQWhFysPKY</c>",
        "⭐ <c>{1} on.soundcloud.com/QPxti</c>",
        "⭐ <c>{1} open.spotify.com/track/7v3rmoy5jcn4h5UqwQyCM3</c>",
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
        "😴 Status AFK: <c>{7}</c>",
        "🏷️ Nick w grupie: <c>{8}</c>",
        "🥰 Ma bota w znajomych: <c>{9}</c>",
        "👮🏻‍♂️ Administrator grupy: <c>{10}</c>",
        "🎂 Obchodzi dziś urodziny: <c>{11}</c>",
        "🌍 Lokalizacja: <c>{12}</c>",
        "🤓 Korzysta z Ambienta od: <c>{14}</c> {13} <c>{15}</c>",
        "🤖 Jest botem: <c>{16}</c>",
        "🖤 Czarna lista: <c>{17}</c>",
        "👑 Członek załogi Ambienta: <c>{18}</c>",
        "#️⃣ Kod Premium: <c>{19}</c>",
        "💎 Stan Premium: {20}",
        "👅 Język w Ambiencie: <c>{21}</c>",
        "🎛️ Połączone Spotify: <c>{22}</c>",
        "🎭 Tryb prywatności: <c>{23}</c>",
        "🫣 Ostatnia aktywność: <c>{24}</c> {13} <c>{25}</c> (w tej grupie: <c>{26}</c>)",
        "🐒 Wzmianki: <c>{27}</c> (w tej grupie: <c>{28}</c>)",
        "✉️ Wysłane wiadomości: <c>{29}</c> (w tej grupie: <c>{30}</c>)",
        "🪄 Wykonane komendy: <c>{31}</c> (w tej grupie: <c>{32}</c>)",
        "🔄 Zaktualizowano dane: <c>{33}</c> {13} <c>{34}</c>",
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
        "\n🔌 <c>{1} połącz</c> {2} Pozwala połączyć Twój profil w Ambiencie z kontem Spotify",
        "\n🔥 <c>{1} odłącz</c> {2} Pozwala odłączyć Twój profil w Ambiencie od konta Spotify",
        "\n🤠 <c>{1} profil <@użytkownik (opcjonalnie)></c> {2} Pozwala sprawdzić informacje o Twoim lub oznaczonego użytkownika profilu Spotify",
        "\n🧐 <c>{1} grupa</c> {2} Pozwala sprawdzić czego obecnie słuchają członkowie tej grupy",
        "\n🎧 <c>{1} aktualnie <@użytkownik (opcjonalnie)></c> {2} Pozwala sprawdzić czego obecnie słuchasz Ty lub oznaczony użytkownik",
        "\n⭐ <c>{1} toputwory 1m/6m/12m <@użytkownik (opcjonalnie)></c> {2} Pozwala sprawdzić Twoje najczęściej słuchane utwory lub oznaczonego użytkownika w podanym zakresie czasu",
        "\n🤩 <c>{1} topartyści 1m/6m/12m <@użytkownik (opcjonalnie)></c> {2} Pozwala sprawdzić Twoich najczęściej słuchanych artystów lub oznaczonego użytkownika w podanym zakresie czasu",
        "\n🕰 <c>{1} ostatnie <@użytkownik (opcjonalnie)></c> {2} Pozwala sprawdzić czego ostatnio słuchał{3}ś Ty lub oznaczony użytkownik",
        "\n🥸 <c>{1} incognito on/off</c> {2} Pozwala wybrać, czy inni członkowie grupy mają mieć możliwość sprawdzania Twoich statystyk Spotify",
        "\n📋 <c>{1} kolejka <utwór lub @użytkownik></c> {2} Pozwala dodać do Twojej kolejki odtwarzania wybrany utwór lub ten, którego słucha oznaczony użytkownik",
        "\n💿 <c>{1} play <utwór lub @użytkownik></c> {2} Pozwala odtworzyć na Twoim koncie Spotify wybrany utwór lub ten, którego słucha oznaczony użytkownik",
        "\n🎶 <c>{1} youtube <@użytkownik (opcjonalnie)></c> {2} Wysyła utwór którego słuchasz Ty lub oznaczony użytkownik z YouTube",
      ],
      incognitoUsage: [
        "{0} Prawidłowe użycie komendy <c>{1} incognito</c>:\n",
        "✨ <c>{1} incognito on/off</c>",
        "\n💡 Wybierz, czy inni członkowie grupy mają mieć możliwość sprawdzania Twoich statystyk Spotify.",
        "\n🔧 Aktualny status incognito: <c>{2}</c>",
      ],
      incognitoDisabled: "🎼 Pomyślnie wyłączono tryb incognito w statystykach Spotify!",
      incognitoEnabled: "👓 Pomyślnie włączono tryb incognito w statystykach Spotify!",
      userIncognito: "❌ <c>{0}</c> posiada włączony tryb incognito, tylko {1} może zobaczyć swoje statystyki Spotify.",
      notConnected: "❌ Nie połączył{1}ś profilu w Ambiencie z kontem Spotify!",
      notConnectedMentioned: "❌ <c>{0}</c> nie połączył{1} profilu w Ambiencie z kontem Spotify!",
      disconnected: "✅ Pomyślnie odłączył{0}ś profil w Ambiencie od konta Spotify!",
      expired: [
        "❌ Twoje połączenie profilu w Ambiencie z serwisem Spotify wygasło! Skorzystaj z komendy <c>{0} połącz</c>.\n",
        "💡 Od <c>20 lipca 2026 roku</c> Spotify wymaga, aby wszystkie połączenia z zewnętrznymi aplikacjami były odnawiane co <c>6 miesięcy</c>.",
      ],
      expiredMentioned: [
        "❌ Połączenie profilu <c>{0}</c> w Ambiencie z serwisem Spotify wygasło! Informacje nie będą dostępne do momentu ponownego połączenia.\n",
        "💡 Od <c>20 lipca 2026 roku</c> Spotify wymaga, aby wszystkie połączenia z zewnętrznymi aplikacjami były odnawiane co <c>6 miesięcy</c>.",
      ],
      expiringSoon: [
        "{0} <c>{1}</c>, Twoje połączenie profilu w Ambiencie z serwisem Spotify wkrótce wygaśnie! Połącz ponownie teraz przy użyciu komendy <c>{2} połącz</c>, aby korzystać z integracji bez przerwy.\n",
        "💡 Od <c>20 lipca 2026 roku</c> Spotify wymaga, aby wszystkie połączenia z zewnętrznymi aplikacjami były odnawiane co <c>6 miesięcy</c>.",
      ],
      statsUnavailable: "❌ Statystyki Twojego profilu dla podanego zakresu czasu są niedostępne, może to być spowodowane zbyt niską aktywnością na połączonym koncie.",
      statsUnavailableMentioned: "❌ Statystyki profilu <c>{0}</c> dla podanego zakresu czasu są niedostępne, może to być spowodowane zbyt niską aktywnością na połączonym koncie.",
      notListening:
        "❌ Niczego aktualnie nie słuchasz. Jeśli to nieprawda, upewnij się, że nie masz włączonej sesji prywatnej i uruchom ponownie aplikację Spotify na swoim urządzeniu.",
      notListeningMentioned: "❌ <c>{0}</c> niczego aktualnie nie słucha lub ma włączoną sesję prywatną.",
      listeningLocal: "❌ <c>{0}</c> słucha obecnie lokalnego utworu, nie możesz odtworzyć go na swoim koncie Spotify.",
      unableToPlay: "❌ Nie udało nam się odtworzyć utworu na Twoim koncie Spotify.",
      unableToQueue: "❌ Nie udało nam się dodać utworu do Twojej kolejki Spotify.",
      premiumRequired: "❌ Odtwarzanie utworów na swoim koncie Spotify przy użyciu Ambienta wymaga posiadania konta <c>💎 Spotify Premium</c>!",
      emptyResults: "❌ Nie znaleziono żadnych pozycji pasujących do Twojego zapytania!",
      mustReplyToVerifiedMessage: "❌ Musisz odpowiedzieć na wiadomość wysłaną przez Ambienta!",
      noPlayableSpotifyTracks: "❌ Wybrana wiadomość nie posiada powiązań z żadnymi utworami Spotify!",
      selectionTimeout: "❌ Nie wybrano żadnej pozycji w ciągu <c>{0}</c> sekund! Spróbuj ponownie.",
      trackSelectionList: [
        "🕵🏽‍♂️ Wybierz pozycję, którą chcesz odtworzyć:\n",
        "{0}",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranej pozycji, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia), aby wybrać pierwszą pozycję.",
      ],
      playbackStarted: "💿 Rozpoczynam odtwarzanie <c>{0}</c> {1} <c>{2}</c> z albumu <c>{3}</c> na urządzeniu <c>{4} {5}</c>...",
      queued: "📋 Dodano <c>{0}</c> {1} <c>{2}</c> z albumu <c>{3}</c> do kolejki odtwarzania!",
      nobodyConnected: "❌ Żaden członek grupy nie połączył swojego konta Spotify z Ambientem!",
      group: [
        "🧐 Czego aktualnie słuchają członkowie grupy <c>{0}</c>?\n",
        "{1}",
        "\n🧮 <c>{2}</c> z <c>{3}</c> członków tej grupy powiązało swój profil w Ambiencie z kontem Spotify, <c>{4}</c> z nich aktualnie słucha muzyki.",
      ],
      profile: [
        "🤠 Informacje o profilu Spotify <c>{0}</c>:\n",
        "🆎 Nazwa: <c>{1}</c>",
        "🌍 Kraj: <c>{2}</c>",
        "💖 Liczba ulubionych: <c>{3}</c>",
        "👀 Liczba obserwujących: <c>{4}</c>",
        "🔗 Profil: {5}",
        "💎 Spotify Premium: <c>{6}</c>",
      ],
      nowListening: [
        "🎧 <c>{0}</c> {1} <c>Aktualnie słucha</c>",
        "\n💿 <c>{2}</c> {1} <c>{3}</c>\n",
        "{4}",
        "\n💽 Album: <c>{5}</c>",
        "💖 W ulubionych: <c>{6}</c>",
        "💾 Plik lokalny: <c>{7}</c>",
        "🎚️ Poziom głośności: <c>{8}%</c>",
        "{9} Urządzenie: <c>{10}</c>",
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
        "{0} Oto Twoja rolka z Instagrama: <c>{1}</c> {2} <c>{3}</c>\n", //
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
        "\n🗑️ <c>{1} usuń <@użytkownik, link lub ID></c> {2} Pozwala usunąć użytkownika z czarnej listy",
        "\n📜 <c>{1} lista</c> {2} Pokazuje listę użytkowników znajdujących się obecnie na czarnej liście",
        "\n🏆 <c>{1} top</c> {2} Pokazuje top administratorów, którzy dodali najwięcej osób do czarnej listy",
      ],
      unableToAdd: "❌ <c>{0}</c> nie może zostać dodan{1} do czarnej listy!",
      alreadyAdded: "❌ <c>{0}</c> znajduje się już na czarnej liście!",
      notFound: "❌ <c>{0}</c> nie znajduje się na czarnej liście!",
      jailed: "❌ Poczekaj, aż obecne operacje na czarnej liście zakończą się!",
      added: "✅ <c>{0}</c> został{1} pomyślnie dodan{2} do czarnej listy!",
      removed: "✅ <c>{0}</c> został{1} pomyślnie usunięt{2} z czarnej listy!",
      empty: "❌ Żaden użytkownik nie znajduje się obecnie na czarnej liście!",
      list: "{0} Lista użytkowników znajdujacych się obecnie na czarnej liście (<c>{1}</c>):\n\n{2}",
      top: [
        "🏆 Top administratorzy, którzy dodali najwięcej osób do czarnej listy:", //
        "\n{0}\n",
        "🧮 Na czarnej liście znajduje się obecnie <c>{1}</c> użytkownik{2}.",
      ],
    },
    connections: {
      noConnections: [
        "ℹ️ Nie zidentyfikowano żadnej grupy kont należących do tego samego użytkownika w tej konwersacji.",
        "\n🔮 Powiązane konta są analizowane i aktualizowane automatycznie na podstawie aktywności na czacie. Jeśli dany profil wykazuje zbyt niską aktywność, może nie zostać połączony z pozostałymi kontami tej samej osoby. Prezentowane zestawienie ma charakter poglądowy, jednak wykrycie powiązania między kontami cechuje się bardzo wysoką dokładnością i minimalnym ryzykiem pomyłki.",
      ],
      done: [
        "{0} Lista grup kont należących do tego samego użytkownika znajdujących się w tej konwersacji:",
        "\n{1}",
        "\n🔮 Powiązane konta są analizowane i aktualizowane automatycznie na podstawie aktywności na czacie. Jeśli dany profil wykazuje zbyt niską aktywność, może nie zostać połączony z pozostałymi kontami tej samej osoby. Prezentowane zestawienie ma charakter poglądowy, jednak wykrycie powiązania między kontami cechuje się bardzo wysoką dokładnością i minimalnym ryzykiem pomyłki.",
      ],
    },
    everyone: "{0} Pomyślnie oznaczono <c>{1}</c> użytkowników!",
    kick: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <@użytkownik></c>",
      ],
      done: "{0} Pomyślnie wyrzucono <c>{1}</c> z grupy!",
    },
    lookup: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <numer telefonu></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1} 789167462</c>",
        "⭐ <c>{1} +48789167462</c>",
        "⭐ <c>{1} +48 789-167-462</c>",
      ],
      mentions: "❌ Numer telefonu nie może zawierać wzmianek!",
      invalid: "❌ Podany numer telefonu jest nieprawidłowy lub nie jest obsługiwany!",
      result: "{0} Operatorem numeru telefonu <c>{1}</c> jest <c>{2}</c> (RPT: <c>{3}</c>).",
    },
    name: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <nowa nazwa grupy></c>",
      ],
      tooLong: "❌ Podana nazwa jest zbyt długa! (maks. <c>{0}</c> znaków, podano <c>{1}</c>)",
      same: "❌ Podana nazwa jest taka sama jak obecnie ustawiona!",
      doneSet: "{0} Pomyślnie nadano grupie nazwę <c>{1}</c>!",
      doneChanged: "{0} Pomyślnie zmieniono nazwę grupy z <c>{1}</c> na <c>{2}</c>!",
    },
    nick: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <@użytkownik (opcjonalnie)> <nowy nick></c>",
        "\n🔧 Twój aktualny nick: <c>{2}</c>",
      ],
      tooLong: "❌ Podany nick jest zbyt długi! (maks. <c>{0}</c> znaków, podano <c>{1}</c>)",
      same: "❌ Podany nick jest taki sam jak obecnie ustawiony!",
      invitationUrlActive: "❌ Ambient nie może zmieniać nicków członków grupy, kiedy link do zaproszenia (Meta) jest aktywny i jednocześnie bot nie jest administratorem grupy.",
      unableToChangeOthers: "❌ Tylko administratorzy grupy mogą zmieniać nicki innych członków!",
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
    publish: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} ogłoszenie/wyróżnienie <treść></c>",
      ],
      announcement: [
        "{0} Ogłoszenie od <c>załogi Ambienta</c>:\n",
        "{1}",
        "\n🤗 Dołącz na nasz <c>serwer Discord</c>, aby być na bieżąco z nowościami dotyczącymi <c>Ambienta</c>, a także uzyskać pomoc i odpowiedzi na pytania: {2}",
      ],
      highlight: [
        "{0} <c>Ambient</c> {1} <c>Wyróżnienie</c>:\n", //
        "{2}",
        "\n🤗 Discord: {3}",
      ],
      confirmation: [
        "ℹ️ Powyżej przedstawiono wiadomość, która zostanie opublikowana. Czy chcesz kontynuować?\n",
        "1. <c>✅ tak</c>",
        "2. <c>❌ nie</c>",
        "\n🪄 Napisz tylko liczbę odpowiadającą wybranej opcji, możesz także zareagować na tę wiadomość używając 👍🏼 (odcień nie ma znaczenia), aby wybrać pierwszą opcję.",
      ],
      cancelled: "❌ Przerwano publikację wiadomości!",
      done: [
        "✅ Pomyślnie wysłano żądania publikacji!\n", //
        "📝 Odpowiedzi ze wszystkich instancji:",
        "{0}",
      ],
    },
    purplelist: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:",
        "\n👮🏼‍♂️ <c>{1} dodaj <@użytkownik, link lub ID></c> {2} Pozwala dodać użytkownika do fioletowej listy",
        "\n🗑️ <c>{1} usuń <@użytkownik, link lub ID></c> {2} Pozwala usunąć użytkownika z fioletowej listy",
        "\n📜 <c>{1} lista</c> {2} Pokazuje listę użytkowników znajdujących się obecnie na fioletowej liście",
        "\n🏆 <c>{1} top</c> {2} Pokazuje top administratorów, którzy dodali najwięcej osób do fioletowej listy",
      ],
      unableToAdd: "❌ <c>{0}</c> nie może zostać dodan{1} do fioletowej listy!",
      alreadyAdded: "❌ <c>{0}</c> znajduje się już na fioletowej liście!",
      notFound: "❌ <c>{0}</c> nie znajduje się na fioletowej liście!",
      jailed: "❌ Poczekaj, aż obecne operacje na fioletowej liście zakończą się!",
      added: "✅ <c>{0}</c> został{1} pomyślnie dodan{2} do fioletowej listy!",
      removed: "✅ <c>{0}</c> został{1} pomyślnie usunięt{2} z fioletowej listy!",
      empty: "❌ Żaden użytkownik nie znajduje się obecnie na fioletowej liście!",
      list: "{0} Lista użytkowników znajdujacych się obecnie na fioletowej liście (<c>{1}</c>):\n\n{2}",
      top: [
        "🏆 Top administratorzy, którzy dodali najwięcej osób do fioletowej listy:", //
        "\n{0}\n",
        "🧮 Na fioletowej liście znajduje się obecnie <c>{1}</c> użytkownik{2}.",
      ],
    },
    screenshot: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n",
        "✨ <c>{1} <link do strony></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1} https://facebook.com/mateuszeq.xd</c>",
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
        "⭐ <c>{1} https://facebook.com/mateuszeq.xd</c>",
        "⭐ <c>{1} https://github.com/AmbientBot-xyz</c>",
        "⭐ <c>{1} https://reddit.com/r/linux</c>",
      ],
      done: "{0} Oto Twój skrócony link: {1}",
    },
    translate: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:\n", //
        "✨ <c>{1} <język docelowy> <tekst do przetłumaczenia></c>\n",
        "💡 Przykłady:",
        "⭐ <c>{1} en To jest przykładowy tekst</c>",
      ],
      invalidTargetLanguage: "❌ Podany język docelowy jest nieprawidłowy!",
      done: [
        "{0} Oto wynik tłumaczenia:\n", //
        "🚰 Język źródłowy: <c>{1}</c>",
        "🎯 Język docelowy: <c>{2}</c>",
        "📖 Liczba zdań: <c>{3}</c>",
        "🗣 Wynik: <c>{4}</c>",
      ],
    },
    verify: {
      mustReplyToMessage: "❌ Musisz odpowiedzieć na wiadomość, którą chcesz zweryfikować!",
      success: "{0} Ta wiadomość została wysłana przez Ambienta!",
      failed:
        "❓ Ta wiadomość nie została wysłana przez Ambienta!\n\nℹ️ Jeśli ta wiadomość została wysłana z konta, które jest używane przez Ambienta, najprawdopodobniej oznacza to, że właściciel tego konta sam wysłał tę wiadomość ręcznie lub została ona wysłana przez inne oprogramowanie.",
    },
    warning: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:",
        "\n👮🏼‍♂️ <c>{1} dodaj <@użytkownik> <powód></c> {2} Pozwala nadać użytkownikowi ostrzeżenie z wybranym powodem",
        "\n🗑️ <c>{1} usuń <@użytkownik> <* lub numer></c> {2} Pozwala usunąć użytkownikowi wszystkie ostrzeżenia lub o wybranym numerze",
        "\n📜 <c>{1} lista <@użytkownik (opcjonalnie)></c> {2} Pozwala sprawdzić listę Twoich lub oznaczonego użytkownika ostrzeżeń",
        "\n🧐 <c>{1} grupa</c> {2} Pozwala sprawdzić liczbę ostrzeżeń poszczególnych członków grupy",
      ],
      reasonMentions: "❌ Powód ostrzeżenia nie może zawierać wzmianek!",
      maxWarningsReached: "❌ <c>{0}</c> posiada już maksymalną liczbę ostrzeżeń (<c>{1}</c>)!",
      reasonTooLong: "❌ Podany powód jest zbyt długi! (maks. <c>{0}</c> znaków, podano <c>{1}</c>)",
      jailed: "❌ Poczekaj, aż obecne operacje na ostrzeżeniach zakończą się!",
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
      deleted: "🗑️ Administrator <c>{0}</c> usunął <c>{1}</c> ostrzeżenie o numerze <c>{2}</c>, pozostało {3} teraz <c>{4}</c> ostrzeżeń.",
      deletedAll: "🗑️ Administrator <c>{0}</c> usunął <c>{1}</c> wszystkie ostrzeżenia.",
    },
    yellowlist: {
      usage: [
        "{0} Prawidłowe użycie komendy <c>{1}</c>:",
        "\n👮🏼‍♂️ <c>{1} dodaj <@użytkownik, link lub ID></c> {2} Pozwala dodać użytkownika do żółtej listy",
        "\n🗑️ <c>{1} usuń <@użytkownik, link lub ID></c> {2} Pozwala usunąć użytkownika z żółtej listy",
        "\n📜 <c>{1} lista</c> {2} Pokazuje listę użytkowników znajdujących się obecnie na żółtej liście",
        "\n🏆 <c>{1} top</c> {2} Pokazuje top administratorów, którzy dodali najwięcej osób do żółtej listy",
      ],
      unableToAdd: "❌ <c>{0}</c> nie może zostać dodan{1} do żółtej listy!",
      alreadyAdded: "❌ <c>{0}</c> znajduje się już na żółtej liście!",
      notFound: "❌ <c>{0}</c> nie znajduje się na żółtej liście!",
      jailed: "❌ Poczekaj, aż obecne operacje na żółtej liście zakończą się!",
      added: "✅ <c>{0}</c> został{1} pomyślnie dodan{2} do żółtej listy!",
      removed: "✅ <c>{0}</c> został{1} pomyślnie usunięt{2} z żółtej listy!",
      empty: "❌ Żaden użytkownik nie znajduje się obecnie na żółtej liście!",
      list: "{0} Lista użytkowników znajdujacych się obecnie na żółtej liście (<c>{1}</c>):\n\n{2}",
      top: [
        "🏆 Top administratorzy, którzy dodali najwięcej osób do żółtej listy:", //
        "\n{0}\n",
        "🧮 Na żółtej liście znajduje się obecnie <c>{1}</c> użytkownik{2}.",
      ],
    },
  },
};
