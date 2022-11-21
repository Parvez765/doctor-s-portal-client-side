import React from 'react';
import toast from 'react-hot-toast';

const AppoinmentModal = ({ treatments,selectedDate }) => {
    const { name, slots } = treatments
    console.log(selectedDate)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const slot = form.slot.value
        
        const user = {
            treatmentName: treatments.name,
            appoinmentDate: selectedDate,
            patientName: name,
            email, slot
        }
        console.log(user)
        fetch(`http://localhost:5000/bookings`, {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                   alert("Booking Placed SuccessFully")
                } else {
                    alert("Booking Already Placed Once")
               }
                
                
            })
        
        // fetch(`http://localhost:5000/bookings?email=${email}`, {
        //     method: "PUT",
        //     headers: {
        //         "content-type" : "application/json"
        //     },
        //     body: JSON.stringify()
        // })
    }
    return (
        <div>
            {/* The button to open modal */}
           

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Enter Name" className="input input-bordered input-primary w-full mt-10 mb-1" />
                    <input type="text"  disabled value={selectedDate.toDateString()}  placeholder="Enter Date" className="input input-bordered input-primary w-full mt-10 mb-1" />
                    <select name="slot" className="select select-secondary w-full mt-10 mb-1">
                        {
                                slots?.map(slot => <>
                                    <option value={slot}>{slot}</option>
                                </>)
                        }
                    </select>
                    <input type="email" name="email" placeholder="Enter Email" className="input input-bordered input-primary w-full mt-10 mb-5" /><br/>
                 
                   <button type="submit" value="Submit" className='btn btn-primary'>Submit</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default AppoinmentModal;