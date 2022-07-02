import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import AppBar from '../../../lib/components/AppBar/AppBar.svelte'

describe("Unit test to check default rendering", () => {

  test('Render default AppBar', () => {
    const {getByTestId} = render(AppBar, { props: { data_testid:"header"} });
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-style')
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-header')
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-top')
    expect(getByTestId('header')).not.toHaveClass('nm-ui-appbar-bottom')
    expect(getByTestId('header')).not.toHaveClass('testClass')
    expect(getByTestId('header')).not.toHaveAttribute("style")
    expect(getByTestId('header')).not.toHaveAttribute("id")
  })

});

 