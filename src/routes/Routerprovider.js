import { RouterProvider } from 'react-router-dom'
import {routes} from './Allroutes'


 export default function Routerprovider(){
    return (
        <div>
          <RouterProvider router={routes}/>
        </div>
    )
 }