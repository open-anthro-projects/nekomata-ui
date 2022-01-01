import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import FlexBox from '../../../components/FlexBox/FlexBox.svelte'

describe("Unit tests to check default rendering", () => {

  test('Render FlexBox row', () => {
    const {getByTestId} = render(FlexBox, { props: { data_testid:"flexbox" , variant:'row'}});
    expect(getByTestId('flexbox')).toHaveClass('nm-ui-flex-box-row')
  })

  test('Render FlexBox row A', () => {
    const {getByTestId} = render(FlexBox, { props: { data_testid:"flexbox" , variant:'row', css_profile:'a'}});
    expect(getByTestId('flexbox')).toHaveClass('nm-ui-flex-box-row-a')
  })

  test('Render FlexBox column', () => {
    const {getByTestId} = render(FlexBox, { props: { data_testid:"flexbox" , variant:'column'}});
    expect(getByTestId('flexbox')).toHaveClass('nm-ui-flex-box-column')
  })

  test('Render FlexBox column A', () => {
    const {getByTestId} = render(FlexBox, { props: { data_testid:"flexbox" , variant:'column', css_profile:'a'}});
    expect(getByTestId('flexbox')).toHaveClass('nm-ui-flex-box-column-a')
  })

});