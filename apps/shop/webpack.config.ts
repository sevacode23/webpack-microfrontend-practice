import { resolve } from 'path';
import { IEnv, buildConfig } from '@mono-practice/webpack';

import { buildFederationPlugin } from './webpack-build';

export default (env: IEnv) => {
  const { mode, port = 3001, isAnalyze } = env;

  const isDev = mode === 'development';

  const pathSrc = resolve(__dirname, 'src');
  const pathPublic = resolve(__dirname, 'public');
  const pathBuild = resolve(__dirname, 'build');

  const config = buildConfig({
    isDev,
    paths: {
      src: pathSrc,
      entry: resolve(pathSrc, 'index.ts'),
      output: pathBuild,
      html: resolve(pathPublic, 'index.html'),
      favicon: resolve(pathPublic, 'favicon.ico'),
      localesPublic: resolve(pathPublic, 'locales'),
      localesOutput: resolve(pathBuild, 'locales'),
    },
    port,
    isAnalyze,
  });

  config.plugins.push(buildFederationPlugin());

  return config;
};
