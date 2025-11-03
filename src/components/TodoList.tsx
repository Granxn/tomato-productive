import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Edit2, Check, X } from "lucide-react";
import { toast } from "sonner";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      const todo: Todo = {
        id: Date.now().toString(),
        text: newTodo.trim(),
        completed: false,
      };
      setTodos([...todos, todo]);
      setNewTodo("");
      toast.success("Task added! 🌟");
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
    toast.success("Task deleted! ✨");
  };

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id: string) => {
    if (editText.trim()) {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text: editText.trim() } : todo
      ));
      setEditingId(null);
      toast.success("Task updated! ✏️");
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="pixel-card space-y-6">
      <h2 className="text-xl font-bold text-primary">Task List</h2>
      
      <form onSubmit={addTodo} className="flex gap-2">
        <Input
          type="text"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="pixel-border flex-1"
          maxLength={100}
        />
        <Button type="submit" className="pixel-button">
          Add
        </Button>
      </form>

      <div className="space-y-3">
        {todos.length === 0 ? (
          <p className="text-center text-muted-foreground text-sm py-8">
            No tasks yet. Add one to get started! 🚀
          </p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="pixel-border bg-background p-4 rounded-md flex items-center gap-3 hover:bg-muted/50 transition-colors"
            >
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
                className="border-2"
              />
              
              {editingId === todo.id ? (
                <div className="flex-1 flex gap-2">
                  <Input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="pixel-border flex-1"
                    maxLength={100}
                    autoFocus
                  />
                  <Button
                    size="sm"
                    onClick={() => saveEdit(todo.id)}
                    className="pixel-button h-8 w-8 p-0"
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    onClick={cancelEdit}
                    variant="destructive"
                    className="pixel-button h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <span
                    className={`flex-1 text-sm ${
                      todo.completed ? "line-through text-muted-foreground" : ""
                    }`}
                  >
                    {todo.text}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => startEditing(todo)}
                    className="h-8 w-8 p-0 hover:bg-secondary"
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => deleteTodo(todo.id)}
                    className="h-8 w-8 p-0 hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
          ))
        )}
      </div>

      {todos.length > 0 && (
        <div className="text-center text-sm text-muted-foreground">
          {todos.filter(t => t.completed).length} of {todos.length} tasks completed
        </div>
      )}
    </div>
  );
};
