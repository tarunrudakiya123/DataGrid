 import React, { useEffect, useState } from 'react'
import ApiHelper from './ApiHelper'
import { DataGrid } from '@mui/x-data-grid'

 
 const TableData = () => {
const [row, setRow]= useState([])


const apiHelper = new ApiHelper()

    const GetData = async ()=>{
        try {
        const result = await apiHelper.fetchPost()
        setRow(result.data)
        // console.log(result.data)

            
        } catch (error) {
            
        }
    }

    const columns =[
    
      {
        field:"id", headerName:"ID",width:150
      },
      {
        field:"title", headerName:"Title",flex:1

      }, {
        field:"body", headerName:"Body",width:150

      }
    ]

     
  


    useEffect(()=>{
        GetData()
    },)





   return (
   <>
   <div className='container py-0' >

    <h1>Fake API Testing </h1>

    <DataGrid getRowId={(e) => e.id} rows={row} columns={columns} autoHeight
      initialState={
        {
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }
      }
     />

   </div>
   </>

     
   )
 }
 
 export default TableData;