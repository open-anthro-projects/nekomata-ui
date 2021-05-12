import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import AppBar from '../../../components/AppBar/AppBar.svelte'

describe("Unit tests to check correct rendering with different conditions", () => {

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

  test('Render bottom AppBar', () => {
    const {getByTestId} = render(AppBar, { props: { data_testid:"header", variant:'bottom' }});
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-style')
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-header')
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-bottom')
    expect(getByTestId('header')).not.toHaveClass('nm-ui-appbar-top')
    expect(getByTestId('header')).not.toHaveClass('testClass')
    expect(getByTestId('header')).not.toHaveAttribute("style")
    expect(getByTestId('header')).not.toHaveAttribute("id")
  })

  test('Render AppBar with style prop', () => {
    const {getByTestId} = render(AppBar, { props: { data_testid:"header", style:"padding:20px;"} });
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-style')
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-header')
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-top')
    expect(getByTestId('header')).not.toHaveClass('testClass')
    expect(getByTestId('header')).toHaveAttribute("style",'padding:20px;')
    expect(getByTestId('header')).not.toHaveAttribute("id")
  })

  test('Render AppBar with class given by the parent', () => {
    const {getByTestId} = render(AppBar, { props: { data_testid:"header", class:"testClass"} });
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-style')
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-header')
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-top')
    expect(getByTestId('header')).toHaveClass('testClass')
    expect(getByTestId('header')).not.toHaveAttribute("style")
    expect(getByTestId('header')).not.toHaveAttribute("id")
  })

  test('Render AppBar with id prop', () => {
    const {getByTestId} = render(AppBar, { props: { data_testid:"header", id:"testHeader"} });
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-style')
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-header')
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-top')
    expect(getByTestId('header')).not.toHaveClass('testClass')
    expect(getByTestId('header')).not.toHaveAttribute("style")
    expect(getByTestId('header')).toHaveAttribute("id",'testHeader')
  })

  test('Render bottom AppBar with style prop', () => {
    const {getByTestId} = render(AppBar, { props: { data_testid:"header", style:"padding:20px;", variant:'bottom'} });
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-style')
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-header')
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-bottom')
    expect(getByTestId('header')).not.toHaveClass('testClass')
    expect(getByTestId('header')).toHaveAttribute("style",'padding:20px;')
    expect(getByTestId('header')).not.toHaveAttribute("id")
  })

  test('Render bottom AppBar with class given by the parent', () => {
    const {getByTestId} = render(AppBar, { props: { data_testid:"header", class:"testClass", variant:'bottom'} });
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-style')
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-header')
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-bottom')
    expect(getByTestId('header')).toHaveClass('testClass')
    expect(getByTestId('header')).not.toHaveAttribute("style")
    expect(getByTestId('header')).not.toHaveAttribute("id")
  })

  test('Render bottom AppBar with id prop', () => {
    const {getByTestId} = render(AppBar, { props: { data_testid:"header", id:"testHeader", variant:'bottom'} });
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-style')
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-header')
    expect(getByTestId('header')).toHaveClass('nm-ui-appbar-bottom')
    expect(getByTestId('header')).not.toHaveClass('testClass')
    expect(getByTestId('header')).not.toHaveAttribute("style")
    expect(getByTestId('header')).toHaveAttribute("id",'testHeader')
  })

});

 