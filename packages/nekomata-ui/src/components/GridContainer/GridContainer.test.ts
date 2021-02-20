import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import GridContainer from './GridContainer.svelte'

describe("Unit tests to check correct rendering with different conditions", () => {

  test('GridContainer render with no props:{}', () => {
    const {getByTestId} = render(GridContainer, { props: { props:{} } });
    expect(getByTestId('grid-container')).toHaveClass('grid-container')
  })

  test('GridContainer renders with props:{color:"black"}', () => {
    const { getByTestId } = render(GridContainer, { props: { props:{color:"black"} } })
    expect(getByTestId('grid-container')).toHaveClass('grid-container')
    expect(getByTestId('grid-container')).toHaveStyle('--grid-container-color: black;')
  })

  test('GridContainer renders without props:{} and but with a class given by his parent', () => {
    const { getByTestId } = render(GridContainer, { props: { props:{}, class:"test" }})
    expect(getByTestId('grid-container')).toHaveClass('test')
    expect(getByTestId('grid-container')).toHaveClass('grid-container')
  })

  test('GridContainer renders with props:{color:"black"} and but with a class given by his parent', () => {
    const { getByTestId } = render(GridContainer, { props: { props:{color:"black"}, class:"test" }})
    expect(getByTestId('grid-container')).toHaveClass('test')
    expect(getByTestId('grid-container')).toHaveClass('grid-container')
    expect(getByTestId('grid-container')).toHaveStyle('--grid-container-color: black;')
  })

  test('GridContainer renders with props:{style:"padding: 20px"}', () => {
    const { getByTestId } = render(GridContainer, { props: { props:{style:"padding: 20px"} } })
    expect(getByTestId('grid-container')).toHaveClass('grid-container')
    expect(getByTestId('grid-container')).toHaveStyle('padding: 20px;')
  })

  test('GridContainer renders with props:{style:"padding: 20px"} and but with a class given by his parent', () => {
    const { getByTestId } = render(GridContainer, { props: { props:{style:"padding: 20px"}, class:"test" }})
    expect(getByTestId('grid-container')).toHaveClass('test')
    expect(getByTestId('grid-container')).toHaveClass('grid-container')
    expect(getByTestId('grid-container')).toHaveStyle('padding: 20px;')
  })

  test('GridContainer renders with props:{style:"padding: 20px; color: black"}', () => {
    const { getByTestId } = render(GridContainer, { props: { props:{style:"padding: 20px; color: black"} } })
    expect(getByTestId('grid-container')).toHaveClass('grid-container')
    expect(getByTestId('grid-container')).toHaveStyle('padding: 20px; color: black;')
  })

  test('GridContainer renders with props:{style:"padding: 20px; color: black} and but with a class given by his parent', () => {
    const { getByTestId } = render(GridContainer, { props: { props:{style:"padding: 20px; color: black"}, class:"test" }})
    expect(getByTestId('grid-container')).toHaveClass('test')
    expect(getByTestId('grid-container')).toHaveClass('grid-container')
    expect(getByTestId('grid-container')).toHaveStyle('padding: 20px; color: black;')
  })

  test('GridContainer renders with props:{color:"black", style:"padding: 20px"}', () => {
    const { getByTestId } = render(GridContainer, { props: { props:{color:"black", style:"padding: 20px"} } })
    expect(getByTestId('grid-container')).toHaveClass('grid-container')
    expect(getByTestId('grid-container')).toHaveStyle('--grid-container-color: black; padding: 20px;')
  })

  test('GridContainer renders with props:{style:"padding: 20px", color:"black"}', () => {
    const { getByTestId } = render(GridContainer, { props: { props:{style:"padding: 20px", color:"black"} } })
    expect(getByTestId('grid-container')).toHaveClass('grid-container')
    expect(getByTestId('grid-container')).toHaveStyle('padding: 20px; --grid-container-color: black;')
  })

  test('GridContainer renders with props:{color:"black", style:"padding: 20px"} and but with a class given by his parent' , () => {
    const { getByTestId } = render(GridContainer, { props: { props:{color:"black", style:"padding: 20px"}, class:"test" } })
    expect(getByTestId('grid-container')).toHaveClass('grid-container')
    expect(getByTestId('grid-container')).toHaveClass('test')
    expect(getByTestId('grid-container')).toHaveStyle('--grid-container-color: black; padding: 20px;')
  })

  test('GridContainer renders with props:{style:"padding: 20px", color:"black"} and but with a class given by his parent', () => {
    const { getByTestId } = render(GridContainer, { props: { props:{style:"padding: 20px", color:"black"}, class:"test" } })
    expect(getByTestId('grid-container')).toHaveClass('grid-container')
    expect(getByTestId('grid-container')).toHaveClass('test')
    expect(getByTestId('grid-container')).toHaveStyle('padding: 20px; --grid-container-color: black;')
  })

})