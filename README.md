<h1> Tasks API Rest</h1>

<p>
    There is a simple rest API in NodeJs where the user can manipulate their tasks dynamically, adding a level of difficulty to their tasks and determining a date for the completion of that task (optional)
</p>

<br>

<p>This is a representation of the data that the user will enter during the creation of their task</p>

```json
{
   "title": "Titulo de teste",
   "description": "Descrição para teste",
   "difficulty": 6,
   "status": false,
   "authorId": 1,
   "endsDate": "2023-10-21"
}
```

<h2> Features to be implemented </h2>

- [] Websocket
- [] Email notification 