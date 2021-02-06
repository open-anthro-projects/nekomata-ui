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

});