import Dropdown from 'react-bootstrap/Dropdown';
export default function DisplayNotify(props){


    return(<>

    <Dropdown.ItemText className='border  h5  mt-3 p-1'>{props.msg}</Dropdown.ItemText>
    
    </>)

}