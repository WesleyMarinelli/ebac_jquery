$(document).ready(function() {
    $('#taskForm').submit(function(event) {
        event.preventDefault();
        var taskName = $('#taskInput').val();
        var priority = $('#priorityInput').val();

        if (taskName.trim() !== '') {
            $('#taskList').append('<li data-priority="' + priority + '">' + taskName + '</li>');
            $('#taskInput').val('');
            $('#priorityInput').val('baixa');
            sortTasksByPriority();
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    function sortTasksByPriority() {
        var list = $('#taskList');
        var items = list.children('li').get();

        items.sort(function(a, b) {
            var priorityA = $(a).data('priority');
            var priorityB = $(b).data('priority');

            
            var priorityOrder = { 'baixa': 2, 'média': 1, 'alta': 0 };
            return priorityOrder[priorityA] - priorityOrder[priorityB];
        });

        $.each(items, function(index, item) {
            list.append(item);
        });
    }
});

