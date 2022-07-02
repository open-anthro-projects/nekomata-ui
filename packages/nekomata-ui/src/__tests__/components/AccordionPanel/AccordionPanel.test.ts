import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import AccordionPanel from '../../../lib/components/AccordionPanel/AccordionPanel.svelte'

describe("Unit test to check default rendering", () => {

    test('Render default AccordionPanel', () => {
      const {getByTestId} = render(AccordionPanel, { props: { data_testid:"accordion"} });
      expect(getByTestId('accordion')).toHaveClass('nm-ui-accordion-panel')
      expect(getByTestId('accordion')).toHaveClass('nm-ui-accordion-panel-inactive')
      expect(getByTestId('accordion')).not.toHaveClass('testClass')
      expect(getByTestId('accordion')).not.toHaveAttribute("style")
      expect(getByTestId('accordion')).not.toHaveAttribute("id")
    })

    
    test('Render active AccordionPanel', () => {
        const {getByTestId} = render(AccordionPanel, { props: { data_testid:"accordion", active: true} });
        expect(getByTestId('accordion')).toHaveClass('nm-ui-accordion-panel')
        expect(getByTestId('accordion')).toHaveClass('nm-ui-accordion-panel-active')
        expect(getByTestId('accordion')).not.toHaveClass('testClass')
        expect(getByTestId('accordion')).not.toHaveAttribute("style")
        expect(getByTestId('accordion')).not.toHaveAttribute("id")
      })
  
  });