const navHome = document.querySelector('.nav-options a:nth-child(2)')
const navUniverse = document.querySelector('.nav-options a:nth-child(3)')
const navExploration = document.querySelector('.nav-options a:nth-child(4)')

const navOptions = document.querySelectorAll('.nav-options a')

class Router {
  
  routes() {
    let routesPath = {
      '/': '/pages/home.html',
      '/universe': '/pages/universe.html',
      '/exploration': '/pages/exploration.html'
    }

    for (let link of navOptions) {
      function getPathAndChageScreen() {
        const { pathname } = window.location
        const route = routesPath[pathname]
    
        fetch(route)
          .then(function (data) {
            return data.text()
          })
          .then(function (html) {
            document.querySelector('#app').innerHTML = html
          })


          if(pathname == '/universe'){
                navUniverse.classList.add('focused')
                navExploration.classList.remove('focused')
                navHome.classList.remove('focused')

              }  else if(pathname == '/exploration') {
                navExploration.classList.add('focused')
                navUniverse.classList.remove('focused')
                navHome.classList.remove('focused')

              } else if(pathname == '/' ) {
                navHome.classList.add('focused')
                navExploration.classList.remove('focused')
                navUniverse.classList.remove('focused')
              }
              
                   
          
      }

      getPathAndChageScreen()
      

      link.addEventListener('click', eventPrevent => {
       
        eventPrevent.preventDefault()
        window.history.pushState({}, '', eventPrevent.target.href)

        getPathAndChageScreen()
        
      })

      window.onpopstate = () => getPathAndChageScreen()


      
    }
  }
}

export { Router }
