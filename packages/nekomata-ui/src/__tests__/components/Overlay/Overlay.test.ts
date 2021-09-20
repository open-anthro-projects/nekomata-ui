import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import Overlay from '../../../components/Overlay/Overlay.svelte'

describe("Unit test to check default rendering", () => {

  test('Render default Overlay', () => {
    const {getByTestId} = render(Overlay, { props: { data_testid:"overlay"} });
    expect(getByTestId('overlay')).toHaveClass('nm-ui-overlay')
    expect(getByTestId('overlay')).not.toHaveClass('testClass')
    expect(getByTestId('overlay')).not.toHaveAttribute("style")
    expect(getByTestId('overlay')).not.toHaveAttribute("id")
  })

  test("Verify overlay click", () => {
    const { getByTestId, component } = render(Overlay, {
      props: { data_testid:"overlay" },
    });
  
    const mock = jest.fn();
    const overlay = getByTestId('overlay');
  
    component.$on("click", mock);
    fireEvent.click(overlay);
  
    expect(mock).toHaveBeenCalled();
  });

});