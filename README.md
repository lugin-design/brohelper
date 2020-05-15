# Brohelper

Brohelper - browser helper. A set of simple helper methods with information about the browser and device.

**This is a set of ES6 modules**

## Install
```JavaScript
npm i @lugindev/brohelper
```

```JavaScript
import * as brohelper from '@lugindev/brohelper'
//or
import { methodName } from '@lugindev/brohelper'
```

## Methods

| methodName                  | return  | desc                                                    |
|-----------------------------|---------|---------------------------------------------------------|
| **browserScrollBarWidth()** | Number  | Browser scrollbar width                                 |
| **browserIsIE()**           | Boolean | Browser is Internet Explorer                            |
| **browserIsEdge()**         | Boolean | Browser is Edge                                         |
| **deviceIsMac()**           | Boolean | Detect MacOS. This method return true also for iPad Pro |
| **deviceIsWin()**           | Boolean | Detect Windows OS                                       |
| **deviceUseCursor()**       | Boolean | Check user devise use cursor(mouse) or not              |

Will be supplemented ...