import { MainDetail } from "../detail/MainDetail";
import { MainExplore } from "../explore/aplication/MainExplore";
import { StackHome } from "../home/StackHome";
import { MainSearchProducts } from "../searchProducts/aplication/MainSearchProducts";
import { TabIcon } from "../bottom-tab/TabIcon";
import { StackExplore } from "../explore/aplication/routes/StackExplore";
import { MainChanges } from "../changes/aplication/MainChanges";
import ChatStack from "../chat/ChatStack";

export const tabRoutes = [
    {
        name:"inicio", 
        component:StackHome, 
        icon:'home',
        options:{
            tabBarIcon:({focused, color}:{focused:boolean, color:string}) => TabIcon({focused, color, icon:'home'} )
            
        },
        initialParams:{ screen: 'home' }

    },
    {
        name:"explorar", 
        component:StackExplore,
        icon:'search',
        options:{
            tabBarIcon:({focused, color}:{focused:boolean, color:string}) => TabIcon({focused, color, icon:'search'} )
        },
        
    },
    {
        name:"favoritos", 
        component:MainSearchProducts, 
        icon:'heart-fill',
        options:{
            tabBarIcon:({focused, color}:{focused:boolean, color:string}) => TabIcon({focused, color, icon:'heart-fill'} )

        }

        
    },
    {
        name:"cambios", 
        component:ChatStack, 
        icon:'sync',
        options:{
            tabBarIcon:({focused, color}:{focused:boolean, color:string}) => TabIcon({focused, color, icon:'sync'})
        }
    },
    {
        name:"perfil", 
        component:MainSearchProducts, 
        icon:'person',
        options:{

        }
        
    }
]