import { type StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/providers'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: StoryFn) => (
    <StoreProvider initialState={state}>
      <Story />
    </StoreProvider>
)
