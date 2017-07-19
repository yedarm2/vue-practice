# vue-router

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 정리

## vuex-router-sync
* vue-router 인스턴스를 vuex 인스턴스에 간단히 연결시켜주는 모듈입니다.

### 사용법
``` javascript
import {sync} from 'vuex-router-sync';
import store from './store.js';
import router from './router.js';

sync(store, router, options)
```
#### store
* vuex 인스턴스입니다.

#### router
* vue-router 인스턴스입니다.

#### options
* 두 인스턴스를 동기화할 때 이용할 정보를 넣을 객체로 moduleName<String> 만 필요로 합니다. (아마도??)

#### options.moduleName
* store의 state에 라우트의 정보를 저장할 key 이름으로 기본값은 `store`입니다.

* sync로 store와 router를 동기화 
* sync 함수를 이용해서 동기화가 완료된 vuex 인스턴스는 router 인스턴스의 정보가 변화할 때 마다 `moduleName + 'ROUTE_CHANGED'` 변이를 발생시킵니다.

### `moduleName + '/ROUTE_CHANGED'`(state, payload)
* 라우트 인스턴스가 변경이 되어서 vue 인스턴스의 변경이 생긴뒤에 발생하는 변이입니다.
* payload에는 to와 from 두 객체가 들어 있습니다.