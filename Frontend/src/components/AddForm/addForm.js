import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function addForm() {

    const history = useHistory();

    const [Fname, setFname] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();

    const [list, setList] = useState([]);



    function handleName(e) {
        setFname(e.target.value);
    }

    function handleAge(e) {
        setAge(e.target.value);
    }

    function handleGender(e) {
        setGender(e.target.value);
    }


    function submitForm(e) {

        e.preventDefault();

        const data = {
            Fname,
            age,
            gender
        };

        axios.post("http://localhost:4000/customer/", data).then((res) => {
            console.log(res.data);
            window.location.reload();
        })

    }

    useEffect(() => {
        axios.get('http://localhost:4000/customer/').then((res) => {
            setList(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className='mainPage'>
            <div className='form'>
                <h1>Main Form</h1>
                <form onSubmit={submitForm}>
                    <div className='mainForm'>
                        <label>First Name</label>
                        <input type='text' placeholder='Fill Name' name='name' onChange={handleName} />
                        <label>Age</label>
                        <input type='number' placeholder='Fill number' name='age' onChange={handleAge} />
                        <label>Gender</label>
                        <select name='gender' onChange={handleGender}>
                            <option >Male</option>
                            <option >Female</option>
                        </select><br />

                        <button type="submit" className="btn btn-primary">Submit</button>

                    </div>
                </form>
            </div>
            <div className='list'>
                <h1>Details</h1>
                <div>
                    <table class="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((value, index) => (
                                <tr >
                                    <th scope="row">{index++}</th>
                                    <td>{value.Fname}</td>
                                    <td>{value.age}</td>
                                    <td>{value.gender}</td>
                                    <td><Link to={`/update/${value._id}`}><button className='btn btn-primary m-1'>Update</button></Link><button className='btn btn-danger'>Delete</button></td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default addForm;