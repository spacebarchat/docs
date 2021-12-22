# 1. How to use MySQL/SQLite database
 database.db is a file that makes your fosscord instance customizable. Fosscord curently uses MySQL/SQLite Database to store it's data, you can allways change it.

I will be found in `#/bundle/database.db` where `# is the dir name example fosscord-server`
For example this path for git cloned fosscord-server will be `fosscord-server/bundle/database.db`

# Basic stuff that will be included in this Documentation page
| Number | Description |
|---|---|
| 1. | What is database.db/it's path |
| 2. | What will we be discussing today? |
| 3. | The number of tables you can edit |
| 4. | Description of each editable table's |
| 5. | What each sub tables do? |
| 6. | Other Fun Tricks with database.db (Coming Soon) |

# 2. What will be discussing today?
We will be discussing how to edit `database.db` file which is a database used for your fosscord client/server, it's used to save people's data and also allows you to edit your instance in many ways!, you can edit your info, edit passwords, emails, usernames you can give badges... etc, we will be discussing to how to edit them and do it correctly so you don't get too many errors..., let's get a explanation on the tables.

# 3. The number of tables you can edit

Number of total tables you can edit (this does not include the sub tables, sub tables are tables inside tables): `35-34`

**Names of the tables you can edit**
<details>
<summary>Names of the table you can edit (it's really big)</summary>
<br>
1. applications<br/>
2. attachments<br/>
3. audit_logs<br/>
4. bans<br/>
5. channels<br/>
6. config<br/>
7. connected_accounts<br/>
8. emojis<br/>
9. guilds<br/>
10. invites<br/>
11. member_roles<br/>
12. members<br/>
13. message_channel_mentions<br/>
14. message_role_mentions<br/>
15. message_stickers<br/>
16. message_user_mentions<br/>
17. messages<br/>
18. migrations<br/>
19. query-result-cache<br/>
20. rate_limits<br/>
21. read_states<br/>
22. recipients<br/>
23. relationship<br/>
24. roles<br/>
25. sessions<br/>
26. sqlite_sequence<br/>
27. sticker_packs<br/>
28. stickers<br/>
29. team_members<br/>
30. teams<br/>
31. templates<br/>
32. users<br/>
33. voice_states<br/>
34. webhooks<br/>
</summary>
</details>

# 4. What does each table do?
`applications`: Bot Applications, TOS applications, RPC applications ETC

`attachments`: attachments are photos and videos you send on your fosscord instance

`audit_logs`: this are logs where the logs of bans, deleting channels, creating channels, making roles,updating roles.. ETC

`bans`: bans are the users that are banned from a server.

`channel`: channel's created on your fosscord instance

`config`: config table is the most important table of all the DB, that's where the real **magic** happens, it has all the things to update instance name, instance description, config's,URL's ETC

`connected_accounts`: this us the list of the accounts that are online on your instances

`emojis`: this are emojis that are stored on your instance

`guilds`: this are guilds that are made/on your instances

`invites`: this are invites created on your instance

`member_roles`: the roles that are made on your fosscord instance 

`members`: list's members that are in your instance but it also has server is which the members are in

`message_role_mentions`: roles mentioned in a message

`message_channel_mentions`: channels mentioned in a message

`message_stickers`: stickers that are sent or made

`message_user_mentions`: user mention that is sent using a message `example: @OmxproYT#7508`

`messages`: messages sent on your fosscord instance

`migrations`: migrations that happened on your instance 

`query-result-cache`: result cache of query, it makes searching faster

`rate_limits`: rate limits that are placed on a account

`read_states`: read states of messages (I think not sure)

`recipients`: recipients of your instances 

`relationships`: (really don't know what this means I really don't know if this is even important)

`roles`: roles made on your instances

`sessions`: sessions that are online OR sessions that are made on your instance 

`sqlite_sequenses`: sequences on sqlite DB

`sticker_packs`: sticker packs made on your fosscord instances (you can make more)

`stickers`: stickers that are on your instance

`team_members`: team members of teams

`teams`: team's made on your instance

`templates`: server templates made on your instance

`users`: user accounts made on your fosscord instances

`voice_states`: states of Voice Chat

`webhooks`: webhooks made on your fosscord instances

# 5. What does each sub-table do?
Coming Soon!

# 6. Some fun tricks you can do with your database.db
Coming Soon!
