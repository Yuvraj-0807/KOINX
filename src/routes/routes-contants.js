export const ROUTES = {
  HOME: "/",
  USER: {
    AUTH: {
      LOGIN: "/auth/login",
      REGISTER: {
        ONBOARDING: "/auth/register",
        SUCCESS: "/auth/register/success",
      },
      FORGOT_PASSWORD: {
        INDEX: "/auth/forgot-password",
        VERIFY: "/auth/forgot-password/verify",
        SETUP_PASSWORD: "/auth/forgot-password/setup-password",
        SUCCESS: "/auth/forgot-password/success",
      },
    },
    DASHBOARD: {
      HOME: "/dashboard/home",
      COMPLIANCE: {
        PROFILE: "/dashboard/compliance/profile",
        DOCUMENT: "/dashboard/compliance/documents",
      },
      API_CALL_HISTORY: "/dashboard/api-call-history",
      FILE_ARCHIVE: "/dashboard/file-archive",
      SUBSCRIPTION: "/dashboard/subscription",
      API_KEY_WEB_HOOKS: "/dashboard/api-key-webhooks",
      MY_WALLET: "/dashboard/wallet",
      SERVICES: "/dashboard/services",
      SETTINGS: {
        TWO_FACTOR_AUTHENTICATION:
          "/dashboard/settings/two-factor-authentication",
        PREFERENCES: "/dashboard/settings/preferences",
        ADMINS: "/dashboard/settings/admins",
        API_KEY_WEB_HOOKS: "/dashboard/settings/api-key-web-hooks",
      },
      HELP_CENTER: "/dashboard/help-center",
    },
  },
  WEBSITE: {
    BOOK_DEMO: "/book-demo",
    BOOK_DEMO_SUCCESS: "/book-demo-success",
    CONTACT_SALES: "/contact-sales",
    CONTACT_SALES_SUCCESS: "/contact-sales-success",
    DOCUMENT_VERIFICATION: "/document-verification",
    CREDIT_INQUIRY: "/",
    BANK_BEHAVIOR: "/",
    FRAUD_INSIGHT: "/",
    RISK_ASSESSMENT: "/",
    DIGITAL_IDENTITY_INSIGHT: "/",
  },
};
