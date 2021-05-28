import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import Row from '../../../components/Row/Row.svelte'

describe("Unit tests to check default rendering", () => {

  test('Render default Row', () => {
    const {getByTestId} = render(Row, { props: { data_testid:"row"} });
    expect(getByTestId('row')).toHaveClass('nm-ui-row')
  })

});