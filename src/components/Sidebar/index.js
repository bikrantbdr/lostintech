import React from 'react'
import { SidebarContainer,Icon, CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon  onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='discover' onClick={toggle}>Impacters</SidebarLink>
          <SidebarLink to='services' onClick={toggle}>Events</SidebarLink>
          <SidebarLink to='timeline' onClick={toggle}>Timeline</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/'>COntact</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar