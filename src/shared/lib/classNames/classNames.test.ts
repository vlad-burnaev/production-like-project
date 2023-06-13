import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
  test('with only one param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with additional', () => {
    const expected = 'someClass class2 class3'
    expect(classNames('someClass', {}, ['class2', 'class3'])).toBe(expected)
  })

  test('with mods', () => {
    const expected = 'someClass hovered selected'
    expect(classNames('someClass', { hovered: true, selected: true, mocked: false })).toBe(expected)
  })
})
