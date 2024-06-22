import { socket } from "../../socket-io/socket";
import { MessageEntity, PostMessageEntity } from "../domain/chatEntitys";
import { ChatRepositoryDomain } from "../domain/chatRepositoryDomain";

export class ChatRepository implements ChatRepositoryDomain {
 

    sendMessage(message: PostMessageEntity, roomId:number): any {
        return new Promise((resolve,reject)=>{
            socket.emit("chat_message", {message, roomId}, (res) => {
                if(res.ok) resolve(res)
                else reject(res)
            });

        })
    }

    getChat(chat_id: number) {
         return new Promise((resolve, reject)=>{
            resolve(
                {id:4, title:'Cadena de bici', sender_id:1, product_sender:'Juego de llave tubo', product_receiver:'Cadena de bici', receiver_id:15, accepted:false }
            )
        })
    }
    
    joinRoom(chat_id:number){

    }


    recoveryMessages(chat_id: number): MessageEntity[] {
        throw new Error("Method not implemented.");
    }

}