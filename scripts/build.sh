#!/bin/bash

cd api-gateway && npm run build && cd -
cd microservices/cart-manage && npm run build && cd -
cd microservices/cart-view && npm run build && cd -