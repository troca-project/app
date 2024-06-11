import { MessageEntity, PostMessageEntity } from "../domain/chatEntitys";
import { ChatRepositoryDomain } from "../domain/chatRepositoryDomain";

export class ChatService{

  constructor(private chatRepository: ChatRepositoryDomain) {}

  recoveryMessages(chat_id: number): MessageEntity[] {
    return this.chatRepository.recoveryMessages(chat_id);
  }

  sendMessage(message: PostMessageEntity, roomId:number) {
    return this.chatRepository.sendMessage(message, roomId);
  }

  async getChat(chat_id:number) {
    return await this.chatRepository.getChat(chat_id);
  }
}
