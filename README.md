# phantom-render-service
HTTP API for rendering webpage screenshots to png

## How to run
```npm i; npm start```

or

```docker run --restart always -p 3101:3101 -d solohin/phantom-render-service```

## API
[GET, JSON POST or urlencoded POST] **/screenshot**

- width - with of the final image
- height - with of the final image
- url - url of webpage

You can use any other options from https://github.com/sorribas/phantom-render-stream

## Example request
http://localhost:3101/screenshot?width=640&height=480&url=http://google.com
