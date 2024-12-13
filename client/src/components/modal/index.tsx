"use client";

import * as React from "react"
import {useForm, SubmitHandler} from "react-hook-form";
import { Barlow } from "next/font/google";
import Image from "next/image"
import { rocketLogoCITi } from "../../assets/index";


const barlow400 = Barlow({
    subsets: ["latin"],
    weight: "400",
  });


  const barlow700 = Barlow({
    subsets: ["latin"],
    weight: "700",
  });


  type FormData = {
    username : string
    email : string
  }

  export default function Modal(){
    const {register,handleSubmit, formState:{errors}} = useForm<FormData>()

    const printData: SubmitHandler<FormData> = (data) => {
        console.log(data)
    }

    return (
          <div id = "component-container" className = "w-[448px] h-[501px] bg-[#F5F5F5] flex justify-center  rounded-2xl">

            <div id = "main-container" className = "w-[320px] h-[373px]">

              <div id = "forms-container" className = "mt-[64px]">
                <Image src = {rocketLogoCITi} alt = "logocitirocket" className = "w-[316px] h-[125px]"></Image>

                <form onSubmit={handleSubmit(printData)}>
                  <div id = "username-input">
                    <input {...register('username', {required: true})} placeholder = "username" className = {`${barlow400.className} h-[52px] mt-[32px] block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 `}></input>
                    {errors.username && <span className = {`${barlow700.className} text-[#ff0f0f]`}>Este campo é obrigatório</span>}
                  </div>

                  <div id ="email-input">
                    <input {...register('email', {required: true})} placeholder = "e-mail" className = {`${barlow400.className} mt-[32px] h-[52px] block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 `}></input>
                    {errors.email && <span className = {`${barlow700.className} text-[#ff0f0f]`}>Este campo é obrigatório</span>}
                  </div>


                  <button type="submit" className = "bg-[#51E678] text-white rounded-xl w-full h-[48px] text-[20px] mt-[32px] drop-shadow-2xl">Entrar</button>
                </form>

                
              </div>
            </div>

            

          </div>
    )
  }