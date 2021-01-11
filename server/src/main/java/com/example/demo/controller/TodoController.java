package com.example.demo.controller;

import com.example.demo.model.Todo;
import com.example.demo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/todo")
@CrossOrigin(origins = "*")
public class TodoController {

    private final TodoService todoService;

    @Autowired
    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllTodos() {
        List<Todo> todos = todoService.findAll();

        return new ResponseEntity<>(todos, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addTodo(@RequestBody Todo todo) {
        Todo savedTodo = todoService.addTodo(todo);

        return new ResponseEntity<>(savedTodo, HttpStatus.CREATED);
    }

    @PutMapping("/done")
    public ResponseEntity<?> setDoneTodo(@RequestBody Todo todo) {
        Todo doneTodo = todoService.setDoneTodo(todo.getId());

        return new ResponseEntity<>(doneTodo, HttpStatus.OK);
    }

    @PutMapping("/important")
    public ResponseEntity<?> setImportantTodo(@RequestBody Todo todo) {
        Todo importantTodo = todoService.setImportantTodo(todo.getId());

        return new ResponseEntity<>(importantTodo, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable Long id) {
        todoService.deleteById(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
