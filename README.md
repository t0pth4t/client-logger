# Simple client side logging package. 

Learn more at <https://scrimple-web.netlify.app/>

## Install

`npm i scrimple-logger --save`

## Usage

Scrimple logger is an extremely simple way of capturing client side logs. 
To view your logs you must sign up at <https://scrimple-web.netlify.app/> and generate an API key.
Use the API key when initializing the logger. All the logs will be available at <https://scrimple-web.netlify.app/>

```javascript
  import {slog} from "scrimple-logger"
  
  const logger = new slog("your-application-key")
  
  logger.info("My first log!");
  try{
    throw new Error("An error has occurred!");
  }
  catch(err){
    logger.error("My first error log.", err)
  }
```

## Options

***disableConsoleLogs***

Type: *boolean*

Default: *false*

Prevents log/warn/error/etc... statements from execution equivalent console command.
