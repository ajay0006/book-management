import {Button} from "react-bootstrap";
import axios from "axios";
import { v4 as uuidv4} from 'uuid'

const dataLocation = " http://localhost:3004/books"
const AddIdJson = () => {

     const test = async () => {
          const response = await axios.get(`${dataLocation}`);
          if (response.data)
          {
             // console.log(response.data)

              for (let i = 0; i < response.data.length; i++)
              {
                  let idValue = {'ID': uuidv4()}
                 response.data[i] = {...response.data[i], ...idValue }
              }


          }
         console.log(response.data)

         let finalResponse = await axios({
             method: "PUT",
             url: dataLocation,
             data : response.data
         });

         console.log(finalResponse)

      }

    return(
        <>
            <Button onClick={() => test()}> Execute </Button>
        </>
    )
}

export default AddIdJson;