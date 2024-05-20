import { IEnv } from '@mono-practice/webpack';

export interface IEnvVars extends IEnv {
  SHOP_REMOTE_URL?: string;
  ADMIN_REMOTE_URL?: string;
}
