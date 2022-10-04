var waypoint = new Waypoint({
    element: document.getElementById('service'),
    handler: function(direction) {
     if (direction === "down") {
        document.querySelector (".navbar").classList.add("navbar-control")
        document.querySelector (".navbar").classList.add("animate__fadeInDown")
        document.querySelector (".navbar").classList.add("shadow")
        console.log("down")
     } else {
      document.querySelector (".navbar").classList.remove("navbar-control")
      document.querySelector (".navbar").classList.remove("animate__fadeInDown")
      document.querySelector (".navbar").classList.remove("shadow")
        console.log("up")
     }
     
    },
    offset: '5%'
  })

  var waypoint = new Waypoint({
   element: document.getElementById('pricing'),
   handler: function(direction) {
    if (direction === "down") {
      document.querySelector (".footer-fixed").classList.add("show")
      document.querySelector (".foot-icon").classList.add("animate__fadeInRight")
       console.log("down")
    } else {
      document.querySelector (".footer-fixed").classList.remove("show")
      document.querySelector (".foot-icon").classList.remove("animate__fadeInRight")
       console.log("up")
    }
    
   },
   offset: '5%'
 })

// theme




const changeThemeToDark = () => {
  document.documentElement.setAttribute ('data-theme','dark');
  localStorage.setItem('data-theme','dark')
}


const changeThemeToLight = () => {
  document.documentElement.setAttribute ('data-theme','light');
  localStorage.setItem('data-theme','light')
}





let changeTheme = document.getElementById('changeTheme');

changeTheme.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme');
    if (theme === 'dark'){
      changeThemeToLight();
    }else {
      changeThemeToDark()
    }
   
})


let theme = localStorage.getItem('data-theme');
if (theme ==='dark'){
  changeThemeToDark()
  changeTheme.setAttribute('checked','checked')
}else{
  changeThemeToLight
}