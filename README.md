# phantom-render-service
HTTP API for rendering webpage screenshots to png

## How to run
```bash
# With docker
docker run --restart always -p 3101:3101 -d solohin/phantom-render-service

# Without docker
git clone https://github.com/solohin/phantom-render-service;
cd phantom-render-service;
npm i;
npm start;
```

## API
[GET, JSON POST or urlencoded POST] **/screenshot**

- width - with of the final image
- height - with of the final image
- url - url of webpage

You can use any other options from https://github.com/sorribas/phantom-render-stream

## Example request
http://localhost:3101/screenshot?width=640&height=480&url=http://google.com
