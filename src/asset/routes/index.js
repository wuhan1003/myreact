import Home from '../pages/home';
import Article from '../pages/article';
import ArticleDetail from '../pages/article-detail';
import Friend from '../pages/friend';
import FriendDetail from '../pages/friend-detail';
let routes = [
    {
        path:'/',
        // exact :true,
        component:Home
    },
    {
        path:'/article',
        exact :true,
        component:Article,
        children:[
            {
                path:'/article/:id',
                exact :true,
                component:ArticleDetail
            },
        ]
    },  
    {
        path:'/article/:id',
        exact :true,
        component:ArticleDetail
    }, 
    {
        path:'/friend',
        exact :true,
        component:Friend,
        children:[
            {
                path:'/friend/:id',
                exact :true,
                component:FriendDetail
            }
        ]
    },
    
]

export default routes;
export {Home,Article,ArticleDetail,Friend,FriendDetail};