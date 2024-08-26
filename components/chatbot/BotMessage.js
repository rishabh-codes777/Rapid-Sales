const BotMessage = ({ text }) => {
    return (
      <div className="self-start bg-white text-black p-3 rounded-3xl rounded-tl-sm mb-2 max-w-xs md:max-w-md shadow-md">
        {typeof text ==="string"?
        <div
          className="text-md text-black text-wrap"
          dangerouslySetInnerHTML={{
            __html: text.replace(/<p>/g, '<p class="my-4 text-black">')
            .replace(/<h1>/g, '<h1 class="text-xl font-bold mb-4">')
            .replace(/<h2>/g, '<h2 class="text-lg font-semibold mb-3">')
            .replace(/<h3>/g, '<h3 class="text-lg font-semibold mb-2">')
            .replace(/<ul>/g, '<ul class="list-disc list-inside my-4">')
            .replace(/<ol>/g, '<ol class="list-decimal list-inside my-4">')
            .replace(/<li>/g, '<li class="my-2">')
            .replace(/<a /g, '<a class="text-blue-500 underline" ')
            .replace(/<strong>/g, '<strong class="font-semibold">')
            .replace(/<em>/g, '<em class="italic">')
          }}
          />
          :
          <div className="text-lg text-black text-wrap">
            {text}
          </div>
        }
      </div>
    );
  };

export default BotMessage;