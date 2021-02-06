import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import AppBar from './AppBar.svelte'

describe("Unit tests to check correct rendering with different conditions", () => {

  test('AppBar render with no props:{}', () => {
    const {getByTestId} = render(AppBar, { props: { props:{} } });
    expect(getByTestId('header')).toHaveClass('style')
    expect(getByTestId('header')).toHaveClass('position')
  })

  test('AppBar renders with props:{color:"black"}', () => {
    const { getByTestId } = render(AppBar, { props: { props:{color:"black"} } })
    expect(getByTestId('header')).toHaveClass('style')
    expect(getByTestId('header')).toHaveClass('position')
    expect(getByTestId('header')).toHaveStyle('--appbar-color: black;')
  })

  test('AppBar renders without props:{} and but with a class given by his parent', () => {
    const { getByTestId } = render(AppBar, { props: { props:{}, class:"test" }})
    expect(getByTestId('header')).toHaveClass('test')
    expect(getByTestId('header')).toHaveClass('style')
    expect(getByTestId('header')).toHaveClass('position')
  })

  test('AppBar renders with props:{color:"black"} and but with a class given by his parent', () => {
    const { getByTestId } = render(AppBar, { props: { props:{color:"black"}, class:"test" }})
    expect(getByTestId('header')).toHaveClass('test')
    expect(getByTestId('header')).toHaveClass('style')
    expect(getByTestId('header')).toHaveClass('position')
    expect(getByTestId('header')).toHaveStyle('--appbar-color: black;')
  })

});

 