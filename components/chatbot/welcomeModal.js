export function WelcomeChat() {
    // Function logic goes here
    return(
        <div className="flex flex-col items-center justify-center p-4 md:p-8 flex-grow">
          <div className="flex-1 flex items-center">
            <div className="w-full text-center">
              <h1 className="text-2xl md:text-4xl font-bold">Welcome to Sprint Earn</h1>
              <p className="text-center text-gray-600 mb-4 md:mb-8">
                Get started by SprintEarn Chat. Not sure where to start?
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-8 max-w-md mx-auto">
                <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg shadow-md">
                  <span className="font-bold">Write copy</span>
                  <button className="bg-white p-2 rounded-full shadow-md">
                    <i className="fas fa-wand-magic-sparkles"></i>
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-100 rounded-lg shadow-md">
                  <span className="font-bold">Image generation</span>
                  <button className="bg-white p-2 rounded-full shadow-md">
                    <i className="fas fa-wand-magic-sparkles"></i>
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-100 rounded-lg shadow-md">
                  <span className="font-bold">Create avatar</span>
                  <button className="bg-white p-2 rounded-full shadow-md">
                    <i className="fas fa-wand-magic-sparkles"></i>
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-pink-100 rounded-lg shadow-md">
                  <span className="font-bold">Write code</span>
                  <button className="bg-white p-2 rounded-full shadow-md">
                    <i className="fas fa-wand-magic-sparkles"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          
        </div>
    )
}