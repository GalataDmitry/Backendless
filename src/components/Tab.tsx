import {lazy, Suspense, useEffect} from "react"
import {useLocation} from "react-router-dom";

const Tab = ({path}: { path: string }) => {

    const Component = lazy(() => import(`../${path}`))

    return <Suspense fallback={<>Loading...</>}>
        <Component/>
    </Suspense>

}

export default Tab