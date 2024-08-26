import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";

const Messages = ({ messages }) => {
    return (
      <div className="flex flex-col  mx-auto h-full p-4 bg-[#edf0f5]">
        {messages.map((message, index) =>
          message.sender === 'user' ? (
            <UserMessage key={index} text={message.text} />
          ) : (
            <BotMessage key={index} text={message.text} />
          )
        )}
      </div>
    );
  };

export default Messages;
  