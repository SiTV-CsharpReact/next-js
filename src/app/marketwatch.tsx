// import { HubConnection } from '@microsoft/signalr/dist/esm/HubConnection';
// import { HubConnectionBuilder } from '@microsoft/signalr/dist/esm/HubConnectionBuilder';
// import { LogLevel } from '@microsoft/signalr/dist/esm/ILogger';
// import { Button, Input } from '@mui/material';
// import React, { useEffect, useState } from 'react'
// import * as signalR from "@microsoft/signalr";

// interface Message {
//     user: string;
//     message: string;
//   }

// const Marketwatch = () => {
// //   const user = process.env.DB_USER;
// //   console.log(user)
//   const [connectionHNX, setConnectionHNX] = useState<null | HubConnection>(null);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [connectionHSX, setConnectionHSX] = useState<null | HubConnection>(null);
//   const [user, setUser] = useState('');
//   const [message, setMessage] = useState('');
//   const [inputText, setInputText] = useState("");

//   useEffect(() => {
//     const hubConnection = new signalR.HubConnectionBuilder()
//   .withUrl("https://gateway.fpts.com.vn/hnx/signalr/hubs")
//   .configureLogging(signalR.LogLevel.Information)
//   .build();
// //     const connect = new HubConnectionBuilder()
// //       .withUrl("http://price.fpts.com.vn/hsx/hsxhub"
   
// //  )
// //   //   .configureLogging(logging => {
// //   //     logging.SetMinimumLevel(LogLevel.Information);
// //   //     logging.AddConsole();
// //   // })
// //       .withAutomaticReconnect()
// //       .build();

//       setConnectionHNX(hubConnection);
//       console.log(connectionHNX);
//   }, []);

  
// //   useEffect(() => {
// //     const connect = new HubConnectionBuilder()
// //       .withUrl("http://price.fpts.com.vn/hsx/hsxhub")
// //       .withAutomaticReconnect()
// //       .build();

// //       setConnectionHNX(connect);
// //   }, []);


//   useEffect(() => {
//     if (connectionHNX) {
//       connectionHNX
//         .start()
//         .then(() => console.log("Connected"))
//         .catch((error) => console.log(error));
//         connectionHNX.on("updateData", (data) => {
//             console.log("Received data:", data);
//           });
//     }
//   }, [connectionHNX]);


// //   useEffect(() => {
// //     // ...
// //     if (connectionHNX) {
// //         connectionHNX.on("Data", (user, message) => {
// //         setMessages(messages => [...messages, { user, message }]);
// //       });
// //     }
// //   }, [connectionHNX]);

// //   const sendMessage = () => {
// //     if (connectionHNX) {
// //         connectionHNX.invoke("SendMessage", user, message)
// //         .then(() => setMessage(''))
// //         .catch((err) => console.error(err));
// //     }
// //   }
//   // console.log(connectionHNX);
// //   const sendMessage = async () => {
// //     if (connectionHNX) await connectionHNX.send("SendMessage", inputText);
// //     setInputText("");
// //   };

//   // const [connection, setConnection] = useState("");
//   // const [messages, setMessages] = useState([]);
//   // const [users, setUsers] = useState([]);

//   // const joinRoom = async (user, room) => {
//   //   try {
//   //     const connection = new HubConnectionBuilder()
//   //       .withUrl("https://localhost:44382/chat")
//   //       .configureLogging(LogLevel.Information)
//   //       .build();

//   //     connection.on("ReceiveMessage", (user, message) => {
//   //       setMessages(messages => [...messages, { user, message }]);
//   //     });

//   //     connection.on("UsersInRoom", (users) => {
//   //       setUsers(users);
//   //     });

//   //     connection.onclose(e => {
//   //       setConnection();
//   //       setMessages([]);
//   //       setUsers([]);
//   //     });

//   //     await connection.start();
//   //     await connection.invoke("JoinRoom", { user, room });
//   //     setConnection(connection);
//   //   } catch (e) {
//   //     console.log(e);
//   //   }
//   // }
//   // const sendMessage = async (message) => {
//   //   try {
//   //     await connection.invoke("SendMessage", message);
//   //   } catch (e) {
//   //     console.log(e);
//   //   }
//   // }
//   // const closeConnection = async () => {
//   //   try {
//   //     await connection.stop();
//   //   } catch (e) {
//   //     console.log(e);
//   //   }
//   // }

//   return (
//     <div className='bg-black h-96 text-white'>
// <div>
//     {/* <ul>
//       {messages.map((m, index) => (
//         <li key={index}>
//           <strong>{m.user}</strong>: {m.message}
//         </li>
//       ))}
//     </ul>
//     <input type="text" placeholder="Name" value={user} onChange={(e) => setUser(e.target.value)} />
//     <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
//     <button onClick={sendMessage}>Send</button> */}
//   </div>
//       </div>
//   )
// }

// export default Marketwatch

// // function useEffect(arg0: () => void, arg1: never[]) {
// //   throw new Error('Function not implemented.');
// // }
import React from 'react'

const Marketwatch = () => {
  return (
    <div>marketwatch</div>
  )
}

export default Marketwatch