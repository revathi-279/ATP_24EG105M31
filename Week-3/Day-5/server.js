//1.Create HTTP server
import exp from 'express' //we can any name 
const app=exp()  //we can use any name instead of app to hold express function
//Express application contains http server
//use body pars
import {userApp} from "./UserAPI.js"
import {productApp} from "./ProductAPI.js"
//Body parser middleware (imp for POST and PUT request because they have body)
app.use(exp.json())  //Converts json to js and viceversa....Its a inbuilt middleware
//Request of body becomes undefined without upper line 
//Create custom middleware
app.use('/user-api',userApp)  //Written in brackets is called middleware
app.use('/product-api',productApp)
//set a port number
const port=3000
//assign port number to http server
app.listen(port,()=>console.log(`server listening to port ${port}...`)) 
