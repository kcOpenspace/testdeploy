import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrap, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SideEle';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon>HelloSidebar</CloseIcon>
      </Icon>
      <SidebarWrap>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrap>
    </SidebarContainer>
  )
}

export default Sidebar
