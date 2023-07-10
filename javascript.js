var searchBar = document.getElementById("searchBar");
        searchBar.addEventListener('click' , function(){ 
            searchBar.classList.add("toggleClass");
        });
        window.addEventListener('mouseup', e =>{
            
                if(e.target != searchBar && e.target.parentNode != searchBar )
                {
                    searchBar.classList.remove("toggleClass");
                }                  
        });