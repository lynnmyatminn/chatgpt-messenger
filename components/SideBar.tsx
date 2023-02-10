'use client';

import { collection, orderBy, query } from 'firebase/firestore';
import { useSession, signOut } from 'next-auth/react';
import {
  useCollection,
  useCollectionData,
} from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import NewChat from './NewChat';
import ChatRow from './ChatRow';
import { useEffect, useState } from 'react';
import ModelSelection from './ModelSelection';

function SideBar() {
  // const [chats, setChats] = useState([]);
  const { data: session } = useSession();
  console.log(session);

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, 'users', session.user?.email!, 'chats'),
        orderBy('createdAt', 'asc')
      )
  );

  // useEffect(() => {
  //   setChats(snapshot?.docs.map((doc) => doc.data().value));
  // }, []);

  console.log(chats, loading, error);

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          {/* Model Selection */}
          <div className="hidden sm:inline">
            <ModelSelection />
          </div>
          {/* Map through ChatRows */}
          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}

            {chats?.docs.map((chat: any) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile Pic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}

export default SideBar;
