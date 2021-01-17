import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import GridContainer from './GridContainer.svelte'

describe("Unit tests to check correct rendering with different conditions", () => {

  test('GridContainer render with no props:{}', () => {
    const {getByTitle} = render(GridContainer, { props: { props:{} } });
    expect(getByTitle('grid-container')).toHaveClass('grid-container')
  })

  test('GridContainer renders with props:{color:"black"}', () => {
    const { getByTitle } = render(GridContainer, { props: { props:{color:"black"} } })
    expect(getByTitle('grid-container')).toHaveClass('grid-container')
    expect(getByTitle('grid-container')).toHaveStyle('--grid-container-color: black;')
  })

  test('GridContainer renders without props:{} and but with a class given by his parent', () => {
    const { getByTitle } = render(GridContainer, { props: { props:{}, class:"top" }})
    expect(getByTitle('grid-container')).toHaveClass('top')
    expect(getByTitle('grid-container')).toHaveClass('grid-container')
  })

  test('GridContainer renders with props:{color:"black"} and but with a class given by his parent', () => {
    const { getByTitle } = render(GridContainer, { props: { props:{color:"black"}, class:"top" }})
    expect(getByTitle('grid-container')).toHaveClass('top')
    expect(getByTitle('grid-container')).toHaveClass('grid-container')
    expect(getByTitle('grid-container')).toHaveStyle('--grid-container-color: black;')
  })

});

 