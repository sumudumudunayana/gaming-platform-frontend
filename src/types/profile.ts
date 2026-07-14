export interface Profile {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  player_level: number;
  experience_points: number;
  created_at: string;
  updated_at: string;
}