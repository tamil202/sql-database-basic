export default [
  {
    path: 'data',
    loadComponent: () =>
      import('../pages/show-data/show-data.component').then(
        (c) => c.ShowDataComponent
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('../pages/add-data/add-data.component').then(
        (c) => c.AddDataComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('../pages/dbs-connect/dbs-connect.component').then(
        (c) => c.DbsConnectComponent
      ),
  },
  {
    path: 'table-data',
    loadComponent: () =>
      import('../pages/table-data/table-data.component').then(
        (c) => c.TableDataComponent
      ),
  },
];
