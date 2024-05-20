import { container } from 'webpack';

import packageJson from '../package.json';

import { IEnvVars } from './typings';

export const buildFederationPlugin = (params: IEnvVars) => {
  const shopUrl = params.SHOP_REMOTE_URL || 'http://localhost:3001';
  const adminUrl = params.ADMIN_REMOTE_URL || 'http://localhost:3002';

  return new container.ModuleFederationPlugin({
    name: 'host',
    filename: 'remoteEntry.js',

    remotes: {
      shop: `shop@${shopUrl}/remoteEntry.js`,
      admin: `admin@${adminUrl}/remoteEntry.js`,
    },

    shared: {
      ...packageJson.dependencies,
      react: {
        eager: true,
        // requiredVersion: packageJson.dependencies['react'],
      },
      'react-router-dom': {
        eager: true,
        // requiredVersion: packageJson.dependencies['react-router-dom'],
      },
      'react-dom': {
        eager: true,
        // requiredVersion: packageJson.dependencies['react-dom'],
      },
    },
  });
};
