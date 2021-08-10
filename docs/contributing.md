# Contributing

## Setup

Clone all repositories:

```
git clone https://github.com/fosscord/fosscord fosscord_clone
cd fosscord_clone/scripts/setup
chmod +x setup.sh
./setup.sh
```

### Mongodb

#### MongoDB local server

**Recommended**: Secure, control over data and lower latency

[Install MongoDB](https://docs.mongodb.com/manual/installation/) locally and configure it:

1. Edit the file
(linux: `/etc/mongod.conf`, macos: ``/usr/local/etc/mongod.conf``, windows: ``<install directory>\bin\mongod.cfg``) and add this to the end:

        replication:
            replSetName: "rs0"

2. Restart MongoDB

        systemctl reload mongod

3. Connect to mongodb

        mongo

4. Setup replica set:

        rs.initiate()

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

#### Make it public
You need to set the gateway endpoint in order to access it from everywhere.
To do this create a ``/api/.env`` file and appending/writing this:
```
GATEWAY=[YOURGATEWAYURL]
```
replace ``[YOURGATEWAYURL]`` with your gateway endpoint e.g. ``ws://localhost:3002``, ``wss://myfosscordserver:3002``
if it is https/ssl encrypted use ``wss`` otherwise use ``ws``.

---

### WebSocket Gateway Server

```
cd gateway
npm i
npm start
```

Now you should have a development server running and can use the test client on [http://localhost:3001](http://localhost:3001)

---

### Docker

Optionally if you want to use Docker:

```
docker-compose up
```
You can access it on [http://localhost:3001](http://localhost:3001)

