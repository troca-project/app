import { MessageEntity, PostMessageEntity } from "./chatEntitys";

export interface ChatRepositoryDomain{
    sendMessage(message:PostMessageEntity, roomId:number) : any;
    recoveryMessages(chat_id:number) : MessageEntity[];
    getChat(chat_id:number) :any ;
    
}