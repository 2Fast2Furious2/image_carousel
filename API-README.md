## Server API

### Get place info
  * GET `/api/moreplaces/:id`

**Path Parameters:**
  * `id` id of place to return related 12 places

**Success Status Code:** `200`

**Returns:** JSON

```json
    [ {
        "placeID": "id Number",
        "image": "image URL",
        "name": "String",
        "description": "String",
        "rate": "Number",
        "avgRating": "Number",
        "numberOfRatings": "Number",
        "avgRating": "Number",
        "wasLiked": "Boolean",
        "posted": "YYYY-MM-MM",
        "longitude": "String location",
        "latitude": "String location",
        "category": "String",
        "superhost": "String",
        "placeURL": "Link URL to place"

     }, ]
```


### Get place info
  * GET `/api/liked/:id`

**Path Parameters:**
  * `id` id of place to return lists of liked places

**Success Status Code:** `200`

**Returns:** JSON

```json
    [ {
        "placeID": "id Number",
        "image": "image URL",
        "listName": "String",
        "dates": "String"
     }, ]




### Add place
  * POST `/api/place`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
        "placeID": "id Number",
        "image": "image URL",
        "name": "String",
        "description": "String",
        "rate": "Number",
        "avgRating": "Number",
        "numberOfRatings": "Number",
        "avgRating": "Number",
        "wasLiked": "Boolean",
        "posted": "YYYY-MM-MM",
        "longilat": "String location",
        "category": "String",
        "superhost": "String",
        "placeURL": "Link URL to place"
    }
```


### Add place
  * POST `/api/liked`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
        "placeID": "id Number",
        "image": "image URL",
        "listName": "String",
        "dates": "String"
    }



### Update place info
  * PATCH `/api/place/:id`

**Path Parameters:**
  * `id` place id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
        "placeID": "id Number",
        "image": "image URL",
        "name": "String",
        "description": "String",
        "rate": "Number",
        "avgRating": "Number",
        "numberOfRatings": "Number",
        "avgRating": "Number",
        "wasLiked": "Boolean",
        "posted": "YYYY-MM-MM",
        "longilat": "String location",
        "category": "String",
        "superhost": "String",
        "placeURL": "Link URL to place"
    }
```

### Delete place
  * DELETE `/api/place/:id`

**Path Parameters:**
  * `id` place id

**Success Status Code:** `204`


### Delete place
  * DELETE `/api/liked/:id`

**Path Parameters:**
  * `id` place id

**Success Status Code:** `204`


### Add image to paces
  * POST `/api/place/:placeId/images`

**Path Parameters:**

  * `placeId` place id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
        "placeID": "id Number",
        "image": "image URL",
        "name": "String",
        "description": "String",
        "rate": "Number",
        "avgRating": "Number",
        "numberOfRatings": "Number",
        "avgRating": "Number",
        "wasLiked": "Boolean",
        "posted": "YYYY-MM-MM",
        "longilat": "String location",
        "category": "String",
        "superhost": "String",
        "placeURL": "Link URL to place"

    }
```