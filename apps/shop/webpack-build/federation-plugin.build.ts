import path from 'path';
import { container } from 'webpack';

import packageJson from '../package.json';

export const buildFederationPlugin = () =>
  new container.ModuleFederationPlugin({
    name: 'shop',
    filename: 'remoteEntry.js',
    exposes: {
      './router': path.resolve(__dirname, '..', 'src', 'router.tsx'),
    },
    shared: {
      ...packageJson.dependencies,
      react: {
        eager: true,
        requiredVersion: packageJson.dependencies['react'],
      },
      'react-router-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-router-dom'],
      },
      'react-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-dom'],
      },
    },
  });
