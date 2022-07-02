import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import Drawer from '../../../lib/components/Drawer/Drawer.svelte'

describe("Unit test to check default rendering", () => {

  test('Render default Drawer', () => {
    const {getByTestId} = render(Drawer, { props: { data_testid:"drawer"} });
    expect(getByTestId('drawer')).toHaveClass('nm-ui-drawer-left')
    expect(getByTestId('drawer')).toHaveClass('nm-ui-drawer-inactive-left')
    expect(getByTestId('drawer')).not.toHaveClass('nm-ui-drawer-active')
    expect(getByTestId('drawer')).not.toHaveClass('nm-ui-drawer-bottom')
    expect(getByTestId('drawer')).not.toHaveClass('nm-ui-drawer-right')
    expect(getByTestId('drawer')).not.toHaveClass('nm-ui-drawer-top')
    expect(getByTestId('drawer')).toHaveClass('nm-ui-drawer-modal')
  })

});

 