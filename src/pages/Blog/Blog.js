import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blogs')
    return (
        <div className='my-10'>
            <div className="collapse shadow-xl rounded-lg my-5">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title bg-white text-black peer-checked:bg-gray-500 peer-checked:text-black">
 <span className='font-bold'>Question : </span> What is the difference between SQL and NoSQL?
  </div>
  <div className="collapse-content bg-white text-black peer-checked:bg-gray-500 peer-checked:text-black"> 
    <p> <span className=''>Answer : </span> SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.
Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.
SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.
Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</p>
  </div>
</div>
            <div className="collapse shadow-xl rounded-lg my-5">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title bg-white text-black peer-checked:bg-gray-500 peer-checked:text-black">
 <span className='font-bold'>Question : </span> What is JWT, and how does it work?
  </div>
  <div className="collapse-content bg-white text-black peer-checked:bg-gray-500 peer-checked:text-black"> 
    <p> <span className=''>Answer : </span> A client and a server can exchange security information using the open standard known as WT, or JSON Web Token. Every JWT has a set of encoded JSON objects, including claims. To ensure that the claims cannot be changed after the token is issued, JWTs are signed using a cryptographic technique. <br  />
    JWTs are unique among web tokens in that they include a list of claims. Information is transmitted between parties through claims. The specific use case will determine what these assertions are. A claim might specify, for instance, who issued the token, how long it is valid, or what authorizations the client has received.

Three sections of a string called a JWT are separated by dots (.) and serialized with base64. The JWT appears something like this in compact serialization, the most used serialization format: xxxxx.yyyyy.zzzzz.</p>
  </div>
</div>
            <div className="collapse shadow-xl rounded-lg my-5">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title bg-white text-black peer-checked:bg-gray-500 peer-checked:text-black">
 <span className='font-bold'>Question : </span> What is the difference between javascript and NodeJS?
  </div>
  <div className="collapse-content bg-white text-black peer-checked:bg-gray-500 peer-checked:text-black"> 
    <p> <span className=''>Answer : </span> JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification or any specific business logic. We need to append in the screen without page refreshing. JavaScript also helps to use Ajax at any time, which helps us call any server-side script for given dynamic data based on the requirement. It also helps with generating dynamic HTML tables based on business requirement. JQuery is one of the popular libraries to make comfortable use of JavaScript by avoiding to write a lot of code.</p>
  </div>
</div>
            <div className="collapse shadow-xl rounded-lg my-5">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title bg-white text-black peer-checked:bg-gray-500 peer-checked:text-black">
 <span className='font-bold'>Question : </span> How does NodeJS handle multiple requests at the same time?
  </div>
  <div className="collapse-content bg-white text-black peer-checked:bg-gray-500 peer-checked:text-black"> 
    <p> <span className=''>Answer : </span> Numerous client requests are received by NodeJS, which adds them to EventQueue. The event-driven architecture approach was used in the construction of NodeJS. The EventLoop in NodeJS is an infinite loop that accepts and processes requests. The EventQueue's listener is the EventLoop.
The event loop would handle the request itself and send the response back to the client by itself if NodeJS can process the request without I/O blocking. However, you can handle numerous requests concurrently by utilizing the worker threads or NodeJS cluster modules.</p>
  </div>
</div>
           

         
        </div>
    );
};

export default Blog;