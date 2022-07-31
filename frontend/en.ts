const language = {
  global: {
    switchLanguage: "Switch language / Zmień język",
    en: "English / angielski",
    pl: "Polish / polski",
    currentlyChoosen: "Currently choosen / Obecnie wybrany",
    updateAvailable: "An update is available",
    updateAvailableMore: "The page will be reloaded in a moment",
    discord: "Discord Server",
  },
  pages: {
    activate: "Account activation",
    auth: "Dashboard",
    bot: "Bot management",
    bots: "Your bots",
    connect: "Connect to an account",
    help: "Help",
    loading: "Loading...",
    logout: "Log out",
    home: "Home",
    notFound: "404",
    profile: "Your profile",
    premium: "Premium",
  },
  subheaders: {
    page: "Page",
    panel: "Panel",
    other: "Other",
  },
  activate: {
    inProgress: "Your account is being activated...",
    success: "Your account has been successfully activated!",
    successMore: "You will be redirected to the login page in a moment.",
    failed: "Activation failed!",
    failedExpired: "Your account has already been activated or the account activation time has expired.",
    failedError: "An unknown error has occurred, please try again later. If the error persists, notify us on the Discord server.",
    yourEmail: "Your e-mail address:",
    goNow: "Go now",
  },
  auth: {
    loginCardTitle: "Already using Ambient? Sign in:",
    email: "E-mail",
    password: "Password",
    passwordRepeat: "Repeat password",
    loginButton: "Sign in",
    forgotPassword: "Forgot password?",
    forgotPasswordModalHint:
      "Enter the email address associated with your account to receive a link to log in without a password. After logging in, you will be able to set a new password in the your profile tab.",
    registerCardTitle: "New to Ambient? Sign up now!",
    registerButton: "Sign up",
    activationMailNotReceived: "Activation mail not received?",
    activationMailModalHint: "Enter the e-mail address provided during registration to receive a link to activate your account again.",
    checkMailbox: "Check your inbox",
    activationMailError: "Account does not exist, activation time has expired, or it has already been activated!",
    cancel: "Cancel",
    send: "Send",
    invalidEmail: "The e-mail address provided is not valid!",
    passwordMismatch: "The given passwords do not match!",
    correctAndTryAgain: "Please correct the wrong information and try again.",
    confirmHuman: "Please confirm that you are not a robot",
    confirmHumanMore: "Solve a simple task and then click the verify button.",
    captchaNotSolved: "Task solving aborted",
    captchaNotSolvedMore: "You have to solve the task to confirm that you are not a robot. Try again.",
    captchaTimeout: "The time to solve task is over!",
    captchaTimeoutMore: "Try again.",
    verifySuccess: "Thanks for confirmation!",
    verifySuccessMore: "Checking data...",
    registerSuccess: "Successfully registered!",
    registerSuccessMore: "We have sent a message to the e-mail address provided with a link to activate your account.",
    emailAlreadyExists: "The e-mail address provided is already assigned to the account!",
    emailAlreadyExistsMore: "Use the option of logging in without a password or resending the activation e-mail.",
    unknownError: "An unknown error has occurred, please try again later.",
    unknownErrorMore: "If the error persists, notify us on the Discord server. Error code: {{ 0 }}",
    loginSuccess: "Welcome to the Ambient management panel!",
    loginSuccessMore: "Logged in successfully.",
    invalidEmailOrPassword: "The given e-mail address or password is incorrect!",
    accountNotActivated: "Your account has not been activated!",
    accountNotActivatedMore: "Activation mail not received? Please use the resend option.",
    loggedOut: "Logged out successfully!",
    loggedOutMore: "Thank you for using Ambient.",
    sessionExpired: "Your session has expired!",
    sessionExpiredMore: "Please login again.",
    passwordValidation: {
      min: "Password must be at least 12 characters long.",
      digits: "Password must contain at least 2 digits.",
      letters: "Password must contain at least 6 letters.",
      lowercase: "Password must contain at least 3 lowercase letters.",
      uppercase: "Password must contain at least 1 uppercase letter.",
      symbols: "Password must contain at least 1 special character.",
      spaces: "Password cannot contain spaces.",
    },
  },
  profile: {
    infoCardTitle: "Account information",
    accountCreationDate: "Account creation date",
  },
  bots: {
    createBot: "Create new bot",
    botName: "Bot name",
    accountName: "Account name",
    createBotModalHint: "Enter a name for your new bot, you can change it later.",
    createdSuccessfully: "Bot has been successfully created!",
    createdSuccessfullyMore: "You can now connect it to a Facebook account.",
    limitReached: "You already have the maximum number of bots!",
    limitReachedMore: "Delete unnecessary bots or use the existing one.",
    nameAlreadyUsed: "The name chosen is already taken!",
    action: "Action",
    manage: "Manage",
    backToList: "Back to the bot list",
    backToView: "Back to the bot view",
    invalidBot: "Selected bot does not exist!",
    profilePicture: "Profile picture",
    info: "Info",
    events: "Events",
    fbAccountId: "Facebook account ID",
    showProfile: "Show profile",
    changeName: "Change name",
    state: "State",
    done: "Done",
    screenshot: "Screenshot",
    screenshotModalHint:
      "Sscreenshot allows you to see why we were unable to log in with the provided credentials. If they appear to be incorrect, correct them and try again. You suspect that the login process is malfunctioning? Contact us on the Discord server, we'll look into it asap.",
    connection: "Account connection",
    connectionHint: "Connect bot with your Facebook account to start using it. To use this option, bot must be turned off.",
    screenshotHint: "Screenshot lets you see what exactly went wrong the last time we tried to log into your account with the credentials you provided.",
    accountState: "Account state",
    botState: "Bot state",
    start: "Start",
    stop: "Stop",
    invalidState: "Invalid state!",
    invalidStateMore: "The selected bot is currently in a state that does not allow it to connect it with the account.",
    connectionStarted: "We have started an attempt to connect the bot with the account!",
    connectionStartedMore: "It will take several seconds, the current status and results can be seen on this page.",
    username: "Username",
    twoFactorAuthSwitch: "Two factor auth",
    twoFactorAuthCode: "2FA code",
    usernameTooShort: "The given username is too short!",
    passwordTooShort: "The given password is too short!",
    codeTooShort: "The given two factor auth code is too short!",
    connectConfirmButton: "Connect bot with account",
    importantCardCheckbox: "I understand",
    understandNotChecked: "Read important tips!",
    importantCardTitle: "Important! Read before connecting:",
    importantCardContents: [
      "The account may be blocked by Facebook, so do not use your main account to connect it with the bot.",
      "It is better to use an account that was created some time ago and was used normally than to create a new account and use it to connect to the bot right away.",
      "An account created with real data and with a real profile photo set will work best, as it will be possible to verify your identity when Facebook requests it.",
      "We recommend that you enable two-factor login using the 2FA code in your account settings, it will increase the chance of successfully connecting the bot to your account and reduce the chance of your account being blocked due to suspicious activity.",
      "We do not store the login details you provide. They will only be used to log into the account by automated software in order to try to obtain a user session to connect the account with the bot, then they are forgotten.",
      "Connecting the bot with the account will take several seconds, if we encounter a problem, you will get access to the screenshot from the login stage where this occurred, you can then review it, solve any problem with the account and try again.",
      "When logging into your account, you may receive a login notification from a new location in the Chrome browser on Xiaomi Redmi Note 8 Pro device, it comes from our system and should be ignored.",
      "It is possible that when you try to log in, you will be asked to approve it, and enter, for example, the date of birth provided when creating the account, then log in to the account as normal, answer the questions asked by Facebook, and then try to connect the bot to the account again.",
    ],
    credentialsCardTitle: "Enter Facebook account login details:",
    connConditions: {
      notConnected: "Not connected",
      connecting: "Connecting...",
      connected: "Connected",
    },
    connConditionsMore: {
      notConnected: "To start a bot, you first need to connect it to your Facebook account.",
      connecting: "We are trying to connect the bot with the Facebook account using the login details provided by you, it may take several seconds.",
      connected: "We have successfully connected the bot to your Facebook account using the login credentials you provided, you can now start it.",
    },
    powerConditions: {
      starting: "Starting...",
      running: "Running",
      stopping: "Stopping...",
      stopped: "Stopped",
    },
    powerConditionsMore: {
      starting: "We're starting your bot, it may take a few minutes.",
      running: "Your bot is up and running.",
      stopping: "We're stopping your bot, this may take a few minutes.",
      stopped: "Your bot is currently stopped. If the account is connected, you can start it.",
    },
    connFailedReasons: {
      badRequest: "Bad request",
      badCredentials: "Invalid credentials",
      unexpectedPage: "Unexpected page",
      cUserMissing: "User missing",
      twoFactorAuthRequired: "Code required",
      badTwoFactorAuthCode: "Invalid code",
      unknownError: "Unknown error",
    },
    connFailedReasonsMore: {
      badRequest: "Connection request sent is incorrect, please try again later and notify us on the Discord server if the error persists.",
      badCredentials: "The credentials provided are incorrect, please correct them and try again.",
      unexpectedPage:
        "We encountered an unexpected page while logging in, please review the screenshot and notify us on the Discord server if you suspect that the login process is malfunctioning.",
      cUserMissing: "Resulting session did not contain valid account information",
      twoFactorAuthRequired: "We have successfully logged in, but we need a two factor login code which you did not provide us with.",
      badTwoFactorAuthCode: "We were able to sign in, but the two factor auth code you entered is incorrect.",
      unknownError:
        "We encountered an unexpected error while logging in, please review the screenshot and notify us on the Discord server if you suspect that the login process is malfunctioning.",
    },
  },
};

export default language;
