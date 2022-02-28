# Using MariaDB/MySQL

## Setup

### Explaination

A database server is a kind of server that hosts so called databases with "tables" in them. MariaDB is a way of hosting
them. It is much more efficient than SQLite, because it isn't just a file which can be easily hacked and amplified.

To do this, you need a basix understanding of linux and SQL.

### Setting up MariaDB/MySQL

This section presumes you know how to login into MariaDB. If you don't, search it up.

Go into MariaDB and type these:
```
CREATE DATABASE fosscord;
CREATE USER 'fosscord'@'localhost' IDENTIFIED BY 'password1';
GRANT ALL PRIVILEGES ON fosscord.* TO 'fosscord'@'localhost' IDENTIFIED BY 'password1' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```
After that, go to your fosscord directory, and open (if it's not created, create it) a file named ".env" WITH THE DOT.
The file should contain this:
```
THREADS=1
DATABASE=mariadb://[youruser]:[yourpassword]@localhost/[yourdatabase]
```

So for us that would be:
```
THREADS=1
DATABASE=mariadb://fosscord:password1@localhost/fosscord
```
If you set it up correctly, you should be able to run ``systemctl start fosscord`` or ``npm run start:bundle`` if you didn't setup systemd
(which you should do, checkout the "Setup" section) and, your fosscord works! It may say "TABLE NOT SETUP" or something. Ignore these, because
they are just there because the database is uninitialized.

If you get an error that says ``DriverPackageNotInstalledError: Mysql package has not been found installed.``, run ``npm install mysql --save``.

// by AToska21
