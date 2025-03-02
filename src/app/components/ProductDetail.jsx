




"use client"

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import CalenderComponent from '@/app/components/CalenderComponent'
import { bookingAction } from '../serverActions/bookingAction'
// import { Circles } from 'react-loader-spinner'
// import { ClipLoader } from "react-spinners";



const DynamicProduct = () => {
    const [record, setRecord] = useState("")

    const [selecetedDates, setSelectedDates] = useState(null)

    const params = useParams();

    const {id} = params

    console.log("dynamic ClientId:", id)

    const dynamicProductHandler = async()=>{
        
        const response = await fetch(`https://next-resort-project.vercel.app/api/admin/product/${id}`)
        const newData = await response.json()

        console.log("dynaic data:", newData)
        setRecord(newData.data)

    }
    useEffect(()=>{
        dynamicProductHandler()
    }, [])

    const bookingHandler = async()=>{
        if(!selecetedDates){
          alert("Please select booking dates")
          return
        }

          const bookingDetails = {record, selecetedDates}
      try {
        const response = await bookingAction(bookingDetails)
        if(response.success){
          alert("Booking Successfull")
        }
      } catch (error) {
        
      }

    }

    const handleDateSelect = (dates)=>{
        setSelectedDates(dates)
        console.log("dates coming from calenderComp:", dates)
    }

  return (
    <div>
    <CalenderComponent onDatesSelect={handleDateSelect} />
    
    <Link href="/">
      <p align="center">Go Back</p>
    </Link>

    {record && (
      <div className="singleSection">
        <div className="singleLeft">
          <h2>{record.title}</h2>
          <img src={record.image} alt={record.title} className="singleImage" />
        </div>

        <div className="singleCenter">
          <div className="singlePrice">Rs. {record.price}</div>
          <p className="singleDesc">{record.desc}</p>

          <div className="singleAmenities">
            {record.amen.map((item, i) => (
              <div className="singleAmen" key={i}>
                <span>*</span> {item}
              </div>
            ))}
          </div>

          <div className="offer">
            <span>*</span>
            <button>Discount {record.offer}</button>
          </div>

          <div className="singleBtn">
            <button onClick={bookingHandler}>Book Now</button>
          </div>
        </div>
      </div>
    )}
  </div>
  
  );
}

export default DynamicProduct
