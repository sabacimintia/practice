import { useState } from "react";


function Products(){
    const [Remove,setRemove] = useState([
        {"id":2,
        "email":"janet.weaver@reqres.in",
        "first_name":"Janet",
        "last_name":"Weaver",
        "avatar":"https://reqres.in/img/faces/2-image.jpg"
    },
    {   "id":3,
        "email":"emma.wong@reqres.in",
        "first_name":"Emma",
        "last_name":"Wong",
        "avatar":"https://reqres.in/img/faces/3-image.jpg"
    },
    {   "id":4,
        "email":"eve.holt@reqres.in",
        "first_name":"Eve",
        "last_name":"Holt",
        "avatar":"https://reqres.in/img/faces/4-image.jpg"
    },
    {   "id":5,
        "email":"charles.morris@reqres.in",
        "first_name":"Charles",
        "last_name":"Morris",
        "avatar":"https://reqres.in/img/faces/5-image.jpg"
    },
    {   "id":6, 
        "email":"tracey.ramos@reqres.in",
        "first_name":"Tracey",
        "last_name":"Ramos",
        "avatar":"https://reqres.in/img/faces/6-image.jpg"
    },
    
    {   "id":8,
        "email":"lindsay.ferguson@reqres.in",
        "first_name":"Lindsay",
        "last_name":"Ferguson",
        "avatar":"https://reqres.in/img/faces/8-image.jpg"
    },
    {   "id":9,
        "email":"tobias.funke@reqres.in",
        "first_name":"Tobias",
        "last_name":"Funke",
        "avatar":"https://reqres.in/img/faces/9-image.jpg"
    },
    {   "id":10,
        "email":"byron.fields@reqres.in",
        "first_name":"Byron",
        "last_name":"Fields",
        "avatar":"https://reqres.in/img/faces/10-image.jpg"
    },
    {   "id":11,
        "email":"george.edwards@reqres.in",
        "first_name":"George",
        "last_name":"Edwards",
        "avatar":"https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },

    ])

const deleteId = id => {
    setRemove(before => {
      return before.filter(i => i.id !== id)
    })
}
    return <div className="users">
     {
        Remove.map(i=> (
            <div className="product" key={i.id}>
                {i.first_name + " " + i.last_name}
                <img src={i.avatar}></img>
                    <div className="button1">
                    <button className="buttoni">ADD FRIEND</button>
                    <button className="btn" onClick={() => deleteId(i.id)}>Remove friend</button>
                    </div>
                    
            </div>
        ))
     }
        </div>
    
}
export default Products;