package com.example.demo.service;

import com.example.demo.model.Todo;

import java.util.List;

public interface TodoService {
    List<Todo> findAll();
    Todo addTodo(Todo todo);
    Todo setDoneTodo(Long id);
    Todo setImportantTodo(Long id);
    void deleteById(Long id);
}
