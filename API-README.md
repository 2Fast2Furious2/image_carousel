## Server API

### Get place info
  * GET `/api/place/:id`

**Path Parameters:**
  * `id` place id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "place": "id Number",
      "image": "image URL",
      "name": "String",
      "description": "String",
      "rate": "String",
      "avgRating": "String",
      "numberOfRatings": "String",
      "avgRating": "String",
      "wasLiked": "String",
      "posted": "YYYY-MM-MM",
      "googleMap": "String location",
      "category": "String",
      "cost": "Number",
      "superhost": "String"
    }
```

### Add place
  * POST `/api/place`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "place": "id Number",
      "image": "image URL",
      "name": "String",
      "description": "String",
      "rate": "String",
      "avgRating": "String",
      "numberOfRatings": "String",
      "avgRating": "String",
      "wasLiked": "String",
      "posted": "YYYY-MM-MM",
      "googleMap": "String location",
      "category": "String",
      "cost": "Number",
      "superhost": "String"
    }
```


### Update place info
  * PATCH `/api/place/:id`

**Path Parameters:**
  * `id` place id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "place": "id Number",
      "image": "image URL",
      "name": "String",
      "description": "String",
      "rate": "String",
      "avgRating": "String",
      "numberOfRatings": "String",
      "avgRating": "String",
      "wasLiked": "String",
      "posted": "YYYY-MM-MM",
      "googleMap": "String location",
      "category": "String",
      "cost": "Number",
      "superhost": "String"
    }
```

### Delete place
  * DELETE `/api/place/:id`

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
      "place": "id Number",
      "image": "image URL",
      "name": "String",
      "description": "String",
      "rate": "String",
      "avgRating": "String",
      "numberOfRatings": "String",
      "avgRating": "String",
      "wasLiked": "String",
      "posted": "YYYY-MM-MM",
      "googleMap": "String location",
      "category": "String",
      "cost": "Number",
      "superhost": "String"

    }
```