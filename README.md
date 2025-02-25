# NgOnion

## Estrutura inicial:
``` bash
src/
├── app/
│   ├── core/                  # Camada de núcleo (configurações globais)
│   │   ├── guards/            # Guards de rotas
│   │   ├── interceptors/      # Interceptors HTTP
│   │   ├── services/          # Serviços globais (ex.: AuthService, LoggerService)
│   │   ├── models/            # Modelos globais ou tipos compartilhados
│   │   └── core.module.ts     # Módulo Core
│   │
│   ├── shared/                # Componentes, diretivas e pipes reutilizáveis
│   │   ├── components/        # Componentes compartilhados
│   │   ├── directives/        # Diretivas personalizadas
│   │   ├── pipes/             # Pipes personalizados
│   │   ├── models/            # Modelos compartilhados entre módulos
│   │   └── shared.module.ts   # Módulo Shared
│   │
│   ├── domain/                # Camada de domínio (lógica de negócios)
│   │   ├── entities/          # Entidades do domínio (ex.: User, Product)
│   │   ├── repositories/      # Interfaces de repositório (contratos)
│   │   ├── use-cases/         # Casos de uso (lógica de negócios)
│   │   └── value-objects/     # Objetos de valor (ex.: Email, Password)
│   │
│   ├── infrastructure/        # Camada de infraestrutura (implementações concretas)
│   │   ├── adapters/          # Adaptadores para serviços externos
│   │   ├── repositories/      # Implementações concretas dos repositórios
│   │   ├── services/          # Serviços de infraestrutura (ex.: ApiService)
│   │   └── data-sources/      # Fontes de dados (ex.: LocalStorage, API)
│   │
│   ├── presentation/          # Camada de apresentação (UI)
│   │   ├── pages/             # Páginas principais (rotas)
│   │   ├── components/        # Componentes específicos de páginas
│   │   ├── layouts/           # Layouts reutilizáveis (ex.: Header, Footer)
│   │   └── presentation.module.ts  # Módulo Presentation
│   │
│   ├── app-routing.module.ts  # Configuração de rotas
│   ├── app.component.ts       # Componente raiz
│   └── app.module.ts          # Módulo principal
│
├── assets/                    # Arquivos estáticos (imagens, ícones, etc.)
├── environments/              # Configurações de ambiente
└── styles/                    # Estilos globais
```

## Explicação das Camadas
# Core :
Contém funcionalidades globais que são essenciais para o funcionamento da aplicação.
Exemplos: Guards, Interceptors, Serviços globais (AuthService), Modelos globais.

# Shared :
Componentes, diretivas e pipes que podem ser reutilizados em diferentes partes da aplicação.
Não deve conter lógica de negócios específica.

# Domain :
Representa o coração da aplicação, onde reside a lógica de negócios.
Entities : Classes que representam os objetos principais do domínio.
Repositories : Interfaces que definem contratos para acesso a dados.
Use-Cases : Classes que encapsulam a lógica de negócios (ex.: CreateUserUseCase).
Value-Objects : Objetos imutáveis que representam valores específicos (ex.: Email).

# Infrastructure :
Implementações concretas das interfaces definidas na camada de domínio.
Adapters : Adaptadores para integração com serviços externos (ex.: APIs REST, GraphQL).
Repositories : Implementações concretas dos repositórios (ex.: UserRepositoryImpl).
Data-Sources : Fontes de dados (ex.: API, LocalStorage).

# Presentation :
Responsável pela interface do usuário.
Pages : Componentes que representam páginas ou rotas.
Components : Componentes específicos de páginas.
Layouts : Estruturas reutilizáveis, como cabeçalhos e rodapés.
