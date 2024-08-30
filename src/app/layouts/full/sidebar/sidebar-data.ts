import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    displayName: 'Dépositos',
    iconName: 'aperture',
    route: '/deposit',
  },
  {
    displayName: 'Levantamentos',
    iconName: 'layout-navbar-expand',
    route: '/withdraws',
  },
  {
    displayName: 'Finanças',
    iconName: 'poker-chip',
    route: '/finance',
  },
  {
    displayName: 'Actividade Suspeita',
    iconName: 'lock',
    route: '/finance',
  },
  {
    displayName: 'Gestão Usuário',
    iconName: 'list',
    route: '/user-manage',
  },
  {
    navCap: 'Utilitários',
  },
  {
    displayName: 'Reltórios',
    iconName: 'rosette',
    route: '/ui-/badge',
  },
  {
    displayName: 'Configurações',
    iconName: 'tooltip',
    route: '/ui-',
  },
  // {
  //   displayName: 'Lists',
  //   iconName: 'list',
  //   route: '/ui-components/lists',
  // },
  // {
  //   displayName: 'Menu',
  //   iconName: 'layout-navbar-expand',
  //   route: '/ui-components/menu',
  // },
  // {
  //   displayName: 'Tooltips',
  //   iconName: 'tooltip',
  //   route: '/ui-components/tooltips',
  // },
  // {
  //   navCap: 'Auth',
  // },
  // {
  //   displayName: 'Login',
  //   iconName: 'lock',
  //   route: '/authentication/login',
  // },
  // {
  //   displayName: 'Register',
  //   iconName: 'user-plus',
  //   route: '/authentication/register',
  // },
  // {
  //   navCap: 'Extra',
  // },
  // {
  //   displayName: 'Icons',
  //   iconName: 'mood-smile',
  //   route: '/extra/icons',
  // },
  // {
  //   displayName: 'Sample Page',
  //   iconName: 'aperture',
  //   route: '/extra/sample-page',
  // },
];
