import { useParams } from 'react-router'
import DogData from '../DogData'

function Dog(){

    let dogName = useParams().dogName

    console.log("useParam Dog Name: ",dogName)

    const paramDogData = DogData.filter(DogData => DogData.name === dogName).map(data => {
        return(
            <>
                <h1>{data.name}</h1>
                <h2>{data.breeds.primary}</h2>
            </>
        );
    })

    return(
        <>
            <h1>Individual Dog Page</h1>
            {paramDogData}
        </>
    )
}

export default Dog