import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { SkeletonTheme } from 'react-loading-skeleton'
import {Store} from "./Services/redux/Store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SkeletonTheme baseColor="rgba(121, 121, 121, 0.2)" highlightColor="rgba(121, 121, 121, 0.2)">
        <BrowserRouter>
            <Provider store={Store}>
                <App />
            </Provider>
        </BrowserRouter>
    </SkeletonTheme>
);

