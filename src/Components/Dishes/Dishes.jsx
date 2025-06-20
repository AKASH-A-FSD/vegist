import React from 'react'
import './Dishes.css'
import { useState } from 'react'
import { IoMdStarOutline } from "react-icons/io"; 
import { useDispatch } from 'react-redux';
import { myreducer } from '../../Store';
const   Dishes = () => {
    const [active, setactive] = useState("starter")
    // const [menu, setmenu] = useState("all")
    const ALL=[{
      id:"0",
      name:"Fresh green orange",
      price:"€8,00",
      type:"starter",
      img:"https://vegina-store.myshopify.com/cdn/shop/products/9_c13ac3d4-b3f0-4c53-885a-dfea95a4a2db.jpg?v=1629201618&width=635"
    }
    ,{
       id:"1",
      name:"Fresh green orange",
      price:"€8,00",
      type:"starter",
      img:"https://vegina-store.myshopify.com/cdn/shop/products/10_00e0b6fc-1b61-42c1-8b54-65a40291149c.jpg?v=1629201622&width=635"
    }
    ,{
       id:"2",
      name:"Fresh green orange",
      price:"€8,00",
      type:"starter",
      img:"https://vegina-store.myshopify.com/cdn/shop/products/2_cea41c0a-5029-4fa5-8a29-46458a2cfeb8.jpg?v=1629201504&width=635"
    },
    {
       id:"3",
      name:"Fresh green orange",
      price:"€8,00",
      type:"starter",
      img:"https://vegina-store.myshopify.com/cdn/shop/products/1_bf13d410-358b-439d-80da-5b24e487064e.jpg?v=1629201500&width=635"
    },
    {
       id:"4",
      name:"Fresh green orange",
      price:"€8,00",
      type:"starter",
      img:"https://vegina-store.myshopify.com/cdn/shop/products/14_fcf4c63d-f037-486b-a731-708db6cdeacf.jpg?v=1629201643&width=635"
    },
    
    {
       id:"5",
      name:"Fresh green orange",
      price:"€8,00",
      type:"starter",
      img:"https://vegina-store.myshopify.com/cdn/shop/products/15_6f0c5038-cb00-4e34-bb21-5cbbf675039c.jpg?v=1629201558&width=635"
    },
    {
       id:"6",
      name:"Fresh green orange",
      price:"€8,00",
      type:"breakfast",
      img:"https://vegina-store.myshopify.com/cdn/shop/products/13_8f07000b-0ed3-4f5a-9f33-16ddaa287390.jpg?v=1629201637&width=635"
    },
    {
       id:"7",
      name:"Fresh green orange",
      price:"€8,00",
      type:"breakfast",
      img:"https://vegina-store.myshopify.com/cdn/shop/products/5_f2af588b-064b-4bee-8cf9-bb63cc1b389d.jpg?v=1629201599&width=635"
    },
    {
       id:"8",
      name:"Fresh green orange",
      price:"€8,00",
      type:"breakfast",
      img:"https://vegina-store.myshopify.com/cdn/shop/products/12_6014e685-13d0-4184-b237-5550e0d6490c.jpg?v=1629201632&width=635"
    },
    {
       id:"9",
      name:"Fresh green orange",
      price:"€8,00",
      type:"breakfast",
      img:"https://vegina-store.myshopify.com/cdn/shop/products/11_3b6ea43a-5b42-4fc6-9390-c1a2d7911f14.jpg?v=1629201626&width=635"
    },
    {
       id:"10",
      name:"Fresh green orange",
      price:"€8,00",
      type:"breakfast",
      img:"https://vegina-store.myshopify.com/cdn/shop/products/11_3b6ea43a-5b42-4fc6-9390-c1a2d7911f14.jpg?v=1629201626&width=635"
    }

  ]
    const filterfood= ALL.filter(all=>all.type===active);
    function getid(data) {
      console.log(data);
      
      
     return data
     }
     let databox=getid()
     console.log(databox);
     
    let taketcart=useDispatch()
     const cartbox= ALL.filter(all=>all.id===databox);
    //  console.log(cartbox);
     
    taketcart(myreducer.array(cartbox))
  return (
    
    <>
   <div className="D-out">
   <div className="D-head"><h1>Top recommended dishes</h1></div>
    <div className="D-menus">
        <p onClick={()=>setactive("starter")} className={active==="starter"?"active":""}>Starters</p>
        <p onClick={()=>setactive("breakfast")} className={active==="breakfast"?"active":""}>Breakfast</p>
        <p onClick={()=>setactive("dinner")} className={active==="dinner"?"active":""}>Dinner</p>
        <p onClick={()=>setactive("lunch")}className={active==="lunch"?"active":""}>Lunch</p>
    </div>
   </div>

 <div className="menu-main">
 <div className="menu-dis">
    {
    
     filterfood.map((data,key)=>{
      
        return (
          
          <div className="card">
              <img src={data.img} alt="" />
              <button className='cartbox'  onClick={()=>getid(key)}>ADD TO CART</button>
              <div className="con">
                <p>{data.name}</p>
                <p>{data.price}</p>
               <span><IoMdStarOutline /><IoMdStarOutline /><IoMdStarOutline /><IoMdStarOutline /><IoMdStarOutline /></span>
              </div>
          </div>
        )
      })
    }
    </div>
 </div>
    </>
  )
}

export default Dishes