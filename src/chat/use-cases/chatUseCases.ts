import { MessageEntity, PostMessageEntity } from "../domain/chatEntitys";
import { ChatService } from "../infraestructure/chatService";
import { ChatRepository } from "../repository/chatRepository";

const chatService = new ChatService(new ChatRepository) 

export const sendMessage = (message:PostMessageEntity, roomId:number):any => chatService.sendMessage(message, roomId) 
export const getChat = async (chat_id:number) => await chatService.getChat(chat_id) 
