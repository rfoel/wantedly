# notes

### create app on heroku
heroku create wantedly-api --remote wantedly-api
heroku create wantedly-web --remote wantedly-web

heroku ps:scale web=1 --remote webserver-wantedly
heroku ps:scale web=1 --remote webserver-wantedly

### first push with refs
git push wantedly-api `git subtree split --prefix api master`:refs/heads/master --force
git push wantedly-web `git subtree split --prefix web master`:refs/heads/master --force

git push wantedly-web `git subtree split --prefix web master`:master --force

git push wantedly-api `git subtree split --prefix api master`:master --force
heroku run rake db:seed --app wantedly-api