"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";

interface Products {
  category: string | null
  image: string
  rating: {} | string
  price: any
  title: string
  id: string | number
  description: string

}
interface Carts {
  items: Products[]
}
const Home = () => {

  const [Products, setProducts] = useState<Products[]>([])
  const [Cart, setCarts] = useState<any>([])
  const [openCart, setopenCart] = useState(false)
  const [animationBounce, setAnimationBounce] = useState(false)
  useEffect(() => {
    const res = async () => await axios.get('https://fakestoreapi.com/products').then((datas) => {
      console.log("dataas0", datas.data)
      setProducts(datas.data)

    }).catch((err) => {
      console.log("err", err)
    })
    try {
      res()
    } catch (error) {
      console.error("errr", error);
    }

  }, [])


  const totalprice = Cart.reduce((sum, total) => sum + total.price, 0)
  const AddtoCart = (items) => {


    setCarts((prev: any) => [...prev, items])
    setAnimationBounce(true)

    setTimeout(() => {
      setAnimationBounce(false);
    }, 1000);
  }


  return (
    <div className="w-full overflow-x-hidden  h-100% flex items-center flex-col  flex-wrap">
      <div className="w-screen  mt-10  pl-24 flex flex-row items-center justify-between pr-24">

        <h1 className="text-5xl text-white">Shop With AI</h1>
        <div onClick={() => setopenCart(!openCart)} className={`relative flex  ${animationBounce ? "animate-spin-slow" : ""}`}>

          <Image width={80} height={80} src="/basket.png" alt="s" />
          <p className="bg-red-600  rounded-3xl pl-2 pr-2 text-sm mb-4 absolute top-1 right-0 ">{Cart.length}</p>
        </div>
      </div>
      <div className="w-full flex flex-1 items-center flex-row  flex-wrap">

        {Products.length > 0 && Products?.map((items, i) => {
          return (

            <div className="w-80  pt-10 pb-40 relative  flex items-center flex-col justify-between bg-orange-100  rounded-3xl ml-7 mt-11">
              <Image onClick={() => AddtoCart(items)} src="/addcart.png" width={50} height={50} alt="a" className="absolute top-0 bg-black rounded-full cursor-pointer right-0 hover:bg-white" />

              <img
                src={items?.image}

                alt="Picture of the author"
                className="h-40 object-cover w-4/5 rounded-lg"

              />

              <div className="w-full pl-3 h-20 ">

                <h3 className="text-sm text-black">
                  title:  {items?.title}
                </h3>

                <h3 className="text-xl text-black">
                  Price: {items?.price}
                </h3>
                <h3 className="text-7 text-black">
                  Description: {items?.description}
                </h3>
              </div>

            </div>
          )
        })}

      </div>
      {openCart &&
        <div className="w-1/3  absolute right-10 top-40 pb-5 pt-10 pl-5 pr-5 rounded-xl bg-white flex-col">
          <p className="text-black w-full text-center">Cart items</p>

          {Cart.length > 0 ? Cart.map((items) => {
            return (

              <div className="flex flex-row w-full pl-5  pr-5 items-center justify-between mb-1">
                <div className="flex flex-row items-center gap-5 mb-1">
                  <img width={50} height={50} src={items?.image} alt="s" />
                  <h2 className="text-black from-cyan-700 to-black">{items?.title}</h2>    </div>
                <h2 className="text-black from-cyan-700 to-black">{items?.price}$</h2>
              </div>
            )
          }) : <h2 className="text-black from-cyan-700 to-black">Empty cart$</h2>}


          <div className="flex flex-row w-full items-center justify-between">

            <h3 className="text-2xl text-black">
              Total Price
            </h3>


            <h2 className="text-black from-cyan-700 to-black text-2xl">{totalprice}$</h2>
          </div>
          <button className="bg-orange-700 mt-5 flex items-center justify-center w-full rounded-sm pt-2 pb-2 hover:bg-cyan-800 ">
            Checkout
          </button>


        </div>
      }
    </div >
  );
}


export default Home