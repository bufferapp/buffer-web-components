# Changelog

## 0.2.4 (October 15, 2018)
- Update `components` dependency version to `3.0.0` for InputDate updates.

## 0.2.3 (January 10, 2018)
- Disable `pause` if contributor.

## 0.2.2 (December 13, 2017)

- Update `components` dependency version to `2.1.3` for font size updates

## 0.2.1 (December 12, 2017)

- Update story.jsx files to use 'modules'.
- Add `paused` handling to `ScheduleTable`, `ScheduleTableColumn`, `ScheduleTableHeader`

## 0.2.0 (December 12, 2017)

- Update storybook dependencies and tests in `story.jsx` files to use updated dependencies.
- Update `@bufferapp/components` version to latest version (2.1.1)

## 0.1.25 (July 13, 2017)

- Reflect line breaks in shared `Post` for content.

## 0.1.24 (June 26, 2017)

- Remove a redundant `lineHeight` rule from `ScheduleTableCell`
- Wrap a `div` element around the `CloseIcon` to address vertical misalignment

## 0.1.23 (June 23, 2017)

- Set `ScheduleTableColumn` `width` to `0`

## 0.1.22 (June 9, 2017)

- Remove `top` and `marginTop` JSS keys from `ScheduleTableCell` and clean up keys that have no effect on component

## 0.1.21 (June 9, 2017)

- Clean up code styling in `ScheduleTable` and its children
- Remove `CloseSmallIcon` and opt for `<CloseIcon size={'small'} />` instead
- Reorder JSS within `ScheduleTable` and its children to comply with box-model declaration order

## 0.1.20 (June 9, 2017)

- Refactor `ScheduleTableCell`

## 0.1.19 (June 9, 2017)

- Update `ScheduleTable`, `ScheduleTableColumn`, and `ScheduleTableCell` to add `onRemoveTimeClick` action

## 0.1.18 (June 8, 2017)

- Update `PostFooter` to only show 'Please reschedule' if user has permission or is admin

## 0.1.17 (June 8, 2017)

- Update `@bufferapp/components` dependency to `0.5.20`

## 0.1.16 (June 6, 2017)

- Fix `DateTimeForm` proptype was not defined

## 0.1.15 (June 6, 2017)

- Update `DateTimeForm` to accept 12/24 hour configuration and start day of week

## 0.1.14 (June 6, 2017)

- Update `PostFooter` copy to `Please reschedule.`

## 0.1.13 (June 6, 2017)

- Remove `-` from post footer copy

## 0.1.12 (June 5, 2017)

- Update `DateTimeForm` to bring timezone display closer to time input

## 0.1.11 (June 5, 2017)

- Fix text padding in `PostFooter` text

## 0.1.10 (June 5, 2017)

- Add `paddingTop` and `paddingBottom` styles to `ScheduleTableColumn`
- Switch out `CloseIcon` with `CloseSmallIcon` in `ScheduleTableCell`

## 0.1.9 (June 5, 2017)

- Fix how we assign `select24Hours` on `ScheduleTable` and its children
- Add a `disabled` config to `ScheduleTable`
- Update `ScheduleTable` UI as per the design changes introduced on Friday, June 2, 2017

## 0.1.8 (May 30, 2017)

- Add `ScheduleTable` component and its children components; `ScheduleTableColumn`, `ScheduleTableHeader`, and a`ScheduleTableCell`
- Add `TableCell` component

## 0.1.7 (May 24, 2017)

- Update `@bufferapp/components` dependency number to `0.5.3`
- Only show ClockIcon in `PostFooter` if `scheduledAt` is Set
- Add `scheduledAt` prop to `PostFooter`, shared `Post`, and all post types

## 0.1.6 (May 23, 2017)

- Align items in center of `PostHeader` author

## 0.1.5 (May 22, 2017)

- Migrate to self managed `Button`

## 0.1.4 (May 22, 2017)

- Add `HoverableButton` component

## 0.1.3 (May 22, 2017)

- Migrate to JSS/inline styled components

## 0.1.2 (May 22, 2017)

- Add `ScheduleSettingHeader` component

## 0.1.1 (May 17, 2017)

- Add `isMoving` prop to `PostFooter` component and all Post types

## 0.1.0 (May 17, 2017)

- Remove `SectionHeader` component and add it to [Components Library](https://github.com/bufferapp/buffer-components)

## 0.0.37 (May 17, 2017)

- Add `SectionHeader` component

## 0.0.36 (May 16, 2017)

- Add `Move to Drafts` and `Request Approval` buttons to `PostFooter` component
- Add `view`, `onMoveToDraftsClick`, `onRequestApprovalClick` prop to `PostFooter` component and all `Post` types

## 0.0.35 (May 15, 2017)

- Add `BreadCrumb` component

## 0.0.34 (May 5, 2017)

- Add `PostList` and `VideoPost` components

## 0.0.33 (April 27, 2017)

- Add error display to `DateTimeForm` component

## 0.0.32 (April 26, 2017)

- Use `color` and `reducedPadding` config in `Card` component in `Post` component
- Remove 'via' text in `PostHeader` component

## 0.0.31 (April 21, 2017)

- Use `newTab` config in `Link` component in `LinkPost` component

## 0.0.30 (April 21, 2017)

- Add `retweetCommentLinks` to `TextPost` and `Post` components

## 0.0.29 (April 20, 2017)

- Add `DateTimeForm` component
- Update retweet UI, add `isRetweet` to `draftDetails` for shared `Post` components

## 0.0.28 (April 17, 2017)

- Use `unstyled` and `newTab` in `LinkifiedText` component for all post types using that component. Update stories to include it

## 0.0.27 (April 12, 2017)

- Add `hasPermission` prop to `PostFooter` and `Post` components and all post types. Update all stories to include it

## 0.0.26 (April 12, 2017)

- Update `@bufferapp/components` dependency number to `0.4.12`

## 0.0.25 (April 11, 2017)

- Add `type` to `ImagePost` component props and use new `IdTag` component from `buffer-components` (0.4.10)

## 0.0.24 (April 6, 2017)

- Set `LinkifiedText` and `Text` components used in posts to use our new `mini` config

## 0.0.23 (April 3, 2017)

- Add condition that omits printing 'via API' in `PostHeader` component

## 0.0.22 (March 28, 2017)

- Set `padding` on `PostHeader` and `PostFooter` components
- Set `font-weight` in `PostHeader` component to default
- Bump `@bufferapp/components` dependency to `0.4.6`

## 0.0.21 (March 28, 2017)

- Bump `@bufferapp/components` dependency to `0.4.5`
- Update devDependecies

## 0.0.20 (March 24, 2017)

- Bump `@bufferapp/components` dependency to `0.4.4`
