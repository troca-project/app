
export interface MessageEntity {
  id?: number;
  chat_id: number;
  sender_id: number;
  content: string;
  timestamp:number;
  image_url?: string;
  status:string;
}
export interface PostMessageEntity {
  id?:number
  chat_id: number;
  sender_id: number;
  content: string;
  image_url?: string;
  status:string
  timestamp:number
}

export interface ChatEntity{
  id: number;
  title:string;
  room_id:number;
  sender_id: number;
  receiver_id: number;
  accepted:boolean;
  created_at: Date;
}
