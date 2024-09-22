"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

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


  return (
    <div className="w-full overflow-x-hidden  h-100% flex items-center flex-col  flex-wrap">
      <div className="w-screen  mt-20  pl-24 flex flex-row items-center justify-between pr-24">

        <h1 className="text-5xl">Shop With AI</h1>
        <div className="relative flex">

          <Image width={80} height={80} src="/basket.png" alt="s" />
          <p className="bg-red-600  rounded-3xl pl-2 pr-2 text-sm mb-4 absolute top-1 right-0 ">{Cart.length}</p>
        </div>
      </div>
      <div className="w-full h-100% flex flex-1 items-center flex-row  flex-wrap">

        {Products.length > 0 && Products?.map((items, i) => {
          return (

            <div className="w-80  pt-10 pb-40 relative  flex items-center flex-col justify-between bg-orange-100  rounded-3xl ml-7 mt-11">
              <Image onClick={() => setCarts((prev: any) => [...prev, items])} src="/addcart.png" width={50} height={50} alt="a" className="absolute top-0 bg-black rounded-full cursor-pointer right-0 hover:bg-white" />

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
    </div >
  );
}


export default Home