import { Request,Response } from "express";
import mssql from 'mssql';
import {sqlConfig} from "../config";


export const addProduct=(re:Request,res:Response) =>{
    //logic to add a product to database
    try{
        //connect to database
        const pool  = await mssql.connect(sqlConfig)

    }catch(error){

    }

}