//Create mini express application (Seperate route) to connect to server.js module

import exp from 'express'           /* Creating mini exp app..Contains only mechanism to handle routes */
export const userApp = exp.Router()


//Test data (Since we are not creating database yet)
 let users = []   //Dynamically we have to insert data here

//2.Create USERAPI(REST API: REpresentational State Transfer)
 
//Route to handle GET req of Client (http://localhost:3000/users)
userApp.get('/users',(req,res)=>{
    //read all users & send response
    res.json({message:"All users",payload:users})
     
}) 
userApp.get('/users/:id',(req,res) => {
     let idOfUrl = Number(req.params.id)
     let userById = users.find(userObj => userObj.id === idOfUrl)
     if(!userById)
          return res.json({message:"User not found"})
     res.json({message:"User details",payload : userById })
})
//Route to handle POST req of Client 
userApp.post('/users',(req,res)=>{
   //get user from client
   const newUser=req.body
   //push user into users
   users.push(newUser)
   //send response
   res.json({message:"User created"})
    
})

//Route to handle PUT req of Client
userApp.put('/users',(req,res)=> {

     //get modified user from client {}
     //get index of existing user in users[] so we can update
     //update user with index
     //send response
     let modifiedUser = req.body
     let index = users.findIndex(userObj => userObj.id === modifiedUser.id)
     if(index === -1)
          res.json({message:"User not found to update"})
     users.splice(index,1,modifiedUser)
     res.json({message:"User updated successfully"})


 
    
})
//Route to handle DELETE req of Client 
userApp.delete('/users/:id',(req,res)=> { //:id indicated its url parameter otherwise it takes as path
    //get user id from client 
     let idOfUrl = Number(req.params.id) //.id is to get the value which is string
                               // anything sent in http link will be string
    //find index of user
    let index = users.findIndex(userObj => userObj.id == idOfUrl)
    //if user not found
    if(index === -1)
      return res.json({message:"User not found to delete"})
    //delete user by index
     users.splice(index,1)
    //send response
    res.json({message:"User deleted successfully"})

    
})