import { useParams } from 'react-router'
import CatData from '../CatData'

function Cat(){
    let catName = useParams().catName

    console.log("useParam Cat Name: ",catName)

    const paramCatData = CatData.filter(CatData => CatData.name === catName).map(data => {
        return(
            <>
                <h1>{data.name}</h1>
                <h2>{data.breeds.primary}</h2>
                <h3>{data.description}</h3>
            </>
        );
    })

    return(
        <>
            <h1>Individual Cat Page</h1>
            {paramCatData}
        </>
    )
}

export default Cat