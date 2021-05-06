import React from "react";
import {useRouter} from "next/router";
import {Provider} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainLayout from "../layouts/Main/Main";
import '../styles/global.scss';
import {useStore} from '../redux/store';


export default function App({Component, pageProps}: any) {
    const store = useStore(pageProps.initialReduxState);
    const router = useRouter();
    return (
        <Provider store={store}>
            <CssBaseline/>
            <MainLayout>
                <Component {...pageProps} router={router}/>
            </MainLayout>
        </Provider>
    );
}
