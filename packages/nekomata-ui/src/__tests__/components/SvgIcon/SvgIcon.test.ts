import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import SvgIcon from '../../../lib/components/SvgIcon/SvgIcon.svelte'

describe("Unit test to check default rendering", () => {

  test('Render default SvgIcon', () => {
    const {getByTestId} = render(SvgIcon, { props: { data_testid:"svgIcon", d:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" } });
    expect(getByTestId('svgIcon')).toHaveClass('nm-ui-svg-icon')
  })

});