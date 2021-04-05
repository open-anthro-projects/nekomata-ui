import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import AppBar from '../../../components/AppBar/AppBar.svelte'

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

  test('AppBar renders with props:{style:"padding: 20px"}', () => {
    const { getByTestId } = render(AppBar, { props: { props:{style:"padding: 20px"} } })
    expect(getByTestId('header')).toHaveClass('style')
    expect(getByTestId('header')).toHaveClass('position')
    expect(getByTestId('header')).toHaveStyle('padding: 20px;')
  })

  test('AppBar renders with props:{style:"padding: 20px"} and but with a class given by his parent', () => {
    const { getByTestId } = render(AppBar, { props: { props:{style:"padding: 20px"}, class:"test" }})
    expect(getByTestId('header')).toHaveClass('test')
    expect(getByTestId('header')).toHaveClass('style')
    expect(getByTestId('header')).toHaveClass('position')
    expect(getByTestId('header')).toHaveStyle('padding: 20px;')
  })

  test('AppBar renders with props:{style:"padding: 20px; color: black"}', () => {
    const { getByTestId } = render(AppBar, { props: { props:{style:"padding: 20px; color: black"} } })
    expect(getByTestId('header')).toHaveClass('style')
    expect(getByTestId('header')).toHaveClass('position')
    expect(getByTestId('header')).toHaveStyle('padding: 20px; color: black;')
  })

  test('AppBar renders with props:{style:"padding: 20px; color: black} and but with a class given by his parent', () => {
    const { getByTestId } = render(AppBar, { props: { props:{style:"padding: 20px; color: black"}, class:"test" }})
    expect(getByTestId('header')).toHaveClass('test')
    expect(getByTestId('header')).toHaveClass('style')
    expect(getByTestId('header')).toHaveClass('position')
    expect(getByTestId('header')).toHaveStyle('padding: 20px; color: black;')
  })

  test('AppBar renders with props:{color:"black", style:"padding: 20px"}', () => {
    const { getByTestId } = render(AppBar, { props: { props:{color:"black", style:"padding: 20px"} } })
    expect(getByTestId('header')).toHaveClass('style')
    expect(getByTestId('header')).toHaveClass('position')
    expect(getByTestId('header')).toHaveStyle('--appbar-color: black; padding: 20px;')
  })

  test('AppBar renders with props:{style:"padding: 20px", color:"black"}', () => {
    const { getByTestId } = render(AppBar, { props: { props:{style:"padding: 20px", color:"black"} } })
    expect(getByTestId('header')).toHaveClass('style')
    expect(getByTestId('header')).toHaveClass('position')
    expect(getByTestId('header')).toHaveStyle('padding: 20px; --appbar-color: black;')
  })

  test('AppBar renders with props:{color:"black", style:"padding: 20px"} and but with a class given by his parent' , () => {
    const { getByTestId } = render(AppBar, { props: { props:{color:"black", style:"padding: 20px"}, class:"test" } })
    expect(getByTestId('header')).toHaveClass('test')
    expect(getByTestId('header')).toHaveClass('style')
    expect(getByTestId('header')).toHaveClass('position')
    expect(getByTestId('header')).toHaveStyle('--appbar-color: black; padding: 20px;')
  })

  test('AppBar renders with props:{style:"padding: 20px", color:"black"} and but with a class given by his parent', () => {
    const { getByTestId } = render(AppBar, { props: { props:{style:"padding: 20px", color:"black"}, class:"test" } })
    expect(getByTestId('header')).toHaveClass('test')
    expect(getByTestId('header')).toHaveClass('style')
    expect(getByTestId('header')).toHaveClass('position')
    expect(getByTestId('header')).toHaveStyle('padding: 20px; --appbar-color: black;')
  })

});

 