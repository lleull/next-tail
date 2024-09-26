"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import HomePage from "../component/Homepage";
import SignIn from "../component/AuthComp/SignIn";
import AuthComponent from "@/component/AuthComp";

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
  return (
    <div>
      <AuthComponent />
      <HomePage />
    </div>
  )
}


export default Home