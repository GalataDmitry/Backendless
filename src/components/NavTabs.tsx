import {NavLink} from "react-router-dom"
import '../styles/App.css'

interface NavTabsTypes {
    tabsId: string
    tabsTitle: string
}

const NavTabs = ({tabsId, tabsTitle}: NavTabsTypes) => <NavLink className='link' to={tabsId}>{tabsTitle}</NavLink>

export default NavTabs