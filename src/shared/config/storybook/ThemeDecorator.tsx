import { type Theme } from 'app/providers/ThemeProvider'
import { type StoryFn } from '@storybook/react'
import { ThemeProvider } from 'app/providers'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
   <ThemeProvider initialTheme={theme}>
     <div className={`app ${theme}`}>
       <Story />
     </div>
   </ThemeProvider>
)
