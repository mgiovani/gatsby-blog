---
title: "O que é SSH e como configurar"
path: "/o-que-e-ssh-e-como-configurar"
date: "2019-08-09"
coverImage: "../images/chaves-ssh-cover.png"
author: "Giovani"
excerpt: "Uma pequena introdução ao que são chaves SSH e como configurá-la para o Github."
tags: ["chaves", "ssh", "tutorial"]
---

## O que é

É um protocolo de rede que permite a conexão criptografada entre dois computadores autenticando ambos os lados para que seja possível transferir arquivos, executar comandos e tarefas remotas de maneira segura.

Existem duas chaves: uma pública (que pode ser usada para encriptar dados e é compartilhada para tal função) e uma chave privada (que pode decriptar os dados e jamais será compartilhada).

## Como criar

Criando uma chave pública:

```shell
$ ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519
```

**-o** Salva a chave privada no novo formato OpenSSH  
**-a** Paramêtro para o KDF (Key Derivation Function), quanto maior mais lento a verifição de passphrase mas mais resistente a força bruta  
**-t** Escolhe o tipo de criptografia a ser utilizada  
**-b** Define o tamanho em bytes do hash  
**-C** Adiciona um comentário à chave  
**-f** Especifica o nome e local da chave a ser gerada

Apenas a chave pública deve ser copiada para que possa ser adicionada ao servidor, seja ele um serviço ou sistema remoto. **Ex.:** id_ed25519.

O método para a transferência da chave para o host varia de acordo com o uso que se dará e preferências do usuário.

Se conectando com o servidor:

```shell
$ ssh -p porta host_remoto
```

## Como Funciona

Para manter uma conexão segura o SSH utiliza de 3 métodos de criptografia, estes são:

### Criptografia Simétrica

A criptografia simétrica funciona com apenas uma chave responsável por encriptar e decriptar todo o fluxo de dados. Também é conhecida como chave compartilhada e é extremamente rápido devido a sua baixa complexidade e facilidade de implementação no _hardware_.

### Criptografia Assimétrica

Utiliza de duas chaves para manter uma conexão segura, a primeira (chave privada) é utilizada apenas para decriptografar dados e nunca é compartilhada, a segunda (chave pública) é compartilhada e funciona apenas para criptografar os dados que serão recebidos pelo cliente.

### Hash

É uma forma mais baixa de criptografia onde a mensagem é condensada em um valor de tamanho fixo e teoricamente irreversível. Pode ser usado com um salto ou chave para guardar dados sensíveis ou sem este extra apenas para checagem de erros e/ou inconsistência.

## Tipos de Chaves

1. **DSA:** Algoritmo antigo baseado em logaritmos discretos mas já depreciado.
   - **-** Não mais considerada segura. Quebrável.
2. **ECDSA:** Uma melhora do DSA utilizando curvas elípticas.
   - **-** Sua segurança depende fortemente da capacidade de gerar RNG da máquina.
3. **RSA:** Algoritmo baseado na dificuldade de fatorar números muito grandes.
   - **-** Sua segurança depende do tamanho da chave indo de não segura (1024) a segura (4096)
   - **-** Chave extremamente longa
   - **-** Previsões de quebra em um futuro não tão distante
4. **ed25519:** Novo algoritmo que ainda não possui suporte universal mas se mostra mais seguro e rápido que os demais.
   - **+** Mais rápido e seguro que os demais
   - **+** Matematicamente a opção mais robusta
   - **+** Possui apenas 68 bits
   - **-** Ainda não possui suporte universal

## Fontes:

[OpenSSH: Manual Pages](https://www.openssh.com/manual.html)  
[SSH For Noobs!](https://medium.com/@mailrobinfrancis/ssh-for-noobs-1825234258a2)  
[SSH: Secure Shell](https://www.ssh.com/ssh/)  
[Understanding SSH WorkFlow](https://medium.com/@Magical_Mudit/understanding-ssh-workflow-66a0e8d4bf65)  
[How to use SSH](https://www.digitalocean.com/community/tutorials/how-to-use-ssh-to-connect-to-a-remote-server-in-ubuntu)  
[SSH Key Types and Cryptography](https://chealion.ca/2016/06/20/ssh-key-types-and-cryptography-the-short-notes/)  
[Symmetric Encryption, Asymmetric Encryption and Hashing](http://packetlife.net/blog/2010/nov/23/symmetric-asymmetric-encryption-hashing/)  
[SSH for Beginners](https://www.hostinger.in/tutorials/ssh-tutorial-how-does-ssh-work)  
[Understanding the SSH](https://www.digitalocean.com/community/tutorials/understanding-the-ssh-encryption-and-connection-process)
