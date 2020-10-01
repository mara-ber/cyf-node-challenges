import React from "react";

export default function CityList() {
    return (
        <div>
            <p> We have information about following cities: </p>
            <select>
                <option>Select city</option>
                <option>Harrow</option>
                <option>Heathrow</option>
                <option>Stratford</option>
            </select>
            <select>
                <option>Select category</option>
                <option>pharmacies</option>
                <option>colleges</option>
                <option>doctors</option>
                <option>hospitals</option>
            </select>
        </div>
    )
}