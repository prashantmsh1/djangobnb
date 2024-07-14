import Conversation from "@/app/components/inbox/Conversation";

const InboxPage = async () => {
   

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
            <h1 className="my-6 text-2xl">Inbox</h1>
        <div className=" gap-y-4 flex flex-col">
            <Conversation/>
           <Conversation/>
           <Conversation/>
        </div>
          
        </main>
    )
}

export default InboxPage;