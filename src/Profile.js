import {useSelector} from "react-redux";
import React from "react";

export function Profile() {
    const state = useSelector((state) => state.user.value);
    return (
        <div>
            <p>nom{state.nom}</p>
            <p>prenom {state.prenom}</p>
            <p>adresse {state.adresse}</p>
        </div>
    );
};