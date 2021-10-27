# CBLab Desafio

Para esta aplicação, utilizei o Angular como frontend, Django como Backend e PostgreSQL.

## Configuração para rodar o projeto

### Requisitos

[Python 3.10](https://www.python.org/downloads/)

[Node.js  16.13.0](https://nodejs.org/en/)

[PostgreSQL](https://www.postgresql.org/download/)

Windows 7, 8, 10 ou 11

### Frontend

Para o angular será necessário instalar as dependências do projeto, com o CMD aberto dentro da pasta frontend, digitar o comando:

```
npm install
```



Após a instalação das dependências, basta executar o comando para iniciar o client frontend.

```
ng serve -o
```



Depois de compilar o código, a aplicação irá abrir no seu navegador padrão, guarde o endereço dela pois precisaremos apontar no servidor backend.



### Backend

Antes de tudo, precisamos criar o ambiente de desenvolvimento, segue o código para utilizar dentro da pasta backend com o cmd aberto:

```
python -m venv myenv
```



Após criado, digite o códgio a seguir para entrar no ambiente de desenvolvimento:

```
myenv\Scripts\activate
```



Dentro do ambiente de desenvolvimento, digite os seguintes códigos para instalar as dependências:

```
pip install django
pip install djangorestframework
pip install psycopg2
```



Agora podemos iniciar o servidor backend, dentro da pasta rest, abra o cmd e digite no terminal:

```
python manage.py runserver
```



Dentro da pasta Rest no arquivo settings.py é necessário realizar algumas configurações.



No campo a seguir, será necessário apontar para o endereço do client frontend, para que possa realizar as solicitações GET, POST, PUT e DELETE:

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:4200",
]
```



Já no campo DATABASES será necessário apontar para o banco criado no PostgreSQL, junto com o usuário e a senha para acessar o banco.

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': os.environ.get('DB_NAME', 'NOME_DO_SEU_BANCO'),
        'USER': os.environ.get('DB_USER', 'USUARIO_DO_BANCO'),
        'PASSWORD': os.environ.get('DB_PASS', 'SENHA_DO_SEU_BANCO'),
        'HOST': 'localhost', # APONTA PARA O ENDEREÇO DO SEU BANCO
        'PORT': '5432', # APONTA PARA A PORTA DO SEU BANCO
        # OBS: O HOST E A PORTA ESTÃO COMO PADRÃO DO POSTGRESQL
    }
}
```



### Banco de dados

No postgreSQL será necessário apenas criar o banco de dados para apontar no projeto Django.



### Finalizando

Após a configuração, basta realizar as migrations da aplicação django, com o ambiente de desenvolvimento aperto na pasta **backend/Rest/** digite os seguintes códigos

```
python manage.py makemigrations
python manage.py migrate
```



Por fim, na mesma pasta, basta iniciar o servidor backend com o comando:

```
python manage.py runserver
```



Com o django e o angular iniciados, a aplicação já estará funcionando.



## Considerações finais

A aplicação está incompleta, não tive tempo de realizar a autenticação OAuth2 nem implementar o login para os usuários, por causa do trabalho e da faculdade, o projeto está apenas com o crud feito apontando para a api rest do django.