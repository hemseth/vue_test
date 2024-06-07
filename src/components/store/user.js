import { defineStore } from "pinia";
import axios from "axios"
export const useUserStore = defineStore('users',{
    state: () => ({
        users:[],
        name:'',
        email:'',
        password:''
    }),
    actions:{
       async fetchUsers(){
            const{data}= await axios.get("http://172.23.128.93:3000/users")
            this.users=data;
            console.log(this.users)
           
        },
        async loginUser(){
            const {data}=await axios.post("http://172.23.128.93:3000/postrequest",{
                name:this.name,
                email:this.email,
                password:this.password
            })
        },
        async signUp(){
            const {data}=await axios.post("http://172.23.128.93:3000/register",{
                email:this.email,
                password:this.password
            })
        }
    }

}

)