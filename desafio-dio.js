
const canal = gets();

function saudacaoBot(canal){
   switch(true){
      case canal == "whatsapp" :
         return "Ola, este e o WhatsAppBot"
      case canal == "telegram" :
         return "Ola, este e o TelegramBot"
      case canal == "webchat" : 
         return "Ola, este e o WebChatBot"
      default :
         return "Canal nao suportado"
   }
}

console.log(saudacaoBot(canal));





 