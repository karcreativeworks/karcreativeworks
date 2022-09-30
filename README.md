## Build Instructions

For the development mode, server starts at `https://localhost:3000`. Run the following commands.

```bash
npm run dev
# or
yarn dev
```

For the production mode, server starts at `https://localhost:7000`. Run the following commands.

```bash
npm run build
npm run start
# or
yarn dev
yarn start
```

## Deploy Instructions

The following is the nginx config file for server setup

```
 location / {
  include cors;

  proxy_pass http://localhost:3000;
  proxy_read_timeout     60;
        proxy_connect_timeout  60;
        proxy_redirect         off;

  proxy_cache_lock on;
  proxy_set_header Upgrade "$http_upgrade";
  proxy_set_header Connection "upgrade";
  proxy_http_version 1.1;
  proxy_cache_bypass $http_upgrade;
    }
```

## App architecture

- `pages` > all Next pages.
- `components` > all React components with scss modules.
- `styles` > all global level, page level styles
- `utils` > all helpers, data, types
- `public` > all static files - images, logos
