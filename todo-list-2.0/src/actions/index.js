
let nextTodoId = 0

//addTodo action
export  const addTodo = text => ({
    type : "ADD_TODO",
    id : nextTodoId++,
    text
})

//setVisibilityFilter  action
export const setVisibilityFilter  = filter  => ({
    type : 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
    type : 'TOGGLE_TODO',
    id
})

export const VisibilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETED : 'SHOW_COMPLETED',
    SHOW_ACTIVE : 'SHOW_ACTIVE'
} 