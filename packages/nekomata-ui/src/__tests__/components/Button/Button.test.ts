import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'


import Button from '../../../components/Button/Button.svelte'

describe("Unit test to check default rendering", () => {

    test('Render default Button', () => {
      const {getByTestId} = render(Button, { props: { data_testid:"button"} });
      expect(getByTestId('button')).toHaveClass('nm-ui-icon-button')
      expect(getByTestId('button')).toHaveClass('nm-ui-icon-button-style')
      expect(getByTestId('button')).not.toHaveClass('testClass')
      expect(getByTestId('button')).not.toHaveAttribute("style")
      expect(getByTestId('button')).not.toHaveAttribute("id")
    })

    it('Verify button click', async () => {
        const results = render(Button)
        const onClick = jest.fn()
        results.component.$on('click', onClick)
    
        const button = results.container.querySelector('button')
        expect(button).not.toBeNull()
    
        // Using await when firing events is unique to the svelte testing library because
        // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
        await fireEvent.click(button as HTMLElement)
    
        expect(results.container).toBeInTheDocument()
        expect(onClick.mock.calls.length).toEqual(1)
      })
  
});