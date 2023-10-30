import {Routes, Route, useLocation} from 'react-router-dom'
import NavTabs from "./NavTabs"
import Tab from "./Tab"
import tabs from '../tabs.json'
import '../App.css'

const App = () => {

    const {pathname} = useLocation()

    return <div className="app">
        <main className="app_main">
            <nav className ='tabs_link'>
                {tabs.map(tab => (
                    <NavTabs key={tab.order} tabsId={tab.id} tabsTitle={tab.title}/>
                ))}
            </nav>
            <div>
                <Routes>
                    {tabs.map(tab => {
                        if (pathname === '/' && tab.order === 1) {
                            return <Route key={tab.order} path={'/'} element={<Tab path={tab.path}/>}/>
                        }
                        return <Route key={tab.order} path={tab.id} element={<Tab path={tab.path}/>}/>
                    })}
                </Routes>
            </div>
        </main>
    </div>
}

export default App
