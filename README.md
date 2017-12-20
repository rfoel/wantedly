# Wantedly challenge

Made with Ruby, Ruby on Rails, PostgreSQL, Vue.js and Bulma.

## Demo

[See the demo here](https://wantedly-web.herokuapp.com/)

[See a demo profile here](https://wantedly-web.herokuapp.com/users/1)

## API endpoints

| Method | Endpoint                                 | Description                   | Response    |
| ------ | ---------------------------------------- | ----------------------------- | ----------- |
| POST   | /user/sign_in                            | sign in                       | 200 OK      |
| POST   | /users                                   | sign up                       | 201 Created |
| DELETE | /user/sign_out                           | sign out                      | 200 OK      |
| GET    | /user/skills                             | get curent user skills        | 200 OK      |
| POST   | /user/update_skills                      | update current user skills    | 200 OK      |
| POST   | /check_uniqueness                        | check if user email is unique | 200 OK      |
| GET    | /autocomplete                            | autocomplete user name        | 200 OK      |
| GET    | /skills                                  | get skills list               | 200 OK      |
| GET    | /users/:user_id                          | get user profile              | 200 OK      |
| GET    | /users/:user_id/skills                   | get user skills               | 200 OK      |
| POST   | /users/:user_id/skills                   | create user skill             | 201 Created |
| GET    | /users/:user_id/skills/:skill_id/endorse | endorse user skill            | 200 OK      |

## Routes

| Route         | Description         |
| ------------- | ------------------- |
| /             | home page           |
| /search       | search a user       |
| /user/sign_in | sign in             |
| /user/sign_up | sign up             |
| /user/profile | curent user profile |
| /users/:id    | user profile        |
