import HTMLWebpackPlugin from 'html-webpack-plugin'
import * as webpack from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      // файл index.html из public будет использоваться как шаблон для добавления div.root
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDev,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]

  if (isDev) {
    const devPlugins = [
      // по-дефолту HMR плохо работает с react компоненами
      new ReactRefreshPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ]

    plugins.concat(devPlugins)
  }

  return [
    new HTMLWebpackPlugin({
      // файл index.html из public будет использоваться как шаблон для добавления div.root
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDev,
    }),
  ]
}
