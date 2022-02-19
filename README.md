# Backend-Mongoose_Validations-Pre
Mongoose Validations on Post request

**Firstly Make a folder and run command**
```js
npm init -y
```

```js
npm i express express-validator nodemon mongoose cors
```

**Validations**
validations are used to validate post form fields to ensure that whatever we need is present in the way we want it to be present and even though you guys are used to doing frontend validations but still validations must be performed on backend also as frontend code is available inside browser and user might modify it to bypass our validations hence backend validation is required

also remember to add validations to your database schema so that you have an additional layer of protection but you should never default to database validations.

we will use express-validator and documentation for the same is available at Express Validator
