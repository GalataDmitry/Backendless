import {lazy, Suspense} from "react"

const Tab = ({path}: { path: string }) => {
    const Component = lazy(() => import(`../${path}`))
    return <Suspense fallback={<>Loading...</>}>
        <Component/>
    </Suspense>

}

export default Tab