import React, { Children } from 'react'

export const separateChildren = (
  children: React.ReactNode,
  childName: string,
) => {
  return Children.map(children, (child) => {
    // @ts-expect-error - We know that child is a ReactElement
    if (!child || child?.type?.name !== childName) {
      return null
    }

    return child
  })?.filter(Boolean)
}
