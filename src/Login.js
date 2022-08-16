// @flow
import * as React from 'react';
import {useDispatch} from "react-redux";
import {login} from "./features/User";

export default function Login() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(
                login({
                    nom: 'mihoubi',
                    prenom: 'haithem',
                    adresse: 'h@gmail.com'
                })
            )}>Se connecter
            </button>
        </div>
    );
};