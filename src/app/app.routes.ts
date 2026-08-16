import { Routes } from '@angular/router';
import { Home } from './components/home/home'
import { Usuarios } from './components/usuarios/usuarios'

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "usuarios",
        component: Usuarios
    }
];
