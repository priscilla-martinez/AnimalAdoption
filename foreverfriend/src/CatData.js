const CatData = [
// 0. Ike
    {
        age: "Baby",
        attributes: {
            declawed: "no",
            house_trained: "no",
            shots_current: "no",
            spayed_neutured: "no",
            special_needs: "no"
        }, 
        breeds: {
            mixed: false,
            primary: "Abyssinian",
            urlID: "abys", 
            unkown: false
        }, 
        contact: {
            address: {
                address1: "7610 Davis Blvd",
                address2: null, 
                city: "Naples",
                country: "US",
                postcode: "34104",
                state: "FL"
            },
            email: null,
            phone: "239-252-7387"
        }, 
        environment: {
            cats: "no",
            children: "Unkown",
            dogs: "no"
        }, 
        gender: "Male", 
        id: 54629306,
        name: "Ike",
        size: "Small", 
        species: "Cat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis purus enim, et pulvinar diam efficitur nec."
    },

// 1. Cat
    {
        age: "Young",
        attributes: {
            declawed: "no",
            house_trained: "yes",
            shots_current: "yes",
            spayed_neutured: "no",
            special_needs: "no"
        }, 
        breeds: {
            mixed: false, 
            primary: "American Bobtail", 
            urlID: "abob", 
            unkown: false
        },  
        contact: {
            address: {
                address1: null,
                address2: null, 
                city: "Riverside",
                country: "US",
                postcode: "92504",
                state: "CA"
            },
            email: "shelterinfo@co.riverside.ca.us",
            phone: "951-358-7387"
        }, 
        environment: {
            cats: "yes",
            children: "yes",
            dogs: "yes"
        }, 
        gender: "Female", 
        id: 54629297,
        name: "Cat",
        size: "Medium", 
        species: "Cat",
        description: "Praesent justo nibh, pulvinar at diam eu, consectetur semper elit. Nam ornare quam eget dui pretium mattis ut non orci."
    },

// 2. Bellamy
    {
        age: "Adult",
        attributes: {
            declawed: "no",
            house_trained: "yes",
            shots_current: "yes",
            spayed_neutured: "yes",
            special_needs: "no"
        }, 
        breeds: {
            mixed: false, 
            primary: "American Wirehair", 
            urlID: "awir", 
            unkown: false
        }, 
        contact: {
            address: {
                address1: "1201 Macklind Ave.",
                address2: null, 
                city: "Saint Louis",
                country: "US",
                postcode: "63110",
                state: "MO"
            },
            email: "hcityadoptioncenter@hsmo.org",
            phone: "314-951-1562"
        }, 
        environment: {
            cats: "no",
            children: "no",
            dogs: "no",
        }, 
        gender: "Male", 
        id: 54629290,
        name: "Bellamy",
        size: "Small", 
        species: "Cat",
        description: "Nam congue condimentum eros, in vehicula orci lobortis quis. Donec lobortis, leo vitae mollis ultrices, nisi arcu placerat ipsum, id rutrum nibh velit mattis magna."
    },

// 3. Moe    
    {
        age: "Young",
        attributes: {
            declawed: "no",
            house_trained: "yes",
            shots_current: "yes",
            spayed_neutured: "yes",
            special_needs: "no" 
        }, 
        breeds: {
            mixed: false, 
            primary: "Balinese", 
            urlID: "bali", 
            unkown: false
        },
        contact: {
            address: {
                address1: "1201 Macklind Ave.",
                address2: null, 
                city: "Saint Louis",
                country: "US",
                postcode: "63110",
                state: "MO"
            },
            email: "hcityadoptioncenter@hsmo.org",
            phone:"314-951-1562"
        }, 
        environment: {
            cats: "no",
            children: "no",
            dogs: "yes",
        }, 
        gender: "Male", 
        id: 54629292,
        name: "Moe",
        size: "Small", 
        species: "Cat",
        description: "Maecenas eget sagittis urna, a placerat orci. In vitae finibus justo, vel pharetra erat."
    },

// 4. Mara
    {
        age: "Young",
        attributes: {
            declawed: "yes",
            house_trained: "yes",
            shots_current: "yes",
            spayed_neutured: "yes",
            special_needs: "no"
        }, 
        breeds: {
            mixed: false, 
            primary: "Bengal", 
            urlID: "beng", 
            unkown: false 
        },  
        contact: {
            address: {
                address1: "1201 Macklind Ave.",
                address2: null, 
                city: "Saint Louis",
                country: "US",
                postcode: "63110",
                state: "MO"
            },
            email: "hcityadoptioncenter@hsmo.org",
            phone: "(314) 951-1562"
        }, 
        environment: {
            cats: "no",
            children: "no",
            dogs: "no",
        }, 
        gender: "Female", 
        id: 54629293,
        name: "Mara",
        size: "Small", 
        species: "Cat",
        description: "Cras laoreet dolor turpis, suscipit scelerisque lacus consequat dignissim. Nam ut velit ut leo elementum consequat vel sit amet sem."
    },

// 5. Eve
    {
        age: "Young",
        attributes: {
            declawed: "yes",
            house_trained: "yes",
            shots_current: "yes",
            spayed_neutured: "yes",
            special_needs: "no"
        }, 
        breeds: {
            mixed: false, 
            primary: "Bombay", 
            urlID: "bomb", 
            unkown: false
        }, 
        contact: {
            address: {
                address1: "1201 Macklind Ave.",
                address2: null, 
                city: "Saint Louis",
                country: "US",
                postcode: "63110",
                state: "MO"
            },
            email: "hcityadoptioncenter@hsmo.org",
            phone: "(314) 951-1562"
        }, 
        environment: {
            cats: "yes",
            children: "yes",
            dogs: "yes",
        }, 
        gender: "Female", 
        id: 54629295,
        name: "Eve",
        size: "Small", 
        species: "Cat",
        description: "Nunc non euismod ex. Praesent at sem faucibus, ultrices leo a, hendrerit eros."
    },

// 6. "Baby"
    {
        age: "Adult",
        attributes: {
            declawed: "yes",
            house_trained: "yes",
            shots_current: "yes",
            spayed_neutured: "yes",
            special_needs: "no"
        }, 
        breeds: {
            mixed: false, 
            primary: "British Shorthair", 
            urlID: "bsho", 
            unkown: false
        }, 
        contact: {
            address: {
                address1: "2517 Littlestown Pike",
                address2: null, 
                city: "Westminster",
                country: "US",
                postcode: "21158",
                state: "MD"
            },
            email: "jrein@carrollcountymd.gov",
            phone: "(410) 848-4810"
        }, 
        environment: {
            cats: "no",
            children: "no",
            dogs: "yes",
        }, 
        gender: "Female", 
        id: 54629283,
        name: "Baby",
        size: "Small", 
        species: "Cat",
        description: "Sed id sem fringilla, mattis tortor vitae, accumsan nibh. Phasellus at justo elementum tellus malesuada dignissim."
    },

//7. Sparky
    {
        age: "Senior",
        attributes: {
            declawed: "no",
            house_trained: "yes",
            shots_current: "yes",
            spayed_neutured: "yes",
            special_needs: "no" 
        }, 
        breeds: {
            mixed: false, 
            primary: "Burmilla", 
            urlID: "buri", 
            unkown: false
        },
        contact: {
            address: {
                address1: "300 E. Galleria Drive",
                address2: null, 
                city: "Henderson",
                country: "US",
                postcode: "89015",
                state: "NV"
            },
            email: null,
            phone: "(702) 267-4970"
        }, 
        environment: {
            cats: "yes",
            children: "no",
            dogs: "no",
        }, 
        gender: "Male", 
        id: 54629280,
        name: "Sparky",
        size: "Medium", 
        species: "Cat",
        description: "Sed sem odio, scelerisque volutpat purus eget, tristique facilisis ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },

//8. Flynn
    {
        age: "Baby",
        attributes: {
            declawed: "no",
            house_trained: "yes",
            shots_current: "yes",
            spayed_neutured: "yes",
            special_needs: "no"
        }, 
        breeds: {
            mixed: false, 
            primary: "Chantilly-Tiffany", 
            urlID: "ctif", 
            unkown: false
        }, 
        contact: {
            address: {
                address1: "P.O. Box 768",
                address2: "505 E. Sunvale", 
                city: "Olathe",
                country: "US",
                postcode: "66051",
                state: "KS"
            },
            email: "vhudson@olatheks.org",
            phone: "913-971-6362"
        }, 
        environment: {
            cats: "yes",
            children: "no",
            dogs: "yes",
        }, 
        gender: "Male", 
        id: 54629281,
        name: "Flynn",
        size: "Small", 
        species: "Cat",
        description: "Morbi nec interdum ligula. Pellentesque quis lobortis mauris. Vestibulum et pharetra ante, imperdiet accumsan lectus."
    },

//9. Skittles
    {
        age: "Young",
        attributes: {
            declawed: "yes",
            house_trained: "yes",
            shots_current: "yes",
            spayed_neutured: "yes",
            special_needs: "no"
        }, 
        breeds: {
            mixed: true, 
            primary: "Chausie", 
            urlID: "chau", 
            unkown: false
        }, 
        contact: {
            address: {
                address1: "3100 North Military Trail",
                address2: null, 
                city: "West Palm Beach",
                country: "US",
                postcode: "33409",
                state: "FL"
            },
            email: "adoptions@peggyadams.org",
            phone: "561-686-3663"
        }, 
        environment: {
            cats: "yes",
            children: "yes",
            dogs: "no",
        }, 
        gender: "Female", 
        id: 54629274 ,
        name: "Skittles",
        size: "Medium", 
        species: "Cat",
        description: "Ut et libero suscipit, scelerisque lacus quis, congue quam. Maecenas at diam hendrerit, commodo massa eget, pharetra ante."
    }
    ]
    
    export default CatData