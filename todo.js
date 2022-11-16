 const todoList = () => {
    total = [];
    const add = (todoItem) => {
      total.push(todoItem);
    };
    const markAsComplete = (index) => {
      total[index].completed = true;
    };
  
    const overdue = () => {
      
      const array = total.filter((person) => person.dueDate == yesterday);
      return array;
    };
  
    const dueToday = () => {
      
      const array = total.filter((person) => person.dueDate === today);
      return array;
    };
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      const array = total.filter((person) => person.dueDate === tomorrow);
  
      return array;
    };
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      array = [];
      const display = list.map((item) => {
        const completionStatus = item.completed ? "[x]" : "[ ]";
        const displayedDate =
          item.dueDate === new Date().toLocaleDateString("en-CA")
            ? ""
            : item.dueDate;
        array.push(completionStatus + " " + item.title + " " + displayedDate);
      });
      return array.join("\n").trim();
    };
  
    return {
      total,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  const todos = todoList();
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };
  
  var dateToday = new Date();
  const today = formattedDate(dateToday);
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  );
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  );
  todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
  todos.add({ title: "Pay rent", dueDate: today, completed: true });
  todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
  todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
  todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });
  
  console.log("My Todo-list\n\n");
  
  console.log("Overdue");
  var overdues = todos.overdue();
  var formattedOverdues = todos.toDisplayableList(overdues);
  console.log(formattedOverdues);
  console.log("\n\n");
  
  console.log("Due Today");
  let itemsDueToday = todos.dueToday();
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
  console.log(formattedItemsDueToday);
  console.log("\n\n");
  
  console.log("Due Later");
  let itemsDueLater = todos.dueLater();
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
  console.log(formattedItemsDueLater);
  console.log("\n\n");
  module.exports = todoList;