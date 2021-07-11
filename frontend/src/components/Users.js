import React, {useState, useEffect} from 'react'

const API = process.env.REACT_APP_API; //CONEXION BACKEND

export const Users = () => {

    const [name, setName] = useState('') //Guardamos los parametros en conts
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        //console.log(API) //Al crear user, se actualiza 
        e.preventDefault(); //quitamos el refresh
        //console.log(name, email, password) //Verificamos la entrada de datos
        //CONEXION API - BACKEND
        const res = await fetch(`${API}/users`, { // await: permite estar asincrono.
            method: 'POST',
            headers: { //informacion adicional sobre los datos
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        const data = await res.json();
        console.log(data)
    }

    //traemos datos del backend
    const getUsers = async () => {
        const res = await fetch(`${API}/users`) //Por defecto, fetch usa el metodo GET
        const data = await res.json();
        console.log(data);
    }

    //Funcion para llamar la funcion getUsers
    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className = "row">
            <div className = "col-md-4">
                <form onSubmit = {handleSubmit} className = "card card-body"> 
                    <div className = "form-group">
                        <input 
                            type = "text" 
                            onChange = {e => setName(e.target.value)} 
                            value = {name}
                            valuename = "form-control"
                            placeholder = "Name"
                            autoFocus
                        />
                    </div>
                    <div className = "form-group">
                        <input 
                            type = "email" 
                            onChange = {e => setEmail(e.target.value)} 
                            value = {email}
                            valuename = "form-control"
                            placeholder = "Email"
                        />
                    </div>
                    <div className = "form-group">
                        <input 
                            type = "password" 
                            onChange = {e => setPassword(e.target.value)} 
                            value = {password}
                            valuename = "form-control"
                            placeholder = "Password"
                        />
                    </div>
                    <button className  = "btn btn-primary btn-block">
                        Create
                    </button>
                </form>    
            </div>        
            <div className = "col md-8">
            </div>
        </div>
    )   
}