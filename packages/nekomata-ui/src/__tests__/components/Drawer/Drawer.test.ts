import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/svelte'

import Drawer from '../../../components/Drawer/Drawer.svelte'

describe("Unit tests to check correct rendering with different conditions", () => {

  test('Drawer render with no props:{}', () => {
    const {getByTestId} = render(Drawer, { props: { props:{} } });
    expect(getByTestId('drawer')).toHaveClass('left')
    expect(getByTestId('drawer')).not.toHaveClass('active')
    expect(getByTestId('drawer')).not.toHaveClass('bottom')
    expect(getByTestId('drawer')).not.toHaveClass('right')
    expect(getByTestId('drawer')).not.toHaveClass('top')
    expect(getByTestId('drawer')).toHaveClass('modal')
  })

  test('Drawer render with no props:{} anchor = bottom' , () => {
    const {getByTestId} = render(Drawer, { props: { props:{}, anchor:"bottom"} });
    expect(getByTestId('drawer')).toHaveClass('bottom')
    expect(getByTestId('drawer')).not.toHaveClass('active')
    expect(getByTestId('drawer')).not.toHaveClass('left')
    expect(getByTestId('drawer')).not.toHaveClass('right')
    expect(getByTestId('drawer')).not.toHaveClass('top')
    expect(getByTestId('drawer')).toHaveClass('modal')
  })

  test('Drawer render with no props:{} anchor = right' , () => {
    const {getByTestId} = render(Drawer, { props: { props:{}, anchor:"right"} });
    expect(getByTestId('drawer')).toHaveClass('right')
    expect(getByTestId('drawer')).not.toHaveClass('active')
    expect(getByTestId('drawer')).not.toHaveClass('left')
    expect(getByTestId('drawer')).not.toHaveClass('bottom')
    expect(getByTestId('drawer')).not.toHaveClass('top')
    expect(getByTestId('drawer')).toHaveClass('modal')
  })

  test('Drawer render with no props:{} anchor = top' , () => {
    const {getByTestId} = render(Drawer, { props: { props:{}, anchor:"top"} });
    expect(getByTestId('drawer')).toHaveClass('top')
    expect(getByTestId('drawer')).not.toHaveClass('active')
    expect(getByTestId('drawer')).not.toHaveClass('left')
    expect(getByTestId('drawer')).not.toHaveClass('bottom')
    expect(getByTestId('drawer')).not.toHaveClass('right')
    expect(getByTestId('drawer')).toHaveClass('modal')
  })

  test('Drawer render with no props:{} active = true' , () => {
    const {getByTestId} = render(Drawer, { props: { props:{}, active:true} });
    expect(getByTestId('drawer')).toHaveClass('active')
    expect(getByTestId('drawer')).toHaveClass('left')
    expect(getByTestId('drawer')).not.toHaveClass('right')
    expect(getByTestId('drawer')).not.toHaveClass('top')
    expect(getByTestId('drawer')).toHaveClass('modal')
  })
 
  test('Drawer renders with props:{backgroundColor:"black"}', () => {
    const { getByTestId } = render(Drawer, { props: { props:{backgroundColor:"black"} } })
    expect(getByTestId('drawer')).toHaveClass('left')
    expect(getByTestId('drawer')).toHaveClass('modal')
    expect(getByTestId('drawer')).not.toHaveClass('active')
    expect(getByTestId('drawer')).toHaveAttribute("style",' --drawer-backgroundColor: black;')
  })

  test('Drawer renders without props:{} and with a class given by his parent', () => {
    const { getByTestId } = render(Drawer, { props: { props:{}, class:"test" }})
    expect(getByTestId('drawer')).toHaveClass('test')
    expect(getByTestId('drawer')).toHaveClass('modal')
    expect(getByTestId('drawer')).not.toHaveClass('active')
  })

  test('Drawer renders without props:{} and with 2 classes given by his parent', () => {
    const { getByTestId } = render(Drawer, { props: { props:{}, class:"test test2" }})
    expect(getByTestId('drawer')).toHaveClass('test')
    expect(getByTestId('drawer')).toHaveClass('test2')
    expect(getByTestId('drawer')).toHaveClass('modal')
    expect(getByTestId('drawer')).not.toHaveClass('active')
  })


  test('Drawer renders with props:{color:"black"} and but with a class given by his parent', () => {
    const { getByTestId } = render(Drawer, { props: { props:{backgroundColor:"black"}, class:"test" }})
    expect(getByTestId('drawer')).toHaveClass('test')
    expect(getByTestId('drawer')).toHaveClass('left')
    expect(getByTestId('drawer')).toHaveClass('modal')
    expect(getByTestId('drawer')).not.toHaveClass('active')
    expect(getByTestId('drawer')).toHaveAttribute("style",' --drawer-backgroundColor: black;')
  })


  test('Drawer renders with props:{style:"padding: 20px"}', () => {
    const { getByTestId } = render(Drawer, { props: { props:{style:"padding: 20px"} } })
    expect(getByTestId('drawer')).toHaveClass('left')
    expect(getByTestId('drawer')).toHaveClass('modal')
    expect(getByTestId('drawer')).not.toHaveClass('active')
    expect(getByTestId('drawer')).toHaveAttribute("style",' padding: 20px;')
  })

  

  test('Drawer renders with props:{style:"padding: 20px"} and with a class given by his parent', () => {
    const { getByTestId } = render(Drawer, { props: { props:{style:"padding: 20px"}, class:"test" }})
    expect(getByTestId('drawer')).toHaveClass('test')
    expect(getByTestId('drawer')).toHaveClass('left')
    expect(getByTestId('drawer')).toHaveClass('modal')
    expect(getByTestId('drawer')).not.toHaveClass('active')
    expect(getByTestId('drawer')).toHaveAttribute("style",' padding: 20px;')
  })



  test('Drawer renders with props:{style:"padding: 20px; color: black"}', () => {
    const { getByTestId } = render(Drawer, { props: { props:{style:"padding: 20px; color: black"} } })
    expect(getByTestId('drawer')).toHaveClass('left')
    expect(getByTestId('drawer')).toHaveClass('modal')
    expect(getByTestId('drawer')).not.toHaveClass('active')
    expect(getByTestId('drawer')).toHaveAttribute("style",' padding: 20px; color: black;')
  })



  test('Drawer renders with props:{style:"padding: 20px; color: black} and with a class given by his parent', () => {
    const { getByTestId } = render(Drawer, { props: { props:{style:"padding: 20px; color: black"}, class:"test" }})
    expect(getByTestId('drawer')).toHaveClass('test')
    expect(getByTestId('drawer')).toHaveClass('left')
    expect(getByTestId('drawer')).toHaveClass('modal')
    expect(getByTestId('drawer')).not.toHaveClass('active')
    expect(getByTestId('drawer')).toHaveAttribute("style",' padding: 20px; color: black;')
  })

  test('Drawer renders with props:{backgroundColor:"black", style:"padding: 20px"}', () => {
    const { getByTestId } = render(Drawer, { props: { props:{backgroundColor:"black", style:"padding: 20px"} } })
    expect(getByTestId('drawer')).toHaveClass('left')
    expect(getByTestId('drawer')).toHaveClass('modal')
    expect(getByTestId('drawer')).not.toHaveClass('active')
    expect(getByTestId('drawer')).toHaveAttribute("style",' --drawer-backgroundColor: black; padding: 20px;')
  })

     

  test('Drawer renders with props:{style:"padding: 20px", backgroundColor:"black"}', () => {
    const { getByTestId } = render(Drawer, { props: { props:{style:"padding: 20px", backgroundColor:"black"} } })
    expect(getByTestId('drawer')).toHaveClass('left')
    expect(getByTestId('drawer')).toHaveClass('modal')
    expect(getByTestId('drawer')).not.toHaveClass('active')
    expect(getByTestId('drawer')).toHaveAttribute("style",' padding: 20px; --drawer-backgroundColor: black;')
  })

  test('Drawer renders with props:{backgroundColor:"black", style:"padding: 20px"} and with a class given by his parent', () => {
    const { getByTestId } = render(Drawer, { props: { props:{backgroundColor:"black", style:"padding: 20px"}, class:"test" } })
    expect(getByTestId('drawer')).toHaveClass('test')
    expect(getByTestId('drawer')).toHaveClass('left')
    expect(getByTestId('drawer')).toHaveClass('modal')
    expect(getByTestId('drawer')).not.toHaveClass('active')
    expect(getByTestId('drawer')).toHaveAttribute("style",' --drawer-backgroundColor: black; padding: 20px;')
  })


  test('Drawer renders with props:{style:"padding: 20px", backgroundColor:"black"} and with a class given by his parent', () => {
    const { getByTestId } = render(Drawer, { props: { props:{style:"padding: 20px", backgroundColor:"black"}, class:"test" } })
    expect(getByTestId('drawer')).toHaveClass('test')
    expect(getByTestId('drawer')).toHaveClass('left')
    expect(getByTestId('drawer')).toHaveClass('modal')
    expect(getByTestId('drawer')).not.toHaveClass('active')
    expect(getByTestId('drawer')).toHaveAttribute("style",' padding: 20px; --drawer-backgroundColor: black;')
  })

});

 