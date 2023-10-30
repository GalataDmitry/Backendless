import {Link} from "react-router-dom"
import '../styles/App.css'

interface NavTabsTypes {
    tabsId: string
    tabsTitle: string
}

const NavTabs = ({tabsId, tabsTitle}: NavTabsTypes) => <Link className='link' to={tabsId}>{tabsTitle}</Link>

export default NavTabs