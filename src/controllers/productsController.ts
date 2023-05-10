import { Request,Response } from "express";
import mssql from 'mssql';
import {sqlConfig} from "../config";
import {v4 as pid} from 'uuid'

//getting all properties request has
//body is strong typed
interface ExtendedRequest extends Request{
    body:{
        name:String
        price:number
    }
}

export const addProduct=async (req:ExtendedRequest,res:Response) =>{
    //logic to add a product to database
    try{

        let id = pid()

        const {name,price} = req.body

        //connect to database
        const pool  = await mssql.connect(sqlConfig)
        //make a request
        await pool.request()
        .input('id',mssql.VarChar,id)
        .input('name',mssql.VarChar,name)
        .input('price',mssql.VarChar,price)
        .execute('createproducts-procedures')

    }catch(error){

    }
}