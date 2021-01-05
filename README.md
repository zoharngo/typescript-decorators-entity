# typescript-decorators-entity
https://github.com/zoharngo/typescript-decorators-entity


## Standard REST-based API routes example create vlidation per entity 

### Implement entity definition using description decorators and reflection 

#### Following code snippet Implement 

- Define entity name for route creation
- Identify id property for fetching from database 
- Specify what persists to the database 
- Specify what values are required for validation of objects 
- Define validation rules per field for validation of objects 


```
@entity(“people”)
class Person {
  @id
id: string; 
  @persist
  @required
  firstName: string;
  @persist
  @required
  lastName: string;
  @persist
  @required
  @isEmail
  email: string;
}
```

