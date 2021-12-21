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
