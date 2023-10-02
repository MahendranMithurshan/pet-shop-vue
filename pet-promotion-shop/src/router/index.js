import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import AdoptView from '../views/AdoptView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'products',
      component: ProductView,
      meta: { requiresAuth:true}
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/adopt',
      name: 'adopt',
      component: AdoptView
    }
  ]
})

const getCurrentUser = () =>{
  return new Promise((resolve,reject)=>{
   const removeListener =  onAuthStateChanged(
    getAuth(),
    (user) =>{
      removeListener();
      resolve(user);
    },

    reject
   )
  });
};

router.beforeEach(async(to ,from,next)=>{
if (to.matched.some((record)=>record.meta.requiresAuth)) {
  if(await getCurrentUser()) {
     next(); 

  }
  else {

    alert("You Need To Register With Us");
    next('/register'); //redirct to home 
  }
  
}

else {
  next();
}


});

export default router
