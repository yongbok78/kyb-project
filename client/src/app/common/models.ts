export interface User {
  id?: number;
  name?: string;
  email: string;
  posts?: Post[];
}

export interface Post {
  id?: number;
  title: string;
  content?: string;
  published?: boolean;
  author?: User;
}
