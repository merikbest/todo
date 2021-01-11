package com.example.demo.service;

import com.example.demo.model.Todo;
import com.example.demo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    private final TodoRepository todoRepository;

    @Autowired
    public TodoServiceImpl(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @Override
    public List<Todo> findAll() {
        return todoRepository.findAll();
    }

    @Override
    public Todo addTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    @Override
    public Todo setDoneTodo(Long id) {
        Todo todo = todoRepository.getOne(id);
        todo.setDone(!todo.isDone());

        return todoRepository.save(todo);
    }

    @Override
    public Todo setImportantTodo(Long id) {
        Todo todo = todoRepository.getOne(id);
        todo.setImportant(!todo.isImportant());

        return todoRepository.save(todo);
    }

    @Override
    public void deleteById(Long id) {
        todoRepository.deleteById(id);
    }
}
