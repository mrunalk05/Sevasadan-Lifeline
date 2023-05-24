import express from "express";
// import bed from "./models/add_bed";
import patternn from "./models/add_med";
import bedmodel from "./models/add_bed";

export const addbed=async(req, res)=>{
   try{
    const newbed= new bedmodel({
        roomno: req.body.roomno,
        bedno: req.body.patient,
        patient: req.body.bedno
    })
    const result= await newbed.save();
    res.json(newbed)
   }catch(error){
    res.json({message:error.message});
   }
}

export const addUsers=async(req, res)=>{
    const boody= req.body;
    try{
        const newuser= new patternn(boody);
        await newuser.save();
        res.json(newuser)
    }
    catch(error){
        console.log('Error occured', error);
    }
}

export const getUsers=async(req, res)=>{
    try{
        const all = await patternn.find({});
        res.status(200).json(all);
        // console.log(all); 
    }
    catch(error){
        console.log('Error Occured', error);
    }
}

export const getinven=async(req, res)=>{
    try{
        const all = await bedmodel.find({});
        res.status(200).json(all);
        // console.log(all); 
    }
    catch(error){
        console.log('Error Occured', error);
    }
}

export const getUser=async(req, res)=>{
    try{
        const user = await patternn.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

export const editUser = async (request, response) => {
    let user = request.body;

    const editUser = new patternn(user);
    try{
        await patternn.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
export const deleteUser = async (request, response) => {
    try{
        await patternn.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const getUserById = async (request, response) => {
    try{
        const user = await patternn.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// export const emailc=()=>{
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'gdsc@walchandsangli.ac.in',
//           pass: 'wcegdsc1947'
//         }
//     });
 
//     var mailOptions = {
//         from: 'gdsc@walchandsangli.ac.in',
//         to: req.body.to, // list of receivers
//         subject: req.body.subject, // Subject line
//         text:req.body.description,
//         html: `
//         <div style="padding:10px;border-style: ridge">
//         <p>You have a new contact request.</p>
//         <h3>Contact Details</h3>
//         <ul>
//             <li>Email: ${req.body.to}</li>
//             <li>Subject: ${req.body.subject}</li>
//             <li>Message: ${req.body.description}</li>
//         </ul>
//         `
//     };
     
//     transporter.sendMail(mailOptions, function(error, info){
//         if (error)
//         {
//           res.json({status: true, respMesg: 'Email Sent Successfully'})
//         } 
//         else
//         {
//           res.json({status: true, respMesg: 'Email Sent Successfully'})
//         }
     
//       });
// }



export default {getUser, getUsers, addUsers, addbed, editUser, deleteUser, getUserById};



