const UserMessage = ({ text }) => {
    return (
      <div className="self-end  bg-[#d0d3e3] text-black p-3 rounded-3xl rounded-br-sm mb-2 max-w-md">
        {text}
      </div>
    );
  };

  export default UserMessage;