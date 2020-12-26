import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import AppBar from './AppBar.svelte'

describe("Unit tests to check correct rendering with different conditions", () => {

  test('AppBar render with no props:{}', () => {
    const {getByTitle} = render(AppBar, { props: { props:{} } });
    expect(getByTitle('header')).toHaveClass('style')
    expect(getByTitle('header')).toHaveClass('position')
  })

  test('AppBar renders with props:{color:"black"}', () => {
    const { getByTitle } = render(AppBar, { props: { props:{color:"black"} } })
    expect(getByTitle('header')).toHaveClass('style')
    expect(getByTitle('header')).toHaveClass('position')
    expect(getByTitle('header')).toHaveStyle('--appbar-color: black;')
  })

  test('AppBar renders without props:{} and but with a class given by his parent', () => {
    const { getByTitle } = render(AppBar, { props: { props:{}, class:"top" }})
    expect(getByTitle('header')).toHaveClass('top')
    expect(getByTitle('header')).toHaveClass('style')
    expect(getByTitle('header')).toHaveClass('position')
  })

  test('AppBar renders with props:{color:"black"} and but with a class given by his parent', () => {
    const { getByTitle } = render(AppBar, { props: { props:{color:"black"}, class:"top" }})
    expect(getByTitle('header')).toHaveClass('top')
    expect(getByTitle('header')).toHaveClass('style')
    expect(getByTitle('header')).toHaveClass('position')
    expect(getByTitle('header')).toHaveStyle('--appbar-color: black;')
  })

});

 