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
    auth: "Auth",
    home: "Home",
    notFound: "404",
    profile: "Your profile",
  },
  activate: {
    inProgress: "Your account is being activated...",
    success: "Your account has been successfully activated!",
    successMore: "You will be redirected to the login page in a moment.",
    failed: "Activation failed!",
    failedExpired: "Your account has already been activated or the activation link has expired.",
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
    forgotPasswordModalHint: "Enter the e-mail address associated with your account to receive a link to set a new password.",
    registerCardTitle: "New to Ambient? Sign up now!",
    registerButton: "Sign up",
    activationMailNotReceived: "Activation mail not received?",
    activationMailModalHint: "Enter the e-mail address provided during registration to receive a link to activate your account again.",
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
    emailAlreadyExistsMore: "Use the option to reset your password or resend the activation e-mail.",
    unknownError: "An unknown error has occurred, please try again later.",
    unknownErrorMore: "If the error persists, notify us on the Discord server. Error code: {{ 0 }}",
    loginSuccess: "Welcome to the Ambient management panel!",
    loginSuccessMore: "Logged in successfully.",
    invalidEmailOrPassword: "The given e-mail address or password is incorrect!",
    accountNotActivated: "Your account has not been activated!",
    accountNotActivatedMore: "Activation mail not received? Please use the resend option.",
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
};

export default language;
