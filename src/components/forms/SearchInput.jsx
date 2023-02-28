import {FloatingLabel, Form} from 'react-bootstrap';

export default function SearchInput({getSearch}){
    return(
        <FloatingLabel controlID='floatingInput' label='Title Search' className='mb-3'>
            <Form.Control type='text' placeholder='X-Men' onChange={(e)=> getSearch(e.target.value)} />
        </FloatingLabel>
    )
}