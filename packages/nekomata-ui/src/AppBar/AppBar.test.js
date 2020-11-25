import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte'

import AppBar from './AppBar'

test('AppBar renders with empty props:{}', () => {
  const results = render(AppBar, { props: { props:{} } });

  expect(() => results.not.toThrow());
})

test('AppBar renders with props:{color:"black"}', () => {
  const results = render(AppBar, { props: { props:{color:"black"} } });

  expect(() => results.not.toThrow());
})

