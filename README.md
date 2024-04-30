# Le Restaurante 🍕🍝
![Cover image](https://i.ibb.co/wzK2zGq/Le-Restaurante.jpg)

### Notice
This was originally a group assignment at Medieinstitutet. I have since then refactored the whole code base and added some new but basic functionality. If you want to see the original project you can [click here](https://github.com/Medieinstitutet/the-restaurant-grupp-8)
### Project description
This is a basic online booking system for a made up restaurant. It features a basic SPA with the ability to make a reservation for a table. There are some basic validations both on the frontend and backend.

The project also features a admin dashboard where you can update different reservations and get a basic table view of the restaurants and the reservations. To access the admin dashboard you type navigate to "/admin".

### Frontend built with
- React
- Typescript
- React Calendar
- Luxon
- Vite

### Backend built with
- NodeJS
- ExpressJS
- MongooseJS
- MongoDB

### Installation and setup of project

1. Clone the repo
   ```sh
   https://github.com/Medieinstitutet/the-restaurant-grupp-8.git
   ```
2. Install dependencies
   ```sh
   npm i
   ```
3. Create .env file in the root directory and add the credentials. Add your own API-key in the field.

   ```sh
   MONGO_CONNECTION_STRING=
   ```

4. If you want to populate the database with mockdata (make sure you are in the fed22s-backend directory)

   ```sh
   npm run seedDb
   ```

5. Run the server (fed22s-backend directory)
   ```sh
   npm run dev
   ```

5. Run the frontend (fed22s-therestaurant directory)

   ```sh
   npm run dev
   ```
