export interface OAuthResponse {
  email: string;
  nickname: string;
  access_token: string;
}

export interface UserData {
  id: number;
  email: string;
  nickname: string;
  role: string;
}

export interface Archive {
  archive_seq: number;
  result: string;
  type: string;
  created_at: number[];
}
export interface ArchiveWithCategory {
  category_id: number;
  category_title: string;
  archives: Array<Archive>;
}
export interface MyTestResultList {
  archives_with_categories: Array<ArchiveWithCategory>;
}
