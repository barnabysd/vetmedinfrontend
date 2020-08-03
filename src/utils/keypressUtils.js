import { navigate } from "gatsby"
import { DEBUG_PROJECT } from '../WebsiteConstants'

export const addAccessKeyNav = () => {
    // click button on spacebar or return keypress
    if (typeof window !== undefined && document !== undefined) {
            document.body.onkeyup = (e) => {
                if (e.keyCode === 18) {
                    if (e.keyCode === 48) {
                        // 0 - access
                        navigate("/accessibility-policy")
                    }
                    if (e.keyCode === 49) {
                        // 1 - home page
                        navigate("/")
                    }
                    if (e.keyCode === 50) {
                        // 2 - site map
                        alert("Sorry there is no site map available")
                        //navigate("/site-map")
                    }
                    if (e.keyCode === 51) {
                        // 3 - search
                        alert("Sorry there is no search available")
                    }
                    if (e.keyCode === 52) {
                        // 4 - contact
                        navigate("/contact")
                    }
                    if (e.keyCode === 53) {
                        // 5 - print
                        if (document.getElementById("sideMenu")) document.getElementById("sideMenu").style.display = 'none'
                        if (typeof window !== undefined) window.print()
                        if (document.getElementById("sideMenu")) document.getElementById("sideMenu").style.display = 'block'
                    }
                    if (e.keyCode === 54) {
                        // 6 - skip navigation
                        alert("Sorry it is not possible to skip navigation")
                    }
                      
                }

                if (e.keyCode === 56 && DEBUG_PROJECT === true) {
                    //TODO - remove for live
                    // 8 - outline
                    console.log("OUTLINE");
                    for(var i = 0; i < (document.getElementsByTagName("div").length);i++){
                        document.getElementsByTagName("DIV")[i].style.border = '1px solid red'
                    }
                }
                if (e.keyCode === 55 && DEBUG_PROJECT === true) {
                        //TODO - remove for live
                        // 8 - outline
                        console.log("OUTLINE");

                        function randomRgba() {
                            var o = Math.round, r = Math.random, s = 255;
                            return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',0.2)';
                        }
                    
                        for(var i = 0; i < (document.getElementsByTagName("div").length);i++){
                            document.getElementsByTagName("DIV")[i].style.backgroundColor = "" + randomRgba() + ""
                        }
                }

                if (e.keyCode === 57 && DEBUG_PROJECT === true) {
                    //TODO - remove for live
                    // 9 - debug
                    console.log("DEBUG");
                    document.getElementById("debugHelper").style.display = 'block'
                }
                
                console.log(e.keyCode) 
            }
        }

}