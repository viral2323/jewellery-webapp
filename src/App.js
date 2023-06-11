import './App.css';
import Header from "./component/header";
import {Outlet, RouterProvider} from 'react-router-dom'
import {router} from './routes/route'
import {Provider} from 'react-redux';
import React from "react";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <RouterProvider router={router}>
                    <Outlet/>
                </RouterProvider>
            </div>
        </Provider>
    );
}

export default App;
