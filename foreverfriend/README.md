# Project Overview

## Project Links

- [GitHub](https://github.com/priscilla-martinez/AnimalAdoption/tree/main/foreverfriend)
- [Deployement Link](https://priscilla-martinez.github.io/AnimalAdoption/)

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## API

**Dog API**
The internet's biggest collection of open source dog pictures. For Dog Adoption page, the API returns: 

```
{
    "message": [
        "https://images.dog.ceo/breeds/terrier-irish/n02093991_3838.jpg",
        "https://images.dog.ceo/breeds/pekinese/n02086079_4412.jpg",
        "https://images.dog.ceo/breeds/malinois/n02105162_5706.jpg"
    ],
    "status": "success"
}
```
For the individual dog profile, it returns: 
```
{
    "message": "https://images.dog.ceo/breeds/hound-ibizan/n02091244_2118.jpg",
    "status": "success"
}
```

**Cat API**
A public service API all about Cats, free to use when making your fancy new App, Website or Service. For teh individual cat profile,API returns: 
```
[
    {
        breeds: [
        {
            weight: {
                imperial: "7  -  10",
                metric: "3 - 5"
            },
            id: "abys",
            name: "Abyssinian",
            cfa_url: "http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx",
            vetstreet_url: "http://www.vetstreet.com/cats/abyssinian",
            vcahospitals_url: "https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian",
            temperament: "Active, Energetic, Independent, Intelligent, Gentle",
            origin: "Egypt",
            country_codes: "EG",
            country_code: "EG",
            description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
            life_span: "14 - 15",
            indoor: 0,
            lap: 1,
            alt_names: "",
            adaptability: 5,
            affection_level: 5,
            child_friendly: 3,
            dog_friendly: 4,
            energy_level: 5,
            grooming: 1,
            health_issues: 2,
            intelligence: 5,
            shedding_level: 2,
            social_needs: 5,
            stranger_friendly: 5,
            vocalisation: 1,
            experimental: 0,
            hairless: 0,
            natural: 1,
            rare: 0,
            rex: 0,
            suppressed_tail: 0,
            short_legs: 0,
            wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
            hypoallergenic: 0,
            reference_image_id: "0XYvRd7oD"
            }
        ],
        id: "EHG3sOpAM",
        url: "https://cdn2.thecatapi.com/images/EHG3sOpAM.jpg",
        width: 1600,
        height: 1067
    }
]
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```