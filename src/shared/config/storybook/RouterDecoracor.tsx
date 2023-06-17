import { type StoryFn } from '@storybook/react'
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line react/display-name
export const RouterDecoracor = () => (Story: StoryFn) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
)
