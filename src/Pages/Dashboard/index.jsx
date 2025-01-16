import React from 'react'
import {Bookmarks, Explore, Home, Lists, Messages, More, Notifications, Profile} from "../Dashboard/index"
import { PATH } from '../../hooks/usePath'
const DashboardPagesRoutes = () => {

    const dashboardRouteList = [
        {
            id:1,
            path:PATH.home,
            element:<Home/>,
            children:[]
        },
        {
            id:2,
            path:PATH.explore,
            element:<Explore/>,
            children:[]
        },
        {
            id:3,
            path:PATH.notification,
            element:<Notifications/>,
            children:[]
        },
        {
            id:4,
            path:PATH.messages,
            element:<Messages/>,
            children:[]
        },
        {
            id:5,
            path:PATH.bookmarks,
            element:<Bookmarks/>,
            children:[]
        },
        {
            id:6,
            path:PATH.lists,
            element:<Lists/>,
            children:[]
        },
        {
            id:7,
            path:PATH.profile,
            element:<Profile/>,
            children:[]
        },
        {
            id:8,
            path:PATH.more,
            element:<More/>,
            children:[]
        }
    ]
  return (
    <div>
      
    </div>
  )
}

export default DashboardPagesRoutes
