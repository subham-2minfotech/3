import Profile from "../cmp/mainpage/Profile"
import Question from "../cmp/mainpage/Question"
import React from 'react'
export const WithLogin = [
    {id:1,title:"Home" , Path: '/'},
    {id:2,title:"Profile" , Path: '../src/Main'},
    {id:3,title:"Question" , Path: '../src/Main'},
    {id:4,title:"Logout" , Path: '../src/Main'}
];

export const WithOutLogin = [
    {id:1,title:"Home" , Path: '../src/Main'},
    {id:2,title:"About" , Path: '../src/Main'},
    {id:3,title:"Login" , Path: '../src/Main'},
    {id:4,itle:"Signup" , Path: '../src/Main'}
];