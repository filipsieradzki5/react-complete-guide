import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

export default function AvailableMeals() {

    const [meals, setMeals]= useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [newError, setNewError] = useState()

    useEffect(() => {
      async function fetchMeals() {
       const response = await fetch('https://foor-order-app-cb6b9-default-rtdb.firebaseio.com/meals.json')
       
        if(!response.ok) {
          throw new Error('Something went wrong!') 
        }

       const responseData = await response.json()
       let loadedMeals = []

       for (const key in responseData) {
          loadedMeals.push({
            id:key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          })
       }
       setMeals(loadedMeals)
       setIsLoading(false)
      }

        fetchMeals().catch(error => {
        setIsLoading(false)
        setNewError(error.message)
      }
        )
    }, [])

    if( isLoading) {
      return (
        <section className={classes.MealsLoading}>
          <p> Loading ...</p>
        </section>
      )
    }

    if (newError) {
      return (
        <section className={classes.MealsLoading}>
          <p>{newError}</p>
        </section>
      )
    }

    const mealsList = meals.map( meal => {
            return <MealItem 
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            />
        }
    )

    return (
        <section className={classes.meals}>
          <Card>
            <ul>
                {mealsList}
            </ul>
          </Card>
        </section>
    )
}