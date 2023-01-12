// Faça um programa em JavaScript que:

//Solicite ao usuário que insira dois números inteiros positivos;

//Utilize um vetor para armazenar esses dois números;

//Verifique se os números inseridos são inteiros positivos. Caso contrário, solicite ao usuário para inseri-los novamente;

//Divida os dois números inteiros positivos;

//Imprima na tela o resultado da divisão.//



//Declaração do array 'numeros' sem tamanho definido e sem elementos atribuídos
var numeros = [ ];

//O primeiro elemento (o de índice 0) recebe o retorno da função que solicita o primeiro número
numeros[0] = soliticaPrimeiroNumero();

//O segundo elemento (o de índice 1) recebe o retorno da função que solicita o segundo número
numeros[1] = soliticaSegundoNumero();
 
 //Declaração de atribuição de valor à variável que armazenará o resultado da divisão
 //O resultado da divisão virá da função 'divida' (esse função recebe como parâmetro o array 'numeros')
 var resultadoDivisao = divida(numeros);
 
 //Exibindo o resultado da divisão na tela
 alert('O resultado da divisão é igual a: ' + resultadoDivisao); 
 
 /*
 Função Javascript
 Esta função não recebe parâmetros
 */
 function soliticaPrimeiroNumero(){
     //Declaração e atribuição de variável. Ela receberá o número inserido pelo usuário
     var numero1 = prompt("Insira o primeiro número: ");
     
     //Condição para verificar se o número é positivo.
     //Caso não, o retorno da função será chamar a própria função novamente.
     //  Esta operação será repetida até que um número válido seja inserido.
     //Caso sim, retorna o valor inserido pelo usuário
     if(numero1 < 0){
         alert("O número precisa ser inteiro e positivo");
         
         //Este tipo de retorno, onde a própria função é chamada novamente, é conhecido como recursividade
         return soliticaPrimeiroNumero();
     }else{
         return numero1;
     }
 }
 
 function soliticaSegundoNumero(){
     var numero2 = prompt("Insira o segundo número: ");
     
     if(numero2 < 0){
         alert("O número precisa ser inteiro e positivo");
         return soliticaSegundoNumero();
     }else{
         return numero2;
     }
 }
 
 /*
 Esta função recebe como parâmetro um array - que contém os 2 números que desejamos dividir
 */
 function divida(numeros){
     var resultado = 0;
     
     //Os números a serem divididos são acessados através dos índices do array
     resultado = numeros[0] / numeros[1];
     return resultado;
 }
