import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './hijama.css';
import axios from "axios";

function Reservation() {
    const [nameOf, setName] = useState('');
    const [numberOf, setNumber] = useState('');
    const [messageOf, setMessage] = useState('');
    const regestre = () => {
        axios.post('http://localhost:3003/regestre', {
          name: nameOf,
          number: numberOf,
          message: messageOf,
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.error(error);
        });
      };
    return (
        <>

        <div className="container mt-5">
            <div className="hijama">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2 className="text-center mb-4">احجز موعد</h2>
                        <form >
                            <p className="text-center">املأ النموذج التالي لحجز موعد:</p>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">الإسم</label>
                                <input
                                    type="text"
                                    onChange={(e)=>{setName(e.target.value)}}
                                    className="form-control"
                                    id="name"
                                    placeholder="أدخل اسمك هنا"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="numbre" className="form-label">رقم الهاتف</label>
                                <input
                                    type="text"
                                    onChange={(e)=>{setNumber(e.target.value)}}
                                    className="form-control"
                                    id="numbre"
                                    placeholder="أدخل رقم الهاتف هنا"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">رسالة</label>
                                <textarea
                                    name="message"
                                    onChange={(e)=>{setMessage(e.target.value)}}
                                    className="form-control"
                                    id="message"
                                    rows="4"
                                ></textarea>
                            </div>
                            <button type="submit" onClick={regestre} className="btn btn-primary">حجز الآن</button>
                            <Link to={'/'} className='btn btn-primary ml-2' style={{ marginRight: '15px' }}>الرجوع</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       
        </>
    );
}

export default Reservation;
