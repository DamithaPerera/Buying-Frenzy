##Nodejs 14. x 


## Installation

```bash
$ npm install
```

## Running the app locally

```bash
# configure the DB
  src/config/ormconfig.ts
# development
$ npm run start
```

##API Documentation
##### App is deployed in heroku
```bash
https://buyingfrenzy-app.herokuapp.com/api
```

### 1. Health check.
  ```http
GET https://buyingfrenzy-app.herokuapp.com/api/healthCheck
```
#### Responses
```javascript
{
  true
}
```

### 2.List all the restaurants which are open in the given time
```http
GET https://buyingfrenzy-app.herokuapp.com/api/restaurant/all?opens_at=2022-07-23%2020%3A00%3A00
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `opens_at` | `Date` | **Required**. Datetime |

## Responses
Restaurant list will be return or empty array.
```javascript
[{
    "id": "022de251-cc6c-464a-9ffd-b5bc2cbce5bc",
    "name": "024 Grille",
    "cash_balance": "4882.81"
  }...
]
```


### 3.List top y restaurants that have more or less than x number of dishes within a price range, ranked alphabetically. More or less (than x) is a parameter that the API allows the consumer to enter.
```http
GET https://buyingfrenzy-app.herokuapp.com/api/restaurant/filter-by-price?from_price=15&to_price=25&dishes=3&operation=min
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `from_price` | `number` | **Required**. |
| `to_price` | `number` | **Required**. |
| `dishes` | `number` | **Required**. |
| `operation` | `string` | **Required**. Either "min" or "max" |
## Responses
Restaurant list will be return or empty array.
```javascript
[{
    "id": "022de251-cc6c-464a-9ffd-b5bc2cbce5bc",
    "name": "024 Grille",
    "cash_balance": "4882.81"
  }...
]
```


### 4.Search restaurant or dishes by name, rank

```http
GET https://buyingfrenzy-app.herokuapp.com/api/restaurant/search-by-keyword?keyword=La&type=restaurant
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `keyword` | `string` | **Required**. |
| `type` | `string` | **Required**. Either "restaurant" or "dish" |
## Responses

Base on search type Restaurant or Dish list will be return.
If Search type is restaurant then will return list of restaurants or empty array.
```javascript
[{
    "id": "022de251-cc6c-464a-9ffd-b5bc2cbce5bc",
    "name": "024 Grille",
    "cash_balance": "4882.81"
  },
  ...
]
```
If Search type is dish then will return list of dishes or an empty array.
```javascript
[ {
    "Dish_id": "00003270-2282-4f7c-83c7-42eba025f71c",
    "Dish_name": "Hammelcarré",
    "Dish_price": "12.73",
    "Dish_created_at": "2022-07-23T13:28:30.576Z",
    "Dish_updated_at": "2022-07-23T13:28:30.576Z",
    "Dish_restaurantId": "53bd581c-7d14-44d3-901e-853e086d953b"
  }
  ...
]
```

### 5.Process a user purchasing a dish from a restaurant, handling all relevant data changes in an atomic transaction. 
```http
POST https://buyingfrenzy-app.herokuapp.com/api/purchase-order/place-order
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `user_id` | `string` | **Required**. |
| `dish_id` | `string` | **Required** |


If successfully ordered placed.
```javascript
{
  "id": "5998da79-bdf8-48d5-83b3-51531ad96b09",
  "dish_name": "Ochsenrippe und Ochsenrücken mit verschiedenen Gemüsen",
  "transaction_amount": "10.76",
  "transaction_date": "2022-07-23T13:44:19.407Z",
  "restaurant_name": "Rooftoop at E11EVEN"
}

```
## Responses

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
