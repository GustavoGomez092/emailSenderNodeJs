# NODE.js Mailgun express endpoint simple sender

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

simple sender for Chatfuel using nodeJS and Express

# Add .env to set up

| KEY | TYPE | DESCRIPTION |
| ------ | ------ | ------ |
| DOMAIN | String | mailgun domain
| API_KEY | String | mailgun API key
| SECRET | String | Secret used to validate request



# Example request:
```sh
{
	"nombre" : "Test User",
	"telefono" : "8888-8888",
	"cedula" : "001-147584-0018D",
	"email" : "test@test.com",
	"tipoConsulta" : "consulta de prueba",
	"secret" : "send it on the request",
    "to" : "Correo electronico"
}
```
