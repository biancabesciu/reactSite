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

     details(locale) {
         return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?locale=${locale}`, {headers: {Authorization: `Bearer ${apiKey}` }
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
                             phone: business.display_phone,
                             hours: business.hours,
                             price: business.price,
                             photos: business.photos,
                             category: business.categories.title,
                             rating: business.rating,
                             reviewCount: business.review_count
                         }
                     });

                 }
         })
     }
};

export default Yelp;