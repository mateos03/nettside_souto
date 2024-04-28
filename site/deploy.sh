echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r dist/* mateo@51.120.3.115:/var/www/souto.no/

echo "Done!"