export type Menu = {
  title: string;
  path: string;
  children?: Menu[];
};

export const MENUS: Menu[] = [
  {
    title: 'Angular Material 예제',
    path: '/examples',
    children: [
      { title: 'Dashboard', path: '/examples/dashboard' },
      { title: 'Address Form', path: '/examples/address' },
      { title: 'Table', path: '/examples/table' },
      { title: 'Tree', path: '/examples/tree' },
      { title: 'Drag & Drop', path: '/examples/drag-drop' },
    ],
  },
];
