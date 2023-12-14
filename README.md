This is a **React Native Clean Architecture** example with react-query.

### Point
* Based on [**`@react-native-community/cli`**](https://github.com/react-native-community/cli). 
* Super simple dependency injection
* Use react-query hooks as **usecase** in domain layer
* Sync storage with [**`react-native-mmkv`**](https://github.com/mrousavy/react-native-mmkv)

### Packages
* react-navigation
* query-sync-storage-persister
* react-query
* react-query-persist-client
* react-native-mmkv

### Preview
<img src='https://github.com/galaxykhh/rn-clean-architecture-with-react-query/assets/79380337/9b0a6350-c87b-4f2d-855e-032a2e73096b' />


### Structure
```
src/
├── core/
│   └── styles, utils, constants...
├── data/
│   └── post/
│       ├── datasources
│       ├── dtos
│       └── repository
├── domain/
│   └── post/
│       ├── entities
│       ├── repository
│       └── usecases
├── presentation/
│   ├── components
│   ├── navigations
│   └── screens
├── container.ts // DI container
└── MyAppName.tsx // Your app name
```