import React from 'react';
import Axios from 'axios';



const AddPatients = () => { debugger;

    const [first_Name, setFirst_Name] = useState ("");
    const [last_Name, setLast_Name] = useState ("");
    const [birthday, setBirthday] = useState ("");
    const [gender, setGender] = useState ("");
    const [email, setemail] = useState ("");
    const [adress, setadress] = useState ("");
    const [notes, setnotes] = useState ("");

    Axios.post('http://localhost:3001/patient', json) 
    const json = {
        firstName: first_Name,
        lastName: last_Name,
        birthday: birthday,
        gender: gender,
        phone: phone,
        email: email,
        adress: adress,
        notes: notes
    }
    .then(response=> {
        console.log(response)
        const patient = response.data.data;
        const temp = [patient]; 
        setResult(temp);
      })
      .catch((error) => {
        console.log(error);
      }); 


    return (
        
        <div>
         
                    
        </div>
               
    );

}

export default AddPatients;

