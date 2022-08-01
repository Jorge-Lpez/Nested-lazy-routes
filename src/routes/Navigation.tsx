import logo from '../logo.svg';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { routes } from './routes';
import { Suspense } from 'react';


const Navigation = () => {

    return (
        <Suspense fallback={null}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt="Logo react" />
                        <ul>
                            { routes.map( ( ruta, i ) => (
                                <li key={ruta.to}>
                                    <NavLink 
                                        to={ruta.to} 
                                        className={ ({ isActive }) => isActive ? "nav-active" : "" }>
                                        {ruta.name}
                                    </NavLink>
                                </li>
                            ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        { routes.map(( {path, Component}) => (
                            <Route key={path}
                                path={path} 
                                element= {<Component/>}/>
                        ))
                        }

                        <Route
                            path="/*"
                            element={<Navigate to={routes[0].to} replace/>}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )

}

export default Navigation;

