fetch('http://127.0.0.1:3000/Restaurant')
            .then(response => response.json())
            .then(restaurants => {
                const restaurantsList = document.getElementById('restaurants-list');
                console.log(restaurants)
                restaurants.forEach(restaurant => {
                    const li = document.createElement('li');
                    li.textContent = restaurant[1]; 
                    li.addEventListener('click', () => {
                        fetch(`http://127.0.0.1:3000/Dish/${restaurant[0]}`)
                            .then(response => response.json())
                            .then(dishes => {
                                const dishesList = document.getElementById('dishes-list');
                                dishesList.innerHTML = '';
                                dishes.forEach(dish => {
                                    const dishLi = document.createElement('li');
                                    dishLi.textContent = `${dish[1]} - ${dish[2]} - $${dish[3]}`;
                                    dishesList.appendChild(dishLi);
                                });
                            })
                            .catch(error => console.error('Error fetching dishes:', error));
                    });
                    restaurantsList.appendChild(li);
                });
            })
            .catch(error => console.error('Error fetching restaurants:', error));