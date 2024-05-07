import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



function ScrollToTop() {

    const { pathname } = useLocation();

    useEffect(() =>{
        window.scrollTo({top: 0, behavior: "auto"});
    }, [pathname]);

  return null;
}



// function ScrollToTop() {
//   const history = useNavigate();

//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     };
//   }, [history]);

//   return null;
// };

export default ScrollToTop
