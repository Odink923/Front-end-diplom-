import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";

export default class UserStore{

    user= {
        email: "",
        id: "",
        isActivated: false
    }
    isAuth = false;
    isLoading = false;
    constructor() {
        makeAutoObservable(this);

    }

    setAuth(bool){
        if (typeof bool === 'boolean') {
            this.isAuth=bool;

        } else {
            console.log("Змінна не має типу boolean");
        }

    }
    setActivated(bool){
        if (typeof bool === 'boolean') {
            this.user.isActivated=bool;
        } else {
            console.log("Змінна не має типу boolean");
        }
    }
    setUser(email,id){
        this.user.email = email;
        this.user.id = id;
    }

    async login(email,password){
        try{
            const response = await AuthService.login(email, password);
            if(response.data.user.isActivated) {
                localStorage.setItem('token', response.data.accessToken);
                console.log(response);
                this.setAuth(true);
                this.setUser(response.data.user.email, response.data.user.id);
            }else {
                console.log("not Activated");
            }


        }catch (e){
            console.log(e.response?.data?.message);
        }
    }
    async registration(email,password){
        try{
            const response = await AuthService.registration(email, password);
        }catch (e){
            console.log(e.response?.data?.message);

        }
    }
    async logout(email,password){
        try{
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser('','');
        }catch (e){
            console.log(e.response?.data?.message);
        }
    }

    setLoading(bool){
        this.isLoading = bool;
    }

    async checkAuth(){
        this.setLoading(true);
        try{
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials:true})
            console.log(response);
            // localStorage.setItem('token', response.data.accesToken);
            this.setAuth(true);
            this.setUser(response.data.email,response.data.id);
            this.setActivated(response.data.user.isActivated);
        }catch (e){
            console.log(e.response?.data?.message);
        }
        finally {
            this.setLoading(false);
        }
    }

}