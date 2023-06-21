import { type StoryFn } from '@storybook/react'
import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { PageLoader } from "widgets/PageLoader";

// eslint-disable-next-line react/display-name
export const RouterDecoracor = () => (Story: StoryFn) => (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Story />
      </Suspense>
    </BrowserRouter>
)
