const todoList = require("../todo");
const { total, markAsComplete, add, overdue, dueLater, dueToday } = todoList();
describe("checking the todo list",() => {
    beforeAll(() => {
        add({
            title:"todo items",
            completed:true,
            dueDate:new Date().toLocaleDateString("en-CA"),
        });
        add({
            title:"preparing for exams",
            completed:true,
            dueDate:new Date().toLocaleDateString("en-CA"),
        });
        add({
            title:"drinking water of 3 lts daily",
            completed:false,
            dueDate:new Date().toLocaleDateString("en-CA"),
        });
        
        
    });
    
    let length = total.length;
    test("creating new todo",()=>{
        expect(total.length).toBe(3);
    });
    test("check marking a todo as compleated",()=>{
        markAsComplete(0);
        markAsComplete(1);
        markAsComplete(2);

        expect(total[2].completed).toBe(true);
    });
    let duelist = overdue();
    test("checking retrieval of overdue items",()=>{
        expect(
            duelist.every((todo)=>{
                return todo.dueDate < new Date().toLocaleDateString("en-CA").toBe(true);
            }));
    });
    let todayduelist = dueToday();
    test("checking retrieval of dueToday items",()=>{
        expect(
            todayduelist.every((todo)=>{
                return todo.dueDate === new Date().toLocaleDateString("en-CA").toBe(true);
            }));
    });
    let laterduelist = dueLater();
    test("checking retrieval of duelater items",()=>{
        expect(
            laterduelist.every((todo)=>{
                return todo.dueDate > new Date().toLocaleDateString("en-CA").toBe(true);
            }));
    });
});
