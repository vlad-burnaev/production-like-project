import type webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    entry: '',
    html: '',
    build: '',
  }

  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')

  // отключаем дефолтный svg loader storybook
  config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
    // @ts-expect-error
    if (/svg/i.test(rule.test)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })
  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  })

  config.module.rules.push(buildCssLoaders(true))

  return config
}
