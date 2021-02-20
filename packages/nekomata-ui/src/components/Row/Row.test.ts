import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import Row from './Row.svelte'

describe("Unit tests to check correct rendering with different conditions", () => {

  test('Row render with no props:{}', () => {
    const {getByTestId} = render(Row, { props: { props:{} } });
    expect(getByTestId('row')).toHaveClass('row')
  })

  test('Row renders with props:{padding:"0px 0px 0px 0px"}', () => {
    const { getByTestId } = render(Row, { props: { props:{padding:"0px 0px 0px 0px"} } })
    expect(getByTestId('row')).toHaveClass('row')
    expect(getByTestId('row')).toHaveStyle('--row-padding: 0px 0px 0px 0px;')
  })

  test('Row renders without props:{} and but with a class given by his parent', () => {
    const { getByTestId } = render(Row, { props: { props:{}, class:"test" }})
    expect(getByTestId('row')).toHaveClass('test')
    expect(getByTestId('row')).toHaveClass('row')
  })

  test('Row renders with props:{padding:"0px 0px 0px 0px"} and but with a class given by his parent', () => {
    const { getByTestId } = render(Row, { props: { props:{padding:"0px 0px 0px 0px"}, class:"test" }})
    expect(getByTestId('row')).toHaveClass('test')
    expect(getByTestId('row')).toHaveClass('row')
    expect(getByTestId('row')).toHaveStyle('--row-padding: 0px 0px 0px 0px;')
  })

  test('Row renders with props:{padding:"0px 0px 0px 0px", style:"padding: 20px"}', () => {
    const { getByTestId } = render(Row, { props: { props:{padding:"0px 0px 0px 0px",style:"padding: 20px"} } })
    expect(getByTestId('row')).toHaveClass('row')
    expect(getByTestId('row')).toHaveStyle('--row-padding: 0px 0px 0px 0px; padding: 20px;')
  })

  test('Row renders with props:{style:"padding: 20px", padding:"0px 0px 0px 0px"}', () => {
    const { getByTestId } = render(Row, { props: { props:{style:"padding: 20px", padding:"0px 0px 0px 0px"} } })
    expect(getByTestId('row')).toHaveClass('row')
    expect(getByTestId('row')).toHaveStyle('padding: 20px; --row-padding: 0px 0px 0px 0px;')
  })

  test('Row renders with props:{padding:"0px 0px 0px 0px", style:"padding: 20px"} and but with a class given by his parent' , () => {
    const { getByTestId } = render(Row, { props: { props:{padding:"0px 0px 0px 0px",style:"padding: 20px"}, class:"test" } })
    expect(getByTestId('row')).toHaveClass('row')
    expect(getByTestId('row')).toHaveClass('test')
    expect(getByTestId('row')).toHaveStyle('--row-padding: 0px 0px 0px 0px; padding: 20px;')
  })

  test('Row renders with props:{style:"padding: 20px", padding:"0px 0px 0px 0px"} and but with a class given by his parent', () => {
    const { getByTestId } = render(Row, { props: { props:{style:"padding: 20px", padding:"0px 0px 0px 0px"}, class:"test" } })
    expect(getByTestId('row')).toHaveClass('row')
    expect(getByTestId('row')).toHaveClass('test')
    expect(getByTestId('row')).toHaveStyle('padding: 20px; --row-padding: 0px 0px 0px 0px;')
  })

  test('Row renders with props:{style:"padding: 20px, "}', () => {
    const { getByTestId } = render(Row, { props: { props:{style:"padding: 20px"} } })
    expect(getByTestId('row')).toHaveClass('row')
    expect(getByTestId('row')).toHaveStyle('padding: 20px;')
  })

  test('Row renders with props:{style:"padding: 20px"} and but with a class given by his parent', () => {
    const { getByTestId } = render(Row, { props: { props:{style:"padding: 20px"}, class:"test" }})
    expect(getByTestId('row')).toHaveClass('test')
    expect(getByTestId('row')).toHaveClass('row')
    expect(getByTestId('row')).toHaveStyle('padding: 20px;')
  })

  test('Row renders with props:{style:"padding: 20px; color: black"}', () => {
    const { getByTestId } = render(Row, { props: { props:{style:"padding: 20px; color: black"} } })
    expect(getByTestId('row')).toHaveClass('row')
    expect(getByTestId('row')).toHaveStyle('padding: 20px; color: black;')
  })

  test('Row renders with props:{style:"padding: 20px; color: black} and but with a class given by his parent', () => {
    const { getByTestId } = render(Row, { props: { props:{style:"padding: 20px; color: black"}, class:"test" }})
    expect(getByTestId('row')).toHaveClass('test')
    expect(getByTestId('row')).toHaveClass('row')
    expect(getByTestId('row')).toHaveStyle('padding: 20px; color: black;')
  })

});