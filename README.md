Descrição do Projeto

Aplicação web full stack desenvolvida como desafio técnico, com foco em organização de tarefas por meio de boards e cartões interativos. O projeto foi construído com arquitetura modular, autenticação segura e cobertura abrangente de testes, priorizando boas práticas de engenharia de software, manutenibilidade e escalabilidade.

No back-end, foi utilizado NestJS com MongoDB e Mongoose, incluindo sistema completo de autenticação via JWT com estratégias local e token, proteção de rotas e tratamento consistente de erros. A aplicação conta com testes integrados e end-to-end utilizando Jest.

O front-end foi desenvolvido em Angular, com interface responsiva baseada em Bootstrap e interação dinâmica de cartões utilizando CdkDragDrop. O fluxo de autenticação é gerenciado via token com controle de expiração e tratamento de sessão no cliente. Foram implementados testes unitários com Jasmine e Karma.

O projeto segue princípios como modularidade, separação de responsabilidades, injeção de dependência e práticas inspiradas em SOLID, com foco em código reutilizável, testável e de fácil evolução.

Stack principal

NestJS + MongoDB + Mongoose

Autenticação JWT (Passport Strategy)

Angular + Bootstrap

CdkDragDrop (drag and drop de cartões)

Testes: Jest (backend) · Jasmine/Karma (frontend)
