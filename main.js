const tarefa = document.querySelector('p')
const id = 0;

$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
    // ADICIONAR TAREFA

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li id="tarefa-conteudo"></li>');
        $(`<div class="lista-item">
                <p class="teste">${novaTarefa}</p>
                <button type="reset" id="btn">Remover</button>    
            </div>
            `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        novoItem.toggleClass('tarefa-validar');
        $('#nova-tarefa').val('');



    })
    // FUNÇÃO MARCAR E DESMARCA TAREFA
    $(document).on('click','p', function(){
        $(this).toggleClass('tarefa-concluida')
    }
    )

    //FUNÇÃO REMOVER TAREFA
    $(document).on('click','#btn', function(){
        $(this).closest('#tarefa-conteudo').remove();
    })

    
})