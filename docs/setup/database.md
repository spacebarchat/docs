# 1. How to use `database.db`
 database.db is a file that makes your fosscord instance customizable.

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
1. applications
2. attachments
3. audit_logs
4. bans
5. channels
6. config
7. connected_accounts
8. emojis
9. guilds
10. invites
11. member_roles
12. members
13. message_channel_mentions
14. message_role_mentions
15. message_stickers
16. message_user_mentions
17. messages
18. migrations
19. query-result-cache
20. rate_limits
21. read_states
22. recipients
23. relationship
24. roles
25. sessions
26. sqlite_sequence
27. sticker_packs
28. stickers
29. team_members
30. teams
31. templates
32. users
33. voice_states
34.webhooks
