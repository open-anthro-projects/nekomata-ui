import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import SvgIcon from './SvgIcon.svelte'

describe("Unit tests to check correct rendering with different conditions", () => {

  test('SvgIcon render with no props:{}', () => {
    const {getByTestId} = render(SvgIcon, { props: { props:{}, d:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" } });
    expect(getByTestId('svgIcon')).toHaveClass('svgIcon')
  })

  test('SvgIcon renders without props:{} and but with a class given by his parent', () => {
    const { getByTestId } = render(SvgIcon, { props: { props:{}, class:"test", d:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" }})
    expect(getByTestId('svgIcon')).toHaveClass('test')
    expect(getByTestId('svgIcon')).toHaveClass('svgIcon')
  })

});

