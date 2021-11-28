//App.js
import React from 'react';

function CategoryOptions(props) {
    const {setCurrentCategory} = props;

    return (
        <div className="categoryOptions">
            <form className="categoryForm">
                <input type="radio" id="Motherboards" value="Motherboards" onClick={() => {setCurrentCategory("Motherboards")}} />
                <label className="radioLabel" htmlFor="Motherboards">Motherboards</label>
                
                <input type="radio" id="CPUs" value="CPUs" onClick={() => {setCurrentCategory("CPUs")}}  />
                <label className="radioLabel" htmlFor="CPUs">CPUS</label>
                
                <input type="radio" id="RAM" value="RAM" onClick={() => {setCurrentCategory("RAM")}}  />
                <label className="radioLabel" htmlFor="RAM">RAM</label>
                
                <input type="radio" id="HardDrives" value="Hard Drives" onClick={() => {setCurrentCategory("HardDrives")}} />
                <label className="radioLabel" htmlFor="HardDrives">Hard Drives</label>
                
                <input type="radio" id="Cooling" value="Cooling systems" onClick={() => {setCurrentCategory("Cooling")}} />
                <label className="radioLabel" htmlFor="Cooling">Cooling systems</label>
                
                <input type="radio" id="VideoCards" value="Video Cards" onClick={() => {setCurrentCategory("VideoCards")}} />
                <label className="radioLabel" htmlFor="VideoCards">Video Cards</label>
                
                <input type="radio" id="PowerSupplies" value="Power Supplies" onClick={() => {setCurrentCategory("PowerSupplies")}} />
                <label className="radioLabel" htmlFor="PowerSupplies">Power Supplies</label>
                
                <input type="radio" id="Fans" value="Fans" onClick={() => {setCurrentCategory("Fans")}} />
                <label className="radioLabel" htmlFor="Fans">Fans</label>
                
                <input type="radio" id="Cases" value="Cases" onClick={() => {setCurrentCategory("Cases")}} />
                <label className="radioLabel" htmlFor="Cases">Cases</label>
                
                <input type="radio" id="Cables" value="Cables" onClick={() => {setCurrentCategory("Cables")}} />
                <label className="radioLabel" htmlFor="Cables">Cables</label>
                
                <input type="radio" id="WIFI" value="WIFI" onClick={() => {setCurrentCategory("WIFI")}} />
                <label className="radioLabel" htmlFor="WIFI">WIFI</label>
            </form>
        </div>
    );
};

export default CategoryOptions;