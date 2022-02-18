import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MasterComponent } from './modules/master/master.component';
import { AuthGuard } from './core/guards/auth.gaurd';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('src/app/modules/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'assessment',
        loadChildren: () => import('src/app/modules/assessment/assessment.module').then(m => m.AssessmentModule)
    },
    {
        path: 'main', component: MasterComponent,
        children: [
            // {
            //     path: 'dashboard', 
            //     loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
            //     canActivate: [AuthGuard]
            // },
            {
                path: 'user-list', 
                loadChildren: () => import('src/app/modules/user-list/user-list.module').then(m => m.UserListModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'question-list', 
                loadChildren: () => import('src/app/modules/question-list/question-list.module').then(m => m.QuestionListModule),
                canActivate: [AuthGuard]
            }
        ],
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },  
    {path: '**', redirectTo: 'pages/notfound'},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
