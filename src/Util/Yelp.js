const apiKey = 'DksTdJ4CHbo5TFv3C3U3aoJ7TyGc04GMSXkHi5_KObwZvnq1hSGATzGc5rP7-3u31xAM5KefCWMeNf2UFZLb8s2atcKuKGoGCG5iFRsL3c2x6UcXJxzUQq4tbq3xWXYx';

const Yelp = {
    search(term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {Authorization: `Bearer ${apiKey}` }
            }).then(response => {
                if(response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (jsonResponse.businesses){
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zipcode,
                            category: business.categories.title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    });

                }
        })
    },

     details(businessId) {
         return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${businessId}`, {headers: {Authorization: `Bearer ${apiKey}` }
         }).then(response => {
             if(response.ok) {
                 return response.json();
             }
         }).then(jsonResponse => {
                     return {
                         id: jsonResponse.id,
                         imageSrc: jsonResponse.image_url,
                         name: jsonResponse.name,
                         address: jsonResponse.location.address1,
                     }
                 });

     }
};

export default Yelp;