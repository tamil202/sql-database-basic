import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren:()=>import('./database/routes/database.routes').then(child=>child.default)
    }
];
