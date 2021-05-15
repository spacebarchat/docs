# Contributing

## Setup

Clone all repositories:

```
git clone --recurse-submodules -j8 https://github.com/fosscord/fosscord
cd fosscord
```

### Mongodb

#### MongoDB local server

**Recommended**: Secure, control over data and lower latency

[Install MongoDB](https://docs.mongodb.com/manual/installation/) locally and configure it:

1. Edit the file `/etc/mongod.conf` and add this to the end:

```
replication:
	replSetName: "rs0"
```

2. Restart MongoDB

```
systemctl reload mongod
```

3. Connect to mongodb

```
mongo
```

4. Setup replica set:

```
rs.initiate()
```

#### MongoDB Atlas/Cloud server

**Easier setup**: But no data sovereignty and higher latency

1. **Register/login** for free at [cloud.mongodb.com](https://cloud.mongodb.com/) (500mb limit)

2. **Create a new cluster**

3. **Configure cluster:**

    Sidebar -> Network Access (Security) -> IP Access List -> Add IP address ->
    Either "Add current ip address" or "allow access from anywhere" or the ip of your server -> Confirm

4. **Connect to cluster:**

    Sidebar -> Clusters -> Connect -> "Connect your application" -> **Copy connection string**

    Looks similar to this: `mongodb+srv://root:<password>@cluster.yjecb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

    Replace `<password>` with your password and `myFirstDatabase` with a name of your choice

5. **Add your connection string** to the `.env` files:

    Create `api/.env` and `gateway/.env` file and add this

    ```
    MONGO_URL=YourConnectionString
    ```

    replace `YourConnectionString` with the mongodb connection string

---

### HTTP API Server

```
cd api
npm i
npm start
```

---

### WebSocket Gateway Server

```
cd gateway
npm i
npm start
```

---

### Docker

Optionally if you want to use Docker:

```
docker-compose up
```
