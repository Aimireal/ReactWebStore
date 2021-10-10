import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SideBtnWrap } from './sidebarElements';

const Sidebar = ({isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Home</SidebarLink>
                <SidebarLink to="/">Mens</SidebarLink>
                <SidebarLink to="/">Womens</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Search</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
};

export default Sidebar;
