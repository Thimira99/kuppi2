import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function UpdateForm() {

    const params = useParams();
    const history = useHistory();
    const id = params.id;

    const [Fname, setFname] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();

    useEffect(() => {
        axios.get(`http://localhost:4000/customer/getById/${id}`).then((res) => {
            setFname(res.data.Fname);
            setAge(res.data.age);
            setGender(res.data.gender);
        })
    }, [])

    function changeName(e) {
        setFname(e.target.value)
    }

    function changeAge(e) {
        setAge(e.target.value)
    }

    function changeGender(e) {
        setGender(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();

        const data = {
            Fname,
            age,
            gender
        }

        axios.put(`http://localhost:4000/customer/update/${id}`, data).then(res => {
            if (res.data) {
                alert('Updated Successfully')

            }
        })
        history.push('/main');
    }


    return (
        <div>
            <h1>Update Form</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <div >
                        <label>First Name</label>
                        <input type='text' placeholder='Fill Name' name='name' value={Fname} onChange={changeName} />
                        <label>Age</label>
                        <input type='number' placeholder='Fill number' name='age' value={age} onChange={changeAge} />
                        <label>Gender</label>
                        <select name='gender' value={gender} onChange={changeGender}>
                            <option >Male</option>
                            <option >Female</option>
                        </select><br />

                        <button type="submit" className="btn btn-primary">Update</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateForm;