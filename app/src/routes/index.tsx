import { lazy } from 'solid-js'
import { Navigate } from '@solidjs/router'

export default[
    {
        path: "/",
        component: lazy(()=>import("@/views/main")),
    },
    {
        path: "/word/:word",
        component: lazy(()=>import("@/views/main")),
    },
    {
        path: "/dictionary/:word",
        component: lazy(()=>import("@/views/dict")),
    },
    {
        path: "/*",
        component: ()=> <Navigate href="/"/>,
    }
]
