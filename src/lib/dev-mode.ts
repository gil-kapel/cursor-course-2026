const ENABLED_VALUES = new Set(['1', 'true', 'yes', 'on']);

export const LOCAL_DEV_DISABLE_DB_ENV_VAR = 'LOCAL_DEV_DISABLE_DB';
export const LOCAL_DEV_DISABLE_GOOGLE_AUTH_ENV_VAR = 'LOCAL_DEV_DISABLE_GOOGLE_AUTH';

function isEnabled(rawValue: string | undefined): boolean {
  return rawValue ? ENABLED_VALUES.has(rawValue.trim().toLowerCase()) : false;
}

export const isLocalDevDbDisabled = isEnabled(process.env[LOCAL_DEV_DISABLE_DB_ENV_VAR]);
export const isLocalDevGoogleAuthDisabled = isEnabled(process.env[LOCAL_DEV_DISABLE_GOOGLE_AUTH_ENV_VAR]);

export const localDevSessionUser = {
  id: 'local-dev-user',
  name: 'Local Dev Student',
  email: 'local-dev@cursorcourse.test',
  image: null,
} as const;
