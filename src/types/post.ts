export type Post = {
  id: number;
  title: string;
  text: string;
  image?: string;
  url: string;
  sort_order?: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

export const POST_MOCKS_EXAPMLE = {
  id: 198,
  title: 'HU2uXdOWL2',
  text: 'PfviCzY0zluudurjrjdjfijf',
  image:
    'https://images.pexels.com/photos/6153616/pexels-photo-6153616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  url: 'DwlNb7Ot8h',
  active: 1,
  sort_order: 198,
  created_at: '2023-02-06T10:41:18.000000Z',
  updated_at: '2023-02-27T23:06:44.000000Z',
  deleted_at: null,
};
