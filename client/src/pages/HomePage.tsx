import { useState } from 'react'
import { Plus, Trash2, Check, X, Edit2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

type Todo = {
    id: number
    title: string
    completed: boolean
}

export default function HomePage() {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, title: 'Learn Vite.js', completed: false },
        { id: 2, title: 'Build a todo app', completed: true },
    ])
    const [newTodo, setNewTodo] = useState('')
    const [editingId, setEditingId] = useState<number | null>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, { id: Date.now(), title: newTodo, completed: false }])
            setNewTodo('')
            setIsDialogOpen(false)
        }
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    const startEditing = (id: number) => {
        setEditingId(id)
    }

    const finishEditing = (id: number, newTitle: string) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, title: newTitle } : todo
        ))
        setEditingId(null)
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <h1 className="text-xl font-bold">Todo List</h1>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <a href="/register" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
                                Register
                            </a>
                            <a href="/login" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h2 className="text-2xl font-semibold mb-4">Your Todos</h2>
                    <div className="space-y-4">
                        {todos.map(todo => (
                            <Card key={todo.id}>
                                <CardContent className="flex items-center justify-between p-4">
                                    {editingId === todo.id ? (
                                        <Input
                                            value={todo.title}
                                            onChange={(e) => finishEditing(todo.id, e.target.value)}
                                            onBlur={() => setEditingId(null)}
                                            onKeyPress={(e) => e.key === 'Enter' && setEditingId(null)}
                                            className="flex-grow mr-2"
                                        />
                                    ) : (
                                        <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                                            {todo.title}
                                        </span>
                                    )}
                                    <div className="flex items-center space-x-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => toggleTodo(todo.id)}
                                        >
                                            {todo.completed ? <X className="h-4 w-4" /> : <Check className="h-4 w-4" />}
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => editingId === todo.id ? setEditingId(null) : startEditing(todo.id)}
                                        >
                                            <Edit2 className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => deleteTodo(todo.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>

            <div className="fixed bottom-8 right-8">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button size="icon" className="rounded-full h-14 w-14">
                            <Plus className="h-6 w-6" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add New Todo</DialogTitle>
                            <DialogDescription>
                                Enter the title for your new todo item.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="todo-title" className="text-right">
                                    Title
                                </Label>
                                <Input
                                    id="todo-title"
                                    value={newTodo}
                                    onChange={(e) => setNewTodo(e.target.value)}
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit" onClick={addTodo}>Add Todo</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}