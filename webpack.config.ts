import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'
import path from 'path'
import type webpack from 'webpack'

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const mode = env.mode || 'development'
  const PORT = env.port || 3000
  const apiURL = env.apiURL || 'http://localhost:8000'

  const isDev = mode === 'development'

  return buildWebpackConfig({
    paths,
    mode,
    isDev,
    apiURL,
    port: PORT,
    project: 'frontend',
  })
}
