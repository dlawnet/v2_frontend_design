"use client"
import React, { useState } from 'react';
import { Search, SendHorizontal, EllipsisVertical, Menu, Video, Paperclip } from 'lucide-react';
import { BigMessageIcon } from '@app/icons';
import { motion } from 'framer-motion';
import { ScrollArea } from '@app/components/base/scrollArea';
import { Input } from '@app/components/base/input';

type User = {
  id: number;
  name: string;
  image: string;
};

type ChatMessage = {
  id: number;
  sender: string;
  message: string;
};

const Customer: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const users: User[] = [
    { id: 1, name: 'John Doe', image: 'https://randomuser.me/api/portraits/men/5.jpg', },
    { id: 2, name: 'Jane Smith', image: 'https://randomuser.me/api/portraits/women/5.jpg', },
    { id: 3, name: 'Alice Johnson', image: 'https://randomuser.me/api/portraits/women/2.jpg', },
    { id: 4, name: 'Maria Jones', image: 'https://randomuser.me/api/portraits/women/1.jpg', },
    { id: 5, name: 'Akin Alade', image: 'https://randomuser.me/api/portraits/men/1.jpg', },
    { id: 6, name: 'James Johnson', image: 'https://randomuser.me/api/portraits/men/2.jpg', },
  ];

  const initialChats: { [key: number]: ChatMessage[] } = {
    1: [
      { id: 1, sender: 'me', message: 'Hello John!' },
      { id: 2, sender: 'John Doe', message: 'Hi, how are you?' }
    ],
    2: [
      { id: 1, sender: 'me', message: 'Hello Jane!' },
      { id: 2, sender: 'Jane Smith', message: 'Hey! Long time no see!' }
    ],
    3: [
      { id: 1, sender: 'me', message: 'Hi Alice!' },
      { id: 2, sender: 'Alice Johnson', message: 'Hello!' }
    ],
    4: [
      { id: 1, sender: 'me', message: 'Hello Maria!' },
      { id: 2, sender: 'Maria Jones', message: 'Hi, how are you?' }
    ],
    5: [
      { id: 1, sender: 'me', message: 'Hello Akin!' },
      { id: 2, sender: 'Akin Alade', message: 'Hey! Long time no see!' }
    ],
    6: [
      { id: 1, sender: 'me', message: 'Hi J.J!' },
      { id: 2, sender: 'James Johnson', message: 'Hello!' }
    ]
  };

  const [chats, setChats] = useState<{ [key: number]: ChatMessage[] }>(initialChats);

  const sendMessage = () => {
    if (message.trim() && selectedUser) {
      const newMessage = { id: chats[selectedUser.id].length + 1, sender: 'me', message };
      setChats({
        ...chats,
        [selectedUser.id]: [...chats[selectedUser.id], newMessage]
      });
      setMessage('');
    }
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getLastMessage = (userId: number): string => {
    const userChats = chats[userId];
    const lastMessage = userChats.length > 0 ? userChats[userChats.length - 1].message : '';
    return lastMessage.length > 20 ? lastMessage.slice(0, 20) + '...' : lastMessage;
  };

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex justify-between items-center px-2 md:px-4'>
        <h2 className='text-[1em] md:text-[1.6em] font-bold text-[#491217]'>Customer Service</h2>      
        <div className='px-2 md:px-4 lg:px-6 py-2 flex items-center gap-2 border overflow-hidden rounded-full bg-[#FDDF5A]'>
          <Search className='w-7 h-7 text-[#491217]'/>
          <Input
            type='text'
            placeholder='Search here...'
            className='border-none  md:min-w-[200px] px-2 md:py-1 outline-none shadow-none text-[#491217] text-sm'
          />
        </div>
      </div>

      <div className="flex h-[calc(100vh-8rem)] helvetica">
        <div className="w-[280px] border-r border-[#491217] p-4 hidden sm:flex flex-col gap-3">

            <div className='flex justify-between items-center'>
                <h1 className='helvetica text-[1em] font-medium'>
                    Live Messages
                </h1>
            </div>
    
            <div className="">
                <div className="flex items-center border border-[#FDDF5A] rounded-[50px] px-4 py-2">
                    <Search className="mr-2 text-gray-500" />
                    
                    <input
                    type="text"
                    placeholder="Search here"
                    className="w-full bg-transparent outline-none helvetica text-[.8em]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            
            <ScrollArea className='h-[calc(100vh-18rem)] lg:h-[calc(100vh-12rem)]'>
              <ul className='flex flex-col gap-1 helvetica'>
                {filteredUsers.map(user => (
                  <li 
                    key={user.id}
                    onClick={() => setSelectedUser(user)}
                    className={`cursor-pointer p-1 rounded-md hover:bg-primary hover:bg-opacity-40 flex items-center gap-2 border-b border-[#491217]
                              ${selectedUser?.id === user.id ? 'bg-primary bg-opacity-40' : ''} w-full overflow-hidden duration-200 ease-in-out`}
                  >
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                      <img
                        src={user.image}
                        alt='user'
                        className='w-full h-full object-cover'
                      />
                    </div>
                    
                    <div className='flex flex-grow flex-col overflow-hidden'>
                      <span className='text-gray-800 text-[.7em] sm:text-[1em] font-medium'>{user.name}</span>
                      <span className='text-gray-500 text-[.7em] font-light'>
                        {getLastMessage(user.id)}
                      </span>
                      <span className='text-gray-500 text-[.6em] font-light'>12:15pm</span>
                    </div>

                    <div className='h-full flex flex-col gap-1 justify-center items-center'>    
                      <span className='text-white text-[.8em] flex items-center justify-center w-4 h-4 rounded-full bg-[#491217]'>1</span>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollArea>
        </div>
  
        <div className="flex-1 flex flex-col">
          {selectedUser ? (
            <> 
              <div className='w-full flex justify-between items-center border-b border-[#491217] p-2 '>
                <div className="flex gap-4 justify-start items-center">
                  <div onClick={()=>setIsMenu(!isMenu)} className='sm:hidden w-10 h-10 flex items-center justify-center'>
                    <Menu className='w-8 h-8 text-gray-500'/>
                  </div>

                  <div className='w-10 h-10 rounded-full overflow-hidden'>
                    <img
                      src={selectedUser.image}
                      alt='user'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='flex flex-col leading-2'>
                    <span className="text-lg font-medium">{selectedUser.name}</span>
                    <span className='text-gray-500 text-[.7em] font-light'>last seen at 12:15pm</span>
                  </div>
                </div>

                <div className='flex items-center gap-2'>
                  <div className='w-10 h-8 flex items-center justify-center cursor-pointer'>
                    <Video className='w-6 h-6 text-[#FDDF5A]'/>
                  </div>

                  <div className='w-10 h-8 flex items-center justify-center cursor-pointer'>
                    <EllipsisVertical className='w-6 h-6 text-[#FDDF5A] rotate-90'/>
                  </div>
                </div>
              </div>

              <ScrollArea 
              onClick={()=>setIsMenu(false)} 
              className='h-[calc(100vh-16rem)] lg:h-[calc(100vh-10rem)]'
              >  
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chats[selectedUser.id]?.map(chat => (
                    <div 
                      key={chat.id} 
                      className={`flex ${chat.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      {
                        chat.sender === 'me' ? (
                          <div className='p-2 md:p-4 rounded-xl bg-[#491217] text-white text-[.6em] sm:text-[.8em]'>
                            {chat.message}
                          </div>
                        ):(
                          <div className='flex items-start justify-start gap-1'>
                            <div className='w-10 h-10 rounded-full overflow-hidden'>
                              <img
                                src={selectedUser.image}
                                alt='user'
                                className='w-full h-full object-cover'
                              />
                            </div>
                            <div className='p-2 md:p-4 rounded-xl bg-[#FDDF5A] text-black text-[.6em] sm:text-[.8em]'>
                              {chat.message}
                            </div>
                          </div>
                        )
                      }
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className='w-full border-t pt-4 border-[#491217]'>
                <div className="mx-auto mb-4 w-[90%] border rounded-full border-[#FDDF5A] bg-background p-2 flex items-center gap-1">
                  <input 
                    type="text" 
                    placeholder="Write your message" 
                    className="flex-1 bg-transparent outline-none py-1 px-4 text-[.9em] border-none "
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  <Paperclip className='w-6 h-6 text-[#FDDF5A] cursor-pointer'/>

                  <button 
                    onClick={sendMessage} 
                    className=" p-3 bg-[#491217] flex items-center gap-1 text-white rounded-full"
                  >
                    <span className='text-[.8em]'>Send</span>
                    <SendHorizontal className="w-5 h-5 text-white"/>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="relative flex-1 flex items-center justify-center helvetica">
              <div
              onClick={()=>setIsMenu(!isMenu)}
              className='absolute top-0 left-0 sm:hidden w-full h-12 px-4 flex items-center gap-2 justify-start border-b border-gray-200'>
                <Menu className='w-8 h-8 text-gray-500'/>
                <span className='helvetica text-[1.2em] font-medium'>
                  Messages
                </span>
              </div>

              <div onClick={()=>setIsMenu(false)} className='flex flex-col w-full h-full items-center justify-center gap-3'>
                <BigMessageIcon/>
                <p className="text-gray-500 text-[1.1em]">Select a chat</p>
              </div>
            </div>
          )}
        </div>


        {/* MOBILE ----- CHAT MENU */}

        {isMenu && (
          <motion.div
          initial={{x: -500, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.3}} 
          className='fixed left-0 z-50 w-[300px] bg-white h-full flex rounded-lg shadow-md shadow-gray-300 cursor-pointer'
          >
              <div className="w-full border-r border-gray-300 p-4 flex flex-col gap-6">

                <div className='flex justify-between items-center'>
                    <h1 className='helvetica text-[1.1em] font-medium'>
                        Live Messages
                    </h1>
                </div>

                <div className="">
                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                        <Search className="mr-2 text-gray-500" />
                        
                        <input
                        type="text"
                        placeholder="Search lawyers/messages"
                        className="w-full bg-transparent outline-none helvetica text-[.8em]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>


                <ScrollArea className='h-[calc(100vh-18rem)]'>
                  <ul className='flex flex-col gap-1 helvetica'>
                    {filteredUsers.map(user => (
                      <li 
                        key={user.id}
                        onClick={() => setSelectedUser(user)}
                        className={`cursor-pointer p-2 rounded-md hover:bg-primary hover:bg-opacity-40 flex items-center gap-2
                                  ${selectedUser?.id === user.id ? 'bg-primary bg-opacity-40' : ''} w-full overflow-hidden duration-200 ease-in-out`}
                      >
                        <div className='w-10 h-10 rounded-full overflow-hidden'>
                          <img
                            src={user.image}
                            alt='user'
                            className='w-full h-full object-cover'
                          />
                        </div>
                        
                        <div className='flex flex-grow flex-col overflow-hidden'>
                          <span className='text-gray-800 font-medium'>{user.name}</span>
                          <span className='text-gray-500 text-[0.7em] font-light'>
                            {getLastMessage(user.id)}
                          </span>
                          <span className='text-gray-500 text-[.6em] font-light'>12:15pm</span>
                        </div>

                        <div className='h-full flex flex-col gap-1 justify-center items-center'>    
                          <EllipsisVertical className='text-dark w-5 h-5'/>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
                </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}

export default Customer;
