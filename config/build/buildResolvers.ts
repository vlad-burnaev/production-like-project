import type webpack from 'webpack'
import { type BuildOptions } from './types/config'

export function buildResolvers (options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    // настройка абсолютных импортов
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  }
}
