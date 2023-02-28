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

export type PostSendData = {
  title: string;
  text: string;
  image: string;
  url: string;
};
