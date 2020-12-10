import { useEffect, useRef, useState } from "react";

function App({id}) {

  //state from api
  const [chats,setChats] = useState([]);

  //animation loader state
  const scrollBar = useRef(null);
  const [displayNumber,setDisplayNumber] = useState(8);
  const [displayEnd,setDisplayEnd] = useState(false)

  const onScrollHandler = () =>{
      let scrollOffsetHeight = scrollBar.current.offsetHeight;
      let scrollHeight = scrollBar.current.scrollHeight;
      let scrollTop = scrollBar.current.scrollTop;

      if(scrollTop - 10 < scrollOffsetHeight - scrollHeight && displayEnd === false){
        if(displayNumber > chats.length){
          setDisplayNumber(chats.length)
          setDisplayEnd(true);
        }else{
          setDisplayNumber(displayNumber+8)
        }
      } 
  }

  const arrayReverseObj = obj => (Object.keys(obj).reverse().map(key=> ({...obj[key],key:key}) ));

  useEffect(() => {
    const callApi = async () => {
      await fetch("/api/chat/" + id, { method: "GET" })
        .then((response) => {
          if (!response.ok) throw Error(response.statusText);
          return response;
        })
        .then((result) => setChats(JSON.parse(result._bodyText).reverse()));
    };

    callApi();
  }, [id]);

  //for classname creator
  let isMe = (index) => (index % 2 == 0);
  let isBottom = (index) => (index === 0);

  return (
    <>
      <div className="flex justify-center h-screen bg-blue-400 overflow-hidde p-16">
        <div className="bg-white w-2/3 shadow-xl flex flex-col rounded-2xl overflow-hidden">
          <header className="h-16 bg-white border-b border-gray-200"></header>
          <div
            ref={scrollBar}
            onScroll={() => onScrollHandler()}
            className={[
              "relative flex-shrink-1 flex h-full overflow-y-scroll flex-col-reverse p-2",
            ].join(" ")}
          >
            {chats.slice(0, displayNumber).map((each, eachIndex) =>
              arrayReverseObj(each.message).map((chat, chatIndex) => (
                <div
                  className={[
                    "mx-2 flex items-start my-4",
                    isMe(eachIndex) ? "flex-row-reverse pl-64" : "pr-64",
                  ].join(" ")}
                >
                  {isBottom(chatIndex) && (
                    <div className="w-8 h-8 flex-shrink-0 mx-2 bg-gray-300 rounded-full"></div>
                  )}
                  <div>
                    <p
                      key={eachIndex + chatIndex}
                      className={[
                        "inline-block px-4 py-2 rounded-md",
                        isMe(eachIndex)
                          ? "bg-blue-500 rounded-br-none text-white"
                          : "bg-gray-100 rounded-bl-none text-gray-900",
                        isMe(eachIndex)
                          ? !isBottom(chatIndex) && "mr-12"
                          : !isBottom(chatIndex) && "ml-12",
                      ].join(" ")}
                    >
                      {chat.text}
                    </p>
                    {
                      isBottom(chatIndex) && (
                        <p className="text-sm text-gray-300">00:00</p>
                      )
                    }
                  </div>
                </div>
              ))
            )}
          </div>
          <footer className="h-16 bg-white border-t border-gray-200"></footer>
        </div>
      </div>
    </>
  );
}

export default App;
