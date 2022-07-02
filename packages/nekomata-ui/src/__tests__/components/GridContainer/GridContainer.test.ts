import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import GridContainer from '../../../lib/components/GridContainer/GridContainer.svelte'

describe("Unit test to check default rendering", () => {

  test('Render default GridContainer', () => {
    const {getByTestId} = render(GridContainer, { props: { data_testid:"grid-container"} });
    expect(getByTestId('grid-container')).toHaveClass('nm-ui-grid-container')
  })

})