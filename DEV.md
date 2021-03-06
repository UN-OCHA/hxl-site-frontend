# Develop with Docker

You will need Docker and docker-compose software installed on your computer

## prepare to start develop
1. cd to this directory
2. `docker-compose pull gatsby`
3. `docker-compose up -d`

## one-time setup
You need internet access for this step.
The local `node_modules` will be erased and replaced.

4. `docker-compose exec gatsby npm run dockerlocalprepare`

## develop away!
5. if the container is not started, start it with `docker-compose start gatsby`
6. launch gatsby in developer mode with `docker-compose exec gatsby npm run dockerdev`
7. wait for it then go to http://localhost:8000

## test the deploy process locally to catch any errors early
8. before pushing your work to merge it to dev, run `docker-compose exec gatsby npm run dockerdeploy`

Repeat the one time setup whenever you update the modules used or if you suspect they got corrupted.
Currently, the container will stay up for 4 hours then stop. Run `docker-compose start gatsby` to start it again.
