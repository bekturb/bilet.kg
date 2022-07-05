import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquare} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import SmallWindow from "../SmallWindow/SmallWindow";

const PlaceRow3 = ({el, id}) => {


    const [window, setWindow] = useState(false)
    const handleChange = () => {
        setWindow(!window)
    }
    return (
        <div className='order__cart--places--place icons3'  >
            <h5  className='order__cart--places__place--numbers'>{el}
            </h5>
            <span>
                  <FontAwesomeIcon onClick={handleChange} className='order__cart--places__place--icon ' icon={faSquare}/>
                    </span>
            <SmallWindow id={id} window={window} setWindow={setWindow}/>
        </div>
    );
};

export default PlaceRow3;