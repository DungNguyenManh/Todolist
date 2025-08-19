Todolist/
  backend/
  frontend/
  docs/
  .gitignore
  README.md




---------------------------------------- Cấu trúc thư mục Backend ----------------------------------------

backend/
  src/
    main.ts
    app.module.ts
    config/
      configuration.ts           # load env, helper getEnv()
      env.validation.ts          # (tuỳ chọn) validate .env bằng Joi/Zod
    database/
      database.module.ts         # MongooseModule.forRootAsync đọc MONGO_URI
      index.ts                   # export DatabaseModule
    common/
      guards/
      interceptors/
      filters/
      decorators/
      dto/
      utils/
      constants.ts
    modules/
      auth/
        auth.module.ts
        auth.controller.ts
        auth.service.ts
        jwt.strategy.ts
        dtos/
          login.dto.ts
          register.dto.ts
      users/
        users.module.ts
        users.controller.ts
        users.service.ts
        schemas/
          user.schema.ts
      todos/
        todos.module.ts
        todos.controller.ts
        todos.service.ts
        schemas/
          todo.schema.ts
    types/
      index.d.ts                 # (tuỳ chọn) shared TS types
  test/
  .env.example
  package.json
  tsconfig.json
  tsconfig.build.json
  nest-cli.json
  eslint.config.mjs


  Gợi ý alias tsconfig.json


  {
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@config/*": ["config/*"],
      "@database/*": ["database/*"],
      "@common/*": ["common/*"],
      "@modules/*": ["modules/*"]
    }
  }
}



---------------------------------------- Cấu trúc thư mục Frontend ----------------------------------------

frontend/
  src/
    app/
      (routes)/                 # thư mục route segments
      layout.tsx
      globals.css
      page.tsx
    components/
    lib/                        # API client, fetcher
    hooks/
    types/
  public/
  .env.local.example
  package.json
  next.config.ts
  tsconfig.json
  eslint.config.mjs
  postcss.config.mjs



---------------------------------------- CÁCH TẮT BÁO LỖI ESLINT ----------------------------------------
1. Tạo folder .vscode
2. Tạo settings.json
          {
            "eslint.enable": false
          }   
