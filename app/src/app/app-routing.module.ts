import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: 'inside',
    loadChildren: './pages/inside/inside.module#InsidePageModule',
    // canActivate: [AuthGuardService]
  },
  { path: 'zosmf', loadChildren: './pages/zosmf/zosmf.module#ZosmfPageModule' },
  { path: 'jobs', loadChildren: './pages/jobs/jobs.module#JobsPageModule' },
  { path: 'apiml', loadChildren: './pages/apiml/apiml.module#ApimlPageModule' },
  { path: 'files', loadChildren: './pages/files/files.module#FilesPageModule' },
  { path: 'console', loadChildren: './pages/console/console.module#ConsolePageModule' },
  { path: 'uss', loadChildren: './pages/uss/uss.module#UssPageModule' },
  { path: 'cancel/:name/:id', loadChildren: './pages/jobs/cancel/cancel.module#CancelPageModule' },
  { path: 'delete/:name/:id', loadChildren: './pages/jobs/delete/delete.module#DeletePageModule' },
  { path: 'menu/:data', loadChildren: './pages/jobs/menu/menu.module#MenuPageModule' },
  { path: 'result/:data', loadChildren: './pages/jobs/result/result.module#ResultPageModule' },
  { path: 'restart/:name/:id', loadChildren: './pages/jobs/restart/restart.module#RestartPageModule' },
  { path: 'view/:name/:id', loadChildren: './pages/jobs/view/view.module#ViewPageModule' },
  { path: 'detail/:name/:jid/:step/:dd/:id', loadChildren: './pages/jobs/detail/detail.module#DetailPageModule' },
  { path: 'edit/:name/:id', loadChildren: './pages/jobs/edit/edit.module#EditPageModule' },


];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }